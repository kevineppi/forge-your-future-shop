import { useEffect, useState } from "react";
import { 
  Box, 
  Layers, 
  Sparkles, 
  Trophy,
  CheckCircle,
  ArrowDown,
  Zap
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
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-[450px] lg:h-[550px]">
      {/* Animated gradient orbs */}
      <div 
        className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-primary/30 to-primary/5 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      <div 
        className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-2xl"
        style={{
          transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
          transition: 'transform 0.4s ease-out'
        }}
      />

      {/* Main floating card - Big stat */}
      <div 
        className={`absolute top-4 right-0 lg:right-8 transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
        style={{
          transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px) rotate(-2deg)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <div className="relative group cursor-default">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/60 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
          
          <div className="relative bg-gradient-to-br from-primary via-primary to-primary/90 rounded-3xl p-6 lg:p-8 shadow-2xl border border-primary-foreground/10 min-w-[200px] lg:min-w-[260px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-primary-foreground/80 text-sm font-medium">Erfolge</span>
            </div>
            <div className="text-5xl lg:text-6xl font-bold text-primary-foreground mb-2">{stats.messen}</div>
            <div className="text-primary-foreground/70 text-sm">Messen in {regionName}</div>
            
            {/* Animated shine */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating stat card 1 - Lieferzeit */}
      <div 
        className={`absolute top-40 lg:top-48 left-0 lg:left-4 transform transition-all duration-1000 delay-200 ${
          isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
        }`}
        style={{
          transform: `translate(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px) rotate(3deg)`,
          transition: 'transform 0.25s ease-out'
        }}
      >
        <div className="bg-card/95 backdrop-blur-md rounded-2xl p-5 lg:p-6 shadow-xl border border-border/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-default">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <Layers className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-primary">{stats.lieferzeit}</div>
              <div className="text-sm text-muted-foreground">Lieferzeit</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating stat card 2 - Kunden */}
      <div 
        className={`absolute bottom-20 lg:bottom-24 right-4 lg:right-12 transform transition-all duration-1000 delay-300 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
        style={{
          transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px) rotate(-1deg)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <div className="bg-card/95 backdrop-blur-md rounded-2xl p-5 lg:p-6 shadow-xl border border-border/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-default">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-primary">{stats.kunden}</div>
              <div className="text-sm text-muted-foreground">Kunden</div>
            </div>
          </div>
        </div>
      </div>

      {/* Central 3D visual element */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 delay-100 ${
          isLoaded ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}
        style={{
          transform: `translate(calc(-50% + ${mousePosition.x * 0.08}px), calc(-50% + ${mousePosition.y * 0.08}px))`,
          transition: 'transform 0.35s ease-out'
        }}
      >
        {/* Abstract 3D representation */}
        <div className="relative w-28 h-28 lg:w-36 lg:h-36">
          {/* Spinning layers */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 border-2 border-primary/30 rounded-2xl"
              style={{
                transform: `translateY(${-i * 8}px) rotate(${45 + i * 5}deg) scale(${1 - i * 0.08})`,
                opacity: 1 - i * 0.2,
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
          
          {/* Center cube face */}
          <div 
            className="absolute inset-4 bg-gradient-to-br from-muted via-muted/80 to-muted/50 rounded-xl shadow-inner"
            style={{ transform: 'rotate(45deg)' }}
          />
          
          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1.5 h-1.5 rounded-full bg-primary/50"
              style={{
                top: `${10 + Math.sin(i * 0.8) * 45}%`,
                left: `${10 + Math.cos(i * 0.8) * 45}%`,
                animation: `float ${2 + i * 0.2}s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Feature badges floating */}
      <div 
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 lg:gap-3 transition-all duration-1000 delay-500 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm px-3 lg:px-4 py-2 rounded-full border border-border/50 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-default">
          <Box className="w-4 h-4 text-primary" />
          <span className="text-xs lg:text-sm font-medium">3D-Druck</span>
        </div>
        <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm px-3 lg:px-4 py-2 rounded-full border border-border/50 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-default">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs lg:text-sm font-medium">Premium</span>
        </div>
        <div className="flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-3 lg:px-4 py-2 rounded-full border border-primary/20 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-default">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-xs lg:text-sm font-medium text-primary">Express</span>
        </div>
      </div>
    </div>
  );
};

export default FloatingShowcase;
