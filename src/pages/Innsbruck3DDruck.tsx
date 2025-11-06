import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import StructuredData from "@/components/StructuredData";
import ReviewsWidget from "@/components/ReviewsWidget";
import Contact from "@/components/Contact";
import AIChatWidget from "@/components/AIChatWidget";
import { Button } from "@/components/ui/button";
import { Box, Clock, MapPin, Phone, Mail, CheckCircle, Zap, Shield, Leaf, TrendingUp, Mountain, Heart, Wrench, GraduationCap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";
const Innsbruck3DDruck = () => {
  return <>
      <SEOHead title="3D-Druck Innsbruck & Tirol | Präziser FDM-Service | ekdruck e.U." description="Professioneller 3D-Druckservice für Innsbruck und Tirol! Alpine Innovation, robuste Materialien für Outdoor-Anforderungen. Express 24-48h. Jetzt anfragen!" keywords="3d-druck innsbruck, 3d-druckservice tirol, fdm-druck innsbruck, rapid prototyping innsbruck, 3d druck alpen" path="/3d-druck-innsbruck" />
      <BreadcrumbSchema items={[{
      name: "Home",
      url: "/"
    }, {
      name: "3D-Druck Innsbruck",
      url: "/3d-druck-innsbruck"
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
                <Mountain className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Innsbruck & Tirol</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                3D-Druck Service für <span className="text-gradient">Innsbruck</span> & Tirol
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Ihr Partner für professionellen FDM-3D-Druck in der <strong className="text-foreground">Alpenmetropole</strong>. 
                Robuste Materialien für <strong className="text-foreground">alpine Anforderungen</strong>, Express-Lieferung 24-48h nach Innsbruck. 
                Österreichische Qualität für Outdoor-, Sport- und Medizintechnik-Projekte.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <Button size="lg" className="group" onClick={() => document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                  Kostenloses Angebot
                  <TrendingUp className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/kostenrechner">Preis berechnen</a>
                </Button>
              </div>
              
              {/* USPs */}
              <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Express 24-48h</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <Mountain className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Alpen-tauglich</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Made in Austria</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Robust</span>
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
                Unsere <span className="text-gradient">3D-Druck Services</span> für Innsbruck
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Von <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">schnellem Prototyping</a> bis zu robusten Funktionsteilen – 
                professionelle Fertigungslösungen für die Tiroler Wirtschaft.
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <AnimatedSection delay={0.1}>
                <div className="group gradient-card p-8 rounded-2xl hover-scale border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Box className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Präziser FDM-Druck</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Hochauflösender FDM-3D-Druck für funktionale Bauteile, Prototypen und Ersatzteile. 
                    Bis zu 0,1mm Schichtauflösung für feinste Details.
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
                  <h3 className="text-2xl font-bold mb-4">Express-Fertigung</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Eilige Projekte? Unser Schnell-Service liefert innerhalb von 24-48 Stunden 
                    direkt nach Innsbruck. Ideal für dringende Anforderungen.
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
                  <h3 className="text-2xl font-bold mb-4">Robuste Materialien</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Ausschließlich Premium-Filamente aus österreichischer Produktion. 
                    PLA, PETG, ABS, Nylon – perfekt für alpine Bedingungen.
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
                  Warum ekdruck für <span className="text-gradient">Innsbruck & Tirol</span>?
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Als österreichischer 3D-Druck-Spezialist bieten wir Ihnen regionale Expertise, 
                  alpine Materialien und persönliche Betreuung für Projekte in Tirol.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-6">
                <AnimatedSection delay={0.1}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Schnelle Lieferung nach Innsbruck</h3>
                      <p className="text-muted-foreground">Express-Versand innerhalb 24-48h direkt zu Ihnen. Standard-Lieferung 2-3 Werktage österreichweit.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mountain className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Alpine Expertise</h3>
                      <p className="text-muted-foreground">Materialien und Bauteile speziell für alpine Anforderungen. Erfahrung mit extremen Bedingungen und Outdoor-Einsatz.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.3}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Persönliche Fachberatung</h3>
                      <p className="text-muted-foreground">Individuelle Unterstützung bei Material- und Verfahrenswahl. Wir optimieren Ihre Dateien für beste Ergebnisse.</p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.4}>
                  <div className="flex gap-4 p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Transparente Preisgestaltung</h3>
                      <p className="text-muted-foreground">Nutzen Sie unseren Online-Rechner für sofortige Preisschätzung. Keine versteckten Kosten, faire Konditionen.</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  So einfach geht <span className="text-gradient">3D-Druck in Innsbruck</span>
                </h2>
                <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-lg">
                  Von der ersten Anfrage bis zur Lieferung – unser transparenter Prozess macht 3D-Druck 
                  einfach und planbar.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <AnimatedSection delay={0.1}>
                  <div className="relative">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 relative z-10">
                        <span className="text-2xl font-bold text-primary">1</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">Anfrage senden</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Senden Sie uns Ihre CAD-Datei (STL, OBJ, STEP, etc.) per E-Mail oder nutzen Sie 
                        unseren Online-Kostenrechner für eine erste Schätzung. Wir prüfen Ihre Datei auf 
                        Druckbarkeit und optimieren sie bei Bedarf kostenlos.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="relative">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 relative z-10">
                        <span className="text-2xl font-bold text-primary">2</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">Angebot & Beratung</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Innerhalb von 24 Stunden erhalten Sie ein detailliertes Angebot mit Preis, Lieferzeit 
                        und Materialempfehlung. Bei komplexen Projekten beraten wir Sie persönlich zur optimalen 
                        Umsetzung.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.3}>
                  <div className="relative">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 relative z-10">
                        <span className="text-2xl font-bold text-primary">3</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">Produktion startet</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Nach Ihrer Auftragsbestätigung beginnt der 3D-Druck sofort. Sie erhalten eine 
                        Trackingnummer, sobald Ihr Bauteil fertig ist. Express-Aufträge werden priorisiert.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.4}>
                  <div className="relative">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 relative z-10">
                        <span className="text-2xl font-bold text-primary">4</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">Lieferung</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Ihr fertiges Bauteil wird sicher verpackt und per DHL an Sie versendet. Express-Lieferung 
                        nach Innsbruck in 24-48h. Standard-Versand österreichweit in 2-3 Werktagen.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
              
              <AnimatedSection delay={0.5}>
                <div className="mt-12 text-center">
                  <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Jetzt Projekt starten
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Technology Deep Dive Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  Professionelle <span className="text-gradient">FDM-Technologie</span> für Tirol
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Modernste additive Fertigung trifft auf österreichische Präzision – Ihr 3D-Druck Partner in den Alpen.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <AnimatedSection delay={0.1}>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">FDM 3D-Druck erklärt</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      FDM (Fused Deposition Modeling) ist das führende Verfahren im <strong className="text-primary">professionellen 3D-Druck</strong> und 
                      bildet die Basis unseres Services für Innsbruck. Thermoplastisches Material wird schichtweise aufgetragen, 
                      um präzise dreidimensionale Objekte zu erstellen.
                    </p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Als <strong className="text-primary">3D-Druck Dienstleister</strong> setzen wir auf modernste FDM-Technologie 
                      mit Schichtauflösungen bis 0,1mm. Diese Präzision ermöglicht die Herstellung komplexer Geometrien, 
                      die mit konventionellen Verfahren nicht realisierbar sind.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Ob für <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Rapid Prototyping</a>, 
                      <a href="/einzelanfertigungen" className="text-primary hover:underline font-semibold"> Spezialanfertigungen</a> oder 
                      <a href="/serienfertigung" className="text-primary hover:underline font-semibold"> Kleinserien</a> – FDM bietet 
                      maximale Flexibilität für Ihre Projekte in Tirol.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">Vorteile für Tiroler Unternehmen</h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold mb-1">Kosteneffizienz</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Keine teuren Werkzeuge notwendig. Ideal für Prototypen und Kleinserien – 
                            wesentlich günstiger als traditionelle Fertigungsverfahren.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold mb-1">Schnelle Entwicklung</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Von der Idee zum fertigen Bauteil in 24-48 Stunden. Perfekt für agile Entwicklung 
                            in Start-ups und Forschungsprojekten in Innsbruck.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold mb-1">Konstruktionsfreiheit</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Komplexe Formen, Hinterschnitte und organische Strukturen – mit additiver Fertigung 
                            sind nahezu keine Grenzen gesetzt.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold mb-1">Umweltfreundlich</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Materialeffizienz durch additive Fertigung. Ausschließlich hochwertige 
                            Filamente aus österreichischer Produktion – Made in Austria für Tirol.
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
                    <p className="text-sm text-muted-foreground">Express nach Innsbruck</p>
                  </div>
                  <div className="text-center p-6 bg-card rounded-xl border">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <p className="text-sm text-muted-foreground">Österreichische Filamente</p>
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

        {/* Innsbruck-Specific Industry Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  3D-Druck für die <span className="text-gradient">Tiroler Wirtschaft</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
                  Innsbruck ist bekannt für Innovation im Alpenraum. Als regionaler 3D-Druck Dienstleister 
                  unterstützen wir die innovative Wirtschaft Tirols.
                </p>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <AnimatedSection delay={0.1}>
                  <div className="bg-card p-8 rounded-2xl border-2 hover:border-primary/30 transition-all">
                    <Mountain className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Outdoor & Sportartikel</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Innsbruck ist das Zentrum der alpinen Sportartikel-Industrie. 
                      Unser <strong className="text-primary">3D-Druckservice</strong> unterstützt Hersteller mit:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Prototypen für Wintersportausrüstung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Funktionsteile für Outdoor-Equipment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Produktentwicklung für Bergsportartikel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Ersatzteile für alpine Ausrüstung</span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                  <div className="bg-card p-8 rounded-2xl border-2 hover:border-primary/30 transition-all">
                    <Heart className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Medizintechnik</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Als Medizinstandort profitiert Innsbruck von innovativen 3D-Drucklösungen. 
                      Wir unterstützen:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Medizinische Universität Innsbruck</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Prototypen für Medizinprodukte</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Anatomische Modelle für Lehre</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Individuelle medizinische Hilfsmittel</span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.3}>
                  <div className="bg-card p-8 rounded-2xl border-2 hover:border-primary/30 transition-all">
                    <GraduationCap className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Forschung & Entwicklung</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Als Universitätsstadt mit starker Forschung bietet Innsbruck ideale Bedingungen. 
                      Wir fertigen:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Forschungsprototypen für Universität Innsbruck</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Versuchsaufbauten für Labore</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Anschauungsmaterial für Lehre</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Prototypen für Start-ups</span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.4}>
                  <div className="bg-card p-8 rounded-2xl border-2 hover:border-primary/30 transition-all">
                    <Wrench className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Industrie & Maschinenbau</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Tiroler Industrieunternehmen setzen auf Innovation. Wir liefern:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Funktionsprototypen für Produktentwicklung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Vorrichtungen und Betriebsmittel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Ersatzteile on-demand</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Kleinserien für Spezialprojekte</span>
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
                  <span className="text-gradient">Materialien</span> für Ihr Projekt in Innsbruck
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

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  Häufig gestellte <span className="text-gradient">Fragen</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                  Alles Wichtige über unseren 3D-Druckservice für Innsbruck und Tirol
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={0.1}>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left hover:text-primary transition-colors">
                      Wie schnell erfolgt die Lieferung nach Innsbruck?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Die Standardlieferung nach Innsbruck dauert 5-7 Werktage ab Auftragsbestätigung. 
                      Für dringende Projekte bieten wir Express-Service mit Lieferung in 24-48 Stunden an. 
                      Die genaue Lieferzeit richtet sich nach Komplexität und Größe Ihres Projekts. Nach Ihrer Anfrage 
                      erhalten Sie ein präzises Angebot mit konkreter Lieferzeitangabe.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left hover:text-primary transition-colors">
                      Welche Dateiformate werden akzeptiert?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Wir verarbeiten STL, OBJ, STEP, IGES und weitere gängige CAD-Formate. STL ist das Standardformat 
                      für 3D-Druck und wird von allen üblichen CAD-Programmen unterstützt. Falls Sie Unterstützung bei 
                      der Dateivorbereitung benötigen, kontaktieren Sie uns – wir helfen gerne bei der Optimierung 
                      Ihrer Dateien für den Druck.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left hover:text-primary transition-colors">
                      Wie setzen sich die Kosten zusammen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Die Kosten berechnen sich nach: Bauteilgröße (Volumen), gewähltes Material, Druckzeit, 
                      Schichtauflösung und eventuelle Nachbearbeitung. Verwenden Sie unseren kostenlosen Online-Rechner 
                      für eine schnelle Preisschätzung oder fordern Sie ein individuelles Angebot an. Bei Serienanfertigung 
                      bieten wir attraktive Mengenrabatte.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left hover:text-primary transition-colors">
                      Welche Nachbearbeitung ist möglich?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Wir bieten verschiedene Finishing-Services: Schleifen und Polieren für glatte Oberflächen, 
                      professionelles Lackieren in Ihrer Wunschfarbe, chemisches Glätten (bei ABS), Einfärben und weitere 
                      Oberflächenbehandlungen. Sprechen Sie uns auf Ihre Anforderungen an – wir finden die optimale Lösung 
                      für Ihr Projekt in Innsbruck.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left hover:text-primary transition-colors">
                      Sind die Materialien für alpine Bedingungen geeignet?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Ja, wir bieten spezielle Materialien für alpine Anforderungen. PETG ist UV- und wetterfest, 
                      ABS hitzebeständig bis 100°C, und PA12 Nylon extrem robust für mechanische Belastung. Wir beraten Sie 
                      gerne, welches Material für Ihren Einsatzzweck in den Bergen am besten geeignet ist.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-left hover:text-primary transition-colors">
                      Unterstützen Sie auch Sportartikel-Hersteller?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Ja, wir arbeiten regelmäßig mit Herstellern von Outdoor- und Sportartikeln in Tirol zusammen. 
                      Von Prototypen für Wintersportausrüstung über Funktionsteile bis zu Produktentwicklung – 
                      wir verstehen die speziellen Anforderungen der alpinen Sportartikel-Industrie und bieten passende 
                      Materialien und Expertise.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Reviews Widget */}
        <section className="bg-muted/30 py-[48px]">
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
export default Innsbruck3DDruck;