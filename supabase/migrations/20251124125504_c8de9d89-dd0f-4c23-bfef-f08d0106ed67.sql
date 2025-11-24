-- Add shipping address fields to orders table
ALTER TABLE public.orders 
ADD COLUMN IF NOT EXISTS shipping_street TEXT,
ADD COLUMN IF NOT EXISTS shipping_postal_code TEXT,
ADD COLUMN IF NOT EXISTS shipping_city TEXT,
ADD COLUMN IF NOT EXISTS shipping_country TEXT DEFAULT 'Österreich';