import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Culture from './components/Culture';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import type { MenuItemType } from './types';

function App() {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/menu');
        const data = await response.json();
        
        // Map backend data to frontend type
        const mappedData = data.map((item: any) => ({
          id: item._id,
          name: item.name,
          desc: item.category || 'Delicious main course',
          price: item.price,
          img: item.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop'
        }));
        
        setMenuItems(mappedData);
      } catch (error) {
        console.error('Error fetching menu:', error);
        // Fallback to empty or mock if needed
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  // Filter items by category for sections
  const breakfastItems = menuItems.filter(item => item.desc.toLowerCase().includes('breakfast')) || [];
  const lunchItems = menuItems.filter(item => item.desc.toLowerCase().includes('lunch')) || [];

  return (
    <div className="bg-[#F9F5EE] min-h-screen font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        
        {loading ? (
          <div className="text-center py-20">Loading menu...</div>
        ) : (
          <>
            <MenuSection 
              title="Breakfast Special Menu" 
              icon="🍳" 
              items={breakfastItems.length > 0 ? breakfastItems : menuItems.slice(0, 8)} 
              bg="bg-white" 
            />
            
            <Culture />
            
            <MenuSection 
              title="Lunch Special Menu" 
              icon="🍲" 
              items={lunchItems.length > 0 ? lunchItems : menuItems.slice(8, 16)} 
              bg="bg-[#F9F5EE]" 
            />
            
            <Testimonial />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;