import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, Hand, RotateCw, Move, Plus } from "lucide-react";
import { Suspense, lazy } from "react";
import { getItem } from "@/data/menu";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/cart";
import { toast } from "sonner";

// Lazy-load the heavy 3D canvas
const Dish3D = lazy(() => import("@/components/Dish3D").then((m) => ({ default: m.Dish3D })));

const ARView = () => {
  const { id = "" } = useParams();
  const item = getItem(id);
  const add = useCart((s) => s.add);
  const navigate = useNavigate();

  if (!item) {
    return (
      <main className="container mx-auto max-w-md px-5 py-20 text-center">
        <p className="font-display text-3xl">Dish not found</p>
        <Button asChild variant="hero" className="mt-6"><Link to="/menu">Back to menu</Link></Button>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Top bar */}
      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between p-4">
        <button
          onClick={() => navigate(-1)}
          className="glass inline-flex items-center gap-1 rounded-full bg-background/60 px-3 py-2 text-xs text-foreground backdrop-blur-xl"
        >
          <ChevronLeft className="h-4 w-4" /> Back
        </button>
        <div className="glass rounded-full bg-background/60 px-4 py-2 text-center backdrop-blur-xl">
          <div className="text-[9px] uppercase tracking-[0.3em] text-primary">AR Preview</div>
          <div className="font-display text-sm text-foreground">{item.name}</div>
        </div>
        <div className="w-[68px]" />
      </header>

      {/* 3D viewport */}
      <section className="relative h-[100svh] w-full">
        <Suspense
          fallback={
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Loading 3D scene…</p>
              </div>
            </div>
          }
        >
          <Dish3D item={item} />
        </Suspense>

        {/* gesture hints */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="pointer-events-none absolute left-1/2 top-20 z-10 -translate-x-1/2 text-center"
        >
          <div className="glass inline-flex items-center gap-4 rounded-full bg-background/60 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-xl">
            <span className="inline-flex items-center gap-1.5"><RotateCw className="h-3 w-3 text-primary" /> Drag</span>
            <span className="inline-flex items-center gap-1.5"><Hand className="h-3 w-3 text-primary" /> Pinch</span>
            <span className="inline-flex items-center gap-1.5"><Move className="h-3 w-3 text-primary" /> Explore</span>
          </div>
        </motion.div>
      </section>

      {/* Bottom action bar */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute inset-x-0 bottom-0 z-20 p-4 pb-6"
      >
        <div className="glass shadow-elegant mx-auto flex max-w-md items-center gap-3 rounded-3xl bg-background/70 p-3 backdrop-blur-xl">
          <img src={item.image} alt={item.name} className="h-14 w-14 rounded-2xl object-cover" />
          <div className="flex-1 min-w-0">
            <div className="font-display text-base leading-tight text-foreground truncate">{item.name}</div>
            <div className="text-gold font-display text-lg">${item.price}</div>
          </div>
          <Button
            variant="hero"
            size="sm"
            className="rounded-full"
            onClick={() => {
              add(item);
              toast.success("Added to order");
            }}
          >
            <Plus className="h-4 w-4" /> Add
          </Button>
        </div>
      </motion.div>
    </main>
  );
};

export default ARView;
