import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import CostCalculator from "@/components/CostCalculator";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update document title for main page
    document.title = "3D-Druck Service Linz | ekdruck e.U. Oberösterreich - Nachhaltiger 3D-Druck";
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
      <Contact />
      <Footer />
      </div>
    </>
  );
};

export default Index;
