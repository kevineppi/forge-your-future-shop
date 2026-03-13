import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import Contact from "@/components/Contact";
import AIChatWidget from "@/components/AIChatWidget";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import FAQSection from "@/components/landing/FAQSection";
import RelatedPages from "@/components/landing/RelatedPages";
import KeywordRichContent from "@/components/landing/KeywordRichContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, Users, Lightbulb, Target, CheckCircle, ArrowRight, Clock, Home, Palette, MapPin } from "lucide-react";

const faqs = [
  {
    question: "Was ist der Unterschied zwischen Einzelanfertigung und Seriendruck?",
    answer: "Einzelanfertigungen sind individuell gestaltete Unikate oder Kleinstserien ab 1 Stück – maßgeschneidert für Ihren genauen Zweck. Seriendruck bezeichnet identische Teile in größerer Stückzahl. Für Messemodelle, Architekturmodelle und spezielle Präsentationsobjekte ist die Einzelanfertigung meist die optimale Wahl."
  },
  {
    question: "Welche Formate werden für Einzelanfertigungen akzeptiert?",
    answer: "Wir verarbeiten STL, STEP, OBJ, 3MF und alle gängigen 3D-CAD-Formate. Haben Sie nur eine Skizze oder ein Foto? Unser Team unterstützt Sie auf Anfrage auch bei der 3D-Modellierung. Senden Sie uns einfach Ihre Idee – wir finden gemeinsam die beste Umsetzung."
  },
  {
    question: "Wie lange dauert die Fertigung einer Einzelanfertigung?",
    answer: "Standardmäßig liefern wir in 3–7 Werktagen. Bei Express-Bedarf auch in 24–48 Stunden möglich. Nach Eingang Ihrer Datei erhalten Sie innerhalb von 6 Arbeitsstunden ein Angebot mit konkretem Liefertermin."
  },
  {
    question: "Ab welcher Größe sind Einzelanfertigungen möglich?",
    answer: "Wir fertigen Objekte von wenigen Zentimetern bis zu über 2 Metern Größe. Größere Objekte werden modular konstruiert und nahtlos zusammengefügt. Für XXL-Anschauungsmodelle, Messeblickfänge oder Architekturmodelle im Maßstab 1:50 haben wir die passende Lösung."
  },
  {
    question: "Welche Materialien sind für Einzelanfertigungen verfügbar?",
    answer: "PLA, PLA+, PETG, ASA, TPU und Spezialfilamente wie Holz-Optik, Marmor-Look, Metallic oder Glow-in-the-dark. Über 20 Farben in PLA verfügbar. Wir beraten Sie zum optimalen Material für Optik, Haptik und Einsatzzweck Ihrer Einzelanfertigung."
  },
  {
    question: "Sind Nachbearbeitungen wie Lackierung oder Beschriftung möglich?",
    answer: "Ja. Auf Anfrage bieten wir Schmirgeln, Grundieren und Lackierung in Wunschfarbe an. Beschriftungen können direkt eingedruckt oder aufgebracht werden. Sprechen Sie uns auf Ihre spezifischen Anforderungen an – wir koordinieren auch externe Nachbearbeitungs-Schritte."
  },
  {
    question: "Gibt es Mindestbestellmengen?",
    answer: "Nein – wir fertigen bereits ab 1 Stück. Das macht uns besonders attraktiv für Unikate, Prototypen, Messemodelle und individuelle Geschenke. Auch für Kleinstserien von 2–20 Stück sind wir die wirtschaftlichste Wahl."
  }
];

