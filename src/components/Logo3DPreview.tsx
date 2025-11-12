import { useMemo } from 'react';
import { Ruler } from 'lucide-react';

interface Logo3DPreviewProps {
  text: string;
  width: number;
  height: number;
  depth: number;
  material: string;
  font: string;
}

const getMaterialColor = (material: string) => {
  switch (material) {
    case 'pla':
      return '#1a1a1a';
    case 'petg':
      return '#2a2a2a';
    case 'abs':
      return '#3a3a3a';
    case 'wood':
      return '#8B4513';
    default:
      return '#1a1a1a';
  }
};


export const Logo3DPreview = ({ text, width, height, depth, material, font }: Logo3DPreviewProps) => {
  const displayText = text && text.trim() !== "" ? text : "Text";
  const materialColor = getMaterialColor(material);
  
  // Dynamic scaling based on width - everything scales proportionally
  const maxDisplayWidth = 450;
  const scale = Math.min(maxDisplayWidth / width, 300 / height);
  const displayWidth = width * scale;
  const displayHeight = height * scale;
  
  // Text size scales proportionally with display size
  const textSize = Math.min(displayWidth, displayHeight) * 0.35;
  
  return (
    <div className="w-full h-[500px] bg-white relative flex items-center justify-center">
      {/* Logo with measurements - centered */}
      <div className="relative flex items-center justify-center">
        {/* Width measurement - top - scales with displayWidth */}
        <div 
          className="absolute text-sm font-semibold text-foreground/80"
          style={{
            top: -50,
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <div className="h-px bg-foreground/60" style={{ width: displayWidth }}></div>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs">├</span>
              <span>{width.toFixed(1)} cm</span>
              <span className="text-xs">┤</span>
            </div>
          </div>
        </div>
        
        {/* Height measurement - right - scales with displayHeight */}
        <div 
          className="absolute text-sm font-semibold text-foreground/80"
          style={{
            right: -80,
            top: '50%',
            transform: 'translateY(-50%)'
          }}
        >
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <span className="text-xs">┬</span>
              <div className="w-px bg-foreground/60" style={{ height: displayHeight }}></div>
              <span className="text-xs">┴</span>
            </div>
            <div>{height.toFixed(1)} cm</div>
          </div>
        </div>
        
        {/* Pure text - scales automatically with dimensions */}
        <div 
          className="font-bold select-none"
          style={{
            fontSize: `${textSize}px`,
            color: materialColor,
            textShadow: `
              ${depth * scale * 0.3}px ${depth * scale * 0.3}px ${depth * scale * 0.6}px rgba(0,0,0,0.3),
              ${depth * scale * 0.15}px ${depth * scale * 0.15}px ${depth * scale * 0.3}px rgba(0,0,0,0.2),
              ${depth * scale * 0.08}px ${depth * scale * 0.08}px ${depth * scale * 0.15}px rgba(0,0,0,0.1)
            `,
            letterSpacing: '0.02em',
            lineHeight: 1
          }}
        >
          {displayText}
        </div>
      </div>
      
      {/* Material and depth info */}
      <div className="absolute bottom-3 left-3 text-xs text-foreground/70 bg-background/80 px-3 py-1.5 rounded-full backdrop-blur-md border border-border/40 shadow-sm">
        Material: {material.toUpperCase()} • Tiefe: {depth} cm
      </div>
    </div>
  );
};
