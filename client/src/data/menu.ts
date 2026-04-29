import caesar from "@/assets/dish-caesar.jpg";
import wagyu from "@/assets/dish-wagyu.jpg";
import paneer from "@/assets/dish-paneer.jpg";
import lavacake from "@/assets/dish-lavacake.jpg";
import cocktail from "@/assets/dish-cocktail.jpg";
import bruschetta from "@/assets/dish-bruschetta.jpg";
import salmon from "@/assets/dish-salmon.jpg";
import risotto from "@/assets/dish-risotto.jpg";
import calamari from "@/assets/dish-calamari.jpg";
import carpaccio from "@/assets/dish-carpaccio.jpg";
import soup from "@/assets/dish-soup.jpg";
import pasta from "@/assets/dish-pasta.jpg";
import pizza from "@/assets/dish-pizza.jpg";
import burger from "@/assets/dish-burger.jpg";
import lamb from "@/assets/dish-lamb.jpg";
import prawns from "@/assets/dish-prawns.jpg";
import biryani from "@/assets/dish-biryani.jpg";
import salad from "@/assets/dish-salad.jpg";
import brulee from "@/assets/dish-brulee.jpg";
import tiramisu from "@/assets/dish-tiramisu.jpg";
import icecream from "@/assets/dish-icecream.jpg";
import wine from "@/assets/dish-wine.jpg";
import lassi from "@/assets/dish-lassi.jpg";
import coffee from "@/assets/dish-coffee.jpg";

export type Category = "Starters" | "Main Course" | "Veg" | "Non-Veg" | "Desserts" | "Drinks";

export const categories: Category[] = [
  "Starters",
  "Main Course",
  "Veg",
  "Non-Veg",
  "Desserts",
  "Drinks",
];

export interface Ingredient {
  name: string;
  benefit: string;
  position: [number, number, number];
  color?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  category: Category;
  veg: boolean;
  image: string;
  allergens: string[];
  ingredients: Ingredient[];
  modelColor: string;
  shape: "bowl" | "plate" | "glass" | "cake";
}

/* Common ingredient sets (reused across items) */
const ING = {
  veg: [
    { name: "Tomato", benefit: "Vitamin C", position: [0.7, 0.4, 0.2] as [number, number, number], color: "#e74c3c" },
    { name: "Basil", benefit: "Antioxidants", position: [-0.6, 0.5, 0.3] as [number, number, number], color: "#27ae60" },
    { name: "Olive Oil", benefit: "Healthy Fats", position: [0.0, -0.4, 0.4] as [number, number, number], color: "#d4a574" },
  ],
  chicken: [
    { name: "Chicken", benefit: "Lean Protein", position: [0.0, 0.3, 0.5] as [number, number, number], color: "#d4a574" },
    { name: "Garlic", benefit: "Immunity", position: [-0.7, 0.2, 0.0] as [number, number, number], color: "#f5e6c8" },
    { name: "Herbs", benefit: "Vitamins", position: [0.6, 0.5, -0.2] as [number, number, number], color: "#27ae60" },
  ],
  beef: [
    { name: "Beef", benefit: "Iron + B12", position: [0.0, 0.4, 0.3] as [number, number, number], color: "#8b3a2a" },
    { name: "Pepper", benefit: "Antioxidants", position: [0.5, 0.6, 0.0] as [number, number, number], color: "#3a2a1a" },
    { name: "Rosemary", benefit: "Aroma", position: [-0.5, 0.5, 0.2] as [number, number, number], color: "#27ae60" },
  ],
  seafood: [
    { name: "Seafood", benefit: "Omega-3", position: [0.2, 0.4, 0.3] as [number, number, number], color: "#e07a4a" },
    { name: "Lemon", benefit: "Vitamin C", position: [0.7, 0.4, -0.1] as [number, number, number], color: "#f0c040" },
    { name: "Dill", benefit: "Aromatic", position: [-0.6, 0.3, 0.0] as [number, number, number], color: "#5fa14a" },
  ],
  paneer: [
    { name: "Paneer", benefit: "Protein", position: [0.0, 0.4, 0.4] as [number, number, number], color: "#f5e6c8" },
    { name: "Tomato", benefit: "Lycopene", position: [-0.6, 0.3, 0.1] as [number, number, number], color: "#e74c3c" },
    { name: "Cashew", benefit: "Healthy Fats", position: [0.6, 0.4, -0.1] as [number, number, number], color: "#d4a574" },
  ],
  rice: [
    { name: "Rice", benefit: "Energy", position: [0.0, 0.4, 0.4] as [number, number, number], color: "#f5e6c8" },
    { name: "Saffron", benefit: "Mood", position: [0.5, 0.5, 0.0] as [number, number, number], color: "#e0a040" },
    { name: "Ghee", benefit: "Vitamin A", position: [-0.6, 0.4, 0.1] as [number, number, number], color: "#f0d590" },
  ],
  pasta: [
    { name: "Pasta", benefit: "Carbs", position: [0.0, 0.4, 0.4] as [number, number, number], color: "#f5e2a0" },
    { name: "Parmesan", benefit: "Calcium", position: [0.5, 0.5, 0.0] as [number, number, number], color: "#f5e2a0" },
    { name: "Garlic", benefit: "Immunity", position: [-0.5, 0.5, 0.2] as [number, number, number], color: "#f5e6c8" },
  ],
  dessert: [
    { name: "Cocoa", benefit: "Antioxidants", position: [0.0, 0.5, 0.3] as [number, number, number], color: "#3a1f15" },
    { name: "Vanilla", benefit: "Aromatic", position: [-0.6, 0.3, 0.2] as [number, number, number], color: "#f0e0a0" },
    { name: "Sugar", benefit: "Energy", position: [0.5, 0.6, -0.1] as [number, number, number], color: "#ffffff" },
  ],
  drink: [
    { name: "Spirit", benefit: "Aged 12yr", position: [0.0, 0.2, 0.4] as [number, number, number], color: "#c08040" },
    { name: "Citrus", benefit: "Aroma", position: [0.5, 0.6, 0.0] as [number, number, number], color: "#f0c040" },
    { name: "Bitters", benefit: "Balance", position: [-0.5, 0.7, 0.1] as [number, number, number], color: "#8a4a2a" },
  ],
};

