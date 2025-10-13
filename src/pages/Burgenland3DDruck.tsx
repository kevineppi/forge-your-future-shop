import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ReviewsWidget from "@/components/ReviewsWidget";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

const Burgenland3DDruck = () => {
  useEffect(() => {
    document.title = "3D-Druck Burgenland | FDM 3D-Druck Service | ekdruck e.U.";
  }, []);

  return (
    <>
      <SEOHead 
        title="3D-Druck Burgenland | FDM 3D-Druck Service | ekdruck e.U."
        description="Professioneller 3D-Druck Service für Burgenland ✓ FDM 3D-Druck ✓ Rapid Prototyping ✓ Express Service ✓ Nachhaltige Materialien aus Österreich"
        keywords="3d-druck burgenland, 3d druck eisenstadt, fdm 3d-druck burgenland, rapid prototyping burgenland"
        path="/3d-druck-burgenland"
        schemaType="service"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "3D-Druck Burgenland", url: "/3d-druck-burgenland"}
      ]} />
      <StructuredData type="service" />
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                3D-Druck Service Burgenland
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Professioneller FDM 3D-Druck für Eisenstadt, Neusiedl am See, Oberwart und ganz Burgenland. Schnelle Lieferung, nachhaltige Materialien aus Österreich.
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
            <h2 className="text-3xl font-bold mb-12 text-center">Unsere Services für Burgenland</h2>
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
              Professioneller <span className="text-gradient">FDM 3D-Druck</span> für Burgenland
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
              Modernste Technologie trifft auf österreichische Qualität – Ihr 3D-Druck Partner für Burgenland.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Was ist FDM 3D-Druck?</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  FDM (Fused Deposition Modeling) ist das führende Verfahren im <strong className="text-primary">3D-Druck</strong> und 
                  bildet die Grundlage unseres Services in Burgenland. Bei diesem additiven Fertigungsverfahren wird thermoplastisches 
                  Material schichtweise aufgetragen, um präzise dreidimensionale Objekte zu erstellen.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Als professioneller <strong className="text-primary">3D-Druck Dienstleister</strong> für Burgenland setzen wir 
                  auf modernste FDM-Technologie mit Schichtauflösungen bis zu 0,1mm. Diese Präzision ermöglicht die Herstellung 
                  komplexer Geometrien, die mit traditionellen Fertigungsmethoden nur schwer oder gar nicht realisierbar wären.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ob für <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Rapid Prototyping</a>, 
                  <a href="/einzelanfertigungen" className="text-primary hover:underline font-semibold"> individuelle Einzelanfertigungen</a> oder 
                  <a href="/serienfertigung" className="text-primary hover:underline font-semibold"> Kleinserien</a> – FDM 3D-Druck 
                  bietet maximale Flexibilität für Ihre Projekte in Burgenland.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Vorteile für Burgenland Unternehmen</h3>
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
                        in Start-ups und Forschungseinrichtungen in Burgenland.
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
                        Filamente aus österreichischer Produktion – Made in Austria für Burgenland.
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
                <div className="text-4xl font-bold text-primary mb-2">24h</div>
                <p className="text-sm text-muted-foreground">Express-Lieferung nach Eisenstadt</p>
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

        {/* Why Choose Us */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Warum ekdruck für Burgenland?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Schnelle Lieferung</h3>
                  <p className="text-muted-foreground">Express-Versand nach Eisenstadt und ganz Burgenland</p>
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
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Kundenstimmen aus Burgenland</h2>
            <ReviewsWidget />
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-16 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Jetzt 3D-Druck Service in Burgenland nutzen</h2>
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

export default Burgenland3DDruck;