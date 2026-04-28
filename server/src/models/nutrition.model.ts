import mongoose, { Schema } from 'mongoose';
import type { INutrition } from '../@types/models';

const NutritionSchema = new Schema<INutrition>(
  {
    calories: { type: Number, required: true },
    protein: { type: String, required: true },
    carbohydrates: { type: String, required: true },
    fats: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    allergens: [{ type: String }],
    arHighlights: [
      {
        label: { type: String, required: true },
        value: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

export const Nutrition = mongoose.model<INutrition>('Nutrition', NutritionSchema);
export default Nutrition;
