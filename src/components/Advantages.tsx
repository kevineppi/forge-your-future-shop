import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, DollarSign, Clock, Cpu, Recycle, Wrench } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Schnelle Prototypenerstellung",
      description: "Von der Idee zum physischen Prototyp in nur wenigen Stunden statt Wochen.",
      comparison: "Traditionelle Fertigung: 2-4 Wochen"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Kosteneffiziente Kleinserien",
      description: "Keine teuren Werkzeuge oder Formen erforderlich - ideal für kleine Stückzahlen.",
      comparison: "Spritzguss: Werkzeugkosten ab €10.000"
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Komplexe Geometrien",
      description: "Herstellung von Teilen mit internen Strukturen und komplexen Formen, die anders nicht möglich sind.",
      comparison: "CNC-Fräsen: Begrenzte Geometrien"
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "Individuelle Anpassungen",
      description: "Jedes Teil kann individuell angepasst werden ohne zusätzliche Kosten.",
      comparison: "Traditionell: Neue Werkzeuge pro Variante"
    },
    {
      icon: <Recycle className="w-8 h-8 text-primary" />,
      title: "Nachhaltigkeit",
      description: "Minimaler Materialverbrauch durch additive Fertigung - nur das wird gedruckt, was benötigt wird.",
      comparison: "Spanende Fertigung: Bis zu 90% Abfall"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "On-Demand Produktion",
      description: "Produzieren Sie nur das, was Sie brauchen, wann Sie es brauchen.",
      comparison: "Traditionell: Große Mindestbestellmengen"
    }
  ];

  const costComparison = [
    {
      category: "Prototyping",
      traditional: "€2.000 - €10.000",
      printing: "€50 - €500",
      savings: "Bis zu 95% Ersparnis"
    },
    {
      category: "Kleinserien (1-100 Stück)",
      traditional: "€10.000 - €50.000",
      printing: "€500 - €5.000",
      savings: "Bis zu 90% Ersparnis"
    },
    {
      category: "Komplexe Teile",
      traditional: "€5.000 - €25.000",
      printing: "€200 - €2.000",
      savings: "Bis zu 92% Ersparnis"
    }
  ];

  return (
    <section id="advantages" className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vorteile des <span className="text-gradient">3D-Drucks</span> gegenüber traditioneller Fertigung
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entdecken Sie die revolutionären Vorteile der additiven Fertigung gegenüber traditionellen Herstellungsverfahren. 
            Erfahren Sie mehr über unsere <a href="/fdm-3d-druck" className="text-primary hover:underline font-semibold">FDM-Technologie</a> und 
            <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Express-Services</a>.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <Card key={index} className="gradient-card border-0 hover:shadow-card transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  {advantage.icon}
                </div>
                <CardTitle className="text-lg">{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">{advantage.description}</p>
                <Badge variant="outline" className="text-xs">
                  {advantage.comparison}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cost Comparison Table */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            Kostenvergleich: <span className="text-gradient">3D-Druck vs. Traditionelle Fertigung</span> in Oberösterreich
          </h3>
          
          <div className="max-w-4xl mx-auto">
            {/* Mobile Version - Stacked Cards */}
            <div className="md:hidden space-y-4">
              {costComparison.map((item, index) => (
                <Card key={index} className="gradient-card border-0">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-lg mb-4">{item.category}</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Traditionelle Fertigung:</span>
                        <span className="font-medium">{item.traditional}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">3D-Druck:</span>
                        <span className="font-medium text-primary">{item.printing}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-border/30">
                        <span className="text-sm font-medium">Ersparnis:</span>
                        <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                          {item.savings}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Desktop Version - Table */}
            <Card className="gradient-card border-0 hidden md:block">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="text-left p-6 font-semibold">Anwendungsbereich</th>
                        <th className="text-center p-6 font-semibold">Traditionelle Fertigung</th>
                        <th className="text-center p-6 font-semibold">3D-Druck</th>
                        <th className="text-center p-6 font-semibold">Ersparnis</th>
                      </tr>
                    </thead>
                    <tbody>
                      {costComparison.map((item, index) => (
                        <tr key={index} className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                          <td className="p-6 font-medium">{item.category}</td>
                          <td className="p-6 text-center text-muted-foreground">{item.traditional}</td>
                          <td className="p-6 text-center text-primary font-medium">{item.printing}</td>
                          <td className="p-6 text-center">
                            <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                              {item.savings}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Advantages;