-- Create function to notify about new sample requests
CREATE OR REPLACE FUNCTION public.notify_new_sample_request()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $function$
DECLARE
  function_url text;
BEGIN
  -- Construct the function URL using the project reference
  function_url := 'https://jkzrpjlfdsxvcfwhuoey.supabase.co/functions/v1/send-sample-request-notification';
  
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
$function$;

-- Create trigger to automatically send email notifications for new sample requests
CREATE TRIGGER notify_sample_request_submission
  AFTER INSERT ON public.sample_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_new_sample_request();