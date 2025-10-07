import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import ReviewsWidget from "@/components/ReviewsWidget";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update document title for main page - SEO optimized with target keywords
    document.title = "3D-Druck Service aus Österreich | Nachhaltiger FDM 3D-Druck | ekdruck e.U.";
  }, []);

  return (
    <>
      <SEOHead 
        title="3D-Druck Service aus Österreich | Nachhaltiger FDM 3D-Druck | ekdruck e.U."
        description="3D-Druck Service für ganz Österreich ✓ FDM 3D-Druck ✓ Rapid Prototyping ✓ Nachhaltiger 3D-Druck Service ✓ 3D Druck Oberösterreich ✓ Express Service"
        keywords="3d-druck österreich, 3d-druck dienstleister, fdm 3d-druck, rapid prototyping österreich, 3d drucker kaufen österreich, 3d-druck firma, etikettendrucker österreich, 3d-druck shop österreich, dienstleistung 3d druck, 3d-druck für privatpersonen, additives fertigungsverfahren, finishing druck, 3d drucker modelle erstellen, rapid prototyping verfahren"
        path="/"
        schemaType="service"
        preloadResources={[
          {href: "/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png", as: "image", type: "image/png"},
          {href: "/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png", as: "image", type: "image/png"}
        ]}
      />
      <StructuredData type="organization" />
      <StructuredData type="service" />
      <StructuredData type="faq" />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"}
      ]} />
      <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Advantages />
      <Reviews />
      <About />
      <ReviewsWidget />
      
      {/* Regional Links Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">3D-Druck in ganz Österreich</h2>
          <p className="text-center text-muted-foreground mb-8">Wir liefern schnell und zuverlässig in alle österreichischen Bundesländer und Städte</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold mb-3">Bundesländer</h3>
              <div className="space-y-2">
                <Button variant="link" asChild className="p-0 h-auto justify-start"><a href="/3d-druck-oberoesterreich">Oberösterreich</a></Button>
                <Button variant="link" asChild className="p-0 h-auto justify-start"><a href="/3d-druck-niederoesterreich">Niederösterreich</a></Button>
                <Button variant="link" asChild className="p-0 h-auto justify-start"><a href="/3d-druck-steiermark">Steiermark</a></Button>
                <Button variant="link" asChild className="p-0 h-auto justify-start"><a href="/3d-druck-kaernten">Kärnten</a></Button>
                <Button variant="link" asChild className="p-0 h-auto justify-start"><a href="/3d-druck-vorarlberg">Vorarlberg</a></Button>
                <Button variant="link" asChild className="p-0 h-auto justify-start"><a href="/3d-druck-burgenland">Burgenland</a></Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Städte A-L</h3>
              <div className="space-y-2">
                <Button variant="link" asChild className="p-0 h-auto justify-start"><a href="/3d-druck-dornbirn">Dornbirn</a></Button>
                <Button variant="link" asChild className="p-0 h-auto justify-start"><a href="/3d-druck-graz">Graz</a></Button>
                <Button variant="link" asChild className="p-0 h-auto justify-start"><a href="/3d-druck-gunskirchen">Gunskirchen</a></Button>
                <Button variant="link" asChild className="p-0 h-auto justify-start"><a href="/3d-druck-innsbruck">Innsbruck</a></Button>
                <Button variant="link" asChild className="p-0 h-auto justify-start"><a href="/3d-druck-klagenfurt">Klagenfurt</a></Button>
                <Button variant="link" asChild className="p-0 h-auto justify-start"><a href="/3d-druck-linz">Linz</a></Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Städte S-W</h3>
              <div className="space-y-2">
                <Button variant="link" asChild className="p-0 h-auto justify-start"><a href="/3d-druck-salzburg">Salzburg</a></Button>
                <Button variant="link" asChild className="p-0 h-auto justify-start"><a href="/3d-druck-st-poelten">St. Pölten</a></Button>
                <Button variant="link" asChild className="p-0 h-auto justify-start"><a href="/3d-druck-villach">Villach</a></Button>
                <Button variant="link" asChild className="p-0 h-auto justify-start"><a href="/3d-druck-wels">Wels</a></Button>
                <Button variant="link" asChild className="p-0 h-auto justify-start"><a href="/3d-druck-wien">Wien</a></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
      </div>
    </>
  );
};

export default Index;
