import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

import SEOHead from "./SEOHead";
import { useSEO } from "@/hooks/useSEO";

const Hero = () => {
  const seoData = useSEO('hero');
  
  return (
    <>
      <SEOHead title={seoData.title} description={seoData.description} keywords={seoData.keywords} path="/" />
      <section className="relative min-h-screen flex items-center justify-center bg-background pt-20">
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              3D-Druck Service Österreich | 3D-Druckerei & FDM 3D-Druck
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-extrabold mb-4">
              3D-Druckservice Online | Rapid Prototyping Österreich
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              <span className="text-primary font-semibold">3D-Druck Österreich Dienstleister</span> für professionellen <span className="text-primary font-semibold">FDM 3D-Druck Service</span> aus <span className="text-primary font-semibold">Oberösterreich</span>. 
              Unsere <span className="text-primary font-semibold">3D-Druckerei</span> bietet <span className="text-primary font-semibold">Rapid Prototyping</span>, 
              <span className="text-primary font-semibold">Einzelanfertigungen</span> und <span className="text-primary font-semibold">Serienfertigung</span> mit österreichischem Filament. 
              <span className="text-primary font-semibold">3D-Druckservice Online</span> für ganz Österreich - nachhaltig, schnell und kosteneffizient.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="group" onClick={() => document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                Kostenloses Angebot
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="group border-primary text-primary hover:bg-primary hover:text-white" onClick={() => document.getElementById('services')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                <Play className="mr-2 h-5 w-5" />
                Unsere Leistungen
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground"><span className="text-primary font-semibold">Österreichisches</span> Filament</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24h</div>
                <div className="text-muted-foreground"><span className="text-primary font-semibold">Express</span>-Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">Regional</div>
                <div className="text-muted-foreground"><span className="text-primary font-semibold">Nachhaltige</span> Fertigung</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">Kostenlos</div>
                <div className="text-muted-foreground"><span className="text-primary font-semibold">Persönliche</span> Beratung</div>
              </div>
            </div>
          </div>
        </div>

        {/* Geometric Decorations */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rotate-45 hidden lg:block"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 border border-primary/20 rotate-12 hidden lg:block"></div>
        <div className="absolute top-1/2 right-8 w-8 h-8 bg-primary/30 rotate-45 hidden lg:block"></div>
      </section>
    </>
  );
};

export default Hero;