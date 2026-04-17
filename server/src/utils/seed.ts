import { MenuItem } from "../models/menu.model";
import { Nutrition } from "../models/nutrition.model";

interface SeedNutrient {
  name: string;
  amount: string;
  benefit: string;
}

interface SeedMenuItem {
  name: string;
  price: number;
  calories: number;
  category: string;
  image: string;
  model3D?: string;
  nutrients: SeedNutrient[];
}

const seedData: SeedMenuItem[] = [
  {
    name: "Classic Cheeseburger",
    price: 12.99,
    calories: 650,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
    model3D: "/models/burger.glb",
    nutrients: [
      { name: "Protein", amount: "30g", benefit: "Muscle building" },
      { name: "Carbs", amount: "45g", benefit: "Energy source" },
      { name: "Fat", amount: "35g", benefit: "Satiety" },
      { name: "Vitamin C", amount: "15%", benefit: "Immunity" },
    ]
  },
  {
    name: "Avocado Toast",
    price: 9.50,
    calories: 350,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=800",
    model3D: "/models/avocado.glb",
    nutrients: [
      { name: "Good Fats", amount: "15g", benefit: "Heart health" },
      { name: "Fiber", amount: "8g", benefit: "Digestion" },
      { name: "Protein", amount: "6g", benefit: "Muscle support" },
    ]
  },
  {
    name: "Grilled Salmon",
    price: 24.00,
    calories: 420,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=80&w=800",
    model3D: "/models/salmon.glb",
    nutrients: [
      { name: "Protein", amount: "40g", benefit: "Muscle repair" },
      { name: "Omega-3", amount: "High", benefit: "Brain health" },
      { name: "Vitamin D", amount: "50%", benefit: "Bone strength" },
    ]
  },
  {
    name: "Chocolate Lava Cake",
    price: 8.99,
    calories: 850,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=800",
    model3D: "/models/cake.glb",
    nutrients: [
      { name: "Carbs", amount: "85g", benefit: "Quick energy" },
      { name: "Sugar", amount: "60g", benefit: "Sweet treat" },
      { name: "Fat", amount: "45g", benefit: "Rich flavor" },
    ]
  },
  {
    name: "Caesar Salad",
    price: 11.00,
    calories: 320,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=800",
    model3D: "/models/salad.glb",
    nutrients: [
      { name: "Vitamin K", amount: "40%", benefit: "Bone health" },
      { name: "Fiber", amount: "4g", benefit: "Digestion" },
      { name: "Calcium", amount: "15%", benefit: "Strong teeth" },
    ]
  },
  {
    name: "Spicy Chicken Wings",
    price: 14.50,
    calories: 780,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1569691899455-8ec1464c11f4?auto=format&fit=crop&q=80&w=800",
    model3D: "/models/wings.glb",
    nutrients: [
      { name: "Protein", amount: "28g", benefit: "Muscle building" },
      { name: "Fat", amount: "55g", benefit: "Energy" },
      { name: "Sodium", amount: "1200mg", benefit: "Electrolytes" },
    ]
  },
  // Adding 10 more items
  {
    name: "Margherita Pizza",
    price: 15.99,
    calories: 720,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
    model3D: "/models/pizza.glb",
    nutrients: [
      { name: "Carbs", amount: "80g", benefit: "Energy" },
      { name: "Protein", amount: "25g", benefit: "Muscle support" },
      { name: "Calcium", amount: "30%", benefit: "Bone health" },
    ]
  },
  {
    name: "Chicken Caesar Wrap",
    price: 10.50,
    calories: 450,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=800",
    model3D: "/models/wrap.glb",
    nutrients: [
      { name: "Protein", amount: "35g", benefit: "Muscle building" },
      { name: "Fiber", amount: "6g", benefit: "Digestion" },
      { name: "Vitamin A", amount: "20%", benefit: "Vision" },
    ]
  },
  {
    name: "Vegetable Stir Fry",
    price: 13.00,
    calories: 380,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    model3D: "/models/stirfry.glb",
    nutrients: [
      { name: "Vitamin C", amount: "120%", benefit: "Immunity" },
      { name: "Fiber", amount: "10g", benefit: "Gut health" },
      { name: "Iron", amount: "15%", benefit: "Energy" },
    ]
  },
  {
    name: "Beef Tacos",
    price: 11.99,
    calories: 550,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&q=80&w=800",
    model3D: "/models/tacos.glb",
    nutrients: [
      { name: "Protein", amount: "32g", benefit: "Muscle repair" },
      { name: "Iron", amount: "25%", benefit: "Blood health" },
      { name: "Zinc", amount: "20%", benefit: "Immune function" },
    ]
  },
  {
    name: "French Fries",
    price: 5.99,
    calories: 320,
    category: "Sides",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800",
    model3D: "/models/fries.glb",
    nutrients: [
      { name: "Carbs", amount: "50g", benefit: "Energy" },
      { name: "Potassium", amount: "10%", benefit: "Muscle function" },
      { name: "Fat", amount: "15g", benefit: "Satiety" },
    ]
  },
  {
    name: "Mushroom Risotto",
    price: 18.00,
    calories: 480,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800",
    model3D: "/models/risotto.glb",
    nutrients: [
      { name: "Carbs", amount: "60g", benefit: "Energy" },
      { name: "Vitamin D", amount: "10%", benefit: "Bone health" },
      { name: "Selenium", amount: "30%", benefit: "Antioxidant" },
    ]
  },
  {
    name: "Tiramisu",
    price: 7.50,
    calories: 420,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800",
    model3D: "/models/tiramisu.glb",
    nutrients: [
      { name: "Sugar", amount: "35g", benefit: "Quick energy" },
      { name: "Calcium", amount: "20%", benefit: "Bone strength" },
      { name: "Fat", amount: "25g", benefit: "Flavor" },
    ]
  },
  {
    name: "Greek Salad",
    price: 9.99,
    calories: 280,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800",
    model3D: "/models/greeksalad.glb",
    nutrients: [
      { name: "Vitamin K", amount: "50%", benefit: "Blood clotting" },
      { name: "Fiber", amount: "5g", benefit: "Digestion" },
      { name: "Omega-3", amount: "Low", benefit: "Heart health" },
    ]
  },
  {
    name: "Pasta Carbonara",
    price: 16.50,
    calories: 650,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?auto=format&fit=crop&q=80&w=800",
    model3D: "/models/carbonara.glb",
    nutrients: [
      { name: "Carbs", amount: "70g", benefit: "Energy" },
      { name: "Protein", amount: "28g", benefit: "Muscle building" },
      { name: "Fat", amount: "35g", benefit: "Satiety" },
    ]
  },
  {
    name: "Fruit Salad",
    price: 6.99,
    calories: 150,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&q=80&w=800",
    model3D: "/models/fruitsalad.glb",
    nutrients: [
      { name: "Vitamin C", amount: "100%", benefit: "Immunity" },
      { name: "Fiber", amount: "7g", benefit: "Digestion" },
      { name: "Antioxidants", amount: "High", benefit: "Cell protection" },
    ]
  },
  {
    name: "BBQ Ribs",
    price: 22.00,
    calories: 800,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    model3D: "/models/ribs.glb",
    nutrients: [
      { name: "Protein", amount: "45g", benefit: "Muscle repair" },
      { name: "Iron", amount: "30%", benefit: "Oxygen transport" },
      { name: "Zinc", amount: "25%", benefit: "Immune support" },
    ]
  }
];

export const seedDatabase = async () => {
  try {
    // Clear existing data
    await MenuItem.deleteMany({});
    await Nutrition.deleteMany({});

    for (const item of seedData) {
      // Create nutrition documents
      const nutritionDocs = await Nutrition.insertMany(item.nutrients);

      // Get the IDs
      const nutrientIds = nutritionDocs.map(doc => doc._id);

      // Create menu item with nutrient references
      const menuItem = new MenuItem({
        name: item.name,
        price: item.price,
        calories: item.calories,
        category: item.category,
        image: item.image,
        model3D: item.model3D,
        nutrients: nutrientIds
      });

      await menuItem.save();
    }

    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

export const categories = ["All", "Burgers", "Starters", "Main Course", "Desserts", "Sides"];
