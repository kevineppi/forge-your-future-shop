import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import CostCalculator from "@/components/CostCalculator";
import About from "@/components/About";
import TestimonialsVideo from "@/components/TestimonialsVideo";
import FAQ from "@/components/FAQ";
import EnhancedContact from "@/components/EnhancedContact";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import StickyCallToAction from "@/components/StickyCallToAction";
import StructuredData from "@/components/StructuredData";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update document title for main page
    document.title = "3D-Druck Service Oberösterreich | ekdruck e.U. Gunskirchen - Nachhaltiger 3D-Druck";
  }, []);

  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="service" />
      <StructuredData type="faq" />
      <StructuredData type="breadcrumb" />
      <div className="min-h-screen">
        <ScrollProgress />
        <Navigation />
        <Hero />
        <Services />
        <Advantages />
        <CostCalculator />
        <About />
        <TestimonialsVideo />
        <FAQ />
        <EnhancedContact />
        <Reviews />
        <Footer />
        <StickyCallToAction />
      </div>
    </>
  );
};

export default Index;