type Mk = Partial<MenuItem> & {
  id: string; name: string; tagline: string; price: number; calories: number;
  category: Category; veg: boolean; image: string; shape: MenuItem["shape"];
};

const mk = (m: Mk): MenuItem => ({
  description: m.tagline,
  protein: 12, carbs: 30, fat: 14,
  allergens: [],
  ingredients: ING.veg,
  modelColor: "#c69a4a",
  ...m,
} as MenuItem);

/* ============================== STARTERS (16) ============================== */
const starters: MenuItem[] = [
  mk({ id: "bruschetta", name: "Tomato Basil Bruschetta", tagline: "Sun-ripened tomatoes on toasted artisan bread",
    price: 12, calories: 220, protein: 6, carbs: 28, fat: 9, category: "Starters", veg: true, image: bruschetta,
    allergens: ["Gluten"], modelColor: "#d35a3a", shape: "plate", ingredients: ING.veg }),
  mk({ id: "calamari", name: "Crispy Lemon Calamari", tagline: "Golden calamari rings with garlic aioli",
    price: 16, calories: 340, protein: 18, carbs: 22, fat: 18, category: "Starters", veg: false, image: calamari,
    allergens: ["Gluten", "Shellfish", "Egg"], modelColor: "#e0a060", shape: "plate", ingredients: ING.seafood }),
  mk({ id: "carpaccio", name: "Beef Carpaccio", tagline: "Paper-thin beef, arugula, parmesan, capers",
    price: 22, calories: 280, protein: 24, carbs: 4, fat: 18, category: "Starters", veg: false, image: carpaccio,
    allergens: ["Dairy"], modelColor: "#a02828", shape: "plate", ingredients: ING.beef }),
  mk({ id: "pumpkin-soup", name: "Spiced Pumpkin Velouté", tagline: "Roasted pumpkin, cream, toasted seeds",
    price: 14, calories: 240, protein: 6, carbs: 28, fat: 12, category: "Starters", veg: true, image: soup,
    allergens: ["Dairy"], modelColor: "#e07a20", shape: "bowl",
    ingredients: [
      { name: "Pumpkin", benefit: "Vitamin A", position: [0.6, 0.4, 0.2], color: "#e07a20" },
      { name: "Cream", benefit: "Calcium", position: [-0.6, 0.4, 0.2], color: "#fbf6e8" },
      { name: "Seeds", benefit: "Magnesium", position: [0.0, 0.5, 0.0], color: "#5a8a4a" },
    ] }),
  mk({ id: "caesar", name: "Grilled Chicken Caesar", tagline: "Charred chicken, crisp romaine, parmesan",
    price: 18, calories: 410, protein: 38, carbs: 14, fat: 22, category: "Starters", veg: false, image: caesar,
    allergens: ["Dairy", "Egg"], modelColor: "#c69a4a", shape: "bowl", ingredients: ING.chicken }),
  mk({ id: "burrata", name: "Heirloom Burrata", tagline: "Creamy burrata, heirloom tomatoes, basil oil",
    price: 19, calories: 320, protein: 14, carbs: 12, fat: 24, category: "Starters", veg: true, image: bruschetta,
    allergens: ["Dairy"], modelColor: "#f5e6d0", shape: "plate", ingredients: ING.veg }),
  mk({ id: "tuna-tartare", name: "Tuna Tartare", tagline: "Yellowfin, avocado, sesame, ponzu",
    price: 24, calories: 290, protein: 26, carbs: 10, fat: 16, category: "Starters", veg: false, image: carpaccio,
    allergens: ["Fish", "Sesame", "Soy"], modelColor: "#c0303a", shape: "plate", ingredients: ING.seafood }),
  mk({ id: "mushroom-soup", name: "Wild Mushroom Soup", tagline: "Porcini, cream, truffle oil",
    price: 15, calories: 280, protein: 8, carbs: 20, fat: 18, category: "Starters", veg: true, image: soup,
    allergens: ["Dairy"], modelColor: "#7a5a3a", shape: "bowl", ingredients: ING.veg }),
  mk({ id: "shrimp-cocktail", name: "Tiger Shrimp Cocktail", tagline: "Chilled tiger shrimp, citrus marie-rose",
    price: 21, calories: 220, protein: 28, carbs: 6, fat: 8, category: "Starters", veg: false, image: prawns,
    allergens: ["Shellfish", "Egg"], modelColor: "#e07a4a", shape: "plate", ingredients: ING.seafood }),
  mk({ id: "spring-rolls", name: "Garden Spring Rolls", tagline: "Vegetable spring rolls, sweet chilli",
    price: 11, calories: 260, protein: 6, carbs: 32, fat: 12, category: "Starters", veg: true, image: calamari,
    allergens: ["Gluten", "Soy"], modelColor: "#d4a560", shape: "plate", ingredients: ING.veg }),
  mk({ id: "scallops", name: "Seared Hokkaido Scallops", tagline: "Pan-seared scallops, cauliflower purée",
    price: 28, calories: 260, protein: 22, carbs: 12, fat: 14, category: "Starters", veg: false, image: carpaccio,
    allergens: ["Shellfish", "Dairy"], modelColor: "#f0e2c0", shape: "plate", ingredients: ING.seafood }),
  mk({ id: "french-onion", name: "French Onion Soup", tagline: "Slow-caramelised onion, gruyère croûte",
    price: 14, calories: 320, protein: 12, carbs: 28, fat: 16, category: "Starters", veg: true, image: soup,
    allergens: ["Gluten", "Dairy"], modelColor: "#5a3a1f", shape: "bowl", ingredients: ING.veg }),
  mk({ id: "samosa", name: "Truffle Samosa Trio", tagline: "Crisp pastry, spiced potato, truffle oil",
    price: 13, calories: 380, protein: 8, carbs: 42, fat: 18, category: "Starters", veg: true, image: calamari,
    allergens: ["Gluten"], modelColor: "#d4a560", shape: "plate", ingredients: ING.veg }),
  mk({ id: "chicken-wings", name: "Glazed Chicken Wings", tagline: "Honey-soy glazed wings, sesame",
    price: 17, calories: 480, protein: 28, carbs: 18, fat: 30, category: "Starters", veg: false, image: prawns,
    allergens: ["Soy", "Sesame"], modelColor: "#c0603a", shape: "plate", ingredients: ING.chicken }),
  mk({ id: "edamame", name: "Sea Salt Edamame", tagline: "Steamed edamame pods, flaked sea salt",
    price: 9, calories: 180, protein: 14, carbs: 12, fat: 6, category: "Starters", veg: true, image: salad,
    allergens: ["Soy"], modelColor: "#5fa14a", shape: "bowl", ingredients: ING.veg }),
  mk({ id: "duck-pate", name: "Duck Liver Pâté", tagline: "Smooth pâté, fig jam, toasted brioche",
    price: 23, calories: 410, protein: 16, carbs: 22, fat: 28, category: "Starters", veg: false, image: carpaccio,
    allergens: ["Gluten", "Dairy", "Egg"], modelColor: "#7a3a2a", shape: "plate", ingredients: ING.beef }),
];

