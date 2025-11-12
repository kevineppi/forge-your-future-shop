import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

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
    <group position={[0, 0, -2.8]}>
      {/* Main logo body */}
      <mesh castShadow>
        <boxGeometry args={[scaleWidth * 2, scaleHeight * 0.6, scaleDepth * 0.3]} />
        <meshStandardMaterial 
          color={getMaterialColor(material)} 
          metalness={material === 'petg' ? 0.3 : 0.1}
          roughness={material === 'petg' ? 0.4 : 0.8}
        />
      </mesh>
      {/* Letter shapes */}
      <mesh castShadow position={[-scaleWidth * 0.5, 0, scaleDepth * 0.16]}>
        <boxGeometry args={[scaleWidth * 0.3, scaleHeight * 0.5, scaleDepth * 0.3]} />
        <meshStandardMaterial 
          color={getMaterialColor(material)}
          metalness={material === 'petg' ? 0.3 : 0.1}
          roughness={material === 'petg' ? 0.4 : 0.8}
        />
      </mesh>
      <mesh castShadow position={[0, 0, scaleDepth * 0.16]}>
        <boxGeometry args={[scaleWidth * 0.25, scaleHeight * 0.5, scaleDepth * 0.3]} />
        <meshStandardMaterial 
          color={getMaterialColor(material)}
          metalness={material === 'petg' ? 0.3 : 0.1}
          roughness={material === 'petg' ? 0.4 : 0.8}
        />
      </mesh>
      <mesh castShadow position={[scaleWidth * 0.5, 0, scaleDepth * 0.16]}>
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

const OfficeRoom = () => {
  return (
    <group>
      {/* Back Wall - White */}
      <mesh position={[0, 0, -3]} receiveShadow>
        <planeGeometry args={[15, 8]} />
        <meshStandardMaterial color="#f5f5f5" roughness={0.9} />
      </mesh>
      
      {/* Floor - Wood texture */}
      <mesh position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[15, 10]} />
        <meshStandardMaterial color="#8B6F47" roughness={0.8} />
      </mesh>
      
      {/* Ceiling */}
      <mesh position={[0, 4, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[15, 10]} />
        <meshStandardMaterial color="#e0e0e0" roughness={0.9} />
      </mesh>
      
      {/* Left Wall */}
      <mesh position={[-7.5, 0, 2]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[10, 8]} />
        <meshStandardMaterial color="#e8e8e8" roughness={0.9} />
      </mesh>
      
      {/* Right Wall */}
      <mesh position={[7.5, 0, 2]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[10, 8]} />
        <meshStandardMaterial color="#e8e8e8" roughness={0.9} />
      </mesh>
    </group>
  );
};

export const Logo3DPreview = ({ text, width, height, depth, material, font }: Logo3DPreviewProps) => {
  return (
    <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border relative">
      <Canvas
        camera={{ position: [0, 0.5, 5], fov: 50 }}
        shadows
        style={{ background: 'linear-gradient(180deg, #1a1a1a, #2d2d2d)' }}
      >
        <Suspense fallback={null}>
          {/* Ambient light for overall illumination */}
          <ambientLight intensity={0.4} />
          
          {/* Main directional light from top-left (simulating office lighting) */}
          <directionalLight 
            position={[5, 8, 5]} 
            intensity={1.2} 
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          
          {/* Spotlight from ceiling */}
          <spotLight 
            position={[0, 6, -1]} 
            angle={0.4} 
            penumbra={0.5} 
            intensity={0.8}
            castShadow
          />
          
          {/* Fill light from right */}
          <pointLight position={[5, 2, 3]} intensity={0.3} />
          
          {/* Subtle backlight */}
          <pointLight position={[-3, 1, -4]} intensity={0.2} color="#ffffff" />
          
          <OfficeRoom />
          <Logo3D width={width} height={height} depth={depth} material={material} />
          
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            minDistance={3}
            maxDistance={10}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
            target={[0, 0, -2.5]}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-4 left-4 text-xs text-white/80 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
        💡 Ziehen zum Drehen • Scrollen zum Zoomen
      </div>
      <div className="absolute top-4 left-4 text-xs text-white/60 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
        Live-Vorschau
      </div>
    </div>
  );
};
