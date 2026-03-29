import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import AIChatWidget from "@/components/AIChatWidget";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import FAQSection from "@/components/landing/FAQSection";
import RelatedPages from "@/components/landing/RelatedPages";
import AllRegionsLinks from "@/components/landing/AllRegionsLinks";
import KeywordRichContent from "@/components/landing/KeywordRichContent";
import CTASection from "@/components/landing/CTASection";
import Breadcrumbs from "@/components/landing/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Box, Zap, CheckCircle, ArrowRight, Palette, Home, Layers, Cpu, Ruler, Star, MapPin, Package, Clock } from "lucide-react";

const faqs = [
  {
    question: "Was ist FDM 3D-Druck und wie funktioniert er?",
    answer: "FDM steht für Fused Deposition Modeling – das am weitesten verbreitete 3D-Druckverfahren. Ein thermoplastisches Filament wird erhitzt, durch eine Düse extrudiert und Schicht für Schicht zu einem 3D-Objekt aufgebaut. FDM ist ideal für Architekturmodelle, Dekorationsobjekte, Messemodelle und Prototypen."
  },
  {
    question: "Wie genau ist FDM 3D-Druck für Modellbau?",
    answer: "Unsere FDM-Drucker erreichen Schichtauflösungen bis 0,1mm und Maßgenauigkeiten von ±0,2mm. Für Architekturmodelle im Maßstab 1:100 bis 1:500 ist das mehr als ausreichend. Feine Details wie Fensterzargen, Geländer oder Fassadenstrukturen werden präzise abgebildet."
  },
  {
    question: "Welche Maximalgröße ist beim FDM-Druck möglich?",
    answer: "Unser Druckbett ermöglicht Objekte bis 30×30×40cm in einem Stück. Größere Modelle – etwa für Städtebaumodelle, Messeblickfänger oder Architekturmodelle ab 1:50 – werden modular gefertigt und nahtlos zusammengefügt. Maximalgrößen bis 2m+ sind so realisierbar."
  },
  {
    question: "Welche Materialien eignen sich für Architekturmodelle?",
    answer: "PLA ist das Standardmaterial für Architekturmodelle: günstig, detailreich, in 20+ Farben verfügbar und gut lackierbar. Für besondere Optiken empfehlen wir Weiß-PLA (klassisches Architekturmodell), Transparentes PETG (Verglasung) oder Holz-Filament (Naturmaterialien-Optik)."
  },
  {
    question: "Was kostet FDM 3D-Druck für Dekorationsobjekte?",
    answer: "Kleine Dekorationsobjekte starten ab ca. €15–30. Mittelgroße Stücke (20–30cm) liegen typischerweise bei €50–150. Große Objekte und komplexe Formen auf Anfrage. Faktoren sind: Größe, Druckzeit, Material und Infill-Dichte. Senden Sie uns Ihre Datei für ein kostenloses Angebot."
  },
  {
    question: "Wie nachhaltig ist FDM 3D-Druck?",
    answer: "FDM mit PLA-Filament ist eine der nachhaltigeren Fertigungsoptionen: PLA ist biologisch abbaubar (aus Maisstärke), es entsteht kein Materialabfall durch subtraktive Verfahren, und lokale Fertigung in Österreich reduziert Transportwege. Wir verwenden europäisches Filament für kurze Lieferketten."
  },
  {
    question: "Kann ich FDM-Objekte nachbearbeiten oder lackieren?",
    answer: "Ja. PLA- und ASA-Objekte lassen sich gut schleifen, grundieren und lackieren. Für glatte Oberflächen empfehlen wir Schleifen (Körnung 120→240→400) und Kunststoffgrundierung. Wir bieten Nachbearbeitung auf Anfrage an. PETG ist weniger gut lackierbar – hier ist Einbrennlack nötig."
  }
];