const keywordContent = {
  title: "3D-Druck Einzelanfertigungen: Vom Konzept zur Realität",
  intro: "Ob Messemodell für Wien, Architekturmodell für ein Wettbewerbsprojekt in Graz oder ein individuelles Präsentationsobjekt für Linz – als Österreichs Spezialist für 3D-Druck Einzelanfertigungen realisieren wir Projekte, die von der Stange nicht erhältlich sind.",
  blocks: [
    {
      title: "Vorteile gegenüber klassischem Modellbau",
      content: "Traditioneller Modellbau ist teuer, zeitaufwändig und schwer skalierbar. 3D-Druck Einzelanfertigungen starten ab €20, sind in 24h lieferbar und ermöglichen beliebige Geometrien. Änderungswünsche kosten nur eine neue Datei – keine teuren Nachjustierungen an Werkzeugen."
    },
    {
      title: "Präzision für anspruchsvolle Projekte",
      content: "Unsere FDM-Drucker erreichen Schichtauflösungen bis 0,1mm. Das ist ausreichend für detaillierte Architekturmodelle, technische Anschauungsobjekte und hochwertige Messepräsentationen. Für noch feinere Details empfehlen wir SLA-Druck auf Anfrage."
    },
    {
      title: "Nachhaltigkeit durch lokale Fertigung",
      content: "Unsere Einzelanfertigungen entstehen in Gunskirchen, Oberösterreich – mit regionalem Filament aus Europa. Kurze Transportwege schonen die Umwelt. PLA-Materialien sind biologisch abbaubar. Nachhaltiges Wirtschaften ist uns als österreichischem Unternehmen wichtig."
    },
    {
      title: "Vertraulichkeit & professionelle Abwicklung",
      content: "NDA auf Anfrage, sichere Datenhaltung und diskreter Umgang mit Ihren Konstruktionsdaten ist für uns selbstverständlich. Firmenkunden erhalten Rechnung mit Mehrwertsteuer für den Vorsteuerabzug."
    }
  ]
};

