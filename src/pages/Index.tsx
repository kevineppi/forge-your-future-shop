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
      <Contact />
      <Footer />
      </div>
    </>
  );
};

export default Index;
