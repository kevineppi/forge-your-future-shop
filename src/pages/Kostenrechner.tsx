import { useState, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CalculatorHero from "@/components/calculator/CalculatorHero";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import PriceSummary from "@/components/calculator/PriceSummary";
import CalculatorDisclaimer from "@/components/calculator/CalculatorDisclaimer";
import CalculatorInfoSection from "@/components/calculator/CalculatorInfoSection";
import MaterialComparisonTable from "@/components/calculator/MaterialComparisonTable";
import SEOContentSection from "@/components/calculator/SEOContentSection";
import DebugPanel from "@/components/calculator/DebugPanel";
import STLViewer from "@/components/calculator/STLViewer";
import ProcessSection from "@/components/calculator/ProcessSection";
import { useModelAnalysis } from "@/hooks/useModelAnalysis";
import { type PricingInput, type PricingResult, calculatePrice } from "@/lib/pricingEngine";
import FAQSection from "@/components/landing/FAQSection";
import Breadcrumbs from "@/components/landing/Breadcrumbs";
import { Box } from "lucide-react";

const calculatorFaqs = [
  {
    question: "Wie genau ist der Richtpreis?",
    answer: "Der Richtpreis basiert auf unserer Kalkulationsformel und gibt eine realistische Orientierung. Der endgültige Preis wird nach persönlicher technischer Prüfung Ihrer Datei individuell festgelegt. Wir garantieren weder den Richtpreis noch die Machbarkeit – beides wird erst nach Begutachtung bestätigt."
  },
  {
    question: "Welche Dateiformate werden unterstützt?",
    answer: "Aktuell unterstützen wir STL-Dateien bis 100 MB. Die Datei wird direkt im Browser analysiert – Volumen, Oberfläche und Maße werden automatisch berechnet und als 3D-Vorschau angezeigt. Für andere Formate (OBJ, STEP, 3MF) senden Sie uns bitte eine Anfrage über unser Kontaktformular."
  },
  {
    question: "Was bedeutet Infill (Füllung)?",
    answer: "Der Infill-Wert bestimmt, wie dicht das Innere Ihres Modells gedruckt wird. 10–15 % reicht für leichte Anschauungsmodelle, 30–50 % für stabile Ausstellungsstücke, 100 % für massive Vollkörper. Die optimale Einstellung besprechen wir gerne individuell."
  },
  {
    question: "Welche Materialien bietet ihr an?",
    answer: "Wir drucken mit PLA, PLA+, PETG, ABS, ASA, TPU (flexibel), PA6-CF (Carbonfaser-verstärkt) und Polycarbonat. Jedes Material hat spezifische Eigenschaften – von günstigem PLA für Designstudien bis zu Premium-Carbon für hochwertige Präsentationsmodelle."
  },
  {
    question: "Kann ich direkt über den Rechner bestellen?",
    answer: "Nein. Der Rechner dient ausschließlich zur unverbindlichen Preisindikation. Über das integrierte Formular können Sie eine Anfrage senden – Ihr Projekt wird dann persönlich von uns geprüft. Erst nach individueller Begutachtung erhalten Sie ein verbindliches Angebot."
  },
  {
    question: "Wie lange dauert die Fertigung?",
    answer: "Die geschätzte Druckzeit wird im Rechner angezeigt. Die tatsächliche Lieferzeit hängt von der Auftragslage und Nachbearbeitung ab – in der Regel 3–7 Werktage nach Auftragsbestätigung. Für eilige Projekte bieten wir nach persönlicher Absprache auch Express-Fertigung an."
  },
  {
    question: "Fertigt ihr auch Funktionsteile oder Serienteile?",
    answer: "Nein. Wir sind auf Anschauungsmodelle, Designstudien und Präsentationsobjekte spezialisiert. Anfragen für Funktionsteile, technische Bauteile oder industrielle Serienfertigung können wir leider nicht bearbeiten."
  },
  {
    question: "Was passiert nach dem Absenden meiner Anfrage?",
    answer: "Unser Team prüft Ihr 3D-Modell persönlich auf Druckbarkeit, optimale Orientierung und Materialeignung. Innerhalb von 6 Stunden erhalten Sie eine Rückmeldung mit einer individuellen Einschätzung – inklusive verbindlichem Angebot, sofern Ihr Projekt in unseren Leistungsbereich fällt."
  },
];

const breadcrumbs = [
  { name: "Startseite", url: "/" },
  { name: "Kostenrechner", url: "/kostenrechner" },
];

const Kostenrechner = () => {
  const [result, setResult] = useState<PricingResult | null>(null);
  const [currentInput, setCurrentInput] = useState<PricingInput | null>(null);

  const model = useModelAnalysis();

  const handleCalculate = useCallback((input: PricingInput) => {
    setCurrentInput(input);
    setResult(calculatePrice(input));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="3D-Druck Kostenrechner Österreich – Richtpreis für Anschauungsmodelle [2026]"
        description="Berechnen Sie unverbindlich den Richtpreis für Ihr 3D-gedrucktes Anschauungsmodell: PLA, PETG, ABS & mehr. Persönliche Prüfung jeder Anfrage. Angebot in 6h."
        path="/kostenrechner"
        keywords="3d druck kostenrechner, 3d druck kosten österreich, 3d druck preis berechnen, anschauungsmodell kosten, fdm druck kosten, 3d druck richtpreis, kostenrechner 3d modell"
        breadcrumbs={breadcrumbs}
        schemaType="service"
      />
      <Navigation />

      <main className="pt-20">
        <CalculatorHero />

        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 pt-4 pb-2">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        {/* ── Calculator Section ────────────────────── */}
        <section className="py-6 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

              {/* ── Left Column: Form + 3D Viewer ──── */}
              <div className="lg:col-span-7 space-y-6">
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

                {/* 3D Preview – sits below the form */}
                {model.arrayBuffer ? (
                  <div className="bg-card border border-border/60 rounded-2xl shadow-lg overflow-hidden">
                    <div className="px-5 py-3 border-b border-border/40 bg-muted/20 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-sm font-semibold text-foreground">3D-Vorschau</span>
                      <span className="text-xs text-muted-foreground ml-auto">{model.fileName}</span>
                    </div>
                    <STLViewer
                      buffer={model.arrayBuffer}
                      className="h-[300px] md:h-[360px] rounded-none border-0"
                    />
                  </div>
                ) : (
                  <div className="bg-card border border-dashed border-border/60 rounded-2xl p-8 md:p-10 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-muted/60 flex items-center justify-center mx-auto mb-4">
                      <Box className="h-7 w-7 text-muted-foreground/50" />
                    </div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      3D-Vorschau verfügbar nach Upload
                    </p>
                    <p className="text-xs text-muted-foreground/70">
                      Laden Sie eine STL-Datei in Schritt 1 hoch, um Ihr Modell
                      hier interaktiv zu betrachten.
                    </p>
                  </div>
                )}
              </div>

              {/* ── Right Column: Price (sticky) ───── */}
              <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
                <PriceSummary result={result} input={currentInput} />
              </div>
            </div>

            <DebugPanel result={result} input={currentInput} />
          </div>
        </section>

        {/* ── Process Visualization ────────────────── */}
        <ProcessSection />

        <CalculatorDisclaimer />

        <MaterialComparisonTable />

        <FAQSection
          faqs={calculatorFaqs}
          title="Häufige Fragen zum 3D-Druck Kostenrechner"
          subtitle="Alles Wichtige zu Preiskalkulation, Materialien und dem Ablauf Ihrer Anfrage."
          schemaId="kostenrechner"
        />

        <SEOContentSection />

        <CalculatorInfoSection />
      </main>

      <Footer />
    </div>
  );
};

export default Kostenrechner;
