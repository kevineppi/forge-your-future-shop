import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Building2, 
  Layers, 
  Clock, 
  Ruler, 
  CheckCircle, 
  ArrowRight,
  Star,
  MapPin,
  Palette,
  Eye
} from "lucide-react";

const Architekturmodelle = () => {
  const benefits = [
    {
      icon: Layers,
      title: "Maßstabsgetreue Präzision",
      description: "Detailgetreue Umsetzung komplexer Gebäudestrukturen in Maßstäben von 1:50 bis 1:500"
    },
    {
      icon: Clock,
      title: "Schnelle Umsetzung",
      description: "Von der 3D-Datei zum fertigen Modell in 3-5 Werktagen, Express in 24-48h möglich"
    },
    {
      icon: Palette,
      title: "Vielfältige Oberflächen",
      description: "Weiße Studienmodelle, farbige Präsentationsmodelle oder transparente Elemente"
    },
    {
      icon: Ruler,
      title: "Flexible Größen",
      description: "Modelle von wenigen Zentimetern bis zu großformatigen Präsentationsobjekten"
    }
  ];

  const useCases = [
    {
      title: "Wettbewerbsmodelle",
      description: "Überzeugende Präsentation Ihrer Entwürfe bei Architekturwettbewerben",
      details: ["Schnelle Umsetzung für Deadlines", "Hochwertige Oberflächen", "Mehrere Varianten möglich"]
    },
    {
      title: "Kundenpräsentationen",
      description: "Beeindrucken Sie Bauherren mit greifbaren Modellen Ihrer Planung",
      details: ["Maßstabsgetreu und detailliert", "Professionelles Erscheinungsbild", "Nachhaltige Materialien"]
    },
    {
      title: "Studienmodelle",
      description: "Schnelle Konzeptmodelle für die Entwurfsphase",
      details: ["Kosteneffizient", "Schnelle Iteration", "Verschiedene Varianten"]
    },
    {
      title: "Städtebauliche Modelle",
      description: "Quartiere und städtebauliche Zusammenhänge visualisieren",
      details: ["Modularer Aufbau möglich", "Große Formate", "Umgebungsmodellierung"]
    }
  ];

  const materials = [
    { name: "PLA Weiß", use: "Studienmodelle, saubere Oberflächen", price: "Ab €20" },
    { name: "PLA Grau", use: "Betonstruktur, Rohbau-Optik", price: "Ab €22" },
    { name: "PETG Transparent", use: "Glasflächen, Fassadenelemente", price: "Ab €25" },
    { name: "Holz-Filament", use: "Natürliche Holzoptik", price: "Ab €28" }
  ];

  return (
    <>
      <Helmet>
        <title>3D-Druck Architekturmodelle | Maßstabsmodelle für Architekten | ekdruck.at</title>
        <meta name="description" content="Präzise 3D-gedruckte Architekturmodelle für Wettbewerbe, Kundenpräsentationen und Studien. Maßstabsgetreu, schnell und in höchster Qualität. Ab €20 pro Teil." />
        <meta name="keywords" content="Architekturmodell 3D-Druck, Architekturmodelle drucken lassen, Wettbewerbsmodell, Präsentationsmodell, Gebäudemodell, Architektur Modellbau" />
        <link rel="canonical" href="https://ek-druck.at/architekturmodelle" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Building2 className="w-4 h-4" />
                  Für Architekten & Planer
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Architekturmodelle in<br />
                  <span className="text-primary">höchster Präzision</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Verwandeln Sie Ihre CAD-Entwürfe in beeindruckende physische Modelle. 
                  Perfekt für Wettbewerbe, Kundenpräsentationen und Entwurfsstudien.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="hero">
                    <Link to="/3d-druck-bestellen">
                      Jetzt Modell bestellen
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/referenzen">Beispiele ansehen</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-6 mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm font-medium">5.0 Google</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    Made in Austria
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 aspect-square flex items-center justify-center">
                  <Building2 className="w-32 h-32 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Warum 3D-Druck für Architekturmodelle?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Schneller, präziser und flexibler als traditioneller Modellbau
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Anwendungsbereiche</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Von der Konzeptskizze bis zum finalen Präsentationsmodell
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground mb-4">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Empfohlene Materialien</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Für jede Anwendung das passende Material
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {materials.map((material, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold mb-2">{material.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{material.use}</p>
                    <span className="text-primary font-bold">{material.price}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/materialien">Alle Materialien ansehen</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Bereit für Ihr Architekturmodell?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Laden Sie Ihre 3D-Datei hoch und erhalten Sie sofort einen Preis. 
              Keine versteckten Kosten, keine Wartezeit auf Angebote.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/3d-druck-bestellen">
                <Eye className="mr-2 w-5 h-5" />
                Jetzt Preis berechnen
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Architekturmodelle;