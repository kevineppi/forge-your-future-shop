import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Ruler, Layers, Settings, Thermometer, Shield, Microscope } from "lucide-react";

interface TechSpecsSectionProps {
  regionName: string;
  category: 'architektur' | 'messe' | 'druck';
}

const TechSpecsSection = ({ regionName, category }: TechSpecsSectionProps) => {
  const specs = category === 'architektur' ? [
    { icon: Ruler, label: 'Maßstäbe', value: '1:50 – 1:500', detail: 'Passend für jede Präsentation' },
    { icon: Layers, label: 'Schichthöhe', value: 'ab 0.12mm', detail: 'Feinste Details sichtbar' },
    { icon: Settings, label: 'Toleranz', value: '±0.2mm', detail: 'Maßstabsgetreue Genauigkeit' },
    { icon: Microscope, label: 'Detailgrad', value: 'Fensterraster ab 1mm', detail: 'Fassadenelemente erkennbar' },
    { icon: Shield, label: 'Materialien', value: 'PLA, PETG, ASA', detail: '3 Materialklassen verfügbar' },
    { icon: Thermometer, label: 'Max. Größe', value: '30 x 30 x 40 cm', detail: 'Pro Druckteil, modular erweiterbar' },
  ] : category === 'messe' ? [
    { icon: Ruler, label: 'Maximalgröße', value: 'bis 200cm', detail: 'Modularer Aufbau möglich' },
    { icon: Layers, label: 'Wandstärke', value: 'ab 1.2mm', detail: 'Robust für Messetransport' },
    { icon: Settings, label: 'Oberfläche', value: 'Geschliffen / Lackiert', detail: 'Messestandard-Finish' },
    { icon: Microscope, label: 'Gewicht', value: 'bis 70% leichter', detail: 'Vs. Holz/Metall-Modelle' },
    { icon: Shield, label: 'Transport', value: 'Bruchsicher verpackt', detail: 'Versandoptimiert' },
    { icon: Thermometer, label: 'Outdoor-fähig', value: 'ASA verfügbar', detail: 'UV-beständig, wetterfest' },
  ] : [
    { icon: Ruler, label: 'Druckvolumen', value: '30 x 30 x 40 cm', detail: 'Pro Druckteil' },
    { icon: Layers, label: 'Schichthöhe', value: '0.12 – 0.28mm', detail: 'Fein bis schnell wählbar' },
    { icon: Settings, label: 'Dateiformate', value: 'STL, OBJ, 3MF, STEP', detail: 'Alle gängigen CAD-Formate' },
    { icon: Microscope, label: 'Toleranz', value: '±0.2mm', detail: 'Reproduzierbare Qualität' },
    { icon: Shield, label: 'Materialien', value: 'PLA+, PETG, ASA, TPU', detail: '4 Materialklassen' },
    { icon: Thermometer, label: 'Farben', value: '15+ Standardfarben', detail: 'Sonderfarben auf Anfrage' },
  ];

  return (
    <section className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in" className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-card border border-border shadow-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            <Settings className="w-4 h-4 text-primary" />
            Technische Daten
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technische Spezifikationen
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Unsere FDM-Drucker liefern reproduzierbare Qualität für Projekte in {regionName}
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {specs.map((spec, index) => (
            <AnimatedSection key={index} animation="slide-up" delay={index * 60}>
              <Card className="border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <spec.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">{spec.label}</div>
                      <div className="text-lg font-bold text-primary">{spec.value}</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{spec.detail}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSpecsSection;
