-- Create function to safely increment discount code usage
CREATE OR REPLACE FUNCTION public.increment_discount_usage(code_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.discount_codes
  SET current_uses = current_uses + 1
  WHERE id = code_id;
END;
$$;