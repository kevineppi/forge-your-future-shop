import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4'

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactNotificationRequest {
  record: {
    id: string;
    name: string;
    email: string;
    project_type?: string;
    timeline?: string;
    message?: string;
    created_at: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Contact notification function called");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { record }: ContactNotificationRequest = await req.json();
    console.log("Processing contact form submission:", record.id);

    // Format the email content
    const emailContent = `
      <h2>Neue Kontaktanfrage von EK-Druck</h2>
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h3>Kundendaten:</h3>
        <p><strong>Name:</strong> ${record.name}</p>
        <p><strong>E-Mail:</strong> ${record.email}</p>
        ${record.project_type ? `<p><strong>Projektart:</strong> ${record.project_type}</p>` : ''}
        ${record.timeline ? `<p><strong>Zeitrahmen:</strong> ${record.timeline}</p>` : ''}
        
        <h3>Nachricht:</h3>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
          ${record.message ? record.message.replace(/\n/g, '<br>') : 'Keine Nachricht hinterlassen'}
        </div>
        
        <p><strong>Eingereicht am:</strong> ${new Date(record.created_at).toLocaleString('de-DE')}</p>
        
        <hr style="margin: 20px 0;">
        <p style="color: #666; font-size: 12px;">
          Diese E-Mail wurde automatisch generiert, wenn eine neue Kontaktanfrage über die EK-Druck Website eingereicht wird.
        </p>
      </div>
    `;

    // Send notification email
    const emailResponse = await resend.emails.send({
      from: "EK-Druck Kontaktformular <noreply@ek-druck.at>",
      to: ["office@ek-druck.at"], // Updated to your preferred notification email
      subject: `Neue Kontaktanfrage von ${record.name}`,
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
    console.error("Error in send-contact-notification function:", error);
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