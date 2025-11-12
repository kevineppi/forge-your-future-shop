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
  
  // Calculate scale for visual representation (keeping proportions)
  const maxDisplaySize = 300;
  const scale = Math.min(maxDisplaySize / width, maxDisplaySize / height);
  const displayWidth = width * scale;
  const displayHeight = height * scale;
  
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden bg-white border border-border/50 relative shadow-lg flex">
      {/* Left side - decorative room preview */}
      <div className="w-1/3 bg-gradient-to-br from-slate-100 to-slate-200 border-r border-border/30 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-32 h-40 border-4 border-slate-400 rounded-t-lg bg-white/50">
            <div className="grid grid-cols-2 gap-2 p-2 h-full">
              <div className="bg-slate-300/50 rounded"></div>
              <div className="bg-slate-300/50 rounded"></div>
              <div className="bg-slate-300/50 rounded"></div>
              <div className="bg-slate-300/50 rounded"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 text-xs text-foreground/50">
          Raum-Ansicht
        </div>
      </div>
      
      {/* Right side - Logo with measurements */}
      <div className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 relative flex items-center justify-center p-12">
        {/* Logo display */}
        <div className="relative flex items-center justify-center">
          {/* Width measurement - top */}
          <div 
            className="absolute text-sm font-semibold text-foreground/80"
            style={{
              top: -40,
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
                <span>{width} cm</span>
                <span className="text-xs">┤</span>
              </div>
            </div>
          </div>
          
          {/* Height measurement - right */}
          <div 
            className="absolute text-sm font-semibold text-foreground/80"
            style={{
              right: -70,
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
              <div className="writing-mode-vertical">{height} cm</div>
            </div>
          </div>
          
          {/* Logo */}
          <div 
            className="relative rounded-sm flex items-center justify-center font-bold"
            style={{
              width: displayWidth,
              height: displayHeight,
              backgroundColor: materialColor,
              color: 'white',
              fontSize: `${Math.min(displayWidth, displayHeight) * 0.25}px`,
              boxShadow: `
                ${depth * 0.5}px ${depth * 0.5}px ${depth}px rgba(0,0,0,0.3),
                ${depth * 0.3}px ${depth * 0.3}px ${depth * 0.5}px rgba(0,0,0,0.2)
              `,
              border: '2px solid rgba(0,0,0,0.1)'
            }}
          >
            {displayText}
          </div>
        </div>
        
        {/* Info badge */}
        <div className="absolute top-3 right-3 text-xs text-foreground/60 bg-background/80 px-3 py-1.5 rounded-full backdrop-blur-md border border-border/40 flex items-center gap-1.5 shadow-sm">
          <Ruler className="w-3 h-3" />
          Maßansicht
        </div>
        
        {/* Material and depth info */}
        <div className="absolute bottom-3 left-3 text-xs text-foreground/70 bg-background/80 px-3 py-1.5 rounded-full backdrop-blur-md border border-border/40 shadow-sm">
          Material: {material.toUpperCase()} • Tiefe: {depth} cm
        </div>
      </div>
    </div>
  );
};
