import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceSchema from "@/components/ServiceSchema";
import FAQSchema from "@/components/FAQSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Package, Sparkles, Zap, Users, Award } from "lucide-react";
import heroImage from "@/assets/messemodelle-hero.jpg";
import detailImage from "@/assets/messemodelle-detail.jpg";
import showcaseImage from "@/assets/messemodelle-showcase.jpg";
import productionImage from "@/assets/messemodelle-production.jpg";

const Messemodelle = () => {
  const faqs = [
    {
      question: "Welche Materialien eignen sich für Messemodelle im 3D-Druck?",
      answer: "Für Messemodelle empfehlen wir PLA für kostengünstige Prototypen, PETG für robuste Anwendungen und ABS für hochwertige, langlebige Ausstellungsstücke. Je nach Anforderung bieten wir auch spezielle Filamente mit edler Oberfläche an."
    },
    {
      question: "Wie schnell können Messemodelle produziert werden?",
      answer: "Je nach Komplexität und Größe produzieren wir Messemodelle innerhalb von 2-5 Werktagen. Für dringende Messetermine bieten wir Express-Service mit Lieferung in 24-48 Stunden an."
    },
    {
      question: "Können Messemodelle nachträglich lackiert oder veredelt werden?",
      answer: "Ja, wir bieten verschiedene Nachbearbeitungsoptionen an: Schleifen, Grundieren, Lackieren in Wunschfarben sowie Beschriftungen und Logos. Gerne beraten wir Sie zu den Möglichkeiten der Oberflächenveredelung."
    },
    {
      question: "Welche Größen sind für Messemodelle möglich?",
      answer: "Unsere FDM-Drucker ermöglichen Modelle bis zu 30x30x40 cm am Stück. Größere Messemodelle fertigen wir in Einzelteilen, die präzise zusammengefügt werden können. Miniaturmodelle ab 2 cm Größe sind ebenfalls möglich."
    },
    {
      question: "Was kostet ein Messemodell im 3D-Druck?",
      answer: "Die Kosten hängen von Größe, Komplexität und Material ab. Ein einfaches Modell (10x10x10 cm) startet bei ca. 30-50 EUR. Nutzen Sie unseren Kostenrechner für eine genaue Kalkulation oder kontaktieren Sie uns für ein individuelles Angebot."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", url: "/" },
    { name: "Messemodelle 3D-Druck", url: "/messemodelle" }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Messemodelle 3D-Druck | Professionelle Ausstellungsmodelle - EK-Druck</title>
        <meta 
          name="description" 
          content="Hochwertige Messemodelle im 3D-Druck für Ausstellungen und Präsentationen. Schnelle Produktion, individuelle Gestaltung und professionelle Oberflächenveredelung in Österreich." 
        />
        <meta 
          name="keywords" 
          content="Messemodelle 3D-Druck, Ausstellungsmodelle, Präsentationsmodelle, Trade Show Models, Messestand Modelle, 3D-Druck Messe Österreich, Anschauungsmodelle" 
        />
        <link rel="canonical" href="https://www.ek-druck.at/messemodelle" />
      </Helmet>

      <ServiceSchema
        serviceName="Messemodelle 3D-Druck"
        description="Professionelle Messemodelle und Ausstellungsmodelle im 3D-Druck. Schnelle Produktion, individuelle Gestaltung und hochwertige Oberflächenveredelung für Messen und Präsentationen."
        serviceType="Service"
        offers={{
          description: "Messemodelle im FDM 3D-Druckverfahren ab 30 EUR",
          price: "30",
          priceCurrency: "EUR"
        }}
      />

      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection animation="fade-in">
              <div className="max-w-4xl mx-auto text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Messemodelle im 3D-Druck
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  Beeindruckende Ausstellungsmodelle für Ihren perfekten Messeauftritt
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={scrollToContact} className="text-lg px-8">
                    Jetzt Angebot anfragen
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white">
                    Kostenrechner nutzen
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="slide-up">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                  Professionelle Messemodelle für Ihren Erfolg
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Auf Messen und Ausstellungen zählt der erste Eindruck. Mit unseren hochwertigen 3D-gedruckten Messemodellen präsentieren Sie Ihre Produkte, Konzepte und Visionen eindrucksvoll und professionell. Vom detailgetreuen Architekturmodell bis zum funktionalen Produktprototyp – wir realisieren Ihre Messevision.
                </p>
                <p className="text-lg text-muted-foreground">
                  Als österreichischer 3D-Druck-Spezialist kombinieren wir modernste FDM-Technologie mit handwerklicher Präzision. Kurze Produktionszeiten, flexible Gestaltungsmöglichkeiten und professionelle Oberflächenveredelung machen uns zum idealen Partner für Ihre Messeprojekte.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Vorteile Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Ihre Vorteile bei Messemodellen im 3D-Druck
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <AnimatedSection animation="slide-up" delay={100}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Zap className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Schnelle Produktion</h3>
                    <p className="text-muted-foreground">
                      Von der Idee zum fertigen Messemodell in 2-5 Werktagen. Express-Service für dringende Messetermine verfügbar.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Sparkles className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Individuelle Gestaltung</h3>
                    <p className="text-muted-foreground">
                      Komplexe Geometrien, Firmenlogos, Farben und Details – alles nach Ihren Wünschen umsetzbar.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={300}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Award className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Hochwertige Oberflächen</h3>
                    <p className="text-muted-foreground">
                      Professionelle Nachbearbeitung: Schleifen, Lackieren, Veredeln für den perfekten Messeauftritt.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={400}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Package className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Flexible Größen</h3>
                    <p className="text-muted-foreground">
                      Von Miniaturmodellen bis zu großformatigen Ausstellungsstücken – wir finden die optimale Lösung.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={500}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Users className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Persönliche Beratung</h3>
                    <p className="text-muted-foreground">
                      Von der Konzeption bis zur Auslieferung begleiten wir Ihr Messeprojekt individuell.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={600}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Kosteneffizient</h3>
                    <p className="text-muted-foreground">
                      Keine teuren Werkzeuge nötig. Änderungen und Anpassungen kostengünstig möglich.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Anwendungsbereiche */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Anwendungsbereiche für Messemodelle
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <AnimatedSection animation="slide-up" delay={100}>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Architekturmodelle</h3>
                    <p className="text-muted-foreground">
                      Gebäude, Stadtplanungen und Bauprojekte detailgetreu visualisieren für Immobilienmessen und Investorenpräsentationen.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Produktprototypen</h3>
                    <p className="text-muted-foreground">
                      Funktionale oder visuelle Prototypen neuer Produkte für Produktmessen und Fachmessen präsentieren.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={300}>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Maschinenmodelle</h3>
                    <p className="text-muted-foreground">
                      Komplexe Maschinen und Anlagen im Modell darstellen für Industriemessen und Technikmessen.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={400}>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Konzeptmodelle</h3>
                    <p className="text-muted-foreground">
                      Innovative Ideen und Zukunftsvisionen greifbar machen für Investorengespräche und Innovationsmessen.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={500}>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Displaymodelle</h3>
                    <p className="text-muted-foreground">
                      Eyecatcher und Blickfänge für Messestände, um Aufmerksamkeit zu erzeugen und Besucher anzuziehen.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={600}>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Anschauungsmodelle</h3>
                    <p className="text-muted-foreground">
                      Technische Funktionen und Abläufe verständlich visualisieren für Schulungen und Kundenpräsentationen.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <AnimatedSection animation="fade-in" delay={100}>
                <img 
                  src={detailImage} 
                  alt="Detailaufnahme eines hochwertigen 3D-gedruckten Messemodells mit präzisen Oberflächen" 
                  className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                />
              </AnimatedSection>
              <AnimatedSection animation="fade-in" delay={200}>
                <img 
                  src={showcaseImage} 
                  alt="Professionelles Ausstellungsmodell im 3D-Druck für Messepräsentationen" 
                  className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Prozess Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                So entsteht Ihr Messemodell
              </h2>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto space-y-8">
              <AnimatedSection animation="slide-up" delay={100}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Anfrage & Beratung</h3>
                    <p className="text-muted-foreground">
                      Kontaktieren Sie uns mit Ihren Vorstellungen. Wir beraten Sie zu Material, Größe, Oberflächenbehandlung und Kosten für Ihr Messeprojekt.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">3D-Datei & Freigabe</h3>
                    <p className="text-muted-foreground">
                      Senden Sie uns Ihre 3D-Daten oder wir erstellen diese für Sie. Nach Prüfung und ggf. Optimierung erhalten Sie eine Vorschau zur Freigabe.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={300}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Produktion</h3>
                    <p className="text-muted-foreground">
                      Ihr Modell wird im FDM-Verfahren präzise gedruckt. Bei großen Modellen erfolgt die Produktion in Einzelteilen für optimale Qualität.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={400}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Nachbearbeitung</h3>
                    <p className="text-muted-foreground">
                      Je nach Wunsch erfolgt die Oberflächenveredelung: Schleifen, Grundieren, Lackieren in Ihrer Wunschfarbe oder mit Ihrem Logo.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={500}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Lieferung</h3>
                    <p className="text-muted-foreground">
                      Ihr fertiges Messemodell wird sicher verpackt und pünktlich zu Ihrem Messetermin geliefert – österreichweit oder international.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Materialien */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Materialien für Messemodelle
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <AnimatedSection animation="slide-up" delay={100}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">PLA</h3>
                    <p className="text-muted-foreground mb-4">
                      Ideal für kostengünstige Konzeptmodelle und Prototypen. Gute Detailwiedergabe, große Farbauswahl.
                    </p>
                    <p className="text-sm font-medium text-primary">Ab 30 EUR</p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">PETG</h3>
                    <p className="text-muted-foreground mb-4">
                      Robust und schlagfest für Modelle, die transportiert werden. Lebensmittelecht und UV-beständig.
                    </p>
                    <p className="text-sm font-medium text-primary">Ab 45 EUR</p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={300}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">ABS</h3>
                    <p className="text-muted-foreground mb-4">
                      Hochwertig und langlebig für professionelle Ausstellungsmodelle. Lackierbar und hitzebeständig.
                    </p>
                    <p className="text-sm font-medium text-primary">Ab 50 EUR</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Production Image */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <img 
                src={productionImage} 
                alt="3D-Druck Produktion von Messemodellen mit FDM-Technologie" 
                className="rounded-lg shadow-2xl w-full max-w-4xl mx-auto h-[500px] object-cover"
              />
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Häufige Fragen zu Messemodellen
              </h2>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <AnimatedSection key={index} animation="slide-up" delay={index * 100}>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="scale-in">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Bereit für Ihren perfekten Messeauftritt?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Lassen Sie uns gemeinsam Ihr individuelles Messemodell entwickeln. Kontaktieren Sie uns für ein unverbindliches Angebot.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={scrollToContact}
                    className="bg-white text-primary hover:bg-white/90 border-0"
                  >
                    Jetzt Kontakt aufnehmen
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                    onClick={() => window.location.href = '/kostenrechner'}
                  >
                    Kosten berechnen
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <div id="contact">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Messemodelle;
