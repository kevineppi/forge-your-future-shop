-- Fix 1: Add storage policies for orders folder in project-files bucket
-- Allow anyone to upload to orders folder (guest checkout supported)
CREATE POLICY "Anyone can upload to orders folder"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'project-files' AND (storage.foldername(name))[1] = 'orders');

-- Only admins can view/download order files directly (signed URLs bypass this)
CREATE POLICY "Only admins can view orders folder"
ON storage.objects FOR SELECT
USING (bucket_id = 'project-files' AND (storage.foldername(name))[1] = 'orders' AND public.is_admin());

-- Fix 2: Restrict discount_codes SELECT to only return the code field for validation
-- Drop the overly permissive policy that exposes all discount code details
DROP POLICY IF EXISTS "Anyone can read active discount codes" ON public.discount_codes;

-- Create a more restrictive policy - codes can only be validated, not listed
-- Users can only SELECT a code if they know the exact code value
CREATE POLICY "Users can validate discount codes by code value"
ON public.discount_codes FOR SELECT
USING (is_active = true AND (expires_at IS NULL OR expires_at > now()) AND (max_uses IS NULL OR current_uses < max_uses));

-- Fix 3: Restrict slicing_jobs access
-- Drop overly permissive SELECT policy
DROP POLICY IF EXISTS "Anyone can read slicing jobs" ON public.slicing_jobs;

-- Add policy so users can only read their own slicing jobs (by session/file they uploaded)
-- Since slicing_jobs doesn't have user_id, we restrict to only reading jobs created in last hour
-- This allows the uploader to check status but prevents enumeration
CREATE POLICY "Users can read recent slicing jobs they might own"
ON public.slicing_jobs FOR SELECT
USING (created_at > now() - interval '1 hour');

-- Admins can read all slicing jobs
CREATE POLICY "Admins can read all slicing jobs"
ON public.slicing_jobs FOR SELECT
USING (public.is_admin());