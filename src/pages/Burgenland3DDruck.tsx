import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import Contact from "@/components/Contact";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ReviewsWidget from "@/components/ReviewsWidget";
import AnimatedSection from "@/components/AnimatedSection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import HowToSchema from "@/components/HowToSchema";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2, Box, Clock, Zap, Award, Package, Leaf, Phone, Mail } from "lucide-react";

const Burgenland3DDruck = () => {
  useEffect(() => {
    document.title = "3D-Druck Burgenland | FDM 3D-Druck Service | ekdruck e.U.";
  }, []);

  const faqs = [
    {
      question: "Wie schnell erfolgt die Lieferung ins Burgenland?",
      answer: "Mit unserem Express-Service liefern wir innerhalb von 24-48 Stunden nach Eisenstadt und in das gesamte Burgenland. Standard-Lieferungen dauern 2-3 Werktage."
    },
    {
      question: "Welche Materialien verwenden Sie für 3D-Druck im Burgenland?",
      answer: "Wir bieten PLA, PETG, ABS, TPU und Nylon aus österreichischer Produktion. Alle Materialien sind für verschiedene Anwendungen optimiert und in höchster Qualität verfügbar."
    },
    {
      question: "Welche Dateiformate werden akzeptiert?",
      answer: "Wir akzeptieren STL, OBJ, STEP, IGES und viele weitere gängige CAD-Formate. Bei Fragen zur Kompatibilität beraten wir Sie gerne."
    },
    {
      question: "Wie werden die Kosten für 3D-Druck im Burgenland berechnet?",
      answer: "Die Kosten hängen von Material, Größe, Komplexität und Druckdauer ab. Nutzen Sie unseren Online-Kostenrechner für eine sofortige Schätzung oder kontaktieren Sie uns für ein individuelles Angebot."
    },
    {
      question: "Bieten Sie auch Nachbearbeitung für 3D-gedruckte Teile an?",
      answer: "Ja, wir bieten professionelle Nachbearbeitung wie Schleifen, Lackieren, Glattieren und weitere Finishing-Optionen für das perfekte Endergebnis."
    }
  ];

  return (
    <>
      <SEOHead 
        title="3D-Druck Burgenland | FDM 3D-Druck Service | ekdruck e.U."
        description="FDM 3D-Druck Service für Eisenstadt, Neusiedl & Oberwart. Rapid Prototyping, Express-Service, nachhaltige Materialien aus AT. Jetzt Angebot anfordern!"
        keywords="3d-druck burgenland, 3d druck eisenstadt, fdm 3d-druck burgenland, rapid prototyping burgenland"
        path="/3d-druck-burgenland"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "3D-Druck Burgenland", url: "/3d-druck-burgenland"}
      ]} />
      <StructuredData type="service" />
      <LocalBusinessSchema 
        city="Eisenstadt"
        region="Burgenland"
        latitude="47.8468"
        longitude="16.5272"
        deliveryTime="24-48h"
      />
      <FAQSchema faqs={faqs} city="Burgenland" />
      <HowToSchema 
        name="3D-Druck Service im Burgenland beauftragen"
        description="So einfach beauftragen Sie professionellen 3D-Druck im Burgenland"
        totalTime="PT48H"
        steps={[
          {
            name: "CAD-Datei hochladen",
            text: "Laden Sie Ihre 3D-Datei hoch oder nutzen Sie unseren Kostenrechner für eine sofortige Schätzung."
          },
          {
            name: "Angebot erhalten",
            text: "Sie erhalten innerhalb von 24 Stunden ein detailliertes Angebot mit Preis und Lieferzeit."
          },
          {
            name: "Produktion starten",
            text: "Nach Ihrer Freigabe starten wir sofort mit der Fertigung Ihres 3D-Drucks."
          },
          {
            name: "Express-Lieferung ins Burgenland",
            text: "Ihr fertiges Teil wird schnell und sicher ins Burgenland geliefert - Express in 24-48h."
          }
        ]}
      />
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <AnimatedSection animation="fade-in">
          <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center">
                <Badge variant="secondary" className="mb-4">
                  <Box className="w-3 h-3 mr-1" />
                  3D-Druck Service Burgenland
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                  3D-Druck für Eisenstadt & Burgenland
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  Professioneller FDM 3D-Druck für Eisenstadt, Neusiedl am See, Oberwart und ganz Burgenland. Express-Service, nachhaltige Materialien aus Österreich.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Button size="lg" className="group" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Jetzt Angebot anfordern 
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/kostenrechner">Kosten berechnen</a>
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-6 justify-center text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Express 24-48h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span>Made in Austria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-primary" />
                    <span>Nachhaltige Materialien</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection animation="slide-up" delay={100}>
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Unsere Services für <span className="text-primary">Burgenland</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Von Rapid Prototyping bis zur Serienfertigung – professioneller 3D-Druck für Ihre Projekte
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <Box className="w-10 h-10 text-primary mb-3" />
                    <CardTitle>FDM 3D-Druck</CardTitle>
                    <CardDescription>
                      Hochwertige Bauteile mit modernster FDM-Technologie für Prototypen und Serienteile
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" asChild className="p-0 h-auto">
                      <a href="/fdm-3d-druck">Mehr erfahren →</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <Zap className="w-10 h-10 text-primary mb-3" />
                    <CardTitle>Express Service</CardTitle>
                    <CardDescription>
                      Schnelle Fertigung in 24-48h für dringende Projekte und Prototypen ins Burgenland
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" asChild className="p-0 h-auto">
                      <a href="/rapid-prototyping">Mehr erfahren →</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <Leaf className="w-10 h-10 text-primary mb-3" />
                    <CardTitle>Nachhaltige Materialien</CardTitle>
                    <CardDescription>
                      Hochwertige Filamente aus österreichischer Produktion für umweltbewussten 3D-Druck
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" asChild className="p-0 h-auto">
                      <a href="/3d-druck-materialien">Mehr erfahren →</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Benefits Section */}
        <AnimatedSection animation="fade-in" delay={200}>
          <section className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Warum ekdruck für <span className="text-primary">Burgenland</span>?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Schnelle Lieferung</h3>
                    <p className="text-muted-foreground">
                      Express-Versand nach Eisenstadt und ganz Burgenland in nur 24-48 Stunden
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Österreichische Qualität</h3>
                    <p className="text-muted-foreground">
                      Hochwertige Materialien aus regionaler Produktion für beste Ergebnisse
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Individuelle Beratung</h3>
                    <p className="text-muted-foreground">
                      Persönlicher Support für Ihr 3D-Druck-Projekt von Anfang bis Ende
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Faire Preise</h3>
                    <p className="text-muted-foreground">
                      Transparente Kalkulation ohne versteckte Kosten – nutzen Sie unseren Kostenrechner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Materials Section */}
        <AnimatedSection animation="slide-up" delay={300}>
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  3D-Druck <span className="text-primary">Materialien</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Hochwertige Filamente aus Österreich für jeden Anwendungsfall
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle>PLA - Biokunststoff</CardTitle>
                      <Badge variant="secondary">Nachhaltig</Badge>
                    </div>
                    <CardDescription>
                      Umweltfreundlich, vielseitig einsetzbar, ideal für Prototypen und Designmodelle
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-primary font-medium">✓ Express verfügbar</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle>PETG - Robust</CardTitle>
                      <Badge variant="secondary">Beliebt</Badge>
                    </div>
                    <CardDescription>
                      Schlagfest, chemikalienbeständig, perfekt für funktionale Bauteile
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-primary font-medium">✓ Express verfügbar</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle>ABS - Technisch</CardTitle>
                      <Badge variant="secondary">Hitzebeständig</Badge>
                    </div>
                    <CardDescription>
                      Hitzebeständig bis 95°C, stabil, ideal für technische Anwendungen
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-primary font-medium">✓ Industriequalität</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle>PA12 Nylon - Premium</CardTitle>
                      <Badge variant="secondary">Hochfest</Badge>
                    </div>
                    <CardDescription>
                      Höchste Festigkeit, flexibel, für anspruchsvolle Anwendungen
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-primary font-medium">✓ Auf Anfrage</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Process Section */}
        <AnimatedSection animation="fade-in" delay={400}>
          <section className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  So einfach geht <span className="text-primary">3D-Druck</span>
                </h2>
                <p className="text-muted-foreground">
                  In nur 4 Schritten zu Ihrem fertigen 3D-gedruckten Teil
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">CAD-Datei hochladen</h3>
                    <p className="text-muted-foreground">
                      Senden Sie uns Ihre 3D-Datei oder nutzen Sie unseren Kostenrechner für eine sofortige Schätzung
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Angebot erhalten</h3>
                    <p className="text-muted-foreground">
                      Innerhalb von 24 Stunden erhalten Sie ein detailliertes Angebot mit Preis und Lieferzeit
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Produktion starten</h3>
                    <p className="text-muted-foreground">
                      Nach Ihrer Freigabe beginnen wir sofort mit der Fertigung Ihres 3D-Drucks
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Express-Lieferung ins Burgenland</h3>
                    <p className="text-muted-foreground">
                      Ihr fertiges Teil wird schnell und sicher geliefert – Express in 24-48h nach Eisenstadt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection animation="slide-up" delay={500}>
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Häufig gestellte <span className="text-primary">Fragen</span>
                </h2>
                <p className="text-muted-foreground">
                  Alles was Sie über 3D-Druck im Burgenland wissen müssen
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </AnimatedSection>

        {/* Reviews */}
        <AnimatedSection animation="fade-in" delay={600}>
          <section className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Kundenstimmen aus <span className="text-primary">Burgenland</span>
              </h2>
              <ReviewsWidget />
            </div>
          </section>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection animation="slide-up" delay={700}>
          <Contact />
        </AnimatedSection>

        <AIChatWidget />
        <Footer />
      </div>
    </>
  );
};

export default Burgenland3DDruck;
