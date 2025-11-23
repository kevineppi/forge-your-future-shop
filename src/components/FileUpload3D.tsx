import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, X } from "lucide-react";
import { toast } from "sonner";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

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

export const FileUpload3D = ({ onDimensionsCalculated }: FileUpload3DProps) => {
  const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null);
  const [fileName, setFileName] = useState<string>("");
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
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Card className="gradient-card border-0 p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">3D Datei hochladen</h3>
          {fileName && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4 mr-1" />
              Zurücksetzen
            </Button>
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept=".stl,.stp,.step"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload-3d"
        />

        {!geometry ? (
          <label
            htmlFor="file-upload-3d"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-border rounded-lg cursor-pointer bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-12 h-12 mb-3 text-muted-foreground" />
              <p className="mb-2 text-sm text-foreground font-medium">
                Klicken zum Hochladen
              </p>
              <p className="text-xs text-muted-foreground">
                STL oder STP/STEP Dateien (max. 50MB)
              </p>
            </div>
          </label>
        ) : (
          <div className="w-full h-96 bg-background rounded-lg overflow-hidden border border-border">
            <Canvas camera={{ position: [0, 0, 100], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Stage environment="city" intensity={0.6}>
                <Model geometry={geometry} />
              </Stage>
              <OrbitControls 
                enableZoom={true}
                enablePan={true}
                enableRotate={true}
              />
            </Canvas>
          </div>
        )}

        {fileName && (
          <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg">
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">{fileName}</p>
              <p className="text-xs text-muted-foreground">
                Datei geladen - Maße wurden automatisch berechnet
              </p>
            </div>
          </div>
        )}

        {isLoading && (
          <div className="flex items-center justify-center p-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        )}
      </div>
    </Card>
  );
};
