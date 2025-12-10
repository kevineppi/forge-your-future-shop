-- Drop the existing permissive SELECT policy
DROP POLICY IF EXISTS "Only authenticated users can view subscribers" ON public.newsletter_subscribers;

-- Create new restrictive policy for admin-only access
CREATE POLICY "Only admins can view subscribers" 
ON public.newsletter_subscribers 
FOR SELECT 
USING (is_admin());