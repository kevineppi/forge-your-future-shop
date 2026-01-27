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
  Heart,
  Gem,
  Eye,
  Layers,
  Lightbulb,
  Maximize,
  Infinity
} from "lucide-react";

const Kunstobjekte = () => {
  const stats = [
    { value: "∞", label: "Formfreiheit", description: "Unmögliches wird möglich" },
    { value: "0.1mm", label: "Feinste Details", description: "Schichtauflösung" },
    { value: "20+", label: "Farben", description: "Zur Auswahl" },
    { value: "2m+", label: "Maximalgröße", description: "Für große Installationen" }
  ];

  const benefits = [
    {
      icon: Shapes,
      title: "Grenzenlose Formen",
      description: "Realisieren Sie Geometrien, die mit traditionellen Methoden wie Guss, Schnitzen oder Formen unmöglich wären. Hinterschnitte, organische Strukturen und komplexe Verschachtelungen."
    },
    {
      icon: Sparkles,
      title: "Einzigartige Unikate",
      description: "Jedes Objekt ein Einzelstück – individuell gefertigt nach Ihrem digitalen Entwurf. Perfekt für limitierte Editionen oder Einzelwerke."
    },
    {
      icon: Palette,
      title: "Vielfältige Materialien",
      description: "Von klassischem Weiß über Holz-Optik bis zu transparenten Effekten. Auch Marmor-Look, Metalloptik und über 20 Farben verfügbar."
    },
    {
      icon: Gem,
      title: "Hochwertige Ausführung",
      description: "Feine Details mit 0.1mm Schichtauflösung und glatte Oberflächen für anspruchsvolle Kunstwerke. Nachbearbeitung auf Wunsch möglich."
    }
  ];

  const useCases = [
    {
      title: "Skulpturen & Plastiken",
      description: "Digitale Entwürfe in physische Kunstwerke verwandeln. 3D-Druck ermöglicht Formen, die in Bronze, Stein oder Holz nicht realisierbar wären.",
      details: ["Komplexe organische Formen", "Skalierbar von 5cm bis 2m+", "Nachbearbeitung möglich"],
      icon: Gem,
      example: "Künstler wie Peter Lang nutzen 3D-Druck für monumentale Skulpturen wie 'SKER' (7,5m Durchmesser)"
    },
    {
      title: "Installationen & Environments",
      description: "Modulare Elemente für raumgreifende Kunstinstallationen. Reproduzierbare Module ermöglichen komplexe, repetitive Strukturen.",
      details: ["Reproduzierbare Elemente", "Leichtes Material (ideal für Hängungen)", "Einfache Montage"],
      icon: Layers,
      example: "Ideal für Museen, Galerien und öffentliche Kunstprojekte"
    },
    {
      title: "Design-Objekte & Dekoration",
      description: "Funktionale Kunstwerke für Innenräume und Außenbereiche. Von Vasen über Lampen bis zu großformatigen Dekorationsobjekten.",
      details: ["Indoor und Outdoor geeignet", "Individuelle Größen", "Einzigartige Designs"],
      icon: Lightbulb,
      example: "Perfekt für Interior Designer und Einrichtungshäuser"
    },
    {
      title: "Konzeptmodelle & Vorstudien",
      description: "Schnelle Umsetzung von Entwürfen für größere Projekte. Testen Sie Formen, Proportionen und Wirkung bevor Sie aufwändige Techniken einsetzen.",
      details: ["Schnelle Umsetzung ab 3 Tagen", "Kosteneffizient ab €20", "Iterative Entwicklung"],
      icon: Eye,
      example: "Für Bildhauer, Designer und Kunsthochschulen"
    }
  ];

  const artistQuotes = [
    {
      quote: "Der 3D-Druck gibt dem Motto 'Die Kunst kennt keine Grenzen' eine vollkommen neue Bedeutung.",
      source: "3Dnatives",
      context: "Über die Revolution in der Kunstwelt"
    },
    {
      quote: "Die Arbeit mit additiven Fertigungsverfahren ermöglicht die Verwirklichung von hochkomplexen Geometrien.",
      source: "3D Natives",
      context: "Zur Designfreiheit durch 3D-Druck"
    }
  ];

  const materials = [
    { name: "PLA Standard", use: "Klassische Skulpturen, saubere Oberflächen", colors: "20+ Farben", popular: true },
    { name: "PETG Transparent", use: "Lichteffekte, durchscheinende Objekte", colors: "Klar, Farbig", popular: true },
    { name: "Holz-Filament", use: "Natürliche Optik, warme Ausstrahlung", colors: "Holztöne", popular: false },
    { name: "Marmor-Optik", use: "Elegante Steinoptik", colors: "Weiß-Grau", popular: false }
  ];

  const techniques = [
    { name: "Direkte Fertigung", desc: "Digitales Modell wird direkt zum fertigen Kunstwerk" },
    { name: "Gussform-Herstellung", desc: "3D-gedruckte Formen für Bronze-, Gips- oder Kunstharzguss" },
    { name: "Hybrid-Techniken", desc: "Kombination aus 3D-Druck und traditioneller Nachbearbeitung" },
    { name: "Modulare Systeme", desc: "Einzelne 3D-gedruckte Elemente zu größeren Werken kombiniert" }
  ];

  return (
    <>
      <Helmet>
        <title>3D-Druck Kunstobjekte | Skulpturen & Installationen für Künstler | ekdruck.at</title>
        <meta name="description" content="Verwandeln Sie digitale Entwürfe in einzigartige Kunstobjekte. 3D-Druck für Skulpturen, Installationen und Design-Objekte. Grenzenlose kreative Möglichkeiten ab €20." />
        <meta name="keywords" content="3D-Druck Kunst, Skulpturen drucken, Kunstobjekte, Design-Objekte, 3D-Druck Künstler, Installation, Plastiken, Bildhauer" />
        <link rel="canonical" href="https://ek-druck.at/kunstobjekte" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
          <div className="absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
          
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Palette className="w-4 h-4" />
                  Für Künstler & Kreative
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Kunst ohne<br />
                  <span className="text-primary">Grenzen formen</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                  Verwandeln Sie Ihre digitalen Visionen in greifbare Kunstwerke. 
                  Der 3D-Druck eröffnet Ihnen Möglichkeiten, die mit traditionellen 
                  Techniken wie Guss, Schnitzen oder Formen unerreichbar wären.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="hero" className="text-base">
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
                    <Heart className="w-4 h-4 text-primary" />
                    Mit Leidenschaft gefertigt
                  </div>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className={`${index === 0 ? 'bg-primary text-primary-foreground' : 'bg-card'} border-0 shadow-lg hover:shadow-xl transition-shadow`}>
                    <CardContent className="p-6">
                      <div className={`text-3xl md:text-4xl font-bold mb-1 ${index === 0 ? '' : 'text-primary'}`}>
                        {stat.value}
                      </div>
                      <div className={`font-semibold mb-1 ${index === 0 ? 'text-primary-foreground/90' : ''}`}>
                        {stat.label}
                      </div>
                      <div className={`text-sm ${index === 0 ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                        {stat.description}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quote Banner */}
        <section className="py-12 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-xl md:text-2xl font-medium italic text-foreground mb-4">
                "{artistQuotes[0].quote}"
              </blockquote>
              <cite className="text-sm text-muted-foreground">— {artistQuotes[0].source}</cite>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Warum 3D-Druck für Kunst?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Neue kreative Möglichkeiten durch digitale Fertigung
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 hover:shadow-lg transition-all group">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <benefit.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Techniques */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Techniken & Möglichkeiten</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vielfältige Ansätze für Ihr künstlerisches Projekt
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {techniques.map((tech, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Infinity className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground">{tech.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Kreative Anwendungen</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vielfältige Möglichkeiten für Ihr künstlerisches Schaffen
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <useCase.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{useCase.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{useCase.description}</p>
                    <ul className="space-y-2 mb-4">
                      {useCase.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground italic">💡 {useCase.example}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Materialien für Kunst</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Verschiedene Optiken und Effekte für Ihre Vision
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {materials.map((material, index) => (
                <Card key={index} className={`relative overflow-hidden ${material.popular ? 'border-primary border-2' : ''}`}>
                  {material.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-bl-lg font-medium">
                      Beliebt
                    </div>
                  )}
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-lg mb-2">{material.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{material.use}</p>
                    <span className="text-primary text-sm font-medium">{material.colors}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Second Quote */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8 md:p-12 text-center">
                  <Brush className="w-12 h-12 text-primary mx-auto mb-6" />
                  <blockquote className="text-xl md:text-2xl font-medium italic text-foreground mb-4">
                    "{artistQuotes[1].quote}"
                  </blockquote>
                  <cite className="text-sm text-muted-foreground block mb-6">— {artistQuotes[1].source}, {artistQuotes[1].context}</cite>
                  <Button asChild variant="default" size="lg">
                    <Link to="/3d-druck-bestellen">
                      Ihr Projekt starten
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          <div className="container mx-auto px-4 text-center relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bereit für Ihr Kunstprojekt?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg">
              Laden Sie Ihre 3D-Datei hoch und erhalten Sie sofort einen Preis. 
              Bei Fragen zu Ihrem Projekt beraten wir Sie gerne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link to="/3d-druck-bestellen">
                  <Eye className="mr-2 w-5 h-5" />
                  Jetzt Preis berechnen
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="#contact">Beratung anfragen</a>
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
