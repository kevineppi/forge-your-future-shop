import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ReviewsWidget from "@/components/ReviewsWidget";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Box, Clock, MapPin, CheckCircle } from "lucide-react";

const Steiermark3DDruck = () => {
  useEffect(() => {
    document.title = "3D-Druck Steiermark | FDM 3D-Druck Service | ekdruck e.U.";
  }, []);

  return (
    <>
      <SEOHead 
        title="3D-Druck Steiermark | FDM 3D-Druck Service | ekdruck e.U."
        description="FDM 3D-Druck Service für Graz, Leoben & ganz Steiermark. Rapid Prototyping, Express-Service, nachhaltige Materialien aus AT. Jetzt anfragen!"
        keywords="3d-druck steiermark, 3d druck graz, fdm 3d-druck steiermark, rapid prototyping steiermark"
        path="/3d-druck-steiermark"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "3D-Druck Steiermark", url: "/3d-druck-steiermark"}
      ]} />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      <StructuredData type="faq" data={{
        faqs: [
          {
            q: "Liefern Sie 3D-gedruckte Teile in die Steiermark?",
            a: "Ja, wir liefern schnell und zuverlässig in die gesamte Steiermark. Express-Service innerhalb von 24-48 Stunden nach Graz und Umgebung verfügbar."
          },
          {
            q: "Welche 3D-Druck Materialien bieten Sie an?",
            a: "Wir bieten PLA, PETG, ABS, TPU und Nylon aus österreichischer Produktion. Alle Materialien sind für verschiedene Anwendungen optimiert."
          }
        ]
      }} />
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold">Steiermark</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                3D-Druck Service <span className="text-gradient">Steiermark</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professioneller FDM 3D-Druck für Graz, Leoben, Kapfenberg und ganz Steiermark. Schnelle Lieferung, nachhaltige Materialien aus Österreich.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Jetzt Angebot erhalten
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/kostenrechner">Kosten berechnen</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Unsere <span className="text-gradient">Services</span> für Steiermark
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="gradient-card p-6 rounded-xl">
                <Box className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">FDM 3D-Druck</h3>
                <p className="text-muted-foreground mb-4">
                  Professioneller FDM 3D-Druck für Prototypen, Einzelteile und Kleinserien in der Steiermark.
                </p>
                <a href="/fdm-3d-druck" className="text-primary hover:underline">Mehr erfahren →</a>
              </div>
              
              <div className="gradient-card p-6 rounded-xl">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Express Service</h3>
                <p className="text-muted-foreground mb-4">
                  24-48h Lieferung nach Graz und in die gesamte Steiermark.
                </p>
                <a href="/rapid-prototyping" className="text-primary hover:underline">Mehr erfahren →</a>
              </div>
              
              <div className="gradient-card p-6 rounded-xl">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Nachhaltige Materialien</h3>
                <p className="text-muted-foreground mb-4">
                  Hochwertige Filamente aus österreichischer Produktion.
                </p>
                <a href="/3d-druck-materialien" className="text-primary hover:underline">Mehr erfahren →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">
                Anwendungsbereiche für <span className="text-gradient">3D-Druck in der Steiermark</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🏭 Industrie & Maschinenbau</h3>
                  <p className="text-muted-foreground">Funktionale Prototypen, Ersatzteile und Betriebsmittel für steirische Industrieunternehmen</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🏗️ Architektur & Bau</h3>
                  <p className="text-muted-foreground">Architekturmodelle und Präsentationsmodelle für Grazer Architekten</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🎨 Design & Kunst</h3>
                  <p className="text-muted-foreground">Kunstobjekte und Designprototypen für Kreativschaffende</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🔬 Forschung & Entwicklung</h3>
                  <p className="text-muted-foreground">Rapid Prototyping für Universitäten und Forschungseinrichtungen</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">
                Warum ekdruck für <span className="text-gradient">Steiermark</span>?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Schnelle Lieferung</h3>
                    <p className="text-muted-foreground">Express-Versand nach Graz und ganz Steiermark</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Österreichische Qualität</h3>
                    <p className="text-muted-foreground">Hochwertige Materialien aus regionaler Produktion</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Individuelle Beratung</h3>
                    <p className="text-muted-foreground">Persönlicher Support für Ihr 3D-Druck-Projekt</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Faire Preise</h3>
                    <p className="text-muted-foreground">Transparente Kalkulation ohne versteckte Kosten</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Materials Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">
                <span className="text-gradient">Materialien</span> für Steiermark
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">PLA - Biokunststoff</h3>
                  <p className="text-muted-foreground mb-2">Nachhaltig, vielseitig einsetzbar, ideal für Prototypen und Designmodelle</p>
                  <p className="text-sm text-primary">Ab sofort verfügbar</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">PETG - Robust</h3>
                  <p className="text-muted-foreground mb-2">Schlagfest, chemikalienbeständig, für funktionale Bauteile</p>
                  <p className="text-sm text-primary">Express-Service verfügbar</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">ABS - Technisch</h3>
                  <p className="text-muted-foreground mb-2">Hitzebeständig, stabil, für technische Anwendungen</p>
                  <p className="text-sm text-primary">Industriequalität</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">PA12 Nylon - Premium</h3>
                  <p className="text-muted-foreground mb-2">Höchste Festigkeit, flexibel, für anspruchsvolle Anwendungen</p>
                  <p className="text-sm text-primary">Auf Anfrage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">
                So einfach geht <span className="text-gradient">3D-Druck</span> in der Steiermark
              </h2>
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Anfrage senden</h3>
                    <p className="text-muted-foreground">Senden Sie uns Ihre CAD-Datei oder nutzen Sie unseren Kostenrechner</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Angebot erhalten</h3>
                    <p className="text-muted-foreground">Innerhalb von 24 Stunden erhalten Sie ein detailliertes Angebot</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Produktion</h3>
                    <p className="text-muted-foreground">Nach Ihrer Freigabe starten wir sofort mit dem 3D-Druck</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">4</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Lieferung in die Steiermark</h3>
                    <p className="text-muted-foreground">Express-Versand innerhalb von 24-48h nach Graz und Umgebung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">
                Häufig gestellte <span className="text-gradient">Fragen</span>
              </h2>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Wie schnell erfolgt die Lieferung in die Steiermark?</h3>
                  <p className="text-muted-foreground">Mit unserem Express-Service liefern wir innerhalb von 24-48 Stunden nach Graz und in die gesamte Steiermark. Standard-Lieferungen dauern 2-3 Werktage.</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Welche Dateiformate werden akzeptiert?</h3>
                  <p className="text-muted-foreground">Wir akzeptieren STL, OBJ, STEP, IGES und viele weitere gängige CAD-Formate.</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Wie werden die Kosten berechnet?</h3>
                  <p className="text-muted-foreground">Die Kosten hängen von Material, Größe, Komplexität und Druckdauer ab. Nutzen Sie unseren Online-Kostenrechner für eine sofortige Schätzung.</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Bieten Sie auch Nachbearbeitung an?</h3>
                  <p className="text-muted-foreground">Ja, wir bieten Schleifen, Lackieren, Glattieren und weitere Finishing-Optionen an.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ReviewsWidget />

        {/* Contact CTA */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center gradient-card p-12 rounded-2xl">
              <h2 className="text-4xl font-bold mb-6">
                Starten Sie Ihr <span className="text-gradient">3D-Druck Projekt</span> in der Steiermark
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Kontaktieren Sie uns noch heute für ein kostenloses Angebot
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+436765517197" className="text-lg hover:text-primary transition-colors">
                    +43 676 5517197
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:office@ekdruck.at" className="text-lg hover:text-primary transition-colors">
                    office@ekdruck.at
                  </a>
                </div>
              </div>
              <Button size="lg" asChild>
                <a href="/#contact">Kontaktformular</a>
              </Button>
            </div>
          </div>
        </section>

        <AIChatWidget />
        <Footer />
      </div>
    </>
  );
};

export default Steiermark3DDruck;