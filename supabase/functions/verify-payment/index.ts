import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    );

    // Try to get authenticated user, but allow guest checkout
    let user = null;
    const authHeader = req.headers.get("Authorization");
    if (authHeader) {
      const token = authHeader.replace("Bearer ", "");
      const { data } = await supabaseClient.auth.getUser(token);
      user = data.user;
    }

    const { sessionId } = await req.json();
    console.log("Verifying payment for session:", sessionId);

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    
    if (session.payment_status !== "paid") {
      throw new Error("Payment not completed");
    }

    // Parse metadata
    const metadata = session.metadata!;
    
    // Get order items from line items with full metadata
    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId, { 
      limit: 100,
      expand: ['data.price.product']
    });
    
    const orderItems = await Promise.all(
      lineItems.data
        .filter(item => item.description !== "Standardversand" && item.description !== "Express-Versand")
        .map(async (item) => {
          // Get full product details to access metadata
          const productId = typeof item.price?.product === 'string' 
            ? item.price.product 
            : item.price?.product?.id;
          
          let productMetadata: any = {};
          if (productId) {
            try {
              const product = await stripe.products.retrieve(productId);
              productMetadata = product.metadata || {};
            } catch (e) {
              console.error("Error fetching product:", e);
            }
          }
          
          return {
            file_name: item.description || "Unknown",
            file_url: productMetadata.file_url || "pending",
            material: productMetadata.material || "PLA",
            color: productMetadata.color || "#4f46e5",
            quality: productMetadata.quality || "Standard",
            dimensions: productMetadata.dimensions ? JSON.parse(productMetadata.dimensions) : { length: 0, width: 0, height: 0 },
            volume: parseFloat(productMetadata.volume || "0"),
            print_time: parseFloat(productMetadata.print_time || "0"),
            infill: parseInt(productMetadata.infill || "20"),
            quantity: item.quantity || 1,
            unit_price: (item.amount_total || 0) / 100 / (item.quantity || 1),
            total_price: (item.amount_total || 0) / 100,
          };
        })
    );

    // Create order
    const { data: order, error: orderError } = await supabaseClient
      .from("orders")
      .insert({
        user_id: user?.id || null,
        customer_name: session.customer_details?.name || metadata.customer_email || "Guest",
        customer_email: metadata.customer_email || session.customer_details?.email || user?.email || null,
        total_price: session.amount_total! / 100,
        status: "paid",
        express_service: metadata.express_service === "true",
        notes: metadata.notes || null,
        post_processing: null, // Post processing info stored in order items
        stripe_checkout_session_id: sessionId,
        stripe_payment_intent_id: session.payment_intent as string,
        shipping_street: metadata.shipping_street || null,
        shipping_postal_code: metadata.shipping_postal_code || null,
        shipping_city: metadata.shipping_city || null,
        shipping_country: metadata.shipping_country || "Österreich",
      })
      .select()
      .single();

    if (orderError) {
      console.error("Error creating order:", orderError);
      throw orderError;
    }

    console.log("Order created:", order.id);

    // Create order items
    const itemsToInsert = orderItems.map((item: any) => ({
      order_id: order.id,
      file_name: item.file_name,
      file_url: item.file_url,
      material: item.material,
      color: item.color,
      quality: item.quality,
      dimensions: item.dimensions,
      volume: item.volume,
      print_time: item.print_time,
      infill: item.infill,
      quantity: item.quantity,
      unit_price: item.unit_price,
      total_price: item.total_price,
    }));

    const { error: itemsError } = await supabaseClient
      .from("order_items")
      .insert(itemsToInsert);

    if (itemsError) {
      console.error("Error creating order items:", itemsError);
      throw itemsError;
    }

    console.log("Order items created successfully");

    // Send order confirmation email
    try {
      const confirmationResponse = await fetch(
        `${Deno.env.get("SUPABASE_URL")}/functions/v1/send-order-confirmation`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`,
          },
          body: JSON.stringify({
            customerEmail: metadata.customer_email || session.customer_details?.email || user?.email,
            customerName: session.customer_details?.name || metadata.customer_email || "Kunde",
            orderId: order.id,
            orderNumber: order.id.split('-')[0].toUpperCase(),
            totalPrice: session.amount_total! / 100,
            orderItems: orderItems.map((item: any) => ({
              file_name: item.file_name,
              material: item.material,
              color: item.color,
              quantity: item.quantity,
              unit_price: item.unit_price,
              total_price: item.total_price,
              dimensions: item.dimensions,
            })),
            expressService: metadata.express_service === "true",
            shippingAddress: {
              street: metadata.shipping_street || null,
              postalCode: metadata.shipping_postal_code || null,
              city: metadata.shipping_city || null,
              country: metadata.shipping_country || "Österreich",
            },
          }),
        }
      );

      if (!confirmationResponse.ok) {
        console.error("Failed to send order confirmation email");
      } else {
        console.log("Order confirmation email sent successfully");
      }
    } catch (emailError) {
      console.error("Error sending confirmation email:", emailError);
      // Don't fail the whole transaction if email fails
    }

    return new Response(JSON.stringify({ 
      success: true, 
      orderId: order.id,
      orderNumber: order.id.split('-')[0].toUpperCase(),
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error verifying payment:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
