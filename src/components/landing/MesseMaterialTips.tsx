import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  CheckCircle, 
  ArrowRight,
  Lightbulb,
  Palette,
  Shield,
  Feather,
  Sparkles
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

const colorMap = {
  palette: "from-pink-500 to-rose-500",
  shield: "from-blue-500 to-indigo-500",
  feather: "from-green-500 to-emerald-500"
};

const MesseMaterialTips = ({ materials, regionName, industryFocus }: MesseMaterialTipsProps) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/50 via-background to-background" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/20 text-amber-600 dark:text-amber-400 px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
              <Lightbulb className="w-4 h-4" />
              Experten-Empfehlungen
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Das richtige Material für<br />
              <span className="text-primary">{industryFocus}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Basierend auf unserer Erfahrung mit Messen in {regionName}
            </p>
          </AnimatedSection>

          {/* Material cards - Staggered layout */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {materials.map((material, index) => {
              const Icon = iconMap[material.icon];
              const gradient = colorMap[material.icon];
              const isMiddle = index === 1;
              
              return (
                <AnimatedSection 
                  key={index} 
                  animation="slide-up" 
                  delay={100 + index * 100}
                  className={isMiddle ? 'md:-mt-4' : ''}
                >
                  <Card className={`group relative border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full overflow-hidden ${isMiddle ? 'ring-2 ring-primary/20' : ''}`}>
                    {/* Top gradient bar */}
                    <div className={`h-2 bg-gradient-to-r ${gradient}`} />
                    
                    {/* Floating background element */}
                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${gradient} opacity-5 rounded-full group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <CardContent className="p-8 relative">
                      {/* Icon with gradient background */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3">{material.name}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{material.description}</p>
                      
                      {/* Best for list with visual enhancement */}
                      <div className="space-y-3">
                        <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                          Ideal für:
                        </div>
                        {material.bestFor.map((use, useIndex) => (
                          <div 
                            key={useIndex} 
                            className="flex items-center gap-3 p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                          >
                            <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm font-medium">{use}</span>
                          </div>
                        ))}
                      </div>
                      
                      {isMiddle && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full">
                            Beliebt
                          </span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Expert tip box - Enhanced */}
          <AnimatedSection animation="fade-in" delay={500}>
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-primary/5 via-card to-accent/5 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 items-stretch">
                  {/* Left: Icon area */}
                  <div className="bg-gradient-to-br from-primary to-primary/80 p-8 md:p-10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-primary-foreground font-bold text-lg">
                        Experten-Tipp
                      </div>
                      <div className="text-primary-foreground/70 text-sm">
                        für {regionName}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right: Content */}
                  <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">
                      Unsicher welches Material?
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Wir beraten Sie kostenlos und unverbindlich – basierend auf Ihren 
                      Anforderungen an Größe, Optik, Haptik und Budget. Bei komplexen 
                      Projekten senden wir Ihnen gerne vorab <strong>Materialproben</strong> zu.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild size="lg" className="shadow-lg">
                        <Link to="/kontakt">
                          Kostenlose Beratung
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="outline">
                        <Link to="/materialien">
                          Alle Materialien
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default MesseMaterialTips;
