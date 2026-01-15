import { Button } from "@/components/ui/button";
import { Upload, ArrowRight, CheckCircle, Zap, Shield, Clock } from "lucide-react";
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
              Professioneller 3D-Druck für Ihre Projekte
            </h1>
            
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Hochwertige FDM-Fertigung mit österreichischem Filament. 
              Von Einzelstücken bis zur Serie.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Prototypen, Ersatzteile und Kleinserien aus einer Hand.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/50 text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Präzise & zuverlässig</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/50 text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Persönliche Beratung</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/50 text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Made in Austria</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/50 text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Express verfügbar</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
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
                <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Button>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="hidden lg:block">
            <div className="grid gap-4">
              {/* Top Card */}
              <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6">
                <h3 className="font-semibold text-lg mb-2">FDM 3D-Druck Service</h3>
                <p className="text-muted-foreground text-sm">
                  Professionelle Fertigung für Prototypen, Einzelteile und Kleinserien.
                </p>
              </div>

              {/* Middle Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-primary text-primary-foreground p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5" />
                    <h4 className="font-semibold">Express 24h</h4>
                  </div>
                  <p className="text-sm opacity-90">
                    Schnelle Lieferung für dringende Projekte
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">Qualität</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Österreichisches Filament
                  </p>
                </div>
              </div>

              {/* Bottom Card */}
              <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 flex items-center gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Ab €20 pro Teil · Versandkostenfrei ab €100
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Entdecken</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-current rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
