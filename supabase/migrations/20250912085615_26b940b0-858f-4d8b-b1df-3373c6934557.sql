-- Add SELECT policies for contact_inquiries table
-- Only admins should be able to view contact inquiries
CREATE POLICY "Only admins can view contact inquiries" 
ON public.contact_inquiries 
FOR SELECT 
USING (is_admin());

-- Add SELECT policy for user_roles table  
-- Only admins should be able to view user roles
CREATE POLICY "Only admins can view user roles"
ON public.user_roles
FOR SELECT
USING (is_admin());