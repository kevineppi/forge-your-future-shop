import { useState, useCallback, useMemo, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calculator, Info, Sparkles, Zap, Wrench } from "lucide-react";
import { FileUpload3D } from "./FileUpload3D";

const CostCalculator = () => {
  // Add loading state to prevent early rendering issues
  const [isClient, setIsClient] = useState(false);
  
  // Initialize state with proper defaults
  const [material, setMaterial] = useState("pla");
  const [complexity, setComplexity] = useState(0); // Start at 0 (Einfach)
  const [quantity, setQuantity] = useState(1);
  const [length, setLength] = useState(100);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [printDuration, setPrintDuration] = useState(0);
  
  // New features
  const [isExpressService, setIsExpressService] = useState(false);
  const [postProcessing, setPostProcessing] = useState("none");
  const [supportRemoval, setSupportRemoval] = useState(false);

  // Ensure component is properly hydrated
  useEffect(() => {
    setIsClient(true);
  }, []);

  const materials = {
    pla: { name: "PLA", pricePerKg: 20, dryingHours: 0 },
    petg: { name: "PETG", pricePerKg: 20, dryingHours: 0 },
    abs: { name: "ABS", pricePerKg: 20, dryingHours: 0 },
    pa12: { name: "PA12 Nylon", pricePerKg: 100, dryingHours: 4 },
    pa6: { name: "PA6 Nylon", pricePerKg: 100, dryingHours: 4 }
  };

  const complexityLevels = [
    "Einfach (Grundformen)",
    "Mittel (Details)",
    "Komplex (Feine Strukturen)",
    "Überhänge/Support (+50%)",
    "Mehrfärbig/Sehr komplex (+100%)"
  ];

  const postProcessingOptions = {
    none: { name: "Keine", price: 0 },
    sanding: { name: "Schleifen/Glätten", price: 15 },
    painting: { name: "Grundierung + Lackierung", price: 25 },
    premium: { name: "Premium Finish", price: 45 }
  };

  // Safe state setters with proper number handling
  const handleLengthChange = useCallback((value: number[]) => {
    if (value && value[0] && typeof value[0] === 'number') {
      const newValue = Math.max(5, Math.min(350, Math.round(value[0] / 5) * 5));
      setLength(newValue);
    }
  }, []);

  const handleWidthChange = useCallback((value: number[]) => {
    if (value && value[0] && typeof value[0] === 'number') {
      const newValue = Math.max(5, Math.min(350, Math.round(value[0] / 5) * 5));
      setWidth(newValue);
    }
  }, []);

  const handleHeightChange = useCallback((value: number[]) => {
    if (value && value[0] && typeof value[0] === 'number') {
      const newValue = Math.max(5, Math.min(350, Math.round(value[0] / 5) * 5));
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

  const handleFileUpload = useCallback((dimensions: {
    length: number;
    width: number;
    height: number;
    volume: number;
  }) => {
    setLength(dimensions.length);
    setWidth(dimensions.width);
    setHeight(dimensions.height);
    // Optionally estimate print duration based on volume
    const estimatedHours = Math.ceil((dimensions.volume / 1000) * 2); // Rough estimate
    setPrintDuration(Math.min(72, estimatedHours));
  }, []);

  const calculatePrice = useCallback(() => {
    try {
      const baseMaterial = materials[material as keyof typeof materials];
      if (!baseMaterial) return { 
        perPiece: 5, total: 5, savings: 0, materialCost: 0, energyCost: 0, 
        printCost: 0, depreciationCost: 0, dryingCost: 0, laborCost: 0,
        additionalServices: 0, expressCharge: 0, expressShipping: 0, 
        standardShipping: 0, freeShipping: false,
        volume: 125000, maxDimension: 50, materialWeight: 0, objectsPerPlate: 1
      };
      
      const actualVolume = (length * width * height) / 1000000;
      const maxDimension = Math.max(length, width, height);
      
      // Calculate material volume (25% of object for typical settings)
      const infillFactor = 0.25;
      const materialVolume = actualVolume * 1000 * infillFactor; // in cm³
      const materialDensity = 1.24;
      const materialWeightGrams = materialVolume * materialDensity;
      
      // NEUE FAIRE PREISBERECHNUNG
      // 1. MATERIALKOSTEN (realistisch)
      const materialCost = (materialWeightGrams / 1000) * baseMaterial.pricePerKg * 1.15;
      
      // 2. GRUNDGEBÜHR (Setup, Handling, QS)
      const setupFee = 15;
      
      // 3. DRUCKZEIT
      let effectivePrintTime = printDuration;
      if (effectivePrintTime === 0) {
        effectivePrintTime = materialVolume / 26; // 26 cm³/h
      }
      
      // PA12/PA6: 3x längere Druckzeit
      if (material === 'pa12' || material === 'pa6') {
        effectivePrintTime *= 3;
      }
      
      // 4. ZEITKOSTEN mit Komplexitätsmultiplikator
      // Komplexität: 0=1.0x, 1=1.2x, 2=1.4x, 3=1.6x, 4=2.0x
      const complexityMultiplier = 1 + (complexity * 0.25);
      const timeCostPerHour = 3.0; // Fair: 3€/h statt 28€/h
      const timeCost = effectivePrintTime * timeCostPerHour * complexityMultiplier;
      
      // 5. ZUSATZLEISTUNGEN
      let additionalServices = 0;
      const postProcessingCost = postProcessingOptions[postProcessing as keyof typeof postProcessingOptions]?.price || 0;
      additionalServices += postProcessingCost;
      
      if (supportRemoval && complexity >= 3) {
        additionalServices += 8;
      }
      
      // Trocknungskosten für Nylon
      if (baseMaterial.dryingHours > 0) {
        additionalServices += baseMaterial.dryingHours * 0.50;
      }
      
      // ZWISCHENSUMME
      let pricePerPiece = materialCost + setupFee + timeCost + additionalServices;
      
      // 6. EXPRESS-ZUSCHLAG (+30%)
      let expressCharge = 0;
      if (isExpressService) {
        expressCharge = pricePerPiece * 0.30;
        pricePerPiece += expressCharge;
      }
      
      // 7. STEUER (20% MwSt)
      const tax = pricePerPiece * 0.20;
      pricePerPiece += tax;
      
      // 8. MENGENRABATT
      let discount = 1.0;
      if (quantity >= 50) discount = 0.80; // 20% off
      else if (quantity >= 20) discount = 0.85; // 15% off
      else if (quantity >= 10) discount = 0.90; // 10% off
      else if (quantity >= 5) discount = 0.95; // 5% off
      
      const totalPrice = pricePerPiece * quantity * discount;
      const savings = quantity > 4 ? (pricePerPiece * quantity - totalPrice) : 0;
      
      // 9. VERSANDKOSTEN
      let expressShipping = 0;
      let standardShippingCost = 7.50;
      const freeShipping = totalPrice >= 100 && !isExpressService;
      
      if (isExpressService) {
        expressShipping = 20;
      }
      
      const shippingToAdd = isExpressService ? expressShipping : (freeShipping ? 0 : standardShippingCost);
      const finalTotal = totalPrice + shippingToAdd;
      
      // Round to 5 cents
      const roundTo5Cents = (price: number) => Math.ceil(price * 20) / 20;
      
      return {
        perPiece: Math.max(5, roundTo5Cents(pricePerPiece)),
        total: Math.max(5 * quantity, roundTo5Cents(finalTotal)),
        savings,
        materialCost,
        energyCost: 0,
        printCost: timeCost,
        depreciationCost: 0,
        dryingCost: 0,
        laborCost: setupFee,
        additionalServices,
        expressCharge,
        expressShipping,
        standardShipping: !isExpressService ? shippingToAdd : 0,
        freeShipping,
        volume: actualVolume * 1000000,
        maxDimension,
        materialWeight: materialWeightGrams,
        objectsPerPlate: 1
      };
    } catch (error) {
      console.error('Error calculating price:', error);
      return { 
        perPiece: 5, total: 5, savings: 0, materialCost: 0, energyCost: 0,
        printCost: 0, depreciationCost: 0, dryingCost: 0, laborCost: 0,
        additionalServices: 0, expressCharge: 0, expressShipping: 0,
        standardShipping: 0, freeShipping: false,
        volume: 125000, maxDimension: 50, materialWeight: 0, objectsPerPlate: 1
      };
    }
  }, [material, length, width, height, complexity, quantity, printDuration, isExpressService, postProcessing, supportRemoval]);

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

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
            {/* Calculator Form */}
            <Card className="gradient-card border-0 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  Projekt-Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 lg:space-y-6 p-4 lg:p-6">
                {/* Material Selection */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Material</label>
                  <Select value={material} onValueChange={handleMaterialChange}>
                    <SelectTrigger className="w-full bg-background h-12 text-base">
                      <SelectValue placeholder="Material auswählen" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border border-border z-50">
                      <SelectItem value="pla">PLA - €20/kg</SelectItem>
                      <SelectItem value="petg">PETG - €20/kg</SelectItem>
                      <SelectItem value="abs">ABS - €20/kg</SelectItem>
                      <SelectItem value="pa12">PA12 Nylon - €100/kg</SelectItem>
                      <SelectItem value="pa6">PA6 Nylon - €100/kg</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Dimensions */}
                <div className="space-y-3 lg:space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Länge: {length}mm
                    </label>
                    <Slider
                      value={[length]}
                      onValueChange={handleLengthChange}
                      max={350}
                      min={5}
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
                      max={350}
                      min={5}
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
                      max={350}
                      min={5}
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
                  <div className="flex justify-between text-xs text-muted-foreground mt-1 px-1">
                    <span>Einfach</span>
                    <span>Sehr komplex</span>
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
                  <div className="flex justify-between text-xs text-muted-foreground mt-1 px-1">
                    <span>1 Stück</span>
                    <span>100+ Stück</span>
                  </div>
                </div>

                {/* Additional Services */}
                <div className="space-y-4">
                  <h4 className="font-medium text-sm">Zusätzliche Services</h4>
                  
                  {/* Post-processing */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nachbearbeitung</label>
                    <Select value={postProcessing} onValueChange={setPostProcessing}>
                      <SelectTrigger className="w-full bg-background h-12 text-base">
                        <SelectValue placeholder="Nachbearbeitung wählen" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border border-border z-50">
                        <SelectItem value="none">Keine</SelectItem>
                        <SelectItem value="sanding">Schleifen/Glätten (+€15)</SelectItem>
                        <SelectItem value="painting">Grundierung + Lackierung (+€25)</SelectItem>
                        <SelectItem value="premium">Premium Finish (+€45)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Support removal checkbox */}
                  {complexity >= 3 && (
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="support-removal"
                        checked={supportRemoval}
                        onCheckedChange={(checked) => setSupportRemoval(checked === true)}
                      />
                      <label 
                        htmlFor="support-removal"
                        className="text-sm font-medium cursor-pointer"
                      >
                        Support-Entfernung (+€8)
                      </label>
                    </div>
                  )}

                  {/* Express service */}
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="express-service"
                      checked={isExpressService}
                      onCheckedChange={(checked) => setIsExpressService(checked === true)}
                    />
                    <label 
                      htmlFor="express-service"
                      className="text-sm font-medium cursor-pointer flex items-center gap-1"
                    >
                      <Zap className="w-4 h-4 text-yellow-500" />
                      Express-Service 24h (+50%)
                    </label>
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
              <CardContent className="space-y-4 lg:space-y-6 p-4 lg:p-6">
                <div className="space-y-3 lg:space-y-4">
                  {pricing.additionalServices > 0 && (
                    <div className="flex justify-between items-center p-4 bg-blue-500/10 rounded-lg">
                      <span className="font-medium flex items-center gap-1">
                        <Wrench className="w-4 h-4" />
                        Zusätzliche Services:
                      </span>
                      <span className="text-lg font-semibold text-blue-600">
                        +€{pricing.additionalServices.toFixed(2)}
                      </span>
                    </div>
                  )}

                  {pricing.expressCharge > 0 && (
                    <div className="flex justify-between items-center p-4 bg-yellow-500/10 rounded-lg">
                      <span className="font-medium flex items-center gap-1">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        Express-Aufschlag (50%):
                      </span>
                      <span className="text-lg font-semibold text-yellow-600">
                        +€{pricing.expressCharge.toFixed(2)}
                      </span>
                    </div>
                  )}

                  {pricing.expressShipping > 0 && (
                    <div className="flex justify-between items-center p-4 bg-orange-500/10 rounded-lg">
                      <span className="font-medium flex items-center gap-1">
                        <Zap className="w-4 h-4 text-orange-500" />
                        Express-Versand:
                      </span>
                      <span className="text-lg font-semibold text-orange-600">
                        +€{pricing.expressShipping.toFixed(2)}
                      </span>
                    </div>
                  )}

                  {/* Standard Shipping */}
                  {!isExpressService && (
                    <div className={`flex justify-between items-center p-4 rounded-lg ${
                      pricing.freeShipping 
                        ? 'bg-green-500/10 border border-green-500/20' 
                        : 'bg-muted/30'
                    }`}>
                      <span className="font-medium flex items-center gap-1">
                        {pricing.freeShipping ? '🎉' : '📦'} Versand:
                      </span>
                      <span className={`text-lg font-semibold ${
                        pricing.freeShipping ? 'text-green-600' : 'text-foreground'
                      }`}>
                        {pricing.freeShipping ? 'Kostenlos!' : `+€${pricing.standardShipping.toFixed(2)}`}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg">
                    <span className="font-medium">Stückpreis (inkl. 20% MwSt):</span>
                    <span className="text-2xl font-bold text-primary">
                      €{pricing.perPiece.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-primary/20 rounded-lg">
                    <span className="font-medium">Gesamtpreis ({quantity} Stück):</span>
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
                      🎉 {quantity >= 50 ? "Mega-Rabatt" : quantity >= 20 ? "Großkunden-Rabatt" : quantity >= 10 ? "Volumen-Rabatt" : "Mengen-Rabatt"} aktiv!
                    </Badge>
                  )}

                  {isExpressService && (
                    <Badge className="w-full justify-center bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
                      ⚡ Express-Lieferung in 24h
                    </Badge>
                  )}

                  {!isExpressService && pricing.freeShipping && (
                    <Badge className="w-full justify-center bg-green-500/10 text-green-600 border-green-500/20 hover:scale-105 transition-transform duration-300">
                      🎉 Kostenloser Versand ab €100
                    </Badge>
                  )}

                  {!isExpressService && !pricing.freeShipping && (pricing.total - pricing.standardShipping) > 70 && (
                    <Badge className="w-full justify-center bg-blue-500/10 text-blue-600 border-blue-500/20">
                      Noch €{(100 - (pricing.total - pricing.standardShipping)).toFixed(2)} bis kostenloser Versand!
                    </Badge>
                  )}
                </div>

                <div className="space-y-3 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Info className="w-4 h-4" />
                    Lieferzeit: {isExpressService ? "24 Stunden" : "2-5 Werktage"}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Info className="w-4 h-4" />
                    {postProcessing !== "none" ? "Inkl. Nachbearbeitung" : "Basis-Nachbearbeitung inkludiert"}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Info className="w-4 h-4" />
                    Kostenlose Beratung
                  </div>
                  {quantity >= 5 && (
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <Info className="w-4 h-4" />
                      Mengenrabatt: {quantity >= 50 ? "20%" : quantity >= 20 ? "15%" : quantity >= 10 ? "10%" : "5%"}
                    </div>
                  )}
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