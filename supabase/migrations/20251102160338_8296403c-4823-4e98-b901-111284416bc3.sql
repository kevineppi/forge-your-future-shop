-- Drop the existing view
DROP VIEW IF EXISTS public.chat_analytics;

-- Recreate the view with explicit SECURITY INVOKER (respects calling user's permissions)
CREATE OR REPLACE VIEW public.chat_analytics
WITH (security_invoker = true)
AS
SELECT 
  user_message,
  COUNT(*) as question_count,
  MAX(created_at) as last_asked,
  ARRAY_AGG(DISTINCT assistant_message) as different_answers
FROM public.chat_logs
GROUP BY user_message
ORDER BY question_count DESC;

-- Grant access to authenticated users (admins will be able to query via RLS)
GRANT SELECT ON public.chat_analytics TO authenticated;