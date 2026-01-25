import { Button } from "@/components/ui/button";
import { Upload, ArrowRight, CheckCircle, Zap, Shield, Clock, Star } from "lucide-react";
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
              3D-Druck Service Oberösterreich – <span className="text-primary">ab €20</span>, in 24h versandfertig
            </h1>
            
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Laden Sie Ihre STL-Datei hoch und erhalten Sie sofort Ihren Preis. 
              Professioneller FDM-Druck mit österreichischem Filament.
            </p>
            
            <p className="text-muted-foreground mb-6">
              Über 100+ zufriedene Kunden vertrauen uns.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-background/50 text-sm">
                <CheckCircle className="w-3.5 h-3.5 text-primary" />
                <span>Präzise & zuverlässig</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-background/50 text-sm">
                <CheckCircle className="w-3.5 h-3.5 text-primary" />
                <span>Persönliche Beratung</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-background/50 text-sm">
                <CheckCircle className="w-3.5 h-3.5 text-primary" />
                <span>Made in Austria</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="default" 
                size="lg" 
                className="group text-base px-6 py-6" 
                onClick={() => window.location.href = '/3d-druck-bestellen'}
              >
                <Upload className="mr-2 h-5 w-5" />
                Jetzt Preis berechnen
                <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group text-base px-6 py-6" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Anfrage stellen
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="hidden lg:block">
            <div className="grid gap-3">
              {/* Top Card */}
              <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm p-4">
                <h3 className="font-semibold text-base mb-1">FDM 3D-Druck Service</h3>
                <p className="text-muted-foreground text-sm">
                  Dekoration, Modellbau und individuelle Unikate.
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

              {/* Bottom Card */}
              <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm p-4 flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Versandkostenfrei ab €100
                </p>
              </div>

              {/* Google Rating */}
              <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground mt-1">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span>5.0 Google Bewertungen</span>
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
