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
    const { paymentIds } = await req.json();
    console.log("Restoring orders for payment IDs:", paymentIds);

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

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

    const results = [];

    for (const paymentId of paymentIds) {
      try {
        console.log("Processing payment ID:", paymentId);
        
        // Find the checkout session for this payment
        let sessionId: string | null = null;
        
        if (paymentId.startsWith('ch_')) {
          // It's a charge ID, get payment intent first
          const charge = await stripe.charges.retrieve(paymentId);
          const paymentIntentId = charge.payment_intent as string;
          
          // Find session by payment intent
          const sessions = await stripe.checkout.sessions.list({
            payment_intent: paymentIntentId,
            limit: 1,
          });
          
          if (sessions.data.length > 0) {
            sessionId = sessions.data[0].id;
          }
        } else if (paymentId.startsWith('pi_')) {
          // It's a payment intent ID
          const sessions = await stripe.checkout.sessions.list({
            payment_intent: paymentId,
            limit: 1,
          });
          
          if (sessions.data.length > 0) {
            sessionId = sessions.data[0].id;
          }
        } else if (paymentId.startsWith('cs_')) {
          // It's already a session ID
          sessionId = paymentId;
        }

        if (!sessionId) {
          console.error("Could not find session for payment ID:", paymentId);
          results.push({ paymentId, success: false, error: "Session not found" });
          continue;
        }

        console.log("Found session ID:", sessionId);

        // Check if order already exists
        const { data: existingOrder } = await supabaseClient
          .from("orders")
          .select("id")
          .eq("stripe_checkout_session_id", sessionId)
          .single();

        if (existingOrder) {
          console.log("Order already exists for session:", sessionId);
          results.push({ paymentId, sessionId, success: true, orderId: existingOrder.id, existing: true });
          continue;
        }

        // Retrieve full session details
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        
        if (session.payment_status !== "paid") {
          console.error("Payment not completed for session:", sessionId);
          results.push({ paymentId, sessionId, success: false, error: "Payment not completed" });
          continue;
        }

        // Parse metadata
        const metadata = session.metadata!;
        
        // Get order items from line items
        const lineItems = await stripe.checkout.sessions.listLineItems(sessionId, { 
          limit: 100,
          expand: ['data.price.product']
        });
        
        const orderItems = await Promise.all(
          lineItems.data
            .filter(item => item.description !== "Standardversand" && item.description !== "Express-Versand" && item.description !== "Versandkosten")
            .map(async (item) => {
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
            user_id: metadata.user_id !== "guest" ? metadata.user_id : null,
            customer_name: session.customer_details?.name || metadata.customer_email || "Guest",
            customer_email: metadata.customer_email || session.customer_details?.email || null,
            total_price: session.amount_total! / 100,
            status: "paid",
            express_service: metadata.express_service === "true",
            notes: metadata.notes || null,
            post_processing: null,
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
          results.push({ paymentId, sessionId, success: false, error: orderError.message });
          continue;
        }

        console.log("Order restored:", order.id);

        // Track discount code usage if applicable
        if (metadata.discount_code_id && metadata.discount_code) {
          console.log("Recording discount code usage:", metadata.discount_code);
          
          try {
            await supabaseClient.rpc('increment_discount_usage', {
              code_id: metadata.discount_code_id
            });

            await supabaseClient
              .from('discount_code_usage')
              .insert({
                discount_code_id: metadata.discount_code_id,
                order_id: order.id,
                user_email: metadata.customer_email || session.customer_details?.email || "unknown",
              });
          } catch (discountError) {
            console.error("Error tracking discount code:", discountError);
          }
        }

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
          results.push({ paymentId, sessionId, orderId: order.id, success: false, error: itemsError.message });
          continue;
        }

        // Send order confirmation email
        try {
          await fetch(
            `${Deno.env.get("SUPABASE_URL")}/functions/v1/send-order-confirmation`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`,
              },
              body: JSON.stringify({
                customerEmail: metadata.customer_email || session.customer_details?.email,
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
          console.log("Confirmation email sent for order:", order.id);
        } catch (emailError) {
          console.error("Error sending confirmation email:", emailError);
        }

        // Send admin notification email
        try {
          await fetch(
            `${Deno.env.get("SUPABASE_URL")}/functions/v1/send-admin-order-notification`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`,
              },
              body: JSON.stringify({
                order_id: order.id,
                customer_name: session.customer_details?.name || metadata.customer_email || "Kunde",
                customer_email: metadata.customer_email || session.customer_details?.email,
                total_price: session.amount_total! / 100,
                express_service: metadata.express_service === "true",
                shipping_address: {
                  street: metadata.shipping_street || null,
                  postal_code: metadata.shipping_postal_code || null,
                  city: metadata.shipping_city || null,
                  country: metadata.shipping_country || "Österreich",
                },
                items: orderItems,
                notes: metadata.notes || null,
                discount_code: metadata.discount_code || null,
                discount_percentage: metadata.discount_percentage ? parseInt(metadata.discount_percentage) : null,
              }),
            }
          );
          console.log("Admin notification email sent for order:", order.id);
        } catch (adminEmailError) {
          console.error("Error sending admin notification email:", adminEmailError);
        }

        results.push({ 
          paymentId, 
          sessionId, 
          orderId: order.id, 
          orderNumber: order.id.split('-')[0].toUpperCase(),
          success: true 
        });

      } catch (error) {
        console.error("Error processing payment ID:", paymentId, error);
        results.push({ paymentId, success: false, error: error.message });
      }
    }

    return new Response(JSON.stringify({ results }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error in restore-order function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
