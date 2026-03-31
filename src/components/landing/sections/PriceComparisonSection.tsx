import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, CheckCircle, ArrowRight, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PriceComparisonSectionProps {
  regionName: string;
  category: 'architektur' | 'messe' | 'druck';
}

const PriceComparisonSection = ({ regionName, category }: PriceComparisonSectionProps) => {
  const priceData = category === 'architektur' ? [
    { label: 'Studienmodell (bis 15cm)', price: 'ab €20', note: 'Ideal für Entwurfsphase' },
    { label: 'Wettbewerbsmodell (20-40cm)', price: 'ab €60', note: 'Detailliert, maßstabsgetreu' },
    { label: 'Präsentationsmodell (40-80cm)', price: 'ab €120', note: 'Für Investoren & Jurys' },
    { label: 'Stadtmodell (modularer Aufbau)', price: 'ab €250', note: 'Mehrere Gebäude, Kontext' },
  ] : category === 'messe' ? [
    { label: 'Display-Modell (bis 20cm)', price: 'ab €30', note: 'Tischpräsentation' },
    { label: 'Standmodell (30-60cm)', price: 'ab €80', note: 'Blickfang am Messestand' },
    { label: 'Eyecatcher (60-120cm)', price: 'ab €180', note: 'Großer Wow-Effekt' },
    { label: 'XXL-Objekt (über 120cm)', price: 'ab €350', note: 'Modularer Aufbau' },
  ] : [
    { label: 'Einzelmodell (bis 10cm)', price: 'ab €20', note: 'Designstudie, Konzept' },
    { label: 'Detailmodell (10-25cm)', price: 'ab €40', note: 'Präsentation, Anschauung' },
    { label: 'Großes Modell (25-50cm)', price: 'ab €90', note: 'Showroom, Ausstellung' },
    { label: 'Kleinserie (10+ Stück)', price: '-10%', note: 'Mengenrabatt automatisch' },
  ];

  return (
    <section className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in" className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-card border border-border shadow-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            <Calculator className="w-4 h-4 text-primary" />
            Transparente Preise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Was kostet {category === 'architektur' ? 'ein Architekturmodell' : category === 'messe' ? 'ein Messemodell' : '3D-Druck'} in {regionName}?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparente Richtwerte – Ihr individuelles Angebot erhalten Sie kostenlos in 6 Stunden.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-10">
          {priceData.map((item, index) => (
            <AnimatedSection key={index} animation="slide-up" delay={index * 80}>
              <Card className="border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all h-full">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{item.price}</div>
                  <div className="font-semibold text-sm mb-2">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.note}</div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in" className="text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Keine versteckten Kosten</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Versandkostenfrei ab €100</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Angebot in 6 Stunden</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PriceComparisonSection;
