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

  const baseScale = width / 50;
  const logoDepth = depth / 10;
  const logoHeight = height / 10;

  // ekdruck Logo - proper geometric version based on actual logo
  return (
    <group position={[0, 0, -2.8]}>
      {/* "E" - Left part with horizontal bars */}
      <group position={[-baseScale * 1.2, 0, 0]}>
        {/* Top horizontal bar */}
        <mesh castShadow position={[0, logoHeight * 0.35, 0]}>
          <boxGeometry args={[baseScale * 0.8, logoHeight * 0.15, logoDepth]} />
          <meshStandardMaterial 
            color="#000000"
            metalness={material === 'petg' ? 0.3 : 0.1}
            roughness={material === 'petg' ? 0.4 : 0.7}
          />
        </mesh>
        
        {/* Middle horizontal bar */}
        <mesh castShadow position={[0, 0, 0]}>
          <boxGeometry args={[baseScale * 0.8, logoHeight * 0.15, logoDepth]} />
          <meshStandardMaterial 
            color="#000000"
            metalness={material === 'petg' ? 0.3 : 0.1}
            roughness={material === 'petg' ? 0.4 : 0.7}
          />
        </mesh>
        
        {/* Bottom horizontal bar */}
        <mesh castShadow position={[0, -logoHeight * 0.35, 0]}>
          <boxGeometry args={[baseScale * 0.8, logoHeight * 0.15, logoDepth]} />
          <meshStandardMaterial 
            color="#000000"
            metalness={material === 'petg' ? 0.3 : 0.1}
            roughness={material === 'petg' ? 0.4 : 0.7}
          />
        </mesh>
        
        {/* Left vertical bar */}
        <mesh castShadow position={[-baseScale * 0.35, 0, 0]}>
          <boxGeometry args={[baseScale * 0.1, logoHeight, logoDepth]} />
          <meshStandardMaterial 
            color="#000000"
            metalness={material === 'petg' ? 0.3 : 0.1}
            roughness={material === 'petg' ? 0.4 : 0.7}
          />
        </mesh>
      </group>
      
      {/* "K" - Right part with diagonal */}
      <group position={[baseScale * 0.8, 0, 0]}>
        {/* Vertical bar */}
        <mesh castShadow position={[-baseScale * 0.3, 0, 0]}>
          <boxGeometry args={[baseScale * 0.1, logoHeight, logoDepth]} />
          <meshStandardMaterial 
            color="#000000"
            metalness={material === 'petg' ? 0.3 : 0.1}
            roughness={material === 'petg' ? 0.4 : 0.7}
          />
        </mesh>
        
        {/* Upper diagonal */}
        <mesh castShadow position={[baseScale * 0.15, logoHeight * 0.25, 0]} rotation={[0, 0, -0.6]}>
          <boxGeometry args={[baseScale * 0.12, logoHeight * 0.6, logoDepth]} />
          <meshStandardMaterial 
            color="#000000"
            metalness={material === 'petg' ? 0.3 : 0.1}
            roughness={material === 'petg' ? 0.4 : 0.7}
          />
        </mesh>
        
        {/* Lower diagonal */}
        <mesh castShadow position={[baseScale * 0.15, -logoHeight * 0.25, 0]} rotation={[0, 0, 0.6]}>
          <boxGeometry args={[baseScale * 0.12, logoHeight * 0.6, logoDepth]} />
          <meshStandardMaterial 
            color="#000000"
            metalness={material === 'petg' ? 0.3 : 0.1}
            roughness={material === 'petg' ? 0.4 : 0.7}
          />
        </mesh>
      </group>
      
      {/* "DRUCK" text below - simplified as bars */}
      <group position={[0, -logoHeight * 0.9, 0]}>
        <mesh castShadow>
          <boxGeometry args={[baseScale * 2.5, logoHeight * 0.25, logoDepth * 0.8]} />
          <meshStandardMaterial 
            color="#000000"
            metalness={material === 'petg' ? 0.3 : 0.1}
            roughness={material === 'petg' ? 0.4 : 0.7}
          />
        </mesh>
      </group>
    </group>
  );
};

