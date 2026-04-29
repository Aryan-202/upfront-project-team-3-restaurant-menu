import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Minus, Plus, Trash2, Check } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/store/cart";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Cart = () => {
  const lines = useCart((s) => s.lines);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const clear = useCart((s) => s.clear);
  const total = useCart((s) => s.total());
  const [placed, setPlaced] = useState(false);
  const navigate = useNavigate();

  const items = Object.values(lines);
  const tax = total * 0.08;
  const grand = total + tax;

  const place = () => {
    setPlaced(true);
    setTimeout(() => {
      clear();
      toast.success("Order sent to the kitchen");
      navigate("/menu");
    }, 1600);
  };

  return (
    <main className="relative min-h-screen pb-10">
      <div className="container mx-auto max-w-2xl px-5 pt-6">
        <Link to="/menu" className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-primary">
          <ChevronLeft className="h-3 w-3" /> Back to menu
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 font-display text-4xl text-foreground sm:text-5xl"
        >
          Your <span className="text-gold italic">order</span>
        </motion.h1>
        <p className="mt-1 text-sm text-muted-foreground">Table 12 · {items.length} item{items.length !== 1 ? "s" : ""}</p>

        {items.length === 0 ? (
          <div className="glass mt-10 rounded-3xl p-10 text-center">
            <p className="font-display text-2xl text-foreground">Your order is empty</p>
            <p className="mt-2 text-sm text-muted-foreground">Pick something delicious from the menu.</p>
            <Button asChild variant="hero" className="mt-6 rounded-full">
              <Link to="/menu">Browse menu</Link>
            </Button>
          </div>
        ) : (
          <>
            <ul className="mt-6 space-y-3">
              <AnimatePresence>
                {items.map((line) => (
                  <motion.li
                    key={line.item.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    className="glass flex items-center gap-3 rounded-2xl p-3"
                  >
                    <img src={line.item.image} alt={line.item.name} className="h-16 w-16 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <div className="font-display text-base leading-tight text-foreground">{line.item.name}</div>
                      <div className="text-gold text-sm">${line.item.price.toFixed(2)}</div>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-secondary/60 p-1">
                      <button
                        onClick={() => setQty(line.item.id, line.qty - 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-background"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-5 text-center text-sm">{line.qty}</span>
                      <button
                        onClick={() => setQty(line.item.id, line.qty + 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-primary hover:bg-primary/30"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <button onClick={() => remove(line.item.id)} className="text-muted-foreground hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>

            <div className="glass mt-6 space-y-2 rounded-2xl p-5">
              <Row label="Subtotal" value={`$${total.toFixed(2)}`} />
              <Row label="Service & tax" value={`$${tax.toFixed(2)}`} />
              <div className="my-2 h-px bg-border/60" />
              <Row label="Total" value={`$${grand.toFixed(2)}`} large />
            </div>

            <Button
              onClick={place}
              variant="hero"
              size="lg"
              disabled={placed}
              className="mt-6 w-full rounded-full"
            >
              {placed ? (<><Check className="h-4 w-4" /> Sending to kitchen…</>) : "Place Order"}
            </Button>
          </>
        )}
      </div>
    </main>
  );
};

function Row({ label, value, large }: { label: string; value: string; large?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className={large ? "font-display text-lg text-foreground" : "text-sm text-muted-foreground"}>{label}</span>
      <span className={large ? "text-gold font-display text-2xl" : "text-sm text-foreground"}>{value}</span>
    </div>
  );
}

export default Cart;
