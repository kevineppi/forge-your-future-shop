import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface OrderItem {
  file_name: string;
  material: string;
  color: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  quality: string;
  infill: number;
  dimensions: {
    x: number;
    y: number;
    z: number;
  };
}

interface AdminOrderNotificationRequest {
  order_id: string;
  customer_name: string;
  customer_email: string;
  total_price: number;
  express_service: boolean;
  shipping_address: {
    street: string;
    postal_code: string;
    city: string;
    country: string;
  };
  items: OrderItem[];
  notes?: string;
  discount_code?: string;
  discount_percentage?: number;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestData: AdminOrderNotificationRequest = await req.json();
    console.log("Sending admin order notification for order:", requestData.order_id);

    // Generate items HTML
    const itemsHtml = requestData.items.map((item, index) => `
      <tr style="border-bottom: 1px solid #eee;">
        <td style="padding: 12px 8px;">${index + 1}</td>
        <td style="padding: 12px 8px;">
          <strong>${item.file_name}</strong><br>
          <span style="color: #666; font-size: 13px;">
            ${item.material} - ${item.color}<br>
            Qualität: ${item.quality}, Infill: ${item.infill}%<br>
            Größe: ${item.dimensions?.x || 0}×${item.dimensions?.y || 0}×${item.dimensions?.z || 0} mm
          </span>
        </td>
        <td style="padding: 12px 8px; text-align: center;">${item.quantity || 1}</td>
        <td style="padding: 12px 8px; text-align: right;">€${(item.unit_price || 0).toFixed(2)}</td>
        <td style="padding: 12px 8px; text-align: right;"><strong>€${(item.total_price || 0).toFixed(2)}</strong></td>
      </tr>
    `).join('');

    const discountHtml = requestData.discount_code ? `
      <tr>
        <td colspan="4" style="padding: 8px; text-align: right; color: #16a34a;">
          <strong>Rabattcode "${requestData.discount_code}" (-${requestData.discount_percentage || 0}%)</strong>
        </td>
        <td style="padding: 8px; text-align: right; color: #16a34a;">
          <strong>-€${((requestData.total_price || 0) * (requestData.discount_percentage || 0) / 100).toFixed(2)}</strong>
        </td>
      </tr>
    ` : '';

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">🎉 Neue Bestellung eingegangen!</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Bestellnummer: ${requestData.order_id}</p>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <h2 style="margin: 0 0 15px 0; font-size: 18px; color: #667eea;">👤 Kundeninformationen</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #666; width: 120px;">Name:</td>
                  <td style="padding: 8px 0;"><strong>${requestData.customer_name}</strong></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666;">E-Mail:</td>
                  <td style="padding: 8px 0;"><strong>${requestData.customer_email}</strong></td>
                </tr>
              </table>
            </div>

            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <h2 style="margin: 0 0 15px 0; font-size: 18px; color: #667eea;">📦 Lieferadresse</h2>
              <p style="margin: 0; line-height: 1.8;">
                ${requestData.shipping_address.street}<br>
                ${requestData.shipping_address.postal_code} ${requestData.shipping_address.city}<br>
                ${requestData.shipping_address.country}
              </p>
            </div>

            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <h2 style="margin: 0 0 15px 0; font-size: 18px; color: #667eea;">🛒 Bestellte Artikel</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <thead>
                  <tr style="background: #f3f4f6; border-bottom: 2px solid #e5e7eb;">
                    <th style="padding: 12px 8px; text-align: left; font-weight: 600;">#</th>
                    <th style="padding: 12px 8px; text-align: left; font-weight: 600;">Artikel</th>
                    <th style="padding: 12px 8px; text-align: center; font-weight: 600;">Menge</th>
                    <th style="padding: 12px 8px; text-align: right; font-weight: 600;">Stückpreis</th>
                    <th style="padding: 12px 8px; text-align: right; font-weight: 600;">Gesamt</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsHtml}
                  ${discountHtml}
                  <tr style="background: #f3f4f6; font-size: 16px;">
                    <td colspan="4" style="padding: 12px 8px; text-align: right;"><strong>Gesamtbetrag:</strong></td>
                    <td style="padding: 12px 8px; text-align: right;"><strong style="color: #667eea;">€${(requestData.total_price || 0).toFixed(2)}</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            ${requestData.express_service ? `
              <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
                <strong style="color: #92400e;">⚡ Express-Service aktiviert</strong>
                <p style="margin: 5px 0 0 0; color: #92400e;">Diese Bestellung benötigt bevorzugte Bearbeitung!</p>
              </div>
            ` : ''}

            ${requestData.notes ? `
              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <h2 style="margin: 0 0 15px 0; font-size: 18px; color: #667eea;">📝 Notizen</h2>
                <p style="margin: 0; color: #666; white-space: pre-wrap;">${requestData.notes}</p>
              </div>
            ` : ''}

            <div style="text-align: center; padding-top: 20px;">
              <a href="https://supabase.com/dashboard/project/jkzrpjlfdsxvcfwhuoey" 
                 style="display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600;">
                🔧 Zum Admin-Dashboard
              </a>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #666; font-size: 13px;">
              <p style="margin: 0;">Diese E-Mail wurde automatisch generiert.</p>
              <p style="margin: 5px 0 0 0;">ekdruck.at © ${new Date().getFullYear()}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: "ekdruck Bestellungen <noreply@ekdruck.at>",
      to: ["office@ekdruck.at"], // Admin E-Mail
      subject: `🎉 Neue Bestellung #${requestData.order_id.slice(0, 8)} - €${(requestData.total_price || 0).toFixed(2)}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Error sending admin notification:", error);
      throw error;
    }

    console.log("Admin order notification sent successfully:", data);

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-admin-order-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
