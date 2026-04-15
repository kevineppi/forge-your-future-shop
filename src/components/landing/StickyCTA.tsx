import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, X, Zap } from "lucide-react";

interface StickyCTAProps {
  regionName?: string;
  deliveryTime?: string;
}

const StickyCTA = ({ regionName, deliveryTime }: StickyCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600 && !isDismissed);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  const headline = regionName
    ? `Messemodelle für ${regionName}`
    : "Angebot in 6h – kostenlos";

  const subline = deliveryTime
    ? `${deliveryTime} Lieferzeit · Express 24h möglich`
    : "Express 24h · Versandkostenfrei ab €100 · Made in Austria";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in">
      <div className="absolute inset-0 bg-background/95 backdrop-blur-md border-t border-border/60" />

      <div className="container mx-auto px-4 py-3 relative">
        <div className="flex items-center justify-between gap-4 max-w-5xl mx-auto">
          {/* Left */}
          <div className="flex items-center gap-4 min-w-0">
            <div className="hidden sm:flex w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="font-bold text-sm truncate">{headline}</p>
              <p className="text-xs text-muted-foreground truncate">{subline}</p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 shrink-0">
            <Button asChild variant="ghost" size="sm" className="hidden sm:flex">
              <a href="tel:+436765517197">
                <Phone className="w-4 h-4 mr-1.5" />
                Anrufen
              </a>
            </Button>

            <Button asChild size="sm" variant="cta" className="group rounded-xl">
              <Link to="/kontakt">
                Anfrage stellen
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 shrink-0 hover:bg-destructive/10 hover:text-destructive"
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
