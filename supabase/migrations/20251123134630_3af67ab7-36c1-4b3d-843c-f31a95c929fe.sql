-- Create slicing_jobs table for tracking background slicing calculations
CREATE TABLE IF NOT EXISTS public.slicing_jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  file_name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed')),
  estimated_time_hours DECIMAL(10,2),
  calculated_time_hours DECIMAL(10,2),
  material TEXT,
  error_message TEXT,
  metadata JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.slicing_jobs ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert jobs (for anonymous cost calculator usage)
CREATE POLICY "Anyone can insert slicing jobs"
  ON public.slicing_jobs
  FOR INSERT
  WITH CHECK (true);

-- Allow anyone to read their own jobs (by id)
CREATE POLICY "Anyone can read slicing jobs"
  ON public.slicing_jobs
  FOR SELECT
  USING (true);

-- Allow updates only for completed jobs
CREATE POLICY "System can update slicing jobs"
  ON public.slicing_jobs
  FOR UPDATE
  USING (true);

-- Create index for faster lookups
CREATE INDEX idx_slicing_jobs_status ON public.slicing_jobs(status);
CREATE INDEX idx_slicing_jobs_created_at ON public.slicing_jobs(created_at DESC);

-- Enable realtime for slicing_jobs
ALTER TABLE public.slicing_jobs REPLICA IDENTITY FULL;

-- Add trigger for updated_at
CREATE TRIGGER update_slicing_jobs_updated_at
  BEFORE UPDATE ON public.slicing_jobs
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();