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
    
    if (!user?.email) {
      throw new Error("User not authenticated");
    }

    const { orderData } = await req.json();
    console.log("Creating checkout session for:", user.email, orderData);

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    // Check if customer exists
    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    let customerId;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    // Create line items from order data
    const lineItems = orderData.items.map((item: any) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: item.file_name,
          description: `${item.material} | ${item.color} | ${item.quality}`,
          metadata: {
            file_url: item.file_url,
            dimensions: JSON.stringify(item.dimensions),
            volume: item.volume.toString(),
            print_time: item.print_time.toString(),
            infill: item.infill.toString(),
          }
        },
        unit_amount: Math.round(item.unit_price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }));

    // Add shipping if applicable
    if (orderData.shippingCost > 0) {
      lineItems.push({
        price_data: {
          currency: "eur",
          product_data: {
            name: "Versandkosten",
            description: "Standardversand",
          },
          unit_amount: Math.round(orderData.shippingCost * 100),
        },
        quantity: 1,
      });
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : user.email,
      line_items: lineItems,
      mode: "payment",
      success_url: `${req.headers.get("origin")}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/kostenrechner?canceled=true`,
      metadata: {
        user_id: user.id,
        express_service: orderData.express_service.toString(),
        notes: orderData.notes || "",
        post_processing: JSON.stringify(orderData.post_processing || []),
        order_items: JSON.stringify(orderData.items),
      },
    });

    console.log("Checkout session created:", session.id);

    return new Response(JSON.stringify({ url: session.url, sessionId: session.id }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
