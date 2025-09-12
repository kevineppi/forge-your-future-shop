import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import CostCalculator from "@/components/CostCalculator";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
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
  );
};

export default Index;
