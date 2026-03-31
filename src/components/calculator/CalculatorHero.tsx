import { Calculator, ShieldCheck } from "lucide-react";

const CalculatorHero = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
    <div className="container mx-auto px-4 text-center">
      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
        <Calculator className="h-4 w-4" />
        Unverbindlicher Richtpreis-Rechner
      </div>

      <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
        3D-Druck Kostenrechner
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
        Berechnen Sie schnell und unverbindlich einen Richtpreis für Ihr 3D-Druckteil.
      </p>

      <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/60 px-4 py-2 rounded-lg">
        <ShieldCheck className="h-4 w-4 text-primary" />
        Kein Webshop · Kein Sofortkauf · Keine verbindliche Bestellung
      </div>
    </div>
  </section>
);

export default CalculatorHero;
