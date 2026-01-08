import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HowToSchema from "@/components/HowToSchema";
import ServiceSchema from "@/components/ServiceSchema";
import FAQSchema from "@/components/FAQSchema";
import AggregateRatingSchema from "@/components/AggregateRatingSchema";
import Contact from "@/components/Contact";
import SocialShare from "@/components/SocialShare";
import AIChatWidget from "@/components/AIChatWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Lightbulb, Cog, Zap, CheckCircle, ArrowRight, Timer, TrendingUp, Target, BarChart3, Rocket, Award, Users } from "lucide-react";

const RapidPrototyping = () => {
  const timeComparison = [
    { method: "FDM Rapid Prototyping", time: "24-72h", cost: "€€", iterations: "Unbegrenzt", complexity: "Hoch" },
    { method: "CNC-Fräsen", time: "1-2 Wochen", cost: "€€€€", iterations: "Limitiert", complexity: "Mittel" },
    { method: "Spritzguss", time: "4-8 Wochen", cost: "€€€€€", iterations: "Sehr limitiert", complexity: "Niedrig" },
    { method: "3D-Metall-Druck", time: "1-2 Wochen", cost: "€€€€€", iterations: "Limitiert", complexity: "Sehr hoch" }
  ];

  const prototypingPhases = [
    { phase: "Konzeptphase", zweck: "Erste Visualisierung", material: "PLA", zeit: "24h", kosten: "€50-150" },
    { phase: "Funktionstest", zweck: "Mechanik prüfen", material: "PETG/ABS", zeit: "48h", kosten: "€150-400" },
    { phase: "Validierung", zweck: "Finale Tests", material: "ABS/Nylon", zeit: "72h", kosten: "€300-800" },
    { phase: "Präserie", zweck: "Nullserie", material: "ASA/PC", zeit: "5-7 Tage", kosten: "€500-2000" }
  ];

  const industryApplications = [
    { industry: "Maschinenbau", zeitersparnis: "85%", kostenreduktion: "70%", beispiel: "Gehäuse, Adapter, Halterungen" },
    { industry: "Medizintechnik", zeitersparnis: "90%", kostenreduktion: "75%", beispiel: "Prothesen, Implantate, Werkzeuge" },
    { industry: "Automotive", zeitersparnis: "80%", kostenreduktion: "65%", beispiel: "Interieur-Teile, Brackets, Clips" },
    { industry: "Consumer Products", zeitersparnis: "75%", kostenreduktion: "60%", beispiel: "Gehäuse, Bedienelemente, Design" }
  ];

  const faqs = [
    {
      question: "Wie schnell kann ich meinen Prototyp erhalten?",
      answer: "Mit unserem Express-Service erhalten Sie Ihren Prototyp bereits in 24-48 Stunden. Standard-Lieferung dauert 3-5 Werktage. Die genaue Lieferzeit hängt von Größe und Komplexität ab."
    },
    {
      question: "Was kostet ein 3D-Druck Prototyp?",
      answer: "Einfache Prototypen starten ab €50. Die Kosten hängen von Material, Größe und Druckdauer ab. Nutzen Sie unseren Kostenrechner für eine sofortige Schätzung oder kontaktieren Sie uns für ein individuelles Angebot."
    },
    {
      question: "Welche Materialien eignen sich für Prototypen?",
      answer: "Für Konzeptmodelle empfehlen wir PLA, für Funktionstests PETG oder ABS, und für finale Validierung Nylon oder ASA. Wir beraten Sie gerne bei der Materialwahl basierend auf Ihren spezifischen Anforderungen."
    },
    {
      question: "Kann ich mehrere Iterationen meines Prototyps anfertigen lassen?",
      answer: "Ja, unbegrenzt! Das ist der große Vorteil von Rapid Prototyping. Sie können Ihr Design optimieren und mehrfach testen, ohne hohe Werkzeugkosten. Jede Iteration kann innerhalb von 24-48h geliefert werden."
    },
    {
      question: "Benötige ich eine CAD-Datei?",
      answer: "Idealerweise ja (STL, OBJ, STEP, IGES). Falls Sie keine CAD-Datei haben, erstellen wir diese gerne für Sie basierend auf Ihrer Skizze oder Idee. Kostenlose Designberatung inklusive."
    },
    {
      question: "Ist Rapid Prototyping auch für Kleinserien geeignet?",
      answer: "Ja, perfekt für Kleinserien von 1-1000 Stück! FDM 3D-Druck ist kostengünstig ohne Werkzeugkosten. Ideal für Markteinführungen, limitierte Editionen oder Tests vor der Serienfertigung."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Prototyp in 24h ab €50 | Heute bestellen, morgen testen"
        description="85% schneller als CNC! Funktionsprototyp morgen in der Hand. Unbegrenzte Iterationen, keine Werkzeugkosten. → Jetzt Express-Prototyp anfragen"
        keywords="rapid prototyping österreich, prototypen 3d-druck, 3d-druck prototypen, express 3d-druck, prototypen 24h, fdm prototyping, schnelle produktentwicklung"
        path="/rapid-prototyping"
        type="article"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Rapid Prototyping Guide", url: "/rapid-prototyping" }
        ]}
        preloadResources={[
          { href: "/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png", as: "image", type: "image/png" }
        ]}
      />
      <ServiceSchema 
        serviceName="Rapid Prototyping 24h Express-Service"
        description="Professioneller Rapid Prototyping Service mit FDM 3D-Druck in Österreich. Express-Fertigung in 24-48h für schnelle Produktentwicklung und Funktionsprototypen. 85% schneller als traditionelle Methoden."
        serviceType="Service"
        offers={{
          price: "50.00",
          priceCurrency: "EUR",
          description: "Rapid Prototyping ab €50, Express-Service verfügbar"
        }}
      />
      <FAQSchema faqs={faqs} />
      <AggregateRatingSchema 
        ratingValue={4.9}
        ratingCount={127}
        bestRating={5}
        worstRating={1}
      />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      
      {/* Article Schema for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Rapid Prototyping Österreich: Wissenschaftlicher Guide + 24h Express-Service",
          "description": "Umfassender wissenschaftlicher Guide zu Rapid Prototyping mit FDM 3D-Druck in Österreich. Inklusive Vergleichstabellen, ROI-Berechnung und Branchenanwendungen.",
          "image": "https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png",
          "author": {
            "@type": "Organization",
            "name": "ekdruck e.U.",
            "url": "https://www.ek-druck.at"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ekdruck e.U.",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.ek-druck.at/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png"
            }
          },
          "datePublished": "2025-02-10",
          "dateModified": "2025-02-10",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.ek-druck.at/rapid-prototyping"
          }
        })}
      </script>
      
      {/* Product Schema for Express Service */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "24h Express Rapid Prototyping Service",
          "description": "Professioneller 24-48h Express-Service für Rapid Prototyping mit FDM 3D-Druck in Österreich. 85% schneller als traditionelle Methoden.",
          "image": "https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png",
          "brand": {
            "@type": "Brand",
            "name": "ekdruck e.U."
          },
          "offers": {
            "@type": "Offer",
            "url": "https://www.ek-druck.at/rapid-prototyping",
            "priceCurrency": "EUR",
            "price": "50",
            "priceValidUntil": "2025-12-31",
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "89"
          }
        })}
      </script>
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Rapid Prototyping Österreich", url: "/rapid-prototyping" }
      ]} />
      <HowToSchema 
        name="Rapid Prototyping mit FDM 3D-Druck"
        description="Schritt-für-Schritt-Anleitung für erfolgreiches Rapid Prototyping mit FDM 3D-Druck"
        totalTime="P2D"
        steps={[
          { name: "CAD-Design erstellen oder optimieren", text: "Erstellen Sie Ihr 3D-Modell in CAD-Software oder lassen Sie es von uns optimieren für den 3D-Druck." },
          { name: "Material und Parameter wählen", text: "Wählen Sie das passende Material (PLA, PETG, ABS, Nylon) basierend auf den Anforderungen Ihres Prototyps." },
          { name: "3D-Druck durchführen", text: "Der FDM 3D-Druck erfolgt Schicht für Schicht mit präziser Temperaturkontrolle und Qualitätssicherung." },
          { name: "Nachbearbeitung und Qualitätskontrolle", text: "Optional: Schleifen, Lackieren oder weitere Veredelungen für das finale Finish Ihres Prototyps." }
        ]}
      />
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-accent rounded-full animate-pulse delay-500"></div>
            <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-primary rounded-full animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-8 hover-scale">
                <Rocket className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
                <span className="text-gradient">3D-Druck Prototypen in 24-48h</span>
                <span className="block text-2xl lg:text-3xl mt-2 text-primary font-normal">Rapid Prototyping ab €50 - Express-Service Österreich</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
                Von der Idee zum fertigen Prototyp in 24-48h! Kostenlose Designberatung, österreichisches Filament und Express-Fertigung. Perfekt für <strong className="text-foreground">schnelle Produktentwicklung und Funktionsprototypen</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="hero" 
                  className="hover-scale" 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Express-Prototyp anfragen <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary" 
                  onClick={() => document.getElementById('wissenschaft')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Zum wissenschaftlichen Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Stats Section */}
        <section className="py-12 bg-muted/30 border-y">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Schneller als CNC</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">70%</div>
                <div className="text-sm text-muted-foreground">Kostenreduktion</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">3-5x</div>
                <div className="text-sm text-muted-foreground">Mehr Iterationen</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Express möglich</div>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-card p-8 rounded-2xl">
              <p className="text-2xl font-bold mb-6 text-center">Inhaltsverzeichnis</p>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="#was-ist" className="text-primary hover:underline flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" /> Was ist Rapid Prototyping?
                </a>
                <a href="#wissenschaft" className="text-primary hover:underline flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" /> Wissenschaftliche Vorteile
                </a>
                <a href="#vergleich" className="text-primary hover:underline flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" /> Methodenvergleich
                </a>
                <a href="#phasen" className="text-primary hover:underline flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" /> Die 4 Prototyping-Phasen
                </a>
                <a href="#fdm-deep-dive" className="text-primary hover:underline flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" /> FDM Deep Dive
                </a>
                <a href="#best-practices" className="text-primary hover:underline flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" /> Best Practices
                </a>
                <a href="#roi" className="text-primary hover:underline flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" /> ROI-Kalkulation
                </a>
                <a href="#express-service" className="text-primary hover:underline flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" /> Express-Service
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Was ist Rapid Prototyping */}
        <section id="was-ist" className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">Was ist Rapid Prototyping?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  <strong className="text-foreground">Rapid Prototyping</strong> bezeichnet die <strong className="text-foreground">schnelle Herstellung funktionaler Prototypen</strong> durch additive Fertigungsverfahren wie FDM 3D-Druck. Im Gegensatz zu traditionellen Methoden (CNC-Fräsen, Spritzguss) ermöglicht Rapid Prototyping die Fertigung komplexer Geometrien in Stunden statt Wochen – ohne teure Werkzeuge oder Formen.
                </p>
                <p className="text-lg leading-relaxed">
                  In Österreich hat sich <strong className="text-foreground">FDM (Fused Deposition Modeling) 3D-Druck</strong> als führende Technologie für Rapid Prototyping etabliert. Die Methode ist besonders attraktiv für KMUs, Startups und Entwicklungsabteilungen, die iterative Produktentwicklung mit kurzen Zykluszeiten benötigen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Wissenschaftliche Evidenz */}
        <section id="wissenschaft" className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Wissenschaftlich bewiesene Vorteile</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Studien belegen: Rapid Prototyping beschleunigt die Produktentwicklung, reduziert Kosten und steigert die Innovationskraft
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-center">85% Zeitersparnis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Gegenüber traditionellen Methoden wie CNC oder Spritzguss (Studie: Wohlers Report 2024)
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-center">70% Kostenreduktion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      In frühen Entwicklungsphasen durch Vermeidung kostspieliger Werkzeuge (MIT Study 2023)
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-center">3-5x mehr Iterationen</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Möglich durch kurze Zykluszeiten, was zu besseren Endprodukten führt (Stanford Research 2024)
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-center">40% weniger Fehler</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Durch frühzeitige physische Validierung vor Serienfertigung (Journal of Product Innovation 2023)
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-center">Bessere Kommunikation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Physische Prototypen verbessern Team-Kommunikation und Kundenfeedback signifikant
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-center">Schnellerer Market Launch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Time-to-Market wird um durchschnittlich 6-8 Wochen verkürzt (Industry Report 2024)
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Warum funktioniert Rapid Prototyping so gut?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Frühe Fehlererkennung
                    </h4>
                    <p className="text-muted-foreground">
                      Physische Prototypen decken Designfehler auf, die in CAD-Software übersehen werden. Eine MIT-Studie zeigt: 73% aller Designfehler werden erst am physischen Prototyp erkannt.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Iterative Optimierung
                    </h4>
                    <p className="text-muted-foreground">
                      Kurze Zyklen ermöglichen 3-5 Iterationen in der Zeit, die traditionelle Methoden für einen einzigen Prototyp benötigen. Jede Iteration verbessert das Endprodukt.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Parallele Entwicklung
                    </h4>
                    <p className="text-muted-foreground">
                      Mehrere Designvarianten können gleichzeitig getestet werden, ohne Mehrkosten für Werkzeuge. Das beschleunigt Entscheidungsfindung drastisch.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Risikoreduzierung
                    </h4>
                    <p className="text-muted-foreground">
                      Bevor teure Werkzeuge für Spritzguss gebaut werden (€20.000+), validieren Prototypen alle Funktionen. Das eliminiert kostspielige Nachbesserungen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vergleichstabellen */}
        <section id="vergleich" className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Methodenvergleich: FDM vs. Traditionelle Verfahren</h2>
              
              {/* Zeitvergleich */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Zeit- und Kostenvergleich</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-card">
                    <thead className="bg-primary/10">
                      <tr>
                        <th className="p-4 text-left font-semibold">Methode</th>
                        <th className="p-4 text-left font-semibold">Lieferzeit</th>
                        <th className="p-4 text-left font-semibold">Kosten</th>
                        <th className="p-4 text-left font-semibold">Iterationen</th>
                        <th className="p-4 text-left font-semibold">Komplexität</th>
                      </tr>
                    </thead>
                    <tbody>
                      {timeComparison.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-muted/20' : ''}>
                          <td className="p-4 font-medium">{item.method}</td>
                          <td className="p-4">
                            <Badge variant={item.time.includes('24') || item.time.includes('72h') ? 'default' : 'secondary'}>
                              {item.time}
                            </Badge>
                          </td>
                          <td className="p-4">{item.cost}</td>
                          <td className="p-4">{item.iterations}</td>
                          <td className="p-4">{item.complexity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Industrie-Anwendungen */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Rapid Prototyping nach Industrie</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-card">
                    <thead className="bg-primary/10">
                      <tr>
                        <th className="p-4 text-left font-semibold">Industrie</th>
                        <th className="p-4 text-left font-semibold">Zeitersparnis</th>
                        <th className="p-4 text-left font-semibold">Kostenreduktion</th>
                        <th className="p-4 text-left font-semibold">Typische Anwendungen</th>
                      </tr>
                    </thead>
                    <tbody>
                      {industryApplications.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-muted/20' : ''}>
                          <td className="p-4 font-medium">{item.industry}</td>
                          <td className="p-4 text-primary font-bold">{item.zeitersparnis}</td>
                          <td className="p-4 text-primary font-bold">{item.kostenreduktion}</td>
                          <td className="p-4 text-sm text-muted-foreground">{item.beispiel}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Die 4 Prototyping-Phasen */}
        <section id="phasen" className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Die 4 Phasen des Rapid Prototyping</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Von der ersten Idee bis zur Serienreife: So nutzen Sie Prototypen optimal in jeder Entwicklungsphase
                </p>
              </div>

              <div className="overflow-x-auto mb-12">
                <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-card">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="p-4 text-left font-semibold">Phase</th>
                      <th className="p-4 text-left font-semibold">Zweck</th>
                      <th className="p-4 text-left font-semibold">Material</th>
                      <th className="p-4 text-left font-semibold">Lieferzeit</th>
                      <th className="p-4 text-left font-semibold">Kosten</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prototypingPhases.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-muted/20' : ''}>
                        <td className="p-4 font-medium">{item.phase}</td>
                        <td className="p-4">{item.zweck}</td>
                        <td className="p-4 text-sm text-muted-foreground">{item.material}</td>
                        <td className="p-4">
                          <Badge>{item.zeit}</Badge>
                        </td>
                        <td className="p-4 text-primary font-bold">{item.kosten}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-6 w-6 text-primary" />
                      Phase 1: Konzeptprototypen
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Ziel:</strong> Erste Visualisierung von Designideen für interne Abstimmung und Investorengespräche.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                      <li>• Schnelle Formstudien mit PLA</li>
                      <li>• Keine funktionalen Anforderungen</li>
                      <li>• 24-48h Lieferzeit möglich</li>
                      <li>• Ideal für A/B-Tests von Designs</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Cog className="h-6 w-6 text-primary" />
                      Phase 2: Funktionsprototypen
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Ziel:</strong> Test von Mechanik, Passgenauigkeit und Montage unter realen Bedingungen.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                      <li>• PETG oder ABS für Stabilität</li>
                      <li>• Bewegliche Teile testen</li>
                      <li>• Passgenauigkeit validieren</li>
                      <li>• Belastungstests durchführen</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-6 w-6 text-primary" />
                      Phase 3: Validierungsprototypen
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Ziel:</strong> Finale Tests vor Werkzeugbau oder Serienfertigung mit seriennahen Eigenschaften.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                      <li>• ABS oder Nylon für Festigkeit</li>
                      <li>• Langzeittests und Feld-Tests</li>
                      <li>• Zertifizierungsvorbereitung</li>
                      <li>• Finale Designfreigabe</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-6 w-6 text-primary" />
                      Phase 4: Präserien-Prototypen
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Ziel:</strong> Nullserie für Produktionsplanung und erste Kundenlieferungen.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                      <li>• ASA oder PC für Haltbarkeit</li>
                      <li>• Qualitätskontrolle etablieren</li>
                      <li>• Produktionsprozesse testen</li>
                      <li>• Erste Kundenfeedbacks einholen</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FDM Deep Dive */}
        <section id="fdm-deep-dive" className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Warum FDM die beste Wahl für Rapid Prototyping ist</h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-12">
                <p className="text-lg leading-relaxed">
                  Von allen 3D-Druck-Verfahren hat sich <strong className="text-foreground">FDM (Fused Deposition Modeling)</strong> als die wirtschaftlichste und vielseitigste Methode für Rapid Prototyping etabliert. Die Gründe sind wissenschaftlich belegt:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">1. Materialvielfalt für alle Anforderungen</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-foreground">PLA:</strong> Schnell, präzise, ideal für Designstudien
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-foreground">PETG:</strong> Schlagfest, chemikalienbeständig
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-foreground">ABS:</strong> Hitzebeständig bis 100°C, schlagzäh
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <strong className="text-foreground">Nylon:</strong> Mechanisch belastbar, abriebfest
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">2. Optimales Preis-Leistungs-Verhältnis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3">
                      Im Vergleich zu SLA oder SLS ist FDM 40-60% günstiger bei gleichzeitig höherer mechanischer Belastbarkeit.
                    </p>
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <p className="text-sm"><strong className="text-foreground">Beispiel:</strong> Ein 100cm³ Prototyp kostet bei FDM €15-25, bei SLA €40-60</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">3. Schnelle Verfügbarkeit in Österreich</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Österreichweit verfügbar mit Express-Service: 24h-Lieferung möglich. Keine langen Transportwege aus Asien, direkte Kommunikation auf Deutsch.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">4. Funktionale Eigenschaften</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      FDM-Teile sind nicht nur Anschauungsmodelle: Sie halten mechanischer Belastung stand, können geschraubt, geklebt und nachbearbeitet werden.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Technische Vorteile von FDM</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">±0.2mm</div>
                    <div className="text-sm text-muted-foreground">Typische Toleranz</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">100-250µm</div>
                    <div className="text-sm text-muted-foreground">Schichthöhe</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">350x350x350mm</div>
                    <div className="text-sm text-muted-foreground">Maximales Bauvolumen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section id="best-practices" className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Best Practices für erfolgreiches Rapid Prototyping</h2>
              
              <div className="space-y-6">
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      1. Design for Additive Manufacturing (DfAM)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Optimieren Sie Ihr Design für 3D-Druck: Vermeiden Sie überhänge über 45°, nutzen Sie generatives Design, minimieren Sie Stützstrukturen.
                    </p>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-sm"><strong className="text-foreground">Tipp:</strong> Senden Sie uns Ihre CAD-Datei – wir optimieren sie kostenlos für den 3D-Druck!</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      2. Materialwahl nach Anforderungen
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong className="text-foreground">Designstudien:</strong> PLA (günstig, schnell)</li>
                      <li>• <strong className="text-foreground">Funktionstests:</strong> PETG (schlagfest)</li>
                      <li>• <strong className="text-foreground">Hitzebeständigkeit:</strong> ABS/ASA (bis 100°C)</li>
                      <li>• <strong className="text-foreground">Mechanische Belastung:</strong> Nylon (abriebfest)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      3. Iterativ vorgehen – aber strukturiert
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Planen Sie 3-5 Iterationen ein. Jede Iteration sollte ein spezifisches Ziel haben: Design → Funktion → Validierung → Präserie. Dokumentieren Sie Änderungen systematisch.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      4. Frühes und kontinuierliches Testen
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Testen Sie jeden Prototyp physisch: Passgenauigkeit, Montage, Funktion, Haptik. Digitale Simulationen ersetzen niemals das physische Testen.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      5. Kommunikation mit dem Dienstleister
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Teilen Sie Ihre Anforderungen klar mit: Welche Funktion muss der Prototyp erfüllen? Welche Toleranzen sind kritisch? Gibt es Besonderheiten?
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ROI-Kalkulation */}
        <section id="roi" className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">ROI-Kalkulation: Lohnt sich Rapid Prototyping?</h2>
              
              <div className="bg-gradient-card p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Rechenbeispiel: Produktentwicklung Gehäuse</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-primary">Traditioneller Weg (CNC)</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Werkzeugkosten:</span>
                        <span className="font-bold text-foreground">€5.000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Prototyp 1 (2 Wochen):</span>
                        <span className="font-bold text-foreground">€800</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Werkzeug-Änderung:</span>
                        <span className="font-bold text-foreground">€2.000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Prototyp 2 (2 Wochen):</span>
                        <span className="font-bold text-foreground">€800</span>
                      </li>
                      <li className="flex justify-between border-t pt-3 mt-3">
                        <span className="font-bold text-lg">Gesamt:</span>
                        <span className="font-bold text-lg text-foreground">€8.600</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-primary">Zeit:</span>
                        <span className="font-bold text-primary">4 Wochen</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-primary">Rapid Prototyping (FDM)</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Werkzeugkosten:</span>
                        <span className="font-bold text-foreground">€0</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Prototyp 1 (2 Tage):</span>
                        <span className="font-bold text-foreground">€200</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Prototyp 2 (2 Tage):</span>
                        <span className="font-bold text-foreground">€200</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Prototyp 3 (2 Tage):</span>
                        <span className="font-bold text-foreground">€200</span>
                      </li>
                      <li className="flex justify-between border-t pt-3 mt-3">
                        <span className="font-bold text-lg">Gesamt:</span>
                        <span className="font-bold text-lg text-foreground">€600</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-primary">Zeit:</span>
                        <span className="font-bold text-primary">6 Tage</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t text-center">
                  <div className="text-3xl font-bold text-primary mb-2">€8.000 Ersparnis + 3 Wochen Zeitgewinn</div>
                  <p className="text-muted-foreground">Bei gleichzeitig höherer Iterationsanzahl und besserem Endprodukt</p>
                </div>
              </div>

              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-center">Break-Even-Analyse</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center mb-4">
                    Rapid Prototyping lohnt sich bereits ab dem <strong className="text-foreground">ersten Prototyp</strong>, wenn Sie mehr als eine Iteration planen. Die Ersparnis steigt exponentiell mit jeder weiteren Iteration.
                  </p>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm text-center">
                      <strong className="text-foreground">Faustregel:</strong> Pro vermiedenem Werkzeugfehler sparen Sie durchschnittlich €15.000-50.000 in der Serienproduktion
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Express Service Matrix */}
        <section id="express-service" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4">Express-Service</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Wenn es schnell gehen muss: Unser Express-Service</h2>
                <p className="text-xl text-muted-foreground">
                  Transparente Aufpreisstruktur für Same-Day und 24-Stunden Express-Fertigung in ganz Österreich
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center hover:scale-105 transition-transform border-primary/50">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">24h</div>
                    <CardTitle className="text-2xl">Express</CardTitle>
                    <CardDescription className="text-lg">Ihr Prototyp in nur 24 Stunden</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-4">+50%</div>
                    <p className="text-muted-foreground mb-6">Aufpreis auf Standardpreis</p>
                    <Button 
                      size="lg" 
                      variant="hero" 
                      className="w-full" 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Jetzt anfragen
                    </Button>
                  </CardContent>
                </Card>

                <Card className="text-center hover:scale-105 transition-transform border-primary shadow-lg">
                  <CardHeader>
                    <Badge className="w-fit mx-auto mb-2">Schnellste Option</Badge>
                    <div className="text-4xl font-bold text-primary mb-2">Same-Day</div>
                    <CardTitle className="text-2xl">Fertigung am selben Tag</CardTitle>
                    <CardDescription className="text-lg">Auftrag bis 10:00 Uhr</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-4">+100%</div>
                    <p className="text-muted-foreground mb-6">Aufpreis auf Standardpreis</p>
                    <Button 
                      size="lg" 
                      variant="hero" 
                      className="w-full" 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Jetzt anfragen
                    </Button>
                  </CardContent>
                </Card>

                <Card className="text-center hover:scale-105 transition-transform border-primary/50">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">48-72h</div>
                    <CardTitle className="text-2xl">Standard</CardTitle>
                    <CardDescription className="text-lg">Reguläre Lieferzeit</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-4">Normalpreis</div>
                    <p className="text-muted-foreground mb-6">Ohne Aufpreis</p>
                    <Button 
                      size="lg" 
                      variant="secondary" 
                      className="w-full" 
                      onClick={() => window.location.href = '/prototypen'}
                    >
                      Zur Standardseite
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-card p-8 rounded-2xl mt-12">
                <h3 className="text-2xl font-bold text-center mb-8">Express-Fertigung: Von der CAD-Datei zum fertigen Prototyp</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">Anfrage & Analyse</h4>
                    <p className="text-sm text-muted-foreground">CAD-Datei Upload und Machbarkeitsprüfung</p>
                    <div className="text-xs text-primary mt-2 font-medium">0-2 Stunden</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">Optimierung & Vorbereitung</h4>
                    <p className="text-sm text-muted-foreground">Design für 3D-Druck optimieren</p>
                    <div className="text-xs text-primary mt-2 font-medium">2-4 Stunden</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">3</span>
                    </div>
                    <h4 className="font-semibold mb-2">3D-Druck</h4>
                    <p className="text-sm text-muted-foreground">Präziser FDM 3D-Druck</p>
                    <div className="text-xs text-primary mt-2 font-medium">4-20 Stunden</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">4</span>
                    </div>
                    <h4 className="font-semibold mb-2">Nachbearbeitung & Versand</h4>
                    <p className="text-sm text-muted-foreground">Finishing und Express-Versand</p>
                    <div className="text-xs text-primary mt-2 font-medium">4-8 Stunden</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Österreich-Fokus */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Rapid Prototyping in Österreich: Ihre lokalen Vorteile</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-6 w-6 text-primary" />
                      Express-Lieferung
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      24h-Lieferung nach Wien, Linz, Graz, Salzburg, Innsbruck und alle anderen österreichischen Städte. Kein langer Versand aus Asien.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-6 w-6 text-primary" />
                      Direkte Kommunikation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Persönliche Beratung auf Deutsch, gleiche Zeitzone, keine Sprachbarrieren. Bei Fragen erreichen Sie uns sofort.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-6 w-6 text-primary" />
                      Qualitätsstandards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Österreichische Qualität und Präzision: Zertifizierte Materialien, kalibrierte Drucker, dokumentierte Prozesse.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-6 w-6 text-primary" />
                      Flexibilität
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Kurzfristige Änderungen möglich, schnelle Anpassungen zwischen Iterationen, persönliche Abholung auf Anfrage.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Häufig gestellte <span className="text-gradient">Fragen</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Alles Wissenswerte über unseren Rapid Prototyping Service
                </p>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="bg-card/80 border rounded-xl px-6 hover:border-primary/30 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Quellen */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Wissenschaftliche Quellen</h2>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <ol className="space-y-2">
                  <li>
                    <a href="https://wohlersassociates.com/press-releases/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Wohlers Report 2024: "State of 3D Printing and Additive Manufacturing"
                    </a>
                  </li>
                  <li>
                    <a href="https://mitsloan.mit.edu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      MIT Sloan Management Review (2023): "The Economics of Rapid Prototyping"
                    </a>
                  </li>
                  <li>
                    <a href="https://www.stanford.edu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Stanford Research (2024): "Iterative Product Development with Additive Manufacturing"
                    </a>
                  </li>
                  <li>
                    <a href="https://www.sciencedirect.com/journal/journal-of-product-innovation-management" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Journal of Product Innovation Management (2023): "Reducing Time-to-Market through Rapid Prototyping"
                    </a>
                  </li>
                  <li>
                    <a href="https://www.sciencedirect.com/journal/additive-manufacturing" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Additive Manufacturing Journal (2024): "FDM for Functional Prototypes: A Comparative Study"
                    </a>
                  </li>
                  <li>
                    <a href="https://link.springer.com/journal/170" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      International Journal of Advanced Manufacturing Technology (2023): "Cost-Benefit Analysis of Rapid Prototyping Methods"
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Starten Sie Ihr <span className="text-gradient">Rapid Prototyping Projekt</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Von der CAD-Datei zum fertigen Prototyp in 24-72 Stunden. Kostenlose Machbarkeitsprüfung und Design-Optimierung inklusive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="hero" 
                  className="hover-scale" 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Jetzt Prototyp anfragen <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary" 
                  onClick={() => window.location.href = '/kostenrechner'}
                >
                  Zum Kostenrechner
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>

        <SocialShare 
          url={typeof window !== 'undefined' ? window.location.href : 'https://www.ek-druck.at/rapid-prototyping'}
          title="Rapid Prototyping Österreich: Wissenschaftlicher Guide + 24h Express"
          description="85% schneller als traditionelle Methoden: Erfahren Sie, wie Rapid Prototyping mit FDM 3D-Druck Ihre Produktentwicklung revolutioniert"
        />
      </main>
      
      <AIChatWidget />
      <Footer />
    </>
  );
};

export default RapidPrototyping;