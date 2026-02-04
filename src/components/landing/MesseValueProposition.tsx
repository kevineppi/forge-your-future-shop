import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  Weight, 
  Sparkles, 
  Clock,
  RefreshCcw,
  Banknote
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
      advantage: "Bis zu 80% leichter",
      icon: Weight,
      highlight: true
    },
    {
      metric: "Lieferzeit",
      traditional: "4-8 Wochen",
      printed: "3-7 Tage",
      advantage: "Express in 24-48h",
      icon: Clock,
      highlight: true
    },
    {
      metric: "Änderungen",
      traditional: "Teuer & langsam",
      printed: "Schnell & günstig",
      advantage: "Iterationen möglich",
      icon: RefreshCcw,
      highlight: false
    },
    {
      metric: "Transportkosten",
      traditional: "Hoch (Gewicht)",
      printed: "Niedrig (leicht)",
      advantage: "Einfacher Versand",
      icon: Banknote,
      highlight: false
    },
    {
      metric: "Komplexität",
      traditional: "Eingeschränkt",
      printed: "Nahezu unbegrenzt",
      advantage: "Filigrane Details",
      icon: Sparkles,
      highlight: true
    },
    {
      metric: "Skalierbarkeit",
      traditional: "Aufwendig",
      printed: "Einfach skalierbar",
      advantage: "Jede Größe möglich",
      icon: TrendingUp,
      highlight: false
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              Warum 3D-Druck?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              3D-Druck vs. traditioneller Modellbau
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Warum immer mehr Aussteller in {regionName} auf 3D-gedruckte Messemodelle setzen
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {comparisons.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index} 
                  className={`border-2 transition-all hover:shadow-lg ${
                    item.highlight ? 'border-primary/30 bg-primary/5' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        item.highlight ? 'bg-primary/20' : 'bg-muted'
                      }`}>
                        <Icon className={`w-5 h-5 ${item.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                      <h3 className="font-bold">{item.metric}</h3>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Traditionell:</span>
                        <span className="font-medium text-red-600 line-through opacity-70">{item.traditional}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">3D-Druck:</span>
                        <span className="font-bold text-green-600">{item.printed}</span>
                      </div>
                      <div className="pt-2 border-t border-border">
                        <span className={`text-xs font-bold px-2 py-1 rounded ${
                          item.highlight ? 'bg-primary/20 text-primary' : 'bg-green-100 text-green-700'
                        }`}>
                          {item.advantage}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MesseValueProposition;
