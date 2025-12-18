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

// Helper function to validate coordinates
function isValidCoordinate(v: Vector3): boolean {
  const MAX_COORD = 10000; // Max 10 meters in any direction
  return !isNaN(v.x) && !isNaN(v.y) && !isNaN(v.z) &&
         isFinite(v.x) && isFinite(v.y) && isFinite(v.z) &&
         Math.abs(v.x) < MAX_COORD && Math.abs(v.y) < MAX_COORD && Math.abs(v.z) < MAX_COORD;
}

// Check if file is ASCII STL
// Binary STL files can also have "solid" in their header, so we need a more robust check
function isAsciiSTL(buffer: ArrayBuffer): boolean {
  // First check: must start with "solid"
  const headerText = new TextDecoder().decode(buffer.slice(0, 80));
  if (!headerText.toLowerCase().trimStart().startsWith('solid')) {
    return false;
  }
  
  // Second check: Look for ASCII STL keywords in the file content
  // Binary files won't have these text patterns after the header
  const sampleSize = Math.min(buffer.byteLength, 1000);
  const sampleText = new TextDecoder().decode(buffer.slice(0, sampleSize));
  const lowerSample = sampleText.toLowerCase();
  
  // ASCII STL must contain "facet normal" and "vertex" keywords
  const hasFacetNormal = lowerSample.includes('facet normal');
  const hasVertex = lowerSample.includes('vertex');
  
  // If we find these keywords, it's likely ASCII
  if (hasFacetNormal && hasVertex) {
    return true;
  }
  
  // Additional check: if header says "solid" but no ASCII keywords found,
  // verify by checking if the data after header looks like binary (has triangle count)
  if (buffer.byteLength >= 84) {
    const view = new DataView(buffer);
    const triangleCount = view.getUint32(80, true);
    const expectedSize = 84 + triangleCount * 50;
    
    // If file size matches binary format closely, it's binary
    if (Math.abs(buffer.byteLength - expectedSize) < 100) {
      console.log('Detected as binary STL (header contains "solid" but structure is binary)');
      return false;
    }
  }
  
  return false; // Default to binary if unsure
}

// Parse ASCII STL
function parseAsciiSTL(text: string): Triangle[] {
  const triangles: Triangle[] = [];
  const lines = text.split('\n');
  
  let currentTriangle: Partial<Triangle> | null = null;
  let vertices: Vector3[] = [];
  
  for (const line of lines) {
    const trimmed = line.trim().toLowerCase();
    
    if (trimmed.startsWith('facet normal')) {
      const parts = trimmed.split(/\s+/);
      currentTriangle = {
        normal: {
          x: parseFloat(parts[2]),
          y: parseFloat(parts[3]),
          z: parseFloat(parts[4]),
        },
        vertices: [] as any,
      };
      vertices = [];
    } else if (trimmed.startsWith('vertex')) {
      const parts = trimmed.split(/\s+/);
      vertices.push({
        x: parseFloat(parts[1]),
        y: parseFloat(parts[2]),
        z: parseFloat(parts[3]),
      });
    } else if (trimmed.startsWith('endfacet')) {
      if (currentTriangle && vertices.length === 3) {
        currentTriangle.vertices = vertices as [Vector3, Vector3, Vector3];
        triangles.push(currentTriangle as Triangle);
      }
      currentTriangle = null;
      vertices = [];
    }
  }
  
  return triangles;
}

// STL Parser für Binary Format
function parseBinarySTL(buffer: ArrayBuffer): Triangle[] {
  const view = new DataView(buffer);
  
  // Validate minimum file size
  if (buffer.byteLength < 84) {
    throw new Error('Invalid STL file: too small');
  }
  
  let offset = 80; // Skip header
  
  const triangleCountFromHeader = view.getUint32(offset, true);
  offset += 4;
  
  // Calculate actual triangle count based on file size (more reliable)
  const actualDataSize = buffer.byteLength - 84; // Minus header and count
  const calculatedTriangleCount = Math.floor(actualDataSize / 50);
  
  // Use the smaller of the two to be safe (handles corrupt headers)
  const triangleCount = Math.min(triangleCountFromHeader, calculatedTriangleCount);
  
  // Log if there's a mismatch
  if (triangleCountFromHeader !== calculatedTriangleCount) {
    console.log(`Triangle count mismatch: Header says ${triangleCountFromHeader}, file size suggests ${calculatedTriangleCount}. Using ${triangleCount}.`);
  }
  
  const triangles: Triangle[] = [];
  
  for (let i = 0; i < triangleCount; i++) {
    // Additional safety check
    if (offset + 50 > buffer.byteLength) {
      console.log(`Warning: Truncated STL file at triangle ${i}/${triangleCount}`);
      break;
    }
    
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
    
    // Validate coordinates
    if (!isValidCoordinate(v1) || !isValidCoordinate(v2) || !isValidCoordinate(v3)) {
      throw new Error(`Invalid coordinates detected at triangle ${i}. File may be corrupted or in wrong format.`);
    }
    
    triangles.push({ normal, vertices: [v1, v2, v3] });
  }
  
  return triangles;
}

