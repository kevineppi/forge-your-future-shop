import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import StructuredData from "@/components/StructuredData";
import ReviewsWidget from "@/components/ReviewsWidget";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Box, Clock, MapPin, Phone, Mail, CheckCircle, Zap, Shield, Leaf, TrendingUp, Factory, Building2, Palette, FlaskConical } from "lucide-react";
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";

const Wien3DDruck = () => {
  useEffect(() => {
    document.title = "3D Druck Wien – Prototypen & Fertigung | ek-druck";
  }, []);

  return (
    <>
      <SEOHead 
        title="3D Druck Wien – Prototypen & Fertigung | ek-druck"
        description="Professioneller 3D Druck in Wien. Prototypen, Einzelfertigung & Serienfertigung – schnell, präzise & individuell. Jetzt unverbindlich anfragen!"
        keywords="3d-druck wien, 3d drucker wien, fdm druck wien, rapid prototyping wien, prototypen wien"
        path="/3d-druck-wien"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "3D-Druck Wien", url: "/3d-druck-wien"}
      ]} />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "ekdruck e.U. - 3D-Druck Wien",
          "image": "https://www.ek-druck.at/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png",
          "@id": "https://www.ek-druck.at",
          "url": "https://www.ek-druck.at/3d-druck-wien",
          "telephone": "+436765517197",
          "email": "office@ekdruck.at",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Wien",
            "addressRegion": "Wien",
            "addressCountry": "AT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.2082,
            "longitude": 16.3738
          },
          "areaServed": [
            { "@type": "City", "name": "Wien" }
          ],
          "priceRange": "€€",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "47"
          }
        })}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Wie schnell kann ich mein 3D-Druck-Teil in Wien erhalten?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mit unserem Express-Service liefern wir innerhalb von 24 Stunden nach Wien. Standard-Lieferungen dauern 2-3 Werktage."
              }
            },
            {
              "@type": "Question",
              "name": "Welche Dateiformate werden akzeptiert?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Wir akzeptieren STL, OBJ, STEP und viele weitere gängige CAD-Formate. Bei Fragen zu Ihrem Format kontaktieren Sie uns gerne."
              }
            },
            {
              "@type": "Question",
              "name": "Wie werden die Kosten für 3D-Druck in Wien berechnet?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Die Kosten hängen von Material, Größe, Komplexität und Druckdauer ab. Nutzen Sie unseren Online-Kostenrechner für eine sofortige Schätzung."
              }
            },
            {
              "@type": "Question",
              "name": "Bieten Sie auch Nachbearbeitung an?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, wir bieten Schleifen, Lackieren und weitere Finishing-Optionen für Ihre 3D-gedruckten Teile in Wien an."
              }
            }
          ]
        })}
      </script>
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section - Enhanced */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <AnimatedSection className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Wien</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                3D-Druck Service in <span className="text-gradient">Wien</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Ihr lokaler Partner für professionellen FDM 3D-Druck in Wien. Schnelle Lieferung innerhalb 24h, 
                nachhaltige österreichische Materialien und persönliche Beratung für Ihr Projekt.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <Button size="lg" className="group" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Jetzt Angebot erhalten
                  <TrendingUp className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/kostenrechner">Kosten berechnen</a>
                </Button>
              </div>
              
              {/* USPs */}
              <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">24h Express</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <Leaf className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Nachhaltig</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Made in Austria</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Top Qualität</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Section - Enhanced */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Unsere <span className="text-gradient">Services in Wien</span>
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Von schnellem Prototyping bis zur Serienfertigung – wir bieten professionelle 3D-Druck-Lösungen für Ihr Projekt in Wien.
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <AnimatedSection delay={0.1}>
                <div className="group gradient-card p-8 rounded-2xl hover-scale border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Box className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">FDM 3D-Druck</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Professioneller FDM 3D-Druck für Prototypen, Einzelteile und Kleinserien. 
                    Schichtauflösung bis 0,1mm für höchste Präzision in Wien.
                  </p>
                  <a href="/fdm-3d-druck" className="text-primary hover:underline font-semibold inline-flex items-center gap-2 group">
                    Mehr erfahren 
                    <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <div className="group gradient-card p-8 rounded-2xl hover-scale border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Express Service 24h</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Benötigen Sie Ihr Teil schnell? Wir liefern innerhalb von 24 Stunden in ganz Wien. 
                    Perfekt für dringende Projekte und Deadlines.
                  </p>
                  <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold inline-flex items-center gap-2 group">
                    Mehr erfahren 
                    <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3}>
                <div className="group gradient-card p-8 rounded-2xl hover-scale border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Leaf className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Nachhaltige Materialien</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Wir verwenden ausschließlich hochwertige Filamente aus österreichischer Produktion. 
                    PLA, PETG, ABS, Nylon – alle aus nachhaltiger Herstellung.
                  </p>
                  <a href="/3d-druck-materialien" className="text-primary hover:underline font-semibold inline-flex items-center gap-2 group">
                    Mehr erfahren 
                    <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Why Choose Us in Wien */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">
                Warum ekdruck für <span className="text-gradient">Wien</span>?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Schnelle Lieferung nach Wien</h3>
                    <p className="text-muted-foreground">Express-Versand innerhalb von 24h direkt zu Ihnen nach Wien</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Lokaler österreichischer Anbieter</h3>
                    <p className="text-muted-foreground">Keine langen Lieferwege aus dem Ausland - direkt aus Oberösterreich</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Persönliche Beratung auf Deutsch</h3>
                    <p className="text-muted-foreground">Kompetente Unterstützung bei der Material- und Verfahrenswahl</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Faire Preise & transparente Kosten</h3>
                    <p className="text-muted-foreground">Nutzen Sie unseren Kostenrechner für eine sofortige Preisschätzung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">
                Anwendungsbereiche für <span className="text-gradient">3D-Druck in Wien</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🏭 Industrie & Maschinenbau</h3>
                  <p className="text-muted-foreground">Funktionale Prototypen, Ersatzteile, Vorrichtungen und Betriebsmittel für Wiener Industrieunternehmen</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🏗️ Architektur & Bau</h3>
                  <p className="text-muted-foreground">Architekturmodelle, Designstudien und Präsentationsmodelle für Wiener Architekten und Planer</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🎨 Design & Kunst</h3>
                  <p className="text-muted-foreground">Kunstobjekte, Designprototypen und individuelle Einzelstücke für Wiener Kreativschaffende</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🔬 Forschung & Entwicklung</h3>
                  <p className="text-muted-foreground">Rapid Prototyping für Universitäten, Forschungseinrichtungen und Start-ups in Wien</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Materials Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">
                <span className="text-gradient">Materialien</span> für Ihr Projekt in Wien
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">PLA - Biokunststoff</h3>
                  <p className="text-muted-foreground mb-2">Nachhaltig, vielseitig einsetzbar, ideal für Prototypen und Designmodelle</p>
                  <p className="text-sm text-primary">Ab sofort verfügbar in Wien</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">PETG - Robust</h3>
                  <p className="text-muted-foreground mb-2">Schlagfest, chemikalienbeständig, für funktionale Bauteile</p>
                  <p className="text-sm text-primary">Express-Service verfügbar</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">ABS - Technisch</h3>
                  <p className="text-muted-foreground mb-2">Hitzebeständig, stabil, für technische Anwendungen</p>
                  <p className="text-sm text-primary">Industriequalität</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">PA12 Nylon - Premium</h3>
                  <p className="text-muted-foreground mb-2">Höchste Festigkeit, flexibel, für anspruchsvolle Anwendungen</p>
                  <p className="text-sm text-primary">Auf Anfrage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">
                So einfach geht <span className="text-gradient">3D-Druck in Wien</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Anfrage senden</h3>
                    <p className="text-muted-foreground">Senden Sie uns Ihre CAD-Datei oder nutzen Sie unseren Kostenrechner für eine erste Schätzung</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Angebot erhalten</h3>
                    <p className="text-muted-foreground">Innerhalb von 24 Stunden erhalten Sie ein detailliertes Angebot mit Preis und Lieferzeit</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Produktion</h3>
                    <p className="text-muted-foreground">Nach Ihrer Freigabe starten wir sofort mit dem 3D-Druck Ihres Projekts</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">4</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Lieferung nach Wien</h3>
                    <p className="text-muted-foreground">Express-Versand innerhalb von 24-48h direkt zu Ihnen nach Wien</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">
                Häufig gestellte <span className="text-gradient">Fragen</span> zum 3D-Druck in Wien
              </h2>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Wie schnell kann ich mein 3D-Druck-Teil in Wien erhalten?</h3>
                  <p className="text-muted-foreground">Mit unserem Express-Service liefern wir innerhalb von 24 Stunden nach Wien. Standard-Lieferungen dauern 2-3 Werktage.</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Welche Dateiformate werden akzeptiert?</h3>
                  <p className="text-muted-foreground">Wir akzeptieren STL, OBJ, STEP und viele weitere gängige CAD-Formate. Bei Fragen zu Ihrem Format kontaktieren Sie uns gerne.</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Wie werden die Kosten für 3D-Druck in Wien berechnet?</h3>
                  <p className="text-muted-foreground">Die Kosten hängen von Material, Größe, Komplexität und Druckdauer ab. Nutzen Sie unseren Online-Kostenrechner für eine sofortige Schätzung.</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Bieten Sie auch Nachbearbeitung an?</h3>
                  <p className="text-muted-foreground">Ja, wir bieten Schleifen, Lackieren und weitere Finishing-Optionen für Ihre 3D-gedruckten Teile in Wien an.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ReviewsWidget />

        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center gradient-card p-12 rounded-2xl">
              <h2 className="text-4xl font-bold mb-6">
                Starten Sie Ihr <span className="text-gradient">3D-Druck Projekt</span> in Wien
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Kontaktieren Sie uns noch heute für ein kostenloses Angebot
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+436765517197" className="text-lg hover:text-primary transition-colors">
                    +43 676 5517197
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:office@ekdruck.at" className="text-lg hover:text-primary transition-colors">
                    office@ekdruck.at
                  </a>
                </div>
              </div>
              <Button size="lg" asChild>
                <a href="/#contact">Kontaktformular</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <Contact />

        <Footer />
      </div>
    </>
  );
};

export default Wien3DDruck;
