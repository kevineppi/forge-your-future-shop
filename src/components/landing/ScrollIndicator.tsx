import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide after scrolling 200px
      setIsVisible(window.scrollY < 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    // Scroll to next section smoothly
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: "smooth"
    });
  };

  if (!isVisible) return null;

  return (
    <div className="flex justify-center py-8 relative z-10">
      <button
        onClick={handleClick}
        className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        aria-label="Nach unten scrollen"
      >
        <span className="text-sm font-medium tracking-wide uppercase">Mehr entdecken</span>
        <div className="relative">
          {/* Outer ring animation */}
          <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-primary/20 animate-ping" />
          
          {/* Main button */}
          <div className="relative w-12 h-12 rounded-full border-2 border-border bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </button>
    </div>
  );
};

export default ScrollIndicator;
