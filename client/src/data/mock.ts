export interface Nutrient {
  name: string;
  amount: string;
  benefit: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  calories: number;
  category: string;
  image: string;
  model3DUrl?: string;
  nutrients: Nutrient[];
}

export const mockMenuItems: MenuItem[] = [
  {
    id: "1",
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with melted cheese, fresh tomato, and lettuce on a toasted bun.",
    price: 12.99,
    calories: 650,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
    model3DUrl: "/models/burger.glb",
    nutrients: [
      { name: "Protein", amount: "30g", benefit: "Muscle building" },
      { name: "Carbs", amount: "45g", benefit: "Energy source" },
      { name: "Fat", amount: "35g", benefit: "Satiety" },
      { name: "Vitamin C", amount: "15%", benefit: "Immunity" },
    ]
  },
  {
    id: "2",
    name: "Avocado Toast",
    description: "Smashed avocado on sourdough bread with cherry tomatoes and sesame seeds.",
    price: 9.50,
    calories: 350,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=800",
    model3DUrl: "/models/avocado.glb",
    nutrients: [
      { name: "Good Fats", amount: "15g", benefit: "Heart health" },
      { name: "Fiber", amount: "8g", benefit: "Digestion" },
      { name: "Protein", amount: "6g", benefit: "Muscle support" },
    ]
  },
  {
    id: "3",
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon with a side of asparagus and lemon butter sauce.",
    price: 24.00,
    calories: 420,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=80&w=800",
    model3DUrl: "/models/salmon.glb",
    nutrients: [
      { name: "Protein", amount: "40g", benefit: "Muscle repair" },
      { name: "Omega-3", amount: "High", benefit: "Brain health" },
      { name: "Vitamin D", amount: "50%", benefit: "Bone strength" },
    ]
  },
  {
    id: "4",
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a gooey center, served with vanilla bean ice cream.",
    price: 8.99,
    calories: 850,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=800",
    model3DUrl: "/models/cake.glb",
    nutrients: [
      { name: "Carbs", amount: "85g", benefit: "Quick energy" },
      { name: "Sugar", amount: "60g", benefit: "Sweet treat" },
      { name: "Fat", amount: "45g", benefit: "Rich flavor" },
    ]
  },
  {
    id: "5",
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, parmesan cheese, croutons, and creamy Caesar dressing.",
    price: 11.00,
    calories: 320,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=800",
    model3DUrl: "/models/salad.glb",
    nutrients: [
      { name: "Vitamin K", amount: "40%", benefit: "Bone health" },
      { name: "Fiber", amount: "4g", benefit: "Digestion" },
      { name: "Calcium", amount: "15%", benefit: "Strong teeth" },
    ]
  },
  {
    id: "6",
    name: "Spicy Chicken Wings",
    description: "Crispy fried wings tossed in our signature spicy buffalo sauce.",
    price: 14.50,
    calories: 780,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1569691899455-8ec1464c11f4?auto=format&fit=crop&q=80&w=800",
    model3DUrl: "/models/wings.glb",
    nutrients: [
      { name: "Protein", amount: "28g", benefit: "Muscle building" },
      { name: "Fat", amount: "55g", benefit: "Energy" },
      { name: "Sodium", amount: "1200mg", benefit: "Electrolytes" },
    ]
  }
];

export const categories = ["All", "Burgers", "Starters", "Main Course", "Desserts"];
