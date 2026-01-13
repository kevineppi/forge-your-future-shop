-- Create references table for project showcase
CREATE TABLE public.references (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  industry TEXT NOT NULL,
  material TEXT NOT NULL,
  color TEXT,
  print_time_hours NUMERIC,
  weight_grams NUMERIC,
  dimensions TEXT,
  quantity INTEGER DEFAULT 1,
  delivery_days INTEGER,
  image_url TEXT,
  customer_quote TEXT,
  customer_name TEXT,
  highlights TEXT[] DEFAULT '{}',
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create categories table for dynamic category management
CREATE TABLE public.reference_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  type TEXT NOT NULL CHECK (type IN ('industry', 'material')),
  color TEXT,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on both tables
ALTER TABLE public.references ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reference_categories ENABLE ROW LEVEL SECURITY;

-- References policies
CREATE POLICY "Anyone can view active references"
  ON public.references FOR SELECT
  USING (is_active = true);

CREATE POLICY "Admins can manage references"
  ON public.references FOR ALL
  USING (is_admin())
  WITH CHECK (is_admin());

-- Categories policies
CREATE POLICY "Anyone can view active categories"
  ON public.reference_categories FOR SELECT
  USING (is_active = true);

CREATE POLICY "Admins can manage categories"
  ON public.reference_categories FOR ALL
  USING (is_admin())
  WITH CHECK (is_admin());

-- Create storage bucket for reference images (high quality, no compression)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'reference-images',
  'reference-images',
  true,
  52428800, -- 50MB limit for high-quality images
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/heic']
);

-- Storage policies for reference images
CREATE POLICY "Anyone can view reference images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'reference-images');

CREATE POLICY "Admins can upload reference images"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'reference-images' AND is_admin());

CREATE POLICY "Admins can update reference images"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'reference-images' AND is_admin());

CREATE POLICY "Admins can delete reference images"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'reference-images' AND is_admin());

-- Trigger for updated_at
CREATE TRIGGER update_references_updated_at
  BEFORE UPDATE ON public.references
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default categories
INSERT INTO public.reference_categories (name, type, sort_order) VALUES
  ('Maschinenbau', 'industry', 1),
  ('Elektrotechnik', 'industry', 2),
  ('Medizintechnik', 'industry', 3),
  ('Automatisierung', 'industry', 4),
  ('Interior Design', 'industry', 5),
  ('Instandhaltung', 'industry', 6),
  ('Automotive', 'industry', 7),
  ('Konsumgüter', 'industry', 8),
  ('PLA', 'material', 1),
  ('PETG', 'material', 2),
  ('ABS', 'material', 3),
  ('ASA', 'material', 4),
  ('TPU', 'material', 5),
  ('PA12 Nylon', 'material', 6),
  ('PA6 Nylon GF', 'material', 7);