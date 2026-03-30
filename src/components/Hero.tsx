import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Clock, Star, MapPin } from "lucide-react";
import { lazy, Suspense } from "react";

const Hero3DAnimation = lazy(() => import("@/components/Hero3DAnimation"));

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background pt-24 pb-16 overflow-hidden">
      {/* Background line decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <path
            d="M-100,400 Q200,200 400,350 T800,300 T1200,400 T1600,350"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-muted-foreground"
          />
          <path
            d="M-100,500 Q300,300 500,450 T900,400 T1300,500"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-muted-foreground"
          />
          <path
            d="M-100,600 Q250,450 450,550 T850,500 T1250,600"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            className="text-muted-foreground"
          />
        </svg>
      </div>

      {/* 3D Animation - subtle background */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-30">
        <Suspense fallback={null}>
          <Hero3DAnimation />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
              3D-Druck Österreich – <span className="text-primary">Messemodelle & Architekturmodelle</span> ab €20
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Professioneller 3D-Druck Service aus Oberösterreich: Messemodelle, Architekturmodelle 
              und Prototypen. Express 24h – Angebot in 6 Stunden. Made in Austria.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Button 
                variant="default" 
                size="lg" 
                className="group text-base px-6 py-6" 
                asChild
              >
                <Link to="/kontakt">
                  Kostenloses Angebot – ab €20
                  <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group text-base px-6 py-6"
                asChild
              >
                <Link to="/referenzen">
                  Projekte ansehen
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Social proof + urgency – compact row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1 font-medium text-foreground">5.0</span>
                <span>(31 Google-Bewertungen)</span>
              </div>
              <span className="flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
                Angebot noch heute erhalten
              </span>
            </div>

            {/* Trust Badges – 4 icons, clean row */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-background/50 text-xs">
                <Zap className="w-3.5 h-3.5 text-primary" />
                Express 24h
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-background/50 text-xs">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                Made in Austria
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-background/50 text-xs">
                <Clock className="w-3.5 h-3.5 text-primary" />
                Versandkostenfrei ab €100
              </span>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="hidden lg:block">
            <div className="grid gap-3">
              {/* Top Card */}
              <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm p-4">
                <h3 className="font-semibold text-base mb-1">Spezialisiert auf Messe & Architektur</h3>
                <p className="text-muted-foreground text-sm">
                  Messemodelle, Architekturmodelle und Anschauungsobjekte für professionelle Präsentationen.
                </p>
              </div>

              {/* Middle Row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-primary text-primary-foreground p-4">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Zap className="w-4 h-4" />
                    <h4 className="font-semibold text-sm">Express 24h</h4>
                  </div>
                  <p className="text-xs opacity-90">
                    Für dringende Projekte
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm p-4">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Shield className="w-4 h-4 text-primary" />
                    <h4 className="font-semibold text-sm">Premium Qualität</h4>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    Österreichisches Filament
                  </p>
                </div>
              </div>

              {/* Legal Notice */}
              <div className="rounded-xl border border-primary/20 bg-primary/5 backdrop-blur-sm p-3 flex items-start gap-2">
                <Shield className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground">
                  Ausschließlich Anschauungsmodelle für Präsentationszwecke – keine Funktionsteile
                </p>
              </div>

              {/* Bottom Card */}
              <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm p-4 flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Versandkostenfrei ab €100
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - hidden on mobile */}
        <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground opacity-60">
          <span className="text-[10px] uppercase tracking-widest">Entdecken</span>
          <div className="w-4 h-7 rounded-full border border-current flex items-start justify-center p-0.5">
            <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
