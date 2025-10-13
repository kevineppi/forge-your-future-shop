import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import StructuredData from "@/components/StructuredData";
import ReviewsWidget from "@/components/ReviewsWidget";
import { Button } from "@/components/ui/button";
import { Box, Clock, MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { useEffect } from "react";

const Salzburg3DDruck = () => {
  useEffect(() => {
    document.title = "3D Druck Salzburg – Prototypen & Fertigung | ek-druck";
  }, []);

  return (
    <>
      <SEOHead 
        title="3D Druck Salzburg – Prototypen & Fertigung | ek-druck"
        description="Professioneller 3D Druck in Salzburg. Prototypen, Einzelfertigung & Serienfertigung – schnell, präzise & individuell. Jetzt unverbindlich anfragen!"
        keywords="3d-druck salzburg, 3d drucker salzburg, fdm druck salzburg, rapid prototyping salzburg, 3d-druck service salzburg, prototypen salzburg"
        path="/3d-druck-salzburg"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "3D-Druck Salzburg", url: "/3d-druck-salzburg"}
      ]} />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "ekdruck e.U. - 3D-Druck Salzburg",
          "image": "https://www.ek-druck.at/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png",
          "@id": "https://www.ek-druck.at",
          "url": "https://www.ek-druck.at/3d-druck-salzburg",
          "telephone": "+436765517197",
          "email": "office@ekdruck.at",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Salzburg",
            "addressCountry": "AT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 47.8095,
            "longitude": 13.0550
          },
          "areaServed": [
            { "@type": "City", "name": "Salzburg" },
            { "@type": "State", "name": "Salzburg" }
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
              "name": "Liefern Sie auch nach Salzburg Stadt und Land?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, wir liefern schnell und zuverlässig nach Salzburg Stadt und in das gesamte Bundesland. Express-Service innerhalb von 24-48 Stunden verfügbar."
              }
            },
            {
              "@type": "Question",
              "name": "Welche 3D-Druck Materialien bieten Sie an?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Wir bieten PLA, PETG, ABS, TPU und Nylon aus österreichischer Produktion. Alle Materialien sind für verschiedene Anwendungen optimiert."
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
                <span className="text-primary font-semibold">Salzburg</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                3D-Druck Service in <span className="text-gradient">Salzburg</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professioneller FDM 3D-Druck Service für Salzburg Stadt und Land. Schnelle Lieferung, nachhaltige Materialien und faire Preise.
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
              Unsere <span className="text-gradient">Services in Salzburg</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="gradient-card p-6 rounded-xl">
                <Box className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">FDM 3D-Druck</h3>
                <p className="text-muted-foreground mb-4">
                  Hochwertiger FDM 3D-Druck für Prototypen, Modelle und Einzelteile in Salzburg.
                </p>
                <a href="/fdm-3d-druck" className="text-primary hover:underline">Mehr erfahren →</a>
              </div>
              
              <div className="gradient-card p-6 rounded-xl">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Express Service 24-48h</h3>
                <p className="text-muted-foreground mb-4">
                  Schnelle Lieferung nach Salzburg Stadt und in das gesamte Bundesland.
                </p>
                <a href="/rapid-prototyping" className="text-primary hover:underline">Mehr erfahren →</a>
              </div>
              
              <div className="gradient-card p-6 rounded-xl">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Nachhaltige Materialien</h3>
                <p className="text-muted-foreground mb-4">
                  Hochwertige österreichische Filamente für beste Druckqualität.
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
                Warum ekdruck für <span className="text-gradient">Salzburg</span>?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Schnelle Lieferung nach Salzburg</h3>
                    <p className="text-muted-foreground">Express-Versand innerhalb von 24-48h nach Salzburg Stadt und Land</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Österreichische Produktion</h3>
                    <p className="text-muted-foreground">Made in Austria - kurze Lieferwege und Top-Qualität</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Persönliche Beratung</h3>
                    <p className="text-muted-foreground">Kompetente Unterstützung bei der Materialauswahl und Verfahrenswahl</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Transparente Preisgestaltung</h3>
                    <p className="text-muted-foreground">Nutzen Sie unseren Online-Kostenrechner für sofortige Preisschätzung</p>
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
                Professioneller <span className="text-gradient">FDM 3D-Druck</span> für Salzburg
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                Modernste Technologie trifft auf österreichische Qualität – Ihr 3D-Druck Partner in Salzburg.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Was ist FDM 3D-Druck?</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    FDM (Fused Deposition Modeling) ist das führende Verfahren im <strong className="text-primary">3D-Druck</strong> und 
                    bildet die Grundlage unseres Services in Salzburg. Bei diesem additiven Fertigungsverfahren wird thermoplastisches 
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
                    bietet maximale Flexibilität für Ihre Projekte in Salzburg.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Vorteile für Salzburger Unternehmen</h3>
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
                          in Start-ups und Forschungseinrichtungen in Salzburg.
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
                          Filamente aus österreichischer Produktion – Made in Austria für Salzburg.
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
                  <p className="text-sm text-muted-foreground">Express-Lieferung nach Salzburg</p>
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

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">
                Anwendungsbereiche für <span className="text-gradient">3D-Druck in Salzburg</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🏭 Industrie</h3>
                  <p className="text-muted-foreground">Funktionale Prototypen für Salzburger Industriebetriebe</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🏗️ Architektur</h3>
                  <p className="text-muted-foreground">Architekturmodelle für Salzburger Planungsbüros</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🎓 Bildung</h3>
                  <p className="text-muted-foreground">Unterstützung für Universität Salzburg</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🎨 Design</h3>
                  <p className="text-muted-foreground">Individuelle Kunstobjekte</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Materials Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                <span className="text-gradient">Materialien</span> für Ihr Projekt in Salzburg
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                Wir setzen ausschließlich auf hochwertige Filamente aus österreichischer Produktion. 
                Nachhaltig, qualitativ und perfekt für Ihre Anforderungen.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-card p-6 rounded-2xl border-2 hover:border-primary/30 transition-all h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-bold text-2xl">PLA</h3>
                    <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-xs font-semibold">Bio</span>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Nachhaltiger Biokunststoff, ideal für Prototypen, Designmodelle und Visualisierungen. 100% biologisch abbaubar.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Umweltfreundlich</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Hohe Detailgenauigkeit</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-2xl border-2 hover:border-primary/30 transition-all h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-bold text-2xl">PETG</h3>
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold">Robust</span>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Schlagfest und chemikalienbeständig. Perfekt für funktionale Bauteile und Endverbrauchsteile mit hoher Belastung.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Hohe Festigkeit</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Witterungsbeständig</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-2xl border-2 hover:border-primary/30 transition-all h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-bold text-2xl">ABS</h3>
                    <span className="px-3 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-full text-xs font-semibold">Technisch</span>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Hitzebeständig bis 100°C. Ideal für technische Anwendungen, Industriekomponenten und Gehäuse.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Temperaturbeständig</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Industriequalität</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card p-6 rounded-2xl border-2 hover:border-primary/30 transition-all h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-bold text-2xl">PA12 Nylon</h3>
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-xs font-semibold">Premium</span>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Höchste Festigkeit und Flexibilität. Für anspruchsvolle mechanische Anwendungen und Sonderanfertigungen.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Extrem belastbar</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Flexibel & stark</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button variant="outline" size="lg" asChild>
                  <a href="/3d-druck-materialien" className="group">
                    Alle Materialien im Detail ansehen →
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">PA12 Nylon - Premium</h3>
                  <p className="text-muted-foreground mb-2">Höchste Festigkeit, flexibel, für anspruchsvolle Anwendungen</p>
                  <p className="text-sm text-primary">Auf Anfrage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">
                So einfach geht <span className="text-gradient">3D-Druck</span> in Salzburg
              </h2>
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Anfrage senden</h3>
                    <p className="text-muted-foreground">Senden Sie uns Ihre CAD-Datei oder nutzen Sie unseren Kostenrechner</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Angebot erhalten</h3>
                    <p className="text-muted-foreground">Innerhalb von 24 Stunden erhalten Sie ein detailliertes Angebot</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Produktion</h3>
                    <p className="text-muted-foreground">Nach Ihrer Freigabe starten wir sofort mit dem 3D-Druck</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">4</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Lieferung nach Salzburg</h3>
                    <p className="text-muted-foreground">Express-Versand innerhalb von 24-48h nach Salzburg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">
                Häufig gestellte <span className="text-gradient">Fragen</span>
              </h2>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Wie schnell erfolgt die Lieferung nach Salzburg?</h3>
                  <p className="text-muted-foreground">Mit unserem Express-Service liefern wir innerhalb von 24-48 Stunden nach Salzburg Stadt und Land. Standard-Lieferungen dauern 2-3 Werktage.</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Welche Dateiformate werden akzeptiert?</h3>
                  <p className="text-muted-foreground">Wir akzeptieren STL, OBJ, STEP, IGES und viele weitere gängige CAD-Formate.</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Wie werden die Kosten berechnet?</h3>
                  <p className="text-muted-foreground">Die Kosten hängen von Material, Größe, Komplexität und Druckdauer ab. Nutzen Sie unseren Online-Kostenrechner für eine sofortige Schätzung.</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Bieten Sie auch Nachbearbeitung an?</h3>
                  <p className="text-muted-foreground">Ja, wir bieten Schleifen, Lackieren, Glattieren und weitere Finishing-Optionen an.</p>
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
                Starten Sie Ihr <span className="text-gradient">3D-Druck Projekt</span> in Salzburg
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

export default Salzburg3DDruck;