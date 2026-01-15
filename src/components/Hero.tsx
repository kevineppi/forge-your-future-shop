import { Button } from "@/components/ui/button";
import { ShoppingCart, Play } from "lucide-react";
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
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 pointer-events-none z-[1]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Nachhaltiger <span className="text-gradient">3D-Druck</span> aus Österreich
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professioneller <a href="/fdm-3d-druck" className="text-primary font-semibold hover:underline">FDM 3D-Druck</a> aus Oberösterreich mit 100% österreichischem Filament. 
            Von <a href="/rapid-prototyping" className="text-primary font-semibold hover:underline">Rapid Prototyping</a> über{" "}
            <a href="/einzelanfertigungen" className="text-primary font-semibold hover:underline">Einzelanfertigungen</a> bis zur{" "}
            <a href="/serienfertigung" className="text-primary font-semibold hover:underline">Serienfertigung</a> – regional, schnell und umweltfreundlich.
          </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="group" onClick={() => window.location.href = '/3d-druck-bestellen'}>
                <ShoppingCart className="mr-2 h-5 w-5 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" />
                Jetzt bestellen
              </Button>
              
              <Button variant="outline" size="lg" className="group border-primary text-primary hover:bg-primary hover:text-white" onClick={() => document.getElementById('services')?.scrollIntoView({
            behavior: 'smooth'
          })}>
                <Play className="mr-2 h-5 w-5" />
                Unsere Leistungen
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">
                  <a href="/3d-druck-materialien" className="hover:text-primary transition-colors">
                    Österreichisches Filament
                  </a>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24h</div>
                <div className="text-muted-foreground">
                  <a href="/rapid-prototyping" className="hover:text-primary transition-colors">
                    Express-Service
                  </a>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">Regional</div>
                <div className="text-muted-foreground">Nachhaltige Fertigung</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">Kostenlos</div>
                <div className="text-muted-foreground">Persönliche Beratung</div>
              </div>
            </div>
            
            {/* KI Chat Hinweis */}
            <div className="mt-12 text-center">
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