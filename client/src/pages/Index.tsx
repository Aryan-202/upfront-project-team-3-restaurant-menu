import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { ChevronRight, Sparkles, ScanLine } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const url = typeof window !== "undefined" ? `${window.location.origin}/menu?table=12` : "/menu";

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* decorative gold orbs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-primary-glow/10 blur-3xl" />

      <section className="container relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-primary"
        >
          <Sparkles className="h-3 w-3" />
          Aurum · Fine Dining
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl leading-[1.05] tracking-tight text-foreground sm:text-7xl md:text-8xl"
        >
          Taste, <span className="text-gold italic">re-imagined</span>
          <br /> in <span className="text-gold">augmented reality</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          Scan, see your dish in 3D, explore ingredients with floating labels,
          and order with a tap. No app, no wait.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button asChild variant="hero" size="lg" className="rounded-full px-8">
            <Link to="/menu">
              Open Menu <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Table 12 · Ready to order
          </span>
        </motion.div>

        {/* QR card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="glass shadow-elegant mt-16 grid w-full max-w-2xl gap-6 rounded-3xl p-6 sm:grid-cols-[auto_1fr] sm:p-8"
        >
          <div className="mx-auto rounded-2xl bg-foreground p-4">
            <QRCodeSVG value={url} size={140} bgColor="transparent" fgColor="#0a0a0a" level="M" />
          </div>
          <div className="text-left">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-primary">
              <ScanLine className="h-3 w-3" /> Restaurant QR · Table 12
            </div>
            <h3 className="mt-2 font-display text-2xl text-foreground">Scan from any phone</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Each table has its own QR. Guests open the menu instantly — no
              login, no download.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-wider text-muted-foreground">
              <span className="glass rounded-full px-3 py-1">Mobile-first</span>
              <span className="glass rounded-full px-3 py-1">AR-ready</span>
              <span className="glass rounded-full px-3 py-1">Guest-friendly</span>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Index;
