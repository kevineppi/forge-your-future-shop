import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

serve(async (req) => {
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");

  if (!signature || !webhookSecret) {
    console.error("Missing signature or webhook secret");
    return new Response(JSON.stringify({ error: "Webhook configuration error" }), {
      status: 400,
    });
  }

  try {
    const body = await req.text();
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    // Verify webhook signature
    let event: Stripe.Event;
    try {
      event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret);
    } catch (err) {
      console.error("Webhook signature verification failed:", err);
      return new Response(JSON.stringify({ error: "Invalid signature" }), {
        status: 400,
      });
    }

    console.log("Webhook event received:", event.type, event.id);

    // Only process checkout.session.completed events
    if (event.type !== "checkout.session.completed") {
      return new Response(JSON.stringify({ received: true }), { status: 200 });
    }

    const session = event.data.object as Stripe.Checkout.Session;
    
    if (session.payment_status !== "paid") {
      console.log("Payment not completed, skipping order creation");
      return new Response(JSON.stringify({ received: true }), { status: 200 });
    }

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

    // Check if order already exists (prevent duplicates)
    const { data: existingOrder } = await supabaseClient
      .from("orders")
      .select("id")
      .eq("stripe_checkout_session_id", session.id)
      .single();

    if (existingOrder) {
      console.log("Order already exists for session:", session.id);
      return new Response(JSON.stringify({ received: true, existing: true }), { status: 200 });
    }

    // Parse metadata
    const metadata = session.metadata!;
    
    // Get order items from line items with full metadata
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { 
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
        user_id: metadata.user_id !== "guest" ? metadata.user_id : null,
        customer_name: session.customer_details?.name || metadata.customer_email || "Guest",
        customer_email: metadata.customer_email || session.customer_details?.email || null,
        total_price: session.amount_total! / 100,
        status: "paid",
        express_service: metadata.express_service === "true",
        notes: metadata.notes || null,
        post_processing: null,
        stripe_checkout_session_id: session.id,
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

    console.log("Order created via webhook:", order.id);

    // Track discount code usage if applicable
    if (metadata.discount_code_id && metadata.discount_code) {
      console.log("Recording discount code usage:", metadata.discount_code);
      
      try {
        // Increment usage count
        const { error: updateError } = await supabaseClient.rpc('increment_discount_usage', {
          code_id: metadata.discount_code_id
        });
        
        if (updateError) {
          console.error("Failed to update discount code usage:", updateError);
        }

        // Record usage in tracking table
        const { error: usageError } = await supabaseClient
          .from('discount_code_usage')
          .insert({
            discount_code_id: metadata.discount_code_id,
            order_id: order.id,
            user_email: metadata.customer_email || session.customer_details?.email || "unknown",
          });

        if (usageError) {
          console.error("Failed to record discount code usage:", usageError);
        }
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
      throw itemsError;
    }

    console.log("Order items created successfully via webhook");

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

      if (!confirmationResponse.ok) {
        console.error("Failed to send order confirmation email");
      } else {
        console.log("Order confirmation email sent successfully via webhook");
      }
    } catch (emailError) {
      console.error("Error sending confirmation email:", emailError);
    }

    // Send admin notification email
    try {
      const adminNotificationResponse = await fetch(
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

      if (!adminNotificationResponse.ok) {
        console.error("Failed to send admin notification email");
      } else {
        console.log("Admin notification email sent successfully via webhook");
      }
    } catch (adminEmailError) {
      console.error("Error sending admin notification email:", adminEmailError);
    }

    return new Response(JSON.stringify({ received: true, orderId: order.id }), {
      status: 200,
    });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
});
