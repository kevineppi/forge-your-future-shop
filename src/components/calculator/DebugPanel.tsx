import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { PRICING_CONFIG } from "@/data/pricingConfig";
import type { PriceBreakdown, CalculatorInput } from "@/lib/priceCalculator";
import { Bug, Save, Trash2 } from "lucide-react";

interface Props {
  result: PriceBreakdown | null;
  input: CalculatorInput | null;
}

interface ReferenceValues {
  volumeCm3: number;
  surfaceCm2: number;
  widthMm: number;
  depthMm: number;
  heightMm: number;
}

interface SavedReferenceTest {
  id: string;
  label: string;
  timestamp: string;
  geometry: {
    volumeCm3: number;
    surfaceCm2: number;
    boundingBoxMm: { x: number; y: number; z: number };
  };
  reference: ReferenceValues;
}

const STORAGE_KEY = "ekdruck_reference_tests";

function loadSavedTests(): SavedReferenceTest[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveSavedTests(tests: SavedReferenceTest[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tests));
}

interface DeviationRowProps {
  label: string;
  actual: number;
  reference: number;
  unit: string;
}

const DeviationRow = ({ label, actual, reference, unit }: DeviationRowProps) => {
  const absDev = actual - reference;
  const pctDev = reference !== 0 ? (absDev / reference) * 100 : 0;
  const absPct = Math.abs(pctDev);

  let colorClass = "text-green-600";
  let bgClass = "bg-green-500/10";
  if (absPct > 10) {
    colorClass = "text-destructive";
    bgClass = "bg-destructive/10";
  } else if (absPct > 3) {
    colorClass = "text-yellow-600";
    bgClass = "bg-yellow-500/10";
  }

  return (
    <div className={`grid grid-cols-5 gap-2 items-center rounded px-2 py-1 text-xs ${bgClass}`}>
      <span className="text-muted-foreground col-span-1">{label}</span>
      <span className="text-foreground text-right">{actual.toFixed(2)} {unit}</span>
      <span className="text-muted-foreground text-right">{reference.toFixed(2)} {unit}</span>
      <span className={`text-right font-medium ${colorClass}`}>
        {absDev >= 0 ? "+" : ""}{absDev.toFixed(2)} {unit}
      </span>
      <span className={`text-right font-semibold ${colorClass}`}>
        {absDev >= 0 ? "+" : ""}{pctDev.toFixed(1)} %
      </span>
    </div>
  );
};

