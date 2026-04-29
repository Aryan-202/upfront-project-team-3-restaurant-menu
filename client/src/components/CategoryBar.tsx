import { motion } from "framer-motion";
import { categories, type Category } from "@/data/menu";
import { cn } from "@/lib/utils";

interface Props {
  active: Category | "All";
  onChange: (c: Category | "All") => void;
}

export function CategoryBar({ active, onChange }: Props) {
  const all: (Category | "All")[] = ["All", ...categories];
  return (
    <div className="sticky top-0 z-30 -mx-5 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="no-scrollbar flex gap-2 overflow-x-auto px-5 py-3">
        {all.map((c) => {
          const isActive = active === c;
          return (
            <button
              key={c}
              onClick={() => onChange(c)}
              className={cn(
                "relative shrink-0 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors",
                isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="cat-pill"
                  className="absolute inset-0 rounded-full bg-gradient-gold shadow-gold"
                  transition={{ type: "spring", damping: 24, stiffness: 320 }}
                />
              )}
              <span className="relative z-10">{c}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