const Einzelanfertigungen = () => {
  return (
    <>
      <SEOHead 
        title="Individuelle Anschauungsobjekte | Messe & Präsentation | ekdruck.at"
        description="Individuelle Anschauungsmodelle für Messen, Architektur und Industrie. Maßanfertigung aus Oberösterreich. Ab €20, Angebot in 6h, Lieferung österreichweit."
        keywords="3d-druck anschauungsmodelle, messemodelle, präsentationsmodelle, architekturmodelle 3d-druck, industriemodelle, einzelanfertigungen 3d-druck"
        path="/einzelanfertigungen"
        breadcrumbs={[
          {name: "Home", url: "/"},
          {name: "Einzelanfertigungen", url: "/einzelanfertigungen"}
        ]}
        preloadResources={[
          {href: "/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png", as: "image", type: "image/png"}
        ]}
      />
      <ServiceSchema 
        serviceName="Individuelle Anschauungsobjekte"
        description="Individuelle Anschauungsmodelle für Messen, Architektur und Industriepräsentationen, gefertigt in Oberösterreich."
        serviceType="Service"
        offers={{
          price: "20.00",
          priceCurrency: "EUR",
          description: "Einzelanfertigungen ab €20, individuell kalkuliert nach Projekt"
        }}
      />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "Einzelanfertigungen", url: "/einzelanfertigungen"}
      ]} />
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-tr from-background via-primary/5 to-accent/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-16 left-16 w-32 h-32 border-2 border-primary rounded-lg rotate-12 animate-pulse"></div>
            <div className="absolute top-32 right-32 w-24 h-24 border-2 border-accent rounded-full animate-pulse delay-300"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-8 hover-scale">
                <Sparkles className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
                Individuelle Anschauungsobjekte
                <span className="block text-2xl lg:text-3xl mt-2 text-primary font-normal">für Messe, Architektur & Industrie</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
                Von der Idee zum fertigen Präsentationsobjekt – wir verwirklichen Ihre individuellen 
                Anschauungsmodelle für Messen, Architektur und Kundenpräsentationen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero" className="hover-scale" asChild>
                  <Link to="/kontakt">Projekt besprechen <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="hover-scale" asChild>
                  <Link to="/referenzen">Referenzen ansehen</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <LegalDisclaimer />
            </div>
          </div>
        </section>

        {/* Was wir fertigen */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Was wir für Sie fertigen</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Individuelle Anschauungsmodelle für Messen, Architektur und Industriepräsentationen
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Vom Konzept zum Präsentationsmodell</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-lg flex-shrink-0">
                        <Lightbulb className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Konzeptentwicklung</h4>
                        <p className="text-muted-foreground">Gemeinsam entwickeln wir aus Ihrer Idee ein optimales Anschauungsmodell für Ihren Einsatzzweck.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-lg flex-shrink-0">
                        <Target className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Präzise Umsetzung</h4>
                        <p className="text-muted-foreground">Millimetergenaue Fertigung mit modernster FDM 3D-Druck Technologie – Schichtauflösung bis 0,1mm.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-lg flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Qualitätskontrolle</h4>
                        <p className="text-muted-foreground">Jedes Objekt wird sorgfältig geprüft – präsentationsfertig für Ihren Einsatz.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-card p-8 rounded-2xl">
                  <div className="text-center">
                    <Sparkles className="h-24 w-24 text-primary mx-auto mb-6" />
                    <h4 className="text-xl font-bold mb-4">Komplexe Geometrien möglich</h4>
                    <p className="text-muted-foreground mb-6">
                      Mit 3D-Druck sind auch anspruchsvollste Formen realisierbar – 
                      ideal für einzigartige Messe- und Präsentationsobjekte.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-background/50 p-3 rounded-lg">
                        <div className="font-semibold">20+ Farben</div>
                        <div className="text-primary">verfügbar</div>
                      </div>
                      <div className="bg-background/50 p-3 rounded-lg">
                        <div className="font-semibold">Ab 1 Stück</div>
                        <div className="text-primary">keine Mindestmenge</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Anwendungsbereiche */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Anwendungsbereiche</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Anschauungsmodelle für Messen, Architektur, Industrie und Kunst
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Sparkles className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Messemodelle & Events</CardTitle>
                    <CardDescription>Blickfänger für Ihren Messestand</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Großformatige Exponate</li>
                      <li>• Produktnachbildungen</li>
                      <li>• Standdekorationen</li>
                      <li>• Showpieces</li>
                      <li>• Express 24h möglich</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Home className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Architekturmodelle</CardTitle>
                    <CardDescription>Für Architekten und Planer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Wettbewerbsmodelle</li>
                      <li>• Konzeptstudien</li>
                      <li>• Städtebauliche Modelle</li>
                      <li>• Innenraummodelle</li>
                      <li>• Fassadendetails</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Target className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Industriemodelle</CardTitle>
                    <CardDescription>Anschauungsmodelle für die Industrie</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Produktvisualisierungen</li>
                      <li>• Konzeptdarstellungen</li>
                      <li>• Maßstabsmodelle</li>
                      <li>• Kundenpräsentationen</li>
                      <li>• Schulungsmodelle</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Palette className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Showroom & Retail</CardTitle>
                    <CardDescription>Für Verkaufsräume und Schaufenster</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Schaufensterobjekte</li>
                      <li>• Produktnachbildungen</li>
                      <li>• POS-Displays</li>
                      <li>• Markeninszenierungen</li>
                      <li>• Saisonale Exponate</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Users className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Kunst & Skulpturen</CardTitle>
                    <CardDescription>Für Künstler und Galerien</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Skulpturen & Unikate</li>
                      <li>• Kunstinstallationen</li>
                      <li>• Designstudien</li>
                      <li>• Ausstellungsstücke</li>
                      <li>• Limitierte Editionen</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Clock className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Express-Fertigung</CardTitle>
                    <CardDescription>Für dringende Termine</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 24h Express-Service</li>
                      <li>• Dringende Messetermine</li>
                      <li>• Kurzfristige Präsentationen</li>
                      <li>• Last-Minute Projekte</li>
                      <li>• Eilige Events</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Liefergebiet */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Österreichweit & nach Deutschland</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Gefertigt in Gunskirchen, Oberösterreich – geliefert per Expressversand in ganz Österreich und Deutschland. 
                Persönliche Abholung möglich.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                {["Wien", "Graz", "Linz", "Salzburg", "Innsbruck", "Klagenfurt", "Wels", "München"].map((city) => (
                  <div key={city} className="bg-muted/50 rounded-lg p-3 font-medium">{city}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Keyword Rich Content */}
        <KeywordRichContent
          title={keywordContent.title}
          intro={keywordContent.intro}
          blocks={keywordContent.blocks}
          ctaText="Einzelanfertigung anfragen"
          ctaLink="/kontakt"
        />

        {/* FAQ Section */}
        <FAQSection
          faqs={faqs}
          title="Häufige Fragen zu Einzelanfertigungen"
          subtitle="Alles was Sie über individuelle 3D-Druck Aufträge wissen müssen"
          schemaId="einzelanfertigungen"
        />

        {/* Related Pages */}
        <RelatedPages currentPage="/einzelanfertigungen" title="Weitere Services" />

        {/* CTA Section */}
        <section className="py-16 lg:py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ihr individuelles Anschauungsobjekt startet hier
              </h2>
              <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
                Kostenlose Beratung für Messemodelle, Architekturmodelle und Industriepräsentationen. 
                Wir prüfen gerne die Machbarkeit Ihres Projekts!
              </p>
              <LegalDisclaimer variant="compact" className="max-w-2xl mx-auto mb-8" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero" className="hover-scale" asChild>
                  <Link to="/kontakt">Anfrage stellen <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="hover-scale" asChild>
                  <Link to="/kontakt">Beratung anfordern</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>

      <AIChatWidget />
      <Footer />
    </>
  );
};

export default Einzelanfertigungen;
