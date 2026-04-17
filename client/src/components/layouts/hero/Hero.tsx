import { Button } from "@/components/ui/button";

interface HeroProps {
  usingMockData?: boolean;
}

export function Hero({ usingMockData }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-card border-b">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-accent-bg opacity-50 z-0"></div>
      
      <div className="container relative z-10 mx-auto px-4 py-24 lg:py-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6">
          Now Open for Dine-in & Delivery
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-black dark:text-white drop-shadow-sm">
          Experience Culinary <br className="hidden md:block" />
          <span className="text-primary">Excellence</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          Discover a symphony of flavors crafted with passion and the finest ingredients.
          {usingMockData && (
            <span className="hidden">
              {/* Notice silently hidden as requested */}
            </span>
          )}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
          <Button size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-all h-12 px-8 text-base font-semibold">
            Explore Menu
          </Button>
          <Button size="lg" variant="outline" className="rounded-full bg-background/50 backdrop-blur h-12 px-8 text-base font-semibold border-primary/20 hover:bg-primary/5">
            Book a Table
          </Button>
        </div>
      </div>
    </section>
  )
}
