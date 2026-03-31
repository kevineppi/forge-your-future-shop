import { Lightbulb, Package, Paintbrush, Search, Users } from "lucide-react";

const items = [
  { icon: Lightbulb, title: "Prototypen", desc: "Schnelle Umsetzung Ihrer Idee als greifbares Modell." },
  { icon: Package, title: "Kleinserien", desc: "Wirtschaftliche Fertigung kleiner Stückzahlen ohne Werkzeugkosten." },
  { icon: Paintbrush, title: "Anschauungsmodelle", desc: "Hochwertige Präsentationsmodelle für Messen und Kunden." },
  { icon: Search, title: "Individuelle Prüfung", desc: "Jedes Projekt wird von unseren Experten technisch geprüft." },
  { icon: Users, title: "Persönliche Beratung", desc: "Individuelle Beratung zu Material, Verfahren und Machbarkeit." },
];

const CalculatorInfoSection = () => (
  <section className="py-12 md:py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
        Wofür eignet sich unser 3D-Druck Service?
      </h2>
      <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
        Von der Idee zum fertigen Modell – wir unterstützen Sie bei jedem Schritt.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="text-center p-5 rounded-xl border border-border/60 bg-card hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CalculatorInfoSection;
