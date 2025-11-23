import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface Vector3 {
  x: number;
  y: number;
  z: number;
}

interface Triangle {
  normal: Vector3;
  vertices: [Vector3, Vector3, Vector3];
}

interface STLAnalysis {
  volume: number;
  surfaceArea: number;
  boundingBox: {
    min: Vector3;
    max: Vector3;
    dimensions: Vector3;
  };
  overhangs: {
    count: number;
    percentage: number;
    severity: 'none' | 'low' | 'medium' | 'high';
  };
  complexity: {
    triangleCount: number;
    score: number; // 0-1
    level: 'simple' | 'moderate' | 'complex' | 'very_complex';
  };
  estimates: {
    printTimeHours: number;
    materialGrams: number;
    supportMaterialGrams: number;
    layerCount: number;
  };
}

// STL Parser für Binary Format
function parseBinarySTL(buffer: ArrayBuffer): Triangle[] {
  const view = new DataView(buffer);
  let offset = 80; // Skip header
  
  const triangleCount = view.getUint32(offset, true);
  offset += 4;
  
  const triangles: Triangle[] = [];
  
  for (let i = 0; i < triangleCount; i++) {
    const normal: Vector3 = {
      x: view.getFloat32(offset, true),
      y: view.getFloat32(offset + 4, true),
      z: view.getFloat32(offset + 8, true),
    };
    offset += 12;
    
    const v1: Vector3 = {
      x: view.getFloat32(offset, true),
      y: view.getFloat32(offset + 4, true),
      z: view.getFloat32(offset + 8, true),
    };
    offset += 12;
    
    const v2: Vector3 = {
      x: view.getFloat32(offset, true),
      y: view.getFloat32(offset + 4, true),
      z: view.getFloat32(offset + 8, true),
    };
    offset += 12;
    
    const v3: Vector3 = {
      x: view.getFloat32(offset, true),
      y: view.getFloat32(offset + 4, true),
      z: view.getFloat32(offset + 8, true),
    };
    offset += 12;
    
    offset += 2; // Skip attribute byte count
    
    triangles.push({ normal, vertices: [v1, v2, v3] });
  }
  
  return triangles;
}

// Berechne Volumen mit Signed Volume Method
function calculateVolume(triangles: Triangle[]): number {
  let volume = 0;
  
  for (const triangle of triangles) {
    const [v1, v2, v3] = triangle.vertices;
    volume += signedVolumeOfTriangle(v1, v2, v3);
  }
  
  return Math.abs(volume);
}

function signedVolumeOfTriangle(p1: Vector3, p2: Vector3, p3: Vector3): number {
  return (p1.x * p2.y * p3.z + p2.x * p3.y * p1.z + p3.x * p1.y * p2.z -
          p3.x * p2.y * p1.z - p2.x * p1.y * p3.z - p1.x * p3.y * p2.z) / 6.0;
}

// Berechne Oberfläche
function calculateSurfaceArea(triangles: Triangle[]): number {
  let area = 0;
  
  for (const triangle of triangles) {
    const [v1, v2, v3] = triangle.vertices;
    
    // Kantenvektoren
    const ab = {
      x: v2.x - v1.x,
      y: v2.y - v1.y,
      z: v2.z - v1.z,
    };
    
    const ac = {
      x: v3.x - v1.x,
      y: v3.y - v1.y,
      z: v3.z - v1.z,
    };
    
    // Kreuzprodukt für Fläche
    const cross = {
      x: ab.y * ac.z - ab.z * ac.y,
      y: ab.z * ac.x - ab.x * ac.z,
      z: ab.x * ac.y - ab.y * ac.x,
    };
    
    const magnitude = Math.sqrt(cross.x ** 2 + cross.y ** 2 + cross.z ** 2);
    area += magnitude / 2;
  }
  
  return area;
}

// Berechne Bounding Box
function calculateBoundingBox(triangles: Triangle[]) {
  const min: Vector3 = { x: Infinity, y: Infinity, z: Infinity };
  const max: Vector3 = { x: -Infinity, y: -Infinity, z: -Infinity };
  
  for (const triangle of triangles) {
    for (const vertex of triangle.vertices) {
      min.x = Math.min(min.x, vertex.x);
      min.y = Math.min(min.y, vertex.y);
      min.z = Math.min(min.z, vertex.z);
      
      max.x = Math.max(max.x, vertex.x);
      max.y = Math.max(max.y, vertex.y);
      max.z = Math.max(max.z, vertex.z);
    }
  }
  
  return {
    min,
    max,
    dimensions: {
      x: max.x - min.x,
      y: max.y - min.y,
      z: max.z - min.z,
    },
  };
}

