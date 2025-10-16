import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import StructuredData from "@/components/StructuredData";
import ReviewsWidget from "@/components/ReviewsWidget";
import { Button } from "@/components/ui/button";
import { Box, Clock, MapPin, Phone, Mail, CheckCircle } from "lucide-react";

const Wels3DDruck = () => {

  return (
    <>
      <SEOHead 
        title="3D Druck Wels – Prototypen & Fertigung | ek-druck"
        description="Professioneller 3D Druck in Wels. FDM 3D-Druck Service für Oberösterreich – schnell, präzise & individuell. Same-Day Lieferung möglich!"
        keywords="3d-druck wels, 3d drucker wels, fdm druck wels, rapid prototyping wels, 3d-druck service wels, prototypen wels"
        path="/3d-druck-wels"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "3D-Druck Wels", url: "/3d-druck-wels"}
      ]} />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      <StructuredData type="faq" />
      
      <div className="min-h-screen">
        <Navigation />
        
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold">Wels</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                3D-Druck Service in <span className="text-gradient">Wels</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ihr lokaler Partner für professionellen FDM 3D-Druck in Wels. Kurze Lieferwege innerhalb von Oberösterreich – Same-Day Lieferung möglich.
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

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Unsere <span className="text-gradient">Services in Wels</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="gradient-card p-6 rounded-xl">
                <Box className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">FDM 3D-Druck</h3>
                <p className="text-muted-foreground mb-4">
                  Professioneller FDM 3D-Druck für Prototypen und Kleinserien in Wels.
                </p>
                <a href="/fdm-3d-druck" className="text-primary hover:underline">Mehr erfahren →</a>
              </div>
              
              <div className="gradient-card p-6 rounded-xl">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Same-Day Lieferung</h3>
                <p className="text-muted-foreground mb-4">
                  Besonders schnelle Lieferung nach Wels – Same-Day möglich!
                </p>
                <a href="/rapid-prototyping" className="text-primary hover:underline">Mehr erfahren →</a>
              </div>
              
              <div className="gradient-card p-6 rounded-xl">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Lokale Produktion</h3>
                <p className="text-muted-foreground mb-4">
                  Produktion in Oberösterreich – kurze Wege, schnelle Lieferung.
                </p>
                <a href="/3d-druck-materialien" className="text-primary hover:underline">Mehr erfahren →</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">
                <span className="text-gradient">3D-Druck Anwendungen</span> in Wels
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🏭 Maschinenbau & Industrie</h3>
                  <p className="text-muted-foreground">Funktionsprototypen und Ersatzteile für Welser Industriebetriebe</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🔧 Betriebsmittel</h3>
                  <p className="text-muted-foreground">Vorrichtungen, Werkzeuge und Halterungen für die Produktion</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🎨 Design & Entwicklung</h3>
                  <p className="text-muted-foreground">Prototypen und Designstudien für kreative Projekte</p>
                </div>
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="font-bold text-lg mb-3">🏗️ Architektur</h3>
                  <p className="text-muted-foreground">Architekturmodelle für Planungsbüros in Wels</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">
                Warum ekdruck für <span className="text-gradient">Wels</span>?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Kürzeste Lieferwege</h3>
                    <p className="text-muted-foreground">Direkter Versand aus Oberösterreich – Same-Day möglich</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Regionale Nähe</h3>
                    <p className="text-muted-foreground">Lokaler Anbieter für Wels und Umgebung</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Persönlicher Service</h3>
                    <p className="text-muted-foreground">Kompetente Beratung und individuelle Lösungen</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Faire Preise</h3>
                    <p className="text-muted-foreground">Transparente Kalkulation mit Online-Kostenrechner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">
                <span className="text-gradient">Materialien</span> für Wels
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">PLA - Biokunststoff</h3>
                  <p className="text-muted-foreground">Nachhaltig, vielseitig einsetzbar</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">PETG - Robust</h3>
                  <p className="text-muted-foreground">Schlagfest, chemikalienbeständig</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">ABS - Technisch</h3>
                  <p className="text-muted-foreground">Hitzebeständig, stabil</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">PA12 Nylon</h3>
                  <p className="text-muted-foreground">Höchste Festigkeit</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">
                <span className="text-gradient">Häufige Fragen</span> zu 3D-Druck in Wels
              </h2>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Wie schnell ist die Lieferung nach Wels?</h3>
                  <p className="text-muted-foreground">Same-Day Lieferung möglich! Standard 1-2 Werktage innerhalb Oberösterreichs.</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Welche Formate akzeptieren Sie?</h3>
                  <p className="text-muted-foreground">STL, OBJ, STEP und weitere CAD-Formate.</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-3">Wie kalkulieren Sie die Kosten?</h3>
                  <p className="text-muted-foreground">Nach Material, Größe und Druckzeit. Online-Kostenrechner verfügbar.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ReviewsWidget />

        <section id="contact" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center gradient-card p-12 rounded-2xl">
              <h2 className="text-4xl font-bold mb-6">
                Starten Sie Ihr <span className="text-gradient">3D-Druck Projekt</span> in Wels
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

        <Footer />
      </div>
    </>
  );
};

export default Wels3DDruck;