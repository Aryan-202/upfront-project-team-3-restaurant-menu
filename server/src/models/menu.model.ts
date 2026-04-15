import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: String,
  price: Number,
  calories: Number,
  category: String,
  image: String,
  model3D: String,
  nutrition: {
    protein: String,
    vitamins: String,
    fats: String
  }
});

export const MenuItem = mongoose.model("MenuItem", menuSchema);