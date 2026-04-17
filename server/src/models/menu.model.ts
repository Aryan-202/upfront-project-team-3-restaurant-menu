import mongoose from "mongoose";
import "./nutrition.model";

const menuSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    calories: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    model3D: { type: String, required: false },
    nutrients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Nutrition"
      }
    ]
  },
  {
    timestamps: true
  }
);

export const MenuItem = mongoose.model("MenuItem", menuSchema);