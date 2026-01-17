-- Fix RLS policy "Anyone can insert usage records" on discount_code_usage
-- Change from WITH CHECK (true) to proper validation
DROP POLICY IF EXISTS "Anyone can insert usage records" ON public.discount_code_usage;

CREATE POLICY "Anyone can insert usage records"
ON public.discount_code_usage
FOR INSERT
WITH CHECK (
  -- Ensure the discount_code_id references a valid active discount code
  EXISTS (
    SELECT 1 FROM public.discount_codes 
    WHERE id = discount_code_id 
    AND is_active = true
    AND (max_uses IS NULL OR current_uses < max_uses)
    AND (expires_at IS NULL OR expires_at > now())
  )
);

-- Fix RLS policy "Reference images are viewable by everyone" on reference_images
-- Change from USING (true) to check if the parent reference is active
DROP POLICY IF EXISTS "Reference images are viewable by everyone" ON public.reference_images;

CREATE POLICY "Reference images are viewable by everyone"
ON public.reference_images
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.references 
    WHERE id = reference_id 
    AND is_active = true
  )
);