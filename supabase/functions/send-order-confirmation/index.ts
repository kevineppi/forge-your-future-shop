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
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
}

interface OrderConfirmationRequest {
  customerEmail: string;
  customerName: string;
  orderId: string;
  orderNumber: string;
  totalPrice: number;
  orderItems: OrderItem[];
  expressService: boolean;
  shippingAddress: {
    street?: string;
    postalCode?: string;
    city?: string;
    country?: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      customerEmail,
      customerName,
      orderId,
      orderNumber,
      totalPrice,
      orderItems,
      expressService,
      shippingAddress
    }: OrderConfirmationRequest = await req.json();

    console.log("Sending order confirmation to:", customerEmail);

    // Build order items HTML
    const orderItemsHtml = orderItems.map((item, index) => `
      <tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 12px 8px;">
          <strong>${item.file_name}</strong><br/>
          <small style="color: #6b7280;">
            Material: ${item.material} | 
            ${item.dimensions ? `${item.dimensions.length.toFixed(0)}×${item.dimensions.width.toFixed(0)}×${item.dimensions.height.toFixed(0)} mm` : ''}
          </small>
        </td>
        <td style="padding: 12px 8px; text-align: center;">${item.quantity || 1}</td>
        <td style="padding: 12px 8px; text-align: right;">€${(item.unit_price || 0).toFixed(2)}</td>
        <td style="padding: 12px 8px; text-align: right;"><strong>€${(item.total_price || 0).toFixed(2)}</strong></td>
      </tr>
    `).join('');

    const deliveryTime = expressService ? "24-48 Stunden" : "3-5 Werktage";
    
    const shippingAddressHtml = shippingAddress.street ? `
      <div style="margin-top: 24px; padding: 16px; background-color: #f9fafb; border-radius: 8px;">
        <h3 style="margin: 0 0 8px 0; font-size: 16px; color: #1f2937;">Lieferadresse</h3>
        <p style="margin: 0; color: #4b5563;">
          ${shippingAddress.street}<br/>
          ${shippingAddress.postalCode} ${shippingAddress.city}<br/>
          ${shippingAddress.country || 'Österreich'}
        </p>
      </div>
    ` : '';

