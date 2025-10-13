import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import StructuredData from "@/components/StructuredData";
import ReviewsWidget from "@/components/ReviewsWidget";
import { Button } from "@/components/ui/button";
import { Box, Clock, MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { useEffect } from "react";

const StPoelten3DDruck = () => {
  useEffect(() => {
    document.title = "3D Druck St. Pölten – Prototypen & Fertigung | ek-druck";
  }, []);

  return (
    <>
      <SEOHead 
        title="3D Druck St. Pölten – Prototypen & Fertigung | ek-druck"
        description="Professioneller 3D Druck in St. Pölten. FDM 3D-Druck Service für Niederösterreich – schnell, präzise & individuell. Jetzt unverbindlich anfragen!"
        keywords="3d-druck st pölten, 3d drucker st pölten, fdm druck st pölten, rapid prototyping niederösterreich, 3d-druck service st pölten"
        path="/3d-druck-st-poelten"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "3D-Druck St. Pölten", url: "/3d-druck-st-poelten"}
      ]} />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "ekdruck e.U. - 3D-Druck St. Pölten",
          "image": "https://www.ek-druck.at/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png",
          "@id": "https://www.ek-druck.at",
          "url": "https://www.ek-druck.at/3d-druck-st-poelten",
          "telephone": "+436765517197",
          "email": "office@ekdruck.at",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "St. Pölten",
            "addressRegion": "Niederösterreich",
            "addressCountry": "AT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.2083,
            "longitude": 15.6251
          },
          "areaServed": [
            { "@type": "City", "name": "St. Pölten" },
            { "@type": "State", "name": "Niederösterreich" }
          ],
          "priceRange": "€€"
        })}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Wie schnell erfolgt die Lieferung nach St. Pölten?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Express-Service innerhalb von 24-48 Stunden nach St. Pölten und Niederösterreich. Standard-Lieferungen dauern 2-3 Werktage."
              }
            }
          ]
        })}
      </script>
      
      <div className="min-h-screen">
        <Navigation />
        
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold">St. Pölten</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                3D-Druck Service in <span className="text-gradient">St. Pölten</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professioneller FDM 3D-Druck für St. Pölten und ganz Niederösterreich. Schnelle Lieferung, hochwertige Materialien und faire Preise.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Jetzt Angebot erhalten
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/kostenrechner">Kosten berechnen</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Unsere <span className="text-gradient">Services in St. Pölten</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="gradient-card p-6 rounded-xl">
                <Box className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">FDM 3D-Druck</h3>
                <p className="text-muted-foreground mb-4">
                  Professioneller FDM 3D-Druck für Prototypen und Fertigung in St. Pölten.
                </p>
                <a href="/fdm-3d-druck" className="text-primary hover:underline">Mehr erfahren →</a>
              </div>
              
              <div className="gradient-card p-6 rounded-xl">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Express Service</h3>
                <p className="text-muted-foreground mb-4">
                  24-48h Lieferung nach St. Pölten und Niederösterreich.
                </p>
                <a href="/rapid-prototyping" className="text-primary hover:underline">Mehr erfahren →</a>
              </div>
              
              <div className="gradient-card p-6 rounded-xl">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Premium Qualität</h3>
                <p className="text-muted-foreground mb-4">
                  Hochwertige Filamente aus österreichischer Produktion.
                </p>
                <a href="/3d-druck-materialien" className="text-primary hover:underline">Mehr erfahren →</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">
                Warum ekdruck für <span className="text-gradient">St. Pölten</span>?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Schnelle Lieferung nach NÖ</h3>
                    <p className="text-muted-foreground">Express-Versand innerhalb von 24-48h nach St. Pölten</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Österreichischer Anbieter</h3>
                    <p className="text-muted-foreground">Lokale Produktion aus Österreich</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Persönliche Beratung</h3>
                    <p className="text-muted-foreground">Kompetente Unterstützung bei Material- und Verfahrenswahl</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Transparente Preise</h3>
                    <p className="text-muted-foreground">Kostenrechner für sofortige Preisschätzung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Deep Dive Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Professioneller <span className="text-gradient">FDM 3D-Druck</span> für St. Pölten
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                Modernste Technologie trifft auf österreichische Qualität – Ihr 3D-Druck Partner in Niederösterreich.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Was ist FDM 3D-Druck?</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    FDM (Fused Deposition Modeling) ist das führende Verfahren im <strong className="text-primary">3D-Druck</strong> und 
                    bildet die Grundlage unseres Services in St. Pölten. Bei diesem additiven Fertigungsverfahren wird thermoplastisches 
                    Material schichtweise aufgetragen, um präzise dreidimensionale Objekte zu erstellen.
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Als professioneller <strong className="text-primary">3D-Druck Dienstleister</strong> in Niederösterreich setzen wir 
                    auf modernste FDM-Technologie mit Schichtauflösungen bis zu 0,1mm. Diese Präzision ermöglicht die Herstellung 
                    komplexer Geometrien, die mit traditionellen Fertigungsmethoden nur schwer oder gar nicht realisierbar wären.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Ob für <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Rapid Prototyping</a>, 
                    <a href="/einzelanfertigungen" className="text-primary hover:underline font-semibold"> individuelle Einzelanfertigungen</a> oder 
                    <a href="/serienfertigung" className="text-primary hover:underline font-semibold"> Kleinserien</a> – FDM 3D-Druck 
                    bietet maximale Flexibilität für Ihre Projekte in St. Pölten.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Vorteile für St. Pölten Unternehmen</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold mb-1">Kosteneffizienz</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Keine teuren Werkzeuge oder Formen notwendig. Ideal für Prototypen und Kleinserien – 
                          deutlich günstiger als traditionelle Fertigungsverfahren.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold mb-1">Schnelle Iteration</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Von der Idee zum fertigen Prototyp in 24-48 Stunden. Perfekt für agile Entwicklungsprozesse 
                          in Start-ups und Forschungseinrichtungen in Niederösterreich.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold mb-1">Designfreiheit</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Komplexe Geometrien, Hinterschneidungen und organische Formen – mit 3D-Druck sind 
                          nahezu keine Grenzen gesetzt.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold mb-1">Nachhaltigkeit</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Materialeffizienz durch additive Fertigung. Wir verwenden ausschließlich hochwertige 
                          Filamente aus österreichischer Produktion – Made in Austria für St. Pölten.
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
          </div>
        </section>

        {/* Materials Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  Materialien für Ihr Projekt
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Hochwertige Filamente aus österreichischer Produktion – Ab sofort verfügbar in St. Pölten
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
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Umweltfreundlich</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Ideal für Prototypen</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
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
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Hohe Festigkeit</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Funktionale Bauteile</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
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
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Bis 100°C belastbar</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Technische Teile</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
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
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Extrem belastbar</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Anspruchsvoll</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
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
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">
                <span className="text-gradient">Häufige Fragen</span>
              </h2>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Wie schnell liefern Sie nach St. Pölten?</h3>
                  <p className="text-muted-foreground">Express-Service 24-48h. Standard 2-3 Werktage.</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Welche Formate?</h3>
                  <p className="text-muted-foreground">STL, OBJ, STEP und weitere CAD-Formate.</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Kostenberechnung?</h3>
                  <p className="text-muted-foreground">Nach Material, Größe, Druckdauer. Kostenrechner verfügbar.</p>
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
                Starten Sie Ihr <span className="text-gradient">3D-Druck Projekt</span> in St. Pölten
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

        <Footer />
      </div>
    </>
  );
};

export default StPoelten3DDruck;