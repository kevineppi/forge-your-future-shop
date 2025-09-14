import { useState, useCallback, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Info, Sparkles } from "lucide-react";

const CostCalculator = () => {
  const [material, setMaterial] = useState("pla");
  const [complexity, setComplexity] = useState([2]);
  const [quantity, setQuantity] = useState([1]);
  const [length, setLength] = useState([50]);
  const [width, setWidth] = useState([50]);
  const [height, setHeight] = useState([50]);
  const [printDuration, setPrintDuration] = useState([0]);

  const materials = useMemo(() => ({
    pla: { name: "PLA", price: 0.20, factor: 1.0 },
    petg: { name: "PETG", price: 0.32, factor: 1.2 },
    abs: { name: "ABS", price: 0.28, factor: 1.1 },
    pa12: { name: "PA12 Nylon", price: 1.00, factor: 1.6 },
    pa6: { name: "PA6 Nylon", price: 1.00, factor: 1.6 }
  }), []);

  // Safe state setters to prevent invalid values
  const setLengthSafe = useCallback((value: number[]) => {
    try {
      if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'number' && !isNaN(value[0])) {
        const newValue = Math.max(10, Math.min(300, Math.round(value[0])));
        setLength([newValue]);
      }
    } catch (error) {
      console.error('Error setting length:', error);
    }
  }, []);

  const setWidthSafe = useCallback((value: number[]) => {
    try {
      if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'number' && !isNaN(value[0])) {
        const newValue = Math.max(10, Math.min(300, Math.round(value[0])));
        setWidth([newValue]);
      }
    } catch (error) {
      console.error('Error setting width:', error);
    }
  }, []);

  const setHeightSafe = useCallback((value: number[]) => {
    try {
      if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'number' && !isNaN(value[0])) {
        const newValue = Math.max(10, Math.min(300, Math.round(value[0])));
        setHeight([newValue]);
      }
    } catch (error) {
      console.error('Error setting height:', error);
    }
  }, []);

  const setComplexitySafe = useCallback((value: number[]) => {
    try {
      if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'number' && !isNaN(value[0])) {
        const newValue = Math.max(0, Math.min(4, Math.round(value[0])));
        setComplexity([newValue]);
      }
    } catch (error) {
      console.error('Error setting complexity:', error);
    }
  }, []);

  const setQuantitySafe = useCallback((value: number[]) => {
    try {
      if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'number' && !isNaN(value[0])) {
        const newValue = Math.max(1, Math.min(100, Math.round(value[0])));
        setQuantity([newValue]);
      }
    } catch (error) {
      console.error('Error setting quantity:', error);
    }
  }, []);

  const setPrintDurationSafe = useCallback((value: number[]) => {
    try {
      if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'number' && !isNaN(value[0])) {
        const newValue = Math.max(0, Math.min(72, Math.round(value[0])));
        setPrintDuration([newValue]);
      }
    } catch (error) {
      console.error('Error setting print duration:', error);
    }
  }, []);

  const setMaterialSafe = useCallback((value: string) => {
    try {
      if (value && typeof value === 'string' && materials[value as keyof typeof materials]) {
        setMaterial(value);
      }
    } catch (error) {
      console.error('Error setting material:', error);
    }
  }, [materials]);

  const complexityLevels = [
    "Einfach (Grundformen)",
    "Mittel (Details)",
    "Komplex (Feine Strukturen)",
    "Sehr komplex (Überhänge, Support)",
    "Extrem komplex (Multimaterial)"
  ];

  const calculatePrice = useCallback(() => {
    try {
      const baseMaterial = materials[material as keyof typeof materials];
      if (!baseMaterial) return { perPiece: 5, total: 5, savings: 0, printDurationCost: 0, volume: 125000, maxDimension: 50 };
      
      const safeLength = Array.isArray(length) && length.length > 0 ? length[0] : 50;
      const safeWidth = Array.isArray(width) && width.length > 0 ? width[0] : 50;
      const safeHeight = Array.isArray(height) && height.length > 0 ? height[0] : 50;
      const safeComplexity = Array.isArray(complexity) && complexity.length > 0 ? complexity[0] : 2;
      const safeQuantity = Array.isArray(quantity) && quantity.length > 0 ? quantity[0] : 1;
      const safePrintDuration = Array.isArray(printDuration) && printDuration.length > 0 ? printDuration[0] : 0;
      
      const actualVolume = (safeLength * safeWidth * safeHeight) / 1000000; // Convert mm³ to relative volume
      const maxDimension = Math.max(safeLength, safeWidth, safeHeight); // Longest side for print time calculation
      const complexityMultiplier = 1 + (safeComplexity * 0.3);
      const quantityDiscount = safeQuantity > 10 ? 0.9 : safeQuantity > 5 ? 0.95 : 1.0;
      
      const basePrice = actualVolume * baseMaterial.price * complexityMultiplier * baseMaterial.factor * 100;
      
      // Print duration cost calculation based on longest side
      let printDurationCost = 0;
      if (safePrintDuration > 0) {
        let hourlyRate = 1.5; // Default rate for <= 250mm
        if (maxDimension > 250 && maxDimension <= 350) {
          hourlyRate = 4.0;
        }
        printDurationCost = safePrintDuration * hourlyRate;
      }
      
      const totalBasePrice = basePrice + printDurationCost;
      const totalPrice = totalBasePrice * safeQuantity * quantityDiscount;
      
      return {
        perPiece: Math.max(5, totalBasePrice),
        total: Math.max(5 * safeQuantity, totalPrice),
        savings: safeQuantity > 5 ? (totalBasePrice * safeQuantity - totalPrice) : 0,
        printDurationCost,
        volume: actualVolume * 1000000, // Return volume in mm³ for display
        maxDimension
      };
    } catch (error) {
      console.error('Error calculating price:', error);
      return { perPiece: 5, total: 5, savings: 0, printDurationCost: 0, volume: 125000, maxDimension: 50 };
    }
  }, [material, length, width, height, complexity, quantity, printDuration, materials]);

  const pricing = useMemo(() => calculatePrice(), [calculatePrice]);

  return (
    <section id="cost-calculator" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Kosten-<span className="text-gradient">Rechner</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Erhalten Sie eine sofortige Schätzung für Ihr 3D-Druck Projekt
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <Card className="gradient-card border-0 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  Projekt-Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Material Selection */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Material</label>
                  <Select value={material} onValueChange={setMaterialSafe}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(materials).map(([key, mat]) => (
                        <SelectItem key={key} value={key}>
                          {mat.name} - €{mat.price.toFixed(2)}/g
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Dimensions */}
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Länge: {length[0]}mm
                    </label>
                    <Slider
                      value={length}
                      onValueChange={setLengthSafe}
                      max={300}
                      min={10}
                      step={5}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Breite: {width[0]}mm
                    </label>
                    <Slider
                      value={width}
                      onValueChange={setWidthSafe}
                      max={300}
                      min={10}
                      step={5}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Höhe: {height[0]}mm
                    </label>
                    <Slider
                      value={height}
                      onValueChange={setHeightSafe}
                      max={300}
                      min={10}
                      step={5}
                      className="mt-2"
                    />
                  </div>
                  
                  <div className="p-3 bg-muted/30 rounded-lg text-sm">
                    <div className="flex justify-between">
                      <span>Volumen:</span>
                      <span className="font-medium">{(pricing.volume / 1000).toFixed(1)} cm³</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Längste Seite:</span>
                      <span className="font-medium">{pricing.maxDimension}mm</span>
                    </div>
                  </div>
                </div>

                {/* Complexity */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Komplexität: {complexityLevels[complexity[0]]}
                  </label>
                  <Slider
                    value={complexity}
                    onValueChange={setComplexitySafe}
                    max={4}
                    min={0}
                    step={1}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Einfach</span>
                    <span>Extrem komplex</span>
                  </div>
                </div>

                {/* Print Duration */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Druckdauer (falls bekannt): {printDuration[0] === 0 ? "Unbekannt" : `${printDuration[0]}h`}
                  </label>
                  <Slider
                    value={printDuration}
                    onValueChange={setPrintDurationSafe}
                    max={72}
                    min={0}
                    step={1}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0h (unbekannt)</span>
                    <span>72h</span>
                  </div>
                  {printDuration[0] > 0 && (
                    <div className="mt-2 text-sm text-muted-foreground">
                      Kostensatz: {(() => {
                        if (pricing.maxDimension <= 250) return "1,50€";
                        if (pricing.maxDimension <= 350) return "4,00€";
                        return "Über 350mm - Individuelle Berechnung";
                      })()} pro Stunde
                    </div>
                  )}
                </div>

                {/* Quantity */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Stückzahl: {quantity[0]}
                  </label>
                  <Slider
                    value={quantity}
                    onValueChange={setQuantitySafe}
                    max={100}
                    min={1}
                    step={1}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1 Stück</span>
                    <span>100+ Stück</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Results */}
            <Card className="gradient-card border-0 animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Kostenvoranschlag
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                    <span className="font-medium">Preis pro Stück:</span>
                    <span className="text-xl font-bold text-primary">
                      €{pricing.perPiece.toFixed(2)}
                    </span>
                  </div>

                  {pricing.printDurationCost > 0 && (
                    <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                      <span className="font-medium">Druckzeit-Kosten:</span>
                      <span className="text-lg font-semibold">
                        €{pricing.printDurationCost.toFixed(2)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg">
                    <span className="font-medium">Gesamtpreis:</span>
                    <span className="text-2xl font-bold text-primary">
                      €{pricing.total.toFixed(2)}
                    </span>
                  </div>

                  {pricing.savings > 0 && (
                    <div className="flex justify-between items-center p-4 bg-green-500/10 rounded-lg border border-green-500/20 hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <span className="font-medium text-green-600">Mengenrabatt:</span>
                      <span className="text-lg font-bold text-green-600">
                        -€{pricing.savings.toFixed(2)}
                      </span>
                    </div>
                  )}

                  {quantity[0] >= 5 && (
                    <Badge className="w-full justify-center bg-green-500/10 text-green-600 border-green-500/20 hover:scale-105 transition-transform duration-300 cursor-pointer">
                      🎉 Mengenrabatt aktiv!
                    </Badge>
                  )}
                </div>

                <div className="space-y-3 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Info className="w-4 h-4" />
                    Lieferzeit: 2-5 Werktage
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Info className="w-4 h-4" />
                    Inkl. Nachbearbeitung
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Info className="w-4 h-4" />
                    Kostenlose Beratung
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Unverbindliches Angebot anfordern
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Kostenlose Beratung
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Card className="gradient-card border-0 max-w-2xl mx-auto animate-scale-in">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">
                  <Info className="w-4 h-4 inline-block mr-1" />
                  Dies ist eine automatische Schätzung. Für ein präzises Angebot senden Sie uns bitte Ihre 3D-Datei.
                  Komplexe Geometrien oder spezielle Anforderungen können den Preis beeinflussen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;