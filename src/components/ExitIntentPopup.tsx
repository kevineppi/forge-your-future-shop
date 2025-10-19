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
import { Gift, Mail, CheckCircle } from "lucide-react";
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
  const [isSuccess, setIsSuccess] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
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

  const generateDiscountCode = () => {
    const code = "3DDRUCK10";
    return code;
  };

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
      const code = generateDiscountCode();
      
      // Save to database
      const { error: dbError } = await supabase
        .from('newsletter_subscribers')
        .insert([
          {
            email: validationResult.data.email,
            name: validationResult.data.name,
            source: 'exit_intent_popup'
          }
        ]);

      if (dbError) throw dbError;

      // Send welcome email with discount code
      const { error: emailError } = await supabase.functions.invoke('send-newsletter-welcome', {
        body: {
          email: validationResult.data.email,
          name: validationResult.data.name,
          discountCode: code
        }
      });

      if (emailError) {
        console.error("Email sending failed:", emailError);
        // Don't fail the whole process if email fails
      }

      setDiscountCode(code);
      setIsSuccess(true);

      toast({
        title: "Willkommen im Newsletter!",
        description: "Ihr 10% Rabattcode wurde an Ihre E-Mail gesendet.",
      });

    } catch (error) {
      console.error("Newsletter signup error:", error);
      toast({
        title: "Fehler",
        description: "Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(discountCode);
    toast({
      title: "Kopiert!",
      description: "Rabattcode wurde in die Zwischenablage kopiert.",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        {!isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-2">
                <Gift className="h-6 w-6 text-primary" />
                10% Rabatt sichern!
              </DialogTitle>
              <DialogDescription className="text-base pt-2">
                Melden Sie sich für unseren Newsletter an und erhalten Sie sofort <strong>10% Rabatt</strong> auf Ihre erste Bestellung!
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              <div className="bg-primary/5 rounded-lg p-4 space-y-2">
                <p className="text-sm font-medium">✓ Exklusive 3D-Druck Tipps & Tricks</p>
                <p className="text-sm font-medium">✓ Neue Material-Guides & Anleitungen</p>
                <p className="text-sm font-medium">✓ Spezielle Angebote nur für Abonnenten</p>
                <p className="text-sm font-medium text-primary">✓ 10% Willkommensrabatt</p>
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
                  size="lg"
                  disabled={isSubmitting}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Wird gesendet..." : "10% Rabatt sichern"}
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center">
                Kein Spam. Abmeldung jederzeit möglich. Datenschutz garantiert.
              </p>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <DialogTitle className="text-2xl">Willkommen im Newsletter!</DialogTitle>
                <DialogDescription className="text-base">
                  Vielen Dank für Ihre Anmeldung. Hier ist Ihr exklusiver Rabattcode:
                </DialogDescription>
              </div>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 text-center border-2 border-primary/20">
                <p className="text-sm text-muted-foreground mb-2">Ihr Rabattcode:</p>
                <p className="text-3xl font-bold text-primary mb-4 tracking-wider">{discountCode}</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={copyToClipboard}
                >
                  Code kopieren
                </Button>
              </div>

              <div className="bg-muted/30 rounded-lg p-4 space-y-2">
                <p className="text-sm font-medium">So verwenden Sie Ihren Rabatt:</p>
                <p className="text-sm text-muted-foreground">1. Kontaktieren Sie uns für Ihr 3D-Druck Projekt</p>
                <p className="text-sm text-muted-foreground">2. Geben Sie den Code bei Ihrer Anfrage an</p>
                <p className="text-sm text-muted-foreground">3. Erhalten Sie 10% Rabatt auf Ihre erste Bestellung</p>
              </div>

              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-4">
                  Eine Bestätigungsmail mit allen Details wurde an {email} gesendet.
                </p>
                <Button 
                  onClick={() => {
                    setIsOpen(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full"
                  size="lg"
                >
                  Jetzt Projekt starten
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
