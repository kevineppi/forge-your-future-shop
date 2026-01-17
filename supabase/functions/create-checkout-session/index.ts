import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Validation constants
const MAX_ITEMS = 50;
const MAX_PRICE = 100000; // 100,000 EUR max per item
const MIN_PRICE = 0.01;
const MAX_QUANTITY = 1000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate email format
function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email) && email.length <= 255;
}

// Validate file URL is from authorized storage
function isValidFileUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  try {
    const parsed = new URL(url);
    // Allow Supabase storage URLs only
    return parsed.hostname.includes('supabase.co') || 
           parsed.hostname.includes('supabase.in');
  } catch {
    return false;
  }
}

// Sanitize string for metadata (max length)
function sanitizeString(str: string | undefined | null, maxLength: number): string {
  if (!str || typeof str !== 'string') return '';
  return str.substring(0, maxLength).replace(/[<>]/g, '');
}

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
    
    // Validate orderData structure
    if (!orderData || typeof orderData !== 'object') {
      throw new Error("Invalid order data");
    }

    // Validate items array
    if (!Array.isArray(orderData.items) || orderData.items.length === 0) {
      throw new Error("Order must contain at least one item");
    }

    if (orderData.items.length > MAX_ITEMS) {
      throw new Error(`Order cannot contain more than ${MAX_ITEMS} items`);
    }

    // Use guest email if user is not authenticated
    if (!userEmail) {
      userEmail = orderData.guestEmail;
      if (!userEmail) {
        throw new Error("Email address is required");
      }
    }

    // Validate email format
    if (!isValidEmail(userEmail)) {
      throw new Error("Invalid email format");
    }

    // Validate each item
    for (const item of orderData.items) {
      // Validate file URL
      if (!isValidFileUrl(item.file_url)) {
        throw new Error("Invalid file URL - only authorized storage URLs are allowed");
      }

      // Validate prices
      if (typeof item.unit_price !== 'number' || item.unit_price < MIN_PRICE || item.unit_price > MAX_PRICE) {
        throw new Error(`Invalid item price. Must be between ${MIN_PRICE} and ${MAX_PRICE} EUR`);
      }

      // Validate quantity
      if (typeof item.quantity !== 'number' || item.quantity < 1 || item.quantity > MAX_QUANTITY) {
        throw new Error(`Invalid quantity. Must be between 1 and ${MAX_QUANTITY}`);
      }

      // Validate required string fields
      if (!item.file_name || typeof item.file_name !== 'string') {
        throw new Error("Invalid file name");
      }

      if (!item.material || typeof item.material !== 'string') {
        throw new Error("Invalid material");
      }
    }
    
    console.log("Creating checkout session for:", userEmail);

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    // Check if customer exists
    const customers = await stripe.customers.list({ email: userEmail, limit: 1 });
    let customerId;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    // Create line items from order data with sanitized metadata
    const lineItems = orderData.items.map((item: any) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: sanitizeString(item.file_name, 100),
          description: `${sanitizeString(item.material, 50)} | ${sanitizeString(item.color, 50)} | ${sanitizeString(item.quality, 50)}`,
          metadata: {
            file_url: item.file_url.substring(0, 500),
            dimensions: JSON.stringify(item.dimensions).substring(0, 200),
            volume: String(item.volume).substring(0, 20),
            print_time: String(item.print_time).substring(0, 20),
            infill: String(item.infill).substring(0, 10),
            material: sanitizeString(item.material, 50),
            color: sanitizeString(item.color, 50),
            quality: sanitizeString(item.quality, 50),
          }
        },
        unit_amount: Math.round(item.unit_price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }));

    // Add shipping if applicable
    if (orderData.shippingCost && orderData.shippingCost > 0 && orderData.shippingCost < 1000) {
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

    // Calculate total with validation
    const totalAmount = orderData.items.reduce((sum: number, item: any) => 
      sum + (item.unit_price * item.quantity), 0) + (orderData.shippingCost || 0);

    // Create session with sanitized metadata
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : userEmail,
      line_items: lineItems,
      mode: "payment",
      success_url: `${req.headers.get("origin")}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/kostenrechner?canceled=true`,
      metadata: {
        user_id: user?.id || "guest",
        customer_email: userEmail,
        express_service: String(!!orderData.express_service),
        notes: sanitizeString(orderData.notes, 400),
        item_count: String(orderData.items.length),
        total_amount: totalAmount.toFixed(2),
        shipping_street: sanitizeString(orderData.shippingAddress?.street, 200),
        shipping_postal_code: sanitizeString(orderData.shippingAddress?.postalCode, 20),
        shipping_city: sanitizeString(orderData.shippingAddress?.city, 100),
        shipping_country: sanitizeString(orderData.shippingAddress?.country, 100),
        discount_code_id: sanitizeString(orderData.discountCode?.codeId, 50),
        discount_code: sanitizeString(orderData.discountCode?.code, 50),
        discount_percentage: orderData.discountCode?.percentage ? String(orderData.discountCode.percentage) : "",
      },
    });

    console.log("Checkout session created:", session.id);

    return new Response(JSON.stringify({ url: session.url, sessionId: session.id }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    // Return generic error message to client
    return new Response(JSON.stringify({ error: "Failed to create checkout session. Please try again." }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
