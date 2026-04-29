import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/store/cart";

export function FloatingCart() {
  const count = useCart((s) => s.count());
  const total = useCart((s) => s.total());

  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 22, stiffness: 280 }}
          className="fixed inset-x-0 bottom-5 z-40 flex justify-center px-4"
        >
          <Link
            to="/cart"
            className="glass shadow-gold flex w-full max-w-sm items-center justify-between gap-3 rounded-full bg-background/80 px-5 py-3 backdrop-blur-xl transition-transform hover:scale-[1.02]"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground">
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-background px-1 text-[10px] font-semibold text-primary">
                {count}
              </span>
            </span>
            <span className="flex-1 text-left">
              <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">View Order</span>
              <span className="block font-display text-base text-foreground">{count} item{count > 1 ? "s" : ""}</span>
            </span>
            <span className="text-gold font-display text-xl font-semibold">${total.toFixed(0)}</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
