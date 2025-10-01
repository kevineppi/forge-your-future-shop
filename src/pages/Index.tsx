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
      
      {/* City Pages Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              3D-Druck in <span className="text-gradient">ganz Österreich</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professioneller FDM 3D-Druck Service mit schneller Lieferung in alle österreichischen Bundesländer
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <a href="/3d-druck-wien" className="gradient-card p-6 rounded-xl hover:shadow-glow transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Wien</h3>
              </div>
              <p className="text-muted-foreground">3D-Druck Service in Wien - Express 24h Lieferung</p>
            </a>
            
            <a href="/3d-druck-linz" className="gradient-card p-6 rounded-xl hover:shadow-glow transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Linz</h3>
              </div>
              <p className="text-muted-foreground">Lokale Produktion in Oberösterreich - Same-Day möglich</p>
            </a>
            
            <a href="/3d-druck-graz" className="gradient-card p-6 rounded-xl hover:shadow-glow transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Graz</h3>
              </div>
              <p className="text-muted-foreground">3D-Druck Service in der Steiermark - 24-48h Lieferung</p>
            </a>
            
            <a href="/3d-druck-salzburg" className="gradient-card p-6 rounded-xl hover:shadow-glow transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Salzburg</h3>
              </div>
              <p className="text-muted-foreground">Schnelle Lieferung nach Salzburg Stadt und Land</p>
            </a>
            
            <a href="/3d-druck-innsbruck" className="gradient-card p-6 rounded-xl hover:shadow-glow transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Innsbruck</h3>
              </div>
              <p className="text-muted-foreground">3D-Druck Service in Tirol - Zuverlässige Lieferung</p>
            </a>
            
            <a href="/3d-druck-klagenfurt" className="gradient-card p-6 rounded-xl hover:shadow-glow transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Klagenfurt</h3>
              </div>
              <p className="text-muted-foreground">3D-Druck Service in Kärnten - Express Lieferung</p>
            </a>
            
            <a href="/3d-druck-villach" className="gradient-card p-6 rounded-xl hover:shadow-glow transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Villach</h3>
              </div>
              <p className="text-muted-foreground">Schnelle Lieferung nach Villach und Kärnten</p>
            </a>
            
            <a href="/3d-druck-wels" className="gradient-card p-6 rounded-xl hover:shadow-glow transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Wels</h3>
              </div>
              <p className="text-muted-foreground">Same-Day Lieferung in Oberösterreich möglich</p>
            </a>
            
            <a href="/3d-druck-st-poelten" className="gradient-card p-6 rounded-xl hover:shadow-glow transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">St. Pölten</h3>
              </div>
              <p className="text-muted-foreground">3D-Druck Service für Niederösterreich</p>
            </a>
            
            <a href="/3d-druck-dornbirn" className="gradient-card p-6 rounded-xl hover:shadow-glow transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Dornbirn</h3>
              </div>
              <p className="text-muted-foreground">3D-Druck Service in Vorarlberg - Schnelle Lieferung</p>
            </a>
            
            <div className="gradient-card p-6 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground mb-3">Lieferung in ganz Österreich</p>
                <Button asChild>
                  <a href="/kostenrechner">Kosten berechnen</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ReviewsWidget />
      <Reviews />
      <About />
      <Contact />
      <Footer />
      </div>
    </>
  );
};

export default Index;
