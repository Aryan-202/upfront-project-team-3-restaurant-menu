import type { MenuItem } from "../data/mock";
import { X, Box, Info } from "lucide-react";
import { Button } from "./ui/button";

interface ARViewerProps {
  item: MenuItem | null;
  onClose: () => void;
}

export function ARViewer({ item, onClose }: ARViewerProps) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/95 text-white backdrop-blur-xl animate-in fade-in duration-300">
      <div className="absolute top-0 w-full p-4 flex justify-between items-center z-10 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium uppercase tracking-wider text-green-400">AR Active</span>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full bg-white/10 hover:bg-white/20 text-white">
          <X className="w-5 h-5" />
        </Button>
      </div>

      <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        {/* Simulated Camera View / AR View */}
        <div className="absolute inset-0 opacity-40">
          <img src={item.image} className="w-full h-full object-cover blur-sm scale-110" alt="AR background" />
        </div>
        
        {/* Connecting Lines / UI Overlays for Nutrients */}
        <div className="relative z-10 w-full max-w-sm aspect-square flex items-center justify-center">
          <div className="w-64 h-64 rounded-full border border-white/20 flex items-center justify-center relative animate-pulse-slow">
            <Box className="w-16 h-16 text-white/50 animate-bounce" />
            
            {/* Nutrient floating labels */}
            {item.nutrients.map((n, i) => {
              const angle = (i * (360 / item.nutrients.length)) * (Math.PI / 180);
              const radius = 140;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div 
                  key={n.name}
                  className="absolute p-2 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 shadow-xl flex flex-col items-center min-w-[80px]"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  <span className="text-xs text-muted-foreground font-medium">{n.name}</span>
                  <span className="text-sm font-bold text-accent">{n.amount}</span>
                  <span className="text-[10px] text-white/60 mt-1">{n.benefit}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
        <h2 className="text-3xl font-heading font-bold mb-2 text-white">{item.name}</h2>
        <p className="text-white/70 text-sm mb-6 max-w-md">{item.description}</p>
        <div className="flex gap-4">
          <Button className="flex-1 bg-white text-black hover:bg-gray-200 rounded-xl font-bold h-12 text-lg">
            Add to Order - ${item.price.toFixed(2)}
          </Button>
        </div>
      </div>
    </div>
  );
}
