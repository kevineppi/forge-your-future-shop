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
  Building2,
  CheckCircle,
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  Mail,
  Award,
  Users,
  ShieldCheck,
  Truck,
} from "lucide-react";

const DruckFirma = () => {
  const usps = [
    {
      icon: Building2,
      title: "Eingetragene 3D-Druck Firma in Österreich",
      description:
        "ekdruck e.U. ist ein im Firmenbuch eingetragenes Einzelunternehmen mit Sitz in Gunskirchen (OÖ). Sie erhalten eine ordnungsgemäße Rechnung mit UID, korrekt für den Vorsteuerabzug Ihres Unternehmens.",
    },
    {
      icon: ShieldCheck,
      title: "Gewerbeberechtigt & WKO-gemeldet",
      description:
        "Aufrechte Gewerbeberechtigung für die Anfertigung von Anschauungsmodellen, Messemodellen, Architekturmodellen und Kunstgegenständen. Mitglied der Wirtschaftskammer Oberösterreich.",
    },
    {
      icon: Clock,
      title: "Angebot innerhalb von 6 Stunden",
      description:
        "Werktags antworten wir auf Ihre Anfrage innerhalb von 6 Stunden mit einem konkreten Festpreis-Angebot – ohne versteckte Kosten, ohne Mindestbestellwert.",
    },
    {
      icon: Truck,
      title: "Lieferung in 5–7 Tagen, Express in 24 h",
      description:
        "Standard-Lieferung in 5–7 Werktagen österreichweit. Express-Service über Nacht möglich. Auf Wunsch persönliche Anlieferung mit Aufstellung vor Ort.",
    },
    {
      icon: Users,
      title: "Persönlicher Ansprechpartner",
      description:
        "Sie sprechen direkt mit dem Geschäftsführer – keine Hotlines, keine Tickets. Ein fester Ansprechpartner über die gesamte Projektlaufzeit.",
    },
    {
      icon: Award,
      title: "5,0 Sterne bei Google (31 Bewertungen)",
      description:
        "Verifizierte Bewertungen von Architekten, Messebauern, Agenturen und Privatkunden aus ganz Österreich. Referenzen auf Anfrage.",
    },
  ];

  const targetGroups = [
    {
      title: "Architekturbüros",
      description:
        "Wettbewerbs-, Präsentations- und Stadtmodelle in Maßstäben von 1:50 bis 1:1000. Lieferung pünktlich zur Abgabe.",
    },
    {
      title: "Messebauer & Agenturen",
      description:
        "Standdekoration, Exponate und Präsentationsobjekte für Messeauftritte – inklusive Express-Option.",
    },
    {
      title: "Industrie & Produktdesign",
      description:
        "Designprototypen und Anschauungsmodelle für Produktentwicklung, Investorenmeetings und Produktfotografie.",
    },
    {
      title: "Marketing & Werbeagenturen",
      description:
        "Sonderanfertigungen für Kampagnen, Window-Displays, Branded Objects und Give-aways im Premiumsegment.",
    },
    {
      title: "Künstler & Galerien",
      description:
        "Skulpturen, Kunstobjekte und Unikate – auch in Großformat und mit nachträglicher Veredelung.",
    },
    {
      title: "Privatkunden mit Sonderwunsch",
      description:
        "Geschenke, Hochzeitsobjekte, Sammlerstücke – qualitativ hochwertig, ohne Mindestbestellwert.",
    },
  ];

  const faqs = [
    {
      question: "Sind Sie eine eingetragene 3D-Druck Firma in Österreich?",
      answer:
        "Ja. ekdruck e.U. ist ein eingetragenes Einzelunternehmen mit Sitz in der Negrellistraße 15, 4623 Gunskirchen (Oberösterreich). Wir verfügen über eine aufrechte Gewerbeberechtigung und sind Mitglied der Wirtschaftskammer Oberösterreich. Sie erhalten eine ordnungsgemäße Rechnung mit UID-Nummer.",
    },
    {
      question: "Welche Leistungen darf Ihre Firma laut Gewerbeschein anbieten?",
      answer:
        "Gemäß unserer Gewerbeberechtigung fertigen wir ausschließlich Anschauungsmodelle, Messemodelle, Architekturmodelle, Präsentationsobjekte sowie Kunst- und Ziergegenstände. Funktionsteile, technische Bauteile, Ersatzteile oder sicherheitsrelevante Komponenten dürfen wir nicht anfertigen.",
    },
    {
      question: "Wie schnell bekomme ich ein Angebot von Ihrer Firma?",
      answer:
        "Werktags innerhalb von 6 Stunden. Sie senden uns Ihre 3D-Datei (STL, OBJ, 3MF, STEP) oder eine Skizze – wir antworten mit einem verbindlichen Festpreis-Angebot inklusive Lieferzeit.",
    },
    {
      question: "Liefert Ihre Firma österreichweit?",
      answer:
        "Ja. Wir liefern in alle neun Bundesländer – Wien, Niederösterreich, Oberösterreich, Salzburg, Steiermark, Tirol, Kärnten, Vorarlberg und Burgenland. Standard-Lieferzeit 5–7 Werktage, Express über Nacht möglich.",
    },
    {
      question: "Gibt es einen Mindestbestellwert?",
      answer:
        "Nein. Wir fertigen ab einem Stück – vom kleinen Anschauungsmodell ab ca. 20 € bis hin zu großen Architekturmodellen oder Messeexponaten. Auch Einzelaufträge sind willkommen.",
    },
    {
      question: "Kann ich die Firma persönlich besuchen?",
      answer:
        "Ja, nach Terminvereinbarung. Unsere Werkstatt in Gunskirchen (zwischen Wels und Vöcklabruck) ist nach Absprache zugänglich – ideal für die persönliche Übergabe wichtiger Modelle oder Detailbesprechungen.",
    },
  ];

  return (
    <>
      <SEOHead
        title="3D-Druck Firma Österreich – Anbieter aus Gunskirchen, OÖ"
        description="Eingetragene 3D-Druck Firma aus Österreich: Modelle, Prototypen, Architekturmodelle. Angebot in 6 h, Lieferung in 5–7 Tagen. Persönlicher Ansprechpartner, ordentliche Rechnung mit UID."
        keywords="3d druck firma, 3d druck firma österreich, 3d druck unternehmen, 3d druck firma oberösterreich, 3d druck firma wien, 3d druck unternehmen österreich"
        path="/3d-druck-firma"
        schemaType="service"
      />
      <BreadcrumbSchema
        items={[
          { name: "Startseite", url: "https://www.ek-druck.at/" },
          { name: "3D-Druck Firma Österreich", url: "https://www.ek-druck.at/3d-druck-firma" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        <main>
          <Breadcrumbs items={[{ name: "3D-Druck Firma Österreich", url: "/3d-druck-firma" }]} />

          {/* Hero */}
          <section className="relative py-20 md:py-28 bg-gradient-to-br from-background via-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                  <Building2 className="h-4 w-4" />
                  Eingetragenes Unternehmen · Sitz in Gunskirchen, OÖ
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
                  3D-Druck Firma in Österreich
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Suchen Sie eine zuverlässige 3D-Druck Firma mit ordentlicher Rechnung,
                  persönlichem Ansprechpartner und kurzen Lieferzeiten? ekdruck e.U. fertigt
                  Anschauungsmodelle, Messeexponate und Architekturmodelle für Kunden in ganz Österreich.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  <div className="bg-card border rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">6 h</div>
                    <div className="text-xs text-muted-foreground mt-1">Angebot werktags</div>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">5–7 T.</div>
                    <div className="text-xs text-muted-foreground mt-1">Standard-Lieferung</div>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">5,0 ★</div>
                    <div className="text-xs text-muted-foreground mt-1">31 Google-Bewertungen</div>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">9/9</div>
                    <div className="text-xs text-muted-foreground mt-1">Bundesländer beliefert</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild size="lg" className="text-base">
                    <Link to="/kontakt">
                      Unverbindliche Anfrage stellen
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

          {/* USPs */}
          <section className="py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Warum ekdruck als 3D-Druck Firma wählen?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Sechs konkrete Gründe, die uns von freiberuflichen Anbietern oder anonymen
                  Online-Druckereien unterscheiden.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {usps.map((usp, idx) => (
                  <Card
                    key={idx}
                    className="border-border/60 hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <usp.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-foreground">{usp.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {usp.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Zielgruppen */}
          <section className="py-16 md:py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Für wen arbeitet unsere 3D-Druck Firma?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Über 80 % unserer Kunden sind B2B – vom kleinen Architekturbüro bis zum
                  internationalen Messebauer.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {targetGroups.map((group, idx) => (
                  <div
                    key={idx}
                    className="bg-card border rounded-lg p-6 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <h3 className="font-bold text-foreground">{group.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {group.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Firmen-Eckdaten */}
          <section className="py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
                  Firmendaten auf einen Blick
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <h3 className="font-bold text-foreground flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-primary" />
                        Unternehmen
                      </h3>
                      <dl className="text-sm space-y-2 text-muted-foreground">
                        <div>
                          <dt className="font-medium text-foreground">Firmenname:</dt>
                          <dd>ekdruck e.U.</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-foreground">Rechtsform:</dt>
                          <dd>Eingetragenes Einzelunternehmen</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-foreground">Gewerbe:</dt>
                          <dd>Anschauungsmodelle, Messemodelle, Architekturmodelle, Kunstgegenstände</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-foreground">Mitgliedschaft:</dt>
                          <dd>Wirtschaftskammer Oberösterreich</dd>
                        </div>
                      </dl>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <h3 className="font-bold text-foreground flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        Standort & Kontakt
                      </h3>
                      <dl className="text-sm space-y-2 text-muted-foreground">
                        <div>
                          <dt className="font-medium text-foreground">Adresse:</dt>
                          <dd>Negrellistraße 15, 4623 Gunskirchen</dd>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <a href="tel:+436765517197" className="hover:text-primary">
                            +43 676 5517197
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-primary" />
                          <a href="mailto:office@ek-druck.at" className="hover:text-primary">
                            office@ek-druck.at
                          </a>
                        </div>
                        <div>
                          <dt className="font-medium text-foreground">Liefergebiet:</dt>
                          <dd>Österreich (alle 9 Bundesländer)</dd>
                        </div>
                      </dl>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8">
                  <LegalDisclaimer variant="full" />
                </div>
              </div>
            </div>
          </section>

          <FAQSection faqs={faqs} title="Häufige Fragen zur 3D-Druck Firma ekdruck" />

          <CTASection
            headline="Bereit, Ihr Projekt mit einer eingetragenen 3D-Druck Firma umzusetzen?"
            subline="Senden Sie uns Ihre Anfrage – wir antworten werktags innerhalb von 6 Stunden mit einem verbindlichen Festpreis-Angebot."
            ctaLabel="Anfrage stellen"
            ctaHref="/kontakt"
            secondaryLabel="Richtpreis berechnen"
            secondaryHref="/kostenrechner"
          />

          <RelatedPages currentPage="/3d-druck-firma" />
        </main>

        <StickyCTA context="3D-Druck Firma Anfrage" />
        <Footer />
      </div>
    </>
  );
};

export default DruckFirma;
