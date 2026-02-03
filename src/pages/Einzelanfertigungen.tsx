import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import Contact from "@/components/Contact";
import AIChatWidget from "@/components/AIChatWidget";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, Users, Lightbulb, Target, CheckCircle, ArrowRight, Clock, Home, Palette } from "lucide-react";

const Einzelanfertigungen = () => {
  return (
    <>
      <SEOHead 
        title="Individuelle 3D-Druck Objekte | Modelle & Dekoration | ekdruck.at"
        description="Individuelle Anschauungsmodelle, Dekorationsobjekte und Kunstgegenstände nach Ihren Wünschen. Maßanfertigung aus Oberösterreich."
        keywords="3d-druck einzelanfertigungen, individuelle modelle, maßanfertigung 3d-druck, dekorationsobjekte, kunstgegenstände 3d-druck"
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
        serviceName="Individuelle 3D-Druck Objekte"
        description="Individuelle Anschauungsmodelle, Dekorationsobjekte und Kunstgegenstände nach Ihren Wünschen gefertigt in Oberösterreich."
        serviceType="Service"
        offers={{
          price: "20.00",
          priceCurrency: "EUR",
          description: "Einzelanfertigungen ab €20, individuell kalkuliert nach Projekt"
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
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-16 left-16 w-32 h-32 border-2 border-primary rounded-lg rotate-12 animate-pulse"></div>
            <div className="absolute top-32 right-32 w-24 h-24 border-2 border-accent rounded-full animate-pulse delay-300"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-8 hover-scale">
                <Sparkles className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
                Individuelle 3D-Objekte
                <span className="block text-2xl lg:text-3xl mt-2 text-primary font-normal">Modelle, Dekoration & Kunst nach Maß</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
                Von der Idee zum fertigen Unikat – wir verwirklichen Ihre individuellen 
                Projekte für Anschauungszwecke, Dekoration und Kunst.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero" className="hover-scale" asChild>
                  <Link to="/kontakt">Projekt besprechen <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <LegalDisclaimer />
            </div>
          </div>
        </section>

        {/* Was wir fertigen */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Was wir für Sie fertigen</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Individuelle 3D-Druck Objekte für visuelle und dekorative Anwendungen
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
                        <p className="text-muted-foreground">Gemeinsam entwickeln wir aus Ihrer Idee ein realisierbares Konzept für Anschauungszwecke.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-lg flex-shrink-0">
                        <Target className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Präzise Umsetzung</h4>
                        <p className="text-muted-foreground">Millimetergenaue Fertigung mit modernster FDM 3D-Druck Technologie.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-lg flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Qualitätskontrolle</h4>
                        <p className="text-muted-foreground">Jedes Objekt wird sorgfältig geprüft und entspricht höchsten Qualitätsstandards.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-card p-8 rounded-2xl">
                  <div className="text-center">
                    <Sparkles className="h-24 w-24 text-primary mx-auto mb-6" />
                    <h4 className="text-xl font-bold mb-4">Kreative Möglichkeiten</h4>
                    <p className="text-muted-foreground mb-6">
                      Mit 3D-Druck sind auch komplexeste Geometrien möglich – 
                      ideal für einzigartige Dekorations- und Kunstobjekte.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-background/50 p-3 rounded-lg">
                        <div className="font-semibold">20+ Farben</div>
                        <div className="text-primary">verfügbar</div>
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
                  Individuelle Objekte für Anschauung, Dekoration und Kunst
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Home className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Architekturmodelle</CardTitle>
                    <CardDescription>Präsentationsmodelle für Architekten</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Wettbewerbsmodelle</li>
                      <li>• Konzeptstudien</li>
                      <li>• Städtebauliche Modelle</li>
                      <li>• Innenraummodelle</li>
                      <li>• Fassadendetails</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Palette className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Dekorationsobjekte</CardTitle>
                    <CardDescription>Individuelle Dekorationen</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Wohnaccessoires</li>
                      <li>• Schaufensterdeko</li>
                      <li>• Eventdekorationen</li>
                      <li>• Messeexponate</li>
                      <li>• Saisonale Deko</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Sparkles className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Kunst & Design</CardTitle>
                    <CardDescription>Kunstgegenstände und Unikate</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Skulpturen</li>
                      <li>• Kunstinstallationen</li>
                      <li>• Designstudien</li>
                      <li>• Ausstellungsstücke</li>
                      <li>• Künstlerische Unikate</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Users className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Personalisierte Geschenke</CardTitle>
                    <CardDescription>Einzigartige Präsente</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Personalisierte Deko</li>
                      <li>• Individuelle Schmuckstücke</li>
                      <li>• Gravierte Objekte</li>
                      <li>• Erinnerungsstücke</li>
                      <li>• Besondere Anlässe</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Target className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Anschauungsmodelle</CardTitle>
                    <CardDescription>Für Präsentation und Visualisierung</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Produktvisualisierungen</li>
                      <li>• Konzeptmodelle</li>
                      <li>• Lehrmaterial</li>
                      <li>• Präsentationsobjekte</li>
                      <li>• Maßstabsmodelle</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Clock className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Express-Fertigung</CardTitle>
                    <CardDescription>Schnelle Umsetzung</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 24h Express-Service</li>
                      <li>• Dringende Messetermine</li>
                      <li>• Last-Minute Geschenke</li>
                      <li>• Eilige Präsentationen</li>
                      <li>• Kurzfristige Events</li>
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
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ihr individuelles Projekt startet hier
              </h2>
              <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
                Kostenlose Beratung für Anschauungsmodelle, Dekorationsobjekte und Kunstgegenstände. 
                Wir prüfen gerne die Machbarkeit Ihres Projekts!
              </p>
              <LegalDisclaimer variant="compact" className="max-w-2xl mx-auto mb-8" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero" className="hover-scale" asChild>
                  <Link to="/kontakt">Anfrage stellen <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="hover-scale" asChild>
                  <Link to="/kontakt">Beratung anfordern</Link>
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
