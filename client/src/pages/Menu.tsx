import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Filter, X, Leaf, Drumstick, ChevronLeft } from "lucide-react";
import { menu, type Category } from "@/data/menu";
import { CategoryBar } from "@/components/CategoryBar";
import { MenuCard } from "@/components/MenuCard";
import { FloatingCart } from "@/components/FloatingCart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

type Diet = "all" | "veg" | "nonveg";

const ALL_ALLERGENS = ["Gluten", "Dairy", "Egg", "Nuts", "Fish"];

const Menu = () => {
  const [cat, setCat] = useState<Category | "All">("All");
  const [q, setQ] = useState("");
  const [diet, setDiet] = useState<Diet>("all");
  const [maxCals, setMaxCals] = useState(800);
  const [excluded, setExcluded] = useState<string[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    return menu.filter((m) => {
      if (cat !== "All" && m.category !== cat) return false;
      if (diet === "veg" && !m.veg) return false;
      if (diet === "nonveg" && m.veg) return false;
      if (m.calories > maxCals) return false;
      if (excluded.some((a) => m.allergens.includes(a))) return false;
      if (q && !`${m.name} ${m.tagline} ${m.description}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [cat, q, diet, maxCals, excluded]);

  const toggleAllergen = (a: string) =>
    setExcluded((s) => (s.includes(a) ? s.filter((x) => x !== a) : [...s, a]));

  return (
    <main className="relative min-h-screen pb-32">
      <div className="container mx-auto max-w-6xl px-5 pt-6">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center justify-between"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-primary">
            <ChevronLeft className="h-3 w-3" /> Aurum
          </Link>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Table</div>
            <div className="font-display text-xl text-primary">12</div>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h1 className="font-display text-4xl text-foreground sm:text-5xl">
            Tonight's <span className="text-gold italic">menu</span>
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Curated by Chef Rénard · {filtered.length} dishes
          </p>
        </motion.div>

        {/* Search + filter trigger */}
        <div className="mb-4 flex gap-2">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search dishes, ingredients…"
              className="h-11 rounded-full border-border/60 bg-secondary/60 pl-10 text-sm placeholder:text-muted-foreground/60"
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setFiltersOpen((v) => !v)}
            className={cn("h-11 w-11 shrink-0 rounded-full border-border/60 bg-secondary/60",
              filtersOpen && "border-primary text-primary")}
          >
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Filters panel */}
        {filtersOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass mb-4 overflow-hidden rounded-2xl p-4"
          >
            <div className="mb-4 flex flex-wrap gap-2">
              {(["all", "veg", "nonveg"] as Diet[]).map((d) => (
                <button
                  key={d}
                  onClick={() => setDiet(d)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs uppercase tracking-wider transition-colors",
                    diet === d
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border/60 text-muted-foreground hover:text-foreground"
                  )}
                >
                  {d === "veg" && <Leaf className="h-3 w-3" />}
                  {d === "nonveg" && <Drumstick className="h-3 w-3" />}
                  {d === "all" ? "All" : d === "veg" ? "Veg" : "Non-Veg"}
                </button>
              ))}
            </div>

            <div className="mb-4">
              <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-wider text-muted-foreground">
                <span>Max Calories</span>
                <span className="text-primary">{maxCals} kcal</span>
              </div>
              <Slider
                value={[maxCals]}
                min={150}
                max={800}
                step={20}
                onValueChange={(v) => setMaxCals(v[0])}
              />
            </div>

            <div>
              <div className="mb-2 text-[11px] uppercase tracking-wider text-muted-foreground">
                Exclude Allergens
              </div>
              <div className="flex flex-wrap gap-2">
                {ALL_ALLERGENS.map((a) => {
                  const on = excluded.includes(a);
                  return (
                    <button
                      key={a}
                      onClick={() => toggleAllergen(a)}
                      className={cn(
                        "rounded-full border px-3 py-1 text-xs transition-colors",
                        on
                          ? "border-destructive bg-destructive/10 text-destructive"
                          : "border-border/60 text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {on && <X className="mr-1 inline h-3 w-3" />} {a}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        <CategoryBar active={cat} onChange={setCat} />

        {/* Grid */}
        <section className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </section>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            <p className="font-display text-2xl text-foreground">Nothing matches</p>
            <p className="mt-1 text-sm">Try widening your filters.</p>
          </div>
        )}
      </div>

      <FloatingCart />
    </main>
  );
};

export default Menu;
