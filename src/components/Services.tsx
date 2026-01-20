import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, Palette, PenTool, Clock, Settings, Gift, Home, Boxes } from "lucide-react";

const Services = () => {
  const services = [{
    icon: Cpu,
    title: "Einzelanfertigungen",
    description: "Millimetergenaue Spezialanfertigungen vom Entwurf bis zum fertigen Produkt.",
    features: ["Individuelle Designs", "Millimetergenauigkeit", "Maßanfertigungen", "Komplette Begleitung"]
  }, {
    icon: Palette,
    title: "Dekoration & Wohnaccessoires",
    description: "Kompromisslos nachhaltige Einrichtung in allen Farben, Varianten, Größen und Formen.",
    features: ["Stilvolle Designs", "Alle Farben verfügbar", "Verschiedene Größen", "Nachhaltige Materialien"]
  }, {
    icon: Boxes,
    title: "Modellbau & Architektur",
    description: "Präzise Architekturmodelle, Miniaturmodelle und Dioramen für Präsentationen und Sammler.",
    features: ["Architekturmodelle", "Miniaturmodelle", "Dioramen", "Präsentationsmodelle"]
  }, {
    icon: Gift,
    title: "Geschenke & Personalisierung",
    description: "Individuelle Geschenke, Namensschilder, Figuren und personalisierte Unikate.",
    features: ["Personalisierte Geschenke", "Namensschilder", "Individuelle Figuren", "Unikate"]
  }, {
    icon: PenTool,
    title: "Kunst & Design",
    description: "Kunstobjekte, Skulpturen und Design-Studien für Künstler und Designer.",
    features: ["Kunstobjekte", "Skulpturen", "Design-Studien", "Kreative Projekte"]
  }, {
    icon: Clock,
    title: "Express Service",
    description: "Schnelle Fertigung in 24-48h und kostenlose Beratung für Ihr 3D-Druck Projekt.",
    features: ["24-48h Lieferung", "Kostenlose Beratung", "Faire Preise", "Schnelle Abwicklung"]
  }];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Unsere <span className="text-gradient">3D-Druck Leistungen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Unser professioneller <strong className="text-primary">FDM 3D-Druck Service</strong> aus Oberösterreich bietet umfassende Lösungen 
            für Dekoration, Modellbau und individuelle Geschenke. Von <a href="/einzelanfertigungen" className="text-primary hover:underline font-semibold">Einzelanfertigungen</a> bis zu 
            personalisierten Unikaten - wir realisieren Ihre Projekte mit nachhaltigen Materialien 
            aus Oberösterreich.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <strong className="text-primary">ekdruck e.U.</strong> ist spezialisiert auf{" "}
            <strong className="text-primary">FDM 3D-Druck</strong> für{" "}
            <strong className="text-primary">Modellbau</strong>,{" "}
            <strong className="text-primary">Dekoration</strong> und{" "}
            <strong className="text-primary">individuelle Geschenke</strong> für ganz Österreich. Mit unserem{" "}
            <strong className="text-primary">Express Service</strong> erhalten Sie
            Ihre Objekte bereits in 24-48 Stunden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 gradient-card border-0 hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="shadow-lg group" onClick={() => window.location.href = '/kostenrechner'}>
            <Settings className="mr-2 h-5 w-5 group-hover:rotate-90 transition-transform duration-500" />
            Teil konfigurieren & bestellen
          </Button>
          
          {/* KI Chat Hinweis */}
          <p className="text-sm text-muted-foreground mt-4">
            oder nutzen Sie unseren <span className="font-semibold text-foreground">🤖 KI-Berater</span> für schnelle Antworten
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;