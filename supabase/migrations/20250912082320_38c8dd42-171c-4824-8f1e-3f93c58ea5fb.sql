-- Create storage bucket for contact form files
INSERT INTO storage.buckets (id, name, public) VALUES ('contact-files', 'contact-files', false);

-- Create storage policies for contact file uploads
CREATE POLICY "Anyone can upload contact files" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'contact-files');

CREATE POLICY "Admins can view contact files" ON storage.objects
  FOR SELECT USING (bucket_id = 'contact-files' AND public.is_admin());

CREATE POLICY "Admins can delete contact files" ON storage.objects  
  FOR DELETE USING (bucket_id = 'contact-files' AND public.is_admin());

-- Add file_urls column to contact_inquiries table
ALTER TABLE public.contact_inquiries 
ADD COLUMN file_urls TEXT[];