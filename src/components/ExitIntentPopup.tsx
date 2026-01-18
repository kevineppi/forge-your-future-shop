import { useState, useEffect } from "react";
import { X, Gift, Star, Percent, Clock, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { Badge } from "./ui/badge";

const newsletterSchema = z.object({
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255, "E-Mail darf maximal 255 Zeichen lang sein"),
});

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [hasShown, setHasShown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && !sessionStorage.getItem('exitPopupShown')) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationResult = newsletterSchema.safeParse({ email });
    
    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0];
      toast.error(firstError.message);
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await (supabase as any)
        .from('newsletter_subscribers')
        .insert([
          {
            email: validationResult.data.email,
            name: '',
            source: 'exit_intent_popup'
          }
        ]);

      if (error) {
        if (error.code === '23505') {
          toast.error("Diese E-Mail ist bereits für den Newsletter registriert.");
        } else {
          throw error;
        }
        setIsSubmitting(false);
        return;
      }

      toast.success("🎉 Ihr Rabatt-Code: WILLKOMMEN10 - Jetzt einlösen!");
      setIsOpen(false);
      setEmail("");
    } catch (error) {
      console.error('Newsletter signup error:', error);
      toast.error("Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden border-2 border-primary/20">
        <VisuallyHidden.Root>
          <DialogTitle>Erstbesteller-Rabatt sichern</DialogTitle>
        </VisuallyHidden.Root>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3 z-10 rounded-full bg-background/80 p-1.5 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none"
        >
          <X className="h-4 w-4" />
        </button>
        
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-8 text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <Gift className="w-8 h-8" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Moment! 🎁
          </h2>
          <p className="text-white/90">
            Nicht ohne Ihren Erstbesteller-Rabatt gehen!
          </p>
        </div>

        <div className="p-6 space-y-5">
          {/* Discount highlight */}
          <div className="bg-primary/5 border-2 border-dashed border-primary/30 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Percent className="w-6 h-6 text-primary" />
              <span className="text-3xl font-bold text-primary">10% RABATT</span>
            </div>
            <p className="text-sm text-muted-foreground">auf Ihre erste 3D-Druck Bestellung</p>
          </div>
          
          {/* Benefits */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-primary shrink-0" />
              <span>Ab €20 pro Teil</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-primary shrink-0" />
              <span>Express 24h möglich</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-primary shrink-0" />
              <span>Made in Austria</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-primary shrink-0" />
              <span>Gratis ab €100</span>
            </div>
          </div>
          
          {/* Google Reviews */}
          <div className="flex items-center justify-center gap-2 py-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium">5.0 bei Google</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Ihre E-Mail Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-12 text-base"
              disabled={isSubmitting}
            />
            <Button 
              type="submit" 
              className="w-full h-12 text-base" 
              variant="hero"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Wird gesendet..."
              ) : (
                <>
                  <Gift className="w-4 h-4 mr-2" />
                  Jetzt 10% Rabatt sichern
                </>
              )}
            </Button>
          </form>
          
          {/* Urgency */}
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            <span>Angebot gilt nur für Neukunden • Kein Spam</span>
          </div>
          
          {/* Skip link */}
          <button 
            onClick={() => setIsOpen(false)}
            className="block w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Nein danke, ich zahle lieber den vollen Preis
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
