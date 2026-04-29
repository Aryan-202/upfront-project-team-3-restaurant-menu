const menuSchema = new mongoose.Schema(
{
  name: { type: String, required: true },
  tagline: String,
  description: String,

  price: { type: Number, required: true },
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,

  category: { type: String, required: true },
  veg: Boolean,

  image: String,
  model3D: String,
  modelColor: String,
  shape: String,

  allergens: [String],

  ingredients: [
    {
      name: String,
      benefit: String,
      position: [Number],
      color: String
    }
  ],

  nutrients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Nutrition"
    }
  ]
},
{ timestamps: true }
);