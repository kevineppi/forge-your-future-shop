import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

interface Logo3DPreviewProps {
  text: string;
  width: number;
  height: number;
  depth: number;
  material: string;
  font: string;
}

const Logo3D = ({ width, height, depth, material }: { width: number; height: number; depth: number; material: string }) => {
  const getMaterialColor = (mat: string) => {
    switch (mat) {
      case 'pla': return '#1a1a1a';
      case 'petg': return '#2a2a2a';
      case 'abs': return '#3a3a3a';
      case 'wood': return '#8B4513';
      default: return '#1a1a1a';
    }
  };

  const scaleWidth = width / 100;
  const scaleHeight = height / 20;
  const scaleDepth = depth / 3;

  return (
    <group>
      {/* Main logo body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[scaleWidth * 2, scaleHeight * 0.6, scaleDepth * 0.3]} />
        <meshStandardMaterial 
          color={getMaterialColor(material)} 
          metalness={material === 'petg' ? 0.3 : 0.1}
          roughness={material === 'petg' ? 0.4 : 0.8}
        />
      </mesh>
      {/* Letter shapes representation */}
      <mesh position={[-scaleWidth * 0.5, 0, scaleDepth * 0.16]}>
        <boxGeometry args={[scaleWidth * 0.3, scaleHeight * 0.5, scaleDepth * 0.3]} />
        <meshStandardMaterial 
          color={getMaterialColor(material)}
          metalness={material === 'petg' ? 0.3 : 0.1}
          roughness={material === 'petg' ? 0.4 : 0.8}
        />
      </mesh>
      <mesh position={[0, 0, scaleDepth * 0.16]}>
        <boxGeometry args={[scaleWidth * 0.25, scaleHeight * 0.5, scaleDepth * 0.3]} />
        <meshStandardMaterial 
          color={getMaterialColor(material)}
          metalness={material === 'petg' ? 0.3 : 0.1}
          roughness={material === 'petg' ? 0.4 : 0.8}
        />
      </mesh>
      <mesh position={[scaleWidth * 0.5, 0, scaleDepth * 0.16]}>
        <boxGeometry args={[scaleWidth * 0.3, scaleHeight * 0.5, scaleDepth * 0.3]} />
        <meshStandardMaterial 
          color={getMaterialColor(material)}
          metalness={material === 'petg' ? 0.3 : 0.1}
          roughness={material === 'petg' ? 0.4 : 0.8}
        />
      </mesh>
    </group>
  );
};

export const Logo3DPreview = ({ text, width, height, depth, material, font }: Logo3DPreviewProps) => {
  return (
    <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-muted/50 to-background border relative">
      <Canvas
        camera={{ position: [0, 1, 6], fov: 50 }}
        style={{ background: 'linear-gradient(135deg, hsl(var(--muted) / 0.3), hsl(var(--background)))' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
          <directionalLight position={[-5, -5, -5]} intensity={0.3} />
          <pointLight position={[0, 5, 5]} intensity={0.5} />
          <spotLight position={[0, 10, 0]} intensity={0.3} angle={0.3} />
          
          <Logo3D width={width} height={height} depth={depth} material={material} />
          
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            minDistance={3}
            maxDistance={12}
            autoRotate
            autoRotateSpeed={1}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-4 left-4 text-xs text-muted-foreground bg-background/80 px-3 py-1 rounded-full backdrop-blur-sm">
        Drehen: Ziehen • Zoom: Scrollen
      </div>
    </div>
  );
};
