import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Lightbulb, Cog, Zap, CheckCircle, ArrowRight, Timer } from "lucide-react";

const RapidPrototyping = () => {
  return (
    <>
      <SEOHead 
        title="Rapid Prototyping Österreich | 3D-Prototypen in 24-48h | ekdruck e.U."
        description="Express Rapid Prototyping Service ⚡ Prototypen in 24-48h ⚡ Funktionsprototypen & Designmodelle ⚡ 3D-Druck Österreich ⚡ Kostenlose Machbarkeitsprüfung!"
        keywords="rapid prototyping österreich, schnelle prototypen oberösterreich, 3d prototypen 24h österreich, express prototyping oberösterreich, funktionsprototypen österreich"
        path="/rapid-prototyping"
      />
      <StructuredData type="service" />
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-accent rounded-full animate-pulse delay-500"></div>
            <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-primary rounded-full animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-8 hover-scale">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
                Rapid Prototyping
                <span className="block text-2xl lg:text-3xl mt-2 text-primary font-normal">Von der Idee zum Prototyp in 24-48h</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
                Beschleunigen Sie Ihre Produktentwicklung mit unserem Rapid Prototyping Service. 
                Schnell, präzise und kostengünstig - österreichweit verfügbar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero" className="hover-scale" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Express-Prototyp anfragen <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Warum Rapid Prototyping */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Warum Rapid Prototyping?</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Verkürzen Sie Entwicklungszeiten und minimieren Sie Risiken durch schnelle, iterative Prototypenerstellung
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Schnelligkeit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Von der CAD-Datei zum fertigen Prototyp in nur 24-48 Stunden - statt Wochen bei konventionellen Verfahren.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Innovation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Testen Sie Designkonzepte früh im Entwicklungsprozess und optimieren Sie iterativ.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <Cog className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Funktionalität</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Nicht nur Designmodelle - auch funktionsfähige Prototypen für Passgenauigkeit und Mechanik.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Kosteneffizienz</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Sparen Sie Zeit und Geld durch frühzeitige Fehlererkennung und Designoptimierung.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Prototyping Timeline */}
              <div className="bg-gradient-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-center mb-8">Unser Rapid Prototyping Prozess</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">Anfrage & Analyse</h4>
                    <p className="text-sm text-muted-foreground">CAD-Datei Upload und Machbarkeitsprüfung</p>
                    <div className="text-xs text-primary mt-2 font-medium">0-2 Stunden</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">Optimierung & Vorbereitung</h4>
                    <p className="text-sm text-muted-foreground">Design für 3D-Druck optimieren</p>
                    <div className="text-xs text-primary mt-2 font-medium">2-4 Stunden</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">3</span>
                    </div>
                    <h4 className="font-semibold mb-2">3D-Druck</h4>
                    <p className="text-sm text-muted-foreground">Präziser FDM 3D-Druck</p>
                    <div className="text-xs text-primary mt-2 font-medium">4-20 Stunden</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">4</span>
                    </div>
                    <h4 className="font-semibold mb-2">Nachbearbeitung & Versand</h4>
                    <p className="text-sm text-muted-foreground">Finishing und Express-Versand</p>
                    <div className="text-xs text-primary mt-2 font-medium">4-8 Stunden</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prototyping Anwendungen */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Prototyping Anwendungsgebiete</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Von der ersten Designidee bis zum marktfähigen Produkt - in jeder Phase der richtige Prototyp
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      Konzeptprototypen
                    </CardTitle>
                    <CardDescription>Erste Visualisierung von Ideen</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Design-Validierung</li>
                      <li>• Investor-Präsentationen</li>
                      <li>• Marktforschung</li>
                      <li>• Formstudien</li>
                    </ul>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <div className="text-sm font-medium text-primary">Typische Lieferzeit: 24-48h</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Cog className="h-5 w-5 text-primary" />
                      Funktionsprototypen
                    </CardTitle>
                    <CardDescription>Mechanik und Passgenauigkeit testen</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Passgenauigkeitstests</li>
                      <li>• Mechanische Funktionen</li>
                      <li>• Montage-Validierung</li>
                      <li>• Belastungstests</li>
                    </ul>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <div className="text-sm font-medium text-primary">Typische Lieferzeit: 48-72h</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Seriennahe Prototypen
                    </CardTitle>
                    <CardDescription>Finale Validierung vor Serienfertigung</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Finale Designvalidierung</li>
                      <li>• Qualitätssicherung</li>
                      <li>• Produktionsplanung</li>
                      <li>• Zertifizierungsvorbereitung</li>
                    </ul>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <div className="text-sm font-medium text-primary">Typische Lieferzeit: 2-5 Tage</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Express Service */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 lg:p-12 rounded-2xl border border-primary/20 shadow-lg hover-scale">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                    <Timer className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Express Rapid Prototyping</h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Brauchen Sie Ihren Prototyp noch schneller? Unser Express-Service macht es möglich!
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-background/50 p-6 rounded-xl border border-primary/10 hover-scale">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">24h Express</h3>
                    <p className="text-muted-foreground mb-4">Ihr Prototyp in nur 24 Stunden</p>
                    <div className="text-lg font-semibold text-primary">+50% Aufpreis</div>
                  </div>
                  <div className="bg-background/50 p-6 rounded-xl border border-primary/10 hover-scale">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">Same-Day</h3>
                    <p className="text-muted-foreground mb-4">Fertigung am selben Tag bei Auftrag bis 10:00</p>
                    <div className="text-lg font-semibold text-primary">+100% Aufpreis</div>
                  </div>
                  <div className="bg-background/50 p-6 rounded-xl border border-primary/10 hover-scale">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">Overnight</h3>
                    <p className="text-muted-foreground mb-4">Über-Nacht-Service für dringende Projekte</p>
                    <div className="text-lg font-semibold text-primary">+150% Aufpreis</div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <Button size="lg" variant="hero" className="hover-scale" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Express-Prototyp jetzt anfragen
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Starten Sie Ihr Rapid Prototyping Projekt
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Laden Sie Ihre CAD-Datei hoch oder kontaktieren Sie uns für eine kostenlose Beratung. 
                Wir unterstützen Sie bei der optimalen Umsetzung Ihrer Prototyping-Anforderungen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Kostenloses Angebot anfordern
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

export default RapidPrototyping;