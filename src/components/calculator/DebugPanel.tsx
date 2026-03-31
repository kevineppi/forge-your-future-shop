import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PRICING_CONFIG } from "@/data/pricingConfig";
import type { PriceBreakdown, CalculatorInput } from "@/lib/priceCalculator";
import { Bug } from "lucide-react";

interface Props {
  result: PriceBreakdown | null;
  input: CalculatorInput | null;
}

const DebugPanel = ({ result, input }: Props) => {
  const [open, setOpen] = useState(false);

  if (!result || !input) return null;

  const cfg = PRICING_CONFIG;

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
  volumeCm3: input.volumeCm3 ?? cfg.placeholderGeometry.volumeCm3 + ' (Platzhalter)',
  surfaceCm2: input.surfaceCm2 ?? cfg.placeholderGeometry.surfaceCm2 + ' (Platzhalter)',
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
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DebugPanel;
