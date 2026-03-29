import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import SEOHead from "@/components/SEOHead";

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Kostenloses 3D-Druck Angebot in 6h | Jetzt anfragen | ekdruck"
        description="Projekt beschreiben → Angebot in 6 Stunden. Persönliche Beratung, kein Callcenter. Tel: +43 676 5517197 oder Formular ausfüllen. Express 24h möglich ✓"
        path="/kontakt"
        keywords="3d-druck anfrage, 3d-druck angebot, 3d-druck beratung österreich, kontakt ekdruck, 3d-druck bestellen"
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
