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
  // Create realistic oak parquet floor texture based on reference image
  const floorTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 2048;
    const ctx = canvas.getContext('2d')!;
    
    // Base oak color - warmer and more natural
    ctx.fillStyle = '#C9A86A';
    ctx.fillRect(0, 0, 2048, 2048);
    
    // Draw realistic wood planks with variation
    const plankWidth = 180;
    const plankLength = 1200;
    
    for (let y = 0; y < 2048; y += 20) {
      for (let x = 0; x < 2048; x += plankWidth) {
        // Color variation for each plank
        const hue = 35 + Math.random() * 10;
        const sat = 35 + Math.random() * 15;
        const light = 52 + Math.random() * 8;
        
        ctx.fillStyle = `hsl(${hue}, ${sat}%, ${light}%)`;
        ctx.fillRect(x, y, plankWidth - 2, 18);
        
        // Wood grain - multiple subtle lines
        for (let i = 0; i < 8; i++) {
          const grainY = y + Math.random() * 18;
          const grainDark = Math.random() * 0.15 + 0.05;
          ctx.strokeStyle = `rgba(100, 70, 40, ${grainDark})`;
          ctx.lineWidth = 0.5 + Math.random() * 0.5;
          ctx.beginPath();
          ctx.moveTo(x + 2, grainY);
          ctx.lineTo(x + plankWidth - 4, grainY + (Math.random() - 0.5) * 8);
          ctx.stroke();
        }
        
        // Knots occasionally
        if (Math.random() > 0.85) {
          const knotX = x + Math.random() * plankWidth;
          const knotY = y + Math.random() * 18;
          ctx.fillStyle = `rgba(80, 50, 30, ${0.3 + Math.random() * 0.2})`;
          ctx.beginPath();
          ctx.ellipse(knotX, knotY, 3 + Math.random() * 2, 2 + Math.random(), 0, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Plank separation - dark gaps
        ctx.fillStyle = 'rgba(90, 60, 40, 0.4)';
        ctx.fillRect(x + plankWidth - 2, y, 2, 18);
      }
      // Horizontal gaps between rows
      ctx.fillStyle = 'rgba(90, 60, 40, 0.3)';
      ctx.fillRect(0, y + 18, 2048, 2);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(3, 3);
    texture.anisotropy = 16;
    return texture;
  }, []);
  
  return floorTexture;
};

const OfficeRoom = () => {
  const floorTexture = FloorTexture();
  
  return (
    <group>
      {/* Back Wall - Extended to full ceiling height */}
      <mesh position={[0, 1.1, -3.1]} receiveShadow castShadow>
        <planeGeometry args={[10, 8]} />
        <meshStandardMaterial 
          color="#f8f8f8" 
          roughness={0.92}
          metalness={0.0}
          envMapIntensity={0.3}
        />
      </mesh>
      
      {/* Floor - Realistic oak parquet with texture */}
      <mesh position={[0, -1.8, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial 
          map={floorTexture}
          roughness={0.65}
          metalness={0.0}
          envMapIntensity={0.25}
        />
      </mesh>
      
      {/* Ceiling - Soft white */}
      <mesh position={[0, 5.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial 
          color="#fafafa" 
          roughness={0.95} 
          metalness={0.0}
          envMapIntensity={0.1} 
        />
      </mesh>
      
      {/* Left Wall - Full height */}
      <mesh position={[-5, 1.7, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[12, 9]} />
        <meshStandardMaterial 
          color="#f5f5f5" 
          roughness={0.9} 
          metalness={0.0}
          envMapIntensity={0.2} 
        />
      </mesh>
      
      {/* Right Wall - Full height */}
      <mesh position={[5, 1.7, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[12, 9]} />
        <meshStandardMaterial 
          color="#f5f5f5" 
          roughness={0.9} 
          metalness={0.0}
          envMapIntensity={0.2} 
        />
      </mesh>
      
      {/* Vertical Acoustic Panels on Left Wall - Like reference image */}
      {Array.from({ length: 30 }).map((_, i) => (
        <mesh 
          key={`left-slat-${i}`} 
          position={[-4.95, 1.5, -2.5 + i * 0.12]} 
          rotation={[0, Math.PI / 2, 0]} 
          castShadow 
          receiveShadow
        >
          <boxGeometry args={[0.08, 4.5, 0.03]} />
          <meshStandardMaterial 
            color={i % 2 === 0 ? "#C9A86A" : "#3a2f25"}
            roughness={0.55}
            metalness={0.0}
            envMapIntensity={0.4}
          />
        </mesh>
      ))}
      
      {/* Vertical Acoustic Panels on Right Wall */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh 
          key={`right-slat-${i}`} 
          position={[4.95, 1.5, -1.2 + i * 0.12]} 
          rotation={[0, -Math.PI / 2, 0]} 
          castShadow 
          receiveShadow
        >
          <boxGeometry args={[0.08, 4.5, 0.03]} />
          <meshStandardMaterial 
            color={i % 2 === 0 ? "#C9A86A" : "#3a2f25"}
            roughness={0.55}
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
