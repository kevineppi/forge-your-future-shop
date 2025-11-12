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
        return { color: '#1a1a1a', metalness: 0.0, roughness: 0.9 };
      case 'petg':
        return { color: '#2a2a2a', metalness: 0.0, roughness: 0.85 };
      case 'abs':
        return { color: '#3a3a3a', metalness: 0.0, roughness: 0.9 };
      case 'wood':
        return { color: '#8B4513', metalness: 0.0, roughness: 0.95 };
      default:
        return { color: '#1a1a1a', metalness: 0.0, roughness: 0.9 };
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
    <Center position={[0, 1.2, -2.15]}>
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
          envMapIntensity={0.2}
        />
      </Text3D>
    </Center>
  );
};

const OfficeRoom = () => {
  // Create ultra high-resolution wooden floor texture (parquet)
  const floorTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 4096;
    canvas.height = 4096;
    const ctx = canvas.getContext('2d')!;
    
    // Base wood color - natural oak
    const baseR = 193;
    const baseG = 154;
    const baseB = 107;
    
    // Create smooth wooden planks
    const plankWidth = 200;
    const plankLength = 1600;
    
    for (let row = 0; row < Math.ceil(4096 / plankLength); row++) {
      for (let col = 0; col < Math.ceil(4096 / plankWidth); col++) {
        const x = col * plankWidth;
        const y = row * plankLength;
        
        // Random wood shade variation per plank
        const shadeVar = 0.85 + Math.random() * 0.3;
        const r = Math.floor(baseR * shadeVar);
        const g = Math.floor(baseG * shadeVar);
        const b = Math.floor(baseB * shadeVar);
        
        // Fill plank base
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fillRect(x, y, plankWidth - 3, plankLength - 3);
        
        // Add smooth wood grain (many fine lines)
        for (let i = 0; i < 200; i++) {
          const grainY = y + (i / 200) * plankLength;
          const grainOpacity = 0.03 + Math.random() * 0.08;
          const grainDarkness = 0.6 + Math.random() * 0.2;
          
          ctx.strokeStyle = `rgba(${r * grainDarkness}, ${g * grainDarkness}, ${b * grainDarkness}, ${grainOpacity})`;
          ctx.lineWidth = 0.5 + Math.random() * 1.5;
          ctx.beginPath();
          ctx.moveTo(x, grainY);
          
          // Smooth wavy grain
          const waviness = (Math.random() - 0.5) * 8;
          ctx.lineTo(x + plankWidth, grainY + waviness);
          ctx.stroke();
        }
        
        // Add subtle knots and details
        if (Math.random() > 0.7) {
          const knotX = x + Math.random() * plankWidth;
          const knotY = y + Math.random() * plankLength;
          const knotSize = 10 + Math.random() * 20;
          
          const gradient = ctx.createRadialGradient(knotX, knotY, 0, knotX, knotY, knotSize);
          gradient.addColorStop(0, `rgba(${r * 0.4}, ${g * 0.4}, ${b * 0.4}, 0.3)`);
          gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          ctx.fillStyle = gradient;
          ctx.fillRect(knotX - knotSize, knotY - knotSize, knotSize * 2, knotSize * 2);
        }
        
        // Plank separation - subtle shadow
        ctx.strokeStyle = `rgba(${r * 0.3}, ${g * 0.3}, ${b * 0.3}, 0.5)`;
        ctx.lineWidth = 3;
        ctx.strokeRect(x, y, plankWidth - 3, plankLength - 3);
      }
    }
    
    // Add overall subtle noise for realism
    for (let i = 0; i < 15000; i++) {
      const nx = Math.random() * 4096;
      const ny = Math.random() * 4096;
      const brightness = Math.random() > 0.5 ? 255 : 0;
      const opacity = Math.random() * 0.02;
      ctx.fillStyle = `rgba(${brightness}, ${brightness}, ${brightness}, ${opacity})`;
      ctx.fillRect(nx, ny, 1, 1);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1.5, 1.5);
    texture.anisotropy = 16; // Maximum anisotropic filtering for sharp textures
    return texture;
  }, []);
  
  // Create high-resolution matte white rough wall texture
  const wallTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 2048;
    const ctx = canvas.getContext('2d')!;
    
    // Base matte white
    ctx.fillStyle = '#fafafa';
    ctx.fillRect(0, 0, 2048, 2048);
    
    // Add realistic wall texture - subtle variations
    for (let i = 0; i < 8000; i++) {
      const x = Math.random() * 2048;
      const y = Math.random() * 2048;
      const size = Math.random() * 1.5 + 0.5;
      const opacity = Math.random() * 0.02;
      ctx.fillStyle = `rgba(230, 230, 230, ${opacity})`;
      ctx.fillRect(x, y, size, size);
    }
    
    // Add fine grain for rough surface
    for (let i = 0; i < 10000; i++) {
      const x = Math.random() * 2048;
      const y = Math.random() * 2048;
      const brightness = 240 + Math.random() * 15;
      ctx.fillStyle = `rgba(${brightness}, ${brightness}, ${brightness}, 0.015)`;
      ctx.fillRect(x, y, 1, 1);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);
    return texture;
  }, []);
  
  return (
    <group>
      {/* Back Wall - Matte white rough wall (smaller room) */}
      <mesh position={[0, 1.2, -2.2]} receiveShadow>
        <planeGeometry args={[6, 5]} />
        <meshStandardMaterial 
          map={wallTexture}
          roughness={0.98}
          metalness={0.0}
        />
      </mesh>
      
      {/* Floor - Ultra high resolution wooden parquet */}
      <mesh position={[0, -1.3, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial 
          map={floorTexture}
          roughness={0.6}
          metalness={0.0}
        />
      </mesh>
      
      {/* Ceiling - Matte white */}
      <mesh position={[0, 3.7, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial 
          map={wallTexture}
          roughness={0.98} 
          metalness={0.0}
        />
      </mesh>
      
      {/* Left Wall - Matte white rough */}
      <mesh position={[-3, 1.2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[8, 5]} />
        <meshStandardMaterial 
          map={wallTexture}
          roughness={0.98} 
          metalness={0.0}
        />
      </mesh>
      
      {/* Right Wall - Matte white rough */}
      <mesh position={[3, 1.2, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[8, 5]} />
        <meshStandardMaterial 
          map={wallTexture}
          roughness={0.98} 
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
        camera={{ position: [0, 1.2, 2.5], fov: 50 }}
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
          {/* Soft ambient lighting */}
          <ambientLight intensity={0.8} />
          
          {/* Main diffuse light - no harsh specular highlights */}
          <directionalLight 
            position={[3, 5, 2]} 
            intensity={0.4} 
            castShadow
            shadow-mapSize={[2048, 2048]}
            shadow-camera-far={15}
            shadow-camera-left={-5}
            shadow-camera-right={5}
            shadow-camera-top={5}
            shadow-camera-bottom={-5}
            shadow-bias={-0.0005}
            shadow-radius={6}
          />
          
          {/* Soft fill lights from sides */}
          <pointLight position={[-3, 3, 1]} intensity={0.2} />
          <pointLight position={[3, 3, 1]} intensity={0.2} />
          
          {/* Subtle top light */}
          <pointLight position={[0, 4, -2]} intensity={0.15} />
          
          <OfficeRoom />
          <Logo3D width={width} height={height} depth={depth} material={material} text={text} />
          
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            minDistance={1.8}
            maxDistance={4}
            maxPolarAngle={Math.PI / 2.1}
            minPolarAngle={Math.PI / 9}
            minAzimuthAngle={-Math.PI / 3}
            maxAzimuthAngle={Math.PI / 3}
            target={[0, 1.2, -2.15]}
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
