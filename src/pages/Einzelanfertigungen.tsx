import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import Contact from "@/components/Contact";
import AIChatWidget from "@/components/AIChatWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Users, Lightbulb, Target, CheckCircle, ArrowRight, Sparkles, Clock } from "lucide-react";

const Einzelanfertigungen = () => {
  return (
    <>
      <SEOHead 
        title="Ihre Idee wird real: Custom 3D-Druck Einzelanfertigungen | ekdruck"
        description="Individuelle 3D-Druck Einzelanfertigungen aus Österreich. Von Ersatzteilen bis Prototypen – wir realisieren Ihre Projekte. Kostenlose Beratung!"
        keywords="3d-druck einzelanfertigungen österreich, custom 3d parts österreich, individuelle 3d-teile oberösterreich, maßanfertigungen österreich, 3d-druck unikate oberösterreich, spezialanfertigungen 3d-druck, personalisierte 3d-objekte, millimetergenaue fertigung"
        path="/einzelanfertigungen"
        breadcrumbs={[
          {name: "Home", url: "/"},
          {name: "Einzelanfertigungen", url: "/einzelanfertigungen"}
        ]}
        preloadResources={[
          {href: "/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png", as: "image", type: "image/png"}
        ]}
      />
      <ServiceSchema 
        serviceName="3D-Druck Einzelanfertigungen"
        description="Individuelle 3D-Druck Einzelanfertigungen nach Maß. Von Ersatzteilen über personalisierte Geschenke bis zu Funktionsprototypen - wir verwirklichen Ihre einzigartigen Projekte mit höchster Präzision."
        serviceType="Service"
        offers={{
          price: "15.00",
          priceCurrency: "EUR",
          description: "Einzelanfertigungen ab €15, individuell kalkuliert nach Projekt"
        }}
      />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "Einzelanfertigungen", url: "/einzelanfertigungen"}
      ]} />
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-tr from-background via-primary/5 to-accent/10 relative overflow-hidden">
          {/* Creative Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-16 left-16 w-32 h-32 border-2 border-primary rounded-lg rotate-12 animate-pulse"></div>
            <div className="absolute top-32 right-32 w-24 h-24 border-2 border-accent rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-32 left-32 w-28 h-28 border-2 border-primary rounded-lg -rotate-12 animate-pulse delay-700"></div>
            <div className="absolute bottom-16 right-16 w-20 h-20 border-2 border-accent rounded-full animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-8 hover-scale">
                <Sparkles className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
                Einzelanfertigungen
                <span className="block text-2xl lg:text-3xl mt-2 text-primary font-normal">Ihre Idee. Unser 3D-Druck. Perfekt umgesetzt.</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
                Von der ersten Skizze bis zum fertigen Unikat - wir verwirklichen Ihre individuellen 
                3D-Druck Projekte mit höchster Präzision und Kreativität.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero" className="hover-scale" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Projekt besprechen <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Was sind Einzelanfertigungen */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Individuelle 3D-Druck Lösungen</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Jedes Projekt ist einzigartig - genau wie unsere maßgeschneiderten 3D-Druck Lösungen
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Vom Konzept zur Realität</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-lg flex-shrink-0">
                        <Lightbulb className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Ideenentwicklung</h4>
                        <p className="text-muted-foreground">Gemeinsam entwickeln wir aus Ihrer Idee ein realisierbares 3D-Druck Konzept mit allen technischen Details.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-lg flex-shrink-0">
                        <Target className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Präzise Umsetzung</h4>
                        <p className="text-muted-foreground">Millimetergenaue Fertigung nach Ihren exakten Vorgaben mit modernster FDM 3D-Druck Technologie.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-lg flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Qualitätskontrolle</h4>
                        <p className="text-muted-foreground">Jede Einzelanfertigung wird sorgfältig geprüft und entspricht höchsten Qualitätsstandards.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-card p-8 rounded-2xl">
                  <div className="text-center">
                    <Sparkles className="h-24 w-24 text-primary mx-auto mb-6" />
                    <h4 className="text-xl font-bold mb-4">Unbegrenzte Möglichkeiten</h4>
                    <p className="text-muted-foreground mb-6">
                      Mit 3D-Druck sind auch komplexeste Geometrien und Hohlräume möglich, 
                      die mit traditionellen Fertigungsmethoden undenkbar wären.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-background/50 p-3 rounded-lg">
                        <div className="font-semibold">Komplexität</div>
                        <div className="text-primary">Unlimited</div>
                      </div>
                      <div className="bg-background/50 p-3 rounded-lg">
                        <div className="font-semibold">Personalisierung</div>
                        <div className="text-primary">100%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Anwendungsbereiche */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Anwendungsbereiche</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Von praktischen Alltagshelfern bis zu künstlerischen Unikaten - die Einsatzmöglichkeiten sind grenzenlos
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Wrench className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Ersatzteile & Reparaturen</CardTitle>
                    <CardDescription>Wenn das Original nicht mehr verfügbar ist</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Defekte Haushaltsgeräte-Teile</li>
                      <li>• Oldtimer-Ersatzteile</li>
                      <li>• Spielzeug-Reparaturen</li>
                      <li>• Elektronik-Gehäuse</li>
                      <li>• Vintage-Artikel Restauration</li>
                    </ul>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <div className="text-sm font-medium text-primary">Typische Lieferzeit: 3-7 Tage</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Users className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Personalisierte Geschenke</CardTitle>
                    <CardDescription>Einzigartige Präsente mit persönlicher Note</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Individueller Schmuck</li>
                      <li>• Personalisierte Deko-Objekte</li>
                      <li>• Custom Smartphone-Hüllen</li>
                      <li>• Miniatur-Figuren nach Foto</li>
                      <li>• Gravierte Trophäen</li>
                    </ul>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <div className="text-sm font-medium text-primary">Typische Lieferzeit: 5-10 Tage</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Target className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Funktionale Hilfsmittel</CardTitle>
                    <CardDescription>Praktische Lösungen für den Alltag</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Organizationshilfen</li>
                      <li>• Barrierefreie Hilfsmittel</li>
                      <li>• Küchenhelfer nach Maß</li>
                      <li>• Spezialwerkzeuge</li>
                      <li>• Ergonomische Griffe</li>
                    </ul>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <div className="text-sm font-medium text-primary">Typische Lieferzeit: 2-5 Tage</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Lightbulb className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Prototypen & Entwicklung</CardTitle>
                    <CardDescription>Produktentwicklung beschleunigen</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Funktionsprototypen</li>
                      <li>• Design-Validierung</li>
                      <li>• Passgenauigkeitstests</li>
                      <li>• Konzept-Modelle</li>
                      <li>• Iterative Optimierung</li>
                    </ul>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <div className="text-sm font-medium text-primary">Typische Lieferzeit: 1-3 Tage</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Sparkles className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Kunst & Design</CardTitle>
                    <CardDescription>Kreative Projekte verwirklichen</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Skulpturen & Kunst-Objekte</li>
                      <li>• Architektur-Modelle</li>
                      <li>• Designstudien</li>
                      <li>• Ausstellungsstücke</li>
                      <li>• Künstlerische Unikate</li>
                    </ul>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <div className="text-sm font-medium text-primary">Typische Lieferzeit: 5-14 Tage</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Clock className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Express-Lösungen</CardTitle>
                    <CardDescription>Wenn es schnell gehen muss</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 24h Express-Service</li>
                      <li>• Notfall-Ersatzteile</li>
                      <li>• Last-Minute Geschenke</li>
                      <li>• Eilige Prototypen</li>
                      <li>• Produktions-Notfälle</li>
                    </ul>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <div className="text-sm font-medium text-primary">Express: 24-48 Stunden</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Ablauf Einzelanfertigung */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">So funktioniert Ihre Einzelanfertigung</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Einfacher Prozess von der ersten Idee bis zum fertigen Unikat
                </p>
              </div>

              <div className="bg-gradient-card p-8 lg:p-12 rounded-2xl">
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="text-center">
                    <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">1</span>
                    </div>
                    <h4 className="font-semibold mb-3">Anfrage & Briefing</h4>
                    <p className="text-sm text-muted-foreground">
                      Beschreiben Sie Ihre Idee, senden Sie Skizzen, Fotos oder bestehende CAD-Dateien
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">2</span>
                    </div>
                    <h4 className="font-semibold mb-3">Beratung & Konzept</h4>
                    <p className="text-sm text-muted-foreground">
                      Kostenlose Machbarkeitsprüfung und Optimierungsvorschläge für beste Ergebnisse
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">3</span>
                    </div>
                    <h4 className="font-semibold mb-3">3D-Modellierung</h4>
                    <p className="text-sm text-muted-foreground">
                      Professionelle CAD-Erstellung oder Optimierung bestehender Dateien für 3D-Druck
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">4</span>
                    </div>
                    <h4 className="font-semibold mb-3">Fertigung</h4>
                    <p className="text-sm text-muted-foreground">
                      Präziser FDM 3D-Druck mit ausgewähltem Material und Nachbearbeitung
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">5</span>
                    </div>
                    <h4 className="font-semibold mb-3">Lieferung</h4>
                    <p className="text-sm text-muted-foreground">
                      Sicherer Versand österreichweit oder Abholung in unserer Werkstatt
                    </p>
                  </div>
                </div>
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
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Verwirklichen Sie Ihre individuelle Idee!
              </h2>
              <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
                Egal wie ausgefallen oder komplex Ihr Projekt ist - wir finden eine Lösung! 
                Kontaktieren Sie uns für ein kostenloses Erstgespräch und individuelles Angebot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero" className="hover-scale" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Kostenloses Erstgespräch
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <Contact />
      </main>

      <AIChatWidget />
      <Footer />
    </>
  );
};

export default Einzelanfertigungen;