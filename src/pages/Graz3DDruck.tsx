import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import StructuredData from "@/components/StructuredData";
import ReviewsWidget from "@/components/ReviewsWidget";
import { Button } from "@/components/ui/button";
import { Box, Clock, MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { useEffect } from "react";

const Graz3DDruck = () => {
  useEffect(() => {
    document.title = "3D Druck Graz – Prototypen & Fertigung | ek-druck";
  }, []);

  return (
    <>
      <SEOHead 
        title="3D Druck Graz – Prototypen & Fertigung | ek-druck"
        description="Professioneller 3D Druck in Graz. Prototypen, Einzelfertigung & Serienfertigung – schnell, präzise & individuell. Jetzt unverbindlich anfragen!"
        keywords="3d-druck graz, 3d drucker graz, fdm druck graz, rapid prototyping graz, 3d-druck steiermark, prototypen graz"
        path="/3d-druck-graz"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "3D-Druck Graz", url: "/3d-druck-graz"}
      ]} />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      
      {/* LocalBusiness Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "ekdruck e.U. - 3D-Druck Graz",
          "image": "https://www.ek-druck.at/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png",
          "@id": "https://www.ek-druck.at",
          "url": "https://www.ek-druck.at/3d-druck-graz",
          "telephone": "+436765517197",
          "email": "office@ekdruck.at",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Graz",
            "addressRegion": "Steiermark",
            "addressCountry": "AT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 47.0707,
            "longitude": 15.4395
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Graz"
            },
            {
              "@type": "State",
              "name": "Steiermark"
            }
          ],
          "priceRange": "€€"
        })}
      </script>
      
      {/* FAQPage Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Wie schnell kann ich mein 3D-Druck-Teil in Graz erhalten?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mit unserem Express-Service liefern wir innerhalb von 24 Stunden nach Graz. Standard-Lieferungen dauern 2-3 Werktage."
              }
            },
            {
              "@type": "Question",
              "name": "Welche Dateiformate werden akzeptiert?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Wir akzeptieren STL, OBJ, STEP und viele weitere gängige CAD-Formate."
              }
            },
            {
              "@type": "Question",
              "name": "Wie werden die Kosten für 3D-Druck in Graz berechnet?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Die Kosten hängen von Material, Größe, Komplexität und Druckdauer ab. Nutzen Sie unseren Online-Kostenrechner für eine sofortige Schätzung."
              }
            }
          ]
        })}
      </script>
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold">Graz & Steiermark</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                3D-Druck Service in <span className="text-gradient">Graz</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ihr lokaler Partner für professionellen FDM 3D-Druck in Graz. Schnelle Lieferung, nachhaltige österreichische Materialien und faire Preise.
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

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Unsere <span className="text-gradient">Services in Graz</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="gradient-card p-6 rounded-xl">
                <Box className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">FDM 3D-Druck</h3>
                <p className="text-muted-foreground mb-4">
                  Professioneller FDM 3D-Druck für Prototypen, Einzelteile und Kleinserien in Graz.
                </p>
                <a href="/fdm-3d-druck" className="text-primary hover:underline">Mehr erfahren →</a>
              </div>
              
              <div className="gradient-card p-6 rounded-xl">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Express Service 24h</h3>
                <p className="text-muted-foreground mb-4">
                  Benötigen Sie Ihr Teil schnell? Wir liefern innerhalb von 24 Stunden in ganz Graz.
                </p>
                <a href="/rapid-prototyping" className="text-primary hover:underline">Mehr erfahren →</a>
              </div>
              
              <div className="gradient-card p-6 rounded-xl">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Nachhaltige Materialien</h3>
                <p className="text-muted-foreground mb-4">
                  Wir verwenden ausschließlich hochwertige Filamente aus österreichischer Produktion.
                </p>
                <a href="/3d-druck-materialien" className="text-primary hover:underline">Mehr erfahren →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">
                Warum ekdruck für <span className="text-gradient">Graz</span>?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Schnelle Lieferung nach Graz</h3>
                    <p className="text-muted-foreground">Express-Versand innerhalb von 24h direkt zu Ihnen nach Graz</p>
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

        {/* Technology Deep Dive Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                Professioneller <span className="text-gradient">FDM 3D-Druck</span> für Graz
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                Modernste Technologie trifft auf österreichische Qualität – Ihr 3D-Druck Partner in der Steiermark.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Was ist FDM 3D-Druck?</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    FDM (Fused Deposition Modeling) ist das führende Verfahren im <strong className="text-primary">3D-Druck</strong> und 
                    bildet die Grundlage unseres Services in Graz. Bei diesem additiven Fertigungsverfahren wird thermoplastisches 
                    Material schichtweise aufgetragen, um präzise dreidimensionale Objekte zu erstellen.
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Als professioneller <strong className="text-primary">3D-Druck Dienstleister</strong> setzen wir 
                    auf modernste FDM-Technologie mit Schichtauflösungen bis zu 0,1mm. Diese Präzision ermöglicht die Herstellung 
                    komplexer Geometrien, die mit traditionellen Fertigungsmethoden nur schwer oder gar nicht realisierbar wären.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Ob für <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Rapid Prototyping</a>, 
                    <a href="/einzelanfertigungen" className="text-primary hover:underline font-semibold"> individuelle Einzelanfertigungen</a> oder 
                    <a href="/serienfertigung" className="text-primary hover:underline font-semibold"> Kleinserien</a> – FDM 3D-Druck 
                    bietet maximale Flexibilität für Ihre Projekte in Graz.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Vorteile für Grazer Unternehmen</h3>
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
                          in Start-ups und Forschungseinrichtungen in Graz.
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
                          Filamente aus österreichischer Produktion – Made in Austria für Graz.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Industry Stats/Facts */}
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-card rounded-xl border">
                  <div className="text-4xl font-bold text-primary mb-2">0,1mm</div>
                  <p className="text-sm text-muted-foreground">Minimale Schichtauflösung</p>
                </div>
                <div className="text-center p-6 bg-card rounded-xl border">
                  <div className="text-4xl font-bold text-primary mb-2">24h</div>
                  <p className="text-sm text-muted-foreground">Express-Lieferung nach Graz</p>
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

        {/* Applications Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">
                Anwendungsbereiche für <span className="text-gradient">3D-Druck in Graz</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🏭 Industrie & Maschinenbau</h3>
                  <p className="text-muted-foreground">Funktionale Prototypen, Ersatzteile, Vorrichtungen und Betriebsmittel für Grazer Industrieunternehmen</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🏗️ Architektur & Bau</h3>
                  <p className="text-muted-foreground">Architekturmodelle, Designstudien und Präsentationsmodelle für Grazer Architekten und Planer</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🎨 Design & Kunst</h3>
                  <p className="text-muted-foreground">Kunstobjekte, Designprototypen und individuelle Einzelstücke für Grazer Kreativschaffende</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🔬 Forschung & Entwicklung</h3>
                  <p className="text-muted-foreground">Rapid Prototyping für Universitäten, Forschungseinrichtungen und Start-ups in Graz</p>
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
                  Hochwertige Filamente aus österreichischer Produktion – Ab sofort verfügbar in Graz
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

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">
                So einfach geht <span className="text-gradient">3D-Druck in Graz</span>
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
                    <h3 className="font-bold text-lg mb-2">Lieferung nach Graz</h3>
                    <p className="text-muted-foreground">Express-Versand innerhalb von 24-48h direkt zu Ihnen nach Graz</p>
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
                Häufig gestellte <span className="text-gradient">Fragen</span> zum 3D-Druck in Graz
              </h2>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Wie schnell kann ich mein 3D-Druck-Teil in Graz erhalten?</h3>
                  <p className="text-muted-foreground">Mit unserem Express-Service liefern wir innerhalb von 24 Stunden nach Graz. Standard-Lieferungen dauern 2-3 Werktage.</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Welche Dateiformate werden akzeptiert?</h3>
                  <p className="text-muted-foreground">Wir akzeptieren STL, OBJ, STEP und viele weitere gängige CAD-Formate. Bei Fragen zu Ihrem Format kontaktieren Sie uns gerne.</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Wie werden die Kosten für 3D-Druck in Graz berechnet?</h3>
                  <p className="text-muted-foreground">Die Kosten hängen von Material, Größe, Komplexität und Druckdauer ab. Nutzen Sie unseren Online-Kostenrechner für eine sofortige Schätzung.</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Bieten Sie auch Nachbearbeitung an?</h3>
                  <p className="text-muted-foreground">Ja, wir bieten Schleifen, Lackieren und weitere Finishing-Optionen für Ihre 3D-gedruckten Teile in Graz an.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Widget */}
        <ReviewsWidget />

        {/* Contact CTA */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center gradient-card p-12 rounded-2xl">
              <h2 className="text-4xl font-bold mb-6">
                Starten Sie Ihr <span className="text-gradient">3D-Druck Projekt</span> in Graz
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

export default Graz3DDruck;
