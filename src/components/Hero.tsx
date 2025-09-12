import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-modern-3d-printer.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="3D Printing in Action" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Individueller 3D-Druck aus
            <span className="block text-gradient">Oberösterreich</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Nachhaltiger 3D-Druck mit österreichischem Filament. Schnell, preiswert und zuverlässig - 
            von der Idee bis zum fertigen Produkt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Kostenloses Angebot
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="group text-white border-white hover:bg-white hover:text-foreground" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              <Play className="mr-2 h-5 w-5" />
              Unsere Leistungen
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">Österreichisches Filament</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24h</div>
              <div className="text-white/80">Express-Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">Regional</div>
              <div className="text-white/80">Nachhaltige Fertigung</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">Kostenlos</div>
              <div className="text-white/80">Persönliche Beratung</div>
            </div>
          </div>
        </div>
      </div>

      {/* Geometric Decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-white/20 rotate-45 hidden lg:block"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 border border-white/20 rotate-12 hidden lg:block"></div>
      <div className="absolute top-1/2 right-8 w-8 h-8 bg-accent/30 rotate-45 hidden lg:block"></div>
    </section>
  );
};

export default Hero;