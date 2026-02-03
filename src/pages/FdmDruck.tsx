import { Link } from "react-router-dom";
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
import { Badge } from "@/components/ui/badge";
import { Box, Zap, DollarSign, Wrench, CheckCircle, ArrowRight, Palette, Home } from "lucide-react";

const FdmDruck = () => {
  return (
    <>
      <SEOHead 
        title="FDM 3D-Druck für Modellbau & Dekoration | ekdruck.at"
        description="FDM 3D-Druck für Anschauungsmodelle, Architekturmodelle und Dekorationsobjekte aus Oberösterreich. Nachhaltige Materialien, präzise Fertigung."
        keywords="fdm 3d-druck österreich, 3d-druck modellbau, architekturmodelle 3d-druck, dekoration 3d-druck, anschauungsmodelle"
        path="/fdm-3d-druck"
        breadcrumbs={[
          {name: "Home", url: "/"},
          {name: "FDM 3D-Druck", url: "/fdm-3d-druck"}
        ]}
        preloadResources={[
          {href: "/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png", as: "image", type: "image/png"}
        ]}
      />
      <ServiceSchema 
        serviceName="FDM 3D-Druck für Modellbau & Dekoration"
        description="Professioneller FDM 3D-Druck Service für Anschauungsmodelle, Architekturmodelle, Dekorationsobjekte und Kunstgegenstände in Österreich."
        serviceType="Service"
        offers={{
          price: "15.00",
          priceCurrency: "EUR",
          description: "FDM 3D-Druck ab €15, abhängig von Größe und Material"
        }}
      />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "FDM 3D-Druck", url: "/fdm-3d-druck"}
      ]} />
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-8 hover-scale">
                <Box className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground animate-fade-in">
                FDM 3D-Druck
                <span className="block text-2xl lg:text-3xl mt-2 text-primary font-normal">für Modellbau, Dekoration & Kunst</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
                Präzise Anschauungsmodelle, hochwertige Dekorationsobjekte und individuelle Kunstgegenstände 
                aus nachhaltigen Materialien – gefertigt in Oberösterreich.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero" className="hover-scale animate-fade-in" asChild>
                  <Link to="/kontakt">Anfrage stellen <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="hover-scale animate-fade-in" asChild>
                  <Link to="/kontakt">Beratung anfordern</Link>
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

        {/* Was ist FDM? */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Was ist FDM 3D-Druck?</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Fused Deposition Modeling (FDM) ist ein vielseitiges 3D-Druckverfahren, 
                  ideal für Anschauungsmodelle, Dekorationen und künstlerische Objekte.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-2xl font-bold mb-6">So funktioniert FDM 3D-Druck</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                        <div className="w-6 h-6 bg-primary rounded text-white flex items-center justify-center text-sm font-bold">1</div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Material-Extrusion</h4>
                        <p className="text-muted-foreground">Thermoplastisches Filament wird erhitzt und durch eine Düse extrudiert.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                        <div className="w-6 h-6 bg-primary rounded text-white flex items-center justify-center text-sm font-bold">2</div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Schicht für Schicht</h4>
                        <p className="text-muted-foreground">Das Material wird präzise Schicht für Schicht aufgetragen und verbindet sich.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                        <div className="w-6 h-6 bg-primary rounded text-white flex items-center justify-center text-sm font-bold">3</div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Fertiges Objekt</h4>
                        <p className="text-muted-foreground">Nach dem Abkühlen entstehen hochwertige, detailreiche 3D-Objekte.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-card p-8 rounded-2xl">
                  <div className="text-center">
                    <Box className="h-24 w-24 text-primary mx-auto mb-6" />
                    <h4 className="text-xl font-bold mb-4">Hochpräzise FDM-Drucker</h4>
                    <p className="text-muted-foreground mb-6">
                      Unsere professionellen FDM 3D-Drucker erreichen Schichtauflösungen bis 0,1mm 
                      für perfekte Oberflächenqualität bei Modellen und Dekorationen.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-background/50 p-3 rounded-lg">
                        <div className="font-semibold">Min. Schichthöhe</div>
                        <div className="text-primary">0,1 mm</div>
                      </div>
                      <div className="bg-background/50 p-3 rounded-lg">
                        <div className="font-semibold">Max. Objektgröße</div>
                        <div className="text-primary">30×30×40 cm</div>
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
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Unsere Anwendungsbereiche</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  FDM 3D-Druck für visuelle und dekorative Anwendungen
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <Home className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Architekturmodelle</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Maßstabsgetreue Architekturmodelle für Präsentationen, Wettbewerbe und Visualisierungen.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Dekorationsobjekte</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Individuelle Dekorationen für Wohnräume, Messen, Events und Schaufenster.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Kunstgegenstände</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Skulpturen, Kunstinstallationen und einzigartige Objekte für Künstler und Galerien.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FDM Materialien */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Materialien für Modelle & Dekoration</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Hochwertige Filamente für visuelle und dekorative Anwendungen
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl">PLA & PLA+</CardTitle>
                    <CardDescription>Ideal für Modelle und Dekorationen</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Biologisch abbaubar</li>
                      <li>• Hohe Detailgenauigkeit</li>
                      <li>• Ideal für Architekturmodelle</li>
                      <li>• Über 20 Farben verfügbar</li>
                      <li>• Matt oder glänzend</li>
                    </ul>
                    <Badge className="mt-4">Bestseller</Badge>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl">PETG</CardTitle>
                    <CardDescription>Transparent und wetterfest</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Transparent möglich</li>
                      <li>• UV-beständig</li>
                      <li>• Für Außendekorationen</li>
                      <li>• Schlagzäh</li>
                      <li>• Hochglanz-Optik</li>
                    </ul>
                    <Badge className="mt-4" variant="secondary">Vielseitig</Badge>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl">Spezialfilamente</CardTitle>
                    <CardDescription>Besondere Optik & Haptik</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Holz-Look</li>
                      <li>• Marmor-Optik</li>
                      <li>• Seidenmatt</li>
                      <li>• Glow-in-the-dark</li>
                      <li>• Metallic-Effekte</li>
                    </ul>
                    <Badge className="mt-4" variant="outline">Premium</Badge>
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
                Ihr Projekt für Modellbau oder Dekoration
              </h2>
              <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
                Kostenlose Beratung für Architekturmodelle, Dekorationsobjekte und Kunstgegenstände. 
                Wir prüfen die Machbarkeit Ihres Projekts!
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

export default FdmDruck;
