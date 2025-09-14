import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cpu, 
  Wrench, 
  Palette, 
  Zap, 
  PenTool, 
  Clock,
  ArrowRight,
  Factory,
  Layers3,
  Recycle
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: "Einzelanfertigungen",
      description: "Millimetergenaue Spezialanfertigungen vom technischen Entwurf bis zum fertigen Produkt.",
      features: ["Technischer Entwurf", "Millimetergenauigkeit", "Individuelle Lösungen", "Komplette Begleitung"]
    },
    {
      icon: Palette,
      title: "Nachhaltige Inneneinrichtung",
      description: "Kompromisslos nachhaltige Einrichtung in allen Farben, Varianten, Größen und Formen.",
      features: ["Stilvolle Designs", "Alle Farben verfügbar", "Verschiedene Größen", "Nachhaltige Materialien"]
    },
    {
      icon: Wrench,
      title: "Serienfertigung",
      description: "Maßgeschneiderte Prototypen, Kleinserien und individuelle Fertigungslösungen mit Präzision.",
      features: ["Kleinserien", "Prototypenerstellung", "Präzisionsfertigung", "Zuverlässige Qualität"]
    },
    {
      icon: PenTool,
      title: "Planung / Konstruktion",
      description: "Professionelle 3D-Modellierung und technische Konstruktion für Ihre individuellen Projekte.",
      features: ["3D-Modellierung", "Technische Zeichnungen", "CAD-Konstruktion", "Design-Optimierung"]
    },
    {
      icon: Clock,
      title: "Regionale Fertigung",
      description: "Kurze Wege, persönlicher Kontakt und schnelle Lieferzeiten direkt aus Oberösterreich.",
      features: ["Persönliche Beratung", "Kurze Lieferwege", "Lokale Fertigung", "Schnelle Abwicklung"]
    },
    {
      icon: Zap,
      title: "Kostenlose Beratung",
      description: "Individuelle und kostenlose Beratung für Ihr 3D-Druck Projekt. Faire Preise garantiert.",
      features: ["Kostenlose Beratung", "Individuelle Angebote", "Faire Preise", "Langfristige Partnerschaft"]
    }
  ];

  const specializedServices = [
    {
      icon: Layers3,
      title: "FDM 3D-Druck",
      description: "Professioneller FDM 3D-Druck Service mit Schichtauflösung bis 0,1mm",
      link: "/fdm-3d-druck",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Express Prototypen in 24-48h für schnelle Produktentwicklung",
      link: "/rapid-prototyping",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Recycle,
      title: "Nachhaltige Materialien",
      description: "Premium Filament aus österreichischen Industrieabfällen",
      link: "/3d-druck-materialien",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: PenTool,
      title: "Einzelanfertigungen",
      description: "Custom Parts & Unikate - von der Idee zum fertigen Produkt",
      link: "/einzelanfertigungen",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Factory,
      title: "Serienfertigung",
      description: "Kleinserien 10-10.000 Stück ohne Werkzeugkosten",
      link: "/serienfertigung",
      gradient: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Unsere <span className="text-gradient">3D-Druck Leistungen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Von Einzelanfertigungen bis zur Serienfertigung - nachhaltige 3D-Druck Lösungen 
            aus Oberösterreich für jeden Bedarf.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 gradient-card border-0">
              <CardHeader>
                <div className="w-16 h-16 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
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
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            Individuelles Angebot
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Specialized Services Section */}
      <div className="container mx-auto px-4 mt-24">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Unsere <span className="text-gradient">Spezialdienste</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie unsere fokussierten 3D-Druck Services mit detaillierten Informationen 
            und spezialisierten Lösungen für jeden Anwendungsbereich.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {specializedServices.map((service, index) => (
            <Link key={index} to={service.link} className="group">
              <Card className="h-full hover:shadow-card transition-all duration-300 gradient-card border-0 group-hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:shadow-glow transition-all duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm text-center group-hover:text-foreground transition-colors">
                    {service.description}
                  </CardDescription>
                  <div className="flex items-center justify-center mt-4 text-primary group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium">Mehr erfahren</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;