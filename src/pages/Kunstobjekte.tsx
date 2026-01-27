import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Palette, 
  Sparkles, 
  Shapes, 
  Brush, 
  CheckCircle, 
  ArrowRight,
  Star,
  MapPin,
  Heart,
  Gem
} from "lucide-react";

const Kunstobjekte = () => {
  const benefits = [
    {
      icon: Shapes,
      title: "Grenzenlose Formen",
      description: "Realisieren Sie Geometrien, die mit traditionellen Methoden unmöglich wären"
    },
    {
      icon: Sparkles,
      title: "Einzigartige Stücke",
      description: "Jedes Objekt ein Unikat – individuell gefertigt nach Ihrem Entwurf"
    },
    {
      icon: Palette,
      title: "Vielfältige Materialien",
      description: "Von klassisch weiß über Holz-Optik bis zu transparenten Effekten"
    },
    {
      icon: Gem,
      title: "Hochwertige Ausführung",
      description: "Feine Details und glatte Oberflächen für anspruchsvolle Kunstwerke"
    }
  ];

  const useCases = [
    {
      title: "Skulpturen & Plastiken",
      description: "Digitale Entwürfe in physische Kunstwerke verwandeln",
      details: ["Komplexe organische Formen", "Skalierbar in jeder Größe", "Nachbearbeitung möglich"]
    },
    {
      title: "Installationen",
      description: "Modulare Elemente für raumgreifende Kunstinstallationen",
      details: ["Reproduzierbare Module", "Leichtes Material", "Einfache Montage"]
    },
    {
      title: "Design-Objekte",
      description: "Funktionale Kunstwerke für Innenräume und Gärten",
      details: ["Wetterbeständige Optionen", "Individuelle Größen", "Einzigartige Designs"]
    },
    {
      title: "Künstlerische Prototypen",
      description: "Modelle und Vorstudien für größere Projekte",
      details: ["Schnelle Umsetzung", "Kosteneffizient", "Iterative Entwicklung"]
    }
  ];

  const materials = [
    { name: "PLA Standard", use: "Klassische Skulpturen, saubere Oberflächen", color: "20+ Farben" },
    { name: "PETG Transparent", use: "Lichteffekte, durchscheinende Objekte", color: "Klar, Farbig" },
    { name: "Holz-Filament", use: "Natürliche Optik, warme Ausstrahlung", color: "Holztöne" },
    { name: "Marmor-Optik", use: "Elegante Steinoptik", color: "Weiß-Grau" }
  ];

  return (
    <>
      <Helmet>
        <title>3D-Druck Kunstobjekte | Skulpturen & Design-Objekte | ekdruck.at</title>
        <meta name="description" content="Verwandeln Sie digitale Entwürfe in einzigartige Kunstobjekte. 3D-Druck für Skulpturen, Installationen und Design-Objekte. Grenzenlose kreative Möglichkeiten." />
        <meta name="keywords" content="3D-Druck Kunst, Skulpturen drucken, Kunstobjekte, Design-Objekte, 3D-Druck Künstler, Installation, Plastiken" />
        <link rel="canonical" href="https://ek-druck.at/kunstobjekte" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Palette className="w-4 h-4" />
                  Für Künstler & Kreative
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Kunst ohne<br />
                  <span className="text-primary">Grenzen formen</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Verwandeln Sie Ihre digitalen Visionen in greifbare Kunstwerke. 
                  Der 3D-Druck eröffnet Ihnen Möglichkeiten, die mit traditionellen 
                  Techniken unerreichbar wären.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="hero">
                    <Link to="/3d-druck-bestellen">
                      Kunstwerk realisieren
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/referenzen">Projekte entdecken</Link>
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
                    <Heart className="w-4 h-4" />
                    Mit Leidenschaft gefertigt
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 aspect-square flex items-center justify-center">
                  <Brush className="w-32 h-32 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Warum 3D-Druck für Kunst?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Neue kreative Möglichkeiten durch digitale Fertigung
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
              <h2 className="text-3xl font-bold mb-4">Kreative Anwendungen</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vielfältige Möglichkeiten für Ihr künstlerisches Schaffen
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
              <h2 className="text-3xl font-bold mb-4">Materialien für Kunst</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Verschiedene Optiken und Effekte für Ihre Vision
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {materials.map((material, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold mb-2">{material.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{material.use}</p>
                    <span className="text-primary text-sm font-medium">{material.color}</span>
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
            <h2 className="text-3xl font-bold mb-4">Bereit für Ihr Kunstprojekt?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Laden Sie Ihre 3D-Datei hoch und erhalten Sie sofort einen Preis. 
              Bei Fragen zu Ihrem Projekt beraten wir Sie gerne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/3d-druck-bestellen">
                  Jetzt Preis berechnen
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/kontakt">Beratung anfragen</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Kunstobjekte;