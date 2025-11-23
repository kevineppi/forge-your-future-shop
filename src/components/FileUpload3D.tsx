import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Upload, X, AlertTriangle, Info, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import { toast } from "sonner";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

interface AnalysisResult {
  type: "error" | "warning" | "info";
  message: string;
  detail?: string;
}

interface FileUpload3DProps {
  onDimensionsCalculated: (dimensions: {
    length: number;
    width: number;
    height: number;
    volume: number;
  }) => void;
  geometry: THREE.BufferGeometry | null;
  setGeometry: (geometry: THREE.BufferGeometry | null) => void;
  fileName: string;
  setFileName: (name: string) => void;
  analysisResults: AnalysisResult[];
  setAnalysisResults: (results: AnalysisResult[]) => void;
}

interface FileUpload3DProps {
  onDimensionsCalculated: (dimensions: {
    length: number;
    width: number;
    height: number;
    volume: number;
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
  onDimensionsCalculated, 
  geometry, 
  setGeometry, 
  fileName, 
  setFileName,
  analysisResults,
  setAnalysisResults 
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

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const fileExtension = file.name.split(".").pop()?.toLowerCase();
    if (fileExtension !== "stl" && fileExtension !== "stp" && fileExtension !== "step") {
      toast.error("Bitte laden Sie eine STL oder STP/STEP Datei hoch");
      return;
    }

    setIsLoading(true);
    setFileName(file.name);

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
          setAnalysisResults(analysis);
          
          setGeometry(geometry);
          
          onDimensionsCalculated({
            length: Math.max(5, Math.min(350, length)),
            width: Math.max(5, Math.min(350, width)),
            height: Math.max(5, Math.min(350, height)),
            volume: volumeCm3
          });

          toast.success(`Datei geladen: ${length}×${width}×${height}mm, ${volumeCm3.toFixed(1)}cm³`);
        }
      } else {
        // For STP/STEP files, we would need a different loader
        // For now, show a message that STP support is coming
        toast.info("STP/STEP Dateien werden derzeit verarbeitet. Bitte verwenden Sie vorerst STL-Dateien.");
      }
    } catch (error) {
      console.error("Error loading file:", error);
      toast.error("Fehler beim Laden der Datei");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setGeometry(null);
    setFileName("");
    setAnalysisResults([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
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
      <input
        ref={fileInputRef}
        type="file"
        accept=".stl,.stp,.step"
        onChange={handleFileChange}
        className="hidden"
        id="folder-upload-3d"
        {...({ webkitdirectory: "", directory: "" } as any)}
      />

      {!geometry ? (
        <div className="space-y-3">
          <label
            htmlFor="file-upload-3d"
            className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-border rounded-lg cursor-pointer bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-10 h-10 mb-3 text-muted-foreground" />
              <p className="mb-2 text-sm text-foreground font-medium">
                Dateien hochladen
              </p>
              <p className="text-xs text-muted-foreground">
                STL oder STP/STEP (mehrere möglich)
              </p>
            </div>
          </label>
          
          <label
            htmlFor="folder-upload-3d"
            className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-border rounded-lg cursor-pointer bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <div className="flex flex-col items-center justify-center py-4">
              <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
              <p className="text-sm text-foreground font-medium">
                Ordner hochladen
              </p>
            </div>
          </label>
        </div>
      ) : (
        <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg">
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">{fileName}</p>
            <p className="text-xs text-muted-foreground">
              Datei geladen
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      )}

      {analysisResults.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground">Analyse:</h4>
          {analysisResults.map((result, index) => (
            <div
              key={index}
              className={`flex gap-3 p-3 rounded-lg ${
                result.type === "error"
                  ? "bg-red-500/10 border border-red-500/20"
                  : result.type === "warning"
                  ? "bg-yellow-500/10 border border-yellow-500/20"
                  : "bg-blue-500/10 border border-blue-500/20"
              }`}
            >
              <div className="flex-shrink-0 mt-0.5">
                {result.type === "error" ? (
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                ) : result.type === "warning" ? (
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Info className="w-5 h-5 text-blue-500" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className={`text-sm font-medium ${
                    result.type === "error"
                      ? "text-red-600"
                      : result.type === "warning"
                      ? "text-yellow-600"
                      : "text-blue-600"
                  }`}
                >
                  {result.message}
                </p>
                {result.detail && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {result.detail}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {isLoading && (
        <div className="flex items-center justify-center p-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
    </div>
  );
};
