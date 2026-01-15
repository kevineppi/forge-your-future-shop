import { Button } from "@/components/ui/button";
import { Upload, ArrowRight, Star } from "lucide-react";
import { lazy, Suspense } from "react";

const Hero3DAnimation = lazy(() => import("@/components/Hero3DAnimation"));

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-20 overflow-hidden">
      {/* 3D Animation Background */}
      <Suspense fallback={null}>
        <Hero3DAnimation />
      </Suspense>
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none z-[1]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Simple trust indicator */}
          <div className="inline-flex items-center gap-1.5 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>5.0 bei Google</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight">
            Nachhaltiger <span className="text-gradient">3D-Druck</span> aus Österreich
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Professioneller FDM 3D-Druck mit österreichischem Filament. 
            Laden Sie Ihre Datei hoch und erhalten Sie sofort Ihren Preis.
          </p>

          {/* Single focused CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              variant="hero" 
              size="lg" 
              className="group text-base px-8 py-6" 
              onClick={() => window.location.href = '/3d-druck-bestellen'}
            >
              <Upload className="mr-2 h-5 w-5" />
              Jetzt Preis berechnen
              <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Button>
          </div>
          
          {/* Subtle info line */}
          <p className="text-sm text-muted-foreground">
            Ab €20 · Express 24h möglich · Versandkostenfrei ab €100
          </p>
        </div>
      </div>

      {/* Subtle decorations */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/30 to-transparent pointer-events-none" />
    </section>
  );
};
export default Hero;