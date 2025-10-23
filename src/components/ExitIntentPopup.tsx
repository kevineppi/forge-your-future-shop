import { useState, useEffect } from "react";
import { X, Gift } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { toast } from "sonner";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [hasShown, setHasShown] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send to backend/newsletter service
      console.log('Newsletter signup:', email);
      toast.success("Vielen Dank! Check deine E-Mails für den Rabatt-Code! 🎉");
      setIsOpen(false);
      setEmail("");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
        </button>
        
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Gift className="w-6 h-6 text-primary" />
            Warten Sie! 🎁
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">
              Newsletter-Rabatt sichern!
            </h3>
            <p className="text-muted-foreground">
              Erhalten Sie <strong className="text-primary">10% Rabatt</strong> auf Ihre erste Bestellung, wenn Sie sich für unseren Newsletter anmelden!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Ihre E-Mail Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
            <Button type="submit" className="w-full" variant="hero">
              Jetzt 10% Rabatt sichern
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center">
            100% kostenlos & unverbindlich. Keine Spam-Mails.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
