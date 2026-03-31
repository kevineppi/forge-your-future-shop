import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/landing/Breadcrumbs";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQSection from "@/components/landing/FAQSection";
import RelatedPages from "@/components/landing/RelatedPages";
import KeywordRichContent from "@/components/landing/KeywordRichContent";
import CTASection from "@/components/landing/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Palette, Sparkles, Shapes, Brush, CheckCircle, ArrowRight,
  Star, Heart, Gem, Eye, Layers, Lightbulb, Infinity, Clock,
  Cpu, Package, Ruler, MapPin
} from "lucide-react";

const Kunstobjekte = () => {
  const stats = [
    { value: "∞", label: "Formfreiheit", sub: "Unmögliches wird möglich" },
    { value: "0.1mm", label: "Auflösung", sub: "Schichtgenauigkeit", primary: true },
    { value: "20+", label: "Farben", sub: "Zur Auswahl" },
    { value: "2m+", label: "Maximalgröße", sub: "Modulare Fertigung" }
  ];

  const benefits = [
    {
      icon: Shapes,
      title: "Grenzenlose Formen",
      description: "Realisieren Sie Geometrien, die mit traditionellen Methoden wie Guss, Schnitzen oder Formen unmöglich wären: Hinterschnitte, organische Strukturen, filigrane Gitterwerke und komplexe ineinander verschachtelte Formen – 3D-Druck kennt keine Einschränkungen durch Werkzeuge.",
    },
    {
      icon: Sparkles,
      title: "Einzigartige Unikate",
      description: "Jedes Objekt ein Einzelstück – individuell gefertigt nach Ihrem digitalen Entwurf. Perfekt für limitierte Editionen, Galerien, Ausstellungen oder Auftragskunst. Keine Serienproduktion, kein Kompromiss.",
    },
    {
      icon: Palette,
      title: "Vielfältige Materialien",
      description: "Von klassischem Weiß über Holz-Optik bis zu transparenten PETG-Effekten. Auch Marmor-Look, Metalloptik, Glow-in-the-Dark und über 20 Standardfarben stehen zur Wahl. Jedes Material hat eigene ästhetische Qualitäten.",
    },
    {
      icon: Gem,
      title: "Hochwertige Ausführung",
      description: "Schichtauflösung bis 0,1mm für filigrane Details. Auf Wunsch Nachbearbeitung mit Schleifen, Grundieren und Lackierung für museumsreife Oberflächen. Für größere Installationen nahtlose Segmentierung.",
    }
  ];

  const useCases = [
    {
      title: "Skulpturen & Plastiken",
      description: "Digitale Entwürfe aus Blender, ZBrush oder anderen Sculpting-Programmen direkt in physische Kunstwerke übersetzen. 3D-Druck ermöglicht Formen, die in Bronze, Stein oder Holz nicht realisierbar wären – filigrane Netzstrukturen, organische Verwachsungen, abstrakte Geometrien.",
      details: ["Komplexe organische Formen", "Skalierbar 5cm bis 2m+", "Nachbearbeitung möglich", "Gussformen auf Anfrage"],
      icon: Gem,
    },
    {
      title: "Kunstinstallationen & Environments",
      description: "Modulare Elemente für raumgreifende Kunstinstallationen. Reproduzierbare Module ermöglichen komplexe, repetitive Strukturen für Museen, Galerien und öffentliche Kunstprojekte. Leichtes Material ist ideal für Hängungen.",
      details: ["Reproduzierbare Elemente", "Leicht für Hängungen", "Einfache Montage", "Indoor & Outdoor"],
      icon: Layers,
    },
    {
      title: "Design-Objekte & Dekoration",
      description: "Einzigartige Kunstobjekte für Innenräume, Showrooms und Schaufenster. Von dekorativen Vasen über architektonische Wandobjekte bis zu großformatigen Raumteilern. Holz-Filament und Marmor-Look für natürliche Eleganz.",
      details: ["Für Showroom & Retail", "Individuelle Größen", "Einzigartige Designs", "Mehrere Materialoptiken"],
      icon: Lightbulb,
    },
    {
      title: "Konzeptmodelle & Vorstudien",
      description: "Schnelle, kostengünstige Umsetzung von Entwürfen für größere Projekte. Testen Sie Formen, Proportionen und Raumwirkung in 3D, bevor Sie aufwändige Techniken wie Bronze- oder Steinguss einsetzen. Iterative Entwicklung ab €20.",
      details: ["Ab €20 Einstieg", "Express 3 Tage", "Mehrere Varianten parallel", "Für Hochschulen & Galerien"],
      icon: Eye,
    }
  ];

  const techniques = [
    { name: "Direkte Fertigung", desc: "Ihr digitales 3D-Modell wird direkt zum fertigen Kunstwerk. Ideal für Skulpturen, Installationselemente und Design-Objekte." },
    { name: "Gussform-Erstellung", desc: "3D-gedruckte Positiv- oder Negativformen für den Abguss in Bronze, Gips, Kunstharz oder Beton. Kombination von digital und traditionell." },
    { name: "Hybrid-Techniken", desc: "3D-Druck als Grundkörper, kombiniert mit manueller Nachbearbeitung, Überzügen (Epoxid, Metallisierung) oder Mixed-Media-Elementen." },
    { name: "Modulare Systeme", desc: "Große Installationen aus einzelnen 3D-gedruckten Elementen zusammensetzen. Ideal für Objekte ab 50cm bis zu mehreren Metern Größe." }
  ];

  const materials = [
    { name: "PLA Standard", badge: "Klassisch", props: ["20+ Farben", "Detailreich", "Lackierbar", "Biologisch abbaubar"], use: "Skulpturen, Designobjekte" },
    { name: "PETG Transparent", badge: "Licht & Glas", props: ["Klar/Milchig", "UV-beständig", "Schlagzäh", "Hochglanz"], use: "Lichtinstallationen, Glasoptik" },
    { name: "Holz-Filament", badge: "Natur", props: ["Maserung sichtbar", "Schleifbar", "Beizbar", "Warme Ausstrahlung"], use: "Naturmotivskulpturen, Dekor" },
    { name: "Marmor-Optik", badge: "Premium", props: ["Weiß-Grau Maserung", "Schwer & massiv", "Polierbar", "Hochwertig"], use: "Elegante Skulpturen, Galerie" }
  ];

  const faqs = [
    {
      question: "Welche Formen sind mit 3D-Druck für Kunst möglich?",
      answer: "Der 3D-Druck ermöglicht praktisch grenzenlose Formfreiheit. Hinterschnitte, organische Strukturen, filigrane Gitterwerke und komplexe Verschachtelungen sind realisierbar – Geometrien, die mit traditionellen Methoden wie Guss oder Schnitzen technisch unmöglich oder extrem teuer wären. Digitale Skulpturen aus Blender, ZBrush oder Rhino können direkt ins Physische übersetzt werden."
    },
    {
      question: "Welche Materialien eignen sich am besten für Kunstobjekte?",
      answer: "Für klassische Skulpturen empfehlen wir PLA in 20+ Farben: detailreich, lackierbar, biologisch abbaubar. Holz-Filament für warme, natürliche Ausstrahlung. Marmor-Look für elegante Steinoptik. Transparentes PETG für Lichteffekte und Glasoptik. Metallic-Filamente für industrielle Ästhetik. Bei Außenobjekten kommt UV-stabiles ASA zum Einsatz."
    },
    {
      question: "Wie groß können 3D-gedruckte Kunstobjekte sein?",
      answer: "Wir fertigen Kunstobjekte von wenigen Zentimetern bis über 2 Meter Größe. Größere Werke werden modular konzipiert und nahtlos zusammengefügt. Die Verbindungsstellen werden so gestaltet, dass sie im fertigen Werk unsichtbar sind. Bei Skulpturen ab 50cm empfehlen wir ein persönliches Beratungsgespräch zur optimalen Segmentierung."
    },
    {
      question: "Eignet sich 3D-Druck für Gussformen in Bronze oder Gips?",
      answer: "Ja, 3D-gedruckte Positivformen eignen sich hervorragend als Vorlage für den Abguss in Bronze, Gips, Kunstharz oder Beton. Diese Hybrid-Technik kombiniert die Formfreiheit des digitalen Entwurfs mit der Materialqualität klassischer Gussverfahren. Viele Bildhauer nutzen 3D-Druck als modernen Ersatz für aufwändige Handmodellage."
    },
    {
      question: "Was kosten 3D-gedruckte Kunstobjekte und Skulpturen?",
      answer: "Die Kosten hängen von Größe, Komplexität und Material ab. Kleine Konzeptmodelle und Vorstudien starten ab ca. €20–40. Mittelgroße Skulpturen (20–40cm) liegen typischerweise bei €80–250. Größere Installationselemente und komplexe Objekte auf Anfrage. Senden Sie uns Ihr Modell für eine kostenlose, unverbindliche Kalkulation."
    },
    {
      question: "Kann ich limitierte Editionen und Multiples erstellen lassen?",
      answer: "Ja, jedes 3D-Modell kann beliebig oft identisch reproduziert werden – mit konsistenter Qualität bei jeder Auflage. Das macht den 3D-Druck ideal für limitierte Editionen (Numbered Editions), Kunstmultiples und Galerie-Serien. Auf Wunsch nummerieren wir die Auflage direkt im Druck."
    },
    {
      question: "Welche Dateiformate werden für Kunstobjekte benötigt?",
      answer: "Wir verarbeiten STL, OBJ, 3MF und alle gängigen 3D-Formate aus Blender, ZBrush, Rhino, Fusion 360 und Cinema 4D. Haben Sie nur eine Skizze oder ein physisches Objekt zum Abscannen? Wir unterstützen auf Anfrage auch bei der 3D-Modellierung und bei 3D-Scans von bestehenden Kunstwerken."
    }
  ];

  const keywordContent = {
    title: "3D-Druck für Künstler: Neue Werkzeuge für zeitgenössische Kunst",
    intro: "Der 3D-Druck eröffnet Künstlern völlig neue Ausdrucksmöglichkeiten. Was früher nur in der Fantasie existierte oder mit enormem Handwerksaufwand verbunden war, kann heute digital entworfen und innerhalb weniger Tage physisch realisiert werden. Bildhauer, Installationskünstler, Designer und Konzeptkünstler in Wien, Graz, Linz und ganz Österreich nutzen additive Fertigung als kreatives Werkzeug.",
    blocks: [
      {
        title: "Vom Digitalen ins Physische",
        content: "Digitale Skulpturen aus ZBrush, Blender oder anderen 3D-Sculpting-Programmen können direkt in physische Objekte übersetzt werden. Der 3D-Druck überbrückt die Lücke zwischen digitaler Kunst und haptischer Erfahrung. Für digitale Künstler, die ihre Werke erstmals als physische Objekte erleben möchten, ist das eine Revolution."
      },
      {
        title: "Unmögliche Geometrien realisieren",
        content: "Der 3D-Druck ermöglicht Formen, die mit traditionellen Techniken wie Guss, Schnitzen oder Modellieren aus physikalischen Gründen nicht realisierbar wären: ineinander verschachtelte Strukturen ohne Naht, filigrane Gitterwerke mit 1mm Stegen, organische Formen mit tiefen Hinterschnitten. Das eröffnet ästhetische Territorien, die für die Kunstgeschichte neu sind."
      },
      {
        title: "Experimentelle Materialien für besondere Wirkung",
        content: "Neben klassischen Kunststoffen bieten wir Holz-Filament für natürliche Maserung und Wärme, Marmor-Look für Steinästhetik, transparentes PETG für Lichtinstallationen und Metallic-Filamente für industrielle Ästhetik. Jedes Material hat eigene künstlerische Qualitäten – wir beraten Sie zur optimalen Materialwahl für Ihre Arbeit."
      },
      {
        title: "Iteratives Arbeiten ohne Budgetverschwendung",
        content: "3D-Druck ermöglicht schnelle, kostengünstige Iterationen. Konzeptmodelle ab €20 können gedruckt, begutachtet und verfeinert werden, bevor das finale Werk aufwändig in Bronze gegossen oder aus Stein gehauen wird. So sparen Bildhauer und Installateure wertvolle Zeit und Materialkosten in der Entwurfsphase."
      }
    ]
  };

  const breadcrumbs = [
    { name: "Services", url: "#" },
    { name: "Kunstobjekte", url: "/kunstobjekte" }
  ];

  return (
    <>
      <Helmet>
        <title>Skulpturen & Kunstobjekte aus dem 3D-Drucker | Ab €20 | ekdruck</title>
        <meta name="description" content="Ihre Skulptur, digital entworfen – physisch gedruckt. Holz-Optik, Metallic, Marmor-Look. Für Künstler, Galerien & Installationen. Jede Form möglich. Ab €20 →" />
        <meta name="keywords" content="3d-druck kunstobjekte, skulpturen 3d-druck, kunstinstallationen drucken, design-objekte, 3d-druck bildhauer, skulpturen drucken lassen" />
        <link rel="canonical" href="https://www.ek-druck.at/kunstobjekte" />
      </Helmet>

      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Kunstobjekte", url: "/kunstobjekte" }]} />
      <Navigation />
      <Breadcrumbs items={breadcrumbs} />

      <main className="min-h-screen bg-background">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
          <div className="absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Palette className="w-4 h-4" />
                  Für Künstler, Bildhauer & Galerien
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Kunst ohne<br />
                  <span className="text-primary">Grenzen formen</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-xl">
                  Verwandeln Sie digitale Visionen in greifbare Kunstwerke. 3D-Druck ermöglicht
                  Formen, Strukturen und Materialoptiken, die mit klassischen Techniken unerreichbar wären –
                  vom Konzeptmodell bis zur Galerie-Installation.
                </p>

                <blockquote className="border-l-2 border-primary pl-4 mb-8 text-sm text-muted-foreground italic">
                  „Der 3D-Druck gibt dem Motto 'Die Kunst kennt keine Grenzen' eine vollkommen neue Bedeutung."
                  <cite className="block mt-1 not-italic text-xs">— 3Dnatives</cite>
                </blockquote>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="hero" className="text-base">
                    <Link to="/kontakt">Kunstwerk realisieren <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/referenzen">Projekte entdecken</Link>
                  </Button>
                </div>

                <div className="flex items-center gap-2 mt-6">
                  <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}</div>
                  <span className="text-sm font-medium">5.0 Google · Mit Leidenschaft gefertigt</span>
                  <Heart className="w-4 h-4 text-primary ml-1" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <Card key={i} className={`${stat.primary ? "bg-primary text-primary-foreground" : "bg-card"} border-0 shadow-lg hover:shadow-xl transition-shadow`}>
                    <CardContent className="p-6">
                      <div className={`text-3xl md:text-4xl font-bold mb-1 ${!stat.primary ? "text-primary" : ""}`}>{stat.value}</div>
                      <div className={`font-semibold mb-1 ${stat.primary ? "text-primary-foreground/90" : ""}`}>{stat.label}</div>
                      <div className={`text-sm ${stat.primary ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{stat.sub}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Vorteile ───────────────────────────────────────────────────── */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Warum 3D-Druck für Kunst?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Neue kreative Möglichkeiten durch digitale Fertigung</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((b, i) => (
                  <Card key={i} className="border-2 hover:border-primary/50 hover:shadow-lg transition-all group">
                    <CardContent className="p-6 flex gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <b.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                        <p className="text-muted-foreground text-sm">{b.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Techniken ──────────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="slide-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Techniken & künstlerische Ansätze</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Von der direkten Fertigung bis zum hybriden Guss-Verfahren</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {techniques.map((t, i) => (
                  <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Infinity className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-bold mb-2">{t.name}</h3>
                      <p className="text-sm text-muted-foreground">{t.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Anwendungsfelder ───────────────────────────────────────────── */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Kreative Anwendungsfelder</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Skulpturen, Installationen, Designobjekte und Konzeptmodelle</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {useCases.map((uc, i) => (
                  <Card key={i} className="hover:shadow-lg transition-shadow group">
                    <CardContent className="p-6">
                      <div className="flex gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <uc.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold self-center">{uc.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{uc.description}</p>
                      <ul className="grid grid-cols-2 gap-1.5">
                        {uc.details.map((d, j) => (
                          <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <CheckCircle className="w-3 h-3 text-primary shrink-0" />{d}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Materialien ───────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Materialien mit künstlerischem Ausdruck</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Jedes Material erzählt eine andere ästhetische Geschichte</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {materials.map((mat, i) => (
                  <Card key={i} className="hover:shadow-lg hover:border-primary/40 transition-all group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{mat.name}</h3>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">{mat.badge}</span>
                      </div>
                      <ul className="space-y-1.5 mb-4">
                        {mat.props.map((p, j) => (
                          <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <CheckCircle className="w-3 h-3 text-primary shrink-0" />{p}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-primary font-medium bg-primary/8 px-2 py-1.5 rounded-md">{mat.use}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Keyword Content ───────────────────────────────────────────── */}
        <KeywordRichContent
          title={keywordContent.title}
          intro={keywordContent.intro}
          blocks={keywordContent.blocks}
        />

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <FAQSection
          faqs={faqs}
          title="Häufige Fragen zu 3D-Druck Kunstobjekten"
          subtitle="Materialien, Größen, Techniken & Preise"
          schemaId="kunstobjekte"
        />

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <CTASection
          headline="Ihr Kunstobjekt – realisiert in 3 Tagen"
          subline="Senden Sie uns Ihr 3D-Modell oder beschreiben Sie Ihre Vision. Wir kalkulieren kostenlos und beraten Sie zur optimalen Umsetzung."
          ctaLabel="Kunstobjekt anfragen"
          secondaryLabel="Referenzprojekte ansehen"
          badge="Kostenlose Erstberatung"
          urgencyText="⚡ Express 24h · Keine Mindestmenge · Österreichweit"
        />

        <RelatedPages currentPage="/kunstobjekte" title="Weitere Services" />

      </main>

      <Footer />
    </>
  );
};

export default Kunstobjekte;