const DebugPanel = ({ result, input }: Props) => {
  const [open, setOpen] = useState(false);
  const [refValues, setRefValues] = useState<ReferenceValues>({
    volumeCm3: 0,
    surfaceCm2: 0,
    widthMm: 0,
    depthMm: 0,
    heightMm: 0,
  });
  const [savedTests, setSavedTests] = useState<SavedReferenceTest[]>(loadSavedTests);

  if (!result || !input) return null;

  const cfg = PRICING_CONFIG;

  const actualVolume = input.volumeCm3 ?? cfg.placeholderGeometry.volumeCm3;
  const actualSurface = input.surfaceCm2 ?? cfg.placeholderGeometry.surfaceCm2;
  const actualBB = input.boundingBoxMm ?? cfg.placeholderGeometry.boundingBoxMm;

  const hasRefValues = refValues.volumeCm3 > 0 || refValues.surfaceCm2 > 0 ||
    refValues.widthMm > 0 || refValues.depthMm > 0 || refValues.heightMm > 0;

  const handleSaveTest = () => {
    const newTest: SavedReferenceTest = {
      id: crypto.randomUUID(),
      label: `Test ${new Date().toLocaleString("de-AT")}`,
      timestamp: new Date().toISOString(),
      geometry: {
        volumeCm3: actualVolume,
        surfaceCm2: actualSurface,
        boundingBoxMm: { ...actualBB },
      },
      reference: { ...refValues },
    };
    const updated = [...savedTests, newTest];
    setSavedTests(updated);
    saveSavedTests(updated);
  };

  const handleDeleteTest = (id: string) => {
    const updated = savedTests.filter((t) => t.id !== id);
    setSavedTests(updated);
    saveSavedTests(updated);
  };

  const updateRef = (key: keyof ReferenceValues, value: string) => {
    setRefValues((prev) => ({ ...prev, [key]: parseFloat(value) || 0 }));
  };

  return (
    <div className="mt-8">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        <Bug className="h-3.5 w-3.5" />
        {open ? "Debug ausblenden" : "Debug anzeigen"}
      </button>

      {open && (
        <Card className="mt-3 border-dashed border-muted-foreground/30 bg-muted/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-mono flex items-center gap-2">
              <Bug className="h-4 w-4" />
              Debug / Testdaten
              <Badge variant="outline" className="text-[10px]">Intern</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-xs font-mono">
            {/* Eingaben */}
            <div>
              <h4 className="font-semibold text-foreground mb-1">Eingaben</h4>
              <pre className="bg-background rounded p-2 overflow-x-auto whitespace-pre-wrap text-muted-foreground">
{JSON.stringify({
  process: input.process,
  materialKey: input.materialKey,
  layerHeight: input.layerHeight,
  wallThickness: input.wallThickness,
  quantity: input.quantity,
  volumeCm3: input.volumeCm3 ?? cfg.placeholderGeometry.volumeCm3 + " (Platzhalter)",
  surfaceCm2: input.surfaceCm2 ?? cfg.placeholderGeometry.surfaceCm2 + " (Platzhalter)",
}, null, 2)}
              </pre>
            </div>

            {/* Konfiguration */}
            <div>
              <h4 className="font-semibold text-foreground mb-1">Konfigurationswerte</h4>
              <pre className="bg-background rounded p-2 overflow-x-auto whitespace-pre-wrap text-muted-foreground">
{JSON.stringify({
  hourlyRate: cfg.hourlyRate,
  setupTimeMin: cfg.setupTimeMin,
  volumeUnitCm3: cfg.volumeUnitCm3,
  infillFactor: cfg.infillFactor,
  surfaceFactor: cfg.surfaceFactor,
  vatRate: cfg.vatRate,
  minimumOrderThresholdNet: cfg.minimumOrderThresholdNet,
  minimumOrderSurchargeNet: cfg.minimumOrderSurchargeNet,
  materialPricePerKg: cfg.materialPricePerKg[input.materialKey],
  densityFactor: cfg.densityFactor[input.materialKey],
  processTimeFactor: cfg.processTimeFactor[input.process],
  minimumProcessTimeMin: cfg.minimumProcessTimeMin[input.process],
  layerHeightFactor: result.layerHeightFactorUsed,
}, null, 2)}
              </pre>
            </div>

            {/* Zwischenergebnisse */}
            <div>
              <h4 className="font-semibold text-foreground mb-1">Zwischenergebnisse</h4>
              <pre className="bg-background rounded p-2 overflow-x-auto whitespace-pre-wrap text-muted-foreground">
{JSON.stringify({
  surfaceVolume: +result.surfaceVolume.toFixed(4),
  infillVolume: +result.infillVolume.toFixed(4),
  printVolume: +result.printVolume.toFixed(4),
  materialWeightG: +result.materialWeightG.toFixed(4),
  wallCost: +result.wallCost.toFixed(4),
  infillCost: +result.infillCost.toFixed(4),
  costPerMinute: +result.costPerMinute.toFixed(4),
  laborCostTotal: +result.laborCostTotal.toFixed(4),
  processTimePerPartMin: +result.processTimePerPartMin.toFixed(2),
  totalProductionTimeMin: +result.totalProductionTimeMin.toFixed(2),
  totalTimeMin: +result.totalTimeMin.toFixed(2),
  setupCost: +result.setupCost.toFixed(2),
}, null, 2)}
              </pre>
            </div>

            {/* Rabatte */}
            <div>
              <h4 className="font-semibold text-foreground mb-1">Rabatte & Zuschläge</h4>
              <pre className="bg-background rounded p-2 overflow-x-auto whitespace-pre-wrap text-muted-foreground">
{JSON.stringify({
  quantityDiscountRate: result.quantityDiscountRate,
  quantityDiscountAmount: +result.quantityDiscountAmount.toFixed(2),
  netAfterQuantityDiscount: +result.netAfterQuantityDiscount.toFixed(2),
  orderValueDiscountRate: result.orderValueDiscountRate,
  orderValueDiscountAmount: +result.orderValueDiscountAmount.toFixed(2),
  netAfterOrderValueDiscount: +result.netAfterOrderValueDiscount.toFixed(2),
  minimumOrderSurcharge: +result.minimumOrderSurcharge.toFixed(2),
}, null, 2)}
              </pre>
            </div>

            {/* Endergebnis */}
            <div>
              <h4 className="font-semibold text-foreground mb-1">Endergebnis</h4>
              <pre className="bg-background rounded p-2 overflow-x-auto whitespace-pre-wrap text-muted-foreground">
{JSON.stringify({
  materialCostPerPart: +result.materialCostPerPart.toFixed(2),
  laborCostPerPart: +result.laborCostPerPart.toFixed(2),
  rawUnitNet: +result.rawUnitNet.toFixed(2),
  subtotalNet: +result.subtotalNet.toFixed(2),
  finalNet: +result.finalNet.toFixed(2),
  vatAmount: +result.vatAmount.toFixed(2),
  finalGross: +result.finalGross.toFixed(2),
}, null, 2)}
              </pre>
            </div>

            <Separator />

            {/* ══════════ Referenzvergleich ══════════ */}
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-sm">
                📐 Referenzvergleich – Geometriedaten
              </h4>
              <p className="text-muted-foreground mb-3 font-sans text-xs">
                Tragen Sie die Referenzwerte eines externen Kalkulators ein, um die Abweichung zu prüfen.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4 font-sans">
                <div className="space-y-1">
                  <Label className="text-[11px]">Ref. Volumen (cm³)</Label>
                  <Input
                    type="number"
                    step="0.01"
                    min={0}
                    value={refValues.volumeCm3 || ""}
                    onChange={(e) => updateRef("volumeCm3", e.target.value)}
                    placeholder="z.B. 24.5"
                    className="h-8 text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-[11px]">Ref. Oberfläche (cm²)</Label>
                  <Input
                    type="number"
                    step="0.01"
                    min={0}
                    value={refValues.surfaceCm2 || ""}
                    onChange={(e) => updateRef("surfaceCm2", e.target.value)}
                    placeholder="z.B. 98.2"
                    className="h-8 text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-[11px]">Ref. Breite (mm)</Label>
                  <Input
                    type="number"
                    step="0.1"
                    min={0}
                    value={refValues.widthMm || ""}
                    onChange={(e) => updateRef("widthMm", e.target.value)}
                    placeholder="z.B. 50"
                    className="h-8 text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-[11px]">Ref. Tiefe (mm)</Label>
                  <Input
                    type="number"
                    step="0.1"
                    min={0}
                    value={refValues.depthMm || ""}
                    onChange={(e) => updateRef("depthMm", e.target.value)}
                    placeholder="z.B. 50"
                    className="h-8 text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-[11px]">Ref. Höhe (mm)</Label>
                  <Input
                    type="number"
                    step="0.1"
                    min={0}
                    value={refValues.heightMm || ""}
                    onChange={(e) => updateRef("heightMm", e.target.value)}
                    placeholder="z.B. 50"
                    className="h-8 text-xs"
                  />
                </div>
              </div>

              {/* Abweichungstabelle */}
              {hasRefValues && (
                <div className="space-y-1 mb-4">
                  <div className="grid grid-cols-5 gap-2 px-2 py-1 text-[10px] text-muted-foreground font-semibold uppercase tracking-wide">
                    <span>Wert</span>
                    <span className="text-right">Berechnet</span>
                    <span className="text-right">Referenz</span>
                    <span className="text-right">Abweichung</span>
                    <span className="text-right">Abw. %</span>
                  </div>
                  {refValues.volumeCm3 > 0 && (
                    <DeviationRow label="Volumen" actual={actualVolume} reference={refValues.volumeCm3} unit="cm³" />
                  )}
                  {refValues.surfaceCm2 > 0 && (
                    <DeviationRow label="Oberfläche" actual={actualSurface} reference={refValues.surfaceCm2} unit="cm²" />
                  )}
                  {refValues.widthMm > 0 && (
                    <DeviationRow label="Breite (X)" actual={actualBB.x} reference={refValues.widthMm} unit="mm" />
                  )}
                  {refValues.depthMm > 0 && (
                    <DeviationRow label="Tiefe (Y)" actual={actualBB.y} reference={refValues.depthMm} unit="mm" />
                  )}
                  {refValues.heightMm > 0 && (
                    <DeviationRow label="Höhe (Z)" actual={actualBB.z} reference={refValues.heightMm} unit="mm" />
                  )}
                </div>
              )}

              {/* Speichern-Button */}
              {hasRefValues && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  onClick={handleSaveTest}
                >
                  <Save className="h-3.5 w-3.5 mr-1.5" />
                  Aktuelle Datei als Referenztest speichern
                </Button>
              )}
            </div>

            {/* Gespeicherte Referenztests */}
            {savedTests.length > 0 && (
              <>
                <Separator />
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">
                    💾 Gespeicherte Referenztests ({savedTests.length})
                  </h4>
                  <div className="space-y-2">
                    {savedTests.map((test) => (
                      <div
                        key={test.id}
                        className="bg-background rounded-lg p-3 border border-border/50"
                      >
                        <div className="flex items-center justify-between mb-2 font-sans">
                          <span className="text-xs font-medium text-foreground">{test.label}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-muted-foreground">
                              {new Date(test.timestamp).toLocaleString("de-AT")}
                            </span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => handleDeleteTest(test.id)}
                            >
                              <Trash2 className="h-3 w-3 text-destructive" />
                            </Button>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-[11px] text-muted-foreground">
                          <span>Volumen: {test.geometry.volumeCm3.toFixed(2)} cm³</span>
                          <span>Ref: {test.reference.volumeCm3.toFixed(2)} cm³</span>
                          <span>Oberfläche: {test.geometry.surfaceCm2.toFixed(2)} cm²</span>
                          <span>Ref: {test.reference.surfaceCm2.toFixed(2)} cm²</span>
                          <span>BB: {test.geometry.boundingBoxMm.x}×{test.geometry.boundingBoxMm.y}×{test.geometry.boundingBoxMm.z} mm</span>
                          <span>Ref: {test.reference.widthMm}×{test.reference.depthMm}×{test.reference.heightMm} mm</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DebugPanel;
