import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import type { MenuItem } from "../data/mock";
import { Target, Info, Flame } from "lucide-react";

interface MenuItemCardProps {
  item: MenuItem;
  onViewAR: (item: MenuItem) => void;
}

export function MenuItemCard({ item, onViewAR }: MenuItemCardProps) {
  return (
    <Card className="overflow-hidden rounded-2xl border-border bg-card shadow-sm transition-all hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <Badge variant="secondary" className="bg-white/90 text-black shadow-sm font-semibold backdrop-blur-md">
            ${item.price.toFixed(2)}
          </Badge>
        </div>
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="secondary" className="bg-black/60 text-white shadow-sm font-medium backdrop-blur-md border-none flex items-center gap-1">
            <Flame className="w-3 h-3 text-orange-400" />
            {item.calories} cal
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-heading font-semibold text-lg text-foreground leading-tight">
            {item.name}
          </h3>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
          {item.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {item.nutrients.slice(0, 2).map((nutrient) => (
            <div key={nutrient.name} className="flex items-center gap-1 text-xs bg-accent-bg text-accent-foreground px-2 py-1 rounded-md border border-accent-border/30">
              <Info className="w-3 h-3" />
              <span className="font-medium">{nutrient.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => onViewAR(item)}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl flex items-center justify-center gap-2 font-medium"
        >
          <Target className="w-4 h-4" />
          View in AR
        </Button>
      </CardFooter>
    </Card>
  );
}
