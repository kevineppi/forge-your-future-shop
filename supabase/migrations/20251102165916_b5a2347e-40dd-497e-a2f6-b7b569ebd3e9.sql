-- Add policy to allow users to read their own roles
-- This solves the circular dependency where users need to be admin to check if they're admin

CREATE POLICY "Users can read their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);
