import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Phone } from "lucide-react";
import { useEffect, useState } from "react";

interface StickyCTAProps {
  regionName: string;
  deliveryTime: string;
}

const StickyCTA = ({ regionName, deliveryTime }: StickyCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border shadow-lg transform transition-transform duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-sm">
            <div className="hidden md:flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Lieferung nach {regionName}: <strong className="text-foreground">{deliveryTime}</strong></span>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>Tel: <a href="tel:+436765517197" className="text-foreground hover:text-primary">+43 676 5517197</a></span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:block">
              Messemodell benötigt?
            </span>
            <Button asChild size="sm" variant="hero">
              <Link to="/kontakt">
                Jetzt Anfrage stellen
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
