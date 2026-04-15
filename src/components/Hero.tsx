import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Calculator } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => { setIsLoaded(true); }, []);

  return (
    <section className="relative min-h-[100svh] bg-foreground overflow-hidden flex items-end pt-24 pb-0">
      {/* Abstract geometric shapes */}
      <div className="absolute top-0 right-0 w-[70%] h-full">
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full border border-primary/20 opacity-30" />
        <div className="absolute top-[15%] right-[10%] w-[400px] h-[400px] rounded-full border border-primary/10 opacity-20" />
        <div className="absolute top-[20%] right-[15%] w-[300px] h-[300px] rounded-full bg-primary/[0.04] blur-[60px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[200px] h-[200px] rounded-full bg-accent/[0.06] blur-[40px]" />
      </div>
      {/* Gradient overlay bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-20" />

      <div className="relative z-10 container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Top row: badge */}
          <div
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
            }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/15 backdrop-blur-sm border border-primary/20 text-primary text-xs font-bold px-4 py-2 rounded-full mb-10">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Angebot in 6 Stunden – kostenlos
            </div>
          </div>

          {/* Main headline - massive editorial type */}
          <div
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(40px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            }}
          >
            <h1 className="text-[clamp(3rem,8vw,7rem)] font-black text-background leading-[0.95] tracking-[-0.04em] mb-8">
              3D-Druck<br />
              <span className="text-primary">Service</span><br />
              Österreich<span className="text-primary">.</span>
            </h1>
          </div>

          {/* Subline + CTAs row */}
          <div
            className="grid lg:grid-cols-2 gap-10 items-end"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
            }}
          >
            <div>
              <p className="text-background/60 text-lg leading-relaxed max-w-md mb-8">
                Messemodelle, Architekturmodelle & Prototypen – professionell gefertigt ab €20. Express in 24h.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="cta" size="lg" className="group text-base px-10 py-7 rounded-2xl" asChild>
                  <Link to="/kontakt">
                    Kostenloses Angebot
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" className="group text-base px-8 py-7 rounded-2xl bg-background/10 border border-background/20 text-background hover:bg-background/20 font-semibold" asChild>
                  <Link to="/kostenrechner">
                    <Calculator className="mr-2 w-4 h-4" />
                    Preis berechnen
                  </Link>
                </Button>
              </div>
            </div>

            {/* Stats strip */}
            <div className="flex items-center gap-8 lg:justify-end">
              {[
                { val: "5.0", label: "Google Rating", extra: <div className="flex mt-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}</div> },
                { val: "24h", label: "Express möglich", extra: null },
                { val: "€20", label: "ab Preis", extra: null },
              ].map(({ val, label, extra }) => (
                <div key={label} className="text-center">
                  <p className="text-3xl font-black text-primary leading-none tracking-tight">{val}</p>
                  <p className="text-[11px] text-background/40 mt-1.5 font-semibold uppercase tracking-wider">{label}</p>
                  {extra}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
