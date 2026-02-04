import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  ArrowRight,
  Lightbulb,
  Palette,
  Shield,
  Feather
} from "lucide-react";

export interface MaterialRecommendation {
  name: string;
  description: string;
  bestFor: string[];
  icon: 'palette' | 'shield' | 'feather';
}

interface MesseMaterialTipsProps {
  materials: MaterialRecommendation[];
  regionName: string;
  industryFocus: string;
}

const iconMap = {
  palette: Palette,
  shield: Shield,
  feather: Feather
};

const MesseMaterialTips = ({ materials, regionName, industryFocus }: MesseMaterialTipsProps) => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Lightbulb className="w-4 h-4" />
              Material-Empfehlungen
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Die richtigen Materialien für {industryFocus}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Basierend auf unserer Erfahrung mit Messen in {regionName} – 
              die optimale Materialwahl für Ihren Einsatzzweck
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {materials.map((material, index) => {
              const Icon = iconMap[material.icon];
              return (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all group hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{material.name}</h3>
                    <p className="text-muted-foreground mb-4">{material.description}</p>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-primary">Ideal für:</div>
                      {material.bestFor.map((use, useIndex) => (
                        <div key={useIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{use}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Expert Tip Box */}
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center shrink-0">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">Experten-Tipp für {regionName}</h3>
                  <p className="text-muted-foreground mb-4">
                    Unsicher, welches Material für Ihr Messeprojekt am besten geeignet ist? 
                    Wir beraten Sie kostenlos und unverbindlich – basierend auf Ihren Anforderungen 
                    an Größe, Optik, Haptik und Budget. Bei komplexen Projekten senden wir Ihnen 
                    gerne vorab Materialproben zu.
                  </p>
                  <Button asChild variant="outline">
                    <Link to="/kontakt">
                      Kostenlose Materialberatung
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MesseMaterialTips;
