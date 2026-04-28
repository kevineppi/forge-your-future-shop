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
import LegalDisclaimer from "@/components/LegalDisclaimer";
import CTASection from "@/components/landing/CTASection";
import StickyCTA from "@/components/landing/StickyCTA";
import {
  Zap,
  CheckCircle,
  ArrowRight,
  Eye,
  Palette,
  Lightbulb,
  Clock,
  Map,
  Layers,
} from "lucide-react";

const RapidPrototypingOesterreich = () => {
  const services = [
    {
      icon: Eye,
      title: "Anschauungsprototypen",
      description:
        "Greifbare Designmodelle für Investorengespräche, Pitches und interne Reviews. Form, Proportion und Ästhetik – physisch erfahrbar statt nur als Rendering.",
    },
    {
      icon: Palette,
      title: "Designprototypen",
      description:
        "Frühe Konzeptmodelle zur Formfindung. Testen Sie Varianten, Proportionen und Oberflächen physisch in der Hand.",
    },
    {
      icon: Lightbulb,
      title: "Präsentationsmuster",
      description:
        "Hochwertige Anschauungsmuster für Messen, Produktfotografie, Kataloge und Showrooms. Keine Funktionsbauteile – reine Visualisierung.",
    },
    {
      icon: Layers,
      title: "Konzeptmodelle in Serie",
      description:
        "Mehrere Designvarianten parallel als Anschauungsmodell – ideal für A/B-Vergleiche im Designprozess.",
    },
  ];

  const advantages = [
    {
      title: "Express-Lieferung in 24 Stunden",
      text: "Ob Investor-Pitch morgen oder Messe übermorgen – wir liefern auf Wunsch über Nacht.",
    },
    {
      title: "Schichthöhe ab 0,1 mm",
      text: "Hohe Detailgenauigkeit für realistische Designprototypen, auch bei feinen Geometrien.",
    },
    {
      title: "Lieferung in ganz Österreich",
      text: "Von Wien bis Bregenz – wir versenden in alle Bundesländer, persönliche Anlieferung im Großraum OÖ möglich.",
    },
    {
      title: "Ab 20 € pro Anschauungsmuster",
      text: "Günstiger Einstieg ohne Mindestbestellwert – auch Einzelanfertigungen sind willkommen.",
    },
    {
      title: "Persönlicher Ansprechpartner",
      text: "Direkter Draht zum Geschäftsführer, keine Hotlines, keine anonyme Plattform.",
    },
    {
      title: "Verschiedene Materialien & Farben",
      text: "PLA, PETG, ABS in vielen Farben – passend zu Ihrer Markenidentität oder dem Produktdesign.",
    },
  ];

  const regionen = [
    { name: "Wien", path: "/3d-druck-wien" },
    { name: "Niederösterreich", path: "/3d-druck-niederoesterreich" },
    { name: "Oberösterreich", path: "/3d-druck-oberoesterreich" },
    { name: "Steiermark", path: "/3d-druck-steiermark" },
    { name: "Salzburg", path: "/3d-druck-salzburg" },
    { name: "Tirol", path: "/3d-druck-innsbruck" },
    { name: "Kärnten", path: "/3d-druck-kaernten" },
    { name: "Vorarlberg", path: "/3d-druck-vorarlberg" },
  ];

  const faqs = [
    {
      question: "Was bedeutet Rapid Prototyping in Österreich konkret bei ekdruck?",
      answer:
        "Wir fertigen Designprototypen, Anschauungsmodelle und Präsentationsmuster mittels FDM-3D-Druck in unserer Werkstatt in Gunskirchen (OÖ). Ziel ist die schnelle Visualisierung von Produktdesigns – nicht die Herstellung funktionsfähiger oder belastbarer Bauteile.",
    },
    {
      question: "Wie schnell kann ein Prototyp in Österreich geliefert werden?",
      answer:
        "Standard-Lieferzeit beträgt 5–7 Werktage österreichweit. Mit Express-Service liefern wir kleinere Designprototypen innerhalb von 24 Stunden – ideal für kurzfristige Investoren-Termine oder Messen.",
    },
    {
      question: "Welche Datenformate werden für Rapid Prototyping akzeptiert?",
      answer:
        "Wir verarbeiten STL, OBJ, 3MF, STEP und STP. Falls Sie noch keine 3D-Datei haben, erstellen wir auf Basis von Skizzen oder 2D-Zeichnungen ein Designkonzept – sprechen Sie uns einfach an.",
    },
    {
      question: "Sind die Prototypen für technische Funktionstests geeignet?",
      answer:
        "Nein. Gemäß unserer Gewerbeberechtigung fertigen wir ausschließlich Anschauungs-, Design- und Präsentationsmodelle. Belastungstests, Funktionsprüfungen oder die Verwendung als Funktionsbauteil sind ausgeschlossen.",
    },
    {
      question: "Was kostet ein Designprototyp in Österreich?",
      answer:
        "Kleinere Anschauungsmodelle starten ab ca. 20 €. Der finale Preis hängt von Größe, Material, Detailgrad und Stückzahl ab. Nutzen Sie den Kostenrechner für einen sofortigen Richtpreis oder fragen Sie ein verbindliches Angebot an.",
    },
    {
      question: "Liefern Sie Prototypen in alle Bundesländer Österreichs?",
      answer:
        "Ja. Wir versenden in alle neun Bundesländer – Wien, Niederösterreich, Oberösterreich, Salzburg, Steiermark, Tirol, Kärnten, Vorarlberg und Burgenland. Im Großraum Oberösterreich ist persönliche Anlieferung möglich.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Rapid Prototyping Österreich ★5,0 – 24h Express · ab €20"
        description="Rapid Prototyping in Österreich ✓ Designprototypen & Anschauungsmodelle ✓ Express 24h ✓ ab €20 ✓ Angebot in 6h. ★ 5,0 (31 Bewertungen) – ekdruck OÖ."
        keywords="rapid prototyping österreich, rapid prototyping wien, rapid prototyping linz, designprototypen österreich, prototypen drucken lassen, anschauungsprototyp"
        path="/rapid-prototyping-oesterreich"
        schemaType="service"
      />
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "https://www.ek-druck.at/" },
          { name: "Rapid Prototyping Österreich", url: "https://www.ek-druck.at/rapid-prototyping-oesterreich" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        <main>
          <Breadcrumbs items={[{ name: "Rapid Prototyping Österreich", url: "/rapid-prototyping-oesterreich" }]} />

          {/* Hero */}
          <section className="relative py-20 md:py-28 bg-gradient-to-br from-background via-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                  <Zap className="h-4 w-4" />
                  Express in 24 h · Lieferung österreichweit
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
                  Rapid Prototyping in Österreich
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Schnelle Designprototypen und Anschauungsmodelle aus dem 3D-Drucker –
                  gefertigt in Gunskirchen (OÖ), geliefert in alle Bundesländer.
                  Express-Service über Nacht möglich.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  <div className="bg-card border rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">24 h</div>
                    <div className="text-xs text-muted-foreground mt-1">Express-Lieferung</div>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">ab 20 €</div>
                    <div className="text-xs text-muted-foreground mt-1">pro Designmodell</div>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">0,1 mm</div>
                    <div className="text-xs text-muted-foreground mt-1">Detailgenauigkeit</div>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">9/9</div>
                    <div className="text-xs text-muted-foreground mt-1">Bundesländer</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild size="lg" className="text-base">
                    <Link to="/kontakt">
                      Prototyp anfragen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-base">
                    <Link to="/kostenrechner">Richtpreis berechnen</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Was wir machen */}
          <section className="py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Welche Prototypen fertigen wir in Österreich?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Unser Rapid-Prototyping-Service ist auf Designprototypen und Anschauungsmodelle spezialisiert –
                  keine Funktionsbauteile, keine sicherheitsrelevanten Komponenten.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {services.map((s, idx) => (
                  <Card key={idx} className="border-border/60 hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <s.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{s.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="max-w-3xl mx-auto mt-10">
                <LegalDisclaimer variant="compact" />
              </div>
            </div>
          </section>

          {/* Vorteile */}
          <section className="py-16 md:py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Ihre Vorteile beim Rapid Prototyping in Österreich
                </h2>
                <p className="text-lg text-muted-foreground">
                  Lokal gefertigt, schnell geliefert, persönlich betreut.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advantages.map((adv, idx) => (
                  <div key={idx} className="bg-card border rounded-lg p-6">
                    <div className="flex items-start gap-3 mb-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <h3 className="font-bold text-foreground">{adv.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-8">{adv.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Regionen */}
          <section className="py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground flex items-center justify-center gap-3">
                    <Map className="h-8 w-8 text-primary" />
                    Rapid Prototyping in Ihrer Region
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Wir liefern Designprototypen in alle Bundesländer Österreichs.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {regionen.map((r) => (
                    <Link
                      key={r.path}
                      to={r.path}
                      className="bg-card border rounded-lg px-4 py-3 text-center font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      {r.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-16 md:py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
                  So läuft Ihr Rapid-Prototyping-Auftrag ab
                </h2>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { step: "1", title: "Datei senden", text: "STL, OBJ, 3MF, STEP oder Skizze – per E-Mail oder Kostenrechner." },
                    { step: "2", title: "Angebot in 6 h", text: "Verbindlicher Festpreis inklusive Lieferzeit, werktags innerhalb von 6 Stunden." },
                    { step: "3", title: "Druck in OÖ", text: "Wir produzieren in unserer Werkstatt in Gunskirchen, Schichthöhe ab 0,1 mm." },
                    { step: "4", title: "Lieferung", text: "Versand in 5–7 Tagen, Express in 24 h, persönlich in OÖ." },
                  ].map((p) => (
                    <div key={p.step} className="text-center">
                      <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                        {p.step}
                      </div>
                      <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <FAQSection faqs={faqs} title="Häufige Fragen zum Rapid Prototyping in Österreich" />

          <CTASection
            headline="Designprototyp in Österreich gesucht?"
            subline="Senden Sie uns Ihre Datei – Angebot in 6 Stunden, Lieferung in 5–7 Tagen, Express über Nacht."
            ctaLabel="Prototyp anfragen"
            ctaHref="/kontakt"
            secondaryLabel="Richtpreis berechnen"
            secondaryHref="/kostenrechner"
          />

          <RelatedPages currentPage="/rapid-prototyping-oesterreich" />
        </main>

        <StickyCTA context="Rapid Prototyping Österreich" />
        <Footer />
      </div>
    </>
  );
};

export default RapidPrototypingOesterreich;
