-- First, create user roles system to prevent security vulnerabilities
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Create user_roles table for role management
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Create function to check if current user is admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.has_role(auth.uid(), 'admin')
$$;

-- Drop the insecure policies
DROP POLICY IF EXISTS "Enable read access for all users" ON public.contact_inquiries;
DROP POLICY IF EXISTS "Enable insert access for all users" ON public.contact_inquiries;
DROP POLICY IF EXISTS "Enable update access for all users" ON public.contact_inquiries;

-- Create secure policies for contact_inquiries
-- Only allow public users to insert (submit contact forms)
CREATE POLICY "Allow public contact form submissions" ON public.contact_inquiries
  FOR INSERT WITH CHECK (true);

-- Only allow authenticated admins to read contact inquiries
CREATE POLICY "Admins can view all contact inquiries" ON public.contact_inquiries
  FOR SELECT TO authenticated
  USING (public.is_admin());

-- Only allow authenticated admins to update contact inquiries
CREATE POLICY "Admins can update contact inquiries" ON public.contact_inquiries
  FOR UPDATE TO authenticated
  USING (public.is_admin());

-- Only allow authenticated admins to delete contact inquiries  
CREATE POLICY "Admins can delete contact inquiries" ON public.contact_inquiries
  FOR DELETE TO authenticated
  USING (public.is_admin());

-- Create policy for user_roles (only admins can manage roles)
CREATE POLICY "Admins can manage user roles" ON public.user_roles
  FOR ALL TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());