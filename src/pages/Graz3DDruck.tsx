import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import StructuredData from "@/components/StructuredData";
import ReviewsWidget from "@/components/ReviewsWidget";
import AIChatWidget from "@/components/AIChatWidget";
import Contact from "@/components/Contact";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Box, Clock, MapPin, CheckCircle, Factory, Recycle, Users, ArrowRight, Sparkles, Settings, Zap, Shield, TrendingUp, Package } from "lucide-react";
const Graz3DDruck = () => {
  return <>
      <SEOHead title="3D-Druck Graz & Steiermark | FDM Service | ekdruck e.U." description="Grazer Industrie & Forschungseinrichtungen profitieren von unserer Expertise: Hochpräzise Funktionsteile, technische Beratung inklusive. Express 24-48h in die grüne Mark. Engineering-Support für Ihr Projekt sichern!" keywords="3d-druck graz, 3d drucker graz, fdm druck graz, rapid prototyping graz, 3d-druck steiermark, prototypen graz" path="/3d-druck-graz" />
      <BreadcrumbSchema items={[{
      name: "Home",
      url: "/"
    }, {
      name: "3D-Druck Graz",
      url: "/3d-druck-graz"
    }]} />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      <StructuredData type="faq" />
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <AnimatedSection animation="fade-in">
          <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span className="text-primary font-semibold text-lg">Graz & Steiermark</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center">
                  3D-Druck Service in <span className="text-gradient">Graz</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto leading-relaxed">
                  Professioneller FDM 3D-Druck für <strong className="text-foreground">Graz</strong> und die Steiermark. 
                  Schnelle Lieferung, nachhaltige österreichische Materialien und faire Preise für Ihre technischen Anforderungen.
                </p>
                <div className="flex flex-wrap gap-4 justify-center mb-12">
                  <Button size="lg" className="text-lg h-14 px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                })}>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Jetzt Angebot erhalten
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg h-14 px-8" asChild>
                    <a href="/kostenrechner">Kosten berechnen</a>
                  </Button>
                </div>

                {/* USPs */}
                <div className="grid md:grid-cols-3 gap-6 mt-16">
                  <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-xl border border-primary/20">
                    <Zap className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-bold">Express-Service</div>
                      <div className="text-sm text-muted-foreground">In 24-48h bei Ihnen</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-xl border border-primary/20">
                    <Recycle className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-bold">Regional & Nachhaltig</div>
                      <div className="text-sm text-muted-foreground">Made in Austria</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-xl border border-primary/20">
                    <Users className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-bold">Persönliche Beratung</div>
                      <div className="text-sm text-muted-foreground">Direkt vom Experten</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection animation="slide-up" delay={100}>
          <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Unsere <span className="text-gradient">3D-Druck Services</span> in Graz
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Professionelle FDM-Technologie für Ihre individuellen Anforderungen
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardHeader>
                    <Box className="w-12 h-12 text-primary mb-4" />
                    <CardTitle className="text-2xl">FDM 3D-Druck</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      Hochpräziser FDM-Druck für technische Bauteile mit Industrie-Toleranzen. 
                      Perfekt für funktionale Prototypen und Fertigungsteile.
                    </p>
                    <a href="/fdm-3d-druck" className="text-primary hover:underline flex items-center gap-2 font-semibold group">
                      Mehr erfahren <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardHeader>
                    <Clock className="w-12 h-12 text-primary mb-4" />
                    <CardTitle className="text-2xl">Express-Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      Schnelle Fertigung für dringende Projekte. Lieferung innerhalb von 24-48h 
                      direkt zu Ihnen nach Graz.
                    </p>
                    <a href="/rapid-prototyping" className="text-primary hover:underline flex items-center gap-2 font-semibold group">
                      Mehr erfahren <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardHeader>
                    <Recycle className="w-12 h-12 text-primary mb-4" />
                    <CardTitle className="text-2xl">Nachhaltige Materialien</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      100% österreichisches Filament aus recycelten Industrieabfällen. 
                      Umweltfreundlich und lokal produziert.
                    </p>
                    <a href="/3d-druck-materialien" className="text-primary hover:underline flex items-center gap-2 font-semibold group">
                      Mehr erfahren <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Why ekdruck Section */}
        <AnimatedSection animation="fade-in" delay={200}>
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Warum ekdruck für <span className="text-gradient">Graz</span>?
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Ihr lokaler 3D-Druck-Spezialist mit Fokus auf Qualität und Service
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Zap className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">Blitzschnelle Fertigung</CardTitle>
                          <p className="text-muted-foreground">
                            Express-Lieferung in 24-48h nach Graz. Perfekt für dringende Projekte 
                            und kurzfristige Anforderungen in der Steiermark.
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <MapPin className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">Regional & Nah</CardTitle>
                          <p className="text-muted-foreground">
                            Als österreichischer Anbieter kennen wir die Anforderungen der Grazer 
                            Industrie und bieten persönlichen Service vor Ort.
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Users className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">Persönliche Beratung</CardTitle>
                          <p className="text-muted-foreground">
                            Individuelle Beratung bei Material- und Verfahrenswahl. Wir helfen Ihnen, 
                            die optimale Lösung für Ihr Projekt zu finden.
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <TrendingUp className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">Faire Preise</CardTitle>
                          <p className="text-muted-foreground">
                            Transparente Kalkulation ohne versteckte Kosten. Spezielle Konditionen 
                            für Serienentwicklung und Iterationen.
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Technology Deep Dive */}
        <AnimatedSection animation="slide-up" delay={300}>
          <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="text-gradient">FDM 3D-Druck</span> für Graz
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Professionelle additive Fertigung für die steirische Industrie
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <h3 className="text-3xl font-bold mb-6">Was ist FDM 3D-Druck?</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      <strong className="text-foreground">FDM (Fused Deposition Modeling)</strong> ist das 
                      führende 3D-Druckverfahren für funktionale Bauteile. Dabei wird thermoplastisches 
                      Material schichtweise aufgetragen und verschmolzen.
                    </p>
                    <p className="text-lg text-muted-foreground mb-6">
                      Diese Technologie eignet sich perfekt für technische Prototypen, Funktionsteile 
                      und Kleinserien in der Grazer Industrie - von Automotive über Maschinenbau bis 
                      zur Medizintechnik.
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <CheckCircle className="w-5 h-5" />
                      <span>Geprüft für industrielle Anwendungen</span>
                    </div>
                  </div>
                  <div className="bg-card p-8 rounded-2xl border-2 border-primary/20">
                    <h4 className="text-2xl font-bold mb-6">Vorteile für Grazer Unternehmen</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <strong className="block mb-1">Kosteneffizient</strong>
                          <p className="text-muted-foreground">Keine teuren Werkzeuge - ideal für Prototypen und Kleinserien</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <strong className="block mb-1">Schnelle Iteration</strong>
                          <p className="text-muted-foreground">Design-Änderungen in Stunden statt Wochen umsetzen</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <strong className="block mb-1">Designfreiheit</strong>
                          <p className="text-muted-foreground">Komplexe Geometrien ohne Mehrkosten realisieren</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <strong className="block mb-1">Nachhaltigkeit</strong>
                          <p className="text-muted-foreground">Österreichisches Filament aus recycelten Materialien</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Industry Focus */}
        <AnimatedSection animation="fade-in" delay={400}>
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    3D-Druck für <span className="text-gradient">Grazer Branchen</span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Spezialisierte Lösungen für verschiedene Industriezweige in der Steiermark
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Factory className="w-12 h-12 text-primary mb-4" />
                      <CardTitle>Automotive & Fertigung</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Funktionsprototypen, Test-Bauteile und Vorrichtungen für die Grazer 
                        Automotive-Industrie und Zulieferbranche.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Crash-Test-Komponenten</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Betriebsmittel</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Spannvorrichtungen</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Settings className="w-12 h-12 text-primary mb-4" />
                      <CardTitle>Forschung & Entwicklung</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Unterstützung für Forschungsprojekte an Grazer Universitäten und 
                        Forschungseinrichtungen mit schnellen Iterationszyklen.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Versuchsaufbauten</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Messvorrichtungen</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Proof-of-Concept</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Package className="w-12 h-12 text-primary mb-4" />
                      <CardTitle>Startups & Innovation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Flexible Lösungen für Grazer Startups und innovative Unternehmen - 
                        von der Idee bis zur Marktreife.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>MVP-Entwicklung</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Prototypen-Serien</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>Design-Iterationen</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Applications Section */}
        <AnimatedSection animation="slide-up" delay={100}>
          <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Anwendungsbereiche für <span className="text-gradient">3D-Druck in Graz</span>
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-3">
                        <span className="text-3xl">🚗</span>
                        Automotive Entwicklung
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Test-Bauteile, Prototypen-Komponenten und Funktionsteile für die 
                        Grazer Fahrzeugindustrie und Zulieferer.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-3">
                        <span className="text-3xl">⚙️</span>
                        Maschinenbau & Fertigung
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Betriebsmittel, Spannvorrichtungen und Produktionshilfen für 
                        steirische Produktionsstätten.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-3">
                        <span className="text-3xl">🔬</span>
                        Medizintechnik
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Chirurgische Planungsmodelle und Implantate-Prototypen für 
                        medizinische Forschung in Graz.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-3">
                        <span className="text-3xl">🏗️</span>
                        Infrastruktur & Bau
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Ingenieurbauwerke, Brückenmodelle und technische Visualisierungen 
                        für Grazer Planungsbüros.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Materials Section - Enhanced */}
        <AnimatedSection animation="fade-in" delay={200}>
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <AnimatedSection>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                    <span className="text-gradient">Materialien</span> für Ihr Projekt in Graz
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
        </AnimatedSection>

        {/* Process Section */}
        <AnimatedSection animation="slide-up" delay={300}>
          <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    So einfach geht <span className="text-gradient">3D-Druck in Graz</span>
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Von der Anfrage bis zur Lieferung in 4 einfachen Schritten
                  </p>
                </div>

                <div className="space-y-8">
                  {[{
                  number: 1,
                  title: "Anfrage senden",
                  description: "Laden Sie Ihre CAD-Datei hoch oder nutzen Sie unseren Kostenrechner für eine erste Schätzung. Wir unterstützen alle gängigen Formate."
                }, {
                  number: 2,
                  title: "Angebot erhalten",
                  description: "Innerhalb von 24 Stunden erhalten Sie ein detailliertes Angebot mit Preis, Lieferzeit und Materialempfehlung."
                }, {
                  number: 3,
                  title: "Produktion",
                  description: "Nach Ihrer Freigabe starten wir sofort mit dem 3D-Druck. Sie erhalten Updates zum Produktionsfortschritt."
                }, {
                  number: 4,
                  title: "Lieferung nach Graz",
                  description: "Express-Versand innerhalb von 24-48h direkt zu Ihnen nach Graz. Versichert und nachverfolgbar."
                }].map((step, index) => <div key={index} className="flex gap-6 items-start group">
                      <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-bold text-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        {step.number}
                      </div>
                      <div className="flex-1 pt-2">
                        <h3 className="font-bold text-2xl mb-3">{step.title}</h3>
                        <p className="text-lg text-muted-foreground">{step.description}</p>
                      </div>
                    </div>)}
                </div>

                <div className="mt-12 text-center">
                  <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                })}>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Jetzt starten
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Quality & Sustainability */}
        <AnimatedSection animation="fade-in" delay={400}>
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-4xl font-bold mb-6">
                      <span className="text-gradient">Qualitätssicherung</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Jedes Bauteil durchläuft unsere strenge Qualitätskontrolle. Wir dokumentieren 
                      alle relevanten Parameter und stellen bei Bedarf vollständige Prüfprotokolle zur Verfügung.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <strong className="block mb-1">Maßhaltigkeitsprüfung</strong>
                          <p className="text-muted-foreground">Vermessung kritischer Abmessungen nach Kundenvorgabe</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <strong className="block mb-1">Sichtprüfung</strong>
                          <p className="text-muted-foreground">Kontrolle auf Oberflächenqualität und Strukturintegrität</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <strong className="block mb-1">Materialdokumentation</strong>
                          <p className="text-muted-foreground">Vollständige Rückverfolgbarkeit aller verwendeten Materialien</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-4xl font-bold mb-6">
                      <span className="text-gradient">Nachhaltigkeit</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Wir setzen auf 100% österreichisches Filament aus recycelten Industrieabfällen. 
                      Regional produziert, kurze Transportwege und minimaler CO₂-Fußabdruck.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Recycle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <strong className="block mb-1">Recyceltes Material</strong>
                          <p className="text-muted-foreground">Filament aus aufbereiteten Produktionsabfällen</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Recycle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <strong className="block mb-1">Lokale Produktion</strong>
                          <p className="text-muted-foreground">Made in Austria - kurze Lieferwege nach Graz</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Recycle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <strong className="block mb-1">Energieeffizienz</strong>
                          <p className="text-muted-foreground">Optimierte Druckparameter für minimalen Energieverbrauch</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection animation="slide-up" delay={100}>
          <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Häufig gestellte <span className="text-gradient">Fragen</span>
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Antworten auf die wichtigsten Fragen zum 3D-Druck in Graz
                  </p>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Wie schnell können Sie liefern?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Unser Express-Service ermöglicht Lieferungen innerhalb von 24-48 Stunden 
                        nach Graz. Für komplexere Projekte besprechen wir die Lieferzeit individuell 
                        mit Ihnen.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Welche mechanischen Kennwerte erreichen Sie?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Abhängig vom Material: PLA bis 50 MPa Zugfestigkeit, PETG bis 53 MPa, 
                        PA12-GF bis 95 MPa. Vollständige Materialdatenblätter stellen wir auf 
                        Anfrage zur Verfügung.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Können Sie Funktionsprototypen fertigen?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Ja, wir fertigen voll funktionsfähige Prototypen für Tests und Validierung. 
                        Für anspruchsvolle Anwendungen empfehlen wir unsere hochfesten PA-Materialien 
                        mit definiertem mechanischem Verhalten.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Bieten Sie Engineering-Support?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Ja, wir beraten Sie gerne bei der Material- und Verfahrenswahl sowie bei 
                        der CAD-Optimierung für den 3D-Druck. Unsere Experten helfen Ihnen, das 
                        beste Ergebnis für Ihr Projekt zu erzielen.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Reviews Widget */}
        <ReviewsWidget />

        {/* Contact Section */}
        <AnimatedSection animation="fade-in">
          <section id="contact" className="py-0">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  
                  
                </div>
                <Contact />
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AIChatWidget />
        <Footer />
      </div>
    </>;
};
export default Graz3DDruck;