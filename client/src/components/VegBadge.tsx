import { cn } from "@/lib/utils";

export function VegBadge({ veg, className }: { veg: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-4 w-4 shrink-0 items-center justify-center border",
        veg ? "border-veg" : "border-nonveg",
        className
      )}
      aria-label={veg ? "Vegetarian" : "Non-vegetarian"}
    >
      <span
        className={cn("h-2 w-2 rounded-full", veg ? "bg-veg" : "bg-nonveg")}
      />
    </span>
  );
}
