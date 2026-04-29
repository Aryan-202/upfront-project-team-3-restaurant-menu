import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Flame, Sparkles } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { VegBadge } from "./VegBadge";
import { Button } from "./ui/button";

export function MenuCard({ item, index = 0 }: { item: MenuItem; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.3), ease: [0.22, 1, 0.36, 1] }}
      className="group glass shadow-elegant relative flex flex-col overflow-hidden rounded-2xl"
    >
      <Link to={`/item/${item.id}`} className="relative block aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <VegBadge veg={item.veg} />
        </div>
        <div className="absolute right-3 top-3 rounded-full bg-background/70 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
          ${item.price}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="font-display text-xl leading-tight text-foreground">{item.name}</h3>
          <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">{item.tagline}</p>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Flame className="h-3 w-3 text-primary/70" />
            {item.calories} kcal
          </span>
          <span className="opacity-40">·</span>
          <span className="capitalize">{item.category}</span>
        </div>

        <div className="mt-auto flex gap-2 pt-2">
          <Button asChild variant="outline" size="sm" className="flex-1 border-border/60 bg-secondary/40 text-xs font-medium hover:bg-secondary">
            <Link to={`/item/${item.id}`}>Details</Link>
          </Button>
          <Button asChild variant="hero" size="sm" className="flex-1 text-xs">
            <Link to={`/ar/${item.id}`}>
              <Sparkles className="h-3 w-3" /> AR
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
