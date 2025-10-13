import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ReviewsWidget from "@/components/ReviewsWidget";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

const Niederoesterreich3DDruck = () => {
  useEffect(() => {
    document.title = "3D-Druck Niederösterreich | FDM 3D-Druck Service | ekdruck e.U.";
  }, []);

  return (
    <>
      <SEOHead 
        title="3D-Druck Niederösterreich | FDM 3D-Druck Service | ekdruck e.U."
        description="Professioneller 3D-Druck Service für Niederösterreich ✓ FDM 3D-Druck ✓ Rapid Prototyping ✓ Express Service ✓ Nachhaltige Materialien aus Österreich"
        keywords="3d-druck niederösterreich, 3d druck st pölten, fdm 3d-druck niederösterreich, rapid prototyping niederösterreich"
        path="/3d-druck-niederoesterreich"
        schemaType="service"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "3D-Druck Niederösterreich", url: "/3d-druck-niederoesterreich"}
      ]} />
      <StructuredData type="service" />
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                3D-Druck Service Niederösterreich
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Professioneller FDM 3D-Druck für St. Pölten, Wiener Neustadt, Krems und ganz Niederösterreich. Schnelle Lieferung, nachhaltige Materialien aus Österreich.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Jetzt Angebot anfordern <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/kostenrechner">Kosten berechnen</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Unsere Services für Niederösterreich</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">FDM 3D-Druck</h3>
                <p className="text-muted-foreground mb-4">
                  Hochwertige Bauteile mit modernster FDM-Technologie für Prototypen und Serienteile.
                </p>
                <Button variant="link" asChild className="p-0">
                  <a href="/fdm-3d-druck">Mehr erfahren →</a>
                </Button>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Express Service</h3>
                <p className="text-muted-foreground mb-4">
                  Schnelle Fertigung in 24-48h für dringende Projekte und Prototypen.
                </p>
                <Button variant="link" asChild className="p-0">
                  <a href="/rapid-prototyping">Mehr erfahren →</a>
                </Button>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Nachhaltige Materialien</h3>
                <p className="text-muted-foreground mb-4">
                  Hochwertige Filamente aus österreichischer Produktion für umweltbewussten 3D-Druck.
                </p>
                <Button variant="link" asChild className="p-0">
                  <a href="/3d-druck-materialien">Mehr erfahren →</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Deep Dive Section */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Professioneller <span className="text-gradient">FDM 3D-Druck</span> für Niederösterreich
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
              Modernste Technologie trifft auf österreichische Qualität – Ihr 3D-Druck Partner in Niederösterreich.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Was ist FDM 3D-Druck?</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  FDM (Fused Deposition Modeling) ist das führende Verfahren im <strong className="text-primary">3D-Druck</strong> und 
                  bildet die Grundlage unseres Services in Niederösterreich. Bei diesem additiven Fertigungsverfahren wird thermoplastisches 
                  Material schichtweise aufgetragen, um präzise dreidimensionale Objekte zu erstellen.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Als professioneller <strong className="text-primary">3D-Druck Dienstleister</strong> für Niederösterreich setzen wir 
                  auf modernste FDM-Technologie mit Schichtauflösungen bis zu 0,1mm. Diese Präzision ermöglicht die Herstellung 
                  komplexer Geometrien, die mit traditionellen Fertigungsmethoden nur schwer oder gar nicht realisierbar wären.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ob für <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Rapid Prototyping</a>, 
                  <a href="/einzelanfertigungen" className="text-primary hover:underline font-semibold"> individuelle Einzelanfertigungen</a> oder 
                  <a href="/serienfertigung" className="text-primary hover:underline font-semibold"> Kleinserien</a> – FDM 3D-Druck 
                  bietet maximale Flexibilität für Ihre Projekte in Niederösterreich.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Vorteile für Niederösterreich Unternehmen</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Kosteneffizienz</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Keine teuren Werkzeuge oder Formen notwendig. Ideal für Prototypen und Kleinserien – 
                        deutlich günstiger als traditionelle Fertigungsverfahren.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Schnelle Iteration</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Von der Idee zum fertigen Prototyp in 24-48 Stunden. Perfekt für agile Entwicklungsprozesse 
                        in Start-ups und Forschungseinrichtungen in Niederösterreich.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Designfreiheit</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Komplexe Geometrien, Hinterschneidungen und organische Formen – mit 3D-Druck sind 
                        nahezu keine Grenzen gesetzt.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Nachhaltigkeit</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Materialeffizienz durch additive Fertigung. Wir verwenden ausschließlich hochwertige 
                        Filamente aus österreichischer Produktion – Made in Austria für Niederösterreich.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-card rounded-xl border">
                <div className="text-4xl font-bold text-primary mb-2">0,1mm</div>
                <p className="text-sm text-muted-foreground">Minimale Schichtauflösung</p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border">
                <div className="text-4xl font-bold text-primary mb-2">24-48h</div>
                <p className="text-sm text-muted-foreground">Express-Lieferung nach St. Pölten</p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Österreichische Materialien</p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border">
                <div className="text-4xl font-bold text-primary mb-2">350mm³</div>
                <p className="text-sm text-muted-foreground">Max. Druckvolumen</p>
              </div>
            </div>
          </div>
        </section>

        {/* City Links */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-8 text-center">3D-Druck Service in Niederösterreich</h2>
            <p className="text-center text-muted-foreground mb-8">
              Wir liefern schnell und zuverlässig in alle niederösterreichischen Städte
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild>
                <a href="/3d-druck-st-poelten">3D-Druck St. Pölten</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Materials Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Materialien für Ihr Projekt
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hochwertige Filamente aus österreichischer Produktion – Ab sofort verfügbar in Niederösterreich
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-xl border">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg">PLA</h3>
                  <span className="text-xs px-2 py-1 bg-green-500/10 text-green-500 rounded-full">Bio</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">Biokunststoff, nachhaltig & vielseitig</p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Umweltfreundlich</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Ideal für Prototypen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Präzise Details</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg">PETG</h3>
                  <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-500 rounded-full">Robust</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">Schlagfest & chemikalienbeständig</p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Hohe Festigkeit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Funktionale Bauteile</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Witterungsbeständig</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg">ABS</h3>
                  <span className="text-xs px-2 py-1 bg-orange-500/10 text-orange-500 rounded-full">Technisch</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">Hitzebeständig & stabil</p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Bis 100°C belastbar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Technische Teile</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Nachbearbeitbar</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg">PA12 Nylon</h3>
                  <span className="text-xs px-2 py-1 bg-purple-500/10 text-purple-500 rounded-full">Premium</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">Höchste Festigkeit & flexibel</p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Extrem belastbar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Anspruchsvoll</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Chemikalienresistent</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <a href="/3d-druck-materialien">Alle Materialien im Detail ansehen</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Warum ekdruck für Niederösterreich?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Schnelle Lieferung</h3>
                  <p className="text-muted-foreground">Express-Versand nach St. Pölten und ganz Niederösterreich</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Österreichische Qualität</h3>
                  <p className="text-muted-foreground">Hochwertige Materialien aus regionaler Produktion</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Individuelle Beratung</h3>
                  <p className="text-muted-foreground">Persönlicher Support für Ihr 3D-Druck-Projekt</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Faire Preise</h3>
                  <p className="text-muted-foreground">Transparente Kalkulation ohne versteckte Kosten</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Kundenstimmen aus Niederösterreich</h2>
            <ReviewsWidget />
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Jetzt 3D-Druck Service in Niederösterreich nutzen</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Kontaktieren Sie uns für ein kostenloses Angebot
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:+436641337778" className="flex items-center justify-center gap-2 text-lg hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
                +43 664 1337778
              </a>
              <a href="mailto:office@ek-druck.at" className="flex items-center justify-center gap-2 text-lg hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                office@ek-druck.at
              </a>
            </div>
            <Button size="lg" onClick={() => window.location.href = '/#contact'}>
              Kontaktformular
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Niederoesterreich3DDruck;