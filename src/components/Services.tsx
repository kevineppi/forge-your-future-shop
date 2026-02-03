import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, Palette, PenTool, Clock, Settings, Gift, Home, Boxes } from "lucide-react";

const Services = () => {
  const services = [{
    icon: Cpu,
    title: "Einzelanfertigungen",
    description: "Individuelle 3D-Objekte nach Ihren Vorgaben – präzise und maßgeschneidert.",
    features: ["Individuelle Designs", "Millimetergenauigkeit", "Maßanfertigungen", "Persönliche Beratung"]
  }, {
    icon: Boxes,
    title: "Projekte für Firmenkunden",
    description: "Zuverlässiger Partner für Ihre Unternehmensprojekte – von der Idee bis zum fertigen Objekt.",
    features: ["B2B-Service", "Projektbegleitung", "Flexible Stückzahlen", "Schnelle Umsetzung"]
  }, {
    icon: Palette,
    title: "Kreative Projekte",
    description: "Verwirklichen Sie Ihre kreativen Ideen – in allen Farben, Formen und Größen.",
    features: ["Alle Farben verfügbar", "Verschiedene Größen", "Nachhaltige Materialien", "Freie Gestaltung"]
  }, {
    icon: Gift,
    title: "Personalisierte Objekte",
    description: "Einzigartige Unikate und personalisierte Stücke für besondere Anlässe.",
    features: ["Personalisierung", "Unikate", "Besondere Anlässe", "Individuelle Gravuren"]
  }, {
    icon: PenTool,
    title: "Design & Konstruktion",
    description: "Keine CAD-Datei? Wir erstellen 3D-Modelle nach Ihren Skizzen oder Fotos.",
    features: ["CAD-Erstellung", "Design-Beratung", "Optimierung", "Technische Zeichnungen"]
  }, {
    icon: Clock,
    title: "Express Service",
    description: "Schnelle Fertigung in 24-48h für dringende Projekte.",
    features: ["24-48h Lieferung", "Kostenlose Beratung", "Faire Preise", "Priorität"]
  }];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Unsere <span className="text-gradient">3D-Druck Leistungen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Professioneller <strong className="text-primary">FDM 3D-Druck Service</strong> aus Oberösterreich – 
            von <a href="/einzelanfertigungen" className="text-primary hover:underline font-semibold">Einzelanfertigungen</a> bis 
            zu individuellen Projekten für Privat- und Firmenkunden.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mit nachhaltigen Materialien aus Österreich und persönlicher Beratung 
            setzen wir Ihre Projekte professionell um.
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
          <Button variant="hero" size="lg" className="shadow-lg group" asChild>
            <a href="/kontakt">
              <Settings className="mr-2 h-5 w-5 group-hover:rotate-90 transition-transform duration-500" />
              Projekt anfragen
            </a>
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