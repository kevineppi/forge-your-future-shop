import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import StructuredData from "@/components/StructuredData";
import ReviewsWidget from "@/components/ReviewsWidget";
import AIChatWidget from "@/components/AIChatWidget";
import { Button } from "@/components/ui/button";
import { Box, Clock, MapPin, Phone, Mail, CheckCircle } from "lucide-react";

const Graz3DDruck = () => {

  return (
    <>
      <SEOHead 
        title="3D-Druck Graz & Steiermark | FDM Service | ekdruck"
        description="Hochpräziser FDM 3D-Druck für Grazer Industrie & Forschung. Technische Prototypen, Funktionsteile, Engineering-Support. Kostenlose Beratung in Graz!"
        keywords="3d-druck graz, 3d drucker graz, fdm druck graz, rapid prototyping graz, 3d-druck steiermark, prototypen graz"
        path="/3d-druck-graz"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "3D-Druck Graz", url: "/3d-druck-graz"}
      ]} />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      <StructuredData type="faq" />
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold">Graz & Steiermark</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                3D-Druck Service in <span className="text-gradient">Graz</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ihr lokaler Partner für professionellen FDM 3D-Druck in <strong className="text-foreground">Graz</strong> und der Steiermark. 
                Unsere <strong className="text-foreground">Experten</strong> beraten Sie kompetent bei der Material- und Verfahrenswahl. Schnelle Lieferung nach <strong className="text-foreground">Graz</strong>, nachhaltige österreichische Materialien und faire Preise.
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
              Unsere <span className="text-gradient">Services in Graz</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="gradient-card p-6 rounded-xl">
                <Box className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Industrieller 3D-Druck</h3>
                <p className="text-muted-foreground mb-4">
                  Technische Bauteile für Grazer Automotive, Maschinenbau und Zulieferindustrie mit Industrie-Toleranzen.
                </p>
                <a href="/fdm-3d-druck" className="text-primary hover:underline">Mehr erfahren →</a>
              </div>
              
              <div className="gradient-card p-6 rounded-xl">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Gleichtags-Service</h3>
                <p className="text-muted-foreground mb-4">
                  Produktionsnahe <a href="/rapid-prototyping" className="text-primary hover:underline font-semibold">Rapid Manufacturing</a> für Ihre Grazer Werkstatt oder Labor - noch heute verfügbar.
                </p>
                <a href="/rapid-prototyping" className="text-primary hover:underline">Mehr erfahren →</a>
              </div>
              
              <div className="gradient-card p-6 rounded-xl">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Engineering-Support</h3>
                <p className="text-muted-foreground mb-4">
                  Technische Beratung von Ingenieuren für Ingenieure - CAD-Optimierung und DfAM-Prinzipien inklusive.
                </p>
                <a href="/3d-druck-materialien" className="text-primary hover:underline">Mehr erfahren →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">
                Warum ekdruck für <span className="text-gradient">Graz</span>?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Automotive-Spezialist</h3>
                    <p className="text-muted-foreground">Erfahrung mit Magna, AVL und weiteren Grazer Automotive-Größen</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Hochschul-Kooperationen</h3>
                    <p className="text-muted-foreground">Bevorzugter Partner für TU Graz, Med-Uni und FH Joanneum Projekte</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Technische Dokumentation</h3>
                    <p className="text-muted-foreground">Vollständige Prüfprotokolle und Materialdatenblätter für Ihre Zertifizierung</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Projektbasierte Preise</h3>
                    <p className="text-muted-foreground">Spezielle Konditionen für Serienentwicklung und Iterationen in Graz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">
                Anwendungsbereiche für <span className="text-gradient">3D-Druck in Graz</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🚗 Automotive Entwicklung</h3>
                  <p className="text-muted-foreground">Test-Bauteile, Crash-Dummies und Prototypen-Komponenten für Grazer Fahrzeugindustrie</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">⚙️ Maschinenbau & Fertigung</h3>
                  <p className="text-muted-foreground">Betriebsmittel, Spannvorrichtungen und Produktionshilfen für steirische Produktionsstätten</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🔬 Medizintechnik</h3>
                  <p className="text-muted-foreground">Chirurgische Planungsmodelle und Implantate-Prototypen für Med-Uni Graz</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🏗️ Infrastruktur & Bau</h3>
                  <p className="text-muted-foreground">Ingenieurbauwerke, Brückenmodelle und technische Visualisierungen für Grazer Planungsbüros</p>
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
                <span className="text-gradient">Materialien</span> für Ihr Projekt in Graz
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">PLA Engineering-Grade</h3>
                  <p className="text-muted-foreground mb-2">Toughened PLA für technische Anwendungen, bessere Schlagzähigkeit als Standard</p>
                  <p className="text-sm text-primary">Automotive-geeignet</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">PETG Transparent</h3>
                  <p className="text-muted-foreground mb-2">Kristallklar für Sichtfenster, FDA-konform für Lebensmittelkontakt</p>
                  <p className="text-sm text-primary">Med-Tech ready</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">ABS-Plus</h3>
                  <p className="text-muted-foreground mb-2">Verbessertes ABS mit minimaler Verzugs-Neigung für große Bauteile</p>
                  <p className="text-sm text-primary">Produktions-tauglich</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">PA12-GF30</h3>
                  <p className="text-muted-foreground mb-2">Glasfaser-verstärkt für maximale Steifigkeit und Hitzebeständigkeit</p>
                  <p className="text-sm text-primary">Industrie-Standard</p>
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
                So einfach geht <span className="text-gradient">3D-Druck in Graz</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Anfrage senden</h3>
                    <p className="text-muted-foreground">Senden Sie uns Ihre CAD-Datei oder nutzen Sie unseren Kostenrechner für eine erste Schätzung</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Angebot erhalten</h3>
                    <p className="text-muted-foreground">Innerhalb von 24 Stunden erhalten Sie ein detailliertes Angebot mit Preis und Lieferzeit</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Produktion</h3>
                    <p className="text-muted-foreground">Nach Ihrer Freigabe starten wir sofort mit dem 3D-Druck Ihres Projekts</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">4</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Lieferung nach Graz</h3>
                    <p className="text-muted-foreground">Express-Versand innerhalb von 24-48h direkt zu Ihnen nach Graz</p>
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
                Häufig gestellte <span className="text-gradient">Fragen</span> zum 3D-Druck in Graz
              </h2>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Arbeiten Sie mit Grazer Automotive-Firmen?</h3>
                  <p className="text-muted-foreground">Ja! Wir haben Erfahrung mit technischen Anforderungen der Automotive-Branche und liefern mit Dokumentation nach Industriestandards.</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Welche mechanischen Kennwerte erreichen Sie?</h3>
                  <p className="text-muted-foreground">Abhängig vom Material: PLA bis 50 MPa Zugfestigkeit, PETG bis 53 MPa, PA12-GF bis 95 MPa. Datenblätter auf Anfrage.</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Können Sie Funktionsprototypen für Crashtests liefern?</h3>
                  <p className="text-muted-foreground">Ja, wir fertigen Prototypen für nicht-destruktive Tests. Für Crashtests empfehlen wir unsere hochfesten PA-Materialien mit definiertem Bruchverhalten.</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Bieten Sie Reverse Engineering in Graz?</h3>
                  <p className="text-muted-foreground">Partnerservice: Wir arbeiten mit 3D-Scan-Dienstleistern zusammen und können von Scan zu Druck den kompletten Workflow anbieten.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Widget */}
        <ReviewsWidget />

        {/* Contact CTA */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center gradient-card p-12 rounded-2xl">
              <h2 className="text-4xl font-bold mb-6">
                Starten Sie Ihr <span className="text-gradient">3D-Druck Projekt</span> in Graz
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

export default Graz3DDruck;
