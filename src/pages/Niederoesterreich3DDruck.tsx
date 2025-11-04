import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ReviewsWidget from "@/components/ReviewsWidget";
import Contact from "@/components/Contact";
import TrustBadges from "@/components/TrustBadges";
import LiveCounter from "@/components/LiveCounter";
import StickyCTA from "@/components/StickyCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Mail, ArrowRight, CheckCircle2, Factory, Wrench, Package, BookOpen, Lightbulb, TrendingUp } from "lucide-react";

const Niederoesterreich3DDruck = () => {
  useEffect(() => {
    document.title = "3D-Druck Niederösterreich | FDM 3D-Druck Service | ekdruck e.U.";
  }, []);

  return (
    <>
      <SEOHead 
        title="3D-Druck Niederösterreich | FDM Service | ekdruck"
        description="FDM 3D-Druck Service für St. Pölten, Wiener Neustadt & ganz NÖ. Rapid Prototyping, Express-Service, nachhaltige Materialien aus AT. Jetzt anfragen!"
        keywords="3d-druck niederösterreich, 3d druck st pölten, fdm 3d-druck niederösterreich, rapid prototyping niederösterreich"
        path="/3d-druck-niederoesterreich"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "3D-Druck Niederösterreich", url: "/3d-druck-niederoesterreich"}
      ]} />
      <StructuredData type="service" />
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                3D-Druck Service Niederösterreich
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Professioneller FDM 3D-Druck für St. Pölten, Wiener Neustadt, Krems und ganz Niederösterreich. Schnelle Lieferung, nachhaltige Materialien aus Österreich.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Jetzt Angebot anfordern <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/kostenrechner">Kosten berechnen</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Unsere Services für Niederösterreich</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">FDM 3D-Druck</h3>
                <p className="text-muted-foreground mb-4">
                  Hochwertige Bauteile mit modernster FDM-Technologie für Prototypen und Serienteile.
                </p>
                <Button variant="link" asChild className="p-0">
                  <a href="/fdm-3d-druck">Mehr erfahren →</a>
                </Button>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Express Service</h3>
                <p className="text-muted-foreground mb-4">
                  Schnelle Fertigung in 24-48h für dringende Projekte und Prototypen.
                </p>
                <Button variant="link" asChild className="p-0">
                  <a href="/rapid-prototyping">Mehr erfahren →</a>
                </Button>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Nachhaltige Materialien</h3>
                <p className="text-muted-foreground mb-4">
                  Hochwertige Filamente aus österreichischer Produktion für umweltbewussten 3D-Druck.
                </p>
                <Button variant="link" asChild className="p-0">
                  <a href="/3d-druck-materialien">Mehr erfahren →</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection animation="fade-in">
              <TrustBadges />
            </AnimatedSection>
          </div>
        </section>

        {/* Live Counter */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection animation="scale-in">
              <LiveCounter />
            </AnimatedSection>
          </div>
        </section>

        {/* Target Industries */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Branchen in <span className="text-gradient">Niederösterreich</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="gradient-card border-0 hover:shadow-card transition-all">
                  <CardContent className="p-6">
                    <Factory className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Maschinenbau</h3>
                    <p className="text-muted-foreground">
                      Funktionsprototypen, Ersatzteile und Betriebsmittel für die niederösterreichische Industrie.
                    </p>
                  </CardContent>
                </Card>
                <Card className="gradient-card border-0 hover:shadow-card transition-all">
                  <CardContent className="p-6">
                    <Wrench className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Handwerk & Gewerbe</h3>
                    <p className="text-muted-foreground">
                      Individuelle Lösungen für Handwerksbetriebe und KMUs in der Region.
                    </p>
                  </CardContent>
                </Card>
                <Card className="gradient-card border-0 hover:shadow-card transition-all">
                  <CardContent className="p-6">
                    <Package className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Prototypenbau</h3>
                    <p className="text-muted-foreground">
                      Schnelle Iteration und Validierung für Start-ups und Entwicklungsteams.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Warum ekdruck für Niederösterreich?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Schnelle Lieferung</h3>
                  <p className="text-muted-foreground">Express-Versand nach St. Pölten und ganz Niederösterreich</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Österreichische Qualität</h3>
                  <p className="text-muted-foreground">Hochwertige Materialien aus regionaler Produktion</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Individuelle Beratung</h3>
                  <p className="text-muted-foreground">Persönlicher Support für Ihr 3D-Druck-Projekt</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Faire Preise</h3>
                  <p className="text-muted-foreground">Transparente Kalkulation ohne versteckte Kosten</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Hilfreiche <span className="text-gradient">Ressourcen</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="gradient-card border-0 hover:shadow-card transition-all group">
                  <CardContent className="p-6">
                    <BookOpen className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-3">Material-Guide</h3>
                    <p className="text-muted-foreground mb-4">
                      Welches Material eignet sich für Ihr Projekt? Unser Guide hilft bei der Auswahl.
                    </p>
                    <Button variant="link" asChild className="p-0">
                      <a href="/ratgeber/material-guide">Mehr erfahren →</a>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="gradient-card border-0 hover:shadow-card transition-all group">
                  <CardContent className="p-6">
                    <Lightbulb className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-3">Prototyping-Guide</h3>
                    <p className="text-muted-foreground mb-4">
                      Best Practices für erfolgreichen Prototypenbau mit 3D-Druck.
                    </p>
                    <Button variant="link" asChild className="p-0">
                      <a href="/ratgeber/prototyping-guide">Mehr erfahren →</a>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="gradient-card border-0 hover:shadow-card transition-all group">
                  <CardContent className="p-6">
                    <TrendingUp className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-3">Kosten-Guide</h3>
                    <p className="text-muted-foreground mb-4">
                      Transparente Informationen zu Preisen und Kalkulationsfaktoren.
                    </p>
                    <Button variant="link" asChild className="p-0">
                      <a href="/ratgeber/kosten-guide">Mehr erfahren →</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="container mx-auto max-w-4xl">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Häufige Fragen zum <span className="text-gradient">3D-Druck in Niederösterreich</span>
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "Wie schnell können Sie nach Niederösterreich liefern?",
                    answer: "Standardlieferungen erreichen Sie innerhalb von 2-3 Werktagen. Für dringende Projekte bieten wir einen Express-Service mit Lieferung innerhalb von 24-48 Stunden nach St. Pölten und die umliegenden Regionen."
                  },
                  {
                    question: "Welche Materialien verwenden Sie?",
                    answer: "Wir arbeiten ausschließlich mit hochwertigen Filamenten aus österreichischer Produktion. Unser Portfolio umfasst PLA, PETG, ASA und technische Materialien für anspruchsvolle Anwendungen."
                  },
                  {
                    question: "Bieten Sie auch Beratung für 3D-Druck-Projekte?",
                    answer: "Ja, wir beraten Sie gerne bei der Materialauswahl, Designoptimierung und Fertigungsplanung. Kontaktieren Sie uns für ein kostenloses Beratungsgespräch."
                  },
                  {
                    question: "Können Sie auch Großserien fertigen?",
                    answer: "Ja, wir realisieren auch Serienfertigung mit FDM-Technologie. Sprechen Sie uns an für ein individuelles Angebot für Ihr Projekt."
                  }
                ].map((faq, index) => 
                  <AccordionItem key={index} value={`item-${index}`} className="gradient-card border-0 px-6">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </AnimatedSection>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection animation="scale-in" delay={200}>
              <ReviewsWidget />
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection animation="fade-in">
              <Contact />
            </AnimatedSection>
          </div>
        </section>

        <StickyCTA />
        <WhatsAppButton />
        <AIChatWidget />

        <AIChatWidget />
        <Footer />
      </div>
    </>
  );
};

export default Niederoesterreich3DDruck;