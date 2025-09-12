import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Info, Sparkles } from "lucide-react";
import LoadingSkeleton from "@/components/LoadingSkeleton";

const CostCalculator = () => {
  const [material, setMaterial] = useState("pla");
  const [complexity, setComplexity] = useState([2]);
  const [quantity, setQuantity] = useState([1]);
  const [length, setLength] = useState([50]);
  const [width, setWidth] = useState([50]);
  const [height, setHeight] = useState([50]);
  const [printDuration, setPrintDuration] = useState([0]);
  const [isCalculating, setIsCalculating] = useState(false);

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

  const calculatePrice = () => {
    const baseMaterial = materials[material as keyof typeof materials];
    const actualVolume = (length[0] * width[0] * height[0]) / 1000000; // Convert mm³ to relative volume
    const maxDimension = Math.max(length[0], width[0], height[0]); // Longest side for print time calculation
    const complexityMultiplier = 1 + (complexity[0] * 0.3);
    const quantityDiscount = quantity[0] > 10 ? 0.9 : quantity[0] > 5 ? 0.95 : 1.0;
    
    const basePrice = actualVolume * baseMaterial.price * complexityMultiplier * baseMaterial.factor * 100;
    
    // Print duration cost calculation based on longest side
    let printDurationCost = 0;
    if (printDuration[0] > 0) {
      let hourlyRate = 1.5; // Default rate for <= 250mm
      if (maxDimension > 250 && maxDimension <= 350) {
        hourlyRate = 4.0;
      }
      printDurationCost = printDuration[0] * hourlyRate;
    }
    
    const totalBasePrice = basePrice + printDurationCost;
    const totalPrice = totalBasePrice * quantity[0] * quantityDiscount;
    
    return {
      perPiece: Math.max(5, totalBasePrice),
      total: Math.max(5 * quantity[0], totalPrice),
      savings: quantity[0] > 5 ? (totalBasePrice * quantity[0] - totalPrice) : 0,
      printDurationCost,
      volume: actualVolume * 1000000, // Return volume in mm³ for display
      maxDimension
    };
  };

  // Simulate calculation delay for better UX
  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => {
      setIsCalculating(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [material, complexity, quantity, length, width, height, printDuration]);

  const pricing = calculatePrice();

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
                  <Select value={material} onValueChange={setMaterial}>
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
                      onValueChange={setLength}
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
                      onValueChange={setWidth}
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
                      onValueChange={setHeight}
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
                    onValueChange={setComplexity}
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
                    onValueChange={setPrintDuration}
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
                    onValueChange={setQuantity}
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
                {isCalculating ? (
                  <LoadingSkeleton type="pricing" />
                ) : (
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
                )}

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