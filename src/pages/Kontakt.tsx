import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumbs from "@/components/landing/Breadcrumbs";
import InternalLinks from "@/components/landing/InternalLinks";

const contactLinks = [
  { to: "/messemodelle", label: "Messemodelle anfragen", description: "Express-Fertigung für Messen & Events ab 24h" },
  { to: "/architekturmodelle", label: "Architekturmodelle", description: "Maßstabsgetreue Modelle für Wettbewerbe & Präsentationen" },
  { to: "/rapid-prototyping", label: "Rapid Prototyping", description: "Funktionale Prototypen in 24–48 Stunden" },
  { to: "/firmenkunden", label: "Firmenkunden-Service", description: "UID-Rechnung, NDA & Mengenrabatte für Unternehmen" },
  { to: "/ratgeber/kosten-guide", label: "Was kostet 3D-Druck?", description: "Transparenter Kosten-Guide mit Preisbeispielen" },
  { to: "/3d-druck-materialien", label: "Material-Vergleich", description: "PLA vs PETG vs ABS – welches Material passt?" },
];

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Kontakt & Anfrage | 3D-Druck Angebot in 6h | ekdruck"
        description="3D-Druck Anfrage stellen → Kostenloses Angebot in 6h ✓ Persönliche Beratung ✓ Tel: +43 676 5517197 ✓ Express 24h möglich ✓ Kein Callcenter → Jetzt Projekt beschreiben"
        path="/kontakt"
        keywords="3d-druck anfrage, 3d-druck angebot, 3d-druck beratung österreich, kontakt ekdruck, 3d-druck bestellen"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Kontakt", url: "/kontakt" }
      ]} />
      <Navigation />
      
      <main className="pt-20">
        <Breadcrumbs items={[
          { name: "Kontakt & Anfrage", url: "/kontakt" }
        ]} />
        <Contact />
        <InternalLinks links={contactLinks} title="Unsere Services im Überblick" />
      </main>
      
      <Footer />
    </div>
  );
};

export default Kontakt;
