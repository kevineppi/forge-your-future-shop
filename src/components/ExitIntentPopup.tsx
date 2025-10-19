import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const emailSchema = z.object({
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255),
  name: z.string().trim().min(1, "Name ist erforderlich").max(100)
});

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if already shown in this session
    const hasSeenPopup = sessionStorage.getItem("exitIntentShown");
    if (hasSeenPopup) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves viewport from top
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    // Add delay before activating exit intent
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000); // Wait 5 seconds before activating

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationResult = emailSchema.safeParse({ email, name });
    
    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0];
      toast({
        title: "Fehler",
        description: firstError.message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([
          {
            email: validationResult.data.email,
            name: validationResult.data.name,
            source: 'exit_intent_popup'
          }
        ]);

      if (error) throw error;

      toast({
        title: "Vielen Dank!",
        description: "Sie erhalten den Material-Guide in Kürze per E-Mail.",
      });

      setIsOpen(false);
      setEmail("");
      setName("");
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Download className="h-6 w-6 text-primary" />
            Gratis Material-Guide
          </DialogTitle>
          <DialogDescription className="text-base pt-2">
            Bevor Sie gehen: Laden Sie unseren kostenlosen 3D-Druck Material-Guide herunter!
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="bg-primary/5 rounded-lg p-4 space-y-2">
            <p className="text-sm font-medium">✓ Übersicht aller FDM-Materialien</p>
            <p className="text-sm font-medium">✓ Mechanische Eigenschaften</p>
            <p className="text-sm font-medium">✓ Anwendungsempfehlungen</p>
            <p className="text-sm font-medium">✓ Preis-Vergleiche</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Ihr Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              <Download className="mr-2 h-4 w-4" />
              {isSubmitting ? "Wird gesendet..." : "Gratis Guide erhalten"}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center">
            Kein Spam. Sie können sich jederzeit abmelden.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