    const emailResponse = await resend.emails.send({
      from: "ekdruck <noreply@ekdruck.at>",
      to: [customerEmail],
      subject: `Bestellbestätigung #${orderNumber} - ekdruck 3D-Druck Service`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 20px;">
          
          <!-- Header -->
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #4f46e5; margin: 0; font-size: 28px;">ekdruck</h1>
            <p style="color: #6b7280; margin: 8px 0 0 0;">Professioneller 3D-Druck Service</p>
          </div>

          <!-- Success Message -->
          <div style="background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: white; padding: 24px; border-radius: 12px; margin-bottom: 24px; text-align: center;">
            <h2 style="margin: 0 0 8px 0; font-size: 24px;">✓ Bestellung erfolgreich!</h2>
            <p style="margin: 0; font-size: 16px; opacity: 0.9;">Vielen Dank für Ihre Bestellung bei ekdruck</p>
          </div>

          <!-- Greeting -->
          <p style="font-size: 16px; margin-bottom: 16px;">
            Hallo ${customerName},
          </p>
          
          <p style="margin-bottom: 24px;">
            Ihre Bestellung wurde erfolgreich aufgegeben und wird nun bearbeitet. Hier sind Ihre Bestelldetails:
          </p>

          <!-- Order Info -->
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0;"><strong>Bestellnummer:</strong></td>
                <td style="padding: 8px 0; text-align: right; color: #4f46e5; font-weight: 600;">#${orderNumber}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Lieferzeit:</strong></td>
                <td style="padding: 8px 0; text-align: right;">${deliveryTime}</td>
              </tr>
              ${expressService ? `
              <tr>
                <td style="padding: 8px 0;"><strong>Service:</strong></td>
                <td style="padding: 8px 0; text-align: right;"><span style="background-color: #fef3c7; color: #92400e; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">⚡ EXPRESS</span></td>
              </tr>
              ` : ''}
            </table>
          </div>

          <!-- Order Items -->
          <div style="margin-bottom: 24px;">
            <h3 style="font-size: 18px; margin-bottom: 16px; color: #1f2937;">Ihre Bestellung</h3>
            <table style="width: 100%; border-collapse: collapse; background-color: white; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
              <thead>
                <tr style="background-color: #f9fafb; border-bottom: 2px solid #e5e7eb;">
                  <th style="padding: 12px 8px; text-align: left; font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase;">Artikel</th>
                  <th style="padding: 12px 8px; text-align: center; font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase;">Menge</th>
                  <th style="padding: 12px 8px; text-align: right; font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase;">Stk. Preis</th>
                  <th style="padding: 12px 8px; text-align: right; font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase;">Gesamt</th>
                </tr>
              </thead>
              <tbody>
                ${orderItemsHtml}
              </tbody>
              <tfoot>
                <tr style="background-color: #f9fafb; border-top: 2px solid #e5e7eb;">
                  <td colspan="3" style="padding: 16px 8px; text-align: right; font-weight: 600; font-size: 16px;">Gesamtsumme:</td>
                  <td style="padding: 16px 8px; text-align: right; font-weight: 700; font-size: 18px; color: #4f46e5;">€${(totalPrice || 0).toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          ${shippingAddressHtml}

          <!-- Next Steps -->
          <div style="background-color: #eff6ff; border-left: 4px solid #4f46e5; padding: 16px; margin: 24px 0; border-radius: 4px;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; color: #1e40af;">Was passiert als Nächstes?</h3>
            <ol style="margin: 8px 0; padding-left: 20px; color: #1e40af;">
              <li style="margin-bottom: 4px;">Wir beginnen umgehend mit der Produktion Ihrer Teile</li>
              <li style="margin-bottom: 4px;">Qualitätsprüfung vor dem Versand</li>
              <li style="margin-bottom: 4px;">Sie erhalten eine Versandbenachrichtigung mit Tracking-Nummer</li>
              <li>Lieferung innerhalb von ${deliveryTime}</li>
            </ol>
          </div>

          <!-- CTA -->
          <div style="text-align: center; margin: 32px 0;">
            <a href="https://www.ekdruck.at/meine-bestellungen" style="display: inline-block; background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
              Meine Bestellungen ansehen
            </a>
          </div>

          <!-- Support -->
          <div style="margin-top: 32px; padding-top: 24px; border-top: 2px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
            <p style="margin: 0 0 8px 0;">
              <strong>Fragen zu Ihrer Bestellung?</strong>
            </p>
            <p style="margin: 0;">
              Kontaktieren Sie uns per E-Mail: <a href="mailto:info@ekdruck.at" style="color: #4f46e5; text-decoration: none;">info@ekdruck.at</a><br/>
              oder nutzen Sie unseren KI-Chat auf <a href="https://www.ekdruck.at" style="color: #4f46e5; text-decoration: none;">www.ekdruck.at</a>
            </p>
          </div>

          <!-- Footer -->
          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb; text-align: center; color: #9ca3af; font-size: 12px;">
            <p style="margin: 0 0 8px 0;">
              <strong style="color: #4f46e5;">ekdruck e.U.</strong><br/>
              Professioneller 3D-Druck Service aus Oberösterreich
            </p>
            <p style="margin: 0;">
              © ${new Date().getFullYear()} ekdruck e.U. Alle Rechte vorbehalten.
            </p>
          </div>

        </body>
        </html>
      `,
    });

    if (emailResponse.error) {
      throw emailResponse.error;
    }

    console.log("Order confirmation email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailId: emailResponse.data?.id }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error sending order confirmation email:", error);
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
