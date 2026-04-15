
-- Trigger for contact inquiries notification
CREATE TRIGGER on_new_contact_inquiry
  AFTER INSERT ON public.contact_inquiries
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_new_contact_inquiry();

-- Trigger for sample requests notification
CREATE TRIGGER on_new_sample_request
  AFTER INSERT ON public.sample_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_new_sample_request();