/* ============================== MAIN COURSE (17) ============================== */
const mains: MenuItem[] = [
  mk({ id: "wagyu", name: "Truffle Wagyu Steak", tagline: "A5 wagyu, black truffle, jus reduction",
    price: 64, calories: 720, protein: 52, carbs: 4, fat: 56, category: "Main Course", veg: false, image: wagyu,
    modelColor: "#7a2e1f", shape: "plate", ingredients: ING.beef }),
  mk({ id: "salmon", name: "Cedar Plank Salmon", tagline: "Atlantic salmon, asparagus, lemon butter",
    price: 32, calories: 480, protein: 42, carbs: 8, fat: 28, category: "Main Course", veg: false, image: salmon,
    allergens: ["Fish", "Dairy"], modelColor: "#e07a4a", shape: "plate", ingredients: ING.seafood }),
  mk({ id: "risotto", name: "Wild Mushroom Risotto", tagline: "Arborio rice, porcini, parmesan",
    price: 26, calories: 580, protein: 14, carbs: 72, fat: 22, category: "Main Course", veg: true, image: risotto,
    allergens: ["Dairy"], modelColor: "#cdb88a", shape: "bowl", ingredients: ING.rice }),
  mk({ id: "carbonara", name: "Truffle Carbonara", tagline: "Spaghetti, pancetta, egg yolk, pecorino",
    price: 24, calories: 620, protein: 22, carbs: 68, fat: 28, category: "Main Course", veg: false, image: pasta,
    allergens: ["Gluten", "Dairy", "Egg"], modelColor: "#e8d090", shape: "plate", ingredients: ING.pasta }),
  mk({ id: "pizza-margherita", name: "Pizza Margherita", tagline: "San Marzano, fior di latte, basil",
    price: 18, calories: 760, protein: 26, carbs: 88, fat: 28, category: "Main Course", veg: true, image: pizza,
    allergens: ["Gluten", "Dairy"], modelColor: "#d83a2a", shape: "plate", ingredients: ING.veg }),
  mk({ id: "wagyu-burger", name: "Wagyu Truffle Burger", tagline: "Wagyu patty, aged cheddar, brioche",
    price: 28, calories: 880, protein: 42, carbs: 52, fat: 52, category: "Main Course", veg: false, image: burger,
    allergens: ["Gluten", "Dairy"], modelColor: "#5a2418", shape: "plate", ingredients: ING.beef }),
  mk({ id: "lamb-rack", name: "Herb-Crusted Lamb Rack", tagline: "Rack of lamb, pomegranate, jus",
    price: 42, calories: 640, protein: 48, carbs: 8, fat: 44, category: "Main Course", veg: false, image: lamb,
    modelColor: "#7a2818", shape: "plate", ingredients: ING.beef }),
  mk({ id: "tandoori-prawns", name: "Tandoori Tiger Prawns", tagline: "Smoky tandoori prawns, mint chutney",
    price: 34, calories: 380, protein: 36, carbs: 8, fat: 20, category: "Main Course", veg: false, image: prawns,
    allergens: ["Shellfish", "Dairy"], modelColor: "#d83a1a", shape: "plate", ingredients: ING.seafood }),
  mk({ id: "veg-biryani", name: "Royal Vegetable Biryani", tagline: "Basmati rice, saffron, vegetables, cashew",
    price: 22, calories: 620, protein: 12, carbs: 88, fat: 20, category: "Main Course", veg: true, image: biryani,
    allergens: ["Dairy", "Nuts"], modelColor: "#e0a040", shape: "bowl", ingredients: ING.rice }),
  mk({ id: "chicken-biryani", name: "Hyderabadi Chicken Biryani", tagline: "Slow-dum chicken biryani, raita",
    price: 26, calories: 720, protein: 32, carbs: 78, fat: 28, category: "Main Course", veg: false, image: biryani,
    allergens: ["Dairy", "Nuts"], modelColor: "#d09030", shape: "bowl", ingredients: ING.chicken }),
  mk({ id: "pasta-arrabiata", name: "Penne Arrabiata", tagline: "Penne, fiery tomato, chilli, garlic",
    price: 19, calories: 520, protein: 14, carbs: 72, fat: 18, category: "Main Course", veg: true, image: pasta,
    allergens: ["Gluten"], modelColor: "#d83a2a", shape: "plate", ingredients: ING.pasta }),
  mk({ id: "duck-confit", name: "Duck Leg Confit", tagline: "Slow-cooked duck, cherry gastrique",
    price: 36, calories: 680, protein: 38, carbs: 12, fat: 48, category: "Main Course", veg: false, image: lamb,
    modelColor: "#6a3018", shape: "plate", ingredients: ING.beef }),
  mk({ id: "sea-bass", name: "Mediterranean Sea Bass", tagline: "Whole sea bass, olives, capers, lemon",
    price: 38, calories: 460, protein: 44, carbs: 8, fat: 24, category: "Main Course", veg: false, image: salmon,
    allergens: ["Fish"], modelColor: "#e8d8b0", shape: "plate", ingredients: ING.seafood }),
  mk({ id: "pizza-truffle", name: "Black Truffle Pizza", tagline: "Mozzarella, mushroom, shaved truffle",
    price: 26, calories: 720, protein: 24, carbs: 78, fat: 32, category: "Main Course", veg: true, image: pizza,
    allergens: ["Gluten", "Dairy"], modelColor: "#3a2a1a", shape: "plate", ingredients: ING.veg }),
  mk({ id: "lasagna", name: "Slow-Braised Beef Lasagna", tagline: "Layers of beef ragù, béchamel, parmesan",
    price: 24, calories: 740, protein: 36, carbs: 56, fat: 38, category: "Main Course", veg: false, image: pasta,
    allergens: ["Gluten", "Dairy", "Egg"], modelColor: "#a0301a", shape: "plate", ingredients: ING.beef }),
  mk({ id: "ribeye", name: "Aged Ribeye 350g", tagline: "Dry-aged ribeye, café de Paris butter",
    price: 52, calories: 820, protein: 56, carbs: 2, fat: 64, category: "Main Course", veg: false, image: wagyu,
    allergens: ["Dairy"], modelColor: "#6a2818", shape: "plate", ingredients: ING.beef }),
  mk({ id: "veg-platter", name: "Mediterranean Veg Platter", tagline: "Grilled vegetables, hummus, tabbouleh",
    price: 21, calories: 480, protein: 16, carbs: 52, fat: 22, category: "Main Course", veg: true, image: salad,
    allergens: ["Sesame"], modelColor: "#a0c060", shape: "plate", ingredients: ING.veg }),
];

