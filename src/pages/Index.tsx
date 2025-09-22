import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import CostCalculator from "@/components/CostCalculator";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ContentSection from "@/components/ContentSection";
import StructuredData from "@/components/StructuredData";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update document title for main page with key SEO keywords
    document.title = "3D-Druck Österreich | 3D-Druckerei & FDM 3D-Druck Service | ekdruck e.U.";
    
    // Update meta description with target keywords
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        '3D-Druck Dienstleister für ganz Österreich ✓ 3D-Druckerei ✓ FDM 3D-Druck Service ✓ Rapid Prototyping ✓ 3D-Druckservice Online ✓ Firmen 3D-Druck ✓ 3D-Druck Salzburg, Wien'
      );
    }
  }, []);

  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="service" />
      <StructuredData type="breadcrumb" />
      <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Advantages />
      <CostCalculator />
      <Reviews />
      <About />
      <ContentSection />
      <FAQ />
      <Contact />
      <Footer />
      </div>
    </>
  );
};

export default Index;
