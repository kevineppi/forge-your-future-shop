import { Button } from "@/components/ui/button";
import { ShoppingCart, Play, Upload, Star, Clock, Truck } from "lucide-react";
import { lazy, Suspense } from "react";
import { Badge } from "@/components/ui/badge";

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
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 pointer-events-none z-[1]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Google Reviews Badge */}
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6 animate-fade-in">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium">5.0 bei Google</span>
            <span className="text-xs text-muted-foreground">• Verifizierte Bewertungen</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-foreground mb-4 leading-tight">
            Nachhaltiger <span className="text-gradient">3D-Druck</span> aus Österreich
          </h1>
          
          {/* Price anchor */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <Badge variant="secondary" className="text-base px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
              <ShoppingCart className="w-4 h-4 mr-1.5" />
              Ab €20 pro Teil
            </Badge>
            <Badge variant="secondary" className="text-base px-4 py-1.5">
              <Truck className="w-4 h-4 mr-1.5" />
              Versandkostenfrei ab €100
            </Badge>
            <Badge variant="secondary" className="text-base px-4 py-1.5">
              <Clock className="w-4 h-4 mr-1.5" />
              Express 24h möglich
            </Badge>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professioneller FDM 3D-Druck mit 100% österreichischem Filament. 
            Laden Sie Ihre STL-Datei hoch und erhalten Sie sofort Ihren Preis.
          </p>

          {/* Primary CTA - Upload focused */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button 
              variant="hero" 
              size="lg" 
              className="group text-lg px-8 py-6 shadow-lg shadow-primary/25" 
              onClick={() => window.location.href = '/3d-druck-bestellen'}
            >
              <Upload className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              STL hochladen & Preis erhalten
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-primary text-primary hover:bg-primary hover:text-white" 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="mr-2 h-5 w-5" />
              So funktioniert's
            </Button>
          </div>
          
          {/* Trust indicators inline */}
          <p className="text-sm text-muted-foreground mb-12">
            ✓ Sofortiger Preis &nbsp; ✓ Keine Mindestbestellmenge &nbsp; ✓ Made in Austria
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">
                <a href="/3d-druck-materialien" className="hover:text-primary transition-colors">
                  Österreichisches Filament
                </a>
              </div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">24h</div>
              <div className="text-sm text-muted-foreground">
                <a href="/rapid-prototyping" className="hover:text-primary transition-colors">
                  Express-Service
                </a>
              </div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">Ab €20</div>
              <div className="text-sm text-muted-foreground">Pro 3D-Druck Teil</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">Gratis</div>
              <div className="text-sm text-muted-foreground">Persönliche Beratung</div>
            </div>
          </div>
            
          {/* KI Chat Hinweis */}
          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground">
              💬 <span className="font-semibold text-foreground">Fragen? Unser KI-Chat hilft sofort!</span> → Klick auf den Roboter unten rechts
            </p>
          </div>
        </div>
      </div>

      {/* Geometric Decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rotate-45 hidden lg:block"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 border border-primary/20 rotate-12 hidden lg:block"></div>
      <div className="absolute top-1/2 right-8 w-8 h-8 bg-primary/30 rotate-45 hidden lg:block"></div>
    </section>
  );
};
export default Hero;