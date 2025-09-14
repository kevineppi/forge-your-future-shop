import { useState, useCallback, useMemo, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Info, Sparkles } from "lucide-react";

const CostCalculator = () => {
  // Add loading state to prevent early rendering issues
  const [isClient, setIsClient] = useState(false);
  
  // Initialize state with proper defaults
  const [material, setMaterial] = useState("pla");
  const [complexity, setComplexity] = useState(2);
  const [quantity, setQuantity] = useState(1);
  const [length, setLength] = useState(50);
  const [width, setWidth] = useState(50);
  const [height, setHeight] = useState(50);
  const [printDuration, setPrintDuration] = useState(0);

  // Ensure component is properly hydrated
  useEffect(() => {
    setIsClient(true);
  }, []);

  const materials = {
    pla: { name: "PLA", price: 0.20, factor: 1.0 },
    petg: { name: "PETG", price: 0.32, factor: 1.2 },
    abs: { name: "ABS", price: 0.28, factor: 1.1 },
    pa12: { name: "PA12 Nylon", price: 1.00, factor: 1.6 },
    pa6: { name: "PA6 Nylon", price: 1.00, factor: 1.6 }
  };

  const complexityLevels = [
    "Einfach (Grundformen)",
    "Mittel (Details)",
    "Komplex (Feine Strukturen)",
    "Sehr komplex (Überhänge, Support)",
    "Extrem komplex (Multimaterial)"
  ];

  // Safe state setters with proper number handling
  const handleLengthChange = useCallback((value: number[]) => {
    if (value && value[0] && typeof value[0] === 'number') {
      const newValue = Math.max(10, Math.min(300, Math.round(value[0])));
      setLength(newValue);
    }
  }, []);

  const handleWidthChange = useCallback((value: number[]) => {
    if (value && value[0] && typeof value[0] === 'number') {
      const newValue = Math.max(10, Math.min(300, Math.round(value[0])));
      setWidth(newValue);
    }
  }, []);

  const handleHeightChange = useCallback((value: number[]) => {
    if (value && value[0] && typeof value[0] === 'number') {
      const newValue = Math.max(10, Math.min(300, Math.round(value[0])));
      setHeight(newValue);
    }
  }, []);

  const handleComplexityChange = useCallback((value: number[]) => {
    if (value && value[0] && typeof value[0] === 'number') {
      const newValue = Math.max(0, Math.min(4, Math.round(value[0])));
      setComplexity(newValue);
    }
  }, []);

  const handleQuantityChange = useCallback((value: number[]) => {
    if (value && value[0] && typeof value[0] === 'number') {
      const newValue = Math.max(1, Math.min(100, Math.round(value[0])));
      setQuantity(newValue);
    }
  }, []);

  const handlePrintDurationChange = useCallback((value: number[]) => {
    if (value && value[0] && typeof value[0] === 'number') {
      const newValue = Math.max(0, Math.min(72, Math.round(value[0])));
      setPrintDuration(newValue);
    }
  }, []);

  const handleMaterialChange = useCallback((value: string) => {
    if (value && typeof value === 'string' && materials[value as keyof typeof materials]) {
      setMaterial(value);
    }
  }, []);

  const calculatePrice = useCallback(() => {
    try {
      const baseMaterial = materials[material as keyof typeof materials];
      if (!baseMaterial) return { perPiece: 5, total: 5, savings: 0, printDurationCost: 0, volume: 125000, maxDimension: 50 };
      
      const actualVolume = (length * width * height) / 1000000;
      const maxDimension = Math.max(length, width, height);
      const complexityMultiplier = 1 + (complexity * 0.3);
      const quantityDiscount = quantity > 10 ? 0.9 : quantity > 5 ? 0.95 : 1.0;
      
      const basePrice = actualVolume * baseMaterial.price * complexityMultiplier * baseMaterial.factor * 100;
      
      let printDurationCost = 0;
      if (printDuration > 0) {
        let hourlyRate = 1.5;
        if (maxDimension > 250 && maxDimension <= 350) {
          hourlyRate = 4.0;
        }
        printDurationCost = printDuration * hourlyRate;
      }
      
      const totalBasePrice = basePrice + printDurationCost;
      const totalPrice = totalBasePrice * quantity * quantityDiscount;
      
      return {
        perPiece: Math.max(5, totalBasePrice),
        total: Math.max(5 * quantity, totalPrice),
        savings: quantity > 5 ? (totalBasePrice * quantity - totalPrice) : 0,
        printDurationCost,
        volume: actualVolume * 1000000,
        maxDimension
      };
    } catch (error) {
      console.error('Error calculating price:', error);
      return { perPiece: 5, total: 5, savings: 0, printDurationCost: 0, volume: 125000, maxDimension: 50 };
    }
  }, [material, length, width, height, complexity, quantity, printDuration]);

  const pricing = useMemo(() => calculatePrice(), [calculatePrice]);

  // Prevent rendering until client-side hydration is complete
  if (!isClient) {
    return (
      <section id="cost-calculator" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Kosten-<span className="text-gradient">Rechner</span>
            </h2>
            <p className="text-xl text-muted-foreground">Lädt...</p>
          </div>
        </div>
      </section>
    );
  }

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
                  <Select value={material} onValueChange={handleMaterialChange}>
                    <SelectTrigger className="w-full bg-background">
                      <SelectValue placeholder="Material auswählen" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border border-border z-50">
                      <SelectItem value="pla">PLA - €0.20/g</SelectItem>
                      <SelectItem value="petg">PETG - €0.32/g</SelectItem>
                      <SelectItem value="abs">ABS - €0.28/g</SelectItem>
                      <SelectItem value="pa12">PA12 Nylon - €1.00/g</SelectItem>
                      <SelectItem value="pa6">PA6 Nylon - €1.00/g</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Dimensions */}
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Länge: {length}mm
                    </label>
                    <Slider
                      value={[length]}
                      onValueChange={handleLengthChange}
                      max={300}
                      min={10}
                      step={5}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Breite: {width}mm
                    </label>
                    <Slider
                      value={[width]}
                      onValueChange={handleWidthChange}
                      max={300}
                      min={10}
                      step={5}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Höhe: {height}mm
                    </label>
                    <Slider
                      value={[height]}
                      onValueChange={handleHeightChange}
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
                    Komplexität: {complexityLevels[complexity]}
                  </label>
                  <Slider
                    value={[complexity]}
                    onValueChange={handleComplexityChange}
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
                    Druckdauer (falls bekannt): {printDuration === 0 ? "Unbekannt" : `${printDuration}h`}
                  </label>
                  <Slider
                    value={[printDuration]}
                    onValueChange={handlePrintDurationChange}
                    max={72}
                    min={0}
                    step={1}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0h (unbekannt)</span>
                    <span>72h</span>
                  </div>
                  {printDuration > 0 && (
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
                    Stückzahl: {quantity}
                  </label>
                  <Slider
                    value={[quantity]}
                    onValueChange={handleQuantityChange}
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

                  {quantity >= 5 && (
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