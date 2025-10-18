import { Building2, Layers, Ruler, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import AnimatedSection from "@/components/AnimatedSection";

const Architektur = () => {
  const applications = [
    {
      title: "Architekturmodelle 1:50 - 1:500",
      scale: "Optimal für Präsentationen",
      details: "Fassadendetails, Fenster, Balkone ab 0,4mm darstellbar",
      material: "PLA weiß/grau, PETG transparent"
    },
    {
      title: "Städtebauliche Modelle",
      scale: "1:500 bis 1:2000",
      details: "Gelände, Infrastruktur, Bebauungskontext",
      material: "PLA mehrfarbig, ASA für Außeneinsatz"
    },
    {
      title: "Fassadenstudien & Detailmodelle",
      scale: "1:20 bis 1:50",
      details: "Konstruktionsdetails, Materialmuster, haptische Muster",
      material: "Multi-Material möglich"
    },
    {
      title: "Konzeptmodelle & Massing Studies",
      scale: "Freie Skalierung",
      details: "Schnelle Iterationen, Formfindung",
      material: "PLA, schneller Druck"
    }
  ];

  const advantages = [
    {
      icon: Layers,
      title: "Komplexe Geometrien",
      description: "Organische Formen, Freiform-Fassaden und parametrische Designs ohne Aufpreis realisierbar"
    },
    {
      icon: Ruler,
      title: "Maßstabsgenauigkeit",
      description: "±0,2mm Genauigkeit ermöglicht präzise Skalierung von CAD-Modellen direkt aus BIM-Software"
    },
    {
      icon: Lightbulb,
      title: "Schnelle Iteration",
      description: "Design-Änderungen in 24-48h umsetzbar vs. 1-2 Wochen bei traditionellem Modellbau"
    },
    {
      icon: Building2,
      title: "Kosteneffizienz",
      description: "60-80% Kosteneinsparung vs. handgefertigte Modelle bei gleichwertiger Qualität"
    }
  ];

  const workflowSteps = [
    {
      step: "1. CAD/BIM Export",
      details: "Revit, ArchiCAD, Rhino → STL/OBJ Export",
      tips: "Wandstärken mind. 1,2mm, Details zusammenfassen unter 0,5mm"
    },
    {
      step: "2. Modell-Optimierung",
      details: "Skalierung, Wandstärken prüfen, Stützen planen",
      tips: "Überhänge >45° benötigen Support-Material"
    },
    {
      step: "3. Druck & Nachbearbeitung",
      details: "Schichthöhe 0,1-0,2mm für Details",
      tips: "Schleifen, Grundierung für präsentationsreife Oberflächen"
    },
    {
      step: "4. Finishing",
      details: "Bemalen, Beschriften, Montage",
      tips: "Acrylfarben haften optimal auf PLA"
    }
  ];

  const caseStudies = [
    {
      project: "Wohnbau-Projekt Wien",
      scale: "1:100",
      size: "400x300x150mm",
      duration: "3 Tage",
      cost: "380€",
      details: "Inkl. transparente Fenster (PETG), Geländemodellierung, 4 Gebäude"
    },
    {
      project: "Städtebau-Modell Linz",
      scale: "1:500",
      size: "800x600x80mm",
      duration: "5 Tage",
      cost: "720€",
      details: "42 Gebäude, Straßennetz, Grünflächen, modularer Aufbau"
    },
    {
      project: "Fassadenstudie Bürokomplex",
      scale: "1:20",
      size: "600x200x400mm",
      duration: "4 Tage",
      cost: "580€",
      details: "Detaillierte Lamellen-Fassade, 0,4mm Wandstärke"
    }
  ];

  const faqs = [
    {
      question: "Welcher Maßstab ist für Architekturmodelle optimal?",
      answer: "1:100 ist ideal für Gebäudemodelle mit guter Balance zwischen Details und Gesamtgröße. 1:200 für größere Komplexe, 1:50 für Detailstudien. FDM-Druck kann Details ab 0,4mm darstellen, was bei 1:100 echten 4cm entspricht."
    },
    {
      question: "Können transparente Fenster gedruckt werden?",
      answer: "Ja, mit PETG-Filament sind transluzente bis semi-transparente Fenster möglich. Für perfekte Transparenz empfehlen wir SLA-Druck oder nachträgliches Einsetzen von Acrylglas."
    },
    {
      question: "Wie lange hält ein 3D-gedrucktes Architekturmodell?",
      answer: "PLA-Modelle sind bei Innenraumlagerung praktisch unbegrenzt haltbar. UV-Licht kann PLA langfristig verspröden, daher ASA für Außen-/Schaufenster-Modelle verwenden. Mechanisch robust bei sachgemäßer Handhabung."
    },
    {
      question: "Können BIM-Modelle direkt gedruckt werden?",
      answer: "Ja, aus Revit, ArchiCAD, Rhino etc. kann direkt exportiert werden. Wichtig: Wandstärken müssen min. 1,2mm betragen, kleine Details (<0,5mm) müssen vereinfacht werden. Wir bieten Optimierung als Service an."
    },
    {
      question: "Was kostet ein Architekturmodell im Vergleich zum traditionellen Modellbau?",
      answer: "3D-Druck kostet typischerweise 60-80% weniger. Beispiel: 1:100 Modell eines Wohnhauses kostet handgefertigt 800-1500€, gedruckt 200-400€. Bei komplexen Geometrien oder Iterationen ist die Ersparnis noch größer."
    }
  ];

  return (
    <>
      <SEOHead
        title="3D-Druck für Architektur: Präzise Architekturmodelle | ekdruck"
        description="Professionelle Architekturmodelle mit 3D-Druck ✓ Maßstab 1:50-1:500 ✓ BIM-Integration ✓ Schnelle Iteration ✓ 60-80% Kostenersparnis ✓ Österreich"
        keywords="architekturmodell 3d-druck, architektur modellbau, städtebaumodell, bim modell druck"
        path="/ratgeber/architektur"
        schemaType="article"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Ratgeber", url: "/ratgeber" },
          { name: "Architektur", url: "/ratgeber/architektur" }
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-medium">Architektur & Design</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                3D-Druck für Architekturmodelle
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Von BIM-Modellen zu präzisen physischen Architekturmodellen. Schneller, günstiger und flexibler als traditioneller Modellbau.
              </p>
            </div>
          </div>
        </section>

        <AnimatedSection className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Anwendungsbereiche</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {applications.map((app, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{app.title}</CardTitle>
                    <CardDescription className="text-base">{app.scale}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p><span className="font-medium">Details:</span> {app.details}</p>
                    <p><span className="font-medium">Material:</span> {app.material}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Vorteile von 3D-Druck</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {advantages.map((adv, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <adv.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">{adv.title}</h3>
                    <p className="text-muted-foreground text-sm">{adv.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Workflow: Von CAD zum Modell</h2>
            <div className="space-y-4">
              {workflowSteps.map((step, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{step.step}</CardTitle>
                    <CardDescription>{step.details}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">💡 <span className="font-medium">Tipp:</span> {step.tips}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Praxisbeispiele aus Österreich</h2>
            <div className="space-y-6">
              {caseStudies.map((cs, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{cs.project}</CardTitle>
                    <CardDescription className="text-base">{cs.details}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="font-medium block">Maßstab</span>
                        <span className="text-muted-foreground">{cs.scale}</span>
                      </div>
                      <div>
                        <span className="font-medium block">Größe</span>
                        <span className="text-muted-foreground">{cs.size}</span>
                      </div>
                      <div>
                        <span className="font-medium block">Dauer</span>
                        <span className="text-muted-foreground">{cs.duration}</span>
                      </div>
                      <div>
                        <span className="font-medium block">Kosten</span>
                        <span className="text-muted-foreground">{cs.cost}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Häufig gestellte Fragen</h2>
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

        <AnimatedSection className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20">
              <CardContent className="pt-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Architekturmodell geplant?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Wir beraten Sie zu Maßstab, Materialwahl und optimaler Umsetzung Ihres BIM-Modells.
                </p>
                <Button asChild size="lg">
                  <a href="/#contact">Kostenlose Beratung</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        <Footer />
      </div>
    </>
  );
};

export default Architektur;