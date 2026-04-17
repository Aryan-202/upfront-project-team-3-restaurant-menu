import mongoose from "mongoose";

const nutritionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    amount: { type: String, required: true },
    benefit: { type: String, required: false }
  },
  {
    timestamps: false,
    _id: true
  }
);

export const Nutrition = mongoose.model("Nutrition", nutritionSchema);
