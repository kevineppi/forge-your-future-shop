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
import { Home, Palette, Gift, CheckCircle, ArrowRight, Sparkles, Box } from "lucide-react";

const ModellbauDekoration = () => {
  return (
    <>
      <SEOHead 
        title="3D-Druck Modellbau & Deko-Objekte | Individuell ab €15 | ekdruck"
        description="Architekturmodelle, Deko-Objekte & personalisierte Geschenke aus dem 3D-Drucker. Österreichisches Filament, nachhaltig. Ihr Design – wir drucken es. Ab €15 →"
        keywords="3d-druck modellbau, dekoration 3d-druck, personalisierte geschenke 3d-druck, wohnaccessoires, architekturmodelle modellbau"
        path="/modellbau-dekoration"
        breadcrumbs={[
          {name: "Home", url: "/"},
          {name: "Modellbau & Dekoration", url: "/modellbau-dekoration"}
        ]}
        preloadResources={[
          {href: "/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png", as: "image", type: "image/png"}
        ]}
      />
      <ServiceSchema 
        serviceName="3D-Druck Modellbau & Dekoration"
        description="Individuelle 3D-gedruckte Architekturmodelle, Dekorationen und personalisierte Geschenke aus nachhaltigen Materialien."
        serviceType="Service"
        offers={{
          price: "20.00",
          priceCurrency: "EUR",
          description: "3D-Druck ab 20€, Preis abhängig von Größe und Komplexität"
        }}
      />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "Modellbau & Dekoration", url: "/modellbau-dekoration"}
      ]} />
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-bl from-background via-muted/20 to-accent/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-16 h-16 bg-primary transform rotate-45"></div>
            <div className="absolute top-40 right-40 w-12 h-12 bg-accent transform rotate-45"></div>
            <div className="absolute bottom-40 left-40 w-20 h-20 bg-primary transform rotate-45"></div>
            <div className="absolute bottom-20 right-20 w-14 h-14 bg-accent transform rotate-45"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-8 hover-scale">
                <Home className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
                3D-Druck für Modellbau & Dekoration
                <span className="block text-2xl lg:text-3xl mt-2 text-primary font-normal">Individuelle Designs aus Österreich</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
                Architekturmodelle, Dekorationen und personalisierte Geschenke – 
                gefertigt aus nachhaltigen Materialien mit höchster Präzision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero" className="hover-scale" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Projekt anfragen <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Vorteile */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Warum 3D-Druck für Ihre Projekte?</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Individuelle Designs, die mit traditionellen Methoden nicht möglich wären
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Einzigartige Designs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Jedes Stück ist ein Unikat – genau nach Ihren Vorstellungen gefertigt.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Alle Farben & Formen</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Große Farbauswahl und komplexe Geometrien sind kein Problem.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <Box className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Nachhaltige Materialien</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Umweltfreundliche Filamente aus österreichischer Produktion.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-card">
                  <CardHeader>
                    <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Persönliche Geschenke</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Personalisierte Unikate für jeden Anlass und jedes Budget.
                    </p>
                  </CardContent>
                </Card>
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
                  Vom Architekturmodell bis zum personalisierten Geschenk
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Home className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Architekturmodelle</CardTitle>
                    <CardDescription>Präzise Modelle für Präsentationen</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Gebäudemodelle in jedem Maßstab</li>
                      <li>• Detailgetreue Fassaden</li>
                      <li>• Städtebauliche Modelle</li>
                      <li>• Innenraummodelle</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Palette className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Dekoration & Wohnaccessoires</CardTitle>
                    <CardDescription>Individuelle Designs für Ihr Zuhause</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Designer-Vasen und Übertöpfe</li>
                      <li>• Lampen und Leuchten</li>
                      <li>• Wanddekoration</li>
                      <li>• Kerzenständer und Accessoires</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Gift className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Geschenke & Personalisierung</CardTitle>
                    <CardDescription>Einzigartige Unikate für besondere Anlässe</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Personalisierte Namensschilder</li>
                      <li>• Individuelle Figuren</li>
                      <li>• Schmuck und Accessoires</li>
                      <li>• Foto-Lithophane</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Sparkles className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Kunst & Design</CardTitle>
                    <CardDescription>Kreative Projekte ohne Grenzen</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Skulpturen und Kunstobjekte</li>
                      <li>• Design-Studien</li>
                      <li>• Ausstellungsstücke</li>
                      <li>• Kreative Installationen</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <Box className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Miniaturmodelle & Dioramen</CardTitle>
                    <CardDescription>Für Sammler und Modellbauer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Modellbahn-Zubehör</li>
                      <li>• Dioramen-Elemente</li>
                      <li>• Tabletop-Gaming Figuren</li>
                      <li>• Sammler-Modelle</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CheckCircle className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">Hobby & Kreativprojekte</CardTitle>
                    <CardDescription>Für alle DIY-Enthusiasten</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Cosplay-Accessoires</li>
                      <li>• Bastel-Zubehör</li>
                      <li>• Spielzeug und Puzzles</li>
                      <li>• Kreative Projekte aller Art</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Ablauf */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">So einfach geht's</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Von der Idee zum fertigen Objekt in wenigen Schritten
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Anfrage senden</h4>
                  <p className="text-sm text-muted-foreground">
                    Beschreiben Sie Ihr Projekt oder senden Sie uns Ihre 3D-Datei.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Beratung</h4>
                  <p className="text-sm text-muted-foreground">
                    Wir beraten Sie zu Material, Farbe und optimaler Umsetzung.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Fertigung</h4>
                  <p className="text-sm text-muted-foreground">
                    Ihr Objekt wird mit höchster Präzision 3D-gedruckt.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">4</span>
                  </div>
                  <h4 className="font-semibold mb-2">Lieferung</h4>
                  <p className="text-sm text-muted-foreground">
                    Express-Versand österreichweit in 24-48 Stunden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Bereit für Ihr Projekt?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Kontaktieren Sie uns für eine kostenlose Beratung zu Ihrem Modellbau- oder Dekorationsprojekt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Kostenlose Beratung
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.location.href = '/kontakt'}>
                  Anfrage stellen
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <Contact />
      </main>
      
      <AIChatWidget />
      <Footer />
    </>
  );
};

export default ModellbauDekoration;