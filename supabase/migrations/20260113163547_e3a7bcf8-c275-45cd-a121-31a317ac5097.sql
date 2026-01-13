-- Create reference_images table for multiple images per reference
CREATE TABLE public.reference_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  reference_id UUID NOT NULL REFERENCES public.references(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  thumbnail_url TEXT,
  sort_order INTEGER DEFAULT 0,
  alt_text TEXT,
  is_primary BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.reference_images ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Reference images are viewable by everyone" 
ON public.reference_images 
FOR SELECT 
USING (true);

-- Admin write access
CREATE POLICY "Admins can manage reference images"
ON public.reference_images
FOR ALL
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- Create index for efficient lookups
CREATE INDEX idx_reference_images_reference_id ON public.reference_images(reference_id);
CREATE INDEX idx_reference_images_sort_order ON public.reference_images(reference_id, sort_order);