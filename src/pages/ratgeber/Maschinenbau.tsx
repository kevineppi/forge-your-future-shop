import { Cog, CheckCircle, TrendingUp, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQSchema from "@/components/FAQSchema";
import AnimatedSection from "@/components/AnimatedSection";
import AIChatWidget from "@/components/AIChatWidget";

const Maschinenbau = () => {
  const applications = [
    {
      title: "Funktionsprototypen",
      description: "Validierung von Designs vor der Serienfertigung",
      benefits: [
        "Funktionstest unter realen Bedingungen",
        "Iterative Optimierung möglich",
        "Kostenreduktion um bis zu 75% vs. CNC",
        "Lieferzeit: 2-5 Tage statt 2-4 Wochen"
      ]
    },
    {
      title: "Ersatzteile & Legacy-Komponenten",
      description: "Produktion nicht mehr verfügbarer Bauteile",
      benefits: [
        "Keine Mindestbestellmengen nötig",
        "Reverse Engineering möglich",
        "Lagerhaltung minimieren",
        "On-Demand Produktion"
      ]
    },
    {
      title: "Betriebsmittel & Vorrichtungen",
      description: "Werkzeuge und Halterungen für die Produktion",
      benefits: [
        "Individuell angepasste Lösungen",
        "Schnelle Anpassung bei Produktwechsel",
        "Gewichtsreduktion möglich",
        "Kosteneinsparung bis 90%"
      ]
    },
    {
      title: "Endverbraucher-Komponenten",
      description: "Direkte Integration in Endprodukte",
      benefits: [
        "Komplexe Geometrien realisierbar",
        "Gewichtsoptimierung durch Gitterstrukturen",
        "Funktionsintegration möglich",
        "Individuelle Anpassungen"
      ]
    }
  ];

  const materials = [
    {
      name: "ASA",
      properties: "UV-beständig, schlagzäh, temperaturbeständig bis 95°C",
      applications: "Außenkomponenten, Gehäuse, Funktionsteile",
      standard: "Nach DIN EN ISO 527"
    },
    {
      name: "PETG",
      properties: "Chemikalienbeständig, transparent möglich, flexibel",
      applications: "Behälter, Schutzabdeckungen, Medizintechnik",
      standard: "FDA-konform verfügbar"
    },
    {
      name: "Nylon (PA12)",
      properties: "Hohe Festigkeit, Verschleißfest, selbstschmierend",
      applications: "Zahnräder, Lager, mechanische Bauteile",
      standard: "Zugfestigkeit 45-50 MPa"
    },
    {
      name: "Carbon-Composite",
      properties: "Extrem steif, leicht, hohe Festigkeit",
      applications: "Hochbelastete Strukturbauteile",
      standard: "E-Modul bis 6 GPa"
    }
  ];

  const qualityFactors = [
    {
      factor: "Schichtorientierung",
      impact: "Anisotropie: Z-Achse nur 50-70% der XY-Festigkeit",
      solution: "Belastungsrichtung bei Design berücksichtigen"
    },
    {
      factor: "Wandstärke",
      impact: "Minimum 1,2mm für strukturelle Festigkeit",
      solution: "2-3mm für optimale mechanische Eigenschaften"
    },
    {
      factor: "Toleranzen",
      impact: "FDM: ±0,2-0,5mm je nach Bauteilgröße",
      solution: "Nachbearbeitung für Passungen einplanen"
    },
    {
      factor: "Verzug",
      impact: "Thermische Kontraktion bei Abkühlung",
      solution: "Beheiztes Druckbett, Temperaturmanagement"
    }
  ];

  const costComparison = [
    {
      method: "CNC-Fräsen",
      prototype: "800-2.000€",
      smallSeries: "300-800€/Stk",
      leadTime: "2-4 Wochen"
    },
    {
      method: "Spritzguss",
      prototype: "15.000-50.000€ (Werkzeug)",
      smallSeries: "2-10€/Stk",
      leadTime: "8-12 Wochen"
    },
    {
      method: "FDM 3D-Druck",
      prototype: "50-300€",
      smallSeries: "40-250€/Stk",
      leadTime: "2-5 Tage"
    }
  ];

  const faqs = [
    {
      question: "Sind 3D-gedruckte Teile für den Maschinenbau ausreichend belastbar?",
      answer: "Ja, bei richtiger Materialwahl und Bauteilorientierung. Moderne FDM-Materialien wie PA12 oder Carbon-Composite erreichen Zugfestigkeiten von 45-80 MPa. Die Anisotropie (Richtungsabhängigkeit) muss jedoch berücksichtigt werden: Belastungen parallel zur Schichtrichtung können das Bauteil um 30-50% schwächen."
    },
    {
      question: "Welche Toleranzen sind mit FDM-Druck erreichbar?",
      answer: "FDM erreicht typischerweise ±0,2-0,5mm abhängig von Bauteilgröße, Material und Drucker-Kalibrierung. Für Passungen (z.B. ISO H7/h6) ist meist eine mechanische Nachbearbeitung notwendig. SLA/SLS erreichen höhere Genauigkeiten (±0,1mm)."
    },
    {
      question: "Wie verhält sich die Festigkeit zu traditionellen Fertigungsverfahren?",
      answer: "Bei optimaler Orientierung erreichen 3D-Drucke 80-90% der Festigkeit von spritzgegossenen Teilen. CNC-gefräste Teile aus Vollmaterial bleiben überlegen, aber 3D-Druck ermöglicht Gewichtsoptimierungen durch Gitterstrukturen, die das Festigkeit-Gewicht-Verhältnis verbessern."
    },
    {
      question: "Wann lohnt sich 3D-Druck wirtschaftlich im Maschinenbau?",
      answer: "Break-Even liegt typischerweise bei 50-500 Stück (abhängig von Komplexität). Für Prototypen und Stückzahlen <100 ist FDM fast immer günstiger. Bei >1000 Stück wird Spritzguss wirtschaftlicher. Ausnahme: Hochkomplexe Geometrien oder häufige Designänderungen."
    },
    {
      question: "Können 3D-gedruckte Teile in der Produktion dauerhaft eingesetzt werden?",
      answer: "Ja, aber mit Einschränkungen. UV-Exposition erfordert ASA/ABS. Temperaturen >80°C erfordern Spezial-Filamente. Verschleißteile haben begrenzte Lebensdauer. Für permanente Betriebsmittel sind PA12, PC oder Carbon-Composite empfohlen. Regelmäßige Inspektion notwendig."
    }
  ];

  return (
    <>
      <SEOHead
        title="3D-Druck im Maschinenbau: 70% Kosten sparen | Praxis-Guide"
        description="Maschinenbauer sparen €500-5.000 pro Projekt! Toleranzen, Belastbarkeit, Materialwahl für Funktionsteile. → Jetzt Ihr Teil anfragen"
        keywords="3d-druck maschinenbau, funktionsprototypen, ersatzteile 3d-druck, maschinenbau prototyping, technische bauteile"
        path="/ratgeber/maschinenbau"
        schemaType="article"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Ratgeber", url: "/ratgeber" },
          { name: "Maschinenbau", url: "/ratgeber/maschinenbau" }
        ]}
      />
      <FAQSchema 
        faqs={[
          {
            question: "Sind 3D-gedruckte Teile für den Maschinenbau ausreichend belastbar?",
            answer: "Ja, bei richtiger Materialwahl und Bauteilorientierung. Moderne FDM-Materialien wie PA12 oder Carbon-Composite erreichen Zugfestigkeiten von 45-80 MPa. Die Anisotropie (Richtungsabhängigkeit) muss jedoch berücksichtigt werden: Belastungen parallel zur Schichtrichtung können das Bauteil um 30-50% schwächen."
          },
          {
            question: "Welche Toleranzen sind mit FDM-Druck erreichbar?",
            answer: "FDM erreicht typischerweise ±0,2-0,5mm abhängig von Bauteilgröße, Material und Drucker-Kalibrierung. Für Passungen (z.B. ISO H7/h6) ist meist eine mechanische Nachbearbeitung notwendig. SLA/SLS erreichen höhere Genauigkeiten (±0,1mm)."
          },
          {
            question: "Wie verhält sich die Festigkeit zu traditionellen Fertigungsverfahren?",
            answer: "Bei optimaler Orientierung erreichen 3D-Drucke 80-90% der Festigkeit von spritzgegossenen Teilen. CNC-gefräste Teile aus Vollmaterial bleiben überlegen, aber 3D-Druck ermöglicht Gewichtsoptimierungen durch Gitterstrukturen, die das Festigkeit-Gewicht-Verhältnis verbessern."
          },
          {
            question: "Wann lohnt sich 3D-Druck wirtschaftlich im Maschinenbau?",
            answer: "Break-Even liegt typischerweise bei 50-500 Stück (abhängig von Komplexität). Für Prototypen und Stückzahlen <100 ist FDM fast immer günstiger. Bei >1000 Stück wird Spritzguss wirtschaftlicher. Ausnahme: Hochkomplexe Geometrien oder häufige Designänderungen."
          },
          {
            question: "Können 3D-gedruckte Teile in der Produktion dauerhaft eingesetzt werden?",
            answer: "Ja, aber mit Einschränkungen. UV-Exposition erfordert ASA/ABS. Temperaturen >80°C erfordern Spezial-Filamente. Verschleißteile haben begrenzte Lebensdauer. Für permanente Betriebsmittel sind PA12, PC oder Carbon-Composite empfohlen. Regelmäßige Inspektion notwendig."
          }
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Cog className="w-4 h-4" />
                <span className="text-sm font-medium">Technische Anwendungen</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                3D-Druck im Maschinenbau
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Wissenschaftlich fundierter Guide zu Funktionsprototypen, Ersatzteilen und Betriebsmitteln. Von der Materialwahl bis zur Qualitätssicherung.
              </p>
            </div>
          </div>
        </section>

        {/* Anwendungsbereiche */}
        <AnimatedSection className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Anwendungsbereiche im Maschinenbau</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {applications.map((app, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{app.title}</CardTitle>
                    <CardDescription>{app.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {app.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Materialien */}
        <AnimatedSection className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Materialien für Maschinenbau-Anwendungen</h2>
            <p className="text-muted-foreground mb-8">
              Alle Materialien nach relevanten DIN/ISO-Normen geprüft und dokumentiert
            </p>
            
            <div className="space-y-4">
              {materials.map((material, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{material.name}</CardTitle>
                    <CardDescription className="text-base">{material.properties}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-foreground">Typische Anwendungen:</span>
                        <p className="text-muted-foreground">{material.applications}</p>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Norm/Standard:</span>
                        <p className="text-muted-foreground">{material.standard}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Qualitätsfaktoren */}
        <AnimatedSection className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Kritische Qualitätsfaktoren</h2>
            <p className="text-muted-foreground mb-8">
              Wissenschaftliche Grundlagen für optimale mechanische Eigenschaften
            </p>
            
            <div className="space-y-4">
              {qualityFactors.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-2">{item.factor}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          <span className="font-medium text-foreground">Einfluss:</span> {item.impact}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Lösung:</span> {item.solution}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Kostenvergleich */}
        <AnimatedSection className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Wirtschaftlichkeitsvergleich</h2>
            <p className="text-muted-foreground mb-8">
              Realistische Kostenbeispiele basierend auf Bauteilen mittlerer Komplexität (150x100x50mm)
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-bold text-foreground">Verfahren</th>
                    <th className="text-left py-3 px-4 font-bold text-foreground">Prototyp</th>
                    <th className="text-left py-3 px-4 font-bold text-foreground">Kleinserie (10 Stk)</th>
                    <th className="text-left py-3 px-4 font-bold text-foreground">Lieferzeit</th>
                  </tr>
                </thead>
                <tbody>
                  {costComparison.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-3 px-4 font-medium text-foreground">{item.method}</td>
                      <td className="py-3 px-4 text-muted-foreground">{item.prototype}</td>
                      <td className="py-3 px-4 text-muted-foreground">{item.smallSeries}</td>
                      <td className="py-3 px-4 text-muted-foreground">{item.leadTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Card className="mt-6 bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-foreground">
                      <span className="font-bold">Break-Even Analyse:</span> FDM-Druck ist wirtschaftlich optimal bis ca. 100-500 Stück, abhängig von Bauteilkomplexität. Bei höheren Stückzahlen amortisiert sich Spritzguss-Werkzeug.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* FAQs */}
        <AnimatedSection className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Häufig gestellte Fragen</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20">
              <CardContent className="pt-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Maschinenbau-Projekt geplant?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Wir beraten Sie gerne zu Materialwahl, Bauteilorientierung und optimaler Fertigung für Ihre technischen Anwendungen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <a href="/#contact">Kostenlose Beratung</a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="/kostenrechner">Kosten berechnen</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        <AIChatWidget />
        <Footer />
      </div>
    </>
  );
};

export default Maschinenbau;