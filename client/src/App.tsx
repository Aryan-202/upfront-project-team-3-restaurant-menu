import { useState } from 'react';
import { mockMenuItems, categories } from './data/mock';
import type { MenuItem } from './data/mock';
import { MenuItemCard } from './components/MenuItemCard';
import { ARViewer } from './components/ARViewer';
import { ScrollArea, ScrollBar } from './components/ui/scroll-area';
import { Button } from './components/ui/button';
import { QrCode, Search, Menu as MenuIcon } from 'lucide-react';
import './index.css';

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [arItem, setArItem] = useState<MenuItem | null>(null);

  const filteredItems = activeCategory === "All" 
    ? mockMenuItems 
    : mockMenuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans w-full max-w-md mx-auto relative shadow-2xl overflow-hidden flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border/50 px-4 py-4 flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary m-0 mt-2">
            SmartMenu
          </h1>
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">AR Experience</p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="w-5 h-5 text-foreground" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full border-primary/20 bg-primary/5">
            <QrCode className="w-5 h-5 text-primary" />
          </Button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-24">
        {/* Hero Section */}
        <div className="px-4 py-6">
          <div className="rounded-3xl bg-gradient-to-br from-accent/20 to-primary/10 p-6 flex flex-col items-start relative overflow-hidden border border-accent/10">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />
            <h2 className="text-2xl font-heading font-bold mb-2 relative z-10 text-foreground">See it before you eat it.</h2>
            <p className="text-muted-foreground text-sm max-w-[80%] relative z-10">Tap View in AR on any item to project it onto your table.</p>
          </div>
        </div>

        {/* Categories */}
        <div className="pt-2 pb-4 px-0">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex w-max space-x-3 px-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "secondary"}
                  className={`rounded-full px-6 transition-all duration-300 ${
                    activeCategory === category 
                      ? "bg-foreground text-background shadow-md shadow-foreground/20" 
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="invisible" />
          </ScrollArea>
        </div>

        {/* Menu Items Grid */}
        <div className="px-4 py-2 flex flex-col gap-5">
          <h3 className="font-heading font-bold text-xl mb-1">{activeCategory} Menu</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {filteredItems.map(item => (
              <MenuItemCard 
                key={item.id} 
                item={item} 
                onViewAR={setArItem} 
              />
            ))}
          </div>
        </div>
      </main>

      {/* Floating Action Button (Cart) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-20">
        <Button className="rounded-full shadow-xl shadow-primary/30 px-8 py-6 bg-primary text-primary-foreground font-bold hover:bg-primary/90 hover:scale-105 transition-all">
          <MenuIcon className="w-5 h-5 mr-2" />
          View Order (0)
        </Button>
      </div>

      {/* AR Viewer Overlay */}
      {arItem && (
        <ARViewer 
          item={arItem} 
          onClose={() => setArItem(null)} 
        />
      )}
    </div>
  );
}

export default App;
