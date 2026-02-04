import { useEffect, useState } from "react";
import { 
  Layers, 
  Trophy,
  CheckCircle,
  Clock
} from "lucide-react";

interface FloatingShowcaseProps {
  regionName: string;
  stats: {
    messen: string;
    lieferzeit: string;
    kunden: string;
  };
}

const FloatingShowcase = ({ regionName, stats }: FloatingShowcaseProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-[400px] lg:h-[480px]">
      {/* Subtle gradient background */}
      <div 
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
          transition: 'transform 0.4s ease-out'
        }}
      />

      {/* Main stat card - Messen */}
      <div 
        className={`absolute top-8 right-4 lg:right-8 transition-all duration-700 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
        style={{
          transform: `translate(${mousePosition.x * -0.15}px, ${mousePosition.y * -0.15}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-5 lg:p-6 shadow-xl min-w-[180px] lg:min-w-[200px]">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-4 h-4 text-primary-foreground/70" />
            <span className="text-primary-foreground/70 text-xs font-medium">Projekte</span>
          </div>
          <div className="text-4xl lg:text-5xl font-bold text-primary-foreground">{stats.messen}</div>
          <div className="text-primary-foreground/60 text-sm mt-1">in {regionName}</div>
        </div>
      </div>

      {/* Secondary stat - Lieferzeit */}
      <div 
        className={`absolute top-36 lg:top-44 left-0 lg:left-4 transition-all duration-700 delay-150 ${
          isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'
        }`}
        style={{
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          transition: 'transform 0.35s ease-out'
        }}
      >
        <div className="bg-card/95 backdrop-blur-sm rounded-xl p-4 lg:p-5 shadow-lg border border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-xl lg:text-2xl font-bold text-foreground">{stats.lieferzeit}</div>
              <div className="text-xs text-muted-foreground">Lieferzeit</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tertiary stat - Kunden */}
      <div 
        className={`absolute bottom-16 lg:bottom-20 right-8 lg:right-16 transition-all duration-700 delay-300 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
        style={{
          transform: `translate(${mousePosition.x * -0.08}px, ${mousePosition.y * -0.08}px)`,
          transition: 'transform 0.4s ease-out'
        }}
      >
        <div className="bg-card/95 backdrop-blur-sm rounded-xl p-4 lg:p-5 shadow-lg border border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-xl lg:text-2xl font-bold text-foreground">{stats.kunden}</div>
              <div className="text-xs text-muted-foreground">Kunden</div>
            </div>
          </div>
        </div>
      </div>

      {/* Abstract geometric element */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 delay-200 ${
          isLoaded ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}
        style={{
          transform: `translate(calc(-50% + ${mousePosition.x * 0.05}px), calc(-50% + ${mousePosition.y * 0.05}px))`,
          transition: 'transform 0.4s ease-out'
        }}
      >
        <div className="relative w-20 h-20 lg:w-24 lg:h-24">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute inset-0 border border-primary/20 rounded-xl"
              style={{
                transform: `translateY(${-i * 6}px) rotate(${45 + i * 3}deg) scale(${1 - i * 0.1})`,
                opacity: 0.6 - i * 0.15
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingShowcase;
