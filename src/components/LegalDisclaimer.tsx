import { AlertTriangle, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface LegalDisclaimerProps {
  variant?: "full" | "compact";
  className?: string;
}

const LegalDisclaimer = ({ variant = "full", className = "" }: LegalDisclaimerProps) => {
  if (variant === "compact") {
    return (
      <div className={`bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 ${className}`}>
        <div className="flex items-start gap-3">
          <Info className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Hinweis:</strong> Wir fertigen ausschließlich Anschauungsmodelle, Dekorationsobjekte und 
            Kunst-/Ziergegenstände. <strong>Keine Funktionsteile oder technische Bauteile.</strong>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Alert className={`border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 ${className}`}>
      <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
      <AlertTitle className="text-amber-800 dark:text-amber-200 font-semibold">
        Wichtiger Hinweis zu unserem Leistungsumfang
      </AlertTitle>
      <AlertDescription className="text-amber-700 dark:text-amber-300 mt-3 space-y-3">
        <p>
          Gemäß unserer Gewerbeberechtigung fertigen wir <strong>ausschließlich</strong>:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li><strong>Anschauungsmodelle</strong> – Architekturmodelle, Präsentationsmodelle, Konzeptmodelle</li>
          <li><strong>Dekorationsobjekte</strong> – Wohnaccessoires, Messedekorationen, Schaufensterdeko</li>
          <li><strong>Kunst- und Ziergegenstände</strong> – Skulpturen, künstlerische Objekte, Unikate</li>
        </ul>
        <div className="bg-amber-100 dark:bg-amber-900/50 rounded-lg p-3 mt-4">
          <p className="font-semibold text-amber-900 dark:text-amber-100">
            Folgende Produkte können wir NICHT fertigen:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
            <li>Funktionsteile oder technische Bauteile (auch nicht einzeln)</li>
            <li>Ersatzteile für Maschinen, Geräte oder Fahrzeuge</li>
            <li>Medizinische Produkte oder Hilfsmittel</li>
            <li>Sicherheitsrelevante Komponenten</li>
          </ul>
        </div>
        <p className="text-sm italic mt-3">
          Bei Fragen zur Machbarkeit Ihres Projekts beraten wir Sie gerne vorab kostenlos.
        </p>
      </AlertDescription>
    </Alert>
  );
};

export default LegalDisclaimer;