/* ============================== VEG (16) ============================== */
const vegItems: MenuItem[] = [
  mk({ id: "paneer", name: "Butter Paneer Masala", tagline: "Cottage cheese in tomato cashew gravy",
    price: 22, calories: 540, protein: 24, carbs: 18, fat: 38, category: "Veg", veg: true, image: paneer,
    allergens: ["Dairy", "Nuts"], modelColor: "#d96a3a", shape: "bowl", ingredients: ING.paneer }),
  mk({ id: "dal-makhani", name: "Dal Makhani", tagline: "Slow-cooked black lentils, cream, butter",
    price: 18, calories: 460, protein: 18, carbs: 48, fat: 20, category: "Veg", veg: true, image: paneer,
    allergens: ["Dairy"], modelColor: "#3a2a1a", shape: "bowl", ingredients: ING.veg }),
  mk({ id: "palak-paneer", name: "Palak Paneer", tagline: "Spinach, paneer, garam masala",
    price: 20, calories: 420, protein: 22, carbs: 16, fat: 28, category: "Veg", veg: true, image: paneer,
    allergens: ["Dairy"], modelColor: "#2a5a2a", shape: "bowl", ingredients: ING.paneer }),
  mk({ id: "veg-risotto", name: "Wild Mushroom Risotto", tagline: "Arborio, porcini, truffle oil, parmesan",
    price: 26, calories: 580, protein: 14, carbs: 72, fat: 22, category: "Veg", veg: true, image: risotto,
    allergens: ["Dairy"], modelColor: "#cdb88a", shape: "bowl", ingredients: ING.rice }),
  mk({ id: "med-salad", name: "Mediterranean Bowl", tagline: "Feta, olives, tomato, cucumber, herbs",
    price: 17, calories: 360, protein: 14, carbs: 22, fat: 24, category: "Veg", veg: true, image: salad,
    allergens: ["Dairy"], modelColor: "#3a8a3a", shape: "bowl", ingredients: ING.veg }),
  mk({ id: "veg-pizza", name: "Garden Veg Pizza", tagline: "Bell peppers, olives, mushroom, mozzarella",
    price: 20, calories: 680, protein: 22, carbs: 82, fat: 26, category: "Veg", veg: true, image: pizza,
    allergens: ["Gluten", "Dairy"], modelColor: "#d83a2a", shape: "plate", ingredients: ING.veg }),
  mk({ id: "veg-biryani-2", name: "Saffron Veg Biryani", tagline: "Basmati, saffron, garden vegetables",
    price: 22, calories: 620, protein: 12, carbs: 88, fat: 20, category: "Veg", veg: true, image: biryani,
    allergens: ["Dairy", "Nuts"], modelColor: "#e0a040", shape: "bowl", ingredients: ING.rice }),
  mk({ id: "aloo-gobi", name: "Aloo Gobi", tagline: "Spiced cauliflower and potato",
    price: 16, calories: 320, protein: 8, carbs: 42, fat: 14, category: "Veg", veg: true, image: paneer,
    modelColor: "#e0a830", shape: "bowl", ingredients: ING.veg }),
  mk({ id: "chana-masala", name: "Chana Masala", tagline: "Chickpeas in tangy tomato gravy",
    price: 16, calories: 380, protein: 16, carbs: 48, fat: 12, category: "Veg", veg: true, image: paneer,
    modelColor: "#a04020", shape: "bowl", ingredients: ING.veg }),
  mk({ id: "tofu-stirfry", name: "Sesame Tofu Stir-Fry", tagline: "Crispy tofu, vegetables, sesame glaze",
    price: 19, calories: 420, protein: 20, carbs: 32, fat: 22, category: "Veg", veg: true, image: salad,
    allergens: ["Soy", "Sesame"], modelColor: "#d4a560", shape: "bowl", ingredients: ING.veg }),
  mk({ id: "veg-pasta", name: "Pasta Primavera", tagline: "Spring vegetables, garlic butter, parmesan",
    price: 19, calories: 520, protein: 16, carbs: 68, fat: 20, category: "Veg", veg: true, image: pasta,
    allergens: ["Gluten", "Dairy"], modelColor: "#e8d090", shape: "plate", ingredients: ING.pasta }),
  mk({ id: "stuffed-peppers", name: "Quinoa Stuffed Peppers", tagline: "Bell peppers, quinoa, herbs, feta",
    price: 18, calories: 400, protein: 14, carbs: 48, fat: 16, category: "Veg", veg: true, image: salad,
    allergens: ["Dairy"], modelColor: "#d83a2a", shape: "plate", ingredients: ING.veg }),
  mk({ id: "malai-kofta", name: "Malai Kofta", tagline: "Cottage cheese dumplings in cashew gravy",
    price: 21, calories: 580, protein: 18, carbs: 28, fat: 42, category: "Veg", veg: true, image: paneer,
    allergens: ["Dairy", "Nuts"], modelColor: "#d8a040", shape: "bowl", ingredients: ING.paneer }),
  mk({ id: "baingan", name: "Baingan Bharta", tagline: "Smoked aubergine, onion, tomato",
    price: 17, calories: 320, protein: 8, carbs: 28, fat: 18, category: "Veg", veg: true, image: paneer,
    modelColor: "#5a2a4a", shape: "bowl", ingredients: ING.veg }),
  mk({ id: "veg-burger", name: "Beetroot Quinoa Burger", tagline: "House-made patty, smoked cheese, brioche",
    price: 19, calories: 620, protein: 18, carbs: 62, fat: 30, category: "Veg", veg: true, image: burger,
    allergens: ["Gluten", "Dairy"], modelColor: "#a02060", shape: "plate", ingredients: ING.veg }),
  mk({ id: "navratan", name: "Navratan Korma", tagline: "Nine vegetables in mild cashew curry",
    price: 22, calories: 520, protein: 14, carbs: 38, fat: 32, category: "Veg", veg: true, image: paneer,
    allergens: ["Dairy", "Nuts"], modelColor: "#e0c060", shape: "bowl", ingredients: ING.veg }),
];

