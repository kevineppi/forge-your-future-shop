import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CalculatorHero from "@/components/calculator/CalculatorHero";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import PriceSummary from "@/components/calculator/PriceSummary";
import CalculatorDisclaimer from "@/components/calculator/CalculatorDisclaimer";
import InquiryForm from "@/components/calculator/InquiryForm";
import CalculatorInfoSection from "@/components/calculator/CalculatorInfoSection";
import { type CalculatorInput, type PriceBreakdown, calculateFinalPrice } from "@/lib/priceCalculator";

const Kostenrechner = () => {
  const [result, setResult] = useState<PriceBreakdown | null>(null);
  const [currentInput, setCurrentInput] = useState<CalculatorInput | null>(null);
  const [showInquiry, setShowInquiry] = useState(false);

  const handleCalculate = (input: CalculatorInput) => {
    setCurrentInput(input);
    setResult(calculateFinalPrice(input));
    setShowInquiry(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="3D-Druck Kostenrechner – Unverbindliche Preiskalkulation | ekdruck e.U."
        description="Berechnen Sie schnell und unverbindlich einen Richtpreis für Ihr 3D-Druckteil. FDM, SLA & SLS – individuell kalkuliert. Kein Webshop, keine Bestellung."
        path="/kostenrechner"
      />
      <Navigation />

      <main className="pt-20">
        <CalculatorHero />

        {/* Calculator Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              {/* Form – left / top */}
              <div className="lg:col-span-3">
                <CalculatorForm onCalculate={handleCalculate} />
              </div>

              {/* Result – right / bottom */}
              <div className="lg:col-span-2 lg:sticky lg:top-24">
                <PriceSummary
                  result={result}
                  onInquiry={() => setShowInquiry(true)}
                />
              </div>
            </div>

            {/* Inquiry Form */}
            {showInquiry && result && currentInput && (
              <div className="mt-12 max-w-2xl mx-auto" id="anfrage">
                <InquiryForm
                  calculatorInput={currentInput}
                  priceBreakdown={result}
                  onClose={() => setShowInquiry(false)}
                />
              </div>
            )}
          </div>
        </section>

        <CalculatorDisclaimer />
        <CalculatorInfoSection />
      </main>

      <Footer />
    </div>
  );
};

export default Kostenrechner;