// Main STL parser that detects format
function parseSTL(buffer: ArrayBuffer): Triangle[] {
  // Check if it's ASCII format
  if (isAsciiSTL(buffer)) {
    console.log('Detected ASCII STL format');
    const text = new TextDecoder().decode(buffer);
    return parseAsciiSTL(text);
  }
  
  // Try binary format
  console.log('Parsing as binary STL format');
  try {
    return parseBinarySTL(buffer);
  } catch (error) {
    // If binary parsing fails, try ASCII as fallback
    console.log('Binary parsing failed, trying ASCII format:', error);
    const text = new TextDecoder().decode(buffer);
    return parseAsciiSTL(text);
  }
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
  
  // Strengere Schwellenwerte: Nur echte Überhänge werden als solche erkannt
  let severity: 'none' | 'low' | 'medium' | 'high' = 'none';
  if (severePercentage > 20) severity = 'high';      // >20% sehr steile Überhänge
  else if (severePercentage > 10) severity = 'medium'; // 10-20% steile Überhänge
  else if (percentage > 30) severity = 'medium';       // Oder >30% normale Überhänge
  else if (percentage > 10) severity = 'low';          // 10-30% leichte Überhänge
  
  return {
    count: overhangCount,
    percentage,
    severity,
  };
}

// Berechne Komplexität mit erweiterten Metriken
function calculateComplexity(triangles: Triangle[], surfaceArea: number, volume: number) {
  const triangleCount = triangles.length;
  
  // Volumen in cm³ für bessere Verhältnisberechnung
  const volumeCm3 = volume / 1000;
  const surfaceAreaCm2 = surfaceArea / 100;
  
  // 1. Surface-to-Volume Ratio - KRITISCH für organische/detaillierte Modelle
  // Eine Kugel hat das niedrigste Verhältnis, detaillierte Modelle viel höher
  // Formel: SA/V für eine Kugel mit gleichem Volumen = 4.84 * V^(-1/3)
  // Alles darüber = mehr Oberfläche als nötig = komplexer
  const sphereEquivalentSV = volumeCm3 > 0 ? 4.84 * Math.pow(volumeCm3, -1/3) : 0;
  const actualSV = volumeCm3 > 0 ? surfaceAreaCm2 / volumeCm3 : 0;
  const svComplexity = sphereEquivalentSV > 0 ? actualSV / sphereEquivalentSV : 1;
  // svComplexity > 2 bedeutet doppelt so viel Oberfläche wie eine Kugel = sehr detailliert
  
  // 2. Triangle Density - mehr Triangles pro Oberfläche = feinere Details
  const triangleDensity = surfaceAreaCm2 > 0 ? triangleCount / surfaceAreaCm2 : 0;
  // Typisch: 50-200 triangles/cm² für einfache Modelle, 500+ für detaillierte
  
  // 3. Absolute Triangle Count - hohe Zahlen = detailliertes Modell
  // 1000 triangles = einfach, 10000 = moderat, 50000+ = komplex
  
  // 4. Normal Variance (wie stark variieren die Normalen = Oberflächenkrümmung)
  let normalVariance = 0;
  if (triangles.length > 1) {
    // Berechne Winkelabweichung zwischen benachbarten Normalen
    let totalDeviation = 0;
    for (let i = 1; i < triangles.length; i++) {
      const n1 = triangles[i-1].normal;
      const n2 = triangles[i].normal;
      // Dot product = cos(angle)
      const dot = n1.x * n2.x + n1.y * n2.y + n1.z * n2.z;
      totalDeviation += 1 - Math.abs(dot); // 0 = gleich, 2 = entgegengesetzt
    }
    normalVariance = totalDeviation / triangles.length;
  }
  
  // SCORING - angepasst für realistische Erkennung
  
  // Surface-to-Volume Score: > 3x Kugel = sehr komplex
  const svScore = Math.min((svComplexity - 1) / 2, 1); // 1 = Kugel, 3 = max
  
  // Triangle Density Score: > 500 triangles/cm² = max
  const densityScore = Math.min(triangleDensity / 500, 1);
  
  // Triangle Count Score: 50k = max
  const triangleScore = Math.min(triangleCount / 50000, 1);
  
  // Normal Variance Score
  const normalScore = Math.min(normalVariance * 5, 1);
  
  // Gewichtete Gesamtkomplexität
  // SV-Ratio ist der wichtigste Indikator für organische/detaillierte Modelle!
  const complexityScore = (
    svScore * 0.40 +           // Surface-to-Volume (HAUPTINDIKATOR)
    triangleScore * 0.25 +     // Absolute triangle count
    densityScore * 0.20 +      // Triangle density
    normalScore * 0.15         // Surface curvature
  );
  
  // Level-Bestimmung mit realistischen Schwellenwerten
  let level: 'simple' | 'moderate' | 'complex' | 'very_complex' = 'simple';
  
  // Spezialfälle für organische Modelle: hohe SV-Ratio = sofort komplex
  if (svComplexity > 4) {
    level = 'very_complex';
  } else if (svComplexity > 2.5) {
    level = 'complex';
  } else if (complexityScore > 0.65) {
    level = 'very_complex';
  } else if (complexityScore > 0.45) {
    level = 'complex';
  } else if (complexityScore > 0.25) {
    level = 'moderate';
  }
  
  console.log(`Complexity analysis: SV=${svComplexity.toFixed(2)}, Density=${triangleDensity.toFixed(0)}, Triangles=${triangleCount}, Score=${complexityScore.toFixed(2)}, Level=${level}`);
  
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
  
  // KRITISCHE ÄNDERUNG: Infill basierend auf Komplexität!
  // Detaillierte Modelle haben viele kleine Features = effektiv mehr Material
  // Einfache Grundformen: 20% Infill
  // Komplexe organische Modelle: 60-80% effektiver Infill (viele kleine Bereiche = fast solid)
  let infillPercentage: number;
  switch (complexity.level) {
    case 'very_complex':
      infillPercentage = 0.75; // Sehr detailliert = fast vollständig gefüllt
      break;
    case 'complex':
      infillPercentage = 0.55; // Detailliert = mehr als halb gefüllt
      break;
    case 'moderate':
      infillPercentage = 0.35; // Moderat = etwas mehr als Standard
      break;
    default:
      infillPercentage = 0.20; // Einfache Formen = Standard 20%
  }
  
  const infillVolume = volumeCm3 * infillPercentage;
  
  // Material density (PLA: 1.24 g/cm³)
  const materialDensity = 1.24;
  const infillMaterial = infillVolume * materialDensity;
  
  // Shell (Wände + Top/Bottom) - abhängig von Komplexität
  // Komplexe Teile haben mehr Oberfläche = mehr Shell
  const shellPercentage = complexity.level === 'very_complex' ? 0.18 :
                         complexity.level === 'complex' ? 0.15 : 0.12;
  const shellVolume = volumeCm3 * shellPercentage;
  const shellMaterial = shellVolume * materialDensity;
  
  const totalMaterial = infillMaterial + shellMaterial;
  
  // Support Material Schätzung
  let supportMaterial = 0;
  if (overhangs.severity === 'high') {
    supportMaterial = totalMaterial * 0.3;
  } else if (overhangs.severity === 'medium') {
    supportMaterial = totalMaterial * 0.15;
  } else if (overhangs.severity === 'low') {
    supportMaterial = totalMaterial * 0.05;
  }
  
  // DRUCKZEIT - REALISTISCH basierend auf Material und Komplexität
  // Basis: Gramm Material / Druckrate (g/h)
  // Einfache Teile: ~60g/h
  // Komplexe Teile: ~25g/h (langsamer wegen Details, Retractions, etc.)
  let gramsPerHour: number;
  switch (complexity.level) {
    case 'very_complex':
      gramsPerHour = 20; // Sehr langsam für feine Details
      break;
    case 'complex':
      gramsPerHour = 30; // Langsamer für Details
      break;
    case 'moderate':
      gramsPerHour = 45; // Etwas langsamer
      break;
    default:
      gramsPerHour = 60; // Schnell für einfache Formen
  }
  
  let basePrintTime = totalMaterial / gramsPerHour;
  
  // Support-Zeit addieren basierend auf Überhängen
  let supportTimeFactor = 1.0;
  if (overhangs.severity === 'high') {
    supportTimeFactor = 1.5;
  } else if (overhangs.severity === 'medium') {
    supportTimeFactor = 1.25;
  } else if (overhangs.severity === 'low') {
    supportTimeFactor = 1.1;
  }
  
  const totalPrintTime = basePrintTime * supportTimeFactor;
  
  console.log(`Print estimate: ${totalMaterial.toFixed(1)}g (${infillPercentage * 100}% infill), ${totalPrintTime.toFixed(1)}h (${gramsPerHour}g/h)`);
  
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
    
    // Memory limit: Max 8MB für vollständige Analyse (Edge Functions haben begrenzte Ressourcen)
    const MAX_FILE_SIZE = 8 * 1024 * 1024; // 8MB
    if (stlFile.size > MAX_FILE_SIZE) {
      console.log('File too large, using sampling analysis');
      
      // Für große Dateien: Bounding Box direkt aus STL lesen (ohne alles im Speicher zu halten)
      const arrayBuffer = await stlFile.arrayBuffer();
      const view = new DataView(arrayBuffer);
      const triangleCount = view.getUint32(80, true);
      
      // Berechne echte Bounding Box durch Streaming der Vertices
      const min: Vector3 = { x: Infinity, y: Infinity, z: Infinity };
      const max: Vector3 = { x: -Infinity, y: -Infinity, z: -Infinity };
      let offset = 84; // Nach Header (80) + Triangle Count (4)
      
      for (let i = 0; i < triangleCount; i++) {
        offset += 12; // Skip Normal
        
        // Lese 3 Vertices
        for (let v = 0; v < 3; v++) {
          const x = view.getFloat32(offset, true);
          const y = view.getFloat32(offset + 4, true);
          const z = view.getFloat32(offset + 8, true);
          
          min.x = Math.min(min.x, x);
          min.y = Math.min(min.y, y);
          min.z = Math.min(min.z, z);
          max.x = Math.max(max.x, x);
          max.y = Math.max(max.y, y);
          max.z = Math.max(max.z, z);
          
          offset += 12;
        }
        
        offset += 2; // Skip Attribute Byte Count
      }
      
      const dimensions = {
        x: max.x - min.x,
        y: max.y - min.y,
        z: max.z - min.z,
      };
      
      // Berechne Volumen durch Streaming aller Triangles (Signed Volume Method)
      console.log('Streaming volume calculation for', triangleCount, 'triangles');
      let totalVolume = 0;
      let streamOffset = 84; // Nach Header + Triangle Count
      
      for (let i = 0; i < triangleCount; i++) {
        // Skip Normal (12 bytes)
        streamOffset += 12;
        
        // Lese 3 Vertices für Volumen-Berechnung
        const v1x = view.getFloat32(streamOffset, true);
        const v1y = view.getFloat32(streamOffset + 4, true);
        const v1z = view.getFloat32(streamOffset + 8, true);
        
        const v2x = view.getFloat32(streamOffset + 12, true);
        const v2y = view.getFloat32(streamOffset + 16, true);
        const v2z = view.getFloat32(streamOffset + 20, true);
        
        const v3x = view.getFloat32(streamOffset + 24, true);
        const v3y = view.getFloat32(streamOffset + 28, true);
        const v3z = view.getFloat32(streamOffset + 32, true);
        
        streamOffset += 36; // 3 Vertices à 12 bytes
        streamOffset += 2;  // Skip Attribute Byte Count
        
        // Signed Volume Method
        totalVolume += (v1x * v2y * v3z + v2x * v3y * v1z + v3x * v1y * v2z -
                       v3x * v2y * v1z - v2x * v1y * v3z - v1x * v3y * v2z) / 6.0;
      }
      
      const geometricVolume = Math.abs(totalVolume);
      
      // Berechne Surface Area durch Sampling
      let sampledSurfaceArea = 0;
      const surfaceSampleSize = Math.min(5000, triangleCount);
      const surfaceSampleStep = Math.floor(triangleCount / surfaceSampleSize);
      let surfaceOffset = 84;
      
      for (let i = 0; i < surfaceSampleSize; i++) {
        surfaceOffset = 84 + (i * surfaceSampleStep * 50);
        if (surfaceOffset + 50 > arrayBuffer.byteLength) break;
        
        surfaceOffset += 12; // Skip Normal
        
        const v1x = view.getFloat32(surfaceOffset, true);
        const v1y = view.getFloat32(surfaceOffset + 4, true);
        const v1z = view.getFloat32(surfaceOffset + 8, true);
        const v2x = view.getFloat32(surfaceOffset + 12, true);
        const v2y = view.getFloat32(surfaceOffset + 16, true);
        const v2z = view.getFloat32(surfaceOffset + 20, true);
        const v3x = view.getFloat32(surfaceOffset + 24, true);
        const v3y = view.getFloat32(surfaceOffset + 28, true);
        const v3z = view.getFloat32(surfaceOffset + 32, true);
        
        // Kreuzprodukt für Flächenberechnung
        const abx = v2x - v1x, aby = v2y - v1y, abz = v2z - v1z;
        const acx = v3x - v1x, acy = v3y - v1y, acz = v3z - v1z;
        const crossX = aby * acz - abz * acy;
        const crossY = abz * acx - abx * acz;
        const crossZ = abx * acy - aby * acx;
        const area = Math.sqrt(crossX ** 2 + crossY ** 2 + crossZ ** 2) / 2;
        sampledSurfaceArea += area;
      }
      
      const estimatedSurfaceArea = sampledSurfaceArea * (triangleCount / surfaceSampleSize);
      
      // Berechne Komplexität basierend auf Surface-to-Volume Ratio
      const volumeCm3Large = geometricVolume / 1000;
      const surfaceAreaCm2Large = estimatedSurfaceArea / 100;
      const sphereEquivalentSVLarge = volumeCm3Large > 0 ? 4.84 * Math.pow(volumeCm3Large, -1/3) : 0;
      const actualSVLarge = volumeCm3Large > 0 ? surfaceAreaCm2Large / volumeCm3Large : 0;
      const svComplexityLarge = sphereEquivalentSVLarge > 0 ? actualSVLarge / sphereEquivalentSVLarge : 1;
      
      // Komplexitätslevel bestimmen
      let complexityLevelLarge: 'simple' | 'moderate' | 'complex' | 'very_complex' = 'moderate';
      if (svComplexityLarge > 4 || triangleCount > 100000) complexityLevelLarge = 'very_complex';
      else if (svComplexityLarge > 2.5 || triangleCount > 50000) complexityLevelLarge = 'complex';
      else if (triangleCount < 5000) complexityLevelLarge = 'simple';
      
      // Infill basierend auf Komplexität
      let infillPercentageLarge = 0.20;
      let gramsPerHourLarge = 60;
      switch (complexityLevelLarge) {
        case 'very_complex':
          infillPercentageLarge = 0.75;
          gramsPerHourLarge = 20;
          break;
        case 'complex':
          infillPercentageLarge = 0.55;
          gramsPerHourLarge = 30;
          break;
        case 'moderate':
          infillPercentageLarge = 0.35;
          gramsPerHourLarge = 45;
          break;
      }
      
      // Material berechnen
      const infillVolumeLarge = volumeCm3Large * infillPercentageLarge;
      const shellVolumeLarge = volumeCm3Large * 0.15;
      const materialGramsLarge = (infillVolumeLarge + shellVolumeLarge) * 1.24;
      const printTimeHoursLarge = materialGramsLarge / gramsPerHourLarge;
      
      console.log(`Large file analysis: SV=${svComplexityLarge.toFixed(2)}, Level=${complexityLevelLarge}, Material=${materialGramsLarge.toFixed(0)}g, Time=${printTimeHoursLarge.toFixed(1)}h`);
      
      const analysis: STLAnalysis = {
        volume: geometricVolume, // Geometrisches Volumen für Anzeige
        surfaceArea: estimatedSurfaceArea,
        boundingBox: {
          min,
          max,
          dimensions,
        },
        overhangs: {
          count: Math.floor(triangleCount * 0.1),
          percentage: 10,
          severity: 'medium',
        },
        complexity: {
          triangleCount,
          score: svComplexityLarge > 3 ? 0.8 : svComplexityLarge > 2 ? 0.5 : 0.3,
          level: complexityLevelLarge,
        },
        estimates: {
          printTimeHours: Math.max(0.5, printTimeHoursLarge),
          materialGrams: Math.max(5, materialGramsLarge),
          supportMaterialGrams: materialGramsLarge * 0.15,
          layerCount: Math.ceil(dimensions.z / 0.2),
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
    
    // STL parsen (Auto-detect ASCII oder Binary Format)
    const triangles = parseSTL(arrayBuffer);
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
