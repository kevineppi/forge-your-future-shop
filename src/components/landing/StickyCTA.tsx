import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Phone, 
  Clock,
  X,
  Sparkles
} from "lucide-react";

interface StickyCTAProps {
  regionName: string;
  deliveryTime: string;
}

const StickyCTA = ({ regionName, deliveryTime }: StickyCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      const scrolled = window.scrollY > 400;
      setIsVisible(scrolled && !isDismissed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in">
      {/* Gradient blur backdrop */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-transparent backdrop-blur-lg" />
      
      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
          {/* Left: Info */}
          <div className="flex items-center gap-6">
            {/* Animated icon */}
            <div className="hidden sm:flex w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 items-center justify-center shadow-lg shadow-primary/20">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            
            <div className="text-center sm:text-left">
              <div className="font-bold text-lg">
                Messemodelle für {regionName}
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {deliveryTime} Lieferzeit
                </span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline">Express 24h möglich</span>
              </div>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <Button 
              asChild 
              variant="outline" 
              size="sm"
              className="hidden sm:flex"
            >
              <a href="tel:+436765517197">
                <Phone className="w-4 h-4 mr-2" />
                Anrufen
              </a>
            </Button>
            
            <Button asChild size="sm" className="shadow-lg shadow-primary/20">
              <Link to="/kontakt">
                Anfrage stellen
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="h-8 w-8 shrink-0"
              onClick={() => setIsDismissed(true)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
