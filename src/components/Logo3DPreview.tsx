import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D, Center } from '@react-three/drei';
import { Suspense } from 'react';

interface Logo3DPreviewProps {
  text: string;
  width: number;
  height: number;
  depth: number;
  material: string;
  font: string;
}

const Logo3D = ({ text, depth, material }: { text: string; depth: number; material: string }) => {
  const getMaterialColor = (mat: string) => {
    switch (mat) {
      case 'pla': return '#1a1a1a';
      case 'petg': return '#2a2a2a';
      case 'abs': return '#3a3a3a';
      case 'wood': return '#8B4513';
      default: return '#1a1a1a';
    }
  };

  return (
    <Center>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={1}
        height={depth * 0.1}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        {text || 'LOGO'}
        <meshStandardMaterial color={getMaterialColor(material)} />
      </Text3D>
    </Center>
  );
};

export const Logo3DPreview = ({ text, width, height, depth, material, font }: Logo3DPreviewProps) => {
  return (
    <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-muted/50 to-background border">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'linear-gradient(135deg, hsl(var(--muted) / 0.3), hsl(var(--background)))' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.3} />
          <pointLight position={[0, 0, 10]} intensity={0.5} />
          
          <Logo3D text={text} depth={depth} material={material} />
          
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            minDistance={3}
            maxDistance={15}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-4 left-4 text-xs text-muted-foreground bg-background/80 px-3 py-1 rounded-full">
        Drehen: Ziehen • Zoom: Scrollen
      </div>
    </div>
  );
};
