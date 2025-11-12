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
  
  // Correct proportional scaling: 10cm should be 1/10 of 100cm
  // Base size reference: 100cm width = 1.0 unit in 3D space
  const widthScale = width / 100; // 100cm = 1.0, 10cm = 0.1
  const heightScale = height / 100; // Proportional to width
  const depthScale = depth / 10; // 10cm depth = 0.1 unit
  
  // Text size should scale with width for readability
  const textSize = widthScale * 0.5;
  const extrudeDepth = depthScale * 0.8;

  const displayText = text && text.trim() !== "" ? text : "Text";

  return (
    <Center position={[0, 0, -2.8]}>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={textSize}
        height={extrudeDepth}
        curveSegments={16}
        bevelEnabled
        bevelThickness={0.008}
        bevelSize={0.008}
        bevelOffset={0}
        bevelSegments={5}
        castShadow
        receiveShadow
      >
        {displayText}
        <meshStandardMaterial 
          {...materialProps}
          envMapIntensity={0.8}
        />
      </Text3D>
    </Center>
  );
};

const FloorTexture = () => {
  // Create simple, clean floor texture - smooth and minimal
  const floorTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d')!;
    
    // Simple smooth gray floor
    ctx.fillStyle = '#d4d4d4';
    ctx.fillRect(0, 0, 1024, 1024);
    
    // Very subtle texture variation
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 1024;
      const size = Math.random() * 3;
      ctx.fillStyle = `rgba(200, 200, 200, ${Math.random() * 0.05})`;
      ctx.fillRect(x, y, size, size);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);
    return texture;
  }, []);
  
  return floorTexture;
};

const OfficeRoom = () => {
  const floorTexture = FloorTexture();
  
  return (
    <group>
      {/* Back Wall - Clean white, full height */}
      <mesh position={[0, 1.5, -3.1]} receiveShadow>
        <planeGeometry args={[10, 9]} />
        <meshStandardMaterial 
          color="#fafafa" 
          roughness={0.95}
          metalness={0.0}
        />
      </mesh>
      
      {/* Floor - Simple smooth surface */}
      <mesh position={[0, -1.8, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial 
          map={floorTexture}
          roughness={0.85}
          metalness={0.0}
        />
      </mesh>
      
      {/* Ceiling - Soft white */}
      <mesh position={[0, 6, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial 
          color="#fafafa" 
          roughness={0.95} 
          metalness={0.0}
        />
      </mesh>
      
      {/* Left Wall */}
      <mesh position={[-5, 2.1, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[12, 10]} />
        <meshStandardMaterial 
          color="#f5f5f5" 
          roughness={0.92} 
          metalness={0.0}
        />
      </mesh>
      
      {/* Right Wall */}
      <mesh position={[5, 2.1, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[12, 10]} />
        <meshStandardMaterial 
          color="#f5f5f5" 
          roughness={0.92} 
          metalness={0.0}
        />
      </mesh>
    </group>
  );
};

export const Logo3DPreview = ({ text, width, height, depth, material, font }: Logo3DPreviewProps) => {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 border border-border/50 relative shadow-lg">
      <Canvas
        camera={{ position: [0, 0.5, 3.5], fov: 60 }}
        shadows
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: false,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
      >
        <Suspense fallback={null}>
          {/* Simplified lighting for softer shadows */}
          <ambientLight intensity={0.7} />
          
          {/* Main soft key light */}
          <directionalLight 
            position={[3, 4, 2]} 
            intensity={0.5} 
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-camera-far={15}
            shadow-camera-left={-5}
            shadow-camera-right={5}
            shadow-camera-top={5}
            shadow-camera-bottom={-5}
            shadow-bias={-0.001}
            shadow-radius={4}
          />
          
          {/* Soft fill light */}
          <pointLight position={[-2, 2, 1]} intensity={0.3} />
          <pointLight position={[2, 2, 1]} intensity={0.3} />
          
          {/* Very subtle backlight */}
          <pointLight position={[0, 1, -3]} intensity={0.15} />
          
          <OfficeRoom />
          <Logo3D width={width} height={height} depth={depth} material={material} text={text} />
          
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            minDistance={2.5}
            maxDistance={6}
            maxPolarAngle={Math.PI / 2.1}
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
