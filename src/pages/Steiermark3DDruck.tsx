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
import { ArrowRight, CheckCircle2, Box, Factory, Palette, Microscope, Building2, Clock, Award, Leaf, Zap } from "lucide-react";

const Steiermark3DDruck = () => {
  useEffect(() => {
    document.title = "3D-Druck Steiermark | FDM 3D-Druck Service | ekdruck e.U.";
  }, []);

  const faqs = [
    {
      question: "Wie schnell erfolgt die Lieferung in die Steiermark?",
      answer: "Mit unserem Express-Service liefern wir innerhalb von 24-48 Stunden nach Graz und in die gesamte Steiermark. Standard-Lieferungen dauern 2-3 Werktage."
    },
    {
      question: "Welche 3D-Druck Materialien bieten Sie an?",
      answer: "Wir bieten PLA, PETG, ABS, TPU und Nylon aus österreichischer Produktion. Alle Materialien sind für verschiedene Anwendungen optimiert und erfüllen höchste Qualitätsstandards."
    },
    {
      question: "Welche Dateiformate werden akzeptiert?",
      answer: "Wir akzeptieren STL, OBJ, STEP, IGES und viele weitere gängige CAD-Formate. Bei Fragen zur Kompatibilität beraten wir Sie gerne."
    },
    {
      question: "Wie werden die Kosten berechnet?",
      answer: "Die Kosten hängen von Material, Größe, Komplexität und Druckdauer ab. Nutzen Sie unseren Online-Kostenrechner für eine sofortige Schätzung oder kontaktieren Sie uns für ein individuelles Angebot."
    },
    {
      question: "Bieten Sie auch Nachbearbeitung an?",
      answer: "Ja, wir bieten professionelle Nachbearbeitung wie Schleifen, Lackieren, Glattieren und weitere Finishing-Optionen für das perfekte Endergebnis."
    },
    {
      question: "Arbeiten Sie auch mit Grazer Universitäten zusammen?",
      answer: "Ja, wir unterstützen Forschungsprojekte und Studierende der TU Graz und anderer Bildungseinrichtungen mit schnellem und qualitativ hochwertigem 3D-Druck."
    }
  ];

  return (
    <>
      <SEOHead 
        title="3D-Druck Steiermark | FDM 3D-Druck Service | ekdruck e.U."
        description="FDM 3D-Druck Service für Graz, Leoben & ganz Steiermark. Rapid Prototyping, Express-Service, nachhaltige Materialien aus AT. Jetzt anfragen!"
        keywords="3d-druck steiermark, 3d druck graz, fdm 3d-druck steiermark, rapid prototyping steiermark"
        path="/3d-druck-steiermark"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "3D-Druck Steiermark", url: "/3d-druck-steiermark"}
      ]} />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      <LocalBusinessSchema 
        city="Graz"
        region="Steiermark"
        latitude="47.0707"
        longitude="15.4395"
        deliveryTime="24-48h"
      />
      <FAQSchema faqs={faqs} city="Steiermark" />
      <HowToSchema 
        name="3D-Druck Service in der Steiermark beauftragen"
        description="So einfach beauftragen Sie professionellen 3D-Druck in der Steiermark"
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
            name: "Express-Lieferung in die Steiermark",
            text: "Ihr fertiges Teil wird schnell und sicher in die Steiermark geliefert - Express in 24-48h."
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
                  3D-Druck Service Steiermark
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                  3D-Druck für Graz & Steiermark
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  Professioneller FDM 3D-Druck für Graz, Leoben, Kapfenberg und die gesamte Steiermark. Express-Service, nachhaltige Materialien aus Österreich.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Button size="lg" className="group" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Jetzt Angebot erhalten
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/kostenrechner">Kosten berechnen</a>
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-6 justify-center text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Express 24-48h nach Graz</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span>TU Graz Partner</span>
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
                  Unsere Services für die <span className="text-primary">Steiermark</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Von Rapid Prototyping bis zur Serienfertigung – professioneller 3D-Druck für Graz und ganz Steiermark
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <Box className="w-10 h-10 text-primary mb-3" />
                    <CardTitle>FDM 3D-Druck</CardTitle>
                    <CardDescription>
                      Professioneller FDM 3D-Druck für Prototypen, Einzelteile und Kleinserien in der Steiermark
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
                      24-48h Express-Lieferung nach Graz und in die gesamte Steiermark für dringende Projekte
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

        {/* Applications Section */}
        <AnimatedSection animation="fade-in" delay={200}>
          <section className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Anwendungsbereiche für <span className="text-primary">3D-Druck in der Steiermark</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Von Industrie bis Forschung – 3D-Druck für alle Branchen
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Factory className="w-8 h-8 text-primary" />
                      <CardTitle>Industrie & Maschinenbau</CardTitle>
                    </div>
                    <CardDescription>
                      Funktionale Prototypen, Ersatzteile und Betriebsmittel für steirische Industrieunternehmen
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Building2 className="w-8 h-8 text-primary" />
                      <CardTitle>Architektur & Bau</CardTitle>
                    </div>
                    <CardDescription>
                      Detaillierte Architekturmodelle und Präsentationsmodelle für Grazer Architekten
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Palette className="w-8 h-8 text-primary" />
                      <CardTitle>Design & Kunst</CardTitle>
                    </div>
                    <CardDescription>
                      Kunstobjekte und Designprototypen für Kreativschaffende in Graz und Umgebung
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Microscope className="w-8 h-8 text-primary" />
                      <CardTitle>Forschung & Entwicklung</CardTitle>
                    </div>
                    <CardDescription>
                      Rapid Prototyping für TU Graz, Universitäten und Forschungseinrichtungen
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Benefits Section */}
        <AnimatedSection animation="slide-up" delay={300}>
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Warum ekdruck für die <span className="text-primary">Steiermark</span>?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Schnelle Lieferung nach Graz</h3>
                    <p className="text-muted-foreground">
                      Express-Versand nach Graz und ganz Steiermark in nur 24-48 Stunden
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
        <AnimatedSection animation="fade-in" delay={400}>
          <section className="py-20 px-4 bg-muted/30">
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
        <AnimatedSection animation="slide-up" delay={500}>
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  So einfach geht <span className="text-primary">3D-Druck</span> in der Steiermark
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
                    <h3 className="font-bold text-lg mb-2">Produktion</h3>
                    <p className="text-muted-foreground">
                      Nach Ihrer Freigabe starten wir sofort mit dem 3D-Druck Ihres Projekts
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Lieferung in die Steiermark</h3>
                    <p className="text-muted-foreground">
                      Express-Versand innerhalb von 24-48h nach Graz und in die gesamte Steiermark
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection animation="fade-in" delay={600}>
          <section className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Häufig gestellte <span className="text-primary">Fragen</span>
                </h2>
                <p className="text-muted-foreground">
                  Alles was Sie über 3D-Druck in der Steiermark wissen müssen
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
        <AnimatedSection animation="slide-up" delay={700}>
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Kundenstimmen aus der <span className="text-primary">Steiermark</span>
              </h2>
              <ReviewsWidget />
            </div>
          </section>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection animation="fade-in" delay={800}>
          <Contact />
        </AnimatedSection>

        <AIChatWidget />
        <Footer />
      </div>
    </>
  );
};

export default Steiermark3DDruck;
