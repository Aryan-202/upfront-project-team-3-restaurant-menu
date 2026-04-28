import { Document, Types } from 'mongoose';

// 1. Enums for strict categorization
export enum MenuCategory {
  APPETIZERS = "Appetizers",
  SALADS = "Salads",
  SOUPS = "Soups",
  MAIN_COURSE = "Main Course",
  DESSERTS = "Desserts",
  BEVERAGES = "Beverages",
  KIDS_MENU = "Kids Menu",
  SIDES = "Sides",
}

// 2. Nutrition Interface (The data that overlays on the AR model)
export interface INutrition extends Document {
  calories: number;
  protein: string;     // e.g., "25g"
  carbohydrates: string; 
  fats: string;
  ingredients: string[];
  allergens: string[];
  // Specific highlight labels to float around the AR food
  arHighlights: Array<{
    label: string; // e.g., "Vitamin C", "High Protein"
    value: string; // e.g., "15mg", "Yes"
  }>;
}

// 3. Menu Item Interface (The core product)
export interface IMenuItem extends Document {
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  thumbnailUrl: string; // Standard 2D image for the regular menu list
  
  // The AR specific fields
  arModels: {
    glbUrl: string;  // Required for Web/Android AR
    usdzUrl: string; // Required for iOS Apple Quick Look
  };
  
  // Reference to the nutrition document
  nutritionId: Types.ObjectId | INutrition; 
  isAvailable: boolean;
}
