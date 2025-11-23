import { useState, useCallback, useMemo, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, Upload, Ruler, Package, Settings, Sparkles, Zap, Wrench, ChevronRight, Check, Eye } from "lucide-react";
import { FileUpload3D } from "./FileUpload3D";
import { Model3DViewer } from "./Model3DViewer";
import * as THREE from "three";

interface AnalysisResult {
  type: "error" | "warning" | "info";
  message: string;
  detail?: string;
}

const CostCalculatorWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [inputMethod, setInputMethod] = useState<"file" | "manual">("manual");
  const [isClient, setIsClient] = useState(false);
  const [showViewer, setShowViewer] = useState(false);
  
  // 3D File state
  const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null);
  const [fileName, setFileName] = useState("");
  const [analysisResults, setAnalysisResults] = useState<AnalysisResult[]>([]);
  
  // State
  const [material, setMaterial] = useState("pla");
  const [complexity, setComplexity] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [length, setLength] = useState(100);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [printDuration, setPrintDuration] = useState(0);
  const [isExpressService, setIsExpressService] = useState(false);
  const [postProcessing, setPostProcessing] = useState("none");
  const [supportRemoval, setSupportRemoval] = useState(false);

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

  const handleFileUpload = useCallback((dimensions: {
    length: number;
    width: number;
    height: number;
    volume: number;
  }) => {
    setLength(dimensions.length);
    setWidth(dimensions.width);
    setHeight(dimensions.height);
    const estimatedHours = Math.ceil((dimensions.volume / 1000) * 2);
    setPrintDuration(Math.min(72, estimatedHours));
    setCurrentStep(2);
  }, []);

  const calculatePrice = useCallback(() => {
    try {
      const baseMaterial = materials[material as keyof typeof materials];
      if (!baseMaterial) return { 
        perPiece: 5, total: 5, savings: 0, materialCost: 0, energyCost: 0, 
        printCost: 0, depreciationCost: 0, dryingCost: 0, laborCost: 0,
        additionalServices: 0, expressCharge: 0, expressShipping: 0, 
        volume: 125000, maxDimension: 50, materialWeight: 0, objectsPerPlate: 1
      };
      
      const actualVolume = (length * width * height) / 1000000;
      const maxDimension = Math.max(length, width, height);
      
      let infillFactor = 0.20;
      if (complexity === 1) infillFactor = 0.25;
      else if (complexity === 2) infillFactor = 0.35;
      else if (complexity === 3) infillFactor = 0.40;
      else if (complexity === 4) infillFactor = 0.50;
      
      const materialDensity = 1.24;
      const materialWeightGrams = actualVolume * 1000 * materialDensity * infillFactor;
      
      const objectArea = length * width;
      const plateArea = 150 * 150;
      const objectsPerPlate = Math.max(1, Math.floor(plateArea / objectArea));
      
      const materialCostBase = (materialWeightGrams / 1000) * baseMaterial.pricePerKg;
      const materialCostWithMarkup = materialCostBase * 1.30;
      
      let effectivePrintTime = printDuration;
      if (effectivePrintTime === 0) {
        effectivePrintTime = (actualVolume * 1000 / 50) * (1 + complexity * 0.3);
        effectivePrintTime = Math.max(1, Math.ceil(effectivePrintTime));
      }
      
      const energyCostPerHour = 0.20;
      const energyCostBase = (effectivePrintTime * energyCostPerHour) / objectsPerPlate;
      const energyCostWithMarkup = energyCostBase * 1.30;
      
      const laborCost = 5.00;
      
      let printCostPerHour = 1.5;
      if (maxDimension > 250) {
        printCostPerHour = 4.0;
      }
      const printCost = (effectivePrintTime * printCostPerHour) / objectsPerPlate;
      
      const depreciationPerHour = 0.20;
      const depreciationCost = (effectivePrintTime * depreciationPerHour) / objectsPerPlate;
      
      const dryingCostPerHour = 0.50;
      const dryingCost = baseMaterial.dryingHours * dryingCostPerHour;
      
      let subtotal = materialCostWithMarkup + energyCostWithMarkup + laborCost + 
                     printCost + depreciationCost + dryingCost;
      
      let additionalServices = 0;
      const postProcessingCost = postProcessingOptions[postProcessing as keyof typeof postProcessingOptions]?.price || 0;
      additionalServices += postProcessingCost;
      
      if (supportRemoval && complexity >= 3) {
        additionalServices += 8;
      }
      
      subtotal += additionalServices;
      
      const profit = subtotal * 0.30;
      subtotal += profit;
      
      let expressCharge = 0;
      let expressShipping = 0;
      
      if (isExpressService) {
        expressCharge = subtotal * 0.50;
        expressShipping = 20;
        subtotal += expressCharge + expressShipping;
      }
      
      const tax = subtotal * 0.20;
      const pricePerPiece = subtotal + tax;
      
      let discount = 1.0;
      if (quantity >= 50) discount = 0.80;
      else if (quantity >= 20) discount = 0.85;
      else if (quantity >= 10) discount = 0.90;
      else if (quantity >= 5) discount = 0.95;
      
      const totalPrice = pricePerPiece * quantity * discount;
      const savings = quantity > 4 ? (pricePerPiece * quantity - totalPrice) : 0;
      
      const roundTo5Cents = (price: number) => Math.ceil(price * 20) / 20;
      
      return {
        perPiece: Math.max(5, roundTo5Cents(pricePerPiece)),
        total: Math.max(5 * quantity, roundTo5Cents(totalPrice)),
        savings,
        materialCost: materialCostWithMarkup,
        energyCost: energyCostWithMarkup,
        printCost,
        depreciationCost,
        dryingCost,
        laborCost,
        additionalServices,
        expressCharge: isExpressService ? expressCharge : 0,
        expressShipping: isExpressService ? expressShipping : 0,
        volume: actualVolume * 1000000,
        maxDimension,
        materialWeight: materialWeightGrams,
        objectsPerPlate
      };
    } catch (error) {
      console.error('Error calculating price:', error);
      return { 
        perPiece: 5, total: 5, savings: 0, materialCost: 0, energyCost: 0,
        printCost: 0, depreciationCost: 0, dryingCost: 0, laborCost: 0,
        additionalServices: 0, expressCharge: 0, expressShipping: 0,
        volume: 125000, maxDimension: 50, materialWeight: 0, objectsPerPlate: 1
      };
    }
  }, [material, length, width, height, complexity, quantity, printDuration, isExpressService, postProcessing, supportRemoval]);

  const pricing = useMemo(() => calculatePrice(), [calculatePrice]);

  const steps = [
    { number: 1, title: "Eingabe", icon: Upload, completed: currentStep > 1 },
    { number: 2, title: "Material", icon: Package, completed: currentStep > 2 },
    { number: 3, title: "Details", icon: Settings, completed: currentStep > 3 },
    { number: 4, title: "Ergebnis", icon: Calculator, completed: false }
  ];

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
    <section id="cost-calculator" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Kosten-<span className="text-gradient">Rechner</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Erhalten Sie in wenigen Schritten eine präzise Kostenberechnung
          </p>
        </div>

        {/* Step Indicator */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between relative">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center flex-1 relative z-10">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                    step.completed
                      ? "bg-green-500 text-white"
                      : currentStep === step.number
                      ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step.completed ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </div>
                <span className={`text-sm font-medium ${currentStep === step.number ? "text-primary" : "text-muted-foreground"}`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div
                    className={`absolute top-6 left-1/2 w-full h-0.5 -z-10 transition-colors duration-300 ${
                      step.completed ? "bg-green-500" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Panel - Settings or 3D Viewer (50% width) */}
            <div className="space-y-6 min-h-[600px]">
              {showViewer ? (
                <Model3DViewer 
                  geometry={geometry} 
                  fileName={fileName}
                  onBack={() => setShowViewer(false)}
                />
              ) : (
                <>
              {/* Step 1: Input Method */}
              {/* Step 1: Input Method */}
              {currentStep === 1 && (
                <Card className="gradient-card border-0 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Upload className="w-5 h-5 text-primary" />
                      Maße eingeben
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Tabs value={inputMethod} onValueChange={(v) => setInputMethod(v as "file" | "manual")}>
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="file" className="gap-2">
                          <Upload className="w-4 h-4" />
                          3D-Datei
                        </TabsTrigger>
                        <TabsTrigger value="manual" className="gap-2">
                          <Ruler className="w-4 h-4" />
                          Manuell
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="file" className="mt-6 space-y-4">
                        <FileUpload3D 
                          onDimensionsCalculated={handleFileUpload}
                          geometry={geometry}
                          setGeometry={setGeometry}
                          fileName={fileName}
                          setFileName={setFileName}
                          analysisResults={analysisResults}
                          setAnalysisResults={setAnalysisResults}
                        />
                        {geometry && fileName && (
                          <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Upload className="w-4 h-4" />
                              <span>Datei geladen: {fileName}</span>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setShowViewer(true)}
                              className="gap-2"
                            >
                              <Eye className="w-4 h-4" />
                              3D-Vorschau
                            </Button>
                          </div>
                        )}
                      </TabsContent>
                      <TabsContent value="manual" className="mt-6 space-y-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Länge: {length}mm
                          </label>
                          <Slider
                            value={[length]}
                            onValueChange={(v) => setLength(Math.max(5, Math.min(350, Math.round(v[0] / 5) * 5)))}
                            max={350}
                            min={5}
                            step={5}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Breite: {width}mm
                          </label>
                          <Slider
                            value={[width]}
                            onValueChange={(v) => setWidth(Math.max(5, Math.min(350, Math.round(v[0] / 5) * 5)))}
                            max={350}
                            min={5}
                            step={5}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Höhe: {height}mm
                          </label>
                          <Slider
                            value={[height]}
                            onValueChange={(v) => setHeight(Math.max(5, Math.min(350, Math.round(v[0] / 5) * 5)))}
                            max={350}
                            min={5}
                            step={5}
                          />
                        </div>
                        <div className="p-3 bg-muted/30 rounded-lg text-sm">
                          <div className="flex justify-between">
                            <span>Volumen:</span>
                            <span className="font-medium">{(pricing.volume / 1000).toFixed(1)} cm³</span>
                          </div>
                        </div>
                        <Button onClick={() => setCurrentStep(2)} className="w-full" size="lg">
                          Weiter zu Material
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Material */}
              {currentStep === 2 && (
                <Card className="gradient-card border-0 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="w-5 h-5 text-primary" />
                      Material & Komplexität
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Material</label>
                      <Select value={material} onValueChange={setMaterial}>
                        <SelectTrigger className="w-full h-12">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pla">PLA - €20/kg</SelectItem>
                          <SelectItem value="petg">PETG - €20/kg</SelectItem>
                          <SelectItem value="abs">ABS - €20/kg</SelectItem>
                          <SelectItem value="pa12">PA12 Nylon - €100/kg</SelectItem>
                          <SelectItem value="pa6">PA6 Nylon - €100/kg</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Komplexität: {complexityLevels[complexity]}
                      </label>
                      <Slider
                        value={[complexity]}
                        onValueChange={(v) => setComplexity(Math.max(0, Math.min(4, Math.round(v[0]))))}
                        max={4}
                        min={0}
                        step={1}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>Einfach</span>
                        <span>Sehr komplex</span>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Druckdauer: {printDuration === 0 ? "Auto" : `${printDuration}h`}
                      </label>
                      <Slider
                        value={[printDuration]}
                        onValueChange={(v) => setPrintDuration(Math.max(0, Math.min(72, Math.round(v[0]))))}
                        max={72}
                        min={0}
                        step={1}
                      />
                    </div>

                    <div className="flex gap-3">
                      <Button onClick={() => setCurrentStep(1)} variant="outline" className="flex-1">
                        Zurück
                      </Button>
                      <Button onClick={() => setCurrentStep(3)} className="flex-1">
                        Weiter
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Additional Options */}
              {currentStep === 3 && (
                <Card className="gradient-card border-0 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="w-5 h-5 text-primary" />
                      Zusatzoptionen
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Stückzahl: {quantity}
                      </label>
                      <Slider
                        value={[quantity]}
                        onValueChange={(v) => setQuantity(Math.max(1, Math.min(100, Math.round(v[0]))))}
                        max={100}
                        min={1}
                        step={1}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Nachbearbeitung</label>
                      <Select value={postProcessing} onValueChange={setPostProcessing}>
                        <SelectTrigger className="w-full h-12">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">Keine</SelectItem>
                          <SelectItem value="sanding">Schleifen/Glätten (+€15)</SelectItem>
                          <SelectItem value="painting">Grundierung + Lackierung (+€25)</SelectItem>
                          <SelectItem value="premium">Premium Finish (+€45)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {complexity >= 3 && (
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="support-removal"
                          checked={supportRemoval}
                          onCheckedChange={(checked) => setSupportRemoval(checked === true)}
                        />
                        <label htmlFor="support-removal" className="text-sm font-medium cursor-pointer">
                          Support-Entfernung (+€8)
                        </label>
                      </div>
                    )}

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="express-service"
                        checked={isExpressService}
                        onCheckedChange={(checked) => setIsExpressService(checked === true)}
                      />
                      <label htmlFor="express-service" className="text-sm font-medium cursor-pointer flex items-center gap-1">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        Express-Service 24h (+50%)
                      </label>
                    </div>

                    <div className="flex gap-3">
                      <Button onClick={() => setCurrentStep(2)} variant="outline" className="flex-1">
                        Zurück
                      </Button>
                      <Button onClick={() => setCurrentStep(4)} className="flex-1">
                        Zum Ergebnis
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Summary (visible on all steps for context) */}
              {currentStep === 4 && (
                <Card className="gradient-card border-0 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-primary" />
                      Zusammenfassung
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Maße:</span>
                        <span className="font-medium">{length}×{width}×{height}mm</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Material:</span>
                        <span className="font-medium">{materials[material as keyof typeof materials].name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Komplexität:</span>
                        <span className="font-medium">{complexityLevels[complexity]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Stückzahl:</span>
                        <span className="font-medium">{quantity}</span>
                      </div>
                    </div>

                    <Button onClick={() => setCurrentStep(1)} variant="outline" className="w-full">
                      Neu berechnen
                    </Button>
                  </CardContent>
                </Card>
              )}
              </>
              )}
            </div>

            {/* Right Panel - Live Preview & 3D Viewer (50% width) */}
            <div className="lg:sticky lg:top-8 h-fit space-y-6 min-h-[600px]">
              {/* Price Preview */}
              <Card className="gradient-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Live-Kostenvorschau
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
                        Express-Aufschlag:
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

                  <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg">
                    <span className="font-medium">Stückpreis (inkl. 20% MwSt):</span>
                    <span className="text-2xl font-bold text-primary">
                      €{pricing.perPiece.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-primary/20 rounded-lg">
                    <span className="font-medium">Gesamtpreis ({quantity} Stück):</span>
                    <span className="text-3xl font-bold text-primary">
                      €{pricing.total.toFixed(2)}
                    </span>
                  </div>

                  {pricing.savings > 0 && (
                    <div className="flex justify-between items-center p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                      <span className="font-medium text-green-600">Mengenrabatt:</span>
                      <span className="text-lg font-bold text-green-600">
                        -€{pricing.savings.toFixed(2)}
                      </span>
                    </div>
                  )}

                  {quantity >= 5 && (
                    <Badge className="w-full justify-center bg-green-500/10 text-green-600 border-green-500/20">
                      🎉 {quantity >= 50 ? "Mega-Rabatt" : quantity >= 20 ? "Großkunden-Rabatt" : quantity >= 10 ? "Volumen-Rabatt" : "Mengen-Rabatt"} aktiv!
                    </Badge>
                  )}

                  {isExpressService && (
                    <Badge className="w-full justify-center bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
                      ⚡ Express-Lieferung in 24h
                    </Badge>
                  )}

                  <div className="pt-4 border-t space-y-3">
                    <Button className="w-full" size="lg">
                      Unverbindliches Angebot anfordern
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      📦 Kostenloser Versand ab 100€ • 🔒 Sichere Zahlung • ⭐ 5 Jahre Garantie
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculatorWizard;
