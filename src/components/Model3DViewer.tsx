import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Box, RotateCw, ArrowLeft, Package, Settings, Calculator } from "lucide-react";
import * as THREE from "three";

interface Model3DViewerProps {
  geometry: THREE.BufferGeometry | null;
  fileName: string;
  onBack?: () => void;
  currentStep?: number;
  onNavigate?: (step: number) => void;
  scale?: number;
  onScaleChange?: (scale: number) => void;
  estimatedPrintTimeHours?: number | null;
  color?: string;
  pricing?: {
    perPiece: number;
    total: number;
    materialWeight: number;
  };
}

const Model = ({ geometry, scale, color }: { geometry: THREE.BufferGeometry; scale: number; color: string }) => {
  return (
    <mesh geometry={geometry} scale={scale}>
      <meshStandardMaterial color={color} metalness={0.5} roughness={0.5} />
    </mesh>
  );
};

export const Model3DViewer = ({ geometry, fileName, onBack, currentStep, onNavigate, scale: externalScale, onScaleChange, estimatedPrintTimeHours, color, pricing }: Model3DViewerProps) => {
  const [internalScale, setInternalScale] = useState(1);
  const [resetTrigger, setResetTrigger] = useState(0);
  
  // Use external scale if provided, otherwise internal
  const scale = externalScale !== undefined ? externalScale : internalScale;
  const setScale = onScaleChange || setInternalScale;
  
  // Use provided color or default to indigo
  const modelColor = color || "#4f46e5";

  // Calculate scaled print time based on volume change
  const scaledPrintTime = estimatedPrintTimeHours ? estimatedPrintTimeHours * Math.pow(scale, 3) : null;

  if (!geometry) {
    return (
      <Card className="gradient-card border-0 h-full">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Box className="w-5 h-5 text-primary" />
              3D-Vorschau
            </div>
            {onBack && (
              <Button variant="outline" size="sm" onClick={onBack}>
                <ArrowLeft className="w-4 h-4 mr-1" />
                Zurück
              </Button>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center h-96 text-center">
            <Box className="w-16 h-16 text-muted-foreground mb-4 opacity-50" />
            <p className="text-muted-foreground">
              Laden Sie eine STL-Datei hoch,<br />um die 3D-Vorschau zu sehen
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="gradient-card border-0 h-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Box className="w-5 h-5 text-primary" />
            3D-Vorschau
          </div>
          {onBack && (
            <Button variant="outline" size="sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4 mr-1" />
              Zurück
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="w-full h-96 bg-background rounded-lg overflow-hidden border border-border">
          <Canvas key={resetTrigger} camera={{ position: [0, 0, 100], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Stage environment="city" intensity={0.6}>
              <Model geometry={geometry} scale={scale} color={modelColor} />
            </Stage>
            <OrbitControls 
              enableZoom={true}
              enablePan={true}
              enableRotate={true}
            />
          </Canvas>
        </div>
      </CardContent>
    </Card>
  );
};
