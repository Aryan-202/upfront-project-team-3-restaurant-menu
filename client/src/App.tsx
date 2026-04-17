import { useState, useEffect } from 'react'
import { mockMenuItems, type MenuItem } from '@/data/mock'
import { Header } from '@/components/layouts/header/Header'
import { Hero } from '@/components/layouts/hero/Hero'
import { Footer } from '@/components/layouts/footer/Footer'
import { MenuContent } from '@/components/layouts/menu/MenuContent'
import { ThemeProvider } from './components/theme-provider'

function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const [usingMockData, setUsingMockData] = useState(false)

  useEffect(() => {
    fetchMenuItems()
  }, [])

  const fetchMenuItems = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || ""
      const response = await fetch(`${apiUrl}/api/menu`)
      if (!response.ok) {
        throw new Error('Failed to fetch menu items')
      }
      const data = await response.json()
      setMenuItems(data.data)
      setUsingMockData(false)
    } catch (err) {
      console.warn('API not available, using mock data:', err)
      // Fallback to mock data
      setMenuItems(mockMenuItems)
      setUsingMockData(true)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="min-h-screen bg-background flex flex-col">
          <Header />
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground font-medium animate-pulse">Loading amazing food...</p>
            </div>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background flex flex-col font-sans">
        <Header />
        
        <main className="flex-1">
          <Hero usingMockData={usingMockData} />
          
          {/* We can add Portfolio Section or other sections here as well */}
          <section className="bg-muted/30 py-16" id="portfolio">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Our Culinary Portfolio</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden hover:opacity-90 transition-opacity">
                  <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60" alt="Dish 1" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden hover:opacity-90 transition-opacity">
                  <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&auto=format&fit=crop&q=60" alt="Dish 2" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden hover:opacity-90 transition-opacity md:col-span-2 row-span-2 relative group">
                  <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=60" alt="Signature Dish" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-bold text-xl drop-shadow-md">Signature Collection</span>
                  </div>
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden hover:opacity-90 transition-opacity">
                  <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60" alt="Dish 3" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden hover:opacity-90 transition-opacity">
                  <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&auto=format&fit=crop&q=60" alt="Dish 4" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>

          <MenuContent menuItems={menuItems} />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App