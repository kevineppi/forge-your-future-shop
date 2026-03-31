import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  Cpu,
  Layers,
  Cog,
  Clock,
  Recycle,
  DollarSign,
  Zap,
  TrendingUp
} from "lucide-react";

interface DruckValuePropositionProps {
  regionName: string;
}

const DruckValueProposition = ({ regionName }: DruckValuePropositionProps) => {
  const advantages = [
    {
      icon: Clock,
      title: "3-5 Tage statt 8 Wochen",
      description: "Vom CAD-Modell zum fertigen Teil in Tagen – nicht Monaten. Express 24h für Notfälle.",
    },
    {
      icon: DollarSign,
      title: "Kein Werkzeug, keine Rüstkosten",
      description: "Direkt aus der Datei drucken. Keine Formen, keine Werkzeuge, keine Mindestmengen.",
    },
    {
      icon: Layers,
      title: "Ab Stückzahl 1 wirtschaftlich",
      description: "Einzelteile kosten genau so viel wie bei 100 Stück – keine Mindestbestellmenge.",
    },
    {
      icon: Cog,
      title: "Komplexe Geometrien inklusive",
      description: "Hinterschnitte, Hohlräume, interne Kanäle – alles druckbar ohne Mehrkosten.",
    },
    {
      icon: Recycle,
      title: "Iterieren statt spekulieren",
      description: "Design ändern, neu drucken, testen. Mehrere Varianten parallel für den besten Vergleich.",
    },
    {
      icon: Cpu,
      title: "FDM-Verfahren – robust & präzise",
      description: "Schichtweise aufgebaut mit ±0.2mm Toleranz. PLA+, PETG, ASA, TPU verfügbar.",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <AnimatedSection animation="fade-in" className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedSection animation="scale-in" delay={100}>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
                <Zap className="w-4 h-4" />
                FDM 3D-Druck Technologie
              </div>
            </AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Warum 3D-Druck?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Die Vorteile für Unternehmen in {regionName}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={index} animation="slide-up" delay={100 + index * 80}>
                  <Card className="group border border-border/50 bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full">
                    <CardContent className="p-7">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection animation="fade-in" delay={600}>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Toleranz", value: "±0.2mm", icon: TrendingUp },
                { label: "Materialien", value: "PLA+ PETG ASA TPU", icon: Layers },
                { label: "Mindestmenge", value: "1 Stück", icon: Cog },
                { label: "Express", value: "24h möglich", icon: Clock },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                    <div className="font-bold text-sm">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DruckValueProposition;
