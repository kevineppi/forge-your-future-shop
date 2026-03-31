import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { pricingConfig } from "@/data/pricingConfig";
import type { PricingInput } from "@/lib/pricingEngine";
import { TEST_CASES } from "@/lib/pricingEngine";
import type { GeometryData } from "@/lib/stlParser";
import ModelUpload from "./ModelUpload";
import { Info, Calculator, FlaskConical, Layers, Box } from "lucide-react";

interface Props {
  onCalculate: (input: PricingInput) => void;
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
  const cfg = pricingConfig;

  const [materialKey, setMaterialKey] = useState("PLA");
  const [color, setColor] = useState("Schwarz");
  const [layerHeight, setLayerHeight] = useState(cfg.defaultLayerHeight);
  const [wallThickness, setWallThickness] = useState(cfg.defaultWallThickness);
  const [infillPercent, setInfillPercent] = useState<number>(cfg.defaultInfillPercent);
  const [quantity, setQuantity] = useState(1);
  const [showTests, setShowTests] = useState(false);

  const materials = cfg.materialKeys;
  const colors = cfg.materialColors[materialKey] ?? [];
  const layerHeights = cfg.layerHeights;
  const wallThicknesses = cfg.wallThicknesses;

  const buildInput = useCallback((): PricingInput => ({
    geometry: geometry
      ? {
          volumeCm3: geometry.volumeCm3,
          surfaceCm2: geometry.surfaceCm2,
          boundingBoxMm: geometry.boundingBoxMm,
        }
      : cfg.placeholderGeometry,
    materialKey,
    layerHeight,
    wallThickness,
    infillPercent,
    quantity: Math.max(1, quantity),
  }), [materialKey, layerHeight, wallThickness, infillPercent, quantity, geometry, cfg.placeholderGeometry]);

  // Auto-update price on any parameter change
  useEffect(() => {
    if (quantity < 1 || !Number.isFinite(quantity)) return;
    onCalculate(buildInput());
  }, [buildInput, onCalculate]);

  const handleMaterialChange = (key: string) => {
    setMaterialKey(key);
    const matColors = cfg.materialColors[key] ?? [];
    if (!matColors.includes(color)) {
      setColor(matColors[0] ?? "Schwarz");
    }
  };

  const loadTestCase = (idx: number) => {
    const tc = TEST_CASES[idx].input;
    setMaterialKey(tc.materialKey);
    setLayerHeight(tc.layerHeight);
    setWallThickness(tc.wallThickness);
    setInfillPercent(tc.infillPercent);
    setQuantity(tc.quantity);
    const matColors = cfg.materialColors[tc.materialKey] ?? [];
    setColor(matColors[0] ?? "Schwarz");
  };

  return (
    <Card className="border-border/60 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          Bauteil konfigurieren
        </CardTitle>
        <p className="text-sm text-muted-foreground">FDM-Druck · Preis aktualisiert sich automatisch</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Material */}
        <div className="space-y-2">
          <Label htmlFor="material" className="text-sm font-semibold flex items-center gap-1.5">
            <Box className="h-3.5 w-3.5 text-primary" />
            Material
          </Label>
          <Select value={materialKey} onValueChange={(v) => handleMaterialChange(v)}>
            <SelectTrigger id="material">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {materials.map((key) => (
                <SelectItem key={key} value={key}>
                  {cfg.materialLabels[key]} – €{cfg.pricePerKg[key]}/kg
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

        {/* Infill */}
        <div className="space-y-3">
          <Label className="text-sm font-semibold flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-primary" />
            Infill (Füllung)
            <span className="ml-auto text-sm font-bold text-primary">{infillPercent}%</span>
          </Label>
          <Slider
            value={[infillPercent]}
            onValueChange={(v) => setInfillPercent(v[0])}
            min={10}
            max={100}
            step={5}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>10% – Leicht</span>
            <span>50% – Stabil</span>
            <span>100% – Massiv</span>
          </div>
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
          {quantity > 10000 && (
            <p className="text-sm text-destructive">Für Großaufträge über 10.000 Stück kontaktieren Sie uns bitte direkt.</p>
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
            Ohne STL-Datei wird mit Standardwerten kalkuliert (50×50×50 mm).
          </p>
        )}

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
      </CardContent>
    </Card>
  );
};

export default CalculatorForm;