const keywordContent = {
  title: "FDM 3D-Druck für Modellbau & Dekoration in Österreich",
  intro: "FDM (Fused Deposition Modeling) ist das vielseitigste und wirtschaftlichste 3D-Druckverfahren für Architekturmodelle, Dekorationsobjekte, Messemodelle und künstlerische Objekte. Als Spezialist in Oberösterreich beliefern wir Architekten, Innenarchitekten, Eventplaner und Künstler aus Wien bis Bregenz.",
  blocks: [
    {
      title: "FDM vs. andere 3D-Druckverfahren",
      content: "Im Vergleich zu SLA (Resin) bietet FDM größere Bauräume, günstigere Materialkosten und robustere Teile. Gegenüber SLS (Pulver) ist FDM kostengünstiger für Einzelstücke und Kleinserien. Für Architekturmodelle, Dekorationsobjekte und Messepräsentationen ist FDM die erste Wahl."
    },
    {
      title: "Materialvielfalt: Weit mehr als Standard-Plastik",
      content: "Modern FDM-Filamente sind weit mehr als einfaches Plastik: Holz-Filament für natürliche Maserung, Marmor-Look für elegante Steinoptik, Metallic-Filamente für industrielle Ästhetik, transparentes PETG für Lichteffekte. Jedes Material hat eigene Druckparameter – unsere Erfahrung garantiert optimale Ergebnisse."
    },
    {
      title: "Nachhaltigkeit durch additive Fertigung",
      content: "Additiver Aufbau bedeutet: kein Materialverschnitt. Im Gegensatz zu CNC-Fräsen, wo bis zu 90% des Rohmaterials wegfällt, verwendet FDM-Druck nur das Material, das im Objekt steckt. PLA aus nachwachsenden Rohstoffen und lokale Fertigung in Österreich machen unseren Service besonders nachhaltig."
    },
    {
      title: "Von Gunskirchen in die ganze Welt",
      content: "Unser Standort in Gunskirchen, Oberösterreich, ermöglicht Expresslieferungen in ganz Österreich innerhalb von 24h und nach Deutschland in 48h. Für internationale Projekte arbeiten wir mit zuverlässigen Versandpartnern. Kurze Kommunikationswege auf Deutsch und persönlicher Service sind unser Vorteil."
    }
  ]
};

