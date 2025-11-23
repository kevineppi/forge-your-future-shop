-- Create order status enum
CREATE TYPE public.order_status AS ENUM ('pending', 'paid', 'processing', 'completed', 'cancelled');

-- Create orders table
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  total_price NUMERIC(10, 2) NOT NULL,
  status order_status NOT NULL DEFAULT 'pending',
  express_service BOOLEAN NOT NULL DEFAULT false,
  post_processing JSONB DEFAULT '[]'::jsonb,
  stripe_payment_intent_id TEXT,
  stripe_checkout_session_id TEXT,
  customer_email TEXT,
  customer_name TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create order_items table
CREATE TABLE public.order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
  file_name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  dimensions JSONB NOT NULL,
  volume NUMERIC(10, 2) NOT NULL,
  material TEXT NOT NULL,
  color TEXT NOT NULL,
  infill INTEGER NOT NULL,
  quality TEXT NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  print_time NUMERIC(10, 2) NOT NULL,
  unit_price NUMERIC(10, 2) NOT NULL,
  total_price NUMERIC(10, 2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- RLS Policies for orders table
CREATE POLICY "Users can view their own orders"
  ON public.orders
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own orders"
  ON public.orders
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own pending orders"
  ON public.orders
  FOR UPDATE
  USING (auth.uid() = user_id AND status = 'pending');

CREATE POLICY "Admins can view all orders"
  ON public.orders
  FOR SELECT
  USING (public.is_admin());

CREATE POLICY "Admins can update all orders"
  ON public.orders
  FOR UPDATE
  USING (public.is_admin());

CREATE POLICY "Admins can delete orders"
  ON public.orders
  FOR DELETE
  USING (public.is_admin());

-- RLS Policies for order_items table
CREATE POLICY "Users can view items of their own orders"
  ON public.order_items
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create items for their own orders"
  ON public.order_items
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can view all order items"
  ON public.order_items
  FOR SELECT
  USING (public.is_admin());

CREATE POLICY "Admins can manage all order items"
  ON public.order_items
  FOR ALL
  USING (public.is_admin());

-- Create trigger for updating orders.updated_at
CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better query performance
CREATE INDEX idx_orders_user_id ON public.orders(user_id);
CREATE INDEX idx_orders_status ON public.orders(status);
CREATE INDEX idx_orders_created_at ON public.orders(created_at DESC);
CREATE INDEX idx_order_items_order_id ON public.order_items(order_id);