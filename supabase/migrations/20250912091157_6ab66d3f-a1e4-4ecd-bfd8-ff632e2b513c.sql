-- Create function to notify about new contact inquiries
CREATE OR REPLACE FUNCTION notify_new_contact_inquiry()
RETURNS trigger AS $$
DECLARE
  function_url text;
BEGIN
  -- Construct the function URL using the project reference
  function_url := 'https://jkzrpjlfdsxvcfwhuoey.supabase.co/functions/v1/send-contact-notification';
  
  -- Call the edge function to send notification email
  PERFORM net.http_post(
    url := function_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprenJwamxmZHN4dmNmd2h1b2V5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2NjMwNDcsImV4cCI6MjA3MzIzOTA0N30.A2LpuB8Wo7-I9YVIuESbfTsRUkAUGinrRPtHgg-f2rE'
    ),
    body := jsonb_build_object(
      'record', row_to_json(NEW)
    )
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to call the function when new contact inquiry is inserted
CREATE TRIGGER trigger_notify_new_contact_inquiry
  AFTER INSERT ON public.contact_inquiries
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_contact_inquiry();

-- Enable pg_net extension if not already enabled (for HTTP requests)
CREATE EXTENSION IF NOT EXISTS pg_net;