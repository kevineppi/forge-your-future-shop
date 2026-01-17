-- Fix search_path for SECURITY DEFINER functions to prevent privilege escalation

-- Fix notify_new_sample_request function
CREATE OR REPLACE FUNCTION public.notify_new_sample_request()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = public
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

-- Fix notify_new_contact_inquiry function
CREATE OR REPLACE FUNCTION public.notify_new_contact_inquiry()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = public
AS $function$
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
$function$;