import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Factory, TrendingDown, Zap, Shield, CheckCircle, ArrowRight, BarChart3, Package } from "lucide-react";

const Serienfertigung = () => {
  return (
    <>
      <SEOHead 
        title="3D-Druck Serienfertigung Österreich | Kleinserien | ekdruck e.U."
        description="3D-Druck Serienfertigung für Kleinserien in Österreich. Kostengünstige Alternative zu Spritzguss. 10-10.000 Stück möglich. Jetzt anfragen!"
        keywords="3d-druck serienfertigung österreich, kleinserien 3d-druck, additive fertigung kleinserien, 3d-druck produktion österreich"
        path="/serienfertigung"
      />
      <StructuredData type="service" />
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-bl from-background via-muted/20 to-accent/10 relative overflow-hidden">
          {/* Industrial Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-16 h-16 bg-primary transform rotate-45"></div>
            <div className="absolute top-40 right-40 w-12 h-12 bg-accent transform rotate-45"></div>
            <div className="absolute bottom-40 left-40 w-20 h-20 bg-primary transform rotate-45"></div>
            <div className="absolute bottom-20 right-20 w-14 h-14 bg-accent transform rotate-45"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-8 hover-scale">
                <Factory className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
                3D-Druck Serienfertigung
                <span className="block text-2xl lg:text-3xl mt-2 text-primary font-normal">Kleinserien von 10 bis 10.000 Stück</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
                Kostengünstige Alternative zu traditioneller Serienfertigung. Ohne Werkzeugkosten, 
                flexibel skalierbar und perfekt für Kleinserien und Markttests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero" className="hover-scale" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Serienfertigung anfragen <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Vorteile Serienfertigung */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Warum 3D-Druck Serienfertigung?</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Revolutionieren Sie Ihre Produktentwicklung mit den Vorteilen der additiven Serienfertigung
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <TrendingDown className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Keine Werkzeugkosten</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Sparen Sie €10.000-50.000 für Spritzguss-Werkzeuge. Direkt von der CAD-Datei zur Serie.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Schneller Produktstart</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Von der Designfreigabe zur ersten Serie in nur 5-10 Tagen statt 6-12 Wochen Werkzeugbau.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Flexible Stückzahlen</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Produzieren Sie genau die benötigte Menge - von 10 bis 10.000 Stück ohne Mindestabnahme.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Risiko minimieren</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Testen Sie Marktnachfrage mit kleinen Serien bevor Sie in teure Werkzeuge investieren.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Kostenvergleich Grafik */}
              <div className="bg-gradient-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-center mb-8">Kostenvergleich: 3D-Druck vs. Spritzguss</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h4 className="font-semibold mb-4">100 Stück</h4>
                    <div className="space-y-2">
                      <div className="bg-primary/20 p-3 rounded-lg">
                        <div className="text-sm">3D-Druck</div>
                        <div className="text-xl font-bold text-primary">€800</div>
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="text-sm">Spritzguss</div>
                        <div className="text-xl font-bold">€15.000+</div>
                        <div className="text-xs text-muted-foreground">inkl. Werkzeug</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">1.000 Stück</h4>
                    <div className="space-y-2">
                      <div className="bg-primary/20 p-3 rounded-lg">
                        <div className="text-sm">3D-Druck</div>
                        <div className="text-xl font-bold text-primary">€6.500</div>
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="text-sm">Spritzguss</div>
                        <div className="text-xl font-bold">€18.000+</div>
                        <div className="text-xs text-muted-foreground">inkl. Werkzeug</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">5.000 Stück</h4>
                    <div className="space-y-2">
                      <div className="bg-primary/20 p-3 rounded-lg">
                        <div className="text-sm">3D-Druck</div>
                        <div className="text-xl font-bold text-primary">€28.000</div>
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="text-sm">Spritzguss</div>
                        <div className="text-xl font-bold">€25.000+</div>
                        <div className="text-xs text-muted-foreground">inkl. Werkzeug</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <p className="text-sm text-muted-foreground">
                    * Break-Even bei ca. 4.000-6.000 Stück je nach Komplexität
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Anwendungsbereiche Serienfertigung */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Perfekt für diese Anwendungen</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  3D-Druck Serienfertigung eignet sich besonders für innovative Produkte und Nischenmärkte
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Factory className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Ersatzteil-Management</CardTitle>
                    <CardDescription>On-Demand Fertigung ohne Lagerhaltung</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Auslaufende Ersatzteile</li>
                      <li>• Oldtimer-Restauration</li>
                      <li>• Industriemaschinen-Teile</li>
                      <li>• Medizintechnik-Komponenten</li>
                    </ul>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <div className="text-sm font-medium text-primary">Ideale Stückzahl: 10-500</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <BarChart3 className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Markttest & Startup</CardTitle>
                    <CardDescription>Produktvalidierung vor Großinvestition</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• MVP (Minimum Viable Product)</li>
                      <li>• Crowdfunding-Kampagnen</li>
                      <li>• A/B-Tests verschiedener Designs</li>
                      <li>• Marktnischen-Produkte</li>
                    </ul>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <div className="text-sm font-medium text-primary">Ideale Stückzahl: 50-2.000</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Package className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Customization & Personalisierung</CardTitle>
                    <CardDescription>Individuelle Varianten in Serie</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Personalisierte Produkte</li>
                      <li>• Größenvarianten</li>
                      <li>• Kundenspezifische Anpassungen</li>
                      <li>• Limited Editions</li>
                    </ul>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <div className="text-sm font-medium text-primary">Ideale Stückzahl: 100-5.000</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Zap className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Rapid Manufacturing</CardTitle>
                    <CardDescription>Schnelle Überbrückung bis Werkzeugfertigstellung</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Überbrückung Werkzeugbau</li>
                      <li>• Saisonale Spitzen abfedern</li>
                      <li>• Schnelle Markteinführung</li>
                      <li>• Notfall-Produktionen</li>
                    </ul>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <div className="text-sm font-medium text-primary">Ideale Stückzahl: 500-10.000</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Shield className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Spezielle Geometrien</CardTitle>
                    <CardDescription>Komplexe Teile die nur 3D-Druck kann</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Interne Kanäle und Hohlräume</li>
                      <li>• Hinterschneidungen</li>
                      <li>• Integrierte Baugruppen</li>
                      <li>• Biomimetrische Strukturen</li>
                    </ul>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <div className="text-sm font-medium text-primary">Ideale Stückzahl: 50-2.000</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CheckCircle className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Qualifizierte Produktion</CardTitle>
                    <CardDescription>Zertifizierte Qualität für kritische Anwendungen</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Medizinische Hilfsmittel</li>
                      <li>• Aerospace-Komponenten</li>
                      <li>• Automotive-Funktionsteile</li>
                      <li>• Lebensmittelkontakt-Teile</li>
                    </ul>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <div className="text-sm font-medium text-primary">Ideale Stückzahl: 100-3.000</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Produktionsprozess */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Unser Serienfertigung-Prozess</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Professioneller Workflow für konstante Qualität und termingerechte Lieferung
                </p>
              </div>

              <div className="space-y-8">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">Anfrage & Analyse</h4>
                    <p className="text-sm text-muted-foreground">Anforderungsanalyse, CAD-Prüfung, Machbarkeitsstudie</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">Prototyp & Freigabe</h4>
                    <p className="text-sm text-muted-foreground">Erstmuster fertigen, Qualität validieren, Serienfreigabe</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">3</span>
                    </div>
                    <h4 className="font-semibold mb-2">Serienfertigung</h4>
                    <p className="text-sm text-muted-foreground">Parallele Produktion, Qualitätskontrolle, Dokumentation</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">4</span>
                    </div>
                    <h4 className="font-semibold mb-2">Lieferung & Service</h4>
                    <p className="text-sm text-muted-foreground">Verpackung, Versand, After-Sales Support</p>
                  </div>
                </div>

                <div className="bg-gradient-card p-8 rounded-2xl">
                  <h3 className="text-xl font-bold mb-6 text-center">Typische Produktionszeiten</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">10-50 Stück</span>
                      <div className="flex-1 mx-4">
                        <Progress value={20} className="h-2" />
                      </div>
                      <span className="text-sm text-muted-foreground">3-5 Tage</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">51-200 Stück</span>
                      <div className="flex-1 mx-4">
                        <Progress value={40} className="h-2" />
                      </div>
                      <span className="text-sm text-muted-foreground">5-10 Tage</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">201-1000 Stück</span>
                      <div className="flex-1 mx-4">
                        <Progress value={60} className="h-2" />
                      </div>
                      <span className="text-sm text-muted-foreground">10-15 Tage</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">1001-5000 Stück</span>
                      <div className="flex-1 mx-4">
                        <Progress value={80} className="h-2" />
                      </div>
                      <span className="text-sm text-muted-foreground">15-25 Tage</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">5000+ Stück</span>
                      <div className="flex-1 mx-4">
                        <Progress value={100} className="h-2" />
                      </div>
                      <span className="text-sm text-muted-foreground">25-40 Tage</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualitätssicherung */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Qualitätssicherung in der Serie</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Konsistente Qualität durch systematische Kontrollen und dokumentierte Prozesse
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CheckCircle className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Erstmuster-Qualifizierung</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Maßprüfung nach Zeichnung</li>
                      <li>• Materialprüfung</li>
                      <li>• Funktionstest</li>
                      <li>• Oberflächenqualität</li>
                      <li>• Freigabedokumentation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <BarChart3 className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Inline-Qualitätskontrolle</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Stichprobenprüfung</li>
                      <li>• Prozessparameter-Monitoring</li>
                      <li>• Zwischenkontrollen</li>
                      <li>• Abweichungs-Management</li>
                      <li>• Kontinuierliche Verbesserung</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Shield className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Qualitätsdokumentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Prüfprotokolle</li>
                      <li>• Materialzertifikate</li>
                      <li>• Prozessdokumentation</li>
                      <li>• Rückverfolgbarkeit</li>
                      <li>• Qualitätszertifikat</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Starten Sie Ihre 3D-Druck Serienfertigung
              </h2>
              <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
                Kostenlose Machbarkeitsprüfung und individuelles Angebot für Ihre Serienfertigung. 
                Vom Prototyp zur Serie - wir begleiten Sie durch den gesamten Prozess.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero" className="hover-scale" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Kostenloses Beratungsgespräch
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Serienfertigung;