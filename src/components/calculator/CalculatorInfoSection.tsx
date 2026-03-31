import { Palette, Eye, Trophy, UserCheck, Sparkles } from "lucide-react";

const items = [
  { icon: Eye, title: "Anschauungsmodelle", desc: "Dreidimensionale Modelle für Präsentationen, Besprechungen und Entscheidungsfindung." },
  { icon: Palette, title: "Designstudien", desc: "Haptische Entwürfe, um Formen, Proportionen und Oberflächen greifbar zu machen." },
  { icon: Trophy, title: "Messemodelle", desc: "Hochwertige Ausstellungsobjekte, die am Stand überzeugen – vom Architekturmodell bis zum Produktentwurf." },
  { icon: UserCheck, title: "Persönliche Prüfung", desc: "Kein automatisierter Prozess – jedes Projekt wird individuell von unseren Experten begutachtet." },
  { icon: Sparkles, title: "Individuelle Beratung", desc: "Material, Oberflächenfinish und Maßstab – wir beraten Sie zu jedem Detail persönlich." },
];

const CalculatorInfoSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
        Wofür eignet sich unser 3D-Druck Service?
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
        Wir sind spezialisiert auf Anschauungsmodelle und Präsentationsobjekte – 
        von der ersten Designidee bis zum fertigen Ausstellungsstück. 
        Keine industrielle Serienfertigung, sondern handwerkliche Qualität mit persönlicher Betreuung.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="text-center p-6 rounded-xl border border-border/60 bg-card hover:shadow-md hover:border-primary/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CalculatorInfoSection;
