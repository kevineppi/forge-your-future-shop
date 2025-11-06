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
import { Box, Zap, DollarSign, Wrench, CheckCircle, ArrowRight } from "lucide-react";

const FdmDruck = () => {
  return (
    <>
      <SEOHead 
        title="FDM 3D-Druck: Kosteneffizient & präzise bis 0,1mm | ekdruck e.U."
        description="FDM 3D-Druck aus Österreich – beste Kosten-Nutzen-Balance für technische Teile. Große Materialauswahl, robust, präzise. Jetzt Projekt anfragen!"
        keywords="fdm 3d-druck österreich, fused deposition modeling oberösterreich, fdm verfahren österreich, 3d-druck fdm oberösterreich, fdm drucker service österreich, schichtauflösung 0.1mm, thermoplastisches filament, material-extrusion"
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
        serviceName="FDM 3D-Druck Service"
        description="Professioneller FDM (Fused Deposition Modeling) 3D-Druck Service für Prototypen, Funktionsteile und Kleinserien in ganz Österreich. Präzise Fertigung mit Schichtauflösungen bis 0,1mm."
        serviceType="Service"
        offers={{
          price: "5.00",
          priceCurrency: "EUR",
          description: "FDM 3D-Druck ab €5, abhängig von Größe und Material"
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
          {/* Decorative Elements */}
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
                FDM 3D-Druck Service
                <span className="block text-2xl lg:text-3xl mt-2 text-primary font-normal">für ganz Österreich</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
                Präzise, kostengünstige und vielseitige FDM 3D-Druck Lösungen mit höchster Qualität. 
                Von Prototypen bis zur Serienfertigung - österreichweit verfügbar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero" className="hover-scale animate-fade-in" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Kostenloses Angebot <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
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
                  Fused Deposition Modeling (FDM) ist das vielseitigste und kostengünstigste 3D-Druckverfahren 
                  für Prototypen, Funktionsteile und Kleinserien.
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
                        <h4 className="font-semibold mb-2">Fertiges Bauteil</h4>
                        <p className="text-muted-foreground">Nach dem Abkühlen entstehen stabile, funktionsfähige 3D-Objekte.</p>
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
                      für perfekte Oberflächenqualität.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-background/50 p-3 rounded-lg">
                        <div className="font-semibold">Min. Schichthöhe</div>
                        <div className="text-primary">0,1 mm</div>
                      </div>
                      <div className="bg-background/50 p-3 rounded-lg">
                        <div className="font-semibold">Max. Bauteilgröße</div>
                        <div className="text-primary">30×30×40 cm</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FDM Vorteile */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Warum FDM 3D-Druck?</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Das FDM-Verfahren bietet unschlagbare Vorteile für vielseitige Anwendungen
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Kostengünstig</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Niedrige Materialkosten und effiziente Produktion machen FDM zum preiswertesten 3D-Druckverfahren.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Vielseitig</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Große Auswahl an Materialien: PLA, PETG, ABS, flexible Filamente und technische Werkstoffe.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Schnell</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Kurze Rüstzeiten und parallele Fertigung mehrerer Teile für schnelle Prototypenerstellung. 
                      Ideal für <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Rapid Prototyping</a>.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Bewährt</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Ausgereiftes Verfahren mit vorhersagbaren Ergebnissen für zuverlässige Qualität.
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
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">FDM 3D-Druck Materialien</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Hochwertige österreichische Filamente für jede Anwendung
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl">PLA & PLA+</CardTitle>
                    <CardDescription>Einfach, umweltfreundlich, präzise</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Biologisch abbaubar</li>
                      <li>• Niedrige Drucktemperatur</li>
                      <li>• Hohe Detailgenauigkeit</li>
                      <li>• Ideal für Prototypen</li>
                      <li>• Alle Farben verfügbar</li>
                    </ul>
                    <Badge className="mt-4">Bestseller</Badge>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl">PETG</CardTitle>
                    <CardDescription>Chemikalienbeständig, transparent</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Lebensmittelecht</li>
                      <li>• Chemisch beständig</li>
                      <li>• Transparent möglich</li>
                      <li>• Schlagzäh</li>
                      <li>• Für Funktionsteile</li>
                    </ul>
                    <Badge className="mt-4" variant="secondary">Technisch</Badge>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl">ABS</CardTitle>
                    <CardDescription>Robust, hitzebeständig, nachbearbeitbar</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Hitzebeständig bis 80°C</li>
                      <li>• Schlagfest</li>
                      <li>• Aceton-glättbar</li>
                      <li>• Für Gehäuse</li>
                      <li>• Langlebig</li>
                    </ul>
                    <Badge className="mt-4" variant="outline">Industrial</Badge>
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
                Ihr FDM 3D-Druck Projekt startet hier
              </h2>
              <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
                Kostenlose Beratung, faire Preise und schnelle Lieferung österreichweit. 
                Lassen Sie uns Ihre Ideen in die Realität umsetzen!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero" className="hover-scale" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Kostenloses Angebot anfordern
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