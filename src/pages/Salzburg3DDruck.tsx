import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import StructuredData from "@/components/StructuredData";
import ReviewsWidget from "@/components/ReviewsWidget";
import Contact from "@/components/Contact";
import AIChatWidget from "@/components/AIChatWidget";
import { Button } from "@/components/ui/button";
import { Box, Clock, MapPin, Phone, Mail, CheckCircle, Zap, Shield, Leaf, TrendingUp, Factory, Building2, Palette, FlaskConical } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";
const Salzburg3DDruck = () => {
  return <>
      <SEOHead title="3D-Druckservice Salzburg | Professioneller FDM-Druck | ekdruck e.U." description="Mozart-Stadt trifft Innovation: Kulturschaffende & Unternehmen erhalten 24-48h Express-Service. Vom Requisit bis zum Funktionsbauteil. Salzburg vertraut auf uns!" keywords="3d-druckservice salzburg, 3d druck salzburg stadt, fdm-druck salzburg, rapid prototyping salzburg, 3d-druck dienstleister salzburg" path="/3d-druck-salzburg" />
      <BreadcrumbSchema items={[{
      name: "Home",
      url: "/"
    }, {
      name: "3D-Druck Salzburg",
      url: "/3d-druck-salzburg"
    }]} />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      <StructuredData type="faq" />
      
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
                <span className="text-primary font-semibold">Salzburg & Umgebung</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Professioneller 3D-Druckservice in <span className="text-gradient">Salzburg</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Ihr verlässlicher Partner für hochwertigen FDM-3D-Druck in der <strong className="text-foreground">Mozartstadt</strong>. 
                Express-Lieferung innerhalb 24-48h nach <strong className="text-foreground">Salzburg Stadt</strong> und Land. <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Rapid Prototyping</a>, österreichische Premium-Materialien 
                und persönliche Fachberatung für Ihre Projekte.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <Button size="lg" className="group" onClick={() => document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })}>
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
                  <span className="font-semibold text-sm">24-48h Express</span>
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
                Unsere <span className="text-gradient">Services für Salzburg</span>
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Von schnellem <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Rapid Prototyping</a> bis zur Serienfertigung – wir bieten professionelle 3D-Drucklösungen für Ihr Projekt in Salzburg.
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
                    Professioneller FDM-3D-Druck für Prototypen, Einzelteile und Kleinserien. 
                    Schichtauflösung bis 0,1mm für höchste Präzision in Salzburg.
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
                  <h3 className="text-2xl font-bold mb-4">Express Service 24-48h</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Benötigen Sie Ihr Teil schnell? Wir liefern innerhalb von 24-48 Stunden in ganz Salzburg. 
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
                  Warum ekdruck für <span className="text-gradient">3D-Druck in Salzburg</span>?
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Als österreichischer 3D-Druck-Spezialist bieten wir Ihnen lokale Expertise, 
                  schnelle Lieferzeiten und persönliche Betreuung für Ihr Projekt in Salzburg.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-6">
                <AnimatedSection delay={0.1}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Schnelle Lieferung nach Salzburg</h3>
                      <p className="text-muted-foreground">Express-Versand innerhalb von 24-48h direkt zu Ihnen nach Salzburg. Standard-Lieferung in 2-3 Werktagen österreichweit.</p>
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

        {/* Technology Deep Dive Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  Professioneller <span className="text-gradient">FDM 3D-Druck</span> für Salzburg
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Modernste Technologie trifft auf österreichische Qualität – Ihr 3D-Druck Partner für die Mozartstadt.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <AnimatedSection delay={0.1}>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">Was ist FDM 3D-Druck?</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      FDM (Fused Deposition Modeling) ist das führende Verfahren im <strong className="text-primary">3D-Druck</strong> und 
                      bildet die Grundlage unseres Services für Salzburg. Bei diesem additiven Fertigungsverfahren wird thermoplastisches 
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
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
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
                    <div className="text-4xl font-bold text-primary mb-2">24-48h</div>
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
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Salzburg-Specific Industry Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  3D-Druck für die <span className="text-gradient">Salzburger Wirtschaft</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Salzburg ist bekannt für Innovation und Kultur. Als regionaler 3D-Druck Dienstleister 
                  unterstützen wir die kreative und innovative Wirtschaft der Mozartstadt.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <AnimatedSection delay={0.1}>
                  <div className="bg-card p-8 rounded-2xl border-2 hover:border-primary/30 transition-all">
                    <Factory className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Industrie & Produktion</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Salzburg verfügt über eine starke Fertigungsbranche. 
                      Unser <strong className="text-primary">3D-Druckservice</strong> unterstützt produzierende Unternehmen mit:
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
                      Als Universitätsstadt mit starker Forschung profitiert Salzburg von innovativen 3D-Drucklösungen. 
                      Wir unterstützen:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Universität Salzburg in Forschungsprojekten</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>FH Salzburg mit technischen Prototypen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Start-ups mit schnellem Prototypenbau</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Forschungseinrichtungen mit Spezialanfertigungen</span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.3}>
                  <div className="bg-card p-8 rounded-2xl border-2 hover:border-primary/30 transition-all">
                    <Building2 className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Architektur & Bauwesen</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      In der historischen Stadt Salzburg spielt Architektur eine wichtige Rolle. 
                      Wir fertigen:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Detaillierte Architekturmodelle für Planungsbüros</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Präsentationsmodelle für Bauvorhaben</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Städtebauliche Konzeptmodelle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Denkmalschutz-Dokumentationen</span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.4}>
                  <div className="bg-card p-8 rounded-2xl border-2 hover:border-primary/30 transition-all">
                    <Palette className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Kultur & Kreativwirtschaft</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Salzburg ist ein kulturelles Zentrum. Wir unterstützen die kreative Szene mit:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Kunstobjekten und Skulpturen für Künstler</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Requisiten für Theater und Festspiele</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Design-Prototypen für Kreative</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Museumsexponate und Reproduktionen</span>
                      </li>
                    </ul>
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
                  <span className="text-gradient">Materialien</span> für Ihr Projekt in Salzburg
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
                      Schlagfest und chemikalienbeständig. Perfekt für funktionale Bauteile und 
                      Endverbrauchsteile mit hoher Belastung.
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
                      Hitzebeständig bis 100°C. Ideal für technische Anwendungen, 
                      Industriekomponenten und Gehäuse mit hohen Temperaturanforderungen.
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
                      Höchste Festigkeit und Flexibilität. Für anspruchsvolle 
                      mechanische Anwendungen und Sonderanfertigungen.
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
                  So einfach geht <span className="text-gradient">3D-Druck in Salzburg</span>
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
                          zu Ihnen nach Salzburg. Standard-Lieferung österreichweit in 2-3 Werktagen. Tracking-Nummer inklusive.
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  Häufig gestellte <span className="text-gradient">Fragen</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                  Alles, was Sie über unseren professionellen 3D-Druckservice in Salzburg wissen müssen
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.1}>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left hover:text-primary transition-colors">
                      Wie schnell kann ich meine 3D-gedruckten Teile in Salzburg erhalten?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Die Standardlieferung nach Salzburg erfolgt innerhalb von 5-7 Werktagen ab Auftragsbestätigung. 
                      Für eilige Anfragen bieten wir einen Express-Service mit Lieferung in nur 24-48 Stunden an. 
                      Die genaue Lieferzeit hängt von der Komplexität und Größe Ihres Projekts ab. Nach Ihrer Anfrage 
                      erhalten Sie ein detailliertes Angebot mit konkreter Lieferzeit.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left hover:text-primary transition-colors">
                      Welche Dateiformate werden für den 3D-Druck akzeptiert?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Wir akzeptieren STL, OBJ, STEP, IGES und weitere gängige CAD-Formate. STL ist das Standardformat 
                      für 3D-Druck und wird von allen gängigen CAD-Programmen unterstützt. Falls Sie unsicher sind oder 
                      Hilfe bei der Dateivorbereitung benötigen, kontaktieren Sie uns – wir unterstützen Sie gerne bei 
                      der Optimierung Ihrer Dateien für den 3D-Druck.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left hover:text-primary transition-colors">
                      Wie berechnen sich die Kosten für professionellen 3D-Druck?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Die Kosten für Ihren 3D-Druck richten sich nach mehreren Faktoren: Bauteilgröße (Volumen), gewähltes Material, 
                      Druckzeit, Schichtauflösung und eventuelle Nachbearbeitung. Nutzen Sie unseren kostenlosen Online-Rechner 
                      für eine sofortige Preisschätzung oder fordern Sie ein maßgeschneidertes Angebot an. Bei größeren Projekten 
                      oder Serienanfertigung bieten wir attraktive Mengenrabatte.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left hover:text-primary transition-colors">
                      Welche Nachbearbeitungsmöglichkeiten bieten Sie an?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Wir bieten verschiedene Finishing-Optionen für Ihre 3D-Drucke: Schleifen und Polieren für glatte Oberflächen, 
                      professionelles Lackieren in Ihrer Wunschfarbe, chemisches Glätten (bei ABS), Einfärben, sowie weitere 
                      Oberflächenbehandlungen. Sprechen Sie uns auf Ihre spezifischen Anforderungen an – wir finden die beste Lösung 
                      für Ihr Projekt in Salzburg.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left hover:text-primary transition-colors">
                      Kann ich meine Teile auch persönlich abholen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Ja, eine persönliche Abholung ist nach Vereinbarung möglich. Unser Standort in Gunskirchen ist von Salzburg 
                      aus in ca. 1 Stunde über die A1 erreichbar. Bei der Abholung können wir Ihre Teile gemeinsam begutachten und 
                      Sie persönlich beraten. Kontaktieren Sie uns für einen Abholtermin.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-left hover:text-primary transition-colors">
                      Welche Branchen bedienen Sie in Salzburg?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Wir arbeiten mit Unternehmen und Institutionen aus verschiedenen Branchen in Salzburg: Industrie und Produktion, 
                      Forschung und Entwicklung, Architektur und Bauwesen, Kultur und Kreativwirtschaft, Medizintechnik, Bildung, 
                      sowie Privatpersonen mit individuellen Projekten. Jede Branche hat spezifische Anforderungen – wir bieten die 
                      passende Lösung.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Reviews Widget */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <ReviewsWidget />
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-background py-[8px]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              
              
              <AnimatedSection delay={0.1}>
                <Contact />
              </AnimatedSection>
            </div>
          </div>
        </section>

        <AIChatWidget />
        <Footer />
      </div>
    </>;
};
export default Salzburg3DDruck;