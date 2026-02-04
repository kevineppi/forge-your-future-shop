import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Clock, 
  Ruler, 
  Package,
  Quote,
  Star,
  Building2
} from "lucide-react";

export interface CaseStudyData {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  specs: {
    size: string;
    material: string;
    time: string;
  };
  quote?: string;
}

interface MesseCaseStudyProps {
  caseStudy: CaseStudyData;
  regionName: string;
}

const MesseCaseStudy = ({ caseStudy, regionName }: MesseCaseStudyProps) => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Building2 className="w-4 h-4" />
              Praxisbeispiel
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Erfolgreich auf der Messe in {regionName}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wie unsere Kunden mit 3D-gedruckten Messemodellen überzeugen
            </p>
          </div>

          <Card className="border-2 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Left: Case Study Content */}
                <div className="lg:col-span-3 p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {caseStudy.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6">{caseStudy.title}</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Herausforderung</h4>
                      <p className="text-muted-foreground">{caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Unsere Lösung</h4>
                      <p className="text-muted-foreground">{caseStudy.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Ergebnis</h4>
                      <p className="text-muted-foreground">{caseStudy.result}</p>
                    </div>
                  </div>

                  {caseStudy.quote && (
                    <div className="mt-8 p-6 bg-muted/50 rounded-xl border-l-4 border-primary">
                      <Quote className="w-8 h-8 text-primary/30 mb-3" />
                      <p className="italic text-lg mb-3">"{caseStudy.quote}"</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: Specs & CTA */}
                <div className="lg:col-span-2 bg-muted/30 p-8 md:p-10 flex flex-col">
                  <h4 className="font-bold text-lg mb-6">Projektdetails</h4>
                  
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-4 p-4 bg-background rounded-xl">
                      <Ruler className="w-8 h-8 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Größe</div>
                        <div className="font-bold">{caseStudy.specs.size}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-background rounded-xl">
                      <Package className="w-8 h-8 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Material</div>
                        <div className="font-bold">{caseStudy.specs.material}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-background rounded-xl">
                      <Clock className="w-8 h-8 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Lieferzeit</div>
                        <div className="font-bold">{caseStudy.specs.time}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      Ähnliches Projekt geplant?
                    </p>
                    <Button asChild className="w-full">
                      <Link to="/kontakt">
                        Jetzt anfragen
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MesseCaseStudy;
