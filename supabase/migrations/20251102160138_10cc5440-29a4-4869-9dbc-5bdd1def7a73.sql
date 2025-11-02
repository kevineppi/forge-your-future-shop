-- Create chat_logs table for storing AI chat conversations
CREATE TABLE IF NOT EXISTS public.chat_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  session_id TEXT NOT NULL,
  user_message TEXT NOT NULL,
  assistant_message TEXT NOT NULL,
  message_timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  had_context BOOLEAN DEFAULT false,
  sources JSONB DEFAULT '[]'::jsonb,
  actions JSONB DEFAULT '[]'::jsonb,
  user_ip TEXT,
  user_agent TEXT
);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_chat_logs_session_id ON public.chat_logs(session_id);
CREATE INDEX IF NOT EXISTS idx_chat_logs_created_at ON public.chat_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_chat_logs_user_message ON public.chat_logs USING gin(to_tsvector('german', user_message));

-- Enable Row Level Security
ALTER TABLE public.chat_logs ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert chat logs
CREATE POLICY "Anyone can insert chat logs"
  ON public.chat_logs
  FOR INSERT
  WITH CHECK (true);

-- Policy: Only admins can view chat logs
CREATE POLICY "Only admins can view chat logs"
  ON public.chat_logs
  FOR SELECT
  USING (is_admin());

-- Policy: Only admins can delete old chat logs
CREATE POLICY "Only admins can delete chat logs"
  ON public.chat_logs
  FOR DELETE
  USING (is_admin());

-- Create a view for frequently asked questions analysis
CREATE OR REPLACE VIEW public.chat_analytics AS
SELECT 
  user_message,
  COUNT(*) as question_count,
  MAX(created_at) as last_asked,
  ARRAY_AGG(DISTINCT assistant_message) as different_answers
FROM public.chat_logs
GROUP BY user_message
ORDER BY question_count DESC;

-- Grant access to admins
GRANT SELECT ON public.chat_analytics TO authenticated;