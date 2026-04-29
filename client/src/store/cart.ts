import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { MenuItem } from "@/data/menu";

export interface CartLine {
  item: MenuItem;
  qty: number;
}

interface CartState {
  lines: Record<string, CartLine>;
  add: (item: MenuItem) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: () => number;
  total: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: {},
      add: (item) =>
        set((s) => {
          const existing = s.lines[item.id];
          return {
            lines: {
              ...s.lines,
              [item.id]: { item, qty: (existing?.qty ?? 0) + 1 },
            },
          };
        }),
      remove: (id) =>
        set((s) => {
          const next = { ...s.lines };
          delete next[id];
          return { lines: next };
        }),
      setQty: (id, qty) =>
        set((s) => {
          if (qty <= 0) {
            const next = { ...s.lines };
            delete next[id];
            return { lines: next };
          }
          return { lines: { ...s.lines, [id]: { ...s.lines[id], qty } } };
        }),
      clear: () => set({ lines: {} }),
      count: () => Object.values(get().lines).reduce((n, l) => n + l.qty, 0),
      total: () => Object.values(get().lines).reduce((n, l) => n + l.qty * l.item.price, 0),
    }),
    { name: "aurum-cart" }
  )
);