const FdmDruck = () => {
  return (
    <>
      <SEOHead 
        title="FDM 3D-Druck Verfahren erklärt | Vergleich SLA vs SLS [2026]"
        description="FDM 3D-Druck: Wie funktioniert es? ✓ FDM vs SLA vs SLS Vergleich ✓ Materialien PLA, PETG, ABS ✓ Ab €15 pro Objekt. Nachhaltig aus Österreich → Jetzt beraten lassen"
        keywords="fdm 3d-druck, 3d druckverfahren vergleich, fdm verfahren, 3d druck verfahren, fdm vs sla, 3d-druck modellbau, fdm 3d-druck österreich"
        path="/fdm-3d-druck"
        breadcrumbs={[
          {name: "Home", url: "/"},
          {name: "FDM 3D-Druck", url: "/fdm-3d-druck"}
        ]}
        preloadResources={[
          {href: "/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png", as: "image", type: "image/png"}
        ]}
      />
      <ServiceSchema 
        serviceName="FDM 3D-Druck für Modellbau & Dekoration"
        description="Professioneller FDM 3D-Druck Service für Anschauungsmodelle, Architekturmodelle, Dekorationsobjekte und Kunstgegenstände in Österreich."
        serviceType="Service"
        offers={{
          price: "15.00",
          priceCurrency: "EUR",
          description: "FDM 3D-Druck ab €15, abhängig von Größe und Material"
        }}
      />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "FDM 3D-Druck", url: "/fdm-3d-druck"}
      ]} />
      
      <Navigation />
      <Breadcrumbs items={[{ name: "Services", url: "#" }, { name: "FDM 3D-Druck", url: "/fdm-3d-druck" }]} />
      
      <main className="pt-20 bg-background min-h-screen">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-8 hover-scale">
                <Box className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground animate-fade-in">
                FDM 3D-Druck
                <span className="block text-2xl lg:text-3xl mt-2 text-primary font-normal">für Modellbau, Dekoration & Kunst</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
                Präzise Architekturmodelle, hochwertige Dekorationsobjekte und individuelle Kunstgegenstände 
                aus nachhaltigen Materialien – gefertigt in Oberösterreich.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero" className="hover-scale animate-fade-in" asChild>
                  <Link to="/kontakt">Anfrage stellen <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="hover-scale animate-fade-in" asChild>
                  <Link to="/ratgeber/verfahrens-vergleich">FDM vs. SLA vs. SLS</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <LegalDisclaimer />
            </div>
          </div>
        </section>

        {/* Was ist FDM? */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Was ist FDM 3D-Druck?</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Fused Deposition Modeling (FDM) ist ein vielseitiges 3D-Druckverfahren, 
                  ideal für Anschauungsmodelle, Dekorationen und künstlerische Objekte.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-2xl font-bold mb-6">So funktioniert FDM 3D-Druck</h3>
                  <div className="space-y-4">
                    {[
                      { step: "1", title: "Material-Extrusion", desc: "Thermoplastisches Filament wird erhitzt und durch eine Düse extrudiert." },
                      { step: "2", title: "Schicht für Schicht", desc: "Das Material wird präzise Schicht für Schicht aufgetragen und verbindet sich." },
                      { step: "3", title: "Fertiges Objekt", desc: "Nach dem Abkühlen entstehen hochwertige, detailreiche 3D-Objekte – bereit zum Einsatz." }
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-4">
                        <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                          <div className="w-6 h-6 bg-primary rounded text-primary-foreground flex items-center justify-center text-sm font-bold">{item.step}</div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{item.title}</h4>
                          <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-card p-8 rounded-2xl">
                  <div className="text-center">
                    <Box className="h-24 w-24 text-primary mx-auto mb-6" />
                    <h4 className="text-xl font-bold mb-4">Hochpräzise FDM-Drucker</h4>
                    <p className="text-muted-foreground mb-6">
                      Unsere professionellen FDM 3D-Drucker erreichen Schichtauflösungen bis 0,1mm 
                      für perfekte Oberflächenqualität bei Modellen und Dekorationen.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-background/50 p-3 rounded-lg">
                        <div className="font-semibold">Min. Schichthöhe</div>
                        <div className="text-primary">0,1 mm</div>
                      </div>
                      <div className="bg-background/50 p-3 rounded-lg">
                        <div className="font-semibold">Max. Objektgröße</div>
                        <div className="text-primary">30×30×40 cm</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Anwendungsbereiche */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Unsere Anwendungsbereiche</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  FDM 3D-Druck für visuelle und dekorative Anwendungen
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <Home className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Architekturmodelle</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Maßstabsgetreue Architekturmodelle für Präsentationen, Wettbewerbe und Visualisierungen.
                    </p>
                    <Link to="/architekturmodelle" className="text-primary text-sm font-medium hover:underline mt-3 inline-block">
                      Mehr erfahren →
                    </Link>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Dekorationsobjekte</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Individuelle Dekorationen für Wohnräume, Messen, Events und Schaufenster.
                    </p>
                    <Link to="/einzelanfertigungen" className="text-primary text-sm font-medium hover:underline mt-3 inline-block">
                      Mehr erfahren →
                    </Link>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Kunstgegenstände</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Skulpturen, Kunstinstallationen und einzigartige Objekte für Künstler und Galerien.
                    </p>
                    <Link to="/kunstobjekte" className="text-primary text-sm font-medium hover:underline mt-3 inline-block">
                      Mehr erfahren →
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FDM Materialien */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Materialien für Modelle & Dekoration</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Hochwertige Filamente für visuelle und dekorative Anwendungen
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl">PLA & PLA+</CardTitle>
                    <CardDescription>Ideal für Modelle und Dekorationen</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Biologisch abbaubar</li>
                      <li>• Hohe Detailgenauigkeit</li>
                      <li>• Ideal für Architekturmodelle</li>
                      <li>• Über 20 Farben verfügbar</li>
                      <li>• Matt oder glänzend</li>
                    </ul>
                    <Badge className="mt-4">Bestseller</Badge>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl">PETG</CardTitle>
                    <CardDescription>Transparent und wetterfest</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Transparent möglich</li>
                      <li>• UV-beständig</li>
                      <li>• Für Außendekorationen</li>
                      <li>• Schlagzäh</li>
                      <li>• Hochglanz-Optik</li>
                    </ul>
                    <Badge className="mt-4" variant="secondary">Vielseitig</Badge>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl">Spezialfilamente</CardTitle>
                    <CardDescription>Besondere Optik & Haptik</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Holz-Look</li>
                      <li>• Marmor-Optik</li>
                      <li>• Seidenmatt</li>
                      <li>• Glow-in-the-dark</li>
                      <li>• Metallic-Effekte</li>
                    </ul>
                    <Badge className="mt-4" variant="outline">Premium</Badge>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center mt-8">
                <Button asChild variant="outline">
                  <Link to="/3d-druck-materialien">Alle Materialien im Detail <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Verfahrensvergleich Tabelle ───────────────────────────── */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">FDM vs. SLA vs. SLS – der Vergleich</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Welches Verfahren ist für Ihr Anschauungsmodell das richtige?</p>
              </div>
              <div className="max-w-4xl mx-auto overflow-x-auto rounded-2xl border border-border shadow-md">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="p-4 text-left font-semibold">Merkmal</th>
                      <th className="p-4 text-center font-semibold">FDM ✓ Wir</th>
                      <th className="p-4 text-center font-semibold text-primary-foreground/70">SLA (Resin)</th>
                      <th className="p-4 text-center font-semibold text-primary-foreground/70">SLS (Pulver)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Baugröße", "Bis 2m+ modular", "Bis 30cm", "Bis 40cm"],
                      ["Materialkosten", "€15–150", "€50–300+", "€100–500+"],
                      ["Materialvielfalt", "Sehr hoch (PLA, PETG, Holz, Marmor…)", "Mittel (Resin)", "Gering (PA12, PA11)"],
                      ["Auflösung", "0,1–0,3mm Schichthöhe", "0,025–0,1mm", "0,1mm"],
                      ["Nachbearbeitung", "Lackierbar, schleifbar", "Aufwändig, giftig", "Sandstrahlen nötig"],
                      ["Lieferzeit", "24–48h Express", "3–7 Tage", "5–10 Tage"],
                      ["Nachhaltigkeit", "PLA biologisch abbaubar", "Resin-Entsorgung problematisch", "Pulverreste aufwändig"],
                      ["Ideal für", "Architektur-, Messemodelle, Kunst", "Schmuck, Zahntechnik", "Komplexe Funktionsteile"],
                    ].map(([feat, fdm, sla, sls], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                        <td className="p-4 font-medium text-foreground">{feat}</td>
                        <td className="p-4 text-center text-primary font-medium">{fdm}</td>
                        <td className="p-4 text-center text-muted-foreground">{sla}</td>
                        <td className="p-4 text-center text-muted-foreground">{sls}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Für Anschauungsmodelle, Messeexponate und Architekturmodelle ist FDM die wirtschaftlichste Wahl.{" "}
                <Link to="/ratgeber/verfahrens-vergleich" className="text-primary hover:underline">Detaillierter Verfahrensvergleich →</Link>
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Einsatzbereiche mit Verlinkung ────────────────────────── */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="slide-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">FDM 3D-Druck für Ihre Branche</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Architekten, Messebauer, Künstler und Unternehmen nutzen FDM für ihre Anschauungsmodelle</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  { icon: Home, title: "Architekturmodelle", desc: "Maßstabsgetreue Architektur- und Stadtmodelle für Wettbewerbe, Investorenpräsentationen und Genehmigungsverfahren. Maßstäbe 1:50 bis 1:500. CAD-Export aus ArchiCAD, Revit und Rhino direkt verarbeitbar.", link: "/architekturmodelle", badge: "1:50 – 1:500" },
                  { icon: Layers, title: "Messemodelle", desc: "XXL-Blickfänger für Messestände, Produktnachbildungen und Standdekorationen. Express in 24h für kurzfristige Messetermine. Objekte bis 2m+ durch modulare Fertigung.", link: "/messemodelle", badge: "Express 24h" },
                  { icon: Palette, title: "Kunstobjekte", desc: "Skulpturen, Installationen und Designobjekte mit Holz-Optik, Marmor-Look oder Metallic-Finish. Vom Konzeptmodell bis zur Galerie-Skulptur – grenzenlose Formfreiheit.", link: "/kunstobjekte", badge: "Grenzenlos" }
                ].map((area, i) => (
                  <Card key={i} className="group hover:shadow-lg hover:border-primary/40 transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <area.icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">{area.badge}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{area.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{area.desc}</p>
                      <Link to={area.link} className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1">
                        Mehr erfahren <ArrowRight className="w-3 h-3" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Keyword Rich Content ──────────────────────────────────── */}
        <KeywordRichContent
          title={keywordContent.title}
          intro={keywordContent.intro}
          blocks={keywordContent.blocks}
        />

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <FAQSection
          faqs={faqs}
          title="Häufige Fragen zu FDM 3D-Druck"
          subtitle="Technische Antworten für Architekten, Designer und Kreative"
          schemaId="fdm-3d-druck"
        />

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <CTASection
          headline="FDM-Druck anfragen – Angebot in 6 Stunden"
          subline="Senden Sie uns Ihre Datei oder beschreiben Sie Ihr Projekt für ein Architektur-, Messe- oder Kunstobjekt. Kostenlose Beratung und verbindliches Angebot."
          ctaLabel="Jetzt anfragen"
          secondaryLabel="Verfahren vergleichen"
          secondaryHref="/ratgeber/verfahrens-vergleich"
          urgencyText="⚡ Express 24h · PLA biologisch abbaubar · Made in Austria"
          legalNote="Ausschließlich Anschauungsmodelle zu Präsentationszwecken – keine Funktionsteile, keine Ersatzteile."
        />

        <RelatedPages currentPage="/fdm-3d-druck" title="Weitere Services" />

        <AllRegionsLinks currentSlug="" type="messe" />

      </main>

      <AIChatWidget />
      <Footer />
    </>
  );
};

export default FdmDruck;
