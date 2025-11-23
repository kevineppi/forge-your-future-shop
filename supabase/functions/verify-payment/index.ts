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
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    const authHeader = req.headers.get("Authorization")!;
    const token = authHeader.replace("Bearer ", "");
    const { data } = await supabaseClient.auth.getUser(token);
    const user = data.user;
    
    if (!user) {
      throw new Error("User not authenticated");
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
    const orderItems = JSON.parse(metadata.order_items);
    const postProcessing = metadata.post_processing ? JSON.parse(metadata.post_processing) : [];

    // Create order
    const { data: order, error: orderError } = await supabaseClient
      .from("orders")
      .insert({
        user_id: user.id,
        customer_name: session.customer_details?.name || user.email,
        customer_email: session.customer_details?.email || user.email,
        total_price: session.amount_total! / 100,
        status: "paid",
        express_service: metadata.express_service === "true",
        notes: metadata.notes || null,
        post_processing: postProcessing.length > 0 ? postProcessing : null,
        stripe_checkout_session_id: sessionId,
        stripe_payment_intent_id: session.payment_intent as string,
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
