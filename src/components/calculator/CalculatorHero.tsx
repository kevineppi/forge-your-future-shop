import { Calculator, ShieldCheck, UserCheck, Star, ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CalculatorHero = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-primary/6 via-background to-background py-20 md:py-28">
    {/* Geometric accent */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/8 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-2xl translate-y-1/3 -translate-x-1/4" />

    <div className="container mx-auto px-4 text-center relative">
      <div className="inline-flex items-center gap-2 bg-primary/8 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-8 border border-primary/15">
        <Calculator className="h-4 w-4" />
        Unverbindlicher Richtpreis-Rechner
      </div>

      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
        Was kostet Ihr<br />
        <span className="text-primary">3D-gedrucktes Modell?</span>
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
        Ob Präsentationsmodell, Designstudie oder Messeobjekt – berechnen Sie in
        Sekunden einen Richtpreis. Jede Anfrage wird{" "}
        <strong className="text-foreground">persönlich von uns geprüft</strong>,
        bevor wir ein individuelles Angebot erstellen.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        <Badge variant="outline" className="border-border/80 text-foreground gap-1.5 px-3.5 py-2 text-sm bg-background/60 backdrop-blur-sm">
          <ShieldCheck className="h-3.5 w-3.5 text-primary" />
          Kein Webshop – keine Bestellung
        </Badge>
        <Badge variant="outline" className="border-border/80 text-foreground gap-1.5 px-3.5 py-2 text-sm bg-background/60 backdrop-blur-sm">
          <UserCheck className="h-3.5 w-3.5 text-primary" />
          Persönliche Prüfung jeder Anfrage
        </Badge>
        <Badge variant="outline" className="border-border/80 text-foreground gap-1.5 px-3.5 py-2 text-sm bg-background/60 backdrop-blur-sm">
          <Star className="h-3.5 w-3.5 text-primary" />
          5,0 ★ auf Google (31 Bewertungen)
        </Badge>
      </div>

      <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-10">
        Spezialisiert auf Präsentationsmodelle, Schaumodelle und Designstudien.
        Auch größere Projektmengen und Kleinauflagen sind möglich –
        wir beraten Sie gerne persönlich.
      </p>

      <a href="#calculator" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium group">
        <ArrowDown className="h-4 w-4 animate-bounce group-hover:animate-none" />
        Direkt zum Rechner
      </a>
    </div>
  </section>
);

export default CalculatorHero;
