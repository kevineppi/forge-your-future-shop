import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface SampleRequestNotificationRequest {
  record: {
    id: string;
    company_name: string;
    contact_person: string;
    email: string;
    phone: string;
    planned_quantity: string;
    project_description: string;
    timeline: string;
    material: string;
    file_urls?: string[];
    created_at: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Sample request notification function called");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { record }: SampleRequestNotificationRequest = await req.json();
    console.log("Processing sample request submission:", record.id);

    // Format the email content
    const emailContent = `
      <h2>Neue Probeteile-Anfrage von EK-Druck</h2>
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h3>Unternehmensdaten:</h3>
        <p><strong>Unternehmen:</strong> ${record.company_name}</p>
        <p><strong>Ansprechpartner:</strong> ${record.contact_person}</p>
        <p><strong>E-Mail:</strong> ${record.email}</p>
        <p><strong>Telefon:</strong> ${record.phone}</p>
        
        <h3>Projektdetails:</h3>
        <p><strong>Geplante Stückzahl:</strong> ${record.planned_quantity}</p>
        <p><strong>Zeitrahmen:</strong> ${record.timeline}</p>
        <p><strong>Material:</strong> ${record.material}</p>
        
        <h3>Projektbeschreibung:</h3>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
          ${record.project_description.replace(/\n/g, '<br>')}
        </div>
        
        ${record.file_urls && record.file_urls.length > 0 ? `
        <h3>Hochgeladene Dateien:</h3>
        <ul>
          ${record.file_urls.map(url => `<li><a href="${url}" target="_blank">${url.split('/').pop()}</a></li>`).join('')}
        </ul>
        ` : ''}
        
        <p><strong>Eingereicht am:</strong> ${new Date(record.created_at).toLocaleString('de-DE')}</p>
        
        <hr style="margin: 20px 0;">
        <p style="color: #666; font-size: 12px;">
          Diese E-Mail wurde automatisch generiert, wenn eine neue Probeteile-Anfrage über die EK-Druck Website eingereicht wird.
        </p>
      </div>
    `;

    // Send notification email
    const emailResponse = await resend.emails.send({
      from: "EK-Druck Probeteile <noreply@ek-druck.at>",
      to: ["office@ek-druck.at"],
      subject: `Neue Probeteile-Anfrage von ${record.company_name}`,
      html: emailContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      messageId: emailResponse.data?.id 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-sample-request-notification function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);