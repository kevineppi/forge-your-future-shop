import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import StructuredData from "@/components/StructuredData";
import ReviewsWidget from "@/components/ReviewsWidget";
import { Button } from "@/components/ui/button";
import { Box, Clock, MapPin, Phone, Mail, CheckCircle, Zap, Shield, Leaf, TrendingUp, Factory, Building2, Palette, FlaskConical } from "lucide-react";
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";

const Linz3DDruck = () => {
  useEffect(() => {
    document.title = "3D Druck Linz – Prototypen & Fertigung | ek-druck";
  }, []);

  return (
    <>
      <SEOHead 
        title="3D Druck Linz – Prototypen & Fertigung | ek-druck"
        description="Professioneller 3D Druck in Linz. Prototypen, Einzelfertigung & Serienfertigung – schnell, präzise & individuell. Jetzt unverbindlich anfragen!"
        keywords="3d-druck linz, 3d drucker linz, fdm druck linz, rapid prototyping linz, 3d-druck oberösterreich, prototypen linz"
        path="/3d-druck-linz"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "3D-Druck Linz", url: "/3d-druck-linz"}
      ]} />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "ekdruck e.U. - 3D-Druck Linz",
          "image": "https://www.ek-druck.at/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png",
          "@id": "https://www.ek-druck.at",
          "url": "https://www.ek-druck.at/3d-druck-linz",
          "telephone": "+436765517197",
          "email": "office@ekdruck.at",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Linz",
            "addressRegion": "Oberösterreich",
            "addressCountry": "AT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.3069,
            "longitude": 14.2858
          },
          "areaServed": [
            { "@type": "City", "name": "Linz" },
            { "@type": "State", "name": "Oberösterreich" }
          ],
          "priceRange": "€€",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "47"
          }
        })}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Wie schnell kann ich mein 3D-Druck-Teil in Linz erhalten?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mit unserem Express-Service liefern wir innerhalb von 24 Stunden nach Linz. Standard-Lieferungen dauern 2-3 Werktage."
              }
            },
            {
              "@type": "Question",
              "name": "Welche Dateiformate werden akzeptiert?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Wir akzeptieren STL, OBJ, STEP und viele weitere gängige CAD-Formate. Bei Fragen zu Ihrem Format kontaktieren Sie uns gerne."
              }
            },
            {
              "@type": "Question",
              "name": "Wie werden die Kosten für 3D-Druck in Linz berechnet?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Die Kosten hängen von Material, Größe, Komplexität und Druckdauer ab. Nutzen Sie unseren Online-Kostenrechner für eine sofortige Schätzung."
              }
            },
            {
              "@type": "Question",
              "name": "Bieten Sie auch Nachbearbeitung an?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, wir bieten Schleifen, Lackieren und weitere Finishing-Optionen für Ihre 3D-gedruckten Teile in Linz an."
              }
            }
          ]
        })}
      </script>
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section - Enhanced */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <AnimatedSection className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Linz & Oberösterreich</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                3D-Druck Service in <span className="text-gradient">Linz</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Ihr lokaler Partner für professionellen FDM 3D-Druck in Linz. Schnelle Lieferung innerhalb 24h, 
                nachhaltige österreichische Materialien und persönliche Beratung für Ihr Projekt.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <Button size="lg" className="group" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Jetzt Angebot erhalten
                  <TrendingUp className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/kostenrechner">Kosten berechnen</a>
                </Button>
              </div>
              
              {/* USPs */}
              <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">24h Express</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <Leaf className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Nachhaltig</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Made in Austria</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Top Qualität</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Section - Enhanced */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Unsere <span className="text-gradient">Services in Linz</span>
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Von schnellem Prototyping bis zur Serienfertigung – wir bieten professionelle 3D-Druck-Lösungen für Ihr Projekt in Linz.
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <AnimatedSection delay={0.1}>
                <div className="group gradient-card p-8 rounded-2xl hover-scale border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Box className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">FDM 3D-Druck</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Professioneller FDM 3D-Druck für Prototypen, Einzelteile und Kleinserien. 
                    Schichtauflösung bis 0,1mm für höchste Präzision in Linz.
                  </p>
                  <a href="/fdm-3d-druck" className="text-primary hover:underline font-semibold inline-flex items-center gap-2 group">
                    Mehr erfahren 
                    <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <div className="group gradient-card p-8 rounded-2xl hover-scale border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Express Service 24h</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Benötigen Sie Ihr Teil schnell? Wir liefern innerhalb von 24 Stunden in ganz Linz. 
                    Perfekt für dringende Projekte und Deadlines.
                  </p>
                  <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold inline-flex items-center gap-2 group">
                    Mehr erfahren 
                    <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3}>
                <div className="group gradient-card p-8 rounded-2xl hover-scale border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Leaf className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Nachhaltige Materialien</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Wir verwenden ausschließlich hochwertige Filamente aus österreichischer Produktion. 
                    PLA, PETG, ABS, Nylon – alle aus nachhaltiger Herstellung.
                  </p>
                  <a href="/3d-druck-materialien" className="text-primary hover:underline font-semibold inline-flex items-center gap-2 group">
                    Mehr erfahren 
                    <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Why ekdruck Section - Enhanced */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  Warum ekdruck für <span className="text-gradient">3D-Druck in Linz</span>?
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Als österreichischer 3D-Druck-Spezialist aus Oberösterreich bieten wir Ihnen lokale Expertise, 
                  schnelle Lieferzeiten und persönliche Betreuung für Ihr Projekt in Linz.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-6">
                <AnimatedSection delay={0.1}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Schnelle Lieferung nach Linz</h3>
                      <p className="text-muted-foreground">Express-Versand innerhalb von 24h direkt zu Ihnen nach Linz. Standard-Lieferung in 2-3 Werktagen österreichweit.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Lokaler österreichischer Anbieter</h3>
                      <p className="text-muted-foreground">Keine langen Lieferwege aus dem Ausland. Direkt aus Oberösterreich mit kurzen Kommunikationswegen und persönlichem Kontakt.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.3}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Persönliche Beratung auf Deutsch</h3>
                      <p className="text-muted-foreground">Kompetente Unterstützung bei der Material- und Verfahrenswahl. Wir optimieren Ihre CAD-Dateien für beste Druckergebnisse.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.4}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Faire Preise & transparente Kosten</h3>
                      <p className="text-muted-foreground">Nutzen Sie unseren Kostenrechner für eine sofortige Preisschätzung. Keine versteckten Kosten, faire Konditionen.</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Deep Dive Section - NEW */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  Professioneller <span className="text-gradient">FDM 3D-Druck</span> für Linz
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Modernste Technologie trifft auf österreichische Qualität – Ihr 3D-Druck Partner in Oberösterreich.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <AnimatedSection delay={0.1}>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">Was ist FDM 3D-Druck?</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      FDM (Fused Deposition Modeling) ist das führende Verfahren im <strong className="text-primary">3D-Druck</strong> und 
                      bildet die Grundlage unseres Services in Linz. Bei diesem additiven Fertigungsverfahren wird thermoplastisches 
                      Material schichtweise aufgetragen, um präzise dreidimensionale Objekte zu erstellen.
                    </p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Als professioneller <strong className="text-primary">3D-Druck Dienstleister</strong> in Oberösterreich setzen wir 
                      auf modernste FDM-Technologie mit Schichtauflösungen bis zu 0,1mm. Diese Präzision ermöglicht die Herstellung 
                      komplexer Geometrien, die mit traditionellen Fertigungsmethoden nur schwer oder gar nicht realisierbar wären.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Ob für <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Rapid Prototyping</a>, 
                      <a href="/einzelanfertigungen" className="text-primary hover:underline font-semibold"> individuelle Einzelanfertigungen</a> oder 
                      <a href="/serienfertigung" className="text-primary hover:underline font-semibold"> Kleinserien</a> – FDM 3D-Druck 
                      bietet maximale Flexibilität für Ihre Projekte in Linz.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">Vorteile für Linzer Unternehmen</h3>
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
                            in Start-ups und Forschungseinrichtungen in Linz.
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
                            Filamente aus österreichischer Produktion – Made in Austria für Linz.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
              
              {/* Industry Stats/Facts */}
              <AnimatedSection delay={0.3}>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-card rounded-xl border">
                    <div className="text-4xl font-bold text-primary mb-2">0,1mm</div>
                    <p className="text-sm text-muted-foreground">Minimale Schichtauflösung</p>
                  </div>
                  <div className="text-center p-6 bg-card rounded-xl border">
                    <div className="text-4xl font-bold text-primary mb-2">24h</div>
                    <p className="text-sm text-muted-foreground">Express-Lieferung nach Linz</p>
                  </div>
                  <div className="text-center p-6 bg-card rounded-xl border">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <p className="text-sm text-muted-foreground">Österreichische Materialien</p>
                  </div>
                  <div className="text-center p-6 bg-card rounded-xl border">
                    <div className="text-4xl font-bold text-primary mb-2">300mm³</div>
                    <p className="text-sm text-muted-foreground">Max. Druckvolumen</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Linz-Specific Industry Section - NEW */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  3D-Druck für die <span className="text-gradient">Linzer Wirtschaft</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Linz ist ein bedeutender Industriestandort in Österreich. Als lokaler 3D-Druck Dienstleister 
                  unterstützen wir die innovative Wirtschaft der Landeshauptstadt.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <AnimatedSection delay={0.1}>
                  <div className="bg-card p-8 rounded-2xl border-2 hover:border-primary/30 transition-all">
                    <Factory className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Industrie & Produktion</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Linz ist Heimat führender Industrieunternehmen wie voestalpine, Engel und Rosenbauer. 
                      Unser <strong className="text-primary">3D-Druck Service</strong> unterstützt diese Unternehmen mit:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Funktionsprototypen für neue Produktentwicklungen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Ersatzteile und Komponenten on-demand</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Vorrichtungen und Betriebsmittel für die Produktion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Kleinserien für Spezialprojekte</span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="bg-card p-8 rounded-2xl border-2 hover:border-primary/30 transition-all">
                    <FlaskConical className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Forschung & Innovation</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Mit der Johannes Kepler Universität und der FH Oberösterreich ist Linz ein bedeutender 
                      Forschungsstandort. Wir bieten spezialisierte Lösungen für:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Wissenschaftliche Modelle und Anschauungsobjekte</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Forschungsprototypen mit kurzen Iterationszyklen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Spezialanfertigungen für Laborausstattung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Bildungsmaterialien für Lehre und Ausbildung</span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
              
              <AnimatedSection delay={0.3}>
                <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-8 md:p-12 rounded-2xl border">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Start-up Hotspot Linz</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    Die Linzer Start-up-Szene wächst rasant. Tech2b, das Softwarepark Hagenberg und zahlreiche 
                    Innovationszentren machen Oberösterreich zum idealen Standort für Gründer. Als lokaler 
                    <strong className="text-primary"> 3D-Druck Dienstleister</strong> bieten wir Start-ups besondere Vorteile:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold mb-1">Schnelle Prototypen</h4>
                        <p className="text-sm text-muted-foreground">MVP in 48 Stunden – perfekt für Pitch und Investorengespräche</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold mb-1">Skalierbare Produktion</h4>
                        <p className="text-sm text-muted-foreground">Von Einzelstück bis Kleinserie – wir wachsen mit Ihnen</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold mb-1">Persönliche Beratung</h4>
                        <p className="text-sm text-muted-foreground">Wir helfen bei Design-Optimierung und Materialwahl</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  Anwendungsbereiche für <span className="text-gradient">3D-Druck in Linz</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Von der Industrie über Architektur bis zur Forschung – 3D-Druck bietet vielseitige Möglichkeiten 
                  für Unternehmen und Privatpersonen in Linz und Oberösterreich.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnimatedSection delay={0.1}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Factory className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Industrie & Maschinenbau</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Funktionale Prototypen, Ersatzteile, Vorrichtungen und Betriebsmittel für Linzer Industrieunternehmen. 
                      Optimiert für voestalpine, Engel, Rosenbauer und weitere.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Building2 className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Architektur & Bau</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Architekturmodelle, Designstudien und Präsentationsmodelle für Linzer Architekten und Planer. 
                      Perfekt für Kundenpräsentationen und Wettbewerbe.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.3}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Palette className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Design & Kunst</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Kunstobjekte, Designprototypen und individuelle Einzelstücke für Linzer Kreativschaffende. 
                      Von der Idee zum fertigen Objekt.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.4}>
                  <div className="bg-card p-6 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <FlaskConical className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">Forschung & Entwicklung</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Rapid Prototyping für JKU, FH Oberösterreich, Forschungseinrichtungen und Start-ups in Linz. 
                      Schnelle Iteration für Innovation.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Materials Section - Enhanced */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  <span className="text-gradient">Materialien</span> für Ihr Projekt in Linz
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Wir setzen ausschließlich auf hochwertige Filamente aus österreichischer Produktion. 
                  Nachhaltig, qualitativ und perfekt für Ihre Anforderungen.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnimatedSection delay={0.1}>
                  <div className="bg-card p-6 rounded-2xl border-2 hover:border-primary/30 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-xl">PLA</h3>
                      <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-xs font-semibold">Bio</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Nachhaltiger Biokunststoff, ideal für Prototypen, Designmodelle und Visualisierungen. 
                      100% biologisch abbaubar.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Umweltfreundlich</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Hohe Detailgenauigkeit</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="bg-card p-6 rounded-2xl border-2 hover:border-primary/30 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-xl">PETG</h3>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold">Robust</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Schlagfest und chemikalienbeständig. Perfekt für funktionale Bauteile und Endverbrauchsteile mit hoher Belastung.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Hohe Festigkeit</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Witterungsbeständig</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.3}>
                  <div className="bg-card p-6 rounded-2xl border-2 hover:border-primary/30 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-xl">ABS</h3>
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-full text-xs font-semibold">Technisch</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Hitzebeständig bis 100°C. Ideal für technische Anwendungen, Industriekomponenten und Gehäuse.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Temperaturbeständig</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Industriequalität</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.4}>
                  <div className="bg-card p-6 rounded-2xl border-2 hover:border-primary/30 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-xl">PA12 Nylon</h3>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-xs font-semibold">Premium</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Höchste Festigkeit und Flexibilität. Für anspruchsvolle mechanische Anwendungen und Sonderanfertigungen.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Extrem belastbar</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>Flexibel & stark</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
              
              <div className="text-center mt-10">
                <a href="/3d-druck-materialien" className="inline-flex items-center gap-2 text-primary hover:underline font-semibold text-lg">
                  Alle Materialien im Detail ansehen
                  <TrendingUp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section - Enhanced */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  So einfach geht <span className="text-gradient">3D-Druck in Linz</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Von der ersten Anfrage bis zur Lieferung – unser transparenter Prozess macht 3D-Druck einfach und planbar.
                </p>
              </AnimatedSection>
              
              <div className="relative">
                {/* Connection Line */}
                <div className="hidden md:block absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary"></div>
                
                <div className="space-y-8">
                  <AnimatedSection delay={0.1}>
                    <div className="flex gap-6 items-start relative">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/30 relative z-10">
                        1
                      </div>
                      <div className="flex-1 bg-card p-6 rounded-xl border-2 hover:border-primary/30 transition-all">
                        <h3 className="font-bold text-xl mb-3">Anfrage senden</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Senden Sie uns Ihre CAD-Datei (STL, OBJ, STEP, etc.) per E-Mail oder nutzen Sie unseren 
                          Online-Kostenrechner für eine erste Schätzung. Wir prüfen Ihre Datei auf Druckbarkeit und 
                          optimieren sie bei Bedarf kostenlos.
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                  
                  <AnimatedSection delay={0.2}>
                    <div className="flex gap-6 items-start relative">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/30 relative z-10">
                        2
                      </div>
                      <div className="flex-1 bg-card p-6 rounded-xl border-2 hover:border-primary/30 transition-all">
                        <h3 className="font-bold text-xl mb-3">Angebot & Beratung</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Innerhalb von 24 Stunden erhalten Sie ein detailliertes Angebot mit Preis, Lieferzeit und 
                          Materialempfehlung. Bei komplexen Projekten beraten wir Sie persönlich zur optimalen Umsetzung.
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                  
                  <AnimatedSection delay={0.3}>
                    <div className="flex gap-6 items-start relative">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/30 relative z-10">
                        3
                      </div>
                      <div className="flex-1 bg-card p-6 rounded-xl border-2 hover:border-primary/30 transition-all">
                        <h3 className="font-bold text-xl mb-3">Produktion startet</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Nach Ihrer Freigabe starten wir sofort mit dem 3D-Druck auf unseren modernsten FDM-Druckern. 
                          Sie werden über den Fortschritt informiert und können bei größeren Projekten Zwischenstände anfordern.
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                  
                  <AnimatedSection delay={0.4}>
                    <div className="flex gap-6 items-start relative">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/30 relative z-10">
                        4
                      </div>
                      <div className="flex-1 bg-card p-6 rounded-xl border-2 hover:border-primary/30 transition-all">
                        <h3 className="font-bold text-xl mb-3">Qualitätsprüfung & Lieferung</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Jedes Teil wird sorgfältig geprüft und nachbearbeitet. Express-Versand innerhalb von 24-48h direkt 
                          zu Ihnen nach Linz. Standard-Lieferung österreichweit in 2-3 Werktagen. Tracking-Nummer inklusive.
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality & Sustainability Section - NEW */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  Qualität & <span className="text-gradient">Nachhaltigkeit</span> aus Österreich
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Als österreichischer 3D-Druck Dienstleister setzen wir auf höchste Qualitätsstandards 
                  und nachhaltige Produktion – für Linz und ganz Oberösterreich.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <AnimatedSection delay={0.1}>
                  <div className="bg-card p-8 rounded-2xl border-2 hover:border-primary/30 transition-all h-full">
                    <Shield className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Qualitätssicherung</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Jedes <strong className="text-primary">3D-gedruckte Teil</strong> durchläuft bei uns eine mehrstufige 
                      Qualitätskontrolle, bevor es zu Ihnen nach Linz geliefert wird:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Design-Analyse:</strong> Prüfung und Optimierung Ihrer CAD-Datei vor dem Druck</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Material-Kontrolle:</strong> Nur zertifizierte Filamente aus österreichischer Produktion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Druck-Überwachung:</strong> Kontinuierliche Kontrolle während des gesamten Druckprozesses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Finish-Kontrolle:</strong> Visuelle und dimensionale Prüfung des fertigen Bauteils</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Dokumentation:</strong> Lückenlose Nachverfolgbarkeit aller Produktionsschritte</span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="bg-card p-8 rounded-2xl border-2 hover:border-primary/30 transition-all h-full">
                    <Leaf className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Nachhaltiger 3D-Druck</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Umweltbewusstsein ist uns wichtig. Als <strong className="text-primary">nachhaltiger 3D-Druck Service</strong> 
                      in Linz setzen wir auf ökologische Verantwortung:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Regionale Materialien:</strong> Filamente aus österreichischer Herstellung – kurze Transportwege</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Recycling-Materialien:</strong> PLA aus nachwachsenden Rohstoffen und Industrieabfällen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Materialeffizienz:</strong> Additive Fertigung minimiert Abfall gegenüber spanenden Verfahren</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Energieoptimierung:</strong> Moderne Drucker mit effizienter Energienutzung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Lokale Produktion:</strong> Fertigung in Oberösterreich reduziert CO₂-Emissionen</span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
              
              <AnimatedSection delay={0.3}>
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-10 rounded-2xl border">
                  <h3 className="text-2xl font-bold mb-4 text-center">Made in Austria – Für Linz</h3>
                  <p className="text-muted-foreground text-center leading-relaxed max-w-4xl mx-auto">
                    Als österreichischer <strong className="text-primary">3D-Druck Dienstleister</strong> sind wir stolz darauf, 
                    ausschließlich mit Partnern aus Österreich zusammenzuarbeiten. Unsere Filamente stammen von führenden 
                    österreichischen Herstellern, die höchste Qualitätsstandards erfüllen und nachhaltig produzieren. 
                    Diese Partnerschaft garantiert konstante Materialqualität, kurze Lieferwege und die Unterstützung 
                    der heimischen Wirtschaft. Für unsere Kunden in Linz bedeutet das: verlässliche Qualität, 
                    schnelle Verfügbarkeit und ein gutes Gefühl beim Einkauf lokaler Produkte.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>


        {/* FAQ Section - Enhanced with Accordion */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  Häufig gestellte <span className="text-gradient">Fragen</span> zum 3D-Druck in Linz
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Hier finden Sie Antworten auf die wichtigsten Fragen rund um unseren 3D-Druck Service in Linz.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Wie schnell kann ich mein 3D-Druck-Teil in Linz erhalten?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Mit unserem Express-Service liefern wir innerhalb von 24 Stunden nach Linz. Standard-Lieferungen dauern 2-3 Werktage. 
                      Für besonders dringende Projekte können wir auch Same-Day-Delivery innerhalb von Linz anbieten – kontaktieren Sie uns direkt.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Welche Dateiformate werden akzeptiert?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Wir akzeptieren alle gängigen CAD-Formate: STL, OBJ, STEP, IGES, 3MF und viele mehr. Bei Fragen zu Ihrem Format 
                      kontaktieren Sie uns gerne. Wir können auch aus 2D-Zeichnungen oder Skizzen 3D-Modelle erstellen.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Wie werden die Kosten für 3D-Druck in Linz berechnet?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Die Kosten hängen von Material, Größe, Komplexität und Druckdauer ab. Nutzen Sie unseren{" "}
                      <a href="/kostenrechner" className="text-primary hover:underline font-semibold">Online-Kostenrechner</a> für eine 
                      sofortige Schätzung. Kleine Teile starten bereits ab €5, größere Projekte nach individuellem Angebot.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Bieten Sie auch Nachbearbeitung an?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Ja, wir bieten professionelle Nachbearbeitung: Schleifen, Lackieren, Grundieren, Glattieren und weitere 
                      Finishing-Optionen für Ihre 3D-gedruckten Teile in Linz. So erhalten Sie produktionsreife Bauteile direkt einsatzbereit.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Kann ich mein Teil vor Ort in Linz abholen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Abholung nach Terminvereinbarung ist möglich. Kontaktieren Sie uns, um einen Abholtermin in Oberösterreich zu vereinbaren. 
                      So sparen Sie Versandkosten und erhalten Ihr Teil noch schneller.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="bg-card border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      Welche Größe können die 3D-Drucke maximal haben?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Unser Druckvolumen beträgt bis zu 300 x 300 x 400 mm. Größere Teile können wir in Segmenten drucken und 
                      anschließend montieren. Kontaktieren Sie uns für spezielle Anforderungen.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <ReviewsWidget />

        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center gradient-card p-12 rounded-2xl">
              <h2 className="text-4xl font-bold mb-6">
                Starten Sie Ihr <span className="text-gradient">3D-Druck Projekt</span> in Linz
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

export default Linz3DDruck;
