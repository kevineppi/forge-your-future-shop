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
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-5xl font-bold text-center mb-4">
              3D-Druck <span className="text-gradient">Kostenrechner</span>
            </h1>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-8">
              Berechnen Sie die Kosten für Ihr 3D-Druck Projekt in Echtzeit. Wählen Sie Material, Größe und Komplexität und erhalten Sie sofort eine transparente Preiskalkulation.
            </p>
          </div>
          <CostCalculator />
          
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Wie funktioniert der Kostenrechner?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Unser Kostenrechner berücksichtigt alle relevanten Faktoren für Ihr 3D-Druck Projekt:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Material:</strong> Von PLA bis PA12 Nylon - verschiedene Preiskategorien</li>
                  <li><strong>Größe:</strong> Länge, Breite und Höhe beeinflussen das Volumen und damit den Materialverbrauch</li>
                  <li><strong>Komplexität:</strong> Einfache Formen sind günstiger als komplexe Geometrien mit Support</li>
                  <li><strong>Druckdauer:</strong> Optional können Sie die geschätzte Druckzeit angeben</li>
                  <li><strong>Menge:</strong> Ab 5 Stück erhalten Sie automatisch Mengenrabatt</li>
                  <li><strong>Zusatzservices:</strong> Nachbearbeitung, Support-Entfernung, Express-Service</li>
                </ul>
                <p className="pt-4">
                  <strong>Hinweis:</strong> Dies ist eine automatische Schätzung. Für ein exaktes Angebot mit Ihrer CAD-Datei kontaktieren Sie uns bitte direkt. Wir erstellen Ihnen innerhalb von 24 Stunden ein individuelles Angebot.
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