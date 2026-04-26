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
  Briefcase,
  CheckCircle,
  ArrowRight,
  FileText,
  Handshake,
  ShieldCheck,
  Repeat,
  Settings2,
  Building2,
} from "lucide-react";

const DruckDienstleister = () => {
  const services = [
    {
      icon: Building2,
      title: "Architekturmodelle für Büros",
      description:
        "Wettbewerbs- und Präsentationsmodelle in Maßstäben 1:50 bis 1:1000. Pünktliche Lieferung zu Abgabeterminen, koordiniert mit Ihrem Projektplan.",
    },
    {
      icon: Briefcase,
      title: "Messemodelle & Exponate",
      description:
        "Standdekoration, Showpieces und Anschauungsobjekte für Messeauftritte. Direkte Anlieferung an die Messehalle möglich.",
    },
    {
      icon: Settings2,
      title: "Designprototypen für Industrie",
      description:
        "Anschauungs- und Konzeptmodelle für Produktentwicklung, Designreviews und Investorenpräsentationen.",
    },
    {
      icon: Repeat,
      title: "Wiederkehrende Aufträge",
      description:
        "Rahmenverträge und Festpreis-Konditionen für Agenturen, Architekturbüros und Industriekunden mit regelmäßigem Bedarf.",
    },
  ];

  const b2bFeatures = [
    {
      icon: FileText,
      title: "Ordentliche Geschäftsabwicklung",
      text: "Rechnung mit UID, Zahlung auf Konto, Angebot per E-Mail innerhalb von 6 Stunden – sauber dokumentiert für Ihre Buchhaltung.",
    },
    {
      icon: ShieldCheck,
      title: "WKO-gemeldetes Unternehmen",
      text: "Eingetragenes Einzelunternehmen mit aufrechter Gewerbeberechtigung. Mitglied der Wirtschaftskammer Oberösterreich.",
    },
    {
      icon: Handshake,
      title: "Verbindliche Termine",
      text: "Wir kommunizieren realistische Lieferzeiten und halten sie ein – inklusive schriftlicher Bestätigung.",
    },
    {
      icon: Repeat,
      title: "Skalierbar bis Mittelserie",
      text: "Vom Einzelmodell bis zu mehreren hundert Anschauungsstücken pro Auftrag – mit klaren Mengenstaffeln.",
    },
  ];

  const branchen = [
    "Architektur & Stadtplanung",
    "Messebau & Eventagenturen",
    "Industriedesign & Produktentwicklung",
    "Werbe- & Marketingagenturen",
    "Film, Foto & Bühnenbau",
    "Galerien & Kunstprojekte",
    "Bildungseinrichtungen",
    "Gesundheits- & Wellness-Marken (Anschauungsmuster)",
  ];

  const faqs = [
    {
      question: "Was bietet ein 3D-Druck Dienstleister in Österreich konkret an?",
      answer:
        "Als 3D-Druck Dienstleister fertigen wir Anschauungs- und Designmodelle für Geschäftskunden in ganz Österreich. Dazu zählen Architekturmodelle, Messeexponate, Designprototypen, Präsentationsmuster sowie Sonderanfertigungen für Marketing und Kunst. Funktionsteile oder technische Bauteile sind ausgeschlossen.",
    },
    {
      question: "Welche Vorteile bietet ein lokaler Dienstleister in Österreich gegenüber Online-Druckereien?",
      answer:
        "Direkter persönlicher Kontakt, kürzere Lieferzeiten (5–7 Tage statt 2–3 Wochen), Express-Service über Nacht, Rechnung in EUR mit österreichischer UID sowie die Möglichkeit zur persönlichen Übergabe oder Werkstattbesichtigung in Gunskirchen (OÖ).",
    },
    {
      question: "Stellen Sie als Dienstleister auch Rahmenverträge aus?",
      answer:
        "Ja. Für Architekturbüros, Agenturen und Industriekunden mit wiederkehrendem Bedarf bieten wir Festpreis-Konditionen, definierte Reaktionszeiten und priorisierte Bearbeitung an. Sprechen Sie uns auf Ihre Anforderungen an.",
    },
    {
      question: "Wie ist die Auftragsabwicklung bei größeren Projekten?",
      answer:
        "Anfrage → Angebot in 6 h → schriftliche Auftragsbestätigung → Produktion → Lieferung mit Lieferschein → Rechnung mit Zahlungsziel. Bei größeren Projekten arbeiten wir mit Meilensteinen und Zwischenfreigaben.",
    },
    {
      question: "Welche Zahlungskonditionen gelten für Geschäftskunden?",
      answer:
        "Standard ist Rechnung mit 14 Tagen Zahlungsziel nach Lieferung. Bei wiederkehrenden Kunden oder Großprojekten sind individuelle Konditionen möglich.",
    },
    {
      question: "Welche Datenformate akzeptieren Sie als Dienstleister?",
      answer:
        "STL, OBJ, 3MF, STEP, STP. Bei Bedarf erstellen wir auf Basis von Skizzen, 2D-Plänen oder Beschreibungen ein 3D-Modell für die Fertigung des Anschauungsobjekts.",
    },
    {
      question: "Liefern Sie als Dienstleister auch außerhalb Österreichs?",
      answer:
        "Unser Hauptmarkt ist Österreich. Lieferungen nach Deutschland und in die Schweiz sind nach Absprache möglich – die Konditionen klären wir individuell im Angebot.",
    },
  ];

  return (
    <>
      <SEOHead
        title="3D-Druck Dienstleister Österreich – B2B-Service aus OÖ"
        description="3D-Druck Dienstleister für Architekten, Messebauer und Industrie in ganz Österreich. Angebot in 6 h, Lieferung in 5–7 Tagen, Rechnung mit UID. Werkstatt in Gunskirchen, OÖ."
        keywords="3d druck dienstleister österreich, 3d druck dienstleister, 3d druck service österreich, 3d druck b2b, 3d druck firmenkunden, 3d druck auftragsfertigung anschauungsmodelle"
        path="/3d-druck-dienstleister-oesterreich"
        schemaType="service"
      />
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "https://www.ek-druck.at/" },
          { name: "3D-Druck Dienstleister Österreich", url: "https://www.ek-druck.at/3d-druck-dienstleister-oesterreich" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        <main>
          <Breadcrumbs items={[{ name: "3D-Druck Dienstleister Österreich", url: "/3d-druck-dienstleister-oesterreich" }]} />

          {/* Hero */}
          <section className="relative py-20 md:py-28 bg-gradient-to-br from-background via-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                  <Briefcase className="h-4 w-4" />
                  B2B-Service · Österreichweit · Rechnung mit UID
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
                  3D-Druck Dienstleister in Österreich
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Verlässlicher 3D-Druck-Partner für Architekturbüros, Messebauer, Agenturen und
                  Industriekunden. Anschauungsmodelle, Designprototypen und Präsentationsobjekte –
                  gefertigt in Gunskirchen (OÖ), geliefert österreichweit.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  <div className="bg-card border rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">6 h</div>
                    <div className="text-xs text-muted-foreground mt-1">Angebot werktags</div>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">B2B</div>
                    <div className="text-xs text-muted-foreground mt-1">Rechnung mit UID</div>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">14 T.</div>
                    <div className="text-xs text-muted-foreground mt-1">Zahlungsziel Standard</div>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">9/9</div>
                    <div className="text-xs text-muted-foreground mt-1">Bundesländer</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild size="lg" className="text-base">
                    <Link to="/kontakt">
                      B2B-Anfrage stellen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-base">
                    <Link to="/firmenkunden">Firmenkunden-Service</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Leistungen */}
          <section className="py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Leistungen unseres 3D-Druck-Dienstleisters
                </h2>
                <p className="text-lg text-muted-foreground">
                  Vier Kernbereiche, in denen wir Geschäftskunden in Österreich beliefern.
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
            </div>
          </section>

          {/* B2B-Features */}
          <section className="py-16 md:py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Was Geschäftskunden in Österreich erwarten dürfen
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {b2bFeatures.map((f, idx) => (
                  <div key={idx} className="bg-card border rounded-lg p-6 flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <f.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Branchen */}
          <section className="py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
                  Branchen, die unser Dienstleister-Angebot nutzen
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {branchen.map((b) => (
                    <div key={b} className="flex items-center gap-3 bg-card border rounded-lg px-4 py-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{b}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <LegalDisclaimer variant="full" />
                </div>
              </div>
            </div>
          </section>

          <FAQSection faqs={faqs} title="Häufige Fragen an den 3D-Druck Dienstleister" />

          <CTASection
            headline="Suchen Sie einen verlässlichen 3D-Druck Dienstleister in Österreich?"
            subline="Senden Sie uns Ihre B2B-Anfrage – Angebot werktags innerhalb von 6 Stunden, Rechnung mit UID, Lieferung in 5–7 Tagen."
            ctaLabel="B2B-Anfrage stellen"
            ctaHref="/kontakt"
            secondaryLabel="Firmenkunden-Service ansehen"
            secondaryHref="/firmenkunden"
          />

          <RelatedPages currentPage="/3d-druck-dienstleister-oesterreich" />
        </main>

        <StickyCTA context="3D-Druck Dienstleister Anfrage" />
        <Footer />
      </div>
    </>
  );
};

export default DruckDienstleister;