/* ============================== NON-VEG (16) ============================== */
const nonVegItems: MenuItem[] = [
  mk({ id: "wagyu-2", name: "A5 Wagyu Steak", tagline: "Premium A5 wagyu, truffle, jus",
    price: 64, calories: 720, protein: 52, carbs: 4, fat: 56, category: "Non-Veg", veg: false, image: wagyu,
    modelColor: "#7a2e1f", shape: "plate", ingredients: ING.beef }),
  mk({ id: "salmon-2", name: "Cedar Plank Salmon", tagline: "Atlantic salmon, asparagus, lemon",
    price: 32, calories: 480, protein: 42, carbs: 8, fat: 28, category: "Non-Veg", veg: false, image: salmon,
    allergens: ["Fish", "Dairy"], modelColor: "#e07a4a", shape: "plate", ingredients: ING.seafood }),
  mk({ id: "lamb-2", name: "Herb-Crusted Lamb Rack", tagline: "Rack of lamb, pomegranate jus",
    price: 42, calories: 640, protein: 48, carbs: 8, fat: 44, category: "Non-Veg", veg: false, image: lamb,
    modelColor: "#7a2818", shape: "plate", ingredients: ING.beef }),
  mk({ id: "tandoori-2", name: "Tandoori Tiger Prawns", tagline: "Smoky tandoori prawns, mint chutney",
    price: 34, calories: 380, protein: 36, carbs: 8, fat: 20, category: "Non-Veg", veg: false, image: prawns,
    allergens: ["Shellfish", "Dairy"], modelColor: "#d83a1a", shape: "plate", ingredients: ING.seafood }),
  mk({ id: "butter-chicken", name: "Butter Chicken", tagline: "Tandoori chicken in tomato cream gravy",
    price: 24, calories: 620, protein: 38, carbs: 16, fat: 42, category: "Non-Veg", veg: false, image: paneer,
    allergens: ["Dairy", "Nuts"], modelColor: "#d8602a", shape: "bowl", ingredients: ING.chicken }),
  mk({ id: "chicken-tikka", name: "Chicken Tikka Masala", tagline: "Charred chicken in spiced gravy",
    price: 23, calories: 580, protein: 36, carbs: 18, fat: 38, category: "Non-Veg", veg: false, image: paneer,
    allergens: ["Dairy"], modelColor: "#c84a1a", shape: "bowl", ingredients: ING.chicken }),
  mk({ id: "rogan-josh", name: "Lamb Rogan Josh", tagline: "Kashmiri lamb curry, aromatic spices",
    price: 28, calories: 640, protein: 38, carbs: 14, fat: 46, category: "Non-Veg", veg: false, image: paneer,
    modelColor: "#7a2818", shape: "bowl", ingredients: ING.beef }),
  mk({ id: "duck-2", name: "Duck Leg Confit", tagline: "Slow-cooked duck, cherry gastrique",
    price: 36, calories: 680, protein: 38, carbs: 12, fat: 48, category: "Non-Veg", veg: false, image: lamb,
    modelColor: "#6a3018", shape: "plate", ingredients: ING.beef }),
  mk({ id: "fish-curry", name: "Goan Fish Curry", tagline: "Coconut fish curry, kokum, curry leaves",
    price: 26, calories: 520, protein: 32, carbs: 18, fat: 32, category: "Non-Veg", veg: false, image: paneer,
    allergens: ["Fish"], modelColor: "#e0a830", shape: "bowl", ingredients: ING.seafood }),
  mk({ id: "carbonara-2", name: "Truffle Carbonara", tagline: "Spaghetti, pancetta, egg yolk",
    price: 24, calories: 620, protein: 22, carbs: 68, fat: 28, category: "Non-Veg", veg: false, image: pasta,
    allergens: ["Gluten", "Dairy", "Egg"], modelColor: "#e8d090", shape: "plate", ingredients: ING.pasta }),
  mk({ id: "wagyu-burger-2", name: "Wagyu Truffle Burger", tagline: "Wagyu patty, aged cheddar, brioche",
    price: 28, calories: 880, protein: 42, carbs: 52, fat: 52, category: "Non-Veg", veg: false, image: burger,
    allergens: ["Gluten", "Dairy"], modelColor: "#5a2418", shape: "plate", ingredients: ING.beef }),
  mk({ id: "chicken-biryani-2", name: "Hyderabadi Chicken Biryani", tagline: "Slow-dum chicken biryani, raita",
    price: 26, calories: 720, protein: 32, carbs: 78, fat: 28, category: "Non-Veg", veg: false, image: biryani,
    allergens: ["Dairy", "Nuts"], modelColor: "#d09030", shape: "bowl", ingredients: ING.chicken }),
  mk({ id: "lamb-biryani", name: "Lucknowi Lamb Biryani", tagline: "Slow-dum lamb biryani, fried onions",
    price: 28, calories: 780, protein: 36, carbs: 78, fat: 32, category: "Non-Veg", veg: false, image: biryani,
    allergens: ["Dairy", "Nuts"], modelColor: "#a06030", shape: "bowl", ingredients: ING.beef }),
  mk({ id: "sea-bass-2", name: "Mediterranean Sea Bass", tagline: "Whole sea bass, olives, capers",
    price: 38, calories: 460, protein: 44, carbs: 8, fat: 24, category: "Non-Veg", veg: false, image: salmon,
    allergens: ["Fish"], modelColor: "#e8d8b0", shape: "plate", ingredients: ING.seafood }),
  mk({ id: "ribeye-2", name: "Aged Ribeye 350g", tagline: "Dry-aged ribeye, café de Paris butter",
    price: 52, calories: 820, protein: 56, carbs: 2, fat: 64, category: "Non-Veg", veg: false, image: wagyu,
    allergens: ["Dairy"], modelColor: "#6a2818", shape: "plate", ingredients: ING.beef }),
  mk({ id: "lasagna-2", name: "Beef Ragù Lasagna", tagline: "Layers of beef ragù, béchamel, parmesan",
    price: 24, calories: 740, protein: 36, carbs: 56, fat: 38, category: "Non-Veg", veg: false, image: pasta,
    allergens: ["Gluten", "Dairy", "Egg"], modelColor: "#a0301a", shape: "plate", ingredients: ING.beef }),
];

