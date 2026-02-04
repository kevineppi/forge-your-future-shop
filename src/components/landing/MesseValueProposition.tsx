import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  TrendingUp, 
  Weight, 
  Sparkles, 
  Clock,
  RefreshCcw,
  Banknote,
  ArrowRight,
  Zap
} from "lucide-react";

interface MesseValuePropositionProps {
  regionName: string;
}

const MesseValueProposition = ({ regionName }: MesseValuePropositionProps) => {
  const comparisons = [
    {
      metric: "Gewicht",
      traditional: "10-50 kg",
      printed: "2-10 kg",
      advantage: "80% leichter",
      icon: Weight,
      color: "from-blue-500 to-cyan-500"
    },
    {
      metric: "Lieferzeit",
      traditional: "4-8 Wochen",
      printed: "3-7 Tage",
      advantage: "Express 24h",
      icon: Clock,
      color: "from-amber-500 to-orange-500"
    },
    {
      metric: "Komplexität",
      traditional: "Eingeschränkt",
      printed: "Unbegrenzt",
      advantage: "Filigrane Details",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-background" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 relative">
        <AnimatedSection animation="fade-in" className="max-w-6xl mx-auto">
          {/* Header with floating badge */}
          <div className="text-center mb-16">
            <AnimatedSection animation="scale-in" delay={100}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/20 text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-lg">
                <Zap className="w-4 h-4" />
                Revolutionäre Technologie
              </div>
            </AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text">
              Warum 3D-Druck?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Der entscheidende Vorteil für Aussteller in {regionName}
            </p>
          </div>

          {/* Bento-style comparison grid */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {comparisons.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={index} animation="slide-up" delay={150 + index * 100}>
                  <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-card/80 to-card backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                    {/* Gradient accent bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                    
                    {/* Floating icon background */}
                    <div className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    <CardContent className="p-8 relative">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-6">{item.metric}</h3>
                      
                      <div className="space-y-4">
                        {/* Traditional - struck through */}
                        <div className="flex items-center justify-between p-3 rounded-xl bg-red-500/5 border border-red-500/10">
                          <span className="text-sm text-muted-foreground">Traditionell</span>
                          <span className="font-medium text-red-500/70 line-through">{item.traditional}</span>
                        </div>
                        
                        {/* 3D Print - highlighted */}
                        <div className="flex items-center justify-between p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                          <span className="text-sm font-medium text-green-700 dark:text-green-400">3D-Druck</span>
                          <span className="font-bold text-green-600 dark:text-green-400 text-lg">{item.printed}</span>
                        </div>
                        
                        {/* Advantage badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-semibold shadow-lg`}>
                          <TrendingUp className="w-4 h-4" />
                          {item.advantage}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Bottom stats bar */}
          <AnimatedSection animation="fade-in" delay={500}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Änderungen", value: "Blitzschnell", icon: RefreshCcw },
                { label: "Transport", value: "Kostengünstig", icon: Banknote },
                { label: "Skalierung", value: "Jede Größe", icon: TrendingUp },
                { label: "Details", value: "Mikro-Präzision", icon: Sparkles }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group flex items-center gap-3 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
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

export default MesseValueProposition;
