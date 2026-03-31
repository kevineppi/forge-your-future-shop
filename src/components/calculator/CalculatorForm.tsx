import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PRICING_CONFIG, type ProcessType } from "@/data/pricingConfig";
import type { CalculatorInput } from "@/lib/priceCalculator";
import { Upload, Info, Calculator } from "lucide-react";

interface Props {
  onCalculate: (input: CalculatorInput) => void;
}

const CalculatorForm = ({ onCalculate }: Props) => {
  const [process, setProcess] = useState<ProcessType>("FDM");
  const [materialKey, setMaterialKey] = useState("PLA");
  const [color, setColor] = useState("Schwarz");
  const [layerHeight, setLayerHeight] = useState(PRICING_CONFIG.processes.FDM.defaultLayerHeight);
  const [wallThickness, setWallThickness] = useState(PRICING_CONFIG.processes.FDM.defaultWallThickness);
  const [quantity, setQuantity] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const currentProcess = PRICING_CONFIG.processes[process];
  const materials = useMemo(() => Object.entries(currentProcess.materials), [currentProcess]);
  const currentMaterial = currentProcess.materials[materialKey];

  // Wenn Verfahren wechselt, erstes Material und Defaults setzen
  const handleProcessChange = (val: ProcessType) => {
    setProcess(val);
    const proc = PRICING_CONFIG.processes[val];
    const firstMat = Object.keys(proc.materials)[0];
    setMaterialKey(firstMat);
    setLayerHeight(proc.defaultLayerHeight);
    setWallThickness(proc.defaultWallThickness);
    const firstMatColors = proc.materials[firstMat].colors;
    setColor(firstMatColors[0] || "Schwarz");
  };

  const handleMaterialChange = (key: string) => {
    setMaterialKey(key);
    const mat = currentProcess.materials[key];
    if (mat && !mat.colors.includes(color)) {
      setColor(mat.colors[0]);
    }
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
    onCalculate({
      process,
      materialKey,
      layerHeight,
      wallThickness,
      quantity,
    });
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
              {(Object.keys(PRICING_CONFIG.processes) as ProcessType[]).map((key) => (
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
            <Select value={materialKey} onValueChange={handleMaterialChange}>
              <SelectTrigger id="material">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {materials.map(([key, mat]) => (
                  <SelectItem key={key} value={key}>
                    {mat.label} – €{mat.pricePerKg}/kg
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
                {currentMaterial?.colors.map((c) => (
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
                  {currentProcess.layerHeights.map((h) => (
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
                  {currentProcess.wallThicknesses.map((w) => (
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

          {/* Datei-Upload Platzhalter */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold">3D-Datei (optional)</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/40 transition-colors">
              <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">
                STL, STEP oder OBJ Datei hierher ziehen
              </p>
              <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1">
                <Info className="h-3 w-3" />
                Datei-Analyse wird in einem späteren Schritt ergänzt.
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Aktuell wird mit Standardwerten kalkuliert.
              </p>
            </div>
          </div>

          {/* Submit */}
          <Button type="submit" variant="cta" size="lg" className="w-full">
            Richtpreis kalkulieren
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CalculatorForm;
