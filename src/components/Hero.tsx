import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Star, MapPin, Shield, Clock, Calculator } from "lucide-react";
import { lazy, Suspense, useEffect, useState } from "react";

const TechGridBackground = lazy(() => import("@/components/TechGridBackground"));

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => { setIsLoaded(true); }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center bg-background pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <TechGridBackground />
        </Suspense>
      </div>

      {/* Ambient gradient orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent/[0.08] blur-[100px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <div
            className="max-w-2xl"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(40px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2.5 glass-strong text-foreground text-xs font-semibold px-5 py-2.5 rounded-full mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Angebot noch heute erhalten – <span className="text-primary font-bold">kostenlos</span></span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-[1.02] tracking-[-0.03em]">
              3D-Druck Service{" "}
              <span className="relative inline-block">
                <span className="text-gradient">Österreich</span>
                <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent rounded-full" />
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground font-medium mb-4 tracking-tight">
              Messemodelle · Architekturmodelle · Prototypen
            </p>

            <p className="text-base text-muted-foreground mb-10 leading-relaxed max-w-lg">
              Professionelle 3D-Modelle ab €20. Express in 24h, Angebot in 6 Stunden.{" "}
              <strong className="text-foreground">Made in Austria, nachhaltig produziert.</strong>
            </p>

            {/* CTAs - both funneling to conversion */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button
                variant="cta"
                size="lg"
                className="group text-base px-10 py-7 rounded-2xl shadow-[0_8px_40px_hsl(var(--primary)/0.35)] hover:shadow-[0_16px_60px_hsl(var(--primary)/0.45)]"
                asChild
              >
                <Link to="/kontakt">
                  Kostenloses Angebot anfordern
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="cta-outline"
                size="lg"
                className="group text-base px-8 py-7 rounded-2xl"
                asChild
              >
                <Link to="/kostenrechner">
                  <Calculator className="mr-2 w-4 h-4" />
                  Preis berechnen
                </Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1 font-bold text-foreground">5.0</span>
                <span className="text-xs">(31 Bewertungen)</span>
              </div>
              <span className="hidden sm:inline text-border/60">|</span>
              <span className="flex items-center gap-1.5 text-xs font-medium">
                <Zap className="w-3.5 h-3.5 text-primary" />
                Express 24h
              </span>
              <span className="hidden sm:inline text-border/60">|</span>
              <span className="flex items-center gap-1.5 text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                Made in Austria
              </span>
            </div>
          </div>

          {/* Right Column - Feature Stack */}
          <div
            className="hidden lg:block"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            }}
          >
            <div className="grid gap-4 relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/[0.06] via-transparent to-accent/[0.04] rounded-[3rem] blur-2xl pointer-events-none" />

              {/* Main feature card */}
              <div className="relative glass-strong rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-0.5 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-bold text-primary bg-primary/8 px-3 py-1 rounded-full border border-primary/15">
                      Spezialisiert
                    </span>
                  </div>
                  <h3 className="font-black text-xl mb-2 tracking-tight">Messe & Architektur</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Messemodelle, Architekturmodelle und Anschauungsobjekte für professionelle Präsentationen. Maßstab 1:50–1:500.
                  </p>
                </div>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: "24h", label: "Express", icon: Zap, glow: true },
                  { val: "€20", label: "ab Preis", icon: Shield, glow: false },
                  { val: "6h", label: "Angebot", icon: Clock, glow: false },
                ].map(({ val, label, icon: Icon, glow }) => (
                  <div
                    key={label}
                    className={`relative glass-strong rounded-2xl p-5 text-center
                      hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 group
                      ${glow ? "ring-1 ring-primary/20 shadow-[0_0_30px_hsl(var(--primary)/0.08)]" : ""}`}
                  >
                    <Icon className="w-5 h-5 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-2xl font-black text-primary leading-none tracking-tight">{val}</p>
                    <p className="text-[11px] text-muted-foreground mt-1.5 font-semibold uppercase tracking-wider">{label}</p>
                  </div>
                ))}
              </div>

              {/* Trust bar */}
              <div className="relative glass-strong rounded-2xl p-5 flex items-center gap-4 ring-1 ring-amber-400/10">
                <div className="flex -space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold tracking-tight">5,0 / 5,0 Google Bewertungen</p>
                  <p className="text-xs text-muted-foreground">31 verifizierte Bewertungen</p>
                </div>
              </div>

              {/* Legal */}
              <div className="glass rounded-2xl p-4 flex items-start gap-3">
                <Shield className="w-4 h-4 text-primary/60 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Ausschließlich Präsentationsmodelle für Anschauungszwecke – keine Funktionsteile
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground/40 animate-fade-in">
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
