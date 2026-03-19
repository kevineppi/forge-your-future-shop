import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import SEOHead from "@/components/SEOHead";

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Kontakt | 3D-Druck Anfrage - ekdruck e.U."
        description="Kontaktieren Sie ekdruck für Ihr 3D-Druck Projekt. Kostenlose Beratung, schnelle Angebote innerhalb von 6 Stunden. Tel: +43 676 5517197"
        path="/kontakt"
        keywords="3D-Druck Kontakt, 3D-Druck Anfrage, 3D-Druck Beratung Österreich, ekdruck Kontakt"
      />
      <Navigation />
      
      <main className="pt-20">
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Kontakt;