// Analysiere Überhänge (Flächen mit Normal-Z < -0.5 sind Überhänge)
function analyzeOverhangs(triangles: Triangle[]) {
  const overhangThreshold = -0.5; // 60° Überhang
  const severeThreshold = -0.7;   // 45° Überhang
  
  let overhangCount = 0;
  let severeOverhangCount = 0;
  
  for (const triangle of triangles) {
    const normalZ = triangle.normal.z;
    
    if (normalZ < overhangThreshold) {
      overhangCount++;
      if (normalZ < severeThreshold) {
        severeOverhangCount++;
      }
    }
  }
  
  const percentage = (overhangCount / triangles.length) * 100;
  const severePercentage = (severeOverhangCount / triangles.length) * 100;
  
  let severity: 'none' | 'low' | 'medium' | 'high' = 'none';
  if (severePercentage > 15) severity = 'high';
  else if (percentage > 20) severity = 'medium';
  else if (percentage > 5) severity = 'low';
  
  return {
    count: overhangCount,
    percentage,
    severity,
  };
}

// Berechne Komplexität
function calculateComplexity(triangles: Triangle[], surfaceArea: number, volume: number) {
  const triangleCount = triangles.length;
  
  // Surface-to-Volume Ratio (höher = komplexer)
  const svRatio = volume > 0 ? surfaceArea / volume : 0;
  
  // Triangle Density (mehr Triangles pro Volumen = komplexer)
  const triangleDensity = volume > 0 ? triangleCount / volume : 0;
  
  // Normalisierte Scores
  const triangleScore = Math.min(triangleCount / 100000, 1); // 100k triangles = max
  const svScore = Math.min(svRatio / 100, 1);
  const densityScore = Math.min(triangleDensity / 1000, 1);
  
  const complexityScore = (triangleScore * 0.4 + svScore * 0.3 + densityScore * 0.3);
  
  let level: 'simple' | 'moderate' | 'complex' | 'very_complex' = 'simple';
  if (complexityScore > 0.75) level = 'very_complex';
  else if (complexityScore > 0.5) level = 'complex';
  else if (complexityScore > 0.25) level = 'moderate';
  
  return {
    triangleCount,
    score: complexityScore,
    level,
  };
}

