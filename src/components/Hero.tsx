import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, Star, MapPin, Shield } from "lucide-react";
import { lazy, Suspense, useEffect, useState } from "react";

const TechGridBackground = lazy(() => import("@/components/TechGridBackground"));

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => { setIsLoaded(true); }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center bg-background pt-24 pb-16 overflow-hidden">
      {/* Tech grid animation background */}
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <TechGridBackground />
        </Suspense>
      </div>

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.04)_0%,transparent_50%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div
            className="max-w-xl"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(40px)",
              transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold px-4 py-2 rounded-full mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Angebot noch heute erhalten – kostenlos
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-foreground mb-6 leading-[1.08] tracking-tight">
              Ihr 3D-Modell –{" "}
              <span className="text-primary relative">
                fertig in 24h
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/20 rounded-full" />
              </span>
              <br />
              <span className="text-muted-foreground font-bold text-3xl sm:text-4xl lg:text-[2.5rem]">
                ab €20. Made in Austria.
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md">
              Messemodelle, Architekturmodelle und Prototypen – professionell gedruckt in Gunskirchen.{" "}
              <strong className="text-foreground">Angebot in 6 Stunden.</strong>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button
                variant="cta"
                size="lg"
                className="group text-base px-8 py-6 rounded-2xl shadow-[0_8px_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_12px_40px_hsl(var(--primary)/0.4)]"
                asChild
              >
                <Link to="/kontakt">
                  Kostenloses Angebot anfordern
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="cta-outline"
                size="lg"
                className="group text-base px-8 py-6 rounded-2xl"
                asChild
              >
                <Link to="/referenzen">
                  Projekte ansehen
                </Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
                <span className="ml-1 font-bold text-foreground">5.0</span>
                <span>(31 Bewertungen)</span>
              </div>
              <span className="hidden sm:inline text-border">|</span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-primary" />
                Express 24h
              </span>
              <span className="hidden sm:inline text-border">|</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                Made in Austria
              </span>
            </div>
          </div>

          {/* Right Column - Animated Feature Stack */}
          <div
            className="hidden lg:block"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0) translateX(0)" : "translateY(20px) translateX(20px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            }}
          >
            <div className="grid gap-3">
              {/* Main feature card */}
              <div className="rounded-2xl border border-border bg-card/90 backdrop-blur-sm p-6 
                hover:border-primary/30 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.1)] transition-all duration-500 hover:-translate-y-0.5">
                <h3 className="font-black text-lg mb-2">Spezialisiert auf Messe & Architektur</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Messemodelle, Architekturmodelle und Anschauungsobjekte für professionelle Präsentationen. Maßstab 1:50–1:500.
                </p>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { val: "24h", label: "Express", icon: Zap },
                  { val: "€20", label: "ab Preis", icon: Shield },
                  { val: "6h", label: "Angebot", icon: Clock },
                ].map(({ val, label, icon: Icon }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-border bg-card/90 backdrop-blur-sm p-4 text-center
                      hover:border-primary/30 hover:shadow-sm transition-all duration-300 hover:-translate-y-0.5 group"
                  >
                    <Icon className="w-5 h-5 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-2xl font-black text-primary leading-none">{val}</p>
                    <p className="text-xs text-muted-foreground mt-1 font-medium">{label}</p>
                  </div>
                ))}
              </div>

              {/* Trust bar */}
              <div className="rounded-2xl border border-primary/15 bg-primary/5 p-4 flex items-center gap-3">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold">5,0 / 5,0 Google Bewertungen</p>
                  <p className="text-xs text-muted-foreground">31 verifizierte Bewertungen</p>
                </div>
              </div>

              {/* Legal */}
              <div className="rounded-2xl border border-border bg-muted/30 p-3 flex items-start gap-2">
                <Shield className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground">
                  Ausschließlich Präsentationsmodelle für Anschauungszwecke – keine Funktionsteile
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground opacity-50 animate-fade-in">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Entdecken</span>
          <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center p-1">
            <div className="w-1 h-2.5 bg-current rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
