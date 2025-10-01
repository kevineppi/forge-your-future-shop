import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CostCalculator from "@/components/CostCalculator";
import Contact from "@/components/Contact";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { useEffect } from "react";

const Kostenrechner = () => {
  useEffect(() => {
    document.title = "3D-Druck Kostenrechner | Sofort Preis berechnen | ekdruck e.U.";
  }, []);

  return (
    <>
      <SEOHead 
        title="3D-Druck Kostenrechner | Sofort Preis berechnen | ekdruck e.U."
        description="Berechnen Sie den Preis für Ihr 3D-Druck Projekt sofort online ✓ Kostenrechner für FDM 3D-Druck ✓ Alle Materialien ✓ Express-Service ✓ Mengenrabatt"
        keywords="3d-druck kostenrechner, 3d-druck preis berechnen, kosten 3d-druck, 3d-druck preisrechner, fdm druck kosten"
        path="/kostenrechner"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "Kostenrechner", url: "/kostenrechner"}
      ]} />
      
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-24">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  3D-Druck <span className="text-gradient">Kostenrechner</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  Berechnen Sie die Kosten für Ihr 3D-Druck Projekt in Echtzeit. Sofortige Preiskalkulation für Prototypen, 
                  Einzelteile und Kleinserien – transparent, schnell und unverbindlich.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/20">
                  <h3 className="font-bold text-lg mb-3">🎯 Alle Materialien</h3>
                  <p className="text-sm text-muted-foreground">
                    PLA, PETG, ABS, PA12 Nylon – wählen Sie das optimale Material für Ihr Projekt
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/20">
                  <h3 className="font-bold text-lg mb-3">⚡ Sofort-Kalkulation</h3>
                  <p className="text-sm text-muted-foreground">
                    Keine Wartezeit – erhalten Sie Ihre Preisschätzung in Sekunden
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/20">
                  <h3 className="font-bold text-lg mb-3">📦 Flexibel</h3>
                  <p className="text-sm text-muted-foreground">
                    Von Einzelstücken bis zur Serie – für jede Stückzahl geeignet
                  </p>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl mb-8">
                <p className="text-center text-muted-foreground">
                  <strong>FDM 3D-Druck Service</strong> für ganz Österreich: Wien, Linz, Graz, Salzburg, Innsbruck & mehr. 
                  Nutzen Sie unseren <strong>Online Preisrechner</strong> für eine transparente Kostenübersicht und kontaktieren Sie uns 
                  für ein individuelles Angebot basierend auf Ihrer <strong>CAD-Datei</strong>.
                </p>
              </div>
            </div>
          </div>
          
          <CostCalculator />
          
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">3D-Druck Kosten online berechnen</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mit unserem <strong>3D-Druck Kostenrechner</strong> können Sie die Kosten für Ihr Projekt sofort und kostenlos berechnen. 
                  Egal ob <strong>Prototypen</strong>, <strong>Einzelteile</strong> oder <strong>Kleinserien</strong> – unser Rechner berücksichtigt 
                  alle relevanten Faktoren wie Material, Größe, Komplexität und Druckdauer für eine präzise Preiskalkulation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Wir bieten <strong>FDM 3D-Druck</strong> mit hochwertigen Materialien wie <strong>PLA</strong>, <strong>PETG</strong>, 
                  <strong>ABS</strong> und <strong>Nylon (PA12, PA6)</strong>. Je nach Projektgröße und Anforderungen können Sie zwischen 
                  verschiedenen Materialien wählen und sofort sehen, wie sich dies auf den Preis auswirkt.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Wie funktioniert der 3D-Druck Preisrechner?</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Unser <strong>Online-Kostenrechner für 3D-Druck</strong> berücksichtigt folgende Faktoren für eine genaue Preisberechnung:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>3D-Druck Material:</strong> Von günstigem PLA bis zu technischem PA12 Nylon – verschiedene Preiskategorien</li>
                    <li><strong>Bauteilgröße:</strong> Länge, Breite und Höhe bestimmen das Volumen und damit den Materialverbrauch</li>
                    <li><strong>Komplexität & Geometrie:</strong> Einfache Formen sind günstiger als komplexe Strukturen mit Stützstrukturen</li>
                    <li><strong>Druckdauer:</strong> Optional können Sie die geschätzte Druckzeit für eine präzisere Kalkulation angeben</li>
                    <li><strong>Stückzahl:</strong> Größere Mengen können individuell kalkuliert werden</li>
                    <li><strong>Nachbearbeitung:</strong> Schleifen, Lackieren oder Premium-Finish für ein perfektes Ergebnis</li>
                    <li><strong>Express-Service:</strong> 24-Stunden Lieferung für dringende Projekte</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">3D-Druck Preise & Kosten in Österreich</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Die Kosten für <strong>3D-Druck in Österreich</strong> hängen von verschiedenen Faktoren ab. Bei ekdruck bieten wir 
                  <strong>transparente Preise</strong> ohne versteckte Kosten. Unsere Preise richten sich nach Material, Größe, 
                  Komplexität und Druckdauer. Für <strong>technische Bauteile</strong> und <strong>Funktionsprototypen</strong> aus 
                  hochwertigen Materialien wie PA12 Nylon erstellen wir Ihnen gerne ein individuelles Angebot.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Größere Bestellmengen bieten in der Regel bessere Konditionen. Kontaktieren Sie uns für ein maßgeschneidertes 
                  Angebot basierend auf Ihren spezifischen Anforderungen.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Warum ekdruck für 3D-Druck?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold mb-2">✓ Schnelle Lieferung</h3>
                    <p className="text-muted-foreground">Express-Service innerhalb von 24h verfügbar</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">✓ Made in Austria</h3>
                    <p className="text-muted-foreground">Österreichische Produktion und Materialien</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">✓ Faire Preise</h3>
                    <p className="text-muted-foreground">Transparente Kalkulation ohne versteckte Kosten</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">✓ Hohe Qualität</h3>
                    <p className="text-muted-foreground">Professionelle FDM-Drucker und Premium-Filamente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Kostenrechner;