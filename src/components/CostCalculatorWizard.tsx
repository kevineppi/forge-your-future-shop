import { useState, useCallback, useMemo, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calculator, Upload, Ruler, Package, Settings, Sparkles, Zap, Wrench, ChevronRight, Check, Eye, X, Edit2, Palette, Plus, Minus, ShoppingCart } from "lucide-react";
import { FileUpload3D } from "./FileUpload3D";
import { Model3DViewer } from "./Model3DViewer";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import * as THREE from "three";

// Helper function to convert THREE.BufferGeometry to STL string
const geometryToSTL = (geometry: THREE.BufferGeometry): string => {
  const vertices = geometry.attributes.position;
  const indices = geometry.index;
  
  let stl = 'solid model\n';
  
  if (indices) {
    // Indexed geometry
    for (let i = 0; i < indices.count; i += 3) {
      const i1 = indices.getX(i);
      const i2 = indices.getX(i + 1);
      const i3 = indices.getX(i + 2);
      
      const v1 = new THREE.Vector3(vertices.getX(i1), vertices.getY(i1), vertices.getZ(i1));
      const v2 = new THREE.Vector3(vertices.getX(i2), vertices.getY(i2), vertices.getZ(i2));
      const v3 = new THREE.Vector3(vertices.getX(i3), vertices.getY(i3), vertices.getZ(i3));
      
      const normal = new THREE.Vector3().crossVectors(
        new THREE.Vector3().subVectors(v2, v1),
        new THREE.Vector3().subVectors(v3, v1)
      ).normalize();
      
      stl += `  facet normal ${normal.x} ${normal.y} ${normal.z}\n`;
      stl += `    outer loop\n`;
      stl += `      vertex ${v1.x} ${v1.y} ${v1.z}\n`;
      stl += `      vertex ${v2.x} ${v2.y} ${v2.z}\n`;
      stl += `      vertex ${v3.x} ${v3.y} ${v3.z}\n`;
      stl += `    endloop\n`;
      stl += `  endfacet\n`;
    }
  } else {
    // Non-indexed geometry
    for (let i = 0; i < vertices.count; i += 3) {
      const v1 = new THREE.Vector3(vertices.getX(i), vertices.getY(i), vertices.getZ(i));
      const v2 = new THREE.Vector3(vertices.getX(i + 1), vertices.getY(i + 1), vertices.getZ(i + 1));
      const v3 = new THREE.Vector3(vertices.getX(i + 2), vertices.getY(i + 2), vertices.getZ(i + 2));
      
      const normal = new THREE.Vector3().crossVectors(
        new THREE.Vector3().subVectors(v2, v1),
        new THREE.Vector3().subVectors(v3, v1)
      ).normalize();
      
      stl += `  facet normal ${normal.x} ${normal.y} ${normal.z}\n`;
      stl += `    outer loop\n`;
      stl += `      vertex ${v1.x} ${v1.y} ${v1.z}\n`;
      stl += `      vertex ${v2.x} ${v2.y} ${v2.z}\n`;
      stl += `      vertex ${v3.x} ${v3.y} ${v3.z}\n`;
      stl += `    endloop\n`;
      stl += `  endfacet\n`;
    }
  }
  
  stl += 'endsolid model\n';
  return stl;
};

// Helper function to sanitize filename for Supabase Storage
const sanitizeFilename = (filename: string): string => {
  return filename
    .normalize('NFD') // Decompose umlauts
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-zA-Z0-9._-]/g, '_') // Replace invalid chars with underscore
    .replace(/_{2,}/g, '_'); // Replace multiple underscores with single
};

interface AnalysisResult {
  type: "error" | "warning" | "info";
  message: string;
  detail?: string;
}

interface UploadedFile {
  id: string;
  geometry: THREE.BufferGeometry;
  fileName: string;
  volume: number;
  length: number;
  width: number;
  height: number;
  analysisResults: AnalysisResult[];
  estimatedPrintTimeHours?: number;
  complexityScore?: number;
  estimatedMaterialGrams?: number;
  surfaceArea?: number;
  // File-specific settings
  material?: string;
  complexity?: number;
  postProcessing?: string;
  supportRemoval?: boolean;
  color?: string;
  scale?: number;
  quantity?: number;
  notes?: string;
}

const CostCalculatorWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const [editingFileId, setEditingFileId] = useState<string | null>(null);
  const { user } = useAuth();
  
  // 3D File state - Multi-file support
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [activeFileId, setActiveFileId] = useState<string | null>(null);
  const [scale, setScale] = useState(1); // Scale factor for 3D model
  
  // Active file computed values
  const activeFile = uploadedFiles.find(f => f.id === activeFileId);
  const geometry = activeFile?.geometry || null;
  const fileName = activeFile?.fileName || "";
  const analysisResults = activeFile?.analysisResults || [];
  const actualFileVolume = activeFile?.volume || null;
  
  // State
  const [material, setMaterial] = useState("pla");
  const [complexity, setComplexity] = useState(0);
  const [estimatedPrintDuration, setEstimatedPrintDuration] = useState<number | null>(null);
  const [slicingJobId, setSlicingJobId] = useState<string | null>(null);
  const [calculatedPrintDuration, setCalculatedPrintDuration] = useState<number | null>(null);
  const [isExpressService, setIsExpressService] = useState(false);
  const [postProcessing, setPostProcessing] = useState("none");
  const [supportRemoval, setSupportRemoval] = useState(false);
  
  // Address state
  const [shippingAddress, setShippingAddress] = useState({
    street: "",
    postalCode: "",
    city: "",
    country: "Österreich"
  });

  // Guest email state
  const [guestEmail, setGuestEmail] = useState("");

  const { toast } = useToast();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Scroll to calculator section when step changes
  useEffect(() => {
    const element = document.getElementById('cost-calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentStep]);

  const materials = {
    pla: { name: "PLA", pricePerKg: 19.99, dryingHours: 0 },
    petg: { name: "PETG", pricePerKg: 19.99, dryingHours: 0 },
    abs: { name: "ABS", pricePerKg: 29.99, dryingHours: 0 },
    asa: { name: "ASA", pricePerKg: 29.99, dryingHours: 0 },
    tpu: { name: "TPU", pricePerKg: 24.99, dryingHours: 0 },
    pa12: { name: "PA12 Nylon", pricePerKg: 99.99, dryingHours: 4 },
    pa6: { name: "PA6 Nylon", pricePerKg: 99.99, dryingHours: 4 }
  };

  const complexityLevels = [
    "Einfach (Grundformen)",
    "Mittel (Details) +50%",
    "Komplex (Feine Strukturen) +100%",
    "Überhänge/Support +150%",
    "Mehrfärbig/Sehr komplex +200%"
  ];

  const colorOptions = [
    // Regenbogenfarben (gängige Standardfarben)
    { name: "Rot", hex: "#ef4444" },
    { name: "Orange", hex: "#f97316" },
    { name: "Gelb", hex: "#eab308" },
    { name: "Hellgrün", hex: "#84cc16" },
    { name: "Grün", hex: "#10b981" },
    { name: "Hellblau", hex: "#06b6d4" },
    { name: "Blau", hex: "#3b82f6" },
    { name: "Dunkelblau", hex: "#1e40af" },
    { name: "Lila", hex: "#8b5cf6" },
    { name: "Pink", hex: "#ec4899" },
    // Neutrale Farben
    { name: "Weiß", hex: "#f9fafb" },
    { name: "Hellgrau", hex: "#d1d5db" },
    { name: "Grau", hex: "#6b7280" },
    { name: "Dunkelgrau", hex: "#374151" },
    { name: "Schwarz", hex: "#111827" },
  ];

  const postProcessingOptions = {
    none: { name: "Keine", price: 0 },
    sanding: { name: "Schleifen/Glätten", price: 15 },
    painting: { name: "Grundierung + Lackierung", price: 25 },
    premium: { name: "Premium Finish", price: 45 }
  };

  const handleFileUpload = useCallback((fileData: {
    geometry: THREE.BufferGeometry;
    fileName: string;
    length: number;
    width: number;
    height: number;
    volume: number;
    analysisResults: AnalysisResult[];
    estimatedPrintTimeHours?: number;
    complexityScore?: number;
    estimatedMaterialGrams?: number;
    surfaceArea?: number;
  }) => {
    // Map complexity score to array index (0-4)
    // complexityScore 0-1 -> 0-4 index
    let detectedComplexity = 0;
    if (fileData.complexityScore !== undefined) {
      // Map 0-1 score directly to 0-4 range
      // 0.0-0.2 = 0 (Einfach)
      // 0.2-0.4 = 1 (Mittel)
      // 0.4-0.65 = 2 (Komplex)
      // 0.65-0.8 = 3 (Überhänge)
      // 0.8-1.0 = 4 (Mehrfärbig/Sehr komplex)
      if (fileData.complexityScore < 0.2) detectedComplexity = 0;
      else if (fileData.complexityScore < 0.4) detectedComplexity = 1;
      else if (fileData.complexityScore < 0.65) detectedComplexity = 2;
      else if (fileData.complexityScore < 0.8) detectedComplexity = 3;
      else detectedComplexity = 4;
    }
    
    const newFile: UploadedFile = {
      id: `file-${Date.now()}-${Math.random()}`,
      geometry: fileData.geometry,
      fileName: fileData.fileName,
      volume: fileData.volume,
      length: fileData.length,
      width: fileData.width,
      height: fileData.height,
      analysisResults: fileData.analysisResults,
      estimatedPrintTimeHours: fileData.estimatedPrintTimeHours,
      estimatedMaterialGrams: fileData.estimatedMaterialGrams,
      surfaceArea: fileData.surfaceArea,
      // Initialize with detected complexity or current settings
      material: material || "pla",
      complexity: detectedComplexity,
      postProcessing: postProcessing || "none",
      supportRemoval: supportRemoval || false,
      color: "#ef4444", // Default Rot
      scale: 1,
      quantity: 1,
      notes: ""
    };
    
    setUploadedFiles(prev => [...prev, newFile]);
    setActiveFileId(newFile.id);
    
    // Auto-set global complexity state from edge function analysis
    setComplexity(detectedComplexity);
    
    // Use heuristic calculation if provided
    if (fileData.estimatedPrintTimeHours) {
      setEstimatedPrintDuration(fileData.estimatedPrintTimeHours);
    }
  }, [material, complexity, postProcessing, supportRemoval]);

  // Save current settings to active file
  const saveSettingsToActiveFile = useCallback(() => {
    if (activeFileId) {
      setUploadedFiles(prev => prev.map(file => 
        file.id === activeFileId
          ? {
              ...file,
              material,
              complexity,
              postProcessing,
              supportRemoval
            }
          : file
      ));
    }
  }, [activeFileId, material, complexity, postProcessing, supportRemoval]);

  // Auto-save settings when they change
  useEffect(() => {
    saveSettingsToActiveFile();
  }, [material, complexity, postProcessing, supportRemoval, saveSettingsToActiveFile]);

  // Load file settings when active file changes
  useEffect(() => {
    if (activeFileId && activeFile) {
      setMaterial(activeFile.material || "pla");
      setComplexity(activeFile.complexity || 0);
      setPostProcessing(activeFile.postProcessing || "none");
      setSupportRemoval(activeFile.supportRemoval || false);
    }
  }, [activeFileId]);

  // Start background slicing for accurate print time (placeholder for future microservice)
  const startBackgroundSlicing = async (fileData: {
    fileName: string;
    volume: number;
  }) => {
    try {
      // Create slicing job record
      const { data: jobData, error: jobError } = await supabase
        .from('slicing_jobs')
        .insert({
          file_name: fileData.fileName,
          file_url: 'temp', // Will be updated after file upload to storage
          estimated_time_hours: estimatedPrintDuration,
          material: material || 'PLA',
          status: 'pending'
        })
        .select()
        .single();
      
      if (jobError) throw jobError;
      
      setSlicingJobId(jobData.id);
      
      // Subscribe to realtime updates for this job
      const channel = supabase
        .channel(`slicing_job_${jobData.id}`)
        .on(
          'postgres_changes',
          {
            event: 'UPDATE',
            schema: 'public',
            table: 'slicing_jobs',
            filter: `id=eq.${jobData.id}`
          },
          (payload) => {
            const updatedJob = payload.new as any;
            if (updatedJob.status === 'completed' && updatedJob.calculated_time_hours) {
              setCalculatedPrintDuration(updatedJob.calculated_time_hours);
              toast({
                title: "Genaue Berechnung verfügbar!",
                description: `Präzise Druckzeit: ${updatedJob.calculated_time_hours}h`,
              });
            } else if (updatedJob.status === 'failed') {
              console.log('Slicing failed:', updatedJob.error_message);
            }
          }
        )
        .subscribe();
      
      // Cleanup on unmount
      return () => {
        supabase.removeChannel(channel);
      };
      
    } catch (error) {
      console.error('Error starting slicing job:', error);
    }
  };

  // KONSOLIDIERTE PREISBERECHNUNG - Einzige Quelle der Wahrheit
  const calculateFilePriceDetails = useCallback((file: UploadedFile) => {
    const fileQuantity = file.quantity || 1;
    const fileMaterial = materials[file.material as keyof typeof materials] || materials.pla;
    const fileComplexity = file.complexity || 0;
    const fileScale = file.scale || 1;
    const filePostProcessing = file.postProcessing || "none";
    const fileSupportRemoval = file.supportRemoval || false;
    
    const scaledVolume = file.volume * Math.pow(fileScale, 3);
    const scaledLength = file.length * fileScale;
    const scaledWidth = file.width * fileScale;
    const scaledHeight = file.height * fileScale;
    
    // REALISTIC MATERIAL CALCULATION
    const materialDensity = 1.24; // g/cm³ for PLA
    let materialWeightGrams: number;
    
    if (file.estimatedMaterialGrams && fileScale === 1) {
      // Use precise edge function calculation
      materialWeightGrams = file.estimatedMaterialGrams;
      console.log(`[${file.fileName}] Using edge function material: ${materialWeightGrams.toFixed(1)}g`);
    } else {
      // Fallback: Calculate with infill only (edge function already includes shell)
      // 20% infill typical for structural parts
      const infillPercentage = 0.20;
      materialWeightGrams = scaledVolume * infillPercentage * materialDensity;
      console.log(`[${file.fileName}] Using fallback material calc: ${materialWeightGrams.toFixed(1)}g (${scaledVolume.toFixed(1)}cm³ * ${infillPercentage})`);
    }
    
    // Calculate material volume for print time estimation
    const materialVolume = materialWeightGrams / materialDensity;
    
    // NEUE FAIRE PREISBERECHNUNG
    // 1. MATERIALKOSTEN (realistisch)
    const materialCost = (materialWeightGrams / 1000) * fileMaterial.pricePerKg * 1.15;
    
    // 2. GRUNDGEBÜHR (Setup, Handling, QS)
    const setupFee = 15;
    
    // 3. DRUCKZEIT - EINFACHE REALISTISCHE BERECHNUNG
    // Basiert auf Material-Gewicht, nicht auf Edge-Function
    // Typische Druckrate: 40-60g Material pro Stunde je nach Qualität
    const gramsPerHour = 50; // Standard für gute Qualität
    let effectivePrintTime = materialWeightGrams / gramsPerHour;
    
    // PA12/PA6: 2x längere Druckzeit (langsamer)
    if (file.material === 'pa12' || file.material === 'pa6') {
      effectivePrintTime *= 2;
    }
    
    // Minimum 0.5h
    effectivePrintTime = Math.max(0.5, effectivePrintTime);
    
    console.log(`[${file.fileName}] Material: ${materialWeightGrams.toFixed(1)}g, Print time: ${effectivePrintTime.toFixed(2)}h (${gramsPerHour}g/h)`);
    
    // 4. ZEITKOSTEN mit Komplexitätsmultiplikator
    const complexityMultiplier = 1 + (fileComplexity * 0.25);
    const timeCostPerHour = 3.0;
    const timeCost = effectivePrintTime * timeCostPerHour * complexityMultiplier;
    
    // 5. ZUSATZLEISTUNGEN
    let additionalServices = 0;
    const postProcessingCost = postProcessingOptions[filePostProcessing as keyof typeof postProcessingOptions]?.price || 0;
    additionalServices += postProcessingCost;
    
    if (fileSupportRemoval && fileComplexity >= 3) {
      additionalServices += 8;
    }
    
    // Trocknungskosten für Nylon
    if (fileMaterial.dryingHours > 0) {
      additionalServices += fileMaterial.dryingHours * 0.50;
    }
    
    // ZWISCHENSUMME
    let pricePerPiece = materialCost + setupFee + timeCost + additionalServices;
    
    console.log(`[${file.fileName}] Price breakdown: Material=${materialCost.toFixed(2)}€, Setup=${setupFee}€, Time=${timeCost.toFixed(2)}€, Additional=${additionalServices.toFixed(2)}€`);
    
    // 6. EXPRESS-ZUSCHLAG (+30%)
    if (isExpressService) {
      pricePerPiece *= 1.30;
    }
    
    // 7. STEUER (20% MwSt)
    pricePerPiece *= 1.20;
    
    // Apply quantity discount
    let discount = 1.0;
    if (fileQuantity >= 50) discount = 0.80;
    else if (fileQuantity >= 20) discount = 0.85;
    else if (fileQuantity >= 10) discount = 0.90;
    else if (fileQuantity >= 5) discount = 0.95;
    
    const fileTotalPrice = pricePerPiece * fileQuantity * discount;
    
    console.log(`[${file.fileName}] Final: ${pricePerPiece.toFixed(2)}€/pc × ${fileQuantity} × ${discount} = ${fileTotalPrice.toFixed(2)}€`);
    
    return {
      totalPrice: fileTotalPrice,
      pricePerPiece,
      materialWeightGrams,
      effectivePrintTime
    };
  }, [isExpressService, materials, postProcessingOptions]);

  // Calculate individual file prices using the shared function
  const filePrices = useMemo(() => {
    const prices: { [key: string]: number } = {};
    uploadedFiles.forEach(file => {
      const { totalPrice } = calculateFilePriceDetails(file);
      prices[file.id] = totalPrice;
    });
    return prices;
  }, [uploadedFiles, calculateFilePriceDetails]);

  // Calculate total price using the same shared function
  const calculatePrice = useCallback(() => {
    try {
      if (uploadedFiles.length === 0) {
        return { 
          perPiece: 0, total: 0, savings: 0, materialCost: 0, energyCost: 0,
          printCost: 0, depreciationCost: 0, dryingCost: 0, laborCost: 0,
          additionalServices: 0, expressCharge: 0, expressShipping: 0, shippingCost: 0,
          freeShipping: false,
          volume: 0, maxDimension: 0, materialWeight: 0, objectsPerPlate: 1
        };
      }
      
      // Sum all file prices using the shared calculation function
      let totalWithQuantities = 0;
      uploadedFiles.forEach(file => {
        const { totalPrice } = calculateFilePriceDetails(file);
        totalWithQuantities += totalPrice;
      });
      
      // Check if free shipping applies (>= 100€ without shipping and express)
      const freeShipping = totalWithQuantities >= 100 && !isExpressService;
      
      // Versandkosten: 7.50€ wenn nicht kostenlos oder express
      const shippingCost = freeShipping ? 0 : 7.50;
      totalWithQuantities += shippingCost;
      
      let expressShipping = 0;
      if (isExpressService) {
        expressShipping = 20;
        totalWithQuantities += expressShipping;
      }
      
      console.log(`Total before shipping: ${(totalWithQuantities - shippingCost - expressShipping).toFixed(2)}€, Shipping: ${shippingCost}€, Express: ${expressShipping}€, Final: ${totalWithQuantities.toFixed(2)}€`);
      
      return {
        perPiece: 0,
        total: totalWithQuantities,
        savings: 0,
        materialCost: 0,
        energyCost: 0,
        printCost: 0,
        depreciationCost: 0,
        dryingCost: 0,
        laborCost: 0,
        additionalServices: 0,
        expressCharge: 0,
        expressShipping: expressShipping,
        shippingCost: shippingCost,
        freeShipping: freeShipping,
        volume: uploadedFiles.reduce((sum, f) => sum + f.volume * Math.pow(f.scale || 1, 3), 0),
        maxDimension: Math.max(...uploadedFiles.map(f => Math.max(f.length, f.width, f.height) * (f.scale || 1))),
        materialWeight: uploadedFiles.reduce((sum, f) => sum + (f.volume * Math.pow(f.scale || 1, 3) * 0.25 * 1.24), 0),
        objectsPerPlate: 1
      };
    } catch (error) {
      console.error('Error calculating price:', error);
      return { 
        perPiece: 5, total: 5, savings: 0, materialCost: 0, energyCost: 0,
        printCost: 0, depreciationCost: 0, dryingCost: 0, laborCost: 0,
        additionalServices: 0, expressCharge: 0, expressShipping: 0, shippingCost: 0,
        freeShipping: false,
        volume: 125000, maxDimension: 50, materialWeight: 0, objectsPerPlate: 1
      };
    }
  }, [uploadedFiles, calculateFilePriceDetails, isExpressService]);

  const pricing = useMemo(() => calculatePrice(), [calculatePrice]);

  const steps = [
    { number: 1, title: "Eingabe", icon: Upload, completed: currentStep > 1 },
    { number: 2, title: "Stückzahlen", icon: Package, completed: currentStep > 2 },
    { number: 3, title: "Lieferoptionen", icon: Settings, completed: currentStep > 3 },
    { number: 4, title: "Adresse", icon: Wrench, completed: currentStep > 4 },
    { number: 5, title: "Ergebnis", icon: Calculator, completed: false }
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
            {/* Left Panel - Wizard Steps (50% width) */}
            <div className="space-y-6 min-h-[600px]">
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
                    {uploadedFiles.length > 0 && (
                      <Button 
                        onClick={() => setCurrentStep(2)} 
                        className="w-full" 
                        size="lg"
                      >
                        Weiter zu Stückzahlen
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                    
                    <FileUpload3D 
                      onDimensionsCalculated={handleFileUpload}
                    />
                    
                    {uploadedFiles.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-semibold">Hochgeladene Dateien ({uploadedFiles.length}):</h4>
                        </div>
                        <div className="space-y-2 max-h-48 overflow-y-auto">
                          {uploadedFiles.map((file) => (
                            <button
                              key={file.id}
                              onClick={() => {
                                setActiveFileId(file.id);
                                // Load file-specific settings
                                setMaterial(file.material || "pla");
                                setComplexity(file.complexity || 0);
                                setPostProcessing(file.postProcessing || "none");
                                setSupportRemoval(file.supportRemoval || false);
                                // Set the estimated print duration for this specific file
                                if (file.estimatedPrintTimeHours) {
                                  setEstimatedPrintDuration(file.estimatedPrintTimeHours);
                                }
                              }}
                              className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-colors ${
                                activeFileId === file.id
                                  ? "border-primary bg-primary/10"
                                  : "border-border bg-muted/30 hover:bg-muted/50"
                              }`}
                            >
                              <div className="flex-1 text-left">
                                <p className="text-sm font-medium truncate">{file.fileName}</p>
                                <p className="text-xs text-muted-foreground">
                                  {Math.round(file.length * (file.scale || 1))}×{Math.round(file.width * (file.scale || 1))}×{Math.round(file.height * (file.scale || 1))}mm • {(file.volume * Math.pow(file.scale || 1, 3)).toFixed(1)}cm³
                                  {file.scale && file.scale !== 1 && (
                                    <span className="ml-1 text-primary font-medium">({Math.round(file.scale * 100)}% skaliert)</span>
                                  )}
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setEditingFileId(file.id);
                                  }}
                                  className="p-1.5 hover:bg-primary/10 rounded transition-colors text-primary"
                                  title="Bearbeiten"
                                >
                                  <Edit2 className="w-4 h-4" />
                                </button>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setUploadedFiles(prev => prev.filter(f => f.id !== file.id));
                                    if (activeFileId === file.id) {
                                      const remaining = uploadedFiles.filter(f => f.id !== file.id);
                                      if (remaining.length > 0) {
                                        setActiveFileId(remaining[0].id);
                                      } else {
                                        setActiveFileId(null);
                                      }
                                    }
                                  }}
                                  className="p-1.5 hover:bg-destructive/10 rounded transition-colors text-destructive"
                                  title="Löschen"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Stückzahlen */}
              {currentStep === 2 && (
                <Card className="gradient-card border-0 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="w-5 h-5 text-primary" />
                      Stückzahlen festlegen
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-sm text-muted-foreground">
                      Legen Sie für jedes Teil die gewünschte Stückzahl fest (Standard: 1 Stück)
                    </p>

                    {/* Quantity settings for each file */}
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {uploadedFiles.map((file) => {
                        const fileQuantity = file.quantity || 1;
                        const filePrice = filePrices[file.id] || 0;
                        
                        let discount = 1.0;
                        if (fileQuantity >= 50) discount = 0.80;
                        else if (fileQuantity >= 20) discount = 0.85;
                        else if (fileQuantity >= 10) discount = 0.90;
                        else if (fileQuantity >= 5) discount = 0.95;
                        
                        return (
                          <div key={file.id} className="p-4 border-2 border-border rounded-lg space-y-3">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <p className="font-medium text-sm">{file.fileName}</p>
                                <p className="text-xs text-muted-foreground">
                                  {Math.round(file.length * (file.scale || 1))}×{Math.round(file.width * (file.scale || 1))}×{Math.round(file.height * (file.scale || 1))}mm
                                  {file.scale && file.scale !== 1 && (
                                    <span className="ml-1 text-primary">({Math.round(file.scale * 100)}%)</span>
                                  )}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-lg font-bold text-primary">
                                  €{filePrice.toFixed(2)}
                                </p>
                                {fileQuantity >= 5 && (
                                  <p className="text-xs text-green-600">
                                    -{((1 - discount) * 100).toFixed(0)}%
                                  </p>
                                )}
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <label className="text-sm font-medium block">
                                Stückzahl
                              </label>
                              <div className="flex items-center gap-3">
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="icon"
                                  className="h-10 w-10 shrink-0"
                                  onClick={() => {
                                    if (fileQuantity > 1) {
                                      setUploadedFiles(prev => prev.map(f => 
                                        f.id === file.id ? { ...f, quantity: fileQuantity - 1 } : f
                                      ));
                                    }
                                  }}
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                
                                <input
                                  type="number"
                                  min="1"
                                  max="100"
                                  value={fileQuantity}
                                  onChange={(e) => {
                                    const val = parseInt(e.target.value) || 1;
                                    const clampedVal = Math.max(1, Math.min(100, val));
                                    setUploadedFiles(prev => prev.map(f => 
                                      f.id === file.id ? { ...f, quantity: clampedVal } : f
                                    ));
                                  }}
                                  className="flex-1 h-10 text-center border-2 border-border rounded-lg bg-background focus:border-primary focus:outline-none font-medium text-lg"
                                />
                                
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="icon"
                                  className="h-10 w-10 shrink-0"
                                  onClick={() => {
                                    if (fileQuantity < 100) {
                                      setUploadedFiles(prev => prev.map(f => 
                                        f.id === file.id ? { ...f, quantity: fileQuantity + 1 } : f
                                      ));
                                    }
                                  }}
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Notes field */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Bemerkungen (optional)
                      </label>
                      <textarea
                        className="w-full min-h-[100px] p-3 rounded-lg border-2 border-border bg-background focus:border-primary focus:outline-none resize-none"
                        placeholder="Weitere Anmerkungen zu Ihrer Bestellung..."
                        value={uploadedFiles[0]?.notes || ""}
                        onChange={(e) => {
                          const notes = e.target.value;
                          setUploadedFiles(prev => prev.map(f => ({ ...f, notes })));
                        }}
                      />
                    </div>

                    <div className="p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm font-medium mb-2">💡 Tipp:</p>
                      <p className="text-sm text-muted-foreground">
                        Sie können jede Datei einzeln über den Edit-Button ✏️ bei Schritt 1 bearbeiten, um Material, Farbe und Skalierung anzupassen.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <Button onClick={() => setCurrentStep(1)} variant="outline" className="flex-1">
                        Zurück
                      </Button>
                      <Button onClick={() => setCurrentStep(3)} className="flex-1">
                        Weiter zu Lieferoptionen
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Lieferoptionen */}
              {currentStep === 3 && (
                <Card className="gradient-card border-0 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      Lieferoptionen
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-sm text-muted-foreground">
                      Wählen Sie Ihre gewünschte Liefergeschwindigkeit
                    </p>

                    {/* Delivery Options */}
                    <div className="space-y-3">
                      <button
                        onClick={() => setIsExpressService(false)}
                        className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                          !isExpressService
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-semibold mb-1">Standard-Lieferung</p>
                            <p className="text-sm text-muted-foreground">5-7 Werktage • Kostenlos ab 100€</p>
                          </div>
                          {!isExpressService && (
                            <Check className="w-5 h-5 text-primary" />
                          )}
                        </div>
                      </button>

                      <button
                        onClick={() => setIsExpressService(true)}
                        className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                          isExpressService
                            ? "border-yellow-500 bg-yellow-500/10"
                            : "border-border hover:border-yellow-500/50"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-semibold mb-1 flex items-center gap-2">
                              <Zap className="w-4 h-4 text-yellow-500" />
                              Express-Lieferung
                            </p>
                            <p className="text-sm text-muted-foreground">24-48 Stunden • +50% Aufpreis + €20 Versand</p>
                          </div>
                          {isExpressService && (
                            <Check className="w-5 h-5 text-yellow-500" />
                          )}
                        </div>
                      </button>
                    </div>

                    <div className="flex gap-3">
                      <Button onClick={() => setCurrentStep(2)} variant="outline" className="flex-1">
                        Zurück
                      </Button>
                      <Button onClick={() => setCurrentStep(4)} className="flex-1">
                        Weiter zu Adresse
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Adresse */}
              {currentStep === 4 && (
                <Card className="gradient-card border-0 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wrench className="w-5 h-5 text-primary" />
                      Lieferadresse
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-sm text-muted-foreground">
                      {user ? "Bitte geben Sie Ihre Lieferadresse ein" : "Geben Sie Ihre Kontakt- und Lieferadresse ein"}
                    </p>

                    {/* Guest Email Field */}
                    {!user && (
                      <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                        <label className="text-sm font-medium mb-2 block">
                          E-Mail-Adresse *
                        </label>
                        <Input
                          type="email"
                          placeholder="ihre@email.at"
                          value={guestEmail}
                          onChange={(e) => setGuestEmail(e.target.value)}
                          required
                          className="w-full"
                        />
                        <p className="text-xs text-muted-foreground mt-2">
                          Für Bestellbestätigung und Updates
                        </p>
                      </div>
                    )}

                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Straße und Hausnummer *
                        </label>
                        <Input
                          placeholder="z.B. Hauptstraße 123"
                          value={shippingAddress.street}
                          onChange={(e) => setShippingAddress({ ...shippingAddress, street: e.target.value })}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Postleitzahl *
                          </label>
                          <Input
                            placeholder="z.B. 1010"
                            value={shippingAddress.postalCode}
                            onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
                            required
                          />
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Stadt *
                          </label>
                          <Input
                            placeholder="z.B. Wien"
                            value={shippingAddress.city}
                            onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Land *
                        </label>
                        <Input
                          value={shippingAddress.country}
                          onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button onClick={() => setCurrentStep(3)} variant="outline" className="flex-1">
                        Zurück
                      </Button>
                      <Button 
                        onClick={() => {
                          if (!shippingAddress.street || !shippingAddress.postalCode || !shippingAddress.city) {
                            toast({
                              title: "Fehlende Adressdaten",
                              description: "Bitte füllen Sie alle Pflichtfelder aus.",
                              variant: "destructive",
                            });
                            return;
                          }
                          setCurrentStep(5);
                        }}
                        className="flex-1"
                      >
                        Zum Ergebnis
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 5: Summary */}
              {currentStep === 5 && (
                <Card className="gradient-card border-0 animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-primary" />
                      Zusammenfassung
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {uploadedFiles.map((file) => (
                        <div key={file.id} className="p-3 bg-muted/30 rounded-lg space-y-2 text-sm">
                          <p className="font-medium">{file.fileName}</p>
                          <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                            <div>
                              Maße: {Math.round(file.length * (file.scale || 1))}×{Math.round(file.width * (file.scale || 1))}×{Math.round(file.height * (file.scale || 1))}mm
                              {file.scale && file.scale !== 1 && (
                                <span className="text-primary ml-1">({Math.round(file.scale * 100)}%)</span>
                              )}
                            </div>
                            <div>Menge: {file.quantity || 1} Stück</div>
                            <div>Material: {materials[file.material as keyof typeof materials]?.name || "PLA"}</div>
                            <div>Volumen: {file.volume.toFixed(1)}cm³</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 pt-4 border-t">
                      <Button 
                        onClick={async () => {
                          // Validate guest email if not logged in
                          if (!user && !guestEmail.trim()) {
                            toast({
                              title: "E-Mail erforderlich",
                              description: "Bitte geben Sie Ihre E-Mail-Adresse an.",
                              variant: "destructive",
                            });
                            return;
                          }

                          // Validate email format
                          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                          if (!user && !emailRegex.test(guestEmail)) {
                            toast({
                              title: "Ungültige E-Mail",
                              description: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
                              variant: "destructive",
                            });
                            return;
                          }

                          // Validate shipping address
                          if (!shippingAddress.street || !shippingAddress.postalCode || !shippingAddress.city) {
                            toast({
                              title: "Versandadresse unvollständig",
                              description: "Bitte geben Sie eine vollständige Versandadresse an.",
                              variant: "destructive",
                            });
                            return;
                          }

                          try {
                            toast({
                              title: "Dateien werden hochgeladen...",
                              description: "Bitte warten Sie einen Moment.",
                            });

                            // Upload files to Supabase Storage
                            const uploadedFileUrls: { [key: string]: string } = {};
                            
                            for (const file of uploadedFiles) {
                              // Sanitize filename to remove umlauts and special characters
                              const sanitizedFileName = sanitizeFilename(file.fileName);
                              const fileName = `${Date.now()}-${sanitizedFileName}`;
                              const filePath = `orders/${fileName}`;
                              
                              // Convert geometry to STL blob
                              const stlString = geometryToSTL(file.geometry);
                              const blob = new Blob([stlString], { type: 'application/sla' });
                              
                              const { error: uploadError } = await supabase.storage
                                .from('project-files')
                                .upload(filePath, blob);

                              if (uploadError) {
                                throw new Error(`Upload fehlgeschlagen: ${uploadError.message}`);
                              }

                              // Get signed URL (valid for 1 year for orders)
                              const { data: signedUrlData, error: signedUrlError } = await supabase.storage
                                .from('project-files')
                                .createSignedUrl(filePath, 31536000); // 1 year in seconds

                              if (signedUrlError || !signedUrlData?.signedUrl) {
                                throw new Error(`URL-Erstellung fehlgeschlagen: ${signedUrlError?.message || 'Keine URL erhalten'}`);
                              }

                              uploadedFileUrls[file.id] = signedUrlData.signedUrl;
                            }

                            toast({
                              title: "Bestellung wird vorbereitet...",
                              description: "Sie werden zu Stripe Checkout weitergeleitet.",
                            });

                            // Calculate file prices - MUST match filePrices calculation exactly
                            const items = uploadedFiles.map(file => {
                              const fileQuantity = file.quantity || 1;
                              const fileMaterial = materials[file.material as keyof typeof materials] || materials.pla;
                              const fileComplexity = file.complexity || 0;
                              const fileScale = file.scale || 1;
                              const filePostProcessing = file.postProcessing || "none";
                              const fileSupportRemoval = file.supportRemoval || false;
                              
                              const scaledVolume = file.volume * Math.pow(fileScale, 3);
                              const scaledLength = file.length * fileScale;
                              const scaledWidth = file.width * fileScale;
                              const scaledHeight = file.height * fileScale;
                              const maxDimension = Math.max(scaledLength, scaledWidth, scaledHeight);
                              
                              // FIXED: Calculate actual material volume (≈25% of object volume for typical settings: 20% infill + walls)
                              const infillFactor = 0.25;
                              const materialVolume = scaledVolume * infillFactor;
                              
                              const materialDensity = 1.24;
                              const materialWeightGrams = materialVolume * materialDensity;
                              
                              const objectArea = scaledLength * scaledWidth;
                              const plateArea = 150 * 150;
                              const objectsPerPlate = Math.max(1, Math.floor(plateArea / objectArea));
                              
                              const materialCostBase = (materialWeightGrams / 1000) * fileMaterial.pricePerKg;
                              const materialCostWithMarkup = materialCostBase * 1.30;
                              
                              // FIXED: Calculate print time based on material volume, not object volume
                              // Realistic print speed: 26 cm³/h (verified with slicer: 15h for 403 cm³)
                              const displayPrintTime = file.estimatedPrintTimeHours || (materialVolume / 26);
                              const pricingPrintTime = materialVolume / 26;
                              
                              const effectivePrintTime = file.material === 'pa12' || file.material === 'pa6'
                                ? pricingPrintTime * 3
                                : pricingPrintTime;
                              
                              const energyCostPerHour = 0.20;
                              const energyCostBase = (effectivePrintTime * energyCostPerHour) / objectsPerPlate;
                              const energyCostWithMarkup = energyCostBase * 1.30;
                              
                              const laborCost = 5.00;
                              
                              let printCostPerHour = maxDimension > 250 ? 4.0 : 1.5;
                              const printCost = (effectivePrintTime * printCostPerHour) / objectsPerPlate;
                              
                              const depreciationPerHour = 0.20;
                              const depreciationCost = (effectivePrintTime * depreciationPerHour) / objectsPerPlate;
                              const dryingCostPerHour = 0.50;
                              const dryingCost = fileMaterial.dryingHours * dryingCostPerHour;
                              
                              let subtotal = materialCostWithMarkup + energyCostWithMarkup + laborCost + 
                                             printCost + depreciationCost + dryingCost;
                              
                              let additionalServices = 0;
                              const postProcessingCost = postProcessingOptions[filePostProcessing as keyof typeof postProcessingOptions]?.price || 0;
                              additionalServices += postProcessingCost;
                              
                              if (fileSupportRemoval && fileComplexity >= 3) {
                                additionalServices += 8;
                              }
                              
                              subtotal += additionalServices;
                              subtotal = subtotal * 1.30; // Profit margin
                              subtotal = subtotal * 1.20; // Tax
                              
                              const complexityMultiplier = 1 + (fileComplexity * 0.5);
                              let pricePerPiece = subtotal * complexityMultiplier;

                              // Apply quantity discount
                              let discount = 1.0;
                              if (fileQuantity >= 50) discount = 0.80;
                              else if (fileQuantity >= 20) discount = 0.85;
                              else if (fileQuantity >= 10) discount = 0.90;
                              else if (fileQuantity >= 5) discount = 0.95;
                              
                              const totalPrice = pricePerPiece * fileQuantity * discount;
                              
                              return {
                                file_name: file.fileName,
                                file_url: uploadedFileUrls[file.id],
                                material: fileMaterial.name,
                                color: file.color || "Indigo",
                                quality: complexityLevels[fileComplexity],
                                dimensions: {
                                  original_length: file.length,
                                  original_width: file.width,
                                  original_height: file.height,
                                  scale_factor: fileScale,
                                  scaled_length: scaledLength,
                                  scaled_width: scaledWidth,
                                  scaled_height: scaledHeight,
                                },
                                volume: file.volume,
                                print_time: effectivePrintTime,
                                infill: 20,
                                quantity: fileQuantity,
                                unit_price: pricePerPiece,
                                total_price: totalPrice,
                              };
                            });

                            const postProcessingNames = postProcessing !== "none" 
                              ? [postProcessingOptions[postProcessing as keyof typeof postProcessingOptions]?.name || "Keine"]
                              : [];

                            const orderData = {
                              items,
                              express_service: isExpressService,
                              notes: uploadedFiles[0]?.notes || "",
                              post_processing: postProcessingNames,
                              shippingCost: pricing.shippingCost,
                              shippingAddress: shippingAddress,
                              guestEmail: user ? undefined : guestEmail,
                            };

                            const { data, error } = await supabase.functions.invoke("create-checkout-session", {
                              body: { orderData },
                            });

                            if (error) throw error;

                            if (data?.url) {
                              window.open(data.url, '_blank');
                            }
                          } catch (error) {
                            console.error("Error creating checkout:", error);
                            toast({
                              title: "Fehler",
                              description: error instanceof Error ? error.message : "Die Bestellung konnte nicht erstellt werden.",
                              variant: "destructive",
                            });
                          }
                        }}
                        variant="hero" 
                        className="w-full" 
                        size="lg"
                      >
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Jetzt bestellen - €{pricing.total.toFixed(2)}
                      </Button>
                      <Button onClick={() => setCurrentStep(1)} variant="outline" className="w-full">
                        Neu berechnen
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        🔒 Sichere Bezahlung über Stripe • 📦 Versandkostenfrei ab 100€ Warenwert
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Right Panel - Live Preview (50% width) */}
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

                  {!isExpressService && pricing.shippingCost === 0 && pricing.freeShipping && (
                    <div className="flex justify-between items-center p-4 bg-green-500/10 rounded-lg border-2 border-green-500/20">
                      <span className="font-medium flex items-center gap-1">
                        🎉 Versandkosten:
                      </span>
                      <span className="text-lg font-semibold text-green-600">
                        Kostenlos!
                      </span>
                    </div>
                  )}

                  {!isExpressService && pricing.shippingCost > 0 && (
                    <div className="flex justify-between items-center p-4 bg-blue-500/10 rounded-lg border-2 border-blue-500/20">
                      <span className="font-medium flex items-center gap-1">
                        <Package className="w-4 h-4 text-blue-500" />
                        Versandkosten:
                      </span>
                      <span className="text-lg font-semibold text-blue-600">
                        +€{pricing.shippingCost.toFixed(2)}
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

                  <div className="flex justify-between items-center p-4 bg-primary/20 rounded-lg">
                    <span className="font-medium">
                      Gesamtpreis ({uploadedFiles.reduce((sum, f) => sum + (f.quantity || 1), 0)} Stück insgesamt):
                    </span>
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

                    {uploadedFiles.reduce((sum, f) => sum + (f.quantity || 1), 0) >= 5 && (
                      <Badge className="w-full justify-center bg-green-500/10 text-green-600 border-green-500/20">
                        🎉 {uploadedFiles.reduce((sum, f) => sum + (f.quantity || 1), 0) >= 50 ? "Mega-Rabatt" : uploadedFiles.reduce((sum, f) => sum + (f.quantity || 1), 0) >= 20 ? "Großkunden-Rabatt" : uploadedFiles.reduce((sum, f) => sum + (f.quantity || 1), 0) >= 10 ? "Volumen-Rabatt" : "Mengen-Rabatt"} aktiv!
                      </Badge>
                    )}

                  {isExpressService && (
                    <Badge className="w-full justify-center bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
                      ⚡ Express-Lieferung in 24h
                    </Badge>
                  )}

                  {!isExpressService && !pricing.freeShipping && pricing.total > 70 && pricing.total < 100 && (
                    <Badge className="w-full justify-center bg-blue-500/10 text-blue-600 border-blue-500/20">
                      Noch €{(100 - (pricing.total - pricing.shippingCost - (pricing.expressShipping || 0))).toFixed(2)} bis kostenloser Versand!
                    </Badge>
                  )}

                  <div className="pt-4 border-t">
                    <p className="text-xs text-muted-foreground text-center">
                      📦 Kostenloser Versand ab 100€ • 🔒 Sichere Zahlung
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* File Edit Dialog with 3D Viewer */}
        <Dialog open={!!editingFileId} onOpenChange={(open) => !open && setEditingFileId(null)}>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Edit2 className="w-5 h-5 text-primary" />
                Datei bearbeiten & 3D-Vorschau
              </DialogTitle>
            </DialogHeader>
            {editingFileId && (() => {
              const editingFile = uploadedFiles.find(f => f.id === editingFileId);
              if (!editingFile) return null;
              
              const scaledLength = editingFile.length * (editingFile.scale || 1);
              const scaledWidth = editingFile.width * (editingFile.scale || 1);
              const scaledHeight = editingFile.height * (editingFile.scale || 1);
              const scaledVolume = editingFile.volume * Math.pow(editingFile.scale || 1, 3);
              const maxDimension = Math.max(scaledLength, scaledWidth, scaledHeight);
              
              // Calculate pricing for this file - SAME LOGIC AS filePrices
              const fileMaterial = materials[editingFile.material as keyof typeof materials] || materials.pla;
              const materialWeightGrams = scaledVolume * 1.24;
              
              // Calculate objects per plate
              const objectArea = scaledLength * scaledWidth;
              const plateArea = 150 * 150;
              const objectsPerPlate = Math.max(1, Math.floor(plateArea / objectArea));
              
              // CRITICAL: Two separate time values
              // displayPrintTime = realistic time from edge function (for display)
              // pricingPrintTime = formula time (for maintaining correct price)
              const displayPrintTime = editingFile.estimatedPrintTimeHours || (scaledVolume / 50);
              let pricingPrintTime = scaledVolume / 50;
              
              // Verdreifache Druckzeit für PA12 und PA6
              if (editingFile.material === 'pa12' || editingFile.material === 'pa6') {
                pricingPrintTime = pricingPrintTime * 3;
              }
              
              const effectivePrintTime = pricingPrintTime; // Used for PRICING only
              
              const materialCostBase = (materialWeightGrams / 1000) * fileMaterial.pricePerKg;
              const materialCostWithMarkup = materialCostBase * 1.30;
              
              const energyCostPerHour = 0.20;
              const energyCostBase = (effectivePrintTime * energyCostPerHour) / objectsPerPlate;
              const energyCostWithMarkup = energyCostBase * 1.30;
              
              const laborCost = 5.00;
              
              let printCostPerHour = maxDimension > 250 ? 4.0 : 1.5;
              const printCost = (effectivePrintTime * printCostPerHour) / objectsPerPlate;
              
              const depreciationPerHour = 0.20;
              const depreciationCost = (effectivePrintTime * depreciationPerHour) / objectsPerPlate;
              const dryingCostPerHour = 0.50;
              const dryingCost = fileMaterial.dryingHours * dryingCostPerHour;
              
              let subtotal = materialCostWithMarkup + energyCostWithMarkup + laborCost + 
                             printCost + depreciationCost + dryingCost;
              
              const fileComplexity = editingFile.complexity || 0;
              const filePostProcessing = editingFile.postProcessing || "none";
              const fileSupportRemoval = editingFile.supportRemoval || false;
              
              let additionalServices = 0;
              const postProcessingCost = postProcessingOptions[filePostProcessing as keyof typeof postProcessingOptions]?.price || 0;
              additionalServices += postProcessingCost;
              
              if (fileSupportRemoval && fileComplexity >= 3) {
                additionalServices += 8;
              }
              
              subtotal += additionalServices;
              subtotal = subtotal * 1.30; // Profit margin
              subtotal = subtotal * 1.20; // Tax
              
              // Apply complexity multiplier: +50% per level (0=100%, 1=150%, 2=200%, 3=250%, 4=300%)
              const complexityMultiplier = 1 + (fileComplexity * 0.5);
              let estimatedPrice = subtotal * complexityMultiplier;
              
              return (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-4">
                  {/* Left: 3D Viewer + Price */}
                  <div className="space-y-4">
                    <div className="aspect-square bg-muted/30 rounded-lg overflow-hidden">
                      {editingFile.geometry && (
                        <Model3DViewer 
                          geometry={editingFile.geometry} 
                          fileName={editingFile.fileName}
                          scale={editingFile.scale || 1}
                          color={editingFile.color || "#4f46e5"}
                          onScaleChange={(newScale) => {
                            setUploadedFiles(prev => prev.map(f => 
                              f.id === editingFileId ? { ...f, scale: newScale } : f
                            ));
                          }}
                          estimatedPrintTimeHours={displayPrintTime}
                          pricing={{
                            perPiece: estimatedPrice,
                            total: estimatedPrice,
                            materialWeight: materialWeightGrams
                          }}
                        />
                      )}
                    </div>
                    
                    {/* Live Price & Done Button */}
                    <div className="flex items-center justify-between gap-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Live-Preis</p>
                        <p className="text-2xl font-bold text-primary">€{estimatedPrice.toFixed(2)}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {displayPrintTime.toFixed(1)}h • {materialWeightGrams.toFixed(0)}g
                          </p>
                      </div>
                      <Button onClick={() => setEditingFileId(null)} size="lg">
                        Fertig
                      </Button>
                    </div>
                  </div>

                  {/* Right: Settings */}
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-medium mb-2">{editingFile.fileName}</p>
                      <p className="text-xs text-muted-foreground">
                        Original: {editingFile.length}×{editingFile.width}×{editingFile.height}mm • {editingFile.volume.toFixed(1)}cm³
                      </p>
                    </div>

                    {/* Color Selection */}
                    <div>
                      <label className="text-sm font-medium mb-3 block flex items-center gap-2">
                        <Palette className="w-4 h-4" />
                        Farbe wählen
                      </label>
                      <div className="grid grid-cols-6 gap-3">
                        {colorOptions.map((color) => (
                          <button
                            key={color.hex}
                            onClick={() => {
                              setUploadedFiles(prev => prev.map(f => 
                                f.id === editingFileId ? { ...f, color: color.hex } : f
                              ));
                            }}
                            className={`group relative aspect-square rounded-lg border-2 transition-all hover:scale-110 ${
                              editingFile.color === color.hex
                                ? "border-primary ring-2 ring-primary ring-offset-2"
                                : "border-border hover:border-primary/50"
                            }`}
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                          >
                            {editingFile.color === color.hex && (
                              <Check className="w-4 h-4 absolute inset-0 m-auto text-white drop-shadow-lg" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Material Selection */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">Material</label>
                      <Select 
                        value={editingFile.material || "pla"}
                        onValueChange={(value) => {
                          setUploadedFiles(prev => prev.map(f => 
                            f.id === editingFileId ? { ...f, material: value } : f
                          ));
                        }}
                      >
                        <SelectTrigger className="w-full h-12">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pla">PLA - €19.99/kg</SelectItem>
                          <SelectItem value="petg">PETG - €19.99/kg</SelectItem>
                          <SelectItem value="abs">ABS - €29.99/kg</SelectItem>
                          <SelectItem value="asa">ASA - €29.99/kg</SelectItem>
                          <SelectItem value="tpu">TPU - €24.99/kg</SelectItem>
                          <SelectItem value="pa12">PA12 Nylon - €99.99/kg</SelectItem>
                          <SelectItem value="pa6">PA6 Nylon - €99.99/kg</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Scale Control */}
                    <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                      <label className="text-sm font-medium mb-3 block flex items-center gap-2">
                        <Ruler className="w-4 h-4 text-primary" />
                        Skalierung: {((editingFile.scale || 1) * 100).toFixed(0)}%
                      </label>
                      <Slider
                        value={[editingFile.scale || 1]}
                        onValueChange={(v) => {
                          // Calculate max scale to keep largest dimension under 350mm
                          const maxOriginalDimension = Math.max(editingFile.length, editingFile.width, editingFile.height);
                          const maxAllowedScale = 350 / maxOriginalDimension;
                          const newScale = Math.max(0.1, Math.min(maxAllowedScale, v[0]));
                          setUploadedFiles(prev => prev.map(f => 
                            f.id === editingFileId ? { ...f, scale: newScale } : f
                          ));
                        }}
                        max={(() => {
                          const maxOriginalDimension = Math.max(editingFile.length, editingFile.width, editingFile.height);
                          return Math.min(5, 350 / maxOriginalDimension);
                        })()}
                        min={0.1}
                        step={0.1}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-2">
                        <span>10%</span>
                        <span className="font-medium text-primary">
                          {Math.round(editingFile.length * (editingFile.scale || 1))}×
                          {Math.round(editingFile.width * (editingFile.scale || 1))}×
                          {Math.round(editingFile.height * (editingFile.scale || 1))}mm
                        </span>
                        <span>{(() => {
                          const maxOriginalDimension = Math.max(editingFile.length, editingFile.width, editingFile.height);
                          const maxScale = Math.min(5, 350 / maxOriginalDimension);
                          return Math.round(maxScale * 100);
                        })()}%</span>
                      </div>
                      {(() => {
                        const maxOriginalDimension = Math.max(editingFile.length, editingFile.width, editingFile.height);
                        const scaledMaxDimension = maxOriginalDimension * (editingFile.scale || 1);
                        if (scaledMaxDimension > 340) {
                          return (
                            <p className="text-xs text-amber-600 mt-2 flex items-center gap-1">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              Nahe am Maximum: 350mm Limit
                            </p>
                          );
                        }
                        return null;
                      })()}
                    </div>

                    {/* Complexity */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Komplexität: {complexityLevels[editingFile.complexity || 0]}
                      </label>
                      <Slider
                        value={[editingFile.complexity || 0]}
                        onValueChange={(v) => {
                          setUploadedFiles(prev => prev.map(f => 
                            f.id === editingFileId ? { ...f, complexity: Math.round(v[0]) } : f
                          ));
                        }}
                        max={4}
                        min={0}
                        step={1}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>Einfach</span>
                        <span>Sehr komplex</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CostCalculatorWizard;
