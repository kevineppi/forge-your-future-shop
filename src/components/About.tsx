import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Zap, Target, CheckCircle } from "lucide-react";
const About = () => {
  const capabilities = ["Einzelanfertigungen & Spezialanfertigungen", "Nachhaltige Inneneinrichtung", "Serienfertigung & Kleinserien", "Technischer Entwurf & Beratung", "Millimetergenaue Präzision", "Express-Service verfügbar"];
  const materials = ["100% Österreichisches Filament", "Hergestellt aus Industrieabfällen", "PLA & PLA+ nachhaltig", "PETG regional", "ABS aus Austria", "Flexible Materialien", "Alle Farben verfügbar", "Verschiedene Größen", "Umweltfreundlich", "Ressourcenschonend"];
  const values = [{
    icon: Target,
    title: "Nachhaltigkeit",
    description: "100% österreichisches Filament aus Industrieabfällen für ressourcenschonende Produktion"
  }, {
    icon: Zap,
    title: "Regionalität",
    description: "Kurze Wege, persönlicher Kontakt und schnelle Lieferzeiten aus Oberösterreich"
  }, {
    icon: Users,
    title: "Kundennähe",
    description: "Langfristige Partnerschaften und kostenlose, individuelle Beratung für jeden Kunden"
  }, {
    icon: Award,
    title: "Qualität",
    description: "Hohe Qualitätsansprüche und millimetergenaue Präzision bei jedem Projekt"
  }];
  return <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Über <span className="text-gradient">ekdruck e.U.</span> - Ihr 3D-Druck Partner
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Ihr regionaler 3D-Druck Partner aus Oberösterreich. Nachhaltige Fertigung mit österreichischem Filament, persönliche Beratung und kurze Lieferwege nach Wels, Salzburg und ganz Österreich.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Company Story */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Unsere Mission - Nachhaltiger 3D-Druck aus Oberösterreich</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>ekdruck e.U. ist Ihr vertrauensvoller 3D-Druck Partner aus Oberösterreich. Wir bieten maßgeschneiderte Prototypen, Kleinserien und individuelle Fertigungslösungen aus Oberösterreich - mit kurzen Lieferwegen nach Salzburg und ganz Österreich.</p>
              <p>Als regionaler 3D-Druck Spezialist legen wir Wert auf persönliche Beratung und langfristige Kundenpartnerschaften. Unser Standort in Oberösterreich ermöglicht schnelle Reaktionszeiten und direkten Kontakt zu unseren Kunden in Österreich und der Dach - Region.</p>
              <p>
                Um ressourcenschonend zu produzieren, beziehen wir unser Filament ausschließlich aus 
                Österreich, wo es aus Industrieabfällen hergestellt wird. So verbinden wir Qualität 
                mit Nachhaltigkeit.
              </p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Unsere Werte - Nachhaltigkeit & Qualität</h3>
            <div className="space-y-6">
              {values.map((value, index) => <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{value.title}</h4>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>

        {/* Capabilities and Materials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="gradient-card border-0">
            <CardContent className="p-8">
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                Unsere 3D-Druck Leistungen
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {capabilities.map((capability, index) => <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">{capability}</span>
                  </div>)}
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-card border-0">
            <CardContent className="p-8">
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <CheckCircle className="mr-3 h-6 w-6 text-secondary" />
                Nachhaltige 3D-Druck Materialien aus Österreich
              </h4>
              <div className="flex flex-wrap gap-2">
                {materials.map((material, index) => <Badge key={index} variant="outline" className="text-xs">
                    {material}
                  </Badge>)}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default About;