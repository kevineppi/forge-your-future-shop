-- Create enum for project status
CREATE TYPE public.project_status AS ENUM ('uploaded', 'analyzing', 'quote_ready', 'quote_sent', 'paid', 'in_production', 'completed', 'cancelled');

-- Create projects table for 3D printing requests
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  file_url TEXT NOT NULL,
  file_name TEXT NOT NULL,
  file_size BIGINT NOT NULL,
  volume_cm3 DECIMAL(10,3),
  material TEXT,
  complexity_level INTEGER DEFAULT 1,
  estimated_price DECIMAL(10,2),
  final_price DECIMAL(10,2),
  quote_file_url TEXT,
  status project_status NOT NULL DEFAULT 'uploaded',
  payment_intent_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create policies for projects
CREATE POLICY "Users can view their own projects" 
ON public.projects 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own projects" 
ON public.projects 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own projects" 
ON public.projects 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all projects" 
ON public.projects 
FOR SELECT 
USING (is_admin());

CREATE POLICY "Admins can update all projects" 
ON public.projects 
FOR UPDATE 
USING (is_admin());

-- Create storage bucket for project files
INSERT INTO storage.buckets (id, name, public) VALUES ('project-files', 'project-files', false);

-- Create storage policies for project files
CREATE POLICY "Users can upload their own project files" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'project-files' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can view their own project files" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'project-files' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Admins can view all project files" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'project-files' AND is_admin());

CREATE POLICY "Admins can upload quote files" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'project-files' AND is_admin());

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_projects_updated_at
BEFORE UPDATE ON public.projects
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();