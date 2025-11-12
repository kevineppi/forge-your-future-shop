import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Text3D, Center } from '@react-three/drei';
import { Suspense, useMemo } from 'react';
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

const FloorTexture = () => {
  // Create procedural wood floor texture
  const floorTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 2048;
    const ctx = canvas.getContext('2d')!;
    
    // Base wood color
    ctx.fillStyle = '#E5D5C5';
    ctx.fillRect(0, 0, 2048, 2048);
    
    // Draw wood planks
    const plankWidth = 200;
    const plankHeight = 2048;
    
    for (let x = 0; x < 2048; x += plankWidth) {
      // Alternate plank colors slightly
      const variation = Math.random() * 20 - 10;
      const r = 229 + variation;
      const g = 213 + variation;
      const b = 197 + variation;
      
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(x, 0, plankWidth - 4, plankHeight);
      
      // Add wood grain effect
      for (let i = 0; i < 5; i++) {
        const grainY = Math.random() * plankHeight;
        ctx.strokeStyle = `rgba(210, 190, 170, ${0.1 + Math.random() * 0.2})`;
        ctx.lineWidth = 1 + Math.random() * 2;
        ctx.beginPath();
        ctx.moveTo(x, grainY);
        ctx.lineTo(x + plankWidth - 4, grainY + (Math.random() - 0.5) * 100);
        ctx.stroke();
      }
      
      // Plank gaps
      ctx.fillStyle = '#c5b5a5';
      ctx.fillRect(x + plankWidth - 4, 0, 4, plankHeight);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
    return texture;
  }, []);
  
  return floorTexture;
};

const OfficeRoom = () => {
  const floorTexture = FloorTexture();
  
  return (
    <group>
      {/* Back Wall - Clean white with subtle roughness variation */}
      <mesh position={[0, 0, -3.1]} receiveShadow castShadow>
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial 
          color="#f8f8f8" 
          roughness={0.92}
          metalness={0.0}
          envMapIntensity={0.3}
        />
      </mesh>
      
      {/* Floor - Realistic wood with procedural texture */}
      <mesh position={[0, -1.8, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial 
          map={floorTexture}
          roughness={0.7}
          metalness={0.0}
          envMapIntensity={0.2}
        />
      </mesh>
      
      {/* Ceiling - Soft white */}
      <mesh position={[0, 4, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial 
          color="#fafafa" 
          roughness={0.95} 
          metalness={0.0}
          envMapIntensity={0.1} 
        />
      </mesh>
      
      {/* Left Wall */}
      <mesh position={[-5, 1.1, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[12, 6]} />
        <meshStandardMaterial 
          color="#f5f5f5" 
          roughness={0.9} 
          metalness={0.0}
          envMapIntensity={0.2} 
        />
      </mesh>
      
      {/* Right Wall */}
      <mesh position={[5, 1.1, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[12, 6]} />
        <meshStandardMaterial 
          color="#f5f5f5" 
          roughness={0.9} 
          metalness={0.0}
          envMapIntensity={0.2} 
        />
      </mesh>
      
      {/* Acoustic Panels - Natural wood slats with realistic depth */}
      {[0, 1, 2, 3].map((i) => (
        <group key={`panel-group-${i}`}>
          <mesh position={[-4.95, 2.2, -1.8 + i * 0.5]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.35, 0.9, 0.06]} />
            <meshStandardMaterial 
              color="#B8956A"
              roughness={0.6}
              metalness={0.0}
              envMapIntensity={0.4}
            />
          </mesh>
          <mesh position={[-4.95, 0.8, -1.8 + i * 0.5]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.35, 0.9, 0.06]} />
            <meshStandardMaterial 
              color="#B8956A"
              roughness={0.6}
              metalness={0.0}
              envMapIntensity={0.4}
            />
          </mesh>
        </group>
      ))}
      
      {/* Acoustic Panels on right wall */}
      {[0, 1, 2].map((i) => (
        <mesh key={`right-panel-${i}`} position={[4.95, 1.8, 0.2 + i * 0.6]} rotation={[0, -Math.PI / 2, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.4, 1.2, 0.06]} />
          <meshStandardMaterial 
            color="#B8956A"
            roughness={0.6}
            metalness={0.0}
            envMapIntensity={0.4}
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
        camera={{ position: [0, 0.5, 3.2], fov: 60 }}
        shadows="soft"
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: false,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
          outputColorSpace: THREE.SRGBColorSpace,
          shadowMapType: THREE.PCFSoftShadowMap,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          {/* HDRI Environment for photorealistic lighting */}
          <Environment 
            preset="city" 
            background={false}
            blur={0.8}
          />
          
          {/* Enhanced ambient occlusion effect */}
          <ambientLight intensity={0.4} />
          
          {/* Main key light - realistic office lighting from window */}
          <directionalLight 
            position={[5, 6, 3]} 
            intensity={1.2} 
            castShadow
            shadow-mapSize={[4096, 4096]}
            shadow-camera-far={25}
            shadow-camera-left={-7}
            shadow-camera-right={7}
            shadow-camera-top={7}
            shadow-camera-bottom={-7}
            shadow-bias={-0.00005}
            shadow-normalBias={0.02}
          />
          
          {/* Ceiling spotlight - focused beam on logo */}
          <spotLight 
            position={[0, 3.8, -2.6]} 
            angle={0.3} 
            penumbra={0.7} 
            intensity={1.8}
            castShadow
            shadow-mapSize={[2048, 2048]}
            target-position={[0, 0, -2.8]}
            shadow-bias={-0.00005}
          />
          
          {/* Soft fill from left - warm office light */}
          <pointLight position={[-3.5, 2, -1]} intensity={0.5} color="#fff8e6" castShadow />
          
          {/* Accent on acoustic panels - warm ambient */}
          <spotLight 
            position={[-4, 2.8, -1.5]} 
            angle={0.6} 
            penumbra={0.85} 
            intensity={0.4}
            color="#ffe8cc"
          />
          
          {/* Right fill - neutral white */}
          <pointLight position={[4, 2, 0.5]} intensity={0.4} color="#ffffff" />
          
          {/* Subtle backlight for depth and rim lighting */}
          <pointLight position={[0, 1.5, -4]} intensity={0.25} color="#e8e8e8" />
          
          {/* Additional ceiling lights for realism */}
          <pointLight position={[-2, 3.5, -1]} intensity={0.3} color="#fffaf0" />
          <pointLight position={[2, 3.5, -1]} intensity={0.3} color="#fffaf0" />
          
          <OfficeRoom />
          <Logo3D width={width} height={height} depth={depth} material={material} text={text} />
          
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            minDistance={2.2}
            maxDistance={5.5}
            maxPolarAngle={Math.PI / 2.15}
            minPolarAngle={Math.PI / 9}
            minAzimuthAngle={-Math.PI / 3}
            maxAzimuthAngle={Math.PI / 3}
            target={[0, 0, -2.8]}
            enableDamping
            dampingFactor={0.08}
            rotateSpeed={0.5}
            zoomSpeed={0.8}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-3 left-3 text-xs text-foreground/70 bg-background/70 px-3 py-1.5 rounded-full backdrop-blur-md border border-border/40 shadow-sm">
        💡 Ziehen zum Drehen • Scrollen zum Zoomen
      </div>
      <div className="absolute top-3 right-3 text-xs text-foreground/60 bg-background/60 px-3 py-1.5 rounded-full backdrop-blur-md border border-border/40 flex items-center gap-1.5 shadow-sm">
        <Sparkles className="w-3 h-3" />
        3D Vorschau
      </div>
    </div>
  );
};
