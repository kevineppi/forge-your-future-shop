import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ReviewsWidget from "@/components/ReviewsWidget";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

const Oberoesterreich3DDruck = () => {
  useEffect(() => {
    document.title = "3D-Druck Oberösterreich | FDM 3D-Druck Service | ekdruck e.U.";
  }, []);

  return (
    <>
      <SEOHead 
        title="3D-Druck Oberösterreich | FDM 3D-Druck Service | ekdruck e.U."
        description="Professioneller 3D-Druck Service für Oberösterreich ✓ FDM 3D-Druck ✓ Rapid Prototyping ✓ Express Service ✓ Nachhaltige Materialien aus Österreich"
        keywords="3d-druck oberösterreich, 3d druck linz, fdm 3d-druck oberösterreich, rapid prototyping oberösterreich"
        path="/3d-druck-oberoesterreich"
        schemaType="service"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "3D-Druck Oberösterreich", url: "/3d-druck-oberoesterreich"}
      ]} />
      <StructuredData type="service" />
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                3D-Druck Service Oberösterreich
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Professioneller FDM 3D-Druck für Linz, Wels, Steyr und ganz Oberösterreich. Schnelle Lieferung, nachhaltige Materialien aus Österreich.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Jetzt Angebot anfordern <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/kostenrechner">Kosten berechnen</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Unsere Services für Oberösterreich</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">FDM 3D-Druck</h3>
                <p className="text-muted-foreground mb-4">
                  Hochwertige Bauteile mit modernster FDM-Technologie für Prototypen und Serienteile.
                </p>
                <Button variant="link" asChild className="p-0">
                  <a href="/fdm-3d-druck">Mehr erfahren →</a>
                </Button>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Express Service</h3>
                <p className="text-muted-foreground mb-4">
                  Schnelle Fertigung in 24-48h für dringende Projekte und Prototypen.
                </p>
                <Button variant="link" asChild className="p-0">
                  <a href="/rapid-prototyping">Mehr erfahren →</a>
                </Button>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Nachhaltige Materialien</h3>
                <p className="text-muted-foreground mb-4">
                  Hochwertige Filamente aus österreichischer Produktion für umweltbewussten 3D-Druck.
                </p>
                <Button variant="link" asChild className="p-0">
                  <a href="/3d-druck-materialien">Mehr erfahren →</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content Section */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-8">3D-Druck Oberösterreich: Ihr Partner für professionelle Fertigung</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                Als führender Anbieter für 3D-Druck in Oberösterreich bieten wir professionelle FDM 3D-Druck Dienstleistungen für Unternehmen, 
                Entwickler und Privatpersonen in Linz, Wels, Steyr und der gesamten Region. Unsere moderne FDM-Technologie (Fused Deposition Modeling) 
                ermöglicht die Fertigung hochwertiger Prototypen, Funktionsteile und Serienprodukte mit höchster Präzision und Zuverlässigkeit.
              </p>
              <p className="text-muted-foreground mb-6">
                Der 3D-Druck hat sich in Oberösterreich zu einer Schlüsseltechnologie entwickelt, die traditionelle Fertigungsverfahren ergänzt und 
                innovative Lösungen ermöglicht. Mit unserem FDM 3D-Druck Service in Oberösterreich profitieren Sie von kurzen Lieferzeiten, 
                flexibler Produktion und kosteneffizienter Fertigung – auch bei kleinen Stückzahlen.
              </p>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Anwendungsbereiche 3D-Druck Oberösterreich</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4">Maschinenbau & Industrie</h3>
                <p className="text-muted-foreground">
                  Funktionsprototypen, Ersatzteile und Vorrichtungen für den Maschinenbau in Oberösterreich. 
                  Perfekt für Unternehmen in Linz, Wels und Steyr, die schnelle Iterationen benötigen.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4">Produktentwicklung</h3>
                <p className="text-muted-foreground">
                  Rapid Prototyping für Start-ups und Entwicklungsabteilungen. Testen Sie Ihre Produktideen 
                  schnell und kostengünstig mit unserem 3D-Druck Service in Oberösterreich.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4">Architektur & Modellbau</h3>
                <p className="text-muted-foreground">
                  Detaillierte Architekturmodelle und Präsentationsmodelle für Planungsbüros in ganz Oberösterreich. 
                  Präzise Fertigung für beeindruckende Kundenpräsentationen.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4">Automotive</h3>
                <p className="text-muted-foreground">
                  Spezialteile, Prototypen und Kleinserien für die Automobilindustrie. FDM 3D-Druck für 
                  Innenraumkomponenten, Halterungen und funktionale Bauteile.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4">Medizintechnik</h3>
                <p className="text-muted-foreground">
                  Medizinische Modelle, Hilfsmittel und Prototypen für die Gesundheitsbranche in Oberösterreich. 
                  Biokompatible Materialien auf Anfrage verfügbar.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4">Kleinserien & Einzelstücke</h3>
                <p className="text-muted-foreground">
                  Wirtschaftliche Fertigung von Kleinserien und individuellen Einzelanfertigungen. 
                  Ideal für Start-ups und Innovatoren in Oberösterreich.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Materials */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-8">FDM 3D-Druck Technologie & Materialien</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Modernste FDM-Technologie</h3>
                <p className="text-muted-foreground mb-4">
                  Unser 3D-Druck Service in Oberösterreich nutzt hochmoderne FDM-Drucker (Fused Deposition Modeling), 
                  die für ihre Zuverlässigkeit und Präzision bekannt sind. Diese Technologie eignet sich hervorragend 
                  für funktionale Prototypen, Endverbrauchsteile und technische Anwendungen.
                </p>
                <p className="text-muted-foreground mb-4">
                  FDM 3D-Druck bietet zahlreiche Vorteile: kosteneffiziente Produktion, schnelle Herstellung, 
                  mechanisch belastbare Bauteile und eine breite Materialauswahl. Für Unternehmen in Linz, Wels 
                  und ganz Oberösterreich bedeutet dies maximale Flexibilität in der Produktentwicklung.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Hochwertige Materialien</h3>
                <p className="text-muted-foreground mb-4">
                  Wir verwenden ausschließlich hochwertige 3D-Druck Filamente, bevorzugt aus österreichischer Produktion. 
                  Unser Sortiment umfasst:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>PLA:</strong> Umweltfreundlich, ideal für Prototypen und Präsentationsmodelle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>PETG:</strong> Robust und chemikalienbeständig für funktionale Bauteile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>ASA:</strong> UV-beständig für Außenanwendungen in Oberösterreich</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>TPU:</strong> Flexibel für Dichtungen und elastische Komponenten</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">So funktioniert unser 3D-Druck Service</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Anfrage senden</h3>
                <p className="text-muted-foreground">
                  Senden Sie uns Ihre 3D-Datei (STL, STEP, OBJ) oder kontaktieren Sie uns für eine Beratung zu Ihrem Projekt in Oberösterreich.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Angebot erhalten</h3>
                <p className="text-muted-foreground">
                  Innerhalb von 24 Stunden erhalten Sie ein transparentes Angebot mit Preis, Lieferzeit und Materialempfehlung für Ihren 3D-Druck.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Produktion</h3>
                <p className="text-muted-foreground">
                  Nach Ihrer Freigabe starten wir die FDM 3D-Druck Produktion mit höchster Qualität und Präzision in unserem Werk.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3">Versand</h3>
                <p className="text-muted-foreground">
                  Schneller Versand nach Linz, Wels, Steyr und ganz Oberösterreich. Express-Lieferung innerhalb von 24-48h möglich.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Häufig gestellte Fragen zu 3D-Druck Oberösterreich</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-lg font-semibold mb-3">Wie lange dauert die Fertigung mit FDM 3D-Druck in Oberösterreich?</h3>
                <p className="text-muted-foreground">
                  Die Produktionszeit hängt von der Größe und Komplexität Ihres Bauteils ab. Kleinere Teile können innerhalb von 24 Stunden 
                  gefertigt werden. Für größere oder komplexe Projekte beträgt die Lieferzeit in der Regel 2-5 Werktage. Express-Service 
                  für dringende Anfragen ist verfügbar.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-lg font-semibold mb-3">Welche Dateiformate werden für 3D-Druck akzeptiert?</h3>
                <p className="text-muted-foreground">
                  Wir akzeptieren alle gängigen 3D-Dateiformate: STL, STEP, OBJ, 3MF und andere CAD-Formate. Sollten Sie keine 3D-Datei haben, 
                  unterstützen wir Sie gerne bei der Erstellung oder Konvertierung Ihrer Konstruktionsdaten.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-lg font-semibold mb-3">Was kostet 3D-Druck in Oberösterreich?</h3>
                <p className="text-muted-foreground">
                  Die Kosten für FDM 3D-Druck hängen von Material, Größe, Komplexität und Stückzahl ab. Nutzen Sie unseren Online-Kostenrechner 
                  für eine erste Einschätzung oder kontaktieren Sie uns für ein individuelles Angebot. Wir bieten faire und transparente Preise 
                  für Kunden in ganz Oberösterreich.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-lg font-semibold mb-3">Liefern Sie auch nach Linz, Wels und Steyr?</h3>
                <p className="text-muted-foreground">
                  Ja, wir liefern schnell und zuverlässig in alle Städte und Gemeinden in Oberösterreich. Express-Lieferung nach Linz, Wels, 
                  Steyr und Umgebung ist innerhalb von 24-48 Stunden möglich. Auch österreichweiter Versand ist selbstverständlich verfügbar.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-lg font-semibold mb-3">Welche Materialien verwenden Sie für 3D-Druck?</h3>
                <p className="text-muted-foreground">
                  Wir verwenden hochwertige FDM-Materialien wie PLA, PETG, ASA, ABS und TPU. Bevorzugt setzen wir auf Filamente aus 
                  österreichischer Produktion für beste Qualität und Nachhaltigkeit. Jedes Material hat spezifische Eigenschaften – 
                  wir beraten Sie gerne bei der Auswahl.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* City Links */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-8 text-center">3D-Druck Service in Oberösterreich</h2>
            <p className="text-center text-muted-foreground mb-8">
              Wir liefern schnell und zuverlässig in alle oberösterreichischen Städte
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild>
                <a href="/3d-druck-linz">3D-Druck Linz</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/3d-druck-wels">3D-Druck Wels</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Warum ekdruck für Oberösterreich?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Schnelle Lieferung</h3>
                  <p className="text-muted-foreground">Express-Versand nach Linz, Wels und ganz Oberösterreich</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Österreichische Qualität</h3>
                  <p className="text-muted-foreground">Hochwertige Materialien aus regionaler Produktion</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Individuelle Beratung</h3>
                  <p className="text-muted-foreground">Persönlicher Support für Ihr 3D-Druck-Projekt</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Faire Preise</h3>
                  <p className="text-muted-foreground">Transparente Kalkulation ohne versteckte Kosten</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Kundenstimmen aus Oberösterreich</h2>
            <ReviewsWidget />
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Jetzt 3D-Druck Service in Oberösterreich nutzen</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Kontaktieren Sie uns für ein kostenloses Angebot
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:+436641337778" className="flex items-center justify-center gap-2 text-lg hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
                +43 664 1337778
              </a>
              <a href="mailto:office@ek-druck.at" className="flex items-center justify-center gap-2 text-lg hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                office@ek-druck.at
              </a>
            </div>
            <Button size="lg" onClick={() => window.location.href = '/#contact'}>
              Kontaktformular
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Oberoesterreich3DDruck;