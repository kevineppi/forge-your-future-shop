import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PRICING_CONFIG, type ProcessType, type MaterialKey } from "@/data/pricingConfig";
import type { CalculatorInput } from "@/lib/priceCalculator";
import { TEST_CASES } from "@/lib/priceCalculator";
import type { GeometryData } from "@/lib/stlParser";
import ModelUpload from "./ModelUpload";
import { Info, Calculator, FlaskConical } from "lucide-react";

interface Props {
  onCalculate: (input: CalculatorInput) => void;
  /** Geometry from STL analysis – passed down from parent */
  geometry: GeometryData | null;
  fileName: string | null;
  fileSize: number | null;
  isAnalyzing: boolean;
  uploadError: string | null;
  onFileSelect: (file: File) => void;
  onFileClear: () => void;
}

const CalculatorForm = ({
  onCalculate,
  geometry,
  fileName,
  fileSize,
  isAnalyzing,
  uploadError,
  onFileSelect,
  onFileClear,
}: Props) => {
  const cfg = PRICING_CONFIG;

  const [process, setProcess] = useState<ProcessType>("FDM");
  const [materialKey, setMaterialKey] = useState<MaterialKey>("PLA");
  const [color, setColor] = useState("Schwarz");
  const [layerHeight, setLayerHeight] = useState(cfg.defaultLayerHeight.FDM);
  const [wallThickness, setWallThickness] = useState(cfg.defaultWallThickness.FDM);
  const [quantity, setQuantity] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showTests, setShowTests] = useState(false);

  const materials = cfg.processMaterials[process];
  const colors = cfg.materialColors[materialKey] ?? [];
  const layerHeights = cfg.processLayerHeights[process];
  const wallThicknesses = cfg.processWallThicknesses[process];

  const handleProcessChange = (val: ProcessType) => {
    setProcess(val);
    const firstMat = cfg.processMaterials[val][0];
    setMaterialKey(firstMat);
    setLayerHeight(cfg.defaultLayerHeight[val]);
    setWallThickness(cfg.defaultWallThickness[val]);
    const firstColors = cfg.materialColors[firstMat] ?? [];
    setColor(firstColors[0] || "Schwarz");
  };

  const handleMaterialChange = (key: MaterialKey) => {
    setMaterialKey(key);
    const matColors = cfg.materialColors[key] ?? [];
    if (!matColors.includes(color)) {
      setColor(matColors[0] ?? "Schwarz");
    }
  };

  const buildInput = (): CalculatorInput => ({
    process,
    materialKey,
    layerHeight,
    wallThickness,
    quantity,
    ...(geometry
      ? {
          volumeCm3: geometry.volumeCm3,
          surfaceCm2: geometry.surfaceCm2,
          boundingBoxMm: geometry.boundingBoxMm,
        }
      : {}),
  });

  const loadTestCase = (idx: number) => {
    const tc = TEST_CASES[idx].input;
    setProcess(tc.process);
    setMaterialKey(tc.materialKey);
    setLayerHeight(tc.layerHeight);
    setWallThickness(tc.wallThickness);
    setQuantity(tc.quantity);
    const matColors = cfg.materialColors[tc.materialKey] ?? [];
    setColor(matColors[0] ?? "Schwarz");
    // Test cases use placeholder geometry (no file override)
    onCalculate(tc);
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (quantity < 1 || !Number.isFinite(quantity)) {
      errs.quantity = "Bitte geben Sie eine gültige Stückzahl ein (mind. 1).";
    }
    if (quantity > 10000) {
      errs.quantity = "Für Großaufträge über 10.000 Stück kontaktieren Sie uns bitte direkt.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onCalculate(buildInput());
  };

  return (
    <Card className="border-border/60 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          Konfiguration
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Verfahren */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold">Verfahren</Label>
            <RadioGroup
              value={process}
              onValueChange={(v) => handleProcessChange(v as ProcessType)}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              {(["FDM", "SLA", "SLS"] as ProcessType[]).map((key) => (
                <label
                  key={key}
                  className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                    process === key
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-border hover:border-primary/40"
                  }`}
                >
                  <RadioGroupItem value={key} />
                  <div>
                    <div className="font-medium text-sm">{key}</div>
                    <div className="text-xs text-muted-foreground">
                      {key === "FDM" && "Vielseitig & günstig"}
                      {key === "SLA" && "Hochpräzise Oberflächen"}
                      {key === "SLS" && "Mechanisch belastbar"}
                    </div>
                  </div>
                </label>
              ))}
            </RadioGroup>
          </div>

          {/* Material */}
          <div className="space-y-2">
            <Label htmlFor="material" className="text-sm font-semibold">Material</Label>
            <Select value={materialKey} onValueChange={(v) => handleMaterialChange(v as MaterialKey)}>
              <SelectTrigger id="material">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {materials.map((key) => (
                  <SelectItem key={key} value={key}>
                    {cfg.materialLabels[key]} – €{cfg.materialPricePerKg[key]}/kg
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Farbe */}
          <div className="space-y-2">
            <Label htmlFor="color" className="text-sm font-semibold">Farbe</Label>
            <Select value={color} onValueChange={setColor}>
              <SelectTrigger id="color">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {colors.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Schichtdicke & Wandstärke */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="layerHeight" className="text-sm font-semibold">Schichtdicke (mm)</Label>
              <Select value={String(layerHeight)} onValueChange={(v) => setLayerHeight(Number(v))}>
                <SelectTrigger id="layerHeight">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {layerHeights.map((h) => (
                    <SelectItem key={h} value={String(h)}>{h} mm</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="wallThickness" className="text-sm font-semibold">Wandstärke (mm)</Label>
              <Select value={String(wallThickness)} onValueChange={(v) => setWallThickness(Number(v))}>
                <SelectTrigger id="wallThickness">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {wallThicknesses.map((w) => (
                    <SelectItem key={w} value={String(w)}>{w} mm</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Anzahl */}
          <div className="space-y-2">
            <Label htmlFor="quantity" className="text-sm font-semibold">Anzahl (Stück)</Label>
            <Input
              id="quantity"
              type="number"
              min={1}
              max={10000}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            />
            {errors.quantity && (
              <p className="text-sm text-destructive">{errors.quantity}</p>
            )}
          </div>

          {/* STL Upload */}
          <ModelUpload
            geometry={geometry}
            fileName={fileName}
            fileSize={fileSize}
            isAnalyzing={isAnalyzing}
            error={uploadError}
            onFileSelect={onFileSelect}
            onClear={onFileClear}
          />

          {!geometry && (
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Info className="h-3 w-3" />
              Ohne STL-Datei wird mit Standardwerten kalkuliert.
            </p>
          )}

          {/* Submit */}
          <Button type="submit" variant="cta" size="lg" className="w-full">
            Richtpreis kalkulieren
          </Button>

          {/* Testkonfigurationen */}
          <div className="pt-2 border-t border-border/50">
            <button
              type="button"
              onClick={() => setShowTests(!showTests)}
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <FlaskConical className="h-3.5 w-3.5" />
              {showTests ? "Testkonfigurationen ausblenden" : "Testkonfiguration laden"}
            </button>
            {showTests && (
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {TEST_CASES.map((tc, i) => (
                  <Button
                    key={i}
                    type="button"
                    variant="outline"
                    size="sm"
                    className="text-xs justify-start"
                    onClick={() => loadTestCase(i)}
                  >
                    {tc.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CalculatorForm;
