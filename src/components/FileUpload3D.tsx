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

  const analyzeGeometry = (geometry: THREE.BufferGeometry): AnalysisResult[] => {
    const results: AnalysisResult[] = [];
    const position = geometry.attributes.position;
    const normal = geometry.attributes.normal;

    // Check 1: Overhang detection (>45° from vertical)
    let overhangCount = 0;
    const overhangThreshold = Math.cos(45 * Math.PI / 180); // 45 degrees

    for (let i = 0; i < normal.count; i += 3) {
      const nx = normal.getX(i);
      const ny = normal.getY(i);
      const nz = normal.getZ(i);
      
      // Check if normal points downward (negative Z)
      const dotProduct = nz; // Dot product with up vector (0,0,1)
      
      if (dotProduct < -overhangThreshold) {
        overhangCount++;
      }
    }

    const overhangPercentage = (overhangCount / (normal.count / 3)) * 100;
    
    if (overhangPercentage > 20) {
      results.push({
        type: "warning",
        message: "Kritische Überhänge erkannt",
        detail: `${overhangPercentage.toFixed(1)}% der Flächen haben Überhänge >45°. Support-Strukturen erforderlich.`
      });
    } else if (overhangPercentage > 5) {
      results.push({
        type: "info",
        message: "Moderate Überhänge vorhanden",
        detail: `${overhangPercentage.toFixed(1)}% der Flächen benötigen möglicherweise Support.`
      });
    }

    // Check 2: Small feature detection
    const boundingBox = geometry.boundingBox;
    if (boundingBox) {
      const size = new THREE.Vector3();
      boundingBox.getSize(size);
      const minDimension = Math.min(size.x, size.y, size.z);
      
      if (minDimension < 1) {
        results.push({
          type: "warning",
          message: "Sehr kleine Details erkannt",
          detail: `Minimale Dimension: ${minDimension.toFixed(2)}mm. Details unter 1mm können schwer zu drucken sein.`
        });
      }
    }

    // Check 3: Triangle count (complexity)
    const triangleCount = position.count / 3;
    if (triangleCount > 100000) {
      results.push({
        type: "info",
        message: "Sehr hochauflösendes Modell",
        detail: `${(triangleCount / 1000).toFixed(0)}k Dreiecke. Druckzeit könnte länger sein.`
      });
    }

    // Check 4: Non-manifold edges detection (simplified)
    // In a real implementation, this would be more sophisticated
    const edgeMap = new Map<string, number>();
    for (let i = 0; i < position.count; i += 3) {
      // Check each edge of the triangle
      for (let j = 0; j < 3; j++) {
        const i1 = i + j;
        const i2 = i + ((j + 1) % 3);
        
        const v1 = `${position.getX(i1).toFixed(3)},${position.getY(i1).toFixed(3)},${position.getZ(i1).toFixed(3)}`;
        const v2 = `${position.getX(i2).toFixed(3)},${position.getY(i2).toFixed(3)},${position.getZ(i2).toFixed(3)}`;
        
        const edgeKey = v1 < v2 ? `${v1}-${v2}` : `${v2}-${v1}`;
        edgeMap.set(edgeKey, (edgeMap.get(edgeKey) || 0) + 1);
      }
    }

    let nonManifoldEdges = 0;
    edgeMap.forEach(count => {
      if (count !== 2) nonManifoldEdges++;
    });

    if (nonManifoldEdges > position.count * 0.01) {
      results.push({
        type: "error",
        message: "Geometriefehler erkannt",
        detail: "Das Modell enthält nicht-geschlossene Kanten. Bitte reparieren Sie die Geometrie."
      });
    }

    // Success message if no issues
    if (results.length === 0) {
      results.push({
        type: "info",
        message: "✓ Modell druckbereit",
        detail: "Keine kritischen Probleme erkannt. Das Modell ist für den 3D-Druck geeignet."
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
          
          onDimensionsCalculated({
            geometry,
            fileName: file.name,
            length: Math.max(5, Math.min(350, length)),
            width: Math.max(5, Math.min(350, width)),
            height: Math.max(5, Math.min(350, height)),
            volume: volumeCm3,
            analysisResults: analysis
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
        {...({ webkitdirectory: "", directory: "" } as any)}
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
            Einzelne Datei, mehrere Dateien oder Ordner
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
