
import { useEffect, useRef } from 'react';

interface ARViewerProps {
  modelUrl: string;
  onClose: () => void;
  itemName: string;
}

export function ARViewer({ modelUrl, onClose, itemName }: ARViewerProps) {
  const ModelViewer = 'model-viewer' as any;
  const viewerRef = useRef<any>(null);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    const handleError = (e: any) => {
      console.error("Model Viewer Error:", e);
    };

    const handleLoad = () => {
      console.log("Model Loaded successfully");
    };

    viewer.addEventListener('error', handleError);
    viewer.addEventListener('load', handleLoad);

    return () => {
      viewer.removeEventListener('error', handleError);
      viewer.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl h-[70vh] md:h-[80vh] bg-card rounded-3xl overflow-hidden shadow-2xl border border-border flex flex-col">
        <div className="p-4 border-b flex justify-between items-center bg-muted/30">
          <div className="flex flex-col">
            <h3 className="text-xl font-bold">{itemName}</h3>
            <p className="text-xs text-muted-foreground">Augmented Reality Experience</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Close AR view"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        
        <div className="flex-1 relative bg-muted/20">
          <ModelViewer
            ref={viewerRef}
            src={modelUrl}
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            shadow-intensity="1"
            auto-rotate
            touch-action="pan-y"
            alt={`A 3D model of ${itemName}`}
            style={{ width: '100%', height: '100%', '--poster-color': 'transparent' }}
          >
            <button slot="ar-button" className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold shadow-xl hover:bg-primary/90 hover:scale-105 transition-all flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-box"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
              Place in Your Room
            </button>
            
            <div className="absolute top-4 left-4 bg-background/50 backdrop-blur-md p-3 rounded-2xl border border-border/50 max-w-[200px]">
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-70 mb-1">Instructions</p>
              <p className="text-xs">Scan a flat surface and tap the button to see the dish in life-size AR.</p>
            </div>
          </ModelViewer>
        </div>
        
        <div className="p-4 bg-muted/30 flex items-center justify-center gap-4 border-t">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             AR Ready
          </div>
        </div>
      </div>
    </div>
  );
}
