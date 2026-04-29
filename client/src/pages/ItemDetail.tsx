import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, Sparkles, Plus, Flame, AlertTriangle } from "lucide-react";
import { getItem } from "@/data/menu";
import { Button } from "@/components/ui/button";
import { VegBadge } from "@/components/VegBadge";
import { useCart } from "@/store/cart";
import { toast } from "sonner";
import { FloatingCart } from "@/components/FloatingCart";

const ItemDetail = () => {
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
    <main className="relative min-h-screen pb-32">
      <div className="relative">
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[55vh] w-full overflow-hidden"
        >
          <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
        </motion.div>

        <button
          onClick={() => navigate(-1)}
          className="glass absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-background/60 px-3 py-2 text-xs text-foreground backdrop-blur-xl"
        >
          <ChevronLeft className="h-4 w-4" /> Back
        </button>
      </div>

      <div className="container mx-auto -mt-24 max-w-2xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass shadow-elegant rounded-3xl p-6 sm:p-8"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary">
                <VegBadge veg={item.veg} /> {item.category}
              </div>
              <h1 className="mt-2 font-display text-4xl leading-tight text-foreground sm:text-5xl">
                {item.name}
              </h1>
              <p className="mt-1 text-sm italic text-muted-foreground">{item.tagline}</p>
            </div>
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Price</div>
              <div className="text-gold font-display text-3xl">${item.price}</div>
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{item.description}</p>

          {/* Ingredients */}
          <div className="mt-6">
            <div className="mb-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Ingredients
            </div>
            <div className="flex flex-wrap gap-2">
              {item.ingredients.map((i) => (
                <span
                  key={i.name}
                  className="glass rounded-full bg-secondary/40 px-3 py-1.5 text-xs"
                >
                  <span className="text-foreground">{i.name}</span>
                  <span className="ml-1.5 text-muted-foreground">· {i.benefit}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Nutrition */}
          <div className="mt-6 grid grid-cols-4 gap-2">
            {[
              { label: "Cal", v: item.calories, suffix: "" , icon: <Flame className="h-3 w-3" /> },
              { label: "Protein", v: item.protein, suffix: "g" },
              { label: "Carbs", v: item.carbs, suffix: "g" },
              { label: "Fat", v: item.fat, suffix: "g" },
            ].map((n) => (
              <div key={n.label} className="glass rounded-2xl p-3 text-center">
                <div className="text-gold font-display text-2xl">{n.v}{n.suffix}</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{n.label}</div>
              </div>
            ))}
          </div>

          {/* Allergens */}
          {item.allergens.length > 0 && (
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-destructive/30 bg-destructive/5 p-4">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
              <div>
                <div className="text-xs font-medium uppercase tracking-wider text-destructive">Allergens</div>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {item.allergens.map((a) => (
                    <span key={a} className="rounded-full bg-destructive/15 px-2 py-0.5 text-[11px] text-destructive">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              variant="hero"
              size="lg"
              className="flex-1 rounded-full"
              onClick={() => {
                add(item);
                toast.success(`${item.name} added`, { description: `$${item.price.toFixed(2)} · in your order` });
              }}
            >
              <Plus className="h-4 w-4" /> Add to Order
            </Button>
            <Button asChild variant="outline" size="lg" className="flex-1 rounded-full border-primary/40 text-primary hover:bg-primary/10 hover:text-primary">
              <Link to={`/ar/${item.id}`}>
                <Sparkles className="h-4 w-4" /> View in 3D / AR
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      <FloatingCart />
    </main>
  );
};

export default ItemDetail;
