import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Upload } from "lucide-react";
import { toast } from "sonner";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

interface AnalysisResult {
  type: "error" | "warning" | "info";
  message: string;
  detail?: string;
}

interface FileUpload3DProps {
  onDimensionsCalculated: (fileData: {
    geometry: THREE.BufferGeometry;
    fileName: string;
    length: number;
    width: number;
    height: number;
    volume: number;
    analysisResults: AnalysisResult[];
    estimatedPrintTimeHours?: number;
  }) => void;
}

const Model = ({ geometry }: { geometry: THREE.BufferGeometry }) => {
  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color="#4f46e5" metalness={0.5} roughness={0.5} />
    </mesh>
  );
};

export const FileUpload3D = ({ 
  onDimensionsCalculated
}: FileUpload3DProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const calculateVolume = (geometry: THREE.BufferGeometry): number => {
    const position = geometry.attributes.position;
    let volume = 0;

    // Calculate volume using divergence theorem
    for (let i = 0; i < position.count; i += 3) {
      const v1 = new THREE.Vector3(
        position.getX(i),
        position.getY(i),
        position.getZ(i)
      );
      const v2 = new THREE.Vector3(
        position.getX(i + 1),
        position.getY(i + 1),
        position.getZ(i + 1)
      );
      const v3 = new THREE.Vector3(
        position.getX(i + 2),
        position.getY(i + 2),
        position.getZ(i + 2)
      );

      // Calculate signed volume of tetrahedron formed by origin and triangle
      volume += v1.dot(v2.cross(v3)) / 6;
    }

    return Math.abs(volume);
  };

  // Calculate estimated print time using Bambu Lab Standard 0.20mm PLA profile
  const calculateEstimatedPrintTime = (
    length: number,
    width: number,
    height: number,
    volume: number
  ): number => {
    // Bambu Lab Standard Profile Settings
    const layerHeight = 0.2; // mm
    const lineWidth = 0.42; // mm
    const nozzleDiameter = 0.4; // mm
    
    // Speeds (mm/s) from Bambu profile
    const outerWallSpeed = 200;
    const innerWallSpeed = 300;
    const infillSpeed = 270;
    const solidInfillSpeed = 250;
    const topSurfaceSpeed = 200;
    const travelSpeed = 300;
    const firstLayerSpeed = 50; // conservative for first layer
    
    // Material settings
    const maxVolumetricSpeed = 21; // mm³/s for Bambu PLA Basic
    const infillPercent = 20; // %
    
    // Wall settings
    const wallCount = 3;
    const wallThickness = wallCount * lineWidth; // ~1.26mm total
    
    // Calculate number of layers
    const numLayers = Math.ceil(height / layerHeight);
    
    // Estimate surface area per layer (assuming roughly rectangular)
    const avgPerimeter = 2 * (length + width); // mm
    const layerArea = length * width; // mm²
    
    // Calculate wall extrusion per layer
    // Outer wall: 1 perimeter at outerWallSpeed
    // Inner walls: 2 perimeters at innerWallSpeed
    const outerWallLength = avgPerimeter;
    const innerWallLength = avgPerimeter * 2;
    
    // Calculate infill area (layer area minus wall area)
    const wallArea = avgPerimeter * wallThickness;
    const infillArea = Math.max(0, layerArea - wallArea) * (infillPercent / 100);
    
    // Estimate infill line length (gyroid pattern, roughly 1.5x the area coverage)
    const infillLineLength = (infillArea / lineWidth) * 1.5;
    
    // Top/bottom layers (5 top + 4 bottom)
    const topBottomLayers = 5 + 4;
    const solidLayerArea = layerArea * topBottomLayers;
    const solidInfillLength = solidLayerArea / lineWidth;
    
    // Calculate extrusion volume per feature
    const crossSectionArea = layerHeight * lineWidth; // mm²
    
    // Time calculations for typical layers
    const outerWallTime = (outerWallLength / outerWallSpeed) * (numLayers - topBottomLayers);
    const innerWallTime = (innerWallLength / innerWallSpeed) * (numLayers - topBottomLayers);
    const infillTime = (infillLineLength / infillSpeed) * (numLayers - topBottomLayers);
    
    // Time for solid top/bottom layers
    const solidTopBottomTime = (solidInfillLength / solidInfillSpeed);
    
    // First layer is slower
    const firstLayerTime = (outerWallLength + innerWallLength + infillLineLength) / firstLayerSpeed;
    
    // Travel time (estimated as 20% of print time)
    const printTimeSeconds = outerWallTime + innerWallTime + infillTime + solidTopBottomTime + firstLayerTime;
    const travelTimeSeconds = printTimeSeconds * 0.2;
    
    // Check volumetric speed limit
    // If flow rate exceeds max volumetric speed, scale up time
    const avgFlowRate = (volume / printTimeSeconds) / 60; // mm³/s
    let volumetricSpeedFactor = 1.0;
    if (avgFlowRate > maxVolumetricSpeed) {
      volumetricSpeedFactor = avgFlowRate / maxVolumetricSpeed;
    }
    
    // Total time with overhead
    const totalTimeSeconds = (printTimeSeconds + travelTimeSeconds) * volumetricSpeedFactor;
    
    // Add 15% overhead for acceleration, deceleration, retractions, cooling
    const totalWithOverhead = totalTimeSeconds * 1.15;
    
    // Convert to hours
    const hours = totalWithOverhead / 3600;
    
    // Return with 0.1 hour precision, minimum 0.5h
    return Math.max(0.5, Math.round(hours * 10) / 10);
  };

  const analyzeGeometry = (geometry: THREE.BufferGeometry): AnalysisResult[] => {
    const results: AnalysisResult[] = [];
    const positions = geometry.attributes.position;
    
    if (!positions) return results;

    // Check triangle count
    const triangleCount = positions.count / 3;
    if (triangleCount > 100000) {
      results.push({
        type: 'warning',
        message: 'Sehr hohe Anzahl an Dreiecken',
        detail: `${triangleCount.toLocaleString()} Dreiecke könnten die Verarbeitung verlangsamen.`
      });
    }

    // Check for potential overhangs (simplified check)
    let potentialOverhangs = 0;
    for (let i = 0; i < positions.count; i += 3) {
      const z1 = positions.getZ(i);
      const z2 = positions.getZ(i + 1);
      const z3 = positions.getZ(i + 2);
      
      // Simple overhang detection: if triangle is roughly horizontal and facing down
      const avgZ = (z1 + z2 + z3) / 3;
      if (avgZ > 0 && Math.abs(z1 - z2) < 1 && Math.abs(z2 - z3) < 1) {
        potentialOverhangs++;
      }
    }

    if (potentialOverhangs > triangleCount * 0.1) {
      results.push({
        type: 'info',
        message: 'Mögliche Überhänge erkannt',
        detail: 'Stützstrukturen könnten erforderlich sein.'
      });
    }

    // Check for very small details
    const vertices = [];
    for (let i = 0; i < positions.count; i++) {
      vertices.push(new THREE.Vector3(
        positions.getX(i),
        positions.getY(i),
        positions.getZ(i)
      ));
    }

    let tinyDetails = 0;
    for (let i = 0; i < vertices.length - 1; i++) {
      const distance = vertices[i].distanceTo(vertices[i + 1]);
      if (distance < 0.5) {
        tinyDetails++;
      }
    }

    if (tinyDetails > vertices.length * 0.05) {
      results.push({
        type: 'warning',
        message: 'Sehr feine Details vorhanden',
        detail: 'Details unter 0.5mm könnten schwer zu drucken sein.'
      });
    }

    // Check for non-manifold edges (simplified)
    const edges = new Map<string, number>();
    for (let i = 0; i < positions.count; i += 3) {
      const v1 = `${positions.getX(i)},${positions.getY(i)},${positions.getZ(i)}`;
      const v2 = `${positions.getX(i + 1)},${positions.getY(i + 1)},${positions.getZ(i + 1)}`;
      const v3 = `${positions.getX(i + 2)},${positions.getY(i + 2)},${positions.getZ(i + 2)}`;
      
      [
        [v1, v2].sort().join('-'),
        [v2, v3].sort().join('-'),
        [v3, v1].sort().join('-')
      ].forEach(edge => {
        edges.set(edge, (edges.get(edge) || 0) + 1);
      });
    }

    const nonManifoldEdges = Array.from(edges.values()).filter(count => count !== 2).length;
    if (nonManifoldEdges > 0) {
      results.push({
        type: 'error',
        message: 'Nicht-manifolde Kanten gefunden',
        detail: `${nonManifoldEdges} Kanten könnten zu Druckfehlern führen. Modell reparieren empfohlen.`
      });
    }

    return results;
  };

  const processFile = async (file: File) => {
    const fileExtension = file.name.split(".").pop()?.toLowerCase();
    if (fileExtension !== "stl" && fileExtension !== "stp" && fileExtension !== "step") {
      toast.error(`${file.name}: Ungültiges Format`);
      return;
    }

    try {
      const arrayBuffer = await file.arrayBuffer();

      if (fileExtension === "stl") {
        const loader = new STLLoader();
        const geometry = loader.parse(arrayBuffer);
        
        // Compute bounding box and other properties
        geometry.computeBoundingBox();
        geometry.computeVertexNormals();
        
        // Center the geometry
        geometry.center();

        const boundingBox = geometry.boundingBox;
        if (boundingBox) {
          const size = new THREE.Vector3();
          boundingBox.getSize(size);
          
          // Convert from Three.js units to mm (assuming the model is in mm)
          const length = Math.round(Math.abs(size.x));
          const width = Math.round(Math.abs(size.y));
          const height = Math.round(Math.abs(size.z));
          
          // Calculate volume in cm³
          const volumeCm3 = calculateVolume(geometry) / 1000; // Convert mm³ to cm³
          
          // Analyze geometry for printability issues
          const analysis = analyzeGeometry(geometry);
          
          // Calculate estimated print time
          const estimatedTime = calculateEstimatedPrintTime(length, width, height, volumeCm3 * 1000);
          
          onDimensionsCalculated({
            geometry,
            fileName: file.name,
            length: Math.max(5, Math.min(350, length)),
            width: Math.max(5, Math.min(350, width)),
            height: Math.max(5, Math.min(350, height)),
            volume: volumeCm3,
            analysisResults: analysis,
            estimatedPrintTimeHours: estimatedTime
          });

          toast.success(`${file.name}: ${length}×${width}×${height}mm, ${volumeCm3.toFixed(1)}cm³`);
        }
      } else {
        toast.info(`${file.name}: STP/STEP Dateien werden derzeit verarbeitet. Bitte verwenden Sie vorerst STL-Dateien.`);
      }
    } catch (error) {
      console.error("Error loading file:", error);
      toast.error(`Fehler beim Laden: ${file.name}`);
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsLoading(true);

    for (let i = 0; i < files.length; i++) {
      await processFile(files[i]);
    }

    setIsLoading(false);
    
    // Reset input
    if (event.target) {
      event.target.value = "";
    }
  };


  return (
    <div className="space-y-4">
      <input
        ref={fileInputRef}
        type="file"
        accept=".stl,.stp,.step"
        onChange={handleFileChange}
        className="hidden"
        id="file-upload-3d"
        multiple
      />

      <label
        htmlFor="file-upload-3d"
        className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-border rounded-lg cursor-pointer bg-muted/30 hover:bg-muted/50 transition-colors"
      >
        <div className="flex flex-col items-center justify-center py-8">
          <Upload className="w-12 h-12 mb-4 text-muted-foreground" />
          <p className="mb-2 text-base text-foreground font-medium">
            Dateien hochladen
          </p>
          <p className="text-sm text-muted-foreground text-center px-4">
            STL oder STP/STEP<br />
            Einzelne oder mehrere Dateien auswählen
          </p>
        </div>
      </label>

      {isLoading && (
        <div className="flex items-center justify-center p-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
    </div>
  );
};
