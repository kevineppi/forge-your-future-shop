import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-20">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            3D-Druck Service Österreich
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary font-extrabold mb-4">
            Nachhaltiger FDM 3D-Druck Service
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professioneller <a href="/fdm-3d-druck" className="text-primary font-semibold hover:underline">FDM 3D-Druck</a> aus Oberösterreich mit 100% österreichischem Filament. 
            Von <a href="/rapid-prototyping" className="text-primary font-semibold hover:underline">Rapid Prototyping</a> über{" "}
            <a href="/einzelanfertigungen" className="text-primary font-semibold hover:underline">Einzelanfertigungen</a> bis zur{" "}
            <a href="/serienfertigung" className="text-primary font-semibold hover:underline">Serienfertigung</a> – regional, schnell und umweltfreundlich.
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