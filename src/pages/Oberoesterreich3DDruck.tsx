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
import { Phone, Mail, ArrowRight, CheckCircle2, Zap, Shield, Clock, Users, Factory, Cog, Box, Leaf, Sparkles } from "lucide-react";
const Oberoesterreich3DDruck = () => {
  useEffect(() => {
    document.title = "3D-Druck Oberösterreich | Premium FDM Service | ekdruck e.U.";
  }, []);
  const faqs = [{
    question: "Welche Lieferzeiten sind in Oberösterreich möglich?",
    answer: "Standardlieferung erfolgt innerhalb von 3-5 Werktagen nach Linz, Wels, Steyr und ganz Oberösterreich. Mit unserem Express-Service realisieren wir dringende Aufträge bereits in 24-48 Stunden. Für Großraum Linz und Wels bieten wir bei Bedarf auch Same-Day-Abholung an."
  }, {
    question: "Welche Materialien nutzen Sie für 3D-Druck in Oberösterreich?",
    answer: "Wir arbeiten hauptsächlich mit österreichischem Premium-Filament: PLA, PETG, ABS, TPU und spezialisierte Materialien wie Carbon-verstärktes Filament. Alle Materialien sind zertifiziert und eignen sich sowohl für Prototypen als auch für funktionale Endprodukte."
  }, {
    question: "Können Sie auch mehrere identische Teile für Unternehmen in OÖ fertigen?",
    answer: "Ja, wir fertigen gerne mehrere identische Modelle für Ihre Projekte. Viele Unternehmen aus Linz, Steyr und Wels vertrauen auf unsere zuverlässige Fertigung."
  }, {
    question: "Wie hoch sind die Kosten für 3D-Druck in Oberösterreich?",
    answer: "Die Kosten hängen von Material, Größe, Komplexität und Stückzahl ab. Nutzen Sie unseren Online-Kostenrechner für eine erste Einschätzung. Kleinteile starten bereits ab wenigen Euro. Für umfangreiche Projekte erstellen wir gerne individuelle Angebote."
  }, {
    question: "Bieten Sie Beratung für Konstruktion und Design in OÖ an?",
    answer: "Absolut! Wir unterstützen Sie bei der 3D-Druck-gerechten Konstruktion, Materialauswahl und Optimierung. Auf Wunsch auch vor Ort in Linz, Wels oder Ihrer Firma. Unser Ziel: Das beste Ergebnis für Ihr Projekt."
  }, {
    question: "Welche Branchen beliefern Sie in Oberösterreich?",
    answer: "Unsere Kunden kommen aus Maschinenbau, Automotive, Medizintechnik, Architektur, Modellbau, Forschung & Entwicklung sowie Sondermaschinenbau. Wir haben Erfahrung mit höchsten Qualitätsanforderungen und komplexen technischen Bauteilen."
  }, {
    question: "Ist eine Abholung in Oberösterreich möglich?",
    answer: "Ja, nach Terminvereinbarung können Sie Ihre Teile im Raum Wels abholen. Das spart Versandkosten und Zeit. Viele Kunden aus Linz, Wels und Steyr nutzen diese Option gerne."
  }, {
    question: "Wie nachhaltig ist Ihr 3D-Druck Service in OÖ?",
    answer: "Sehr nachhaltig: Wir verwenden österreichisches Filament, produzieren On-Demand (keine Lagerhaltung), nutzen recycelbare Materialien und optimieren Bauteile auf minimalen Materialverbrauch. Regional produziert, kurze Transportwege."
  }];
  const howToSteps = [{
    name: "Anfrage & Beratung",
    text: "Senden Sie uns Ihre 3D-Datei (STL, STEP, OBJ) oder beschreiben Sie Ihr Projekt. Wir beraten Sie zu Material, Machbarkeit und Optimierungen."
  }, {
    name: "Angebot & Auftrag",
    text: "Sie erhalten ein transparentes Festpreisangebot inkl. Lieferzeit. Nach Ihrer Freigabe starten wir sofort mit der Produktion."
  }, {
    name: "Produktion & Qualitätskontrolle",
    text: "Ihr Bauteil wird mit modernster FDM-Technologie gefertigt und durchläuft unsere strenge Qualitätsprüfung."
  }, {
    name: "Lieferung nach Oberösterreich",
    text: "Versicherter Expressversand nach Linz, Wels, Steyr und ganz OÖ oder Abholung nach Vereinbarung."
  }];
  return <>
      <SEOHead title="3D-Druck Oberösterreich | Direkt vom Hersteller | Same-Day" description="OÖ: Kürzeste Wege! Same-Day Abholung in Gunskirchen, Express 24h nach Linz/Wels/Steyr. Qualität lokal. → Jetzt OÖ-Vorteil nutzen" keywords="3d-druck oberösterreich, 3d druck linz, 3d druck wels, fdm 3d-druck oö, rapid prototyping oberösterreich, modellbau 3d-druck" path="/3d-druck-oberoesterreich" />
      <BreadcrumbSchema items={[{
      name: "Home",
      url: "/"
    }, {
      name: "3D-Druck Oberösterreich",
      url: "/3d-druck-oberoesterreich"
    }]} />
      <StructuredData type="service" />
      <LocalBusinessSchema city="Oberösterreich" region="Oberösterreich" latitude="48.3069" longitude="14.2858" deliveryTime="24-48h Express möglich" />
      <FAQSchema faqs={faqs} city="Oberösterreich" />
      <HowToSchema name="3D-Druck Auftrag in Oberösterreich" description="So einfach beauftragen Sie professionellen 3D-Druck in Oberösterreich" totalTime="PT24H" steps={howToSteps} />
      
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
                  <Factory className="w-4 h-4 mr-2 inline" />
                  Ihr Premium-Partner für 3D-Druck in Oberösterreich
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  3D-Druck Service
                  <span className="block bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                    Oberösterreich
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4">
                  Premium FDM 3D-Druck für Industrie, Mittelstand & Innovation in Linz, Wels, Steyr und ganz Oberösterreich
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">Österreichisches Filament • Express 24-48h • Individuelle Modelle</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                  <Zap className="mr-2 h-5 w-5" />
                  Jetzt Angebot anfordern
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <a href="/kostenrechner">
                    <Cog className="mr-2 h-5 w-5" />
                    Kosten berechnen
                  </a>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-bold text-lg">24-48h</div>
                  <div className="text-sm text-muted-foreground">Express-Service</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-bold text-lg">Made in AT</div>
                  <div className="text-sm text-muted-foreground">Premium-Qualität</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                  <Factory className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-bold text-lg">10.000+</div>
                  <div className="text-sm text-muted-foreground">Stück möglich</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                  <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-bold text-lg">500+</div>
                  <div className="text-sm text-muted-foreground">Projekte/Jahr</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Unser Service-Portfolio</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  3D-Druck für jede Anforderung
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Von Einzelstücken bis zur Serie – professionelle Fertigung für Oberösterreichs Industrie
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
                    Schnelle Iterationen für Ihre Produktentwicklung. Von der Idee zum greifbaren Prototyp in 24-48h. Ideal für Tests, Präsentationen und Design-Validierung.
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
                  <h3 className="text-2xl font-bold mb-4">Modellbau & Dekoration</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Architekturmodelle, Dekorationsobjekte und individuelle Unikate. Konstante Qualität, kreative Lösungen für Sammler, Architekten und Kreative.
                  </p>
                  <Button variant="link" asChild className="p-0 h-auto font-semibold">
                    <a href="/modellbau-dekoration">
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
                    Maßgeschneiderte Unikate und Spezialanfertigungen. Sondermaschinen-Komponenten, Vorrichtungen, Halterungen, <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Prototypen</a> – präzise nach Ihren Anforderungen gefertigt.
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
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Premium-Materialien</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Österreichisches Qualitäts-Filament
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Hochwertige Materialien für funktionale Bauteile und anspruchsvolle Anwendungen
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
                    <h3 className="text-xl font-bold">PETG Robust</h3>
                    <Badge variant="secondary" className="text-xs">Robust</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Hohe Schlagzähigkeit, chemikalienbeständig. Perfekt für langlebige Objekte.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scale-in" delay={200}>
                <div className="gradient-card p-6 rounded-xl border border-border/50 hover-scale">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold">ABS Hitzebeständig</h3>
                    <Badge variant="secondary" className="text-xs">Hitzebeständig</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Temperaturbeständig bis 100°C, schlagfest. Ideal für anspruchsvolle Anwendungen.
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
                    Holz-Fill, Metall-Fill, ESD-sicher und mehr. Individuelle Materialberatung auf Anfrage.
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
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Unser Prozess</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  So einfach geht's
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Von der Anfrage bis zur Lieferung – transparent und unkompliziert
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howToSteps.map((step, index) => <AnimatedSection key={index} animation="slide-up" delay={index * 100}>
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
                    {index < 3 && <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />}
                  </div>
                </AnimatedSection>)}
            </div>
          </div>
        </section>


        {/* Why Choose Us */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">Ihre Vorteile</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Warum ekdruck für Oberösterreich?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Erfahrung, Qualität und Zuverlässigkeit – darauf vertrauen Oberösterreichs Unternehmen
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatedSection animation="slide-up" delay={100}>
                <div className="flex gap-4 p-6 rounded-xl border border-border/50 bg-card hover-scale">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Express-Service 24-48h</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Dringende Projekte? Wir liefern innerhalb von 24-48 Stunden nach Linz, Wels und ganz Oberösterreich.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={150}>
                <div className="flex gap-4 p-6 rounded-xl border border-border/50 bg-card hover-scale">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Österreichische Premium-Qualität</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Wir setzen auf zertifiziertes Filament aus österreichischer Produktion – für beste Ergebnisse.
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
                    <h3 className="font-bold text-lg mb-2">Persönliche Beratung vor Ort</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Auf Wunsch kommen wir zu Ihnen nach Linz, Wels, Steyr oder besuchen Sie uns in Gunskirchen.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={250}>
                <div className="flex gap-4 p-6 rounded-xl border border-border/50 bg-card hover-scale">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Factory className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Mehrfachanfertigungen möglich</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Von Einzelteilen bis zu mehreren identischen Modellen – wirtschaftlich und mit konstanter Qualität.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={300}>
                <div className="flex gap-4 p-6 rounded-xl border border-border/50 bg-card hover-scale">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Cog className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Konstruktions-Support</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Wir optimieren Ihre Bauteile für perfekte 3D-Druck-Ergebnisse und beraten bei der Materialwahl.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={350}>
                <div className="flex gap-4 p-6 rounded-xl border border-border/50 bg-card hover-scale">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Nachhaltig & Regional</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      On-Demand-Produktion, recycelbare Materialien, kurze Transportwege – gut für die Umwelt.
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
                  Antworten auf die wichtigsten Fragen zu 3D-Druck in Oberösterreich
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-6 bg-card hover:border-primary/50 transition-colors">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline">
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
        <Contact />

        <AIChatWidget />
        <Footer />
      </div>
    </>;
};
export default Oberoesterreich3DDruck;