import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CostCalculator from "@/components/CostCalculator";
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
                    <li><strong>Stückzahl & Mengenrabatt:</strong> Ab 5 Stück erhalten Sie automatisch Staffelpreise</li>
                    <li><strong>Nachbearbeitung:</strong> Schleifen, Lackieren oder Premium-Finish für ein perfektes Ergebnis</li>
                    <li><strong>Express-Service:</strong> 24-Stunden Lieferung für dringende Projekte</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">3D-Druck Preise & Kosten in Österreich</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Die Kosten für <strong>3D-Druck in Österreich</strong> hängen von verschiedenen Faktoren ab. Bei ekdruck bieten wir 
                  <strong>transparente Preise</strong> ohne versteckte Kosten. Unsere Preise beginnen bereits ab <strong>5€ pro Teil</strong> 
                  für kleine, einfache Objekte. Für <strong>technische Bauteile</strong> und <strong>Funktionsprototypen</strong> aus 
                  hochwertigen Materialien wie PA12 Nylon passen wir die Preise individuell an.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Mit unserem <strong>Mengenrabatt-System</strong> sparen Sie bei größeren Bestellungen automatisch. Ab 5 Stück erhalten 
                  Sie 5% Rabatt, ab 10 Stück 10%, ab 20 Stück 15% und ab 50 Stück sogar 20% Rabatt auf den Gesamtpreis.
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

              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="font-semibold mb-2">💡 Hinweis zur Preisschätzung</p>
                <p className="text-sm text-muted-foreground">
                  Dies ist eine automatische Schätzung basierend auf den eingegebenen Parametern. Für ein exaktes Angebot 
                  mit Ihrer <strong>CAD-Datei</strong> (STL, STEP, OBJ) kontaktieren Sie uns bitte direkt. Wir erstellen 
                  Ihnen innerhalb von <strong>24 Stunden</strong> ein individuelles, unverbindliches Angebot.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Kostenrechner;