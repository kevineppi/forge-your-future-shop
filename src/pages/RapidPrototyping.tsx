import { Helmet } from "react-helmet";
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
import LegalDisclaimer from "@/components/LegalDisclaimer";
import CTASection from "@/components/landing/CTASection";
import AIChatWidget from "@/components/AIChatWidget";
import {
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Lightbulb,
  Eye,
  Palette,
  Package,
  AlertTriangle,
  X,
  Cpu,
  BarChart3
} from "lucide-react";

const RapidPrototyping = () => {
  const stats = [
    { value: "24h", label: "Express", description: "Schnellste Lieferzeit" },
    { value: "€20", label: "Ab Preis", description: "Günstiger Einstieg" },
    { value: "0,1mm", label: "Detailgenauigkeit", description: "Schichtauflösung" },
    { value: "100%", label: "Termintreue", description: "Verlässliche Lieferung" }
  ];

  const whatWeDo = [
    {
      icon: Eye,
      title: "Anschauungsprototypen",
      description: "Physische Darstellungen Ihres Produktdesigns für Präsentationen, Investorengespräche und interne Design-Reviews. Das Modell zeigt Form, Proportionen und Ästhetik – greifbar statt nur als 3D-Rendering.",
      highlight: "Für Präsentationen"
    },
    {
      icon: Palette,
      title: "Designprototypen & Konzeptmodelle",
      description: "Frühe Designmodelle zur Visualisierung von Ideen. Testen Sie verschiedene Formvarianten, Proportionen und Farbkonzepte physisch – ideal für Produktdesigner, Agenturen und Startups.",
      highlight: "Formfindung"
    },
    {
      icon: Star,
      title: "Präsentationsmuster & Werbemittel",
      description: "Hochwertige Anschauungsmuster für Messen, Marketingfotos und Showrooms. Zeigen Sie Kunden ein greifbares Objekt, das Form und Design Ihres geplanten Produkts kommuniziert.",
      highlight: "Investor-Ready"
    },
    {
      icon: Lightbulb,
      title: "Konzept- & Studienmmodelle",
      description: "Günstige, schnelle Entwurfsmodelle für Besprechungen und Designentscheidungen. Mehrere Varianten parallel möglich – ideal für iterative Designprozesse in frühen Entwicklungsphasen.",
      highlight: "Iteratives Design"
    }
  ];

  // WKO: Klare Abgrenzung was NICHT möglich ist
  const whatWeDoNOT = [
    "Funktionsfähige Bauteile für technische Geräte oder Maschinen",
    "Ersatzteile oder sicherheitsrelevante Komponenten",
    "Technische Prüf- und Montagehilfen",
    "Prototypen für lebensmittelberührenden Einsatz",
    "Teile für medizinische Anwendungen",
    "Serienfertigungsaufträge oder Erstmuster für Produktion"
  ];

  const process = [
    {
      step: "01",
      title: "Designdaten senden",
      description: "Senden Sie uns Ihre STL, OBJ, STEP oder andere 3D-Daten. Auch Skizzen und Referenzbilder für die Modellerstellung möglich.",
      icon: Cpu
    },
    {
      step: "02",
      title: "Angebot in 6 Stunden",
      description: "Wir prüfen die Designdaten und senden innerhalb von 6 Werkszeiten ein kostenloses Angebot mit Preis und Liefertermin.",
      icon: BarChart3
    },
    {
      step: "03",
      title: "Fertigung & Qualitätskontrolle",
      description: "Nach Auftragsbestätigung beginnt die Fertigung. Jedes Anschauungsmodell wird vor dem Versand geprüft.",
      icon: Zap
    },
    {
      step: "04",
      title: "Lieferung österreichweit",
      description: "Versand per DHL/GLS in ganz Österreich und Deutschland. Persönliche Abholung in Gunskirchen/OÖ möglich.",
      icon: Package
    }
  ];

  const materials = [
    {
      name: "PLA / PLA+",
      description: "Ideales Material für Designprototypen und Konzeptmodelle. Hohe Detailgenauigkeit, über 20 Farben, gut lackierbar.",
      properties: ["20+ Farben", "Hohe Details", "Gut lackierbar", "Biologisch abbaubar"],
      use: "Designmodelle, Konzepte"
    },
    {
      name: "PETG",
      description: "Für Präsentationsmodelle mit glasklaren oder transluzenten Bereichen. Schlagzäh und hochglänzend.",
      properties: ["Transparent möglich", "Hochglanz-Optik", "Schlagzäh", "UV-beständig"],
      use: "Showroom, Messe"
    },
    {
      name: "ASA",
      description: "Für Designmodelle, die auch im Freien präsentiert werden. UV-stabil, lackierbar, witterungsbeständig.",
      properties: ["UV-stabil", "Außeneinsatz", "Lackierbar", "Schleifbar"],
      use: "Outdoor-Präsentationen"
    },
    {
      name: "Spezialfilamente",
      description: "Holz-Optik, Marmor-Look, Metallic oder Seidenmatt für besondere ästhetische Wirkung Ihrer Designmodelle.",
      properties: ["Holz-Look", "Marmor-Optik", "Metallic", "Seidenmatt"],
      use: "Premium-Präsentationen"
    }
  ];

  const faqs = [
    {
      question: "Was ist ein Designprototyp – und was nicht?",
      answer: "Ein Designprototyp ist ein physisches Anschauungsmodell, das Form, Proportionen und Ästhetik eines Produktentwurfs darstellt. Er dient der visuellen Kommunikation in Präsentationen, Designreviews und Marketingmaßnahmen. Wir fertigen ausschließlich solche Anschauungsmodelle – keine funktionsfähigen Bauteile, Ersatzteile oder technisch belastbare Teile."
    },
    {
      question: "Kann ich Prototypen für Funktionstest bestellen?",
      answer: "Nein. Gemäß unserer Gewerbeberechtigung fertigen wir ausschließlich Modelle zu Anschauungszwecken. Funktionsteile, Prüfteile, Ersatzteile oder technische Bauteile liegen nicht in unserem Leistungsumfang. Bei Fragen beraten wir Sie gerne und empfehlen gegebenenfalls geeignete Partner."
    },
    {
      question: "Für wen sind Designprototypen geeignet?",
      answer: "Designprototypen aus dem 3D-Druck sind ideal für Produktdesigner, Agenturen, Startups und Unternehmen, die ein physisches Anschauungsmodell für Präsentationen, Investorengespräche, Messeauftritte oder interne Designreviews benötigen. Das Modell kommuniziert Form und Ästhetik – greifbar und überzeugend."
    },
    {
      question: "Welche Dateiformate werden akzeptiert?",
      answer: "Wir verarbeiten STL, OBJ, 3MF und gängige CAD-Exportformate. Haben Sie nur eine Skizze oder ein Konzeptfoto? Auf Anfrage unterstützen wir auch bei der 3D-Modellierung Ihres Designentwurfs."
    },
    {
      question: "Wie schnell erhalte ich ein Designprototyp-Modell?",
      answer: "Standardmodelle liefern wir in 3–5 Werktagen. Mit Express-Service auch in 24–48 Stunden nach Auftragsbestätigung. Das Angebot erhalten Sie innerhalb von 6 Arbeitsstunden nach Dateieneingang – kostenlos und unverbindlich."
    },
    {
      question: "Was kostet ein Designprototyp?",
      answer: "Kleine Konzeptmodelle starten ab ca. €20. Mittelgroße Präsentationsmodelle (15–25cm) liegen typischerweise bei €50–150. Größere oder aufwändigere Modelle auf Anfrage. Senden Sie uns Ihre Designdatei – wir kalkulieren kostenfrei."
    },
    {
      question: "Kann ich mehrere Designvarianten bestellen?",
      answer: "Ja, mehrere Formvarianten für A/B-Vergleiche im Designprozess sind möglich. Gerade in frühen Entwicklungsphasen ist das Drucken von 2–3 Varianten kostengünstiger als später aufwändige Korrekturen. Wir beraten Sie zur sinnvollsten Vorgehensweise."
    }
  ];

  const keywordContent = {
    title: "Designprototypen aus dem 3D-Druck: Ideen greifbar machen",
    intro: "Ein gutes Produktdesign muss man spüren können – nicht nur auf dem Bildschirm sehen. Designprototypen aus dem 3D-Druck überbrücken die Lücke zwischen digitaler Idee und physischer Wirklichkeit. Produktdesigner, Startups und Agenturen in Wien, Graz, Linz und ganz Österreich nutzen unseren Service, um Designpräsentationen zu stärken.",
    blocks: [
      {
        title: "Warum physische Designmodelle überzeugen",
        content: "Ein 3D-Rendering auf dem Bildschirm zeigt viel – aber ein physisches Modell in den Händen eines Investors oder Kunden kommuniziert in Sekunden was Wochen an Designarbeit bedeuten. Form, Proportion, Haptik: ein Anschauungsprototyp transportiert Designintention auf eine Weise, die kein Rendering erreicht."
      },
      {
        title: "Iteratives Designen leicht gemacht",
        content: "Statt monatelang an einem Konzept zu arbeiten, können Sie mit günstigen 3D-Druck-Designmodellen ab €20 schnell verschiedene Richtungen physisch testen und verwerfen. Mehrere Formvarianten parallel, Feedback einholen, verbessern – das ist modernes Produktdesign."
      },
      {
        title: "Vom Skizzenblock zum Messemodell",
        content: "Ob frühe Rohskizze oder ausgereiftes CAD-Modell – wir begleiten Ihren Designprozess. Aus einer Handskizze erstellen wir auf Anfrage ein 3D-Modell. Aus dem finalen Design wird ein messefertiges Anschauungsmodell für Ihren Produktlaunch oder Investorenpitch."
      },
      {
        title: "Österreichischer Service, deutschlandweit verfügbar",
        content: "Gefertigt in Gunskirchen, Oberösterreich – geliefert in 24–48h per Express. Kurze Kommunikationswege, Beratung auf Deutsch und tiefes Verständnis für die Anforderungen von Produktdesignern und Agenturen im DACH-Raum."
      }
    ]
  };

  const breadcrumbs = [
    { name: "Services", url: "#" },
    { name: "Designprototypen", url: "/rapid-prototyping" }
  ];

  return (
    <>
      <Helmet>
        <title>Designprototypen 3D-Druck Österreich | Anschauungsmodelle | ekdruck.at</title>
        <meta name="description" content="Designprototypen & Anschauungsmodelle im 3D-Druck ab €20. Express in 24–48h. Für Präsentationen, Investorenpitches & Designreviews. Nur Anschauungszwecke – keine Funktionsteile." />
        <meta name="keywords" content="designprototypen 3d-druck österreich, anschauungsprototypen, konzeptmodelle, produktdesign prototyp, 3d-druck designmodell, präsentationsprototyp" />
        <link rel="canonical" href="https://www.ek-druck.at/rapid-prototyping" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Designprototypen", url: "/rapid-prototyping" }
      ]} />

      <Navigation />
      <Breadcrumbs items={breadcrumbs} />

      <main className="min-h-screen bg-background">

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Eye className="w-4 h-4" />
                  Nur Anschauungsmodelle – keine Funktionsteile
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Designprototypen<br />
                  <span className="text-primary">die überzeugen</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-xl">
                  Physische Anschauungsmodelle für Designpräsentationen, Investorenpitches 
                  und Produktreviews. Wir machen Ihre Designidee greifbar – in 24 Stunden.
                </p>

                {/* Prominent WKO Notice */}
                <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4 mb-8">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <span className="font-semibold text-foreground">Wichtiger Hinweis: </span>
                      <span className="text-muted-foreground">Wir fertigen ausschließlich <strong className="text-foreground">Designprototypen zu Anschauungszwecken</strong>. Funktionsteile, Ersatzteile und technische Bauteile liegen nicht in unserem Leistungsumfang.</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="hero" className="text-base">
                    <Link to="/kontakt">
                      Designprototyp anfragen
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/referenzen">Projekte ansehen</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-6 mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="text-sm font-medium">5.0 Google Bewertung</span>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className={`${index === 0 ? "bg-primary text-primary-foreground" : "bg-card"} border-0 shadow-lg hover:shadow-xl transition-shadow`}>
                    <CardContent className="p-6">
                      <div className={`text-3xl md:text-4xl font-bold mb-1 ${index !== 0 ? "text-primary" : ""}`}>
                        {stat.value}
                      </div>
                      <div className={`font-semibold mb-1 ${index === 0 ? "text-primary-foreground/90" : ""}`}>
                        {stat.label}
                      </div>
                      <div className={`text-sm ${index === 0 ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                        {stat.description}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Legal Disclaimer (full) ───────────────────────────────── */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <LegalDisclaimer />
            </div>
          </div>
        </section>

        {/* ── Was wir machen ───────────────────────────────────────── */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Was wir für Sie fertigen</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Anschauungsmodelle für Design, Präsentation und Kommunikation
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {whatWeDo.map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 hover:shadow-lg transition-all group">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">{item.highlight}</div>
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Was wir NICHT machen ─────────────────────────────────── */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card border-2 border-border rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-destructive/10 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Was wir nicht fertigen können</h2>
                    <p className="text-sm text-muted-foreground">Gemäß unserer Gewerbeberechtigung</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {whatWeDoNOT.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg border border-destructive/10">
                      <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-6 border-t border-border pt-4">
                  Bei Fragen zur Machbarkeit Ihres Projekts beraten wir Sie vorab kostenlos und empfehlen gegebenenfalls geeignete Partner für technische Bauteile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Prozess ───────────────────────────────────────────────── */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">So einfach geht's</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vom Designentwurf zum physischen Anschauungsmodell in 4 Schritten
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="text-center hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6">
                      <div className="text-4xl font-black text-primary/20 mb-3">{step.step}</div>
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-bold mb-2 text-sm">{step.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < process.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 z-10 w-6 h-6 bg-primary/10 rounded-full items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Materialien ───────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Materialien für Designmodelle</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vielfältige Optionen für jede Designanforderung
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {materials.map((mat, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow hover:border-primary/40 group">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{mat.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{mat.description}</p>
                    <div className="space-y-1.5 mb-4">
                      {mat.properties.map((prop, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs">
                          <CheckCircle className="w-3 h-3 text-primary shrink-0" />
                          <span>{prop}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full inline-block">
                      {mat.use}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Keyword-Content (ohne CTA) ────────────────────────────── */}
        <KeywordRichContent
          title={keywordContent.title}
          intro={keywordContent.intro}
          blocks={keywordContent.blocks}
        />

        {/* ── Einziger CTA ──────────────────────────────────────────── */}
        <CTASection
          headline="Machen Sie Ihr Design greifbar"
          subline="Senden Sie uns Ihre Designdatei — wir kalkulieren, produzieren und liefern österreichweit. Angebot in 6 Stunden, kostenlos & unverbindlich."
          ctaLabel="Designprototyp anfragen"
          secondaryLabel="Referenzprojekte ansehen"
          secondaryHref="/referenzen"
          badge="Kostenlos & unverbindlich"
          urgencyText="⚡ Express 24h verfügbar · Nur Anschauungsmodelle · keine Funktionsteile"
          legalNote="Gemäß WKO-Gewerbeberechtigung ausschließlich Anschauungs- und Designmodelle – keine Funktionsteile oder Ersatzteile."
        />

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <FAQSection
          faqs={faqs}
          title="Häufige Fragen zu Designprototypen"
          subtitle="Was ist möglich – und was nicht?"
          schemaId="rapid-prototyping"
        />

        {/* ── Legal Disclaimer (compact) ────────────────────────────── */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <LegalDisclaimer variant="compact" />
            </div>
          </div>
        </section>

        {/* ── Related Pages ─────────────────────────────────────────── */}
        <RelatedPages currentPage="/rapid-prototyping" title="Weitere Services" />

      </main>

      <AIChatWidget />
      <Footer />
    </>
  );
};

export default RapidPrototyping;
