-- Create discount_codes table
CREATE TABLE public.discount_codes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text NOT NULL UNIQUE,
  discount_percentage integer NOT NULL CHECK (discount_percentage > 0 AND discount_percentage <= 100),
  max_uses integer,
  current_uses integer NOT NULL DEFAULT 0,
  expires_at timestamp with time zone,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  created_by uuid REFERENCES auth.users(id)
);

-- Create discount_code_usage tracking table
CREATE TABLE public.discount_code_usage (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  discount_code_id uuid NOT NULL REFERENCES public.discount_codes(id) ON DELETE CASCADE,
  order_id uuid REFERENCES public.orders(id) ON DELETE SET NULL,
  user_email text NOT NULL,
  used_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.discount_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.discount_code_usage ENABLE ROW LEVEL SECURITY;

-- RLS Policies for discount_codes
CREATE POLICY "Anyone can read active discount codes"
  ON public.discount_codes
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Admins can manage discount codes"
  ON public.discount_codes
  FOR ALL
  USING (is_admin())
  WITH CHECK (is_admin());

-- RLS Policies for discount_code_usage
CREATE POLICY "Admins can view all usage"
  ON public.discount_code_usage
  FOR SELECT
  USING (is_admin());

CREATE POLICY "Anyone can insert usage records"
  ON public.discount_code_usage
  FOR INSERT
  WITH CHECK (true);

-- Trigger for updated_at
CREATE TRIGGER update_discount_codes_updated_at
  BEFORE UPDATE ON public.discount_codes
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for faster code lookups
CREATE INDEX idx_discount_codes_code ON public.discount_codes(code) WHERE is_active = true;