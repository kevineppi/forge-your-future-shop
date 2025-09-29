-- Create sample_requests table for probeteile requests
CREATE TABLE public.sample_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  planned_quantity TEXT NOT NULL,
  project_description TEXT NOT NULL,
  timeline TEXT NOT NULL,
  material TEXT NOT NULL,
  file_urls TEXT[],
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.sample_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert sample requests (public form)
CREATE POLICY "Anyone can create sample requests" 
ON public.sample_requests 
FOR INSERT 
WITH CHECK (true);

-- Only admins can view sample requests
CREATE POLICY "Only admins can view sample requests" 
ON public.sample_requests 
FOR SELECT 
USING (is_admin());

-- Only admins can update sample requests
CREATE POLICY "Only admins can update sample requests" 
ON public.sample_requests 
FOR UPDATE 
USING (is_admin());

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_sample_requests_updated_at
BEFORE UPDATE ON public.sample_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();