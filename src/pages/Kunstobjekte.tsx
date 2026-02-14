import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/landing/Breadcrumbs";
import FAQSection from "@/components/landing/FAQSection";
import RelatedPages from "@/components/landing/RelatedPages";
import RegionalCoverage from "@/components/landing/RegionalCoverage";
import KeywordRichContent from "@/components/landing/KeywordRichContent";
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

  const faqs = [
    {
      question: "Welche Formen sind mit 3D-Druck für Kunst möglich?",
      answer: "Der 3D-Druck ermöglicht praktisch grenzenlose Formfreiheit. Hinterschnitte, organische Strukturen, filigrane Details und komplexe Verschachtelungen sind realisierbar – Geometrien, die mit traditionellen Methoden wie Guss oder Schnitzen unmöglich wären."
    },
    {
      question: "Welche Materialien eignen sich für Kunstobjekte?",
      answer: "Für Kunst empfehlen wir PLA in über 20 Farben für klassische Skulpturen, PETG Transparent für Lichteffekte, Holz-Filament für natürliche Optik und Marmor-Look für elegante Steinoptik. Jedes Material hat eigene ästhetische Qualitäten."
    },
    {
      question: "Wie groß können 3D-gedruckte Kunstobjekte sein?",
      answer: "Wir fertigen Objekte von wenigen Zentimetern bis über 2 Meter Größe. Größere Werke werden modular konzipiert und nahtlos zusammengefügt – wie bei monumentalen Skulpturen etablierter 3D-Druck-Künstler."
    },
    {
      question: "Eignet sich 3D-Druck für Gussformen?",
      answer: "Ja, 3D-gedruckte Positivformen eignen sich hervorragend für den Abguss in Bronze, Gips oder Kunstharz. Diese Technik wird von vielen Bildhauern für die Kombination digitaler und traditioneller Methoden genutzt."
    },
    {
      question: "Was kosten 3D-gedruckte Kunstobjekte?",
      answer: "Die Kosten hängen von Größe und Komplexität ab. Kleine Konzeptmodelle starten ab ca. €20, größere Skulpturen und Installationselemente liegen typischerweise zwischen €50-300. Nutzen Sie unseren Konfigurator für sofortige Preise."
    },
    {
      question: "Kann ich limitierte Editionen erstellen lassen?",
      answer: "Ja, jedes 3D-Modell kann beliebig oft identisch reproduziert werden. Das macht den 3D-Druck ideal für limitierte Editionen und Multiples – konsistente Qualität bei jeder Auflage."
    }
  ];

  const keywordContent = {
    title: "3D-Druck: Neue Werkzeuge für Künstler",
    intro: "Der 3D-Druck eröffnet Künstlern völlig neue Ausdrucksmöglichkeiten. Was früher nur in der Fantasie existierte, kann heute Realität werden. Immer mehr Bildhauer, Designer und Installations-Künstler in Wien, Graz, Linz und ganz Österreich nutzen additive Fertigung als kreatives Werkzeug.",
    blocks: [
      {
        title: "Vom Digitalen ins Physische",
        content: "Digitale Skulpturen aus ZBrush, Blender oder anderen 3D-Programmen können direkt in physische Objekte übersetzt werden. Der 3D-Druck überbrückt die Lücke zwischen digitaler Kunst und haptischer Erfahrung – eine Revolution für digitale Künstler."
      },
      {
        title: "Unmögliche Geometrien",
        content: "Der 3D-Druck ermöglicht Formen, die mit traditionellen Techniken wie Guss, Schnitzen oder Modellieren nicht realisierbar wären: Ineinander verschachtelte Strukturen, filigrane Gitterwerke, organische Formen mit Hinterschnitten."
      },
      {
        title: "Experimentelle Materialien",
        content: "Neben klassischen Kunststoffen bieten wir Holz-Filament für natürliche Optik, Marmor-Look für Steinästhetik und transparentes PETG für Lichtinstallationen. Jedes Material hat eigene künstlerische Qualitäten."
      },
      {
        title: "Iteratives Arbeiten",
        content: "3D-Druck ermöglicht schnelle Iterationen. Konzeptmodelle können günstig gedruckt, begutachtet und verfeinert werden, bevor das finale Werk in Bronze gegossen oder aufwändig nachbearbeitet wird."
      }
    ]
  };

  const breadcrumbs = [
    { name: "Zielgruppen", url: "#" },
    { name: "Kunstobjekte", url: "/kunstobjekte" }
  ];

  return (
    <>
      <Helmet>
        <title>3D-Druck Kunstobjekte | Skulpturen & Installationen für Künstler | ekdruck.at</title>
        <meta name="description" content="Verwandeln Sie digitale Entwürfe in einzigartige Kunstobjekte. 3D-Druck für Skulpturen, Installationen und Design-Objekte. Grenzenlose kreative Möglichkeiten ab €20." />
        <meta name="keywords" content="3D-Druck Kunst, Skulpturen drucken, Kunstobjekte, Design-Objekte, 3D-Druck Künstler, Installation, Plastiken, Bildhauer" />
        <link rel="canonical" href="https://www.ek-druck.at/kunstobjekte" />
      </Helmet>

      <Navigation />
      <Breadcrumbs items={breadcrumbs} />

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
                    <Link to="/kontakt">
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
                    <Link to="/kontakt">
                      Ihr Projekt starten
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Keyword Rich Content */}
        <KeywordRichContent 
          title={keywordContent.title}
          intro={keywordContent.intro}
          blocks={keywordContent.blocks}
          ctaText="Kunstprojekt starten"
        />

        {/* Regional Coverage */}
        <RegionalCoverage 
          serviceName="Kunstobjekte"
          description="Wir arbeiten mit Künstlern, Galerien und Kunsthochschulen in ganz Österreich zusammen. Von Wien bis Bregenz – Ihre Vision wird Realität."
        />

        {/* FAQ Section */}
        <FAQSection 
          faqs={faqs} 
          title="Häufige Fragen zu Kunstobjekten"
          subtitle="Antworten auf die wichtigsten Fragen rund um 3D-Druck für Künstler"
          schemaId="kunstobjekte"
        />

        {/* Related Pages */}
        <RelatedPages currentPage="/kunstobjekte" />
      </main>

      <Footer />
    </>
  );
};

export default Kunstobjekte;
