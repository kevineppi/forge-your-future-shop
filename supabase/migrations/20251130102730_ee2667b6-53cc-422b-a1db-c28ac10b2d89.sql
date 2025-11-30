-- Allow null user_id for guest checkouts
ALTER TABLE public.orders ALTER COLUMN user_id DROP NOT NULL;

-- Add comment to clarify
COMMENT ON COLUMN public.orders.user_id IS 'User ID from auth.users, NULL for guest checkouts';