/* ============================== DESSERTS (15) ============================== */
const desserts: MenuItem[] = [
  mk({ id: "lavacake", name: "Molten Chocolate Lava", tagline: "Valrhona chocolate, gold leaf, raspberry",
    price: 14, calories: 460, protein: 6, carbs: 52, fat: 28, category: "Desserts", veg: true, image: lavacake,
    allergens: ["Dairy", "Egg", "Gluten"], modelColor: "#3a1f15", shape: "cake", ingredients: ING.dessert }),
  mk({ id: "creme-brulee", name: "Vanilla Crème Brûlée", tagline: "Madagascar vanilla, caramelised sugar",
    price: 12, calories: 380, protein: 6, carbs: 32, fat: 24, category: "Desserts", veg: true, image: brulee,
    allergens: ["Dairy", "Egg"], modelColor: "#e0a040", shape: "cake", ingredients: ING.dessert }),
  mk({ id: "tiramisu", name: "Classic Tiramisu", tagline: "Mascarpone, espresso, savoiardi, cocoa",
    price: 13, calories: 420, protein: 8, carbs: 38, fat: 26, category: "Desserts", veg: true, image: tiramisu,
    allergens: ["Dairy", "Egg", "Gluten"], modelColor: "#5a3018", shape: "cake", ingredients: ING.dessert }),
  mk({ id: "vanilla-icecream", name: "Vanilla Bean Ice Cream", tagline: "Madagascar vanilla, salted caramel, gold",
    price: 10, calories: 320, protein: 5, carbs: 36, fat: 18, category: "Desserts", veg: true, image: icecream,
    allergens: ["Dairy", "Egg"], modelColor: "#f5e6c8", shape: "cake", ingredients: ING.dessert }),
  mk({ id: "chocolate-tart", name: "Dark Chocolate Tart", tagline: "70% dark chocolate, sea salt, hazelnut",
    price: 13, calories: 440, protein: 8, carbs: 42, fat: 28, category: "Desserts", veg: true, image: lavacake,
    allergens: ["Dairy", "Egg", "Gluten", "Nuts"], modelColor: "#2a1a10", shape: "cake", ingredients: ING.dessert }),
  mk({ id: "panna-cotta", name: "Vanilla Panna Cotta", tagline: "Silky vanilla cream, berry compote",
    price: 12, calories: 320, protein: 6, carbs: 28, fat: 22, category: "Desserts", veg: true, image: brulee,
    allergens: ["Dairy"], modelColor: "#fbf6e8", shape: "cake", ingredients: ING.dessert }),
  mk({ id: "cheesecake", name: "New York Cheesecake", tagline: "Classic baked cheesecake, berry coulis",
    price: 13, calories: 480, protein: 9, carbs: 42, fat: 30, category: "Desserts", veg: true, image: tiramisu,
    allergens: ["Dairy", "Egg", "Gluten"], modelColor: "#f5e6c8", shape: "cake", ingredients: ING.dessert }),
  mk({ id: "gulab-jamun", name: "Gulab Jamun", tagline: "Warm milk dumplings in cardamom syrup",
    price: 10, calories: 360, protein: 6, carbs: 52, fat: 14, category: "Desserts", veg: true, image: lavacake,
    allergens: ["Dairy", "Gluten"], modelColor: "#a04018", shape: "cake", ingredients: ING.dessert }),
  mk({ id: "ras-malai", name: "Saffron Ras Malai", tagline: "Cottage cheese in saffron-cardamom milk",
    price: 11, calories: 320, protein: 10, carbs: 38, fat: 14, category: "Desserts", veg: true, image: icecream,
    allergens: ["Dairy", "Nuts"], modelColor: "#f5e6c8", shape: "cake", ingredients: ING.dessert }),
  mk({ id: "sticky-toffee", name: "Sticky Toffee Pudding", tagline: "Date sponge, toffee sauce, cream",
    price: 12, calories: 520, protein: 7, carbs: 62, fat: 28, category: "Desserts", veg: true, image: lavacake,
    allergens: ["Dairy", "Egg", "Gluten"], modelColor: "#5a3018", shape: "cake", ingredients: ING.dessert }),
  mk({ id: "macaron-trio", name: "Macaron Trio", tagline: "Pistachio, raspberry, salted caramel",
    price: 11, calories: 280, protein: 5, carbs: 38, fat: 12, category: "Desserts", veg: true, image: brulee,
    allergens: ["Dairy", "Egg", "Nuts"], modelColor: "#f0c8a0", shape: "cake", ingredients: ING.dessert }),
  mk({ id: "kulfi", name: "Pistachio Kulfi", tagline: "Reduced milk kulfi, pistachio, rose",
    price: 10, calories: 300, protein: 7, carbs: 32, fat: 18, category: "Desserts", veg: true, image: icecream,
    allergens: ["Dairy", "Nuts"], modelColor: "#c0d090", shape: "cake", ingredients: ING.dessert }),
  mk({ id: "souffle", name: "Grand Marnier Soufflé", tagline: "Citrus soufflé, vanilla anglaise",
    price: 15, calories: 380, protein: 8, carbs: 42, fat: 18, category: "Desserts", veg: true, image: brulee,
    allergens: ["Dairy", "Egg", "Gluten"], modelColor: "#e0c080", shape: "cake", ingredients: ING.dessert }),
  mk({ id: "fruit-platter", name: "Seasonal Fruit Platter", tagline: "Selection of premium seasonal fruits",
    price: 14, calories: 220, protein: 3, carbs: 52, fat: 1, category: "Desserts", veg: true, image: salad,
    modelColor: "#e0a040", shape: "cake", ingredients: ING.veg }),
  mk({ id: "affogato", name: "Espresso Affogato", tagline: "Vanilla ice cream, hot espresso, amaretti",
    price: 11, calories: 280, protein: 5, carbs: 32, fat: 14, category: "Desserts", veg: true, image: icecream,
    allergens: ["Dairy", "Gluten", "Nuts"], modelColor: "#3a2010", shape: "cake", ingredients: ING.dessert }),
];

