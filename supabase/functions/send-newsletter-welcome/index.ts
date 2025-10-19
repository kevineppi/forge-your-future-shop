import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface NewsletterWelcomeRequest {
  name: string;
  email: string;
  discountCode: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, discountCode }: NewsletterWelcomeRequest = await req.json();

    console.log("Sending newsletter welcome email to:", email);

    const emailResponse = await resend.emails.send({
      from: "ekdruck <noreply@ek-druck.at>",
      to: [email],
      subject: "Willkommen! Ihr 10% Rabattcode für 3D-Druck",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background: #f9fafb;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .discount-code {
              background: white;
              border: 2px dashed #667eea;
              padding: 20px;
              text-align: center;
              margin: 20px 0;
              border-radius: 10px;
            }
            .code {
              font-size: 32px;
              font-weight: bold;
              color: #667eea;
              letter-spacing: 3px;
              margin: 10px 0;
            }
            .benefits {
              background: white;
              padding: 20px;
              border-radius: 10px;
              margin: 20px 0;
            }
            .benefit-item {
              padding: 10px 0;
              border-bottom: 1px solid #e5e7eb;
            }
            .benefit-item:last-child {
              border-bottom: none;
            }
            .cta-button {
              display: inline-block;
              background: #667eea;
              color: white;
              padding: 15px 30px;
              text-decoration: none;
              border-radius: 8px;
              margin: 20px 0;
              font-weight: bold;
            }
            .footer {
              text-align: center;
              color: #6b7280;
              font-size: 14px;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Willkommen bei ekdruck!</h1>
            <p>Ihr professioneller 3D-Druck Partner aus Österreich</p>
          </div>
          
          <div class="content">
            <h2>Hallo ${name},</h2>
            
            <p>vielen Dank für Ihre Anmeldung zum ekdruck Newsletter! Als Willkommensgeschenk erhalten Sie einen <strong>exklusiven 10% Rabatt</strong> auf Ihre erste Bestellung.</p>
            
            <div class="discount-code">
              <p style="margin: 0; color: #6b7280;">Ihr Rabattcode:</p>
              <div class="code">${discountCode}</div>
              <p style="margin: 10px 0 0 0; color: #6b7280; font-size: 14px;">Gültig für Ihre erste Bestellung</p>
            </div>
            
            <h3>So lösen Sie Ihren Rabatt ein:</h3>
            <ol>
              <li>Senden Sie uns Ihre 3D-Druck Anfrage über unsere Website</li>
              <li>Geben Sie den Rabattcode <strong>${discountCode}</strong> bei Ihrer Anfrage an</li>
              <li>Erhalten Sie 10% Rabatt auf Ihre erste Bestellung</li>
            </ol>
            
            <div style="text-align: center;">
              <a href="https://ek-druck.at/#contact" class="cta-button">Jetzt Projekt starten</a>
            </div>
            
            <div class="benefits">
              <h3>Das erwartet Sie im Newsletter:</h3>
              <div class="benefit-item">✓ Exklusive 3D-Druck Tipps & Tricks</div>
              <div class="benefit-item">✓ Neue Material-Guides & Anleitungen</div>
              <div class="benefit-item">✓ Spezielle Angebote nur für Abonnenten</div>
              <div class="benefit-item">✓ Neuigkeiten zu nachhaltigen Materialien</div>
              <div class="benefit-item">✓ Praxisbeispiele aus Österreich</div>
            </div>
            
            <h3>Warum ekdruck?</h3>
            <p>
              🇦🇹 <strong>100% Österreichisch:</strong> Materialien & Produktion aus Österreich<br>
              🌱 <strong>Nachhaltig:</strong> Umweltfreundliche Materialien & kurze Transportwege<br>
              ⚡ <strong>Schnell:</strong> Express-Service in 24-48 Stunden verfügbar<br>
              🎯 <strong>Präzise:</strong> Hochwertige FDM-Technologie mit 0,1mm Auflösung
            </p>
            
            <p>
              Haben Sie Fragen? Kontaktieren Sie uns jederzeit:<br>
              📧 <a href="mailto:office@ek-druck.at">office@ek-druck.at</a><br>
              📞 <a href="tel:+436765517197">+43 676 5517197</a>
            </p>
            
            <p>
              Wir freuen uns darauf, Ihr nächstes 3D-Druck Projekt zu realisieren!
            </p>
            
            <p>
              Beste Grüße,<br>
              <strong>Ihr ekdruck Team</strong><br>
              Oberösterreich
            </p>
          </div>
          
          <div class="footer">
            <p>
              ekdruck e.U.<br>
              Negrellistraße 15, 4623 Gunskirchen<br>
              Oberösterreich, Österreich
            </p>
            <p style="font-size: 12px; margin-top: 20px;">
              Sie erhalten diese E-Mail, weil Sie sich für den ekdruck Newsletter angemeldet haben.<br>
              <a href="https://ek-druck.at/impressum" style="color: #6b7280;">Impressum</a> | 
              <a href="mailto:office@ek-druck.at?subject=Newsletter abbestellen" style="color: #6b7280;">Abmelden</a>
            </p>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Newsletter welcome email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-newsletter-welcome function:", error);
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