const OfficeRoom = () => {
  return (
    <group>
      {/* Back Wall - Clean white */}
      <mesh position={[0, 0, -3]} receiveShadow>
        <planeGeometry args={[12, 7]} />
        <meshStandardMaterial 
          color="#ffffff" 
          roughness={0.9}
          metalness={0.0}
        />
      </mesh>
      
      {/* Floor - Subtle light wood */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[12, 10]} />
        <meshStandardMaterial 
          color="#D4C4B0"
          roughness={0.8}
          metalness={0.0}
        />
      </mesh>
      
      {/* Ceiling - White */}
      <mesh position={[0, 5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 10]} />
        <meshStandardMaterial color="#f5f5f5" roughness={0.9} />
      </mesh>
      
      {/* Left Wall */}
      <mesh position={[-6, 1.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[10, 7]} />
        <meshStandardMaterial color="#fafafa" roughness={0.9} />
      </mesh>
      
      {/* Right Wall */}
      <mesh position={[6, 1.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[10, 7]} />
        <meshStandardMaterial color="#fafafa" roughness={0.9} />
      </mesh>
      
      {/* Acoustic Panels - Realistic wooden slat design on left wall */}
      {/* Panel Row 1 */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={`left-top-${i}`} position={[-5.95, 2.5, -1.5 + i * 0.4]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[0.3, 0.8, 0.05]} />
          <meshStandardMaterial 
            color="#A0826D"
            roughness={0.6}
            metalness={0.0}
          />
        </mesh>
      ))}
      
      {/* Panel Row 2 */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={`left-mid-${i}`} position={[-5.95, 1, -1.5 + i * 0.4]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[0.3, 0.8, 0.05]} />
          <meshStandardMaterial 
            color="#A0826D"
            roughness={0.6}
            metalness={0.0}
          />
        </mesh>
      ))}
      
      {/* Panel Row 3 */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={`left-bot-${i}`} position={[-5.95, -0.5, -1.5 + i * 0.4]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[0.3, 0.8, 0.05]} />
          <meshStandardMaterial 
            color="#A0826D"
            roughness={0.6}
            metalness={0.0}
          />
        </mesh>
      ))}
      
      {/* Acoustic Panels on right wall */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={`right-${i}`} position={[5.95, 2, 0.5 + i * 0.4]} rotation={[0, -Math.PI / 2, 0]}>
          <boxGeometry args={[0.3, 1, 0.05]} />
          <meshStandardMaterial 
            color="#A0826D"
            roughness={0.6}
            metalness={0.0}
          />
        </mesh>
      ))}
    </group>
  );
};

export const Logo3DPreview = ({ text, width, height, depth, material, font }: Logo3DPreviewProps) => {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border relative">
      <Canvas
        camera={{ position: [0, 0.5, 4], fov: 55 }}
        shadows
        style={{ background: 'linear-gradient(180deg, #e8e8e8, #d0d0d0)' }}
      >
        <Suspense fallback={null}>
          {/* Ambient light for base illumination */}
          <ambientLight intensity={0.6} />
          
          {/* Main key light from front-right (natural office lighting) */}
          <directionalLight 
            position={[5, 4, 3]} 
            intensity={1.8} 
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={30}
            shadow-camera-left={-8}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-bottom={-8}
          />
          
          {/* Spotlight on logo from ceiling */}
          <spotLight 
            position={[0, 4, -2]} 
            angle={0.4} 
            penumbra={0.5} 
            intensity={1.5}
            castShadow
            target-position={[0, 0, -2.8]}
          />
          
          {/* Soft fill light from left */}
          <pointLight position={[-4, 2, 0]} intensity={0.5} color="#ffffff" />
          
          {/* Accent light on acoustic panels */}
          <spotLight 
            position={[-4, 3, -1]} 
            angle={0.5} 
            penumbra={0.7} 
            intensity={0.4}
            color="#ffd1a3"
          />
          
          {/* Right side fill */}
          <pointLight position={[4, 2, 1]} intensity={0.4} color="#ffffff" />
          
          {/* Backlight for depth */}
          <pointLight position={[0, 1.5, -3.5]} intensity={0.3} color="#e0e0e0" />
          
          <OfficeRoom />
          <Logo3D width={width} height={height} depth={depth} material={material} />
          
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            minDistance={2.5}
            maxDistance={8}
            maxPolarAngle={Math.PI / 2.1}
            minPolarAngle={Math.PI / 6}
            target={[0, 0, -2.8]}
            enableDamping
            dampingFactor={0.08}
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
