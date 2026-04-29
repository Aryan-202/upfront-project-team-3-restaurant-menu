import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <div className="flex items-center gap-6 md:gap-10">
          <a href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-2xl text-primary">Savory Bites</span>
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="/" className="flex items-center text-sm font-medium transition-colors hover:text-primary text-foreground">
              Home
            </a>
            <a href="/menu" className="flex items-center text-sm font-medium transition-colors hover:text-primary text-foreground/70">
              Menu
            </a>
            <a href="/portfolio" className="flex items-center text-sm font-medium transition-colors hover:text-primary text-foreground/70">
              Portfolio
            </a>
            <a href="/about" className="flex items-center text-sm font-medium transition-colors hover:text-primary text-foreground/70">
              About
            </a>
            <a href="/contact" className="flex items-center text-sm font-medium transition-colors hover:text-primary text-foreground/70">
              Contact
            </a>
          </nav>
        </div>
        
        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <Button variant="default" size="sm" className="rounded-full px-6 shadow-md hover:shadow-lg transition-shadow">Order Now</Button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle mobile menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <a href="/" className="text-lg font-medium hover:text-primary transition-colors">Home</a>
                <a href="/menu" className="text-lg font-medium hover:text-primary transition-colors">Menu</a>
                <a href="/portfolio" className="text-lg font-medium hover:text-primary transition-colors">Portfolio</a>
                <a href="/about" className="text-lg font-medium hover:text-primary transition-colors">About</a>
                <a href="/contact" className="text-lg font-medium hover:text-primary transition-colors">Contact</a>
                <div className="border-t my-4 pt-4 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">Theme</span>
                    <ModeToggle />
                  </div>
                  <Button variant="default" className="w-full">Order Now</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
