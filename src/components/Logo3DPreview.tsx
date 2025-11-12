import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';
import { Sparkles } from 'lucide-react';

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

  // ekdruck Logo - simplified version
  return (
    <group position={[0, 0.2, -2.85]}>
      {/* "ek" part - green/primary color */}
      <mesh castShadow position={[-scaleWidth * 0.5, 0, scaleDepth * 0.16]}>
        <boxGeometry args={[scaleWidth * 0.4, scaleHeight * 0.6, scaleDepth * 0.3]} />
        <meshStandardMaterial 
          color="#10b981"
          metalness={material === 'petg' ? 0.3 : 0.1}
          roughness={material === 'petg' ? 0.4 : 0.8}
        />
      </mesh>
      
      {/* "druck" part - dark gray/black */}
      <mesh castShadow position={[scaleWidth * 0.2, 0, scaleDepth * 0.16]}>
        <boxGeometry args={[scaleWidth * 0.8, scaleHeight * 0.6, scaleDepth * 0.3]} />
        <meshStandardMaterial 
          color={getMaterialColor(material)}
          metalness={material === 'petg' ? 0.3 : 0.1}
          roughness={material === 'petg' ? 0.4 : 0.8}
        />
      </mesh>
      
      {/* Additional depth layers for more 3D effect */}
      <mesh castShadow position={[-scaleWidth * 0.5, 0, scaleDepth * 0.01]}>
        <boxGeometry args={[scaleWidth * 0.4, scaleHeight * 0.6, scaleDepth * 0.05]} />
        <meshStandardMaterial 
          color="#10b981"
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
      {/* Back Wall - White with subtle texture */}
      <mesh position={[0, 0, -3]} receiveShadow>
        <planeGeometry args={[15, 8]} />
        <meshStandardMaterial 
          color="#fafafa" 
          roughness={0.95}
          metalness={0.05}
        />
      </mesh>
      
      {/* Floor - Realistic wood texture */}
      <mesh position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[15, 10]} />
        <meshStandardMaterial 
          color="#6B5840"
          roughness={0.85}
          metalness={0.1}
        />
      </mesh>
      
      {/* Wood grain effect on floor - darker stripes */}
      <mesh position={[0, -3.98, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[15, 10]} />
        <meshStandardMaterial 
          color="#5a4a35"
          transparent
          opacity={0.2}
          roughness={0.9}
        />
      </mesh>
      
      {/* Ceiling - Light gray */}
      <mesh position={[0, 4, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[15, 10]} />
        <meshStandardMaterial color="#e8e8e8" roughness={0.9} />
      </mesh>
      
      {/* Left Wall */}
      <mesh position={[-7.5, 0, 2]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[10, 8]} />
        <meshStandardMaterial color="#f5f5f5" roughness={0.9} />
      </mesh>
      
      {/* Acoustic Panels - Wood texture on left wall */}
      {/* Panel 1 */}
      <mesh position={[-7.45, 1, -1]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[1.5, 1.5, 0.15]} />
        <meshStandardMaterial 
          color="#8B6F47"
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>
      
      {/* Panel 2 */}
      <mesh position={[-7.45, 1, 1]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[1.5, 1.5, 0.15]} />
        <meshStandardMaterial 
          color="#8B6F47"
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>
      
      {/* Panel 3 */}
      <mesh position={[-7.45, -1.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[2, 1.5, 0.15]} />
        <meshStandardMaterial 
          color="#8B6F47"
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>
      
      {/* Right Wall with acoustic panels */}
      <mesh position={[7.5, 0, 2]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[10, 8]} />
        <meshStandardMaterial color="#f5f5f5" roughness={0.9} />
      </mesh>
      
      {/* Acoustic Panel on right wall */}
      <mesh position={[7.45, 1, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[2, 1.5, 0.15]} />
        <meshStandardMaterial 
          color="#8B6F47"
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
};

export const Logo3DPreview = ({ text, width, height, depth, material, font }: Logo3DPreviewProps) => {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border relative">
      <Canvas
        camera={{ position: [0, 0.8, 5.5], fov: 50 }}
        shadows
        style={{ background: 'linear-gradient(180deg, #2a2a2a, #1a1a1a)' }}
      >
        <Suspense fallback={null}>
          {/* Ambient light for overall illumination */}
          <ambientLight intensity={0.5} />
          
          {/* Main directional light from top-right (simulating window light) */}
          <directionalLight 
            position={[8, 6, 4]} 
            intensity={1.5} 
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          
          {/* Ceiling spotlight directly above logo */}
          <spotLight 
            position={[0, 5, -2.5]} 
            angle={0.5} 
            penumbra={0.5} 
            intensity={1.2}
            castShadow
            target-position={[0, 0, -2.8]}
          />
          
          {/* Accent light from left side */}
          <pointLight position={[-6, 2, -1]} intensity={0.4} color="#10b981" />
          
          {/* Wall washer light on acoustic panels */}
          <spotLight 
            position={[-5, 3, 0]} 
            angle={0.6} 
            penumbra={0.8} 
            intensity={0.5}
            color="#ffa500"
          />
          
          {/* Right side fill light */}
          <pointLight position={[5, 2, 2]} intensity={0.3} color="#ffffff" />
          
          {/* Subtle backlight for depth */}
          <pointLight position={[0, 1, -4]} intensity={0.2} color="#60a5fa" />
          
          <OfficeRoom />
          <Logo3D width={width} height={height} depth={depth} material={material} />
          
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            minDistance={3}
            maxDistance={10}
            maxPolarAngle={Math.PI / 2.2}
            minPolarAngle={Math.PI / 4}
            target={[0, 0, -2.5]}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-3 left-3 text-xs text-white/80 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
        💡 Ziehen zum Drehen • Scrollen zum Zoomen
      </div>
      <div className="absolute top-3 right-3 text-xs text-white/60 bg-black/30 px-2.5 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
        <Sparkles className="w-3 h-3" />
        ekdruck Logo
      </div>
    </div>
  );
};
