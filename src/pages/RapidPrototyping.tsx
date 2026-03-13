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
import AIChatWidget from "@/components/AIChatWidget";
import {
  Zap,
  Clock,
  CheckCircle,
  ArrowRight,
  Target,
  Layers,
  RotateCcw,
  Package,
  Star,
  TrendingUp,
  Wrench,
  Lightbulb,
  Shield,
  BarChart3,
  Cpu,
  Settings
} from "lucide-react";

const RapidPrototyping = () => {
  const stats = [
    { value: "24h", label: "Lieferzeit", description: "Schnellstes Prototyping" },
    { value: "€20", label: "Ab Preis", description: "Günstiger Einstieg" },
    { value: "0,1mm", label: "Genauigkeit", description: "Schichtauflösung" },
    { value: "100%", label: "Termintreue", description: "Verlässliche Lieferung" }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Rapid Prototyping in 24–48h",
      description: "Von der STL-Datei zum physischen Prototypen innerhalb eines Werktages. Ideal für Produktentwickler, Ingenieure und Startups, die schnelle Iterationszyklen benötigen."
    },
    {
      icon: RotateCcw,
      title: "Iterative Entwicklung",
      description: "Testen, verfeinern, optimieren. Mehrere Designiterationen in kurzer Zeit – physische Tests ersetzen aufwändige Simulationen und decken Fehler früh auf."
    },
    {
      icon: Target,
      title: "Passgenau nach Ihren Specs",
      description: "Enge Toleranzen bis ±0,2mm möglich. Jeder Prototyp wird nach Ihren CAD-Daten gefertigt – präzise, wiederholbar, dokumentiert."
    },
    {
      icon: Package,
      title: "Vielfältige Materialien",
      description: "PLA, PETG, ASA, TPU und mehr. Wir wählen gemeinsam mit Ihnen das optimale Material für Funktion, Ästhetik und Belastungstest Ihres Prototypen."
    }
  ];

  const useCases = [
    {
      title: "Funktionsprototypen",
      description: "Erste physische Modelle zur Überprüfung von Passform, Funktion und Zusammenbau. Identifizieren Sie Konstruktionsfehler, bevor teure Werkzeuge oder Formen gebaut werden.",
      details: ["Form-Fit-Function Tests", "Montagetests mit Gegenstücken", "Erstmuster vor Serienproduktion"],
      icon: Wrench,
      highlight: "Engineering-Qualität"
    },
    {
      title: "Design-Validierungsmodelle",
      description: "Ästhetische Muster für Kundenpräsentationen, Marketingfotos und Investor-Pitches. Überzeugen Sie mit einem greifbaren Produkt statt mit 3D-Renderings.",
      details: ["Präsentationsfertige Oberflächen", "Lackier- und Nachbearbeitbar", "Hochwertige Optik"],
      icon: Star,
      highlight: "Investor-Ready"
    },
    {
      title: "Konzept- & Studienmodelle",
      description: "Frühe Entwurfsmodelle für interne Reviews und Designentscheidungen. Günstige, schnelle Varianten um das Konzept zu greifen und zu diskutieren.",
      details: ["Ab €20 pro Modell", "Schnelle Abwandlungen", "Maßstabsmodelle 1:1 bis 1:10"],
      icon: Lightbulb,
      highlight: "Cost-Efficient"
    },
    {
      title: "Montagehilfen & Vorrichtungen",
      description: "Individuell gefertigte Jigs, Lehren und Montagevorrichtungen für Fertigung und Qualitätskontrolle. Exakt auf Ihr Produkt und Ihren Prozess abgestimmt.",
      details: ["Bohrschablonen & Lehren", "Haltevorrichtungen", "Prüf- & Messhilfen"],
      icon: Settings,
      highlight: "Prozessoptimierung"
    }
  ];

  const process = [
    {
      step: "01",
      title: "CAD-Datei senden",
      description: "Senden Sie uns Ihre STL, STEP, OBJ oder andere 3D-Formate per E-Mail oder über das Kontaktformular.",
      icon: Cpu
    },
    {
      step: "02",
      title: "Angebot in 6 Stunden",
      description: "Sie erhalten innerhalb von 6 Werkszeiten ein detailliertes Angebot mit Material-, Preis- und Zeitplan-Empfehlung.",
      icon: BarChart3
    },
    {
      step: "03",
      title: "Fertigung startet sofort",
      description: "Nach Auftragsbestätigung beginnen wir umgehend mit der Fertigung. Bei Express-Aufträgen noch am selben Tag.",
      icon: Zap
    },
    {
      step: "04",
      title: "Lieferung österreichweit",
      description: "Versand per DHL/GLS oder persönliche Übergabe in Gunskirchen/OÖ. Tracking und sichere Verpackung inklusive.",
      icon: Package
    }
  ];

  const materials = [
    {
      name: "PLA / PLA+",
      description: "Ideales Standardmaterial für Anschauungsmodelle, Konzeptprototypen und geometrisch komplexe Bauteile. Hohe Detailgenauigkeit, über 20 Farben.",
      properties: ["Temperatur bis 60°C", "Sehr gute Druckbarkeit", "Biologisch abbaubar", "20+ Farben"],
      use: "Konzeptmodelle, Anschauungsobjekte"
    },
    {
      name: "PETG",
      description: "Zäh, chemikalienbeständig und lebensmittelecht. Für Prototypen mit erhöhten mechanischen Anforderungen und schlagzähe Bauteile.",
      properties: ["Temperatur bis 80°C", "Schlagzäh & flexibel", "Lebensmittelecht", "Transparent möglich"],
      use: "Funktionsprototypen, Behälter"
    },
    {
      name: "ASA / ABS",
      description: "UV- und witterungsbeständig – perfekt für Outdoor-Prototypen und Teile, die später lackiert oder chemisch nachbehandelt werden.",
      properties: ["UV-stabil", "Temperatur bis 100°C", "Lackierbar", "Schleifbar"],
      use: "Outdoor-Einsatz, Automotive"
    },
    {
      name: "TPU (Flexibel)",
      description: "Elastomeres Material für flexible Bauteile, Dichtungen, Griffe oder Teile mit Dämpfungseigenschaften.",
      properties: ["Shore 95A Härte", "Reiß- & abriebfest", "Gummiartige Haptik", "Medizinisch unbedenklich"],
      use: "Dichtungen, Griffe, Dämpfer"
    }
  ];

  const faqs = [
    {
      question: "Was ist Rapid Prototyping mit 3D-Druck?",
      answer: "Rapid Prototyping bezeichnet die schnelle Herstellung von physischen Prototypen direkt aus digitalen 3D-Daten. Mit FDM 3D-Druck können wir innerhalb von 24–48 Stunden nach Auftragsbestätigung funktionsfähige Prototypen liefern – ohne teure Werkzeuge oder Formen. Das ermöglicht schnelle Iterationszyklen in der Produktentwicklung."
    },
    {
      question: "Wie schnell kann ich einen Prototypen erhalten?",
      answer: "Standard-Prototypen sind in 3–5 Werktagen fertig. Mit unserem Express-Service liefern wir in 24–48 Stunden nach Auftragsbestätigung. Für dringende Termine sprechen Sie uns direkt an – wir finden eine Lösung. Das Angebot erhalten Sie bereits innerhalb von 6 Arbeitsstunden."
    },
    {
      question: "Welche Dateiformate werden akzeptiert?",
      answer: "Wir verarbeiten STL, STEP, OBJ, 3MF und weitere gängige 3D-Formate aus allen CAD-Programmen (SolidWorks, Fusion 360, Inventor, CATIA, FreeCAD etc.). Haben Sie nur ein 2D-Zeichnung oder eine Skizze? Unser Team unterstützt Sie auch bei der 3D-Modellierung auf Anfrage."
    },
    {
      question: "Welche Maßtoleranzen sind möglich?",
      answer: "Mit FDM 3D-Druck erreichen wir Maßtoleranzen von typischerweise ±0,2–0,5mm je nach Bauteilgröße, Geometrie und Material. Bei Passungen (z.B. Schraublöcher, Steckverbinder) empfehlen wir spezielle Toleranz-Kompensation bereits im CAD. Bei kritischen Passmaßen besprechen wir dies vorab mit Ihnen."
    },
    {
      question: "Was kostet ein Prototyp?",
      answer: "Die Kosten hängen von Größe, Material, Qualitätsstufe und Menge ab. Kleine Konzeptmodelle starten ab ca. €20. Mittelgroße Funktionsprototypen liegen typischerweise zwischen €50–200. Größere Baugruppen auf Anfrage. Senden Sie uns Ihre Datei – Sie erhalten ein kostenloses Angebot innerhalb von 6 Stunden."
    },
    {
      question: "Sind die Prototypen funktionsfähig?",
      answer: "Ja. FDM-Prototypen können für Form-Fit-Function-Tests, Montagetests und Präsentationen eingesetzt werden. Für mechanisch hochbelastete Teile empfehlen wir PETG oder ASA. Thermisch belastete Bauteile (über 100°C) sind für FDM weniger geeignet – hier beraten wir Sie zu alternativen Verfahren."
    },
    {
      question: "Gibt es NDA und Vertraulichkeit?",
      answer: "Ja, wir unterzeichnen auf Anfrage Vertraulichkeitsvereinbarungen (NDA) für Entwicklungsprojekte. Ihre CAD-Daten werden nur zur Fertigung verwendet und nicht an Dritte weitergegeben. Professionelle Diskretion ist für uns selbstverständlich."
    },
    {
      question: "Kann ich mehrere Iterationen bestellen?",
      answer: "Selbstverständlich. Rapid Prototyping lebt von schnellen Iterationen. Wir empfehlen, Designänderungen möglichst in einer neuen STL-Datei zu liefern. Bei häufigen Iterationen können wir auch Rahmenvereinbarungen treffen für schnellere Abwicklung und günstigere Konditionen."
    }
  ];

  const keywordContent = {
    title: "Rapid Prototyping in Österreich: Schneller vom Konzept zum Produkt",
    intro: "Jede Produktentwicklung durchläuft denselben kritischen Moment: die erste physische Verkörperung einer Idee. Rapid Prototyping mit 3D-Druck beschleunigt diesen Schritt dramatisch – von Wochen auf Stunden. Unternehmen in Wien, Graz, Linz und ganz Österreich nutzen unseren Service, um Entwicklungskosten zu senken und Markteinführungszeiten zu verkürzen.",
    blocks: [
      {
        title: "Warum physische Prototypen unersetzlich sind",
        content: "Selbst die fortschrittlichsten CAD-Simulationen können den Griff in der Hand, die Passung zweier Bauteile oder die Reaktion eines Kunden auf ein echtes Produkt nicht ersetzen. Physische Prototypen decken Konstruktionsfehler auf, bevor teure Werkzeuge gefertigt werden – und das zahlt sich aus: Studien zeigen, dass jeder Fehler der in der Konzeptphase entdeckt wird, 100-fach günstiger ist als in der Produktion."
      },
      {
        title: "FDM-Druck vs. SLA vs. SLS für Prototypen",
        content: "FDM (Fused Deposition Modeling) ist für die meisten Prototypen-Anwendungen die wirtschaftlichste Wahl: günstig, schnell und mit einer breiten Materialpalette. SLA liefert glattere Oberflächen für ästhetische Designmodelle. SLS eignet sich für komplexe Funktionsbauteile ohne Supportstrukturen. Wir beraten Sie zum optimalen Verfahren für Ihr Projekt."
      },
      {
        title: "Iterationszyklus: Wie schnell können Sie entwickeln?",
        content: "Mit unserem 24h Express-Service können Sie morgens eine CAD-Änderung senden und nachmittags den neuen Prototypen in den Händen halten. In der Praxis bedeutet das: bis zu 5 Iterationen pro Woche sind möglich – ein Entwicklungsrhythmus, der mit traditionellen Fertigungsverfahren undenkbar wäre."
      },
      {
        title: "Österreichischer Partner für internationale Projekte",
        content: "Als Unternehmen in Gunskirchen, Oberösterreich, sind wir ideal positioniert für Kunden aus dem gesamten deutschsprachigen Raum. Kurze Transportwege, schnelle Kommunikation auf Deutsch und tiefes Verständnis für österreichische und deutsche Industriestandards machen uns zum verlässlichen Partner für Ihre Produktentwicklung."
      }
    ]
  };

  const breadcrumbs = [
    { name: "Services", url: "#" },
    { name: "Rapid Prototyping", url: "/rapid-prototyping" }
  ];

  return (
    <>
      <Helmet>
        <title>Rapid Prototyping 3D-Druck Österreich | 24h Express | ekdruck.at</title>
        <meta name="description" content="Rapid Prototyping mit 3D-Druck ab €20. Funktionsprototypen in 24–48h. Angebot in 6h. Alle Materialien: PLA, PETG, ASA, TPU. Österreichweit & nach Deutschland." />
        <meta name="keywords" content="rapid prototyping österreich, 3d-druck prototypen, funktionsprototypen, prototyp 24h, prototyp kosten, 3d-druck entwicklung, industrieprototypen" />
        <link rel="canonical" href="https://www.ek-druck.at/rapid-prototyping" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Rapid Prototyping", url: "/rapid-prototyping" }
      ]} />

      <Navigation />
      <Breadcrumbs items={breadcrumbs} />

      <main className="min-h-screen bg-background">

        {/* ── Hero ────────────────────────────────────────────────── */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Zap className="w-4 h-4" />
                  Für Produktentwickler & Ingenieure
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Rapid Prototyping<br />
                  <span className="text-primary">in 24 Stunden</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                  Von der CAD-Datei zum funktionsfähigen Prototypen – schneller als
                  jede andere Fertigungsmethode. Iterieren Sie Ihre Produktentwicklung
                  in Tagen statt Wochen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="hero" className="text-base">
                    <Link to="/kontakt">
                      Prototyp anfragen
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/ratgeber/prototyping-guide">Prototyping-Guide lesen</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-6 mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm font-medium">5.0 Google Bewertung</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 text-primary" />
                    NDA auf Anfrage
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className={`${index === 0 ? "bg-primary text-primary-foreground" : "bg-card"} border-0 shadow-lg hover:shadow-xl transition-shadow`}
                  >
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

        {/* ── Benefits ─────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Warum 3D-Druck für Prototypen?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Schneller, günstiger, flexibler als jede andere Methode
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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

        {/* ── Anwendungsfälle ───────────────────────────────────────── */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Einsatzbereiche</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Von der ersten Idee bis zum serienreifen Produkt
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
                        <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                          {useCase.highlight}
                        </div>
                        <h3 className="text-xl font-bold">{useCase.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{useCase.description}</p>
                    <ul className="space-y-1.5">
                      {useCase.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Prozess ───────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">So funktioniert's</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vom ersten Kontakt bis zur Lieferung – einfach und transparent
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
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Materialien für Prototypen</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Das richtige Material für jeden Anwendungsfall
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
            <div className="text-center mt-10">
              <Button asChild variant="outline">
                <Link to="/3d-druck-materialien">
                  Alle Materialien im Detail
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── Vergleich mit Alternativen ────────────────────────────── */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">3D-Druck vs. klassische Prototypen-Methoden</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Warum immer mehr Unternehmen auf additives Rapid Prototyping setzen
              </p>
            </div>
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold">Kriterium</th>
                    <th className="p-4 font-semibold text-primary">3D-Druck FDM</th>
                    <th className="p-4 font-semibold text-muted-foreground">CNC-Fräsen</th>
                    <th className="p-4 font-semibold text-muted-foreground">Spritzguss</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Lieferzeit", "24–48h", "5–10 Tage", "4–8 Wochen"],
                    ["Kosten Erstteil", "Ab €20", "Ab €200", "Ab €5.000"],
                    ["Geometriefreiheit", "Sehr hoch", "Mittel", "Eingeschränkt"],
                    ["Design-Änderungen", "Kostenlos", "Aufwändig", "Sehr teuer"],
                    ["Mindestmenge", "1 Stück", "1 Stück", "500–5.000"],
                    ["Materialvielfalt", "Hoch", "Sehr hoch", "Sehr hoch"],
                  ].map(([criteria, fdm, cnc, spritz], i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-medium">{criteria}</td>
                      <td className="p-4 text-center bg-primary/5 text-primary font-medium">{fdm}</td>
                      <td className="p-4 text-center text-muted-foreground">{cnc}</td>
                      <td className="p-4 text-center text-muted-foreground">{spritz}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Keyword-Content ───────────────────────────────────────── */}
        <KeywordRichContent
          title={keywordContent.title}
          intro={keywordContent.intro}
          blocks={keywordContent.blocks}
          ctaText="Kostenloses Angebot anfordern"
          ctaLink="/kontakt"
        />

        {/* ── CTA Banner ────────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Starten Sie Ihre Produktentwicklung jetzt</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
              Senden Sie uns Ihre CAD-Datei – wir antworten innerhalb von 6 Stunden
              mit einem detaillierten Angebot. Kostenlos und unverbindlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/kontakt">
                  Prototyp anfragen
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/ratgeber/prototyping-guide">Ratgeber lesen</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <FAQSection
          faqs={faqs}
          title="Häufige Fragen zum Rapid Prototyping"
          subtitle="Alles was Entwickler und Ingenieure wissen müssen"
          schemaId="rapid-prototyping"
        />

        {/* ── Related Pages ─────────────────────────────────────────── */}
        <RelatedPages currentPage="/rapid-prototyping" title="Weitere Services" />

      </main>

      <AIChatWidget />
      <Footer />
    </>
  );
};

export default RapidPrototyping;
