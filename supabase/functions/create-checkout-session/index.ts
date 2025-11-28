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

    // Try to get authenticated user, but allow guest checkout
    let user = null;
    let userEmail = null;
    
    const authHeader = req.headers.get("Authorization");
    if (authHeader) {
      const token = authHeader.replace("Bearer ", "");
      const { data } = await supabaseClient.auth.getUser(token);
      user = data.user;
      userEmail = user?.email;
    }

    const { orderData } = await req.json();
    
    // Use guest email if user is not authenticated
    if (!userEmail) {
      userEmail = orderData.guestEmail;
      if (!userEmail) {
        throw new Error("Email address is required");
      }
    }
    
    console.log("Creating checkout session for:", userEmail, orderData);

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    // Check if customer exists
    const customers = await stripe.customers.list({ email: userEmail, limit: 1 });
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
            material: item.material,
            color: item.color,
            quality: item.quality,
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

    // Apply discount if provided
    const discounts = [];
    if (orderData.discountCode) {
      // Verify and increment discount code usage
      const { data: discountCodeData, error: discountError } = await supabaseClient
        .from("discount_codes")
        .select("*")
        .eq("id", orderData.discountCode.codeId)
        .single();

      if (!discountError && discountCodeData) {
        // Check if code is still valid
        const isValid = 
          discountCodeData.is_active &&
          (!discountCodeData.expires_at || new Date(discountCodeData.expires_at) > new Date()) &&
          (discountCodeData.max_uses === null || discountCodeData.current_uses < discountCodeData.max_uses);

        if (isValid) {
          // Create Stripe coupon for this discount
          const coupon = await stripe.coupons.create({
            percent_off: orderData.discountCode.percentage,
            duration: "once",
            name: orderData.discountCode.code,
          });

          discounts.push({ coupon: coupon.id });
          
          console.log("Applied discount code:", orderData.discountCode.code, `${orderData.discountCode.percentage}%`);
        } else {
          console.log("Discount code is no longer valid:", orderData.discountCode.code);
        }
      }
    }

    // Store order data separately to avoid Stripe metadata size limits
    // Metadata in Stripe has a 500 character limit per field
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : userEmail,
      line_items: lineItems,
      mode: "payment",
      discounts: discounts.length > 0 ? discounts : undefined,
      success_url: `${req.headers.get("origin")}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/kostenrechner?canceled=true`,
      metadata: {
        user_id: user?.id || "guest",
        customer_email: userEmail,
        express_service: orderData.express_service.toString(),
        notes: (orderData.notes || "").substring(0, 400), // Limit to avoid size issues
        item_count: orderData.items.length.toString(),
        total_amount: (orderData.items.reduce((sum: number, item: any) => sum + item.total_price, 0) + (orderData.shippingCost || 0)).toFixed(2),
        shipping_street: (orderData.shippingAddress?.street || "").substring(0, 200),
        shipping_postal_code: (orderData.shippingAddress?.postalCode || "").substring(0, 20),
        shipping_city: (orderData.shippingAddress?.city || "").substring(0, 100),
        shipping_country: (orderData.shippingAddress?.country || "").substring(0, 100),
        discount_code_id: orderData.discountCode?.codeId || "",
        discount_code: orderData.discountCode?.code || "",
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
