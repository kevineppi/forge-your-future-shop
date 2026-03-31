import { useState, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CalculatorHero from "@/components/calculator/CalculatorHero";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import PriceSummary from "@/components/calculator/PriceSummary";
import CalculatorDisclaimer from "@/components/calculator/CalculatorDisclaimer";
import InquiryForm from "@/components/calculator/InquiryForm";
import CalculatorInfoSection from "@/components/calculator/CalculatorInfoSection";
import DebugPanel from "@/components/calculator/DebugPanel";
import { useModelAnalysis } from "@/hooks/useModelAnalysis";
import { type PricingInput, type PricingResult, calculatePrice } from "@/lib/pricingEngine";
import FAQSection from "@/components/landing/FAQSection";

const calculatorFaqs = [
  {
    question: "Wie genau ist der Richtpreis?",
    answer: "Der Richtpreis basiert auf unserer Kalkulationsformel und gibt eine realistische Orientierung. Der endgültige Preis wird nach technischer Prüfung Ihrer Datei individuell festgelegt."
  },
  {
    question: "Welche Dateiformate werden unterstützt?",
    answer: "Aktuell unterstützen wir STL-Dateien bis 100 MB. Die Datei wird direkt im Browser analysiert – Volumen, Oberfläche und Maße werden automatisch berechnet."
  },
  {
    question: "Was bedeutet Infill (Füllung)?",
    answer: "Der Infill-Wert bestimmt, wie dicht das Innere Ihres Bauteils gedruckt wird. 15% reicht für Anschauungsmodelle, 50% für stabile Teile, 100% für massive Vollkörper."
  },
  {
    question: "Welche Materialien bietet ihr an?",
    answer: "Wir drucken mit PLA, PLA+, PETG, ABS, ASA, TPU (flexibel), PA6-CF (Carbonfaser-verstärkt) und Polycarbonat. Jedes Material hat spezifische Eigenschaften für unterschiedliche Anwendungen."
  },
  {
    question: "Kann ich direkt über den Rechner bestellen?",
    answer: "Nein, der Rechner dient ausschließlich zur unverbindlichen Preisindikation. Für ein verbindliches Angebot senden Sie uns bitte eine Anfrage mit Ihrer 3D-Datei."
  },
  {
    question: "Wie lange dauert die Fertigung?",
    answer: "Die geschätzte Druckzeit wird im Rechner angezeigt. Die tatsächliche Lieferzeit hängt von der Auftragslage ab – in der Regel 2–5 Werktage nach Auftragsbestätigung."
  },
];

const Kostenrechner = () => {
  const [result, setResult] = useState<PricingResult | null>(null);
  const [currentInput, setCurrentInput] = useState<PricingInput | null>(null);
  const [showInquiry, setShowInquiry] = useState(false);

  const model = useModelAnalysis();

  const handleCalculate = useCallback((input: PricingInput) => {
    setCurrentInput(input);
    setResult(calculatePrice(input));
    setShowInquiry(false);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="3D-Druck Kostenrechner Österreich – FDM Richtpreis online berechnen [2026]"
        description="Berechnen Sie unverbindlich Ihren FDM-3D-Druck Richtpreis: PLA, PETG, ABS, ASA, TPU & mehr. Infill, Schichtdicke & Wandstärke individuell konfigurieren. Ab €15 – Angebot in 6h."
        path="/kostenrechner"
      />
      <Navigation />

      <main className="pt-20">
        <CalculatorHero />

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-3">
                <CalculatorForm
                  onCalculate={handleCalculate}
                  geometry={model.geometry}
                  fileName={model.fileName}
                  fileSize={model.fileSize}
                  isAnalyzing={model.isAnalyzing}
                  uploadError={model.error}
                  onFileSelect={model.analyzeFile}
                  onFileClear={model.clearFile}
                />
              </div>
              <div className="lg:col-span-2 lg:sticky lg:top-24">
                <PriceSummary
                  result={result}
                  onInquiry={() => setShowInquiry(true)}
                />
              </div>
            </div>

            {showInquiry && result && currentInput && (
              <div className="mt-12 max-w-2xl mx-auto" id="anfrage">
                <InquiryForm
                  calculatorInput={currentInput}
                  priceBreakdown={result}
                  onClose={() => setShowInquiry(false)}
                />
              </div>
            )}

            <DebugPanel result={result} input={currentInput} />
          </div>
        </section>

        <CalculatorDisclaimer />

        {/* FAQ Section for SEO */}
        <section className="py-12 md:py-20 bg-muted/20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
              Häufige Fragen zum 3D-Druck Kostenrechner
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
              Alles Wichtige zu Preiskalkulation, Materialien und Bestellablauf.
            </p>
            <FAQSection faqs={calculatorFaqs} />
          </div>
        </section>

        <CalculatorInfoSection />
      </main>

      <Footer />
    </div>
  );
};

export default Kostenrechner;
