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
}

const Model = ({ geometry, scale }: { geometry: THREE.BufferGeometry; scale: number }) => {
  return (
    <mesh geometry={geometry} scale={scale}>
      <meshStandardMaterial color="#4f46e5" metalness={0.5} roughness={0.5} />
    </mesh>
  );
};

export const Model3DViewer = ({ geometry, fileName, onBack, currentStep, onNavigate }: Model3DViewerProps) => {
  const [scale, setScale] = useState(1);
  const [resetTrigger, setResetTrigger] = useState(0);

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
              <Model geometry={geometry} scale={scale} />
            </Stage>
            <OrbitControls 
              enableZoom={true}
              enablePan={true}
              enableRotate={true}
            />
          </Canvas>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Skalierung: {(scale * 100).toFixed(0)}%</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setScale(1);
                setResetTrigger(prev => prev + 1);
              }}
            >
              <RotateCw className="w-4 h-4 mr-1" />
              Zurücksetzen
            </Button>
          </div>
          <Slider
            value={[scale]}
            onValueChange={(v) => setScale(v[0])}
            min={0.1}
            max={3}
            step={0.1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>10%</span>
            <span>300%</span>
          </div>
        </div>

        {fileName && (
          <div className="p-3 bg-muted/30 rounded-lg space-y-3">
            <p className="text-xs text-muted-foreground">
              <strong className="text-foreground">Datei:</strong> {fileName}
            </p>
            <p className="text-xs text-muted-foreground">
              💡 Ziehen zum Drehen • Scrollen zum Zoomen
            </p>
            
            {onNavigate && currentStep && (
              <div className="pt-2 border-t border-border/50">
                <p className="text-xs font-medium mb-2">Weiter zu:</p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      onNavigate(2);
                      onBack?.();
                    }}
                    disabled={currentStep === 2}
                    className="flex-1 gap-1.5"
                  >
                    <Package className="w-3.5 h-3.5" />
                    Material
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      onNavigate(3);
                      onBack?.();
                    }}
                    disabled={currentStep === 3}
                    className="flex-1 gap-1.5"
                  >
                    <Settings className="w-3.5 h-3.5" />
                    Details
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      onNavigate(4);
                      onBack?.();
                    }}
                    disabled={currentStep === 4}
                    className="flex-1 gap-1.5"
                  >
                    <Calculator className="w-3.5 h-3.5" />
                    Ergebnis
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
