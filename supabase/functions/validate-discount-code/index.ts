import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
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

    const { code } = await req.json();
    
    if (!code || typeof code !== 'string') {
      return new Response(
        JSON.stringify({ error: "Rabattcode ist erforderlich" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }

    console.log("Validating discount code:", code);

    // Fetch the discount code
    const { data: discountCode, error: fetchError } = await supabaseClient
      .from("discount_codes")
      .select("*")
      .eq("code", code.toUpperCase())
      .eq("is_active", true)
      .single();

    if (fetchError || !discountCode) {
      console.log("Discount code not found:", code);
      return new Response(
        JSON.stringify({ error: "Ungültiger Rabattcode" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 404 }
      );
    }

    // Check expiration
    if (discountCode.expires_at) {
      const expirationDate = new Date(discountCode.expires_at);
      if (expirationDate < new Date()) {
        console.log("Discount code expired:", code);
        return new Response(
          JSON.stringify({ error: "Dieser Rabattcode ist abgelaufen" }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
        );
      }
    }

    // Check usage limit
    if (discountCode.max_uses !== null && discountCode.current_uses >= discountCode.max_uses) {
      console.log("Discount code usage limit reached:", code);
      return new Response(
        JSON.stringify({ error: "Dieser Rabattcode wurde bereits vollständig eingelöst" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }

    console.log("Discount code validated successfully:", {
      code: discountCode.code,
      discount: discountCode.discount_percentage,
      remaining_uses: discountCode.max_uses !== null 
        ? discountCode.max_uses - discountCode.current_uses 
        : "unlimited"
    });

    return new Response(
      JSON.stringify({
        valid: true,
        discount_percentage: discountCode.discount_percentage,
        code_id: discountCode.id,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
    );
  } catch (error) {
    console.error("Error validating discount code:", error);
    return new Response(
      JSON.stringify({ error: "Fehler bei der Validierung des Rabattcodes" }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
