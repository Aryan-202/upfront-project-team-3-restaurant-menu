import mongoose, { Schema } from 'mongoose';
import './nutrition.model';
import { MenuCategory } from '../@types/models';
import type { IMenuItem } from '../@types/models';

const menuSchema = new Schema<IMenuItem>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    category: {
      type: String,
      enum: Object.values(MenuCategory),
      required: true,
    },
    thumbnailUrl: { type: String, required: true },
    
    // AR Models object
    arModels: {
      glbUrl: { type: String, required: true }, // URL to S3 bucket
      usdzUrl: { type: String, required: false }, // Optional, but highly recommended for iOS
    },

    // Establishing the relationship to Nutrition
    nutritionId: {
      type: Schema.Types.ObjectId,
      ref: 'Nutrition',
      required: true,
    },
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// Add indexes for faster querying by category
menuSchema.index({ category: 1 });

export const MenuItem = mongoose.model<IMenuItem>('MenuItem', menuSchema);
export default MenuItem;