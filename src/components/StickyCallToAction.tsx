import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";

const StickyCallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show after scrolling 100vh, hide when near contact section
      const contactSection = document.getElementById('contact');
      const contactTop = contactSection?.offsetTop || 0;
      
      if (scrollY > windowHeight && scrollY < contactTop - windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHide = () => {
    setIsHidden(true);
  };

  if (isHidden || !isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden animate-fade-in">
      <div className="bg-card border border-border rounded-full shadow-lg p-2 flex items-center gap-2">
        <Button
          onClick={handleClick}
          className="rounded-full px-6 py-3 text-sm font-medium"
          size="sm"
        >
          Angebot anfordern
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={handleHide}
          className="p-2 rounded-full"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default StickyCallToAction;