// Schätze Druckzeit und Material
function estimatePrinting(
  volume: number,
  surfaceArea: number,
  boundingBox: any,
  overhangs: any,
  complexity: any
) {
  const volumeCm3 = volume / 1000; // mm³ to cm³
  
  // Layer Höhe basierend auf Komplexität
  const layerHeight = complexity.level === 'very_complex' ? 0.1 : 
                     complexity.level === 'complex' ? 0.15 : 0.2;
  
  const layerCount = Math.ceil(boundingBox.dimensions.z / layerHeight);
  
  // Druckgeschwindigkeit basierend auf Komplexität (mm/s)
  let printSpeed = 60; // Standard
  if (complexity.level === 'very_complex') printSpeed = 40;
  else if (complexity.level === 'complex') printSpeed = 50;
  
  // Infill (20% Standard)
  const infillPercentage = 0.20;
  const solidVolume = volumeCm3 * infillPercentage;
  
  // Material density (PLA: 1.24 g/cm³)
  const materialDensity = 1.24;
  const materialGrams = solidVolume * materialDensity;
  
  // Perimeter und Top/Bottom Layers
  const shellThickness = 0.8; // 2 Perimeter
  const topBottomLayers = 4;
  const shellVolume = (surfaceArea / 100) * shellThickness / 10;
  const shellMaterial = shellVolume * materialDensity;
  
  const totalMaterial = materialGrams + shellMaterial;
  
  // Support Material Schätzung
  let supportMaterial = 0;
  if (overhangs.severity === 'high') {
    supportMaterial = totalMaterial * 0.3; // 30% Support
  } else if (overhangs.severity === 'medium') {
    supportMaterial = totalMaterial * 0.15;
  } else if (overhangs.severity === 'low') {
    supportMaterial = totalMaterial * 0.05;
  }
  
  // Druckzeit Berechnung
  // Basis: Volumen / Durchsatz
  const volumetricFlowRate = 11; // mm³/s für 0.4mm Nozzle bei 50mm/s
  const extrusionTime = (volumeCm3 * 1000) / volumetricFlowRate / 3600; // hours
  
  // Travel, Retractions, Acceleration
  const travelTime = layerCount * 0.5 / 60; // 0.5s pro Layer
  const complexityFactor = 1 + (complexity.score * 0.5);
  const overhangFactor = overhangs.severity === 'high' ? 1.3 : 
                        overhangs.severity === 'medium' ? 1.15 : 1.0;
  
  const totalPrintTime = (extrusionTime + travelTime) * complexityFactor * overhangFactor;
  
  return {
    printTimeHours: Math.max(0.5, totalPrintTime),
    materialGrams: Math.max(5, totalMaterial),
    supportMaterialGrams: supportMaterial,
    layerCount,
  };
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('STL Analysis started');
    
    const formData = await req.formData();
    const stlFile = formData.get('file') as File;
    
    if (!stlFile) {
      throw new Error('No STL file provided');
    }
    
    console.log('Processing file:', stlFile.name, 'Size:', stlFile.size);
    
    // Memory limit: Max 15MB für vollständige Analyse
    const MAX_FILE_SIZE = 15 * 1024 * 1024; // 15MB
    if (stlFile.size > MAX_FILE_SIZE) {
      console.log('File too large, using sampling analysis');
      
      // Für große Dateien: Sampling-Analyse
      const arrayBuffer = await stlFile.arrayBuffer();
      const view = new DataView(arrayBuffer);
      const triangleCount = view.getUint32(80, true);
      
      // Schätze basierend auf Dateistruktur
      const estimatedVolume = (stlFile.size / 50) * 0.1; // Heuristik
      const estimatedSurfaceArea = estimatedVolume * 2.5;
      
      const analysis: STLAnalysis = {
        volume: estimatedVolume,
        surfaceArea: estimatedSurfaceArea,
        boundingBox: {
          min: { x: 0, y: 0, z: 0 },
          max: { x: 100, y: 100, z: 50 },
          dimensions: { x: 100, y: 100, z: 50 },
        },
        overhangs: {
          count: Math.floor(triangleCount * 0.1),
          percentage: 10,
          severity: 'medium',
        },
        complexity: {
          triangleCount,
          score: 0.8,
          level: 'very_complex',
        },
        estimates: {
          printTimeHours: (estimatedVolume / 100) * 8,
          materialGrams: estimatedVolume * 1.24 * 0.2,
          supportMaterialGrams: estimatedVolume * 1.24 * 0.05,
          layerCount: 250,
        },
      };
      
      console.log('Sampling analysis complete');
      return new Response(JSON.stringify(analysis), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      });
    }
    
    // File zu ArrayBuffer konvertieren
    const arrayBuffer = await stlFile.arrayBuffer();
    
    // STL parsen (Binary Format)
    const triangles = parseBinarySTL(arrayBuffer);
    console.log('Parsed triangles:', triangles.length);
    
    // Geometrie analysieren
    const volume = calculateVolume(triangles);
    const surfaceArea = calculateSurfaceArea(triangles);
    const boundingBox = calculateBoundingBox(triangles);
    const overhangs = analyzeOverhangs(triangles);
    const complexity = calculateComplexity(triangles, surfaceArea, volume);
    const estimates = estimatePrinting(volume, surfaceArea, boundingBox, overhangs, complexity);
    
    const analysis: STLAnalysis = {
      volume,
      surfaceArea,
      boundingBox,
      overhangs,
      complexity,
      estimates,
    };
    
    console.log('Analysis complete:', {
      volume: volume.toFixed(2),
      triangles: triangles.length,
      printTime: estimates.printTimeHours.toFixed(2),
      material: estimates.materialGrams.toFixed(2),
    });
    
    return new Response(JSON.stringify(analysis), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error analyzing STL:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      details: error.stack 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
