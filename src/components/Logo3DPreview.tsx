import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Text3D, Center, useTexture } from '@react-three/drei';
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

const Logo3D = ({ width, height, depth, material, text }: { width: number; height: number; depth: number; material: string; text: string }) => {
  const getMaterialProps = (mat: string) => {
    switch (mat) {
      case 'pla':
        return { color: '#1a1a1a', metalness: 0.1, roughness: 0.6 };
      case 'petg':
        return { color: '#2a2a2a', metalness: 0.4, roughness: 0.3 };
      case 'abs':
        return { color: '#3a3a3a', metalness: 0.2, roughness: 0.5 };
      case 'wood':
        return { color: '#8B4513', metalness: 0.0, roughness: 0.8 };
      default:
        return { color: '#1a1a1a', metalness: 0.1, roughness: 0.6 };
    }
  };

  const materialProps = getMaterialProps(material);
  const scaleSize = Math.min(width / 30, 0.8);
  const extrudeDepth = depth / 20;

  return (
    <Center position={[0, 0, -2.8]}>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={scaleSize}
        height={extrudeDepth}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.01}
        bevelSize={0.01}
        bevelOffset={0}
        bevelSegments={5}
        castShadow
        receiveShadow
      >
        {text || "ekdruck"}
        <meshStandardMaterial 
          {...materialProps}
          envMapIntensity={0.8}
        />
      </Text3D>
    </Center>
  );
};

const OfficeRoom = () => {
  return (
    <group>
      {/* Back Wall - Clean white with subtle roughness variation */}
      <mesh position={[0, 0, -3.1]} receiveShadow>
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial 
          color="#f8f8f8" 
          roughness={0.95}
          metalness={0.0}
          envMapIntensity={0.2}
        />
      </mesh>
      
      {/* Floor - Realistic light oak wood */}
      <mesh position={[0, -1.8, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial 
          color="#E5D5C5"
          roughness={0.75}
          metalness={0.0}
          envMapIntensity={0.1}
        />
      </mesh>
      
      {/* Subtle floor planks effect */}
      {[-2, -1, 0, 1, 2].map((x) => (
        <mesh key={`plank-${x}`} position={[x * 0.8, -1.79, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.75, 10]} />
          <meshStandardMaterial 
            color="#d8c8b8"
            roughness={0.8}
            metalness={0.0}
            transparent
            opacity={0.15}
          />
        </mesh>
      ))}
      
      {/* Ceiling - Soft white */}
      <mesh position={[0, 4, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#fafafa" roughness={0.95} envMapIntensity={0.1} />
      </mesh>
      
      {/* Left Wall */}
      <mesh position={[-5, 1.1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial color="#f5f5f5" roughness={0.92} envMapIntensity={0.15} />
      </mesh>
      
      {/* Right Wall */}
      <mesh position={[5, 1.1, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial color="#f5f5f5" roughness={0.92} envMapIntensity={0.15} />
      </mesh>
      
      {/* Acoustic Panels - Natural wood slats on left wall */}
      {[0, 1, 2, 3].map((i) => (
        <group key={`panel-group-${i}`}>
          <mesh position={[-4.95, 2.2, -1.8 + i * 0.5]} rotation={[0, Math.PI / 2, 0]}>
            <boxGeometry args={[0.35, 0.9, 0.04]} />
            <meshStandardMaterial 
              color="#B8956A"
              roughness={0.65}
              metalness={0.0}
              envMapIntensity={0.3}
            />
          </mesh>
          <mesh position={[-4.95, 0.8, -1.8 + i * 0.5]} rotation={[0, Math.PI / 2, 0]}>
            <boxGeometry args={[0.35, 0.9, 0.04]} />
            <meshStandardMaterial 
              color="#B8956A"
              roughness={0.65}
              metalness={0.0}
              envMapIntensity={0.3}
            />
          </mesh>
        </group>
      ))}
      
      {/* Acoustic Panels on right wall */}
      {[0, 1, 2].map((i) => (
        <mesh key={`right-panel-${i}`} position={[4.95, 1.8, 0.2 + i * 0.6]} rotation={[0, -Math.PI / 2, 0]}>
          <boxGeometry args={[0.4, 1.2, 0.04]} />
          <meshStandardMaterial 
            color="#B8956A"
            roughness={0.65}
            metalness={0.0}
            envMapIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
};

export const Logo3DPreview = ({ text, width, height, depth, material, font }: Logo3DPreviewProps) => {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 border border-border/50 relative shadow-lg">
      <Canvas
        camera={{ position: [0, 0.3, 3.5], fov: 60 }}
        shadows="soft"
        gl={{ 
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }}
      >
        <Suspense fallback={null}>
          {/* HDRI Environment for realistic lighting and reflections */}
          <Environment preset="apartment" background={false} />
          
          {/* Ambient light - reduced because HDRI provides base lighting */}
          <ambientLight intensity={0.3} />
          
          {/* Main key light - softer, more natural */}
          <directionalLight 
            position={[4, 5, 2]} 
            intensity={0.8} 
            castShadow
            shadow-mapSize={[4096, 4096]}
            shadow-camera-far={20}
            shadow-camera-left={-6}
            shadow-camera-right={6}
            shadow-camera-top={6}
            shadow-camera-bottom={-6}
            shadow-bias={-0.0001}
          />
          
          {/* Ceiling spotlight - focused on logo */}
          <spotLight 
            position={[0, 3.5, -2.5]} 
            angle={0.35} 
            penumbra={0.6} 
            intensity={1.2}
            castShadow
            shadow-mapSize={[2048, 2048]}
            target-position={[0, 0, -2.8]}
          />
          
          {/* Soft fill from left - warmer tone */}
          <pointLight position={[-3, 1.5, -1]} intensity={0.4} color="#fff5e6" />
          
          {/* Accent on acoustic panels - warm light */}
          <spotLight 
            position={[-3.5, 2.5, -1]} 
            angle={0.5} 
            penumbra={0.8} 
            intensity={0.3}
            color="#ffe4cc"
          />
          
          {/* Right fill - cooler */}
          <pointLight position={[3.5, 1.8, 0]} intensity={0.3} color="#f0f8ff" />
          
          {/* Subtle backlight */}
          <pointLight position={[0, 1, -3.8]} intensity={0.2} color="#e8e8e8" />
          
          <OfficeRoom />
          <Logo3D width={width} height={height} depth={depth} material={material} text={text} />
          
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            minDistance={2}
            maxDistance={6}
            maxPolarAngle={Math.PI / 2.05}
            minPolarAngle={Math.PI / 8}
            target={[0, 0, -2.8]}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-3 left-3 text-xs text-foreground/70 bg-background/60 px-2.5 py-1 rounded-full backdrop-blur-sm border border-border/30">
        💡 Ziehen zum Drehen • Scrollen zum Zoomen
      </div>
      <div className="absolute top-3 right-3 text-xs text-foreground/60 bg-background/50 px-2.5 py-1 rounded-full backdrop-blur-sm border border-border/30 flex items-center gap-1">
        <Sparkles className="w-3 h-3" />
        3D Vorschau
      </div>
    </div>
  );
};