/* ============================== DRINKS (16) ============================== */
const drinks: MenuItem[] = [
  mk({ id: "cocktail", name: "Smoked Gold Martini", tagline: "Aged whisky, smoke, citrus oil",
    price: 18, calories: 180, protein: 0, carbs: 6, fat: 0, category: "Drinks", veg: true, image: cocktail,
    modelColor: "#e0a040", shape: "glass", ingredients: ING.drink }),
  mk({ id: "negroni", name: "Aged Negroni", tagline: "Gin, vermouth, campari, orange",
    price: 16, calories: 220, protein: 0, carbs: 12, fat: 0, category: "Drinks", veg: true, image: cocktail,
    modelColor: "#a02020", shape: "glass", ingredients: ING.drink }),
  mk({ id: "old-fashioned", name: "Old Fashioned", tagline: "Bourbon, demerara, angostura, orange",
    price: 17, calories: 200, protein: 0, carbs: 8, fat: 0, category: "Drinks", veg: true, image: cocktail,
    modelColor: "#a06020", shape: "glass", ingredients: ING.drink }),
  mk({ id: "espresso-martini", name: "Espresso Martini", tagline: "Vodka, espresso, kahlúa",
    price: 17, calories: 240, protein: 1, carbs: 14, fat: 1, category: "Drinks", veg: true, image: cocktail,
    modelColor: "#2a1408", shape: "glass", ingredients: ING.drink }),
  mk({ id: "red-wine", name: "Reserve Cabernet", tagline: "Full-bodied cabernet sauvignon, glass",
    price: 14, calories: 130, protein: 0, carbs: 4, fat: 0, category: "Drinks", veg: true, image: wine,
    modelColor: "#5a0a1a", shape: "glass", ingredients: ING.drink }),
  mk({ id: "white-wine", name: "Reserve Chardonnay", tagline: "Crisp oaked chardonnay, glass",
    price: 14, calories: 120, protein: 0, carbs: 3, fat: 0, category: "Drinks", veg: true, image: wine,
    modelColor: "#e0d490", shape: "glass", ingredients: ING.drink }),
  mk({ id: "champagne", name: "Vintage Champagne", tagline: "Brut champagne, fine bubbles, glass",
    price: 22, calories: 130, protein: 0, carbs: 4, fat: 0, category: "Drinks", veg: true, image: wine,
    modelColor: "#f0e090", shape: "glass", ingredients: ING.drink }),
  mk({ id: "mango-lassi", name: "Saffron Mango Lassi", tagline: "Alphonso mango, yoghurt, saffron",
    price: 9, calories: 240, protein: 6, carbs: 42, fat: 6, category: "Drinks", veg: true, image: lassi,
    allergens: ["Dairy"], modelColor: "#e0a040", shape: "glass", ingredients: ING.drink }),
  mk({ id: "rose-lassi", name: "Rose Lassi", tagline: "Yoghurt, rose syrup, pistachio",
    price: 9, calories: 220, protein: 6, carbs: 38, fat: 5, category: "Drinks", veg: true, image: lassi,
    allergens: ["Dairy", "Nuts"], modelColor: "#e0a0c0", shape: "glass", ingredients: ING.drink }),
  mk({ id: "espresso", name: "Single Origin Espresso", tagline: "Ethiopian beans, double shot",
    price: 5, calories: 5, protein: 0, carbs: 1, fat: 0, category: "Drinks", veg: true, image: coffee,
    modelColor: "#2a1408", shape: "glass", ingredients: ING.drink }),
  mk({ id: "cappuccino", name: "Cappuccino", tagline: "Espresso, steamed milk, velvet foam",
    price: 7, calories: 80, protein: 4, carbs: 8, fat: 4, category: "Drinks", veg: true, image: coffee,
    allergens: ["Dairy"], modelColor: "#a06030", shape: "glass", ingredients: ING.drink }),
  mk({ id: "masala-chai", name: "Royal Masala Chai", tagline: "Black tea, ginger, cardamom, cloves",
    price: 6, calories: 90, protein: 3, carbs: 14, fat: 3, category: "Drinks", veg: true, image: coffee,
    allergens: ["Dairy"], modelColor: "#a06030", shape: "glass", ingredients: ING.drink }),
  mk({ id: "fresh-juice", name: "Cold-Pressed Green", tagline: "Apple, kale, ginger, lemon",
    price: 9, calories: 140, protein: 2, carbs: 32, fat: 0, category: "Drinks", veg: true, image: lassi,
    modelColor: "#5fa14a", shape: "glass", ingredients: ING.drink }),
  mk({ id: "mocktail", name: "Virgin Mojito", tagline: "Lime, mint, soda, brown sugar",
    price: 8, calories: 90, protein: 0, carbs: 22, fat: 0, category: "Drinks", veg: true, image: cocktail,
    modelColor: "#a8d090", shape: "glass", ingredients: ING.drink }),
  mk({ id: "sparkling-water", name: "Sparkling Water", tagline: "Italian sparkling water, citrus",
    price: 5, calories: 0, protein: 0, carbs: 0, fat: 0, category: "Drinks", veg: true, image: cocktail,
    modelColor: "#d0e0f0", shape: "glass", ingredients: ING.drink }),
  mk({ id: "sangria", name: "Spanish Sangria", tagline: "Red wine, brandy, citrus, berries",
    price: 14, calories: 200, protein: 0, carbs: 18, fat: 0, category: "Drinks", veg: true, image: wine,
    modelColor: "#7a1a2a", shape: "glass", ingredients: ING.drink }),
];

export const menu: MenuItem[] = [
  ...starters,
  ...mains,
  ...vegItems,
  ...nonVegItems,
  ...desserts,
  ...drinks,
];

export const getItem = (id: string) => menu.find((m) => m.id === id);
