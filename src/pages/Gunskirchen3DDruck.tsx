import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import HowToSchema from "@/components/HowToSchema";
import ReviewsWidget from "@/components/ReviewsWidget";
import AnimatedSection from "@/components/AnimatedSection";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, ArrowRight, CheckCircle2, Zap, Shield, Clock, Users, Factory, Cog, Box, Leaf, Sparkles, MapPin, Heart } from "lucide-react";

const Gunskirchen3DDruck = () => {
  useEffect(() => {
    document.title = "3D-Druck Gunskirchen | Lokaler Premium FDM Service | ekdruck e.U.";
  }, []);

  const faqs = [
    {
      question: "Wo finde ich Sie in Gunskirchen?",
      answer: "Wir sind direkt in Gunskirchen ansässig und bieten persönliche Beratung und Abholung vor Ort an. Nach Terminvereinbarung können Sie uns besuchen, Ihre Projekte besprechen und Muster ansehen. So haben Sie direkten Kontakt zum Hersteller."
    },
    {
      question: "Kann ich meine Teile direkt in Gunskirchen abholen?",
      answer: "Ja, selbstverständlich! Nach Terminvereinbarung können Sie Ihre fertigen Teile direkt bei uns in Gunskirchen abholen. Das spart Versandkosten und Zeit. Viele lokale Kunden aus Gunskirchen, Wels und Umgebung nutzen diese Möglichkeit."
    },
    {
      question: "Bieten Sie persönliche Beratung vor Ort an?",
      answer: "Absolut! Als lokaler Anbieter legen wir großen Wert auf persönlichen Kontakt. Wir beraten Sie gerne in unseren Räumlichkeiten in Gunskirchen zu Ihrem Projekt, zeigen Ihnen Material-Muster und besprechen alle technischen Details face-to-face."
    },
    {
      question: "Wie schnell kann ich meine Teile bekommen?",
      answer: "Dank unserer lokalen Nähe in Gunskirchen sind besonders schnelle Lieferzeiten möglich. Express-Aufträge können oft am gleichen oder nächsten Tag abgeholt werden. Standardaufträge sind in 2-3 Tagen fertig. Bei Abholung sparen Sie zusätzlich Versandzeit."
    },
    {
      question: "Welche Materialien verwenden Sie?",
      answer: "Wir arbeiten ausschließlich mit österreichischem Premium-Filament: PLA, PETG, ABS, TPU und technische Materialien. Bei einem persönlichen Termin können Sie alle Materialien anfassen und vergleichen – so finden Sie das perfekte Material für Ihr Projekt."
    },
    {
      question: "Können Sie auch größere Serien fertigen?",
      answer: "Ja! Als lokaler Produktionspartner fertigen wir Klein- und Mittelserien von 10 bis 10.000+ Stück. Durch unsere Nähe können wir bei Serienprojekten flexibel auf Änderungen reagieren und Sie persönlich betreuen."
    },
    {
      question: "Unterstützen Sie bei der Konstruktion?",
      answer: "Ja, gerne! Kommen Sie mit Ihrer Idee oder Skizze zu uns nach Gunskirchen. Wir helfen bei der CAD-Konstruktion, optimieren Ihr Design für 3D-Druck und beraten Sie zur besten Material- und Fertigungsstrategie."
    },
    {
      question: "Beliefern Sie auch Unternehmen aus der Region?",
      answer: "Ja! Viele Unternehmen aus Gunskirchen, Wels, Linz und ganz Oberösterreich vertrauen auf unsere Dienstleistung. Als lokaler Partner bieten wir kurze Abstimmungswege, flexible Terminplanung und persönliche Betreuung für Ihre Projekte."
    }
  ];

  const howToSteps = [
    {
      name: "Persönlicher Kontakt",
      text: "Rufen Sie uns an, schreiben Sie eine E-Mail oder besuchen Sie uns direkt in Gunskirchen. Wir besprechen Ihr Projekt persönlich und beraten Sie individuell."
    },
    {
      name: "Transparentes Angebot",
      text: "Sie erhalten ein Festpreisangebot ohne versteckte Kosten. Bei Bedarf zeigen wir Ihnen vor Ort Material-Muster und Referenzteile."
    },
    {
      name: "Lokale Produktion",
      text: "Ihre Teile werden direkt bei uns in Gunskirchen gefertigt und durchlaufen unsere persönliche Qualitätskontrolle."
    },
    {
      name: "Abholung oder Versand",
      text: "Sie können Ihre Teile bequem bei uns abholen oder wir versenden sie versichert zu Ihnen – schnell und zuverlässig."
    }
  ];

  return (
    <>
      <SEOHead 
        title="3D-Druck Gunskirchen | Lokaler Premium FDM Service | ekdruck e.U."
        description="Direkt vor Ihrer Haustür: Besuchen Sie uns in Gunskirchen für persönliche Beratung, Materialauswahl und sofortige Abholung. Ihr lokaler 3D-Druck Spezialist mit Herz. Termin für Vor-Ort-Beratung vereinbaren!"
        keywords="3d-druck gunskirchen, 3d druck gunskirchen lokal, fdm 3d-druck gunskirchen, rapid prototyping gunskirchen, 3d-druck service wels"
        path="/3d-druck-gunskirchen"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "3D-Druck Oberösterreich", url: "/3d-druck-oberoesterreich" },
        { name: "3D-Druck Gunskirchen", url: "/3d-druck-gunskirchen" }
      ]} />
      <StructuredData type="service" />
      <LocalBusinessSchema 
        city="Gunskirchen" 
        region="Oberösterreich" 
        latitude="48.1333" 
        longitude="13.9667" 
        deliveryTime="Same-Day Abholung möglich" 
      />
      <FAQSchema faqs={faqs} city="Gunskirchen" />
      <HowToSchema 
        name="3D-Druck Auftrag in Gunskirchen"
        description="So einfach nutzen Sie unseren lokalen 3D-Druck Service in Gunskirchen"
        totalTime="PT24H"
        steps={howToSteps}
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-8">
                <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm">
                  <MapPin className="w-4 h-4 mr-2 inline" />
                  Ihr lokaler 3D-Druck Partner in Gunskirchen
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  3D-Druck Service
                  <span className="block bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                    Gunskirchen
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4">
                  Lokaler Premium FDM 3D-Druck mit persönlicher Beratung vor Ort • Abholung möglich • Direkter Kontakt zum Hersteller
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  <Heart className="w-5 h-5 inline mr-2 text-primary" />
                  Kurze Wege • Persönlicher Service • Regionale Qualität
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  size="lg" 
                  className="text-lg px-8" 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Jetzt Termin vereinbaren
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <a href="tel:+436765517197">
                    <Phone className="mr-2 h-5 w-5" />
                    Direkt anrufen
                  </a>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-bold text-lg">Lokal</div>
                  <div className="text-sm text-muted-foreground">Vor Ort in Gunskirchen</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                  <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-bold text-lg">Persönlich</div>
                  <div className="text-sm text-muted-foreground">Direkter Kontakt</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-bold text-lg">Same-Day</div>
                  <div className="text-sm text-muted-foreground">Abholung möglich</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-bold text-lg">Made in AT</div>
                  <div className="text-sm text-muted-foreground">Premium-Qualität</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Local Advantages */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Lokale Vorteile</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Warum lokal besser ist
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Als Ihr lokaler Partner in Gunskirchen bieten wir persönlichen Service und maximale Flexibilität
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatedSection animation="slide-up" delay={100}>
                <div className="gradient-card p-8 rounded-2xl border border-border/50 h-full hover-scale">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Persönliche Beratung</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Kommen Sie zu uns nach Gunskirchen. Wir nehmen uns Zeit für Ihr Projekt, zeigen Material-Muster und besprechen alle Details persönlich.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <div className="gradient-card p-8 rounded-2xl border border-border/50 h-full hover-scale">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Abholung vor Ort</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Sparen Sie Zeit und Versandkosten. Holen Sie Ihre fertigen Teile direkt bei uns ab – oft schon am gleichen oder nächsten Tag verfügbar.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={300}>
                <div className="gradient-card p-8 rounded-2xl border border-border/50 h-full hover-scale">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Heart className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Kundennähe</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Kurze Wege, schnelle Abstimmung. Bei Fragen oder Änderungen erreichen Sie uns direkt – ohne lange Wartezeiten oder anonyme Hotlines.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Unser Service-Portfolio</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  3D-Druck für jede Anforderung
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Von der Einzelanfertigung bis zur Serie – alles aus einer Hand in Gunskirchen
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatedSection animation="slide-up" delay={100}>
                <div className="gradient-card p-8 rounded-2xl border border-border/50 h-full hover-scale">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Sparkles className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Rapid Prototyping</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Schnelle Iterationen für Ihre Produktentwicklung. Persönliche Besprechung, Express-Fertigung, Same-Day Abholung möglich.
                  </p>
                  <Button variant="link" asChild className="p-0 h-auto font-semibold">
                    <a href="/rapid-prototyping">
                      Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <div className="gradient-card p-8 rounded-2xl border border-border/50 h-full hover-scale">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Factory className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Serienfertigung</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Klein- und Mittelserien von 10 bis 10.000+ Stück. Lokaler Produktionspartner mit persönlicher Projektbetreuung.
                  </p>
                  <Button variant="link" asChild className="p-0 h-auto font-semibold">
                    <a href="/serienfertigung-3d-druck">
                      Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={300}>
                <div className="gradient-card p-8 rounded-2xl border border-border/50 h-full hover-scale">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Box className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Einzelanfertigungen</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Individuelle Unikate nach Ihren Wünschen. Persönliche Beratung zur optimalen Umsetzung Ihrer Idee.
                  </p>
                  <Button variant="link" asChild className="p-0 h-auto font-semibold">
                    <a href="/einzelanfertigungen-3d-druck">
                      Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Materials Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Premium-Materialien</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Österreichisches Qualitäts-Filament
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Besuchen Sie uns in Gunskirchen und vergleichen Sie alle Materialien persönlich
                </p>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatedSection animation="scale-in" delay={100}>
                <div className="gradient-card p-6 rounded-xl border border-border/50 hover-scale">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold">PLA Premium</h3>
                    <Badge variant="secondary" className="text-xs">Vielseitig</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Biologisch abbaubar, präzise Oberfläche. Ideal für Prototypen, Visualisierungsmodelle und Architektur.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scale-in" delay={150}>
                <div className="gradient-card p-6 rounded-xl border border-border/50 hover-scale">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold">PETG Industrial</h3>
                    <Badge variant="secondary" className="text-xs">Robust</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Hohe Schlagzähigkeit, chemikalienbeständig. Perfekt für mechanisch belastete Funktionsteile.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scale-in" delay={200}>
                <div className="gradient-card p-6 rounded-xl border border-border/50 hover-scale">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold">ABS Engineering</h3>
                    <Badge variant="secondary" className="text-xs">Hitzebeständig</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Temperaturbeständig bis 100°C, schlagfest. Automotive, Maschinenbau, technische Gehäuse.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scale-in" delay={250}>
                <div className="gradient-card p-6 rounded-xl border border-border/50 hover-scale">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold">TPU Flex</h3>
                    <Badge variant="secondary" className="text-xs">Flexibel</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Gummiartig flexibel, abriebfest. Dichtungen, Dämpfer, Griffe und Schutzkomponenten.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scale-in" delay={300}>
                <div className="gradient-card p-6 rounded-xl border border-border/50 hover-scale">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold">Carbon-Filament</h3>
                    <Badge variant="secondary" className="text-xs">High-Tech</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Carbonfaser-verstärkt, extrem steif. Leichtbau, Werkzeugbau, hochbelastete Konstruktionen.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scale-in" delay={350}>
                <div className="gradient-card p-6 rounded-xl border border-border/50 hover-scale">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold">Spezial-Filamente</h3>
                    <Badge variant="secondary" className="text-xs">Custom</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Holz-Fill, Metall-Fill, ESD-sicher und mehr. Individuelle Materialberatung bei uns vor Ort.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fade-in" delay={400}>
              <div className="mt-12 text-center">
                <Button variant="outline" size="lg" asChild>
                  <a href="/3d-druck-materialien">
                    <Leaf className="mr-2 h-5 w-5" />
                    Alle Materialien entdecken
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Unser Prozess</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  So einfach geht's
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Lokale Produktion mit persönlichem Service – von Anfang bis Ende
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howToSteps.map((step, index) => (
                <AnimatedSection key={index} animation="slide-up" delay={index * 100}>
                  <div className="relative">
                    <div className="gradient-card p-6 rounded-xl border border-border/50 h-full">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{step.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Ihre Vorteile</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Warum ekdruck in Gunskirchen?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Lokale Nähe trifft auf Premium-Qualität und persönlichen Service
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatedSection animation="slide-up" delay={100}>
                <div className="flex gap-4 p-6 rounded-xl border border-border/50 bg-card hover-scale">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Lokal in Gunskirchen</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Direkt vor Ort, kurze Wege, persönlicher Kontakt. Besuchen Sie uns für Beratung und Materialvergleich.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={150}>
                <div className="flex gap-4 p-6 rounded-xl border border-border/50 bg-card hover-scale">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Same-Day Abholung</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Express-Aufträge oft am gleichen Tag fertig. Sparen Sie Zeit und Versandkosten durch direkte Abholung.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <div className="flex gap-4 p-6 rounded-xl border border-border/50 bg-card hover-scale">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Persönliche Betreuung</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Direkter Draht zum Hersteller. Kein Callcenter, sondern Face-to-Face Beratung in Gunskirchen.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={250}>
                <div className="flex gap-4 p-6 rounded-xl border border-border/50 bg-card hover-scale">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Österreichische Qualität</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Premium-Filament aus österreichischer Produktion. Höchste Qualitätsstandards für Ihre Projekte.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={300}>
                <div className="flex gap-4 p-6 rounded-xl border border-border/50 bg-card hover-scale">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Factory className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Vom Prototyp zur Serie</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Einzelteile bis 10.000+ Stück – alles aus einer Hand mit persönlicher Projektbetreuung.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={350}>
                <div className="flex gap-4 p-6 rounded-xl border border-border/50 bg-card hover-scale">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Cog className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Konstruktions-Support</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Wir helfen bei CAD-Konstruktion und Design-Optimierung – persönliche Beratung in Gunskirchen.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4">FAQ</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Häufig gestellte Fragen
                </h2>
                <p className="text-xl text-muted-foreground">
                  Alles über unseren lokalen 3D-Druck Service in Gunskirchen
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border border-border/50 rounded-lg px-6 bg-card hover:border-primary/50 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
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
        <Contact />

        <AIChatWidget />
        <Footer />
      </div>
    </>
  );
};

export default Gunskirchen3DDruck;
