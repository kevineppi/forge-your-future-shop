import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, PenTool, Clock, Gift, Home, Sparkles, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [{
    icon: Home,
    title: "Architekturmodelle",
    description: "Maßstabsgetreue Modelle für Architekten, Planer und Immobilienentwickler.",
    features: ["Maßstäbe 1:50 bis 1:500", "Hochdetailliert", "Präsentationsfertig", "Mehrfarbig möglich"],
    link: "/architekturmodelle"
  }, {
    icon: Sparkles,
    title: "Messemodelle",
    description: "Beeindruckende Modelle und Objekte für Messen, Events und Ausstellungen.",
    features: ["XXL-Objekte möglich", "Express 24h", "Transportfähig", "Blickfang-Garantie"],
    link: "/messemodelle"
  }, {
    icon: Palette,
    title: "Dekorationsobjekte",
    description: "Individuelle Dekorationen für Wohnräume, Schaufenster und öffentliche Räume.",
    features: ["Alle Größen", "20+ Farben", "Nachhaltige Materialien", "Wetterfest möglich"],
    link: "/einzelanfertigungen"
  }, {
    icon: Gift,
    title: "Kunstobjekte & Unikate",
    description: "Einzigartige Skulpturen und Kunstgegenstände für Künstler und Sammler.",
    features: ["Individuelle Designs", "Spezialeffekte", "Künstlerberatung", "Limitierte Editionen"],
    link: "/kunstobjekte"
  }, {
    icon: PenTool,
    title: "Design & Konstruktion",
    description: "Keine CAD-Datei? Wir erstellen 3D-Modelle nach Ihren Skizzen oder Fotos.",
    features: ["CAD-Erstellung", "Design-Beratung", "Optimierung", "Technische Zeichnungen"],
    link: "/kontakt"
  }, {
    icon: Clock,
    title: "Express Service",
    description: "Schnelle Fertigung in 24-48h für dringende Modell- und Dekorationsprojekte.",
    features: ["24-48h Lieferung", "Kostenlose Beratung", "Faire Preise", "Priorität"],
    link: "/kontakt"
  }];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Unsere <span className="text-gradient">3D-Druck Leistungen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Professioneller <strong className="text-primary">FDM 3D-Druck Service</strong> aus Oberösterreich für 
            Anschauungsmodelle, Dekorationsobjekte und Kunstgegenstände.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mit nachhaltigen Materialien aus Österreich und persönlicher Beratung 
            setzen wir Ihre visuellen und dekorativen Projekte um.
          </p>
        </div>

        {/* Legal Notice */}
        <div className="max-w-3xl mx-auto mb-12 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Hinweis:</strong> Gemäß unserer Gewerbeberechtigung fertigen wir ausschließlich 
              Anschauungsmodelle, Dekorationsobjekte und Kunst-/Ziergegenstände. 
              <strong> Keine Funktionsteile oder technische Bauteile.</strong>
            </div>
          </div>
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
                {service.link && (
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link to={service.link}>Mehr erfahren</Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="shadow-lg group" asChild>
            <Link to="/kontakt">
              <PenTool className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-500" />
              Projekt anfragen
            </Link>
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            oder nutzen Sie unseren <span className="font-semibold text-foreground">🤖 KI-Berater</span> für schnelle Antworten
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
