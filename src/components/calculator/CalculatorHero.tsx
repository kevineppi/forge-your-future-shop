import { Calculator, ShieldCheck, UserCheck, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CalculatorHero = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-primary/8 via-background to-accent/5 py-16 md:py-24">
    {/* Subtle pattern overlay */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
      backgroundSize: '24px 24px',
    }} />

    <div className="container mx-auto px-4 text-center relative">
      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
        <Calculator className="h-4 w-4" />
        Unverbindlicher Richtpreis-Rechner
      </div>

      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 tracking-tight leading-tight">
        3D-Druck Kostenrechner<br />
        <span className="text-primary">für Anschauungsmodelle</span>
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
        Berechnen Sie schnell und unverbindlich einen Richtpreis für Ihr 3D-gedrucktes
        Modell. Jede Anfrage wird von uns <strong className="text-foreground">persönlich geprüft</strong> –
        keine automatisierte Bestellung, keine Garantie auf Machbarkeit oder Preis.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
        <Badge variant="outline" className="border-primary/30 text-foreground gap-1.5 px-3 py-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-primary" />
          Kein Webshop · Keine Bestellung
        </Badge>
        <Badge variant="outline" className="border-primary/30 text-foreground gap-1.5 px-3 py-1.5">
          <UserCheck className="h-3.5 w-3.5 text-primary" />
          Persönliche Prüfung jeder Anfrage
        </Badge>
        <Badge variant="outline" className="border-primary/30 text-foreground gap-1.5 px-3 py-1.5">
          <Star className="h-3.5 w-3.5 text-primary" />
          5,0 ★ auf Google (31 Bewertungen)
        </Badge>
      </div>

      <p className="text-xs text-muted-foreground max-w-lg mx-auto">
        Spezialisiert auf Anschauungsmodelle, Präsentationsmodelle und Designstudien.
        Kein Webshop, keine automatisierte Fertigung – Ihr Projekt verdient individuelle Aufmerksamkeit.
      </p>
    </div>
  </section>
);

export default CalculatorHero;
