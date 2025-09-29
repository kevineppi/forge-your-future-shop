-- Allow anonymous users to upload files to the probeteile folder
CREATE POLICY "Allow anonymous uploads to probeteile folder" 
ON storage.objects 
FOR INSERT 
WITH CHECK (
  bucket_id = 'project-files' AND 
  (storage.foldername(name))[1] = 'probeteile'
);

-- Allow anonymous users to read files from the probeteile folder (if needed for admin review)
CREATE POLICY "Allow anonymous read from probeteile folder" 
ON storage.objects 
FOR SELECT 
USING (
  bucket_id = 'project-files' AND 
  (storage.foldername(name))[1] = 'probeteile'
);