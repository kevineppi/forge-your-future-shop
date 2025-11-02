import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Mail, Factory, Zap, Leaf, Award, Package, Truck, Users, Sparkles } from "lucide-react";
import ReviewsWidget from "@/components/ReviewsWidget";
import AIChatWidget from "@/components/AIChatWidget";
import AnimatedSection from "@/components/AnimatedSection";
import Contact from "@/components/Contact";
import GoogleMaps from "@/components/GoogleMaps";
import HowToSchema from "@/components/HowToSchema";

const Salzburg3DDruck = () => {
  return (
    <>
      <SEOHead
        title="Professioneller 3D-Druckservice Salzburg | Schnell & Präzise - ekdruck"
        description="Ihr Partner für hochwertigen 3D-Druck in Salzburg und Umgebung. FDM-Technologie, österreichisches Filament, Express-Service verfügbar. Kostenlose Beratung!"
        keywords="3D-Druckservice Salzburg, professioneller 3D-Druck Salzburg, FDM-Druck Salzburg Stadt, Rapid Prototyping Salzburg, 3D-Druck Dienstleistungen Salzburg"
        image="/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png"
      />
      
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "3D-Druckservice Salzburg", url: "/3d-druck-salzburg" }
        ]}
      />

      <LocalBusinessSchema 
        city="Salzburg"
        region="Salzburg"
        latitude="47.8095"
        longitude="13.0550"
      />

      <HowToSchema
        name="3D-Druck Anfrage in Salzburg aufgeben"
        description="So einfach kommen Sie zu Ihrem professionellen 3D-Druck in Salzburg"
        totalTime="PT30M"
        steps={[
          {
            name: "Angebot anfordern",
            text: "Senden Sie uns Ihre 3D-Datei per E-Mail oder über unser Kontaktformular. Wir erstellen ein kostenloses und unverbindliches Angebot.",
          },
          {
            name: "Auftrag bestätigen",
            text: "Nach Ihrer Bestätigung starten wir direkt mit der Produktion Ihrer Bauteile.",
          },
          {
            name: "Fertigung & Versand",
            text: "Wir produzieren Ihre Teile mit höchster Präzision und versenden sie zuverlässig nach Salzburg.",
          },
        ]}
      />
      <FAQSchema
        city="Salzburg"
        faqs={[
          {
            question: "Wie schnell kann ich meinen 3D-Druck in Salzburg erhalten?",
            answer: "Standardlieferung erfolgt innerhalb von 5-7 Werktagen nach Salzburg. Für dringende Projekte bieten wir einen Express-Service mit Lieferung in 24-48 Stunden an."
          },
          {
            question: "Welche Dateiformate werden für den 3D-Druckservice akzeptiert?",
            answer: "Wir akzeptieren STL, OBJ, STEP und weitere gängige 3D-Formate. Wenn Sie unsicher sind, kontaktieren Sie uns - wir helfen gerne bei der Dateivorbereitung."
          },
          {
            question: "Was kostet professioneller 3D-Druck in Salzburg?",
            answer: "Die Kosten hängen von Größe, Material und Komplexität ab. Nutzen Sie unseren kostenlosen Kostenrechner für eine sofortige Preisschätzung oder fordern Sie ein individuelles Angebot an."
          },
          {
            question: "Bieten Sie auch Nachbearbeitung für 3D-Drucke an?",
            answer: "Ja, wir bieten verschiedene Nachbearbeitungsoptionen wie Schleifen, Lackieren und Glättung an. Sprechen Sie uns auf Ihre spezifischen Anforderungen an."
          }
        ]}
      />
      <Navigation />

      <main className="min-h-screen">
        {/* Hero Section */}
        <AnimatedSection animation="fade-in">
          <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/10" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Professioneller 3D-Druckservice in Salzburg
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Ihr zuverlässiger Anbieter für hochwertigen FDM-Druck in der Mozartstadt. 
                  Mit österreichischem Premium-Filament, modernster Fertigungstechnologie und 
                  schnellem Lieferservice für Ihre innovativen Projekte.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" asChild className="text-lg px-8">
                    <a href="/contact">Kostenloses Angebot</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-lg px-8">
                    <a href="#services">Unsere Leistungen</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection animation="slide-up" delay={100}>
          <section id="services" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Unsere Dienstleistungen für Salzburg</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Professionelle 3D-Druckservices für Unternehmen, Privatpersonen und Institutionen in Salzburg und Umgebung
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card className="p-8 hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40">
                  <Factory className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Präziser FDM-Druck</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Hochauflösender FDM-3D-Druck für funktionale Prototypen, Ersatzteile und 
                    Kleinserienfertigung mit einer breiten Auswahl an Premium-Materialien.
                  </p>
                </Card>

                <Card className="p-8 hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40">
                  <Zap className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Express-Service</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Eilige Anforderungen? Unser Schnell-Service liefert 
                    Ihre gedruckten Bauteile in nur 24-48 Stunden nach Salzburg.
                  </p>
                </Card>

                <Card className="p-8 hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40">
                  <Leaf className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Premium-Filamente</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Wir setzen auf österreichisches Qualitätsfilament und nachhaltige 
                    Werkstoffe für langlebige und umweltfreundliche Ergebnisse.
                  </p>
                </Card>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Why ekdruck Section */}
        <AnimatedSection animation="fade-in" delay={200}>
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Warum ekdruck als Ihr 3D-Druck Partner?</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Ihr zuverlässiger Dienstleister für hochwertigen additiven Druck in Salzburg
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <div className="text-center group hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Premium-Qualität</h3>
                  <p className="text-muted-foreground">
                    Österreichische Filamente und professionelle FDM-Technologie
                  </p>
                </div>

                <div className="text-center group hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Schnelle Fertigung</h3>
                  <p className="text-muted-foreground">
                    Express-Lieferung in 24-48h für dringende Anfragen
                  </p>
                </div>

                <div className="text-center group hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Regionaler Service</h3>
                  <p className="text-muted-foreground">
                    Kurze Lieferwege und persönliche Betreuung
                  </p>
                </div>

                <div className="text-center group hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Kostenlose Beratung</h3>
                  <p className="text-muted-foreground">
                    Unverbindliche Angebote und fachkundige Unterstützung
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection animation="slide-up" delay={150}>
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Häufig gestellte Fragen</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Antworten auf die wichtigsten Fragen zu unserem 3D-Druckservice
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      Wie schnell kann ich meine 3D-gedruckten Teile in Salzburg erhalten?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Die Standardlieferung nach Salzburg erfolgt innerhalb von 5-7 Werktagen. Für eilige Anfragen 
                      bieten wir einen Express-Service mit Lieferung in nur 24-48 Stunden an.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      Welche Dateiformate akzeptieren Sie für den 3D-Druck?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Wir akzeptieren STL, OBJ, STEP, IGES und weitere gängige CAD-Formate. Falls Sie 
                      unsicher sind, kontaktieren Sie uns - wir unterstützen Sie gerne bei der Dateivorbereitung.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">
                      Wie berechnen sich die Kosten für professionellen 3D-Druck?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Die Kosten richten sich nach Bauteilgröße, gewähltem Material und Komplexität des Objekts. 
                      Nutzen Sie unseren kostenlosen Online-Rechner für eine sofortige Preisschätzung oder 
                      fordern Sie ein maßgeschneidertes Angebot an.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">
                      Welche Nachbearbeitungsmöglichkeiten bieten Sie an?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Wir bieten verschiedene Finishing-Optionen wie Schleifen, professionelles Lackieren, 
                      chemisches Glätten und weitere Oberflächenbehandlungen. Sprechen Sie uns auf Ihre 
                      spezifischen Anforderungen an.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Reviews Widget */}
        <AnimatedSection animation="fade-in" delay={100}>
          <div className="container mx-auto px-4 py-12">
            <ReviewsWidget />
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection animation="fade-in" delay={200}>
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-6">Starten Sie Ihr 3D-Druck Projekt</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Kontaktieren Sie uns für ein kostenloses Angebot oder eine fachkundige Beratung
                  </p>
                </div>

                <Contact />
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <AIChatWidget />
      <Footer />
    </>
  );
};

export default Salzburg3DDruck;