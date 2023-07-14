import { Schema, model } from "mongoose";
const recipeSchema = new Schema({
  name: {
    type: String,
  },
  value: {
    type: Number,
  },
});

const sizeSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  recipe: { type: [recipeSchema], default: [] },
});

const menuSchema = new Schema({
  menuCat: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "Name is required."],
    maxlength: 50,
  },
  description: {
    type: String,
    required: [true, "Description is required."],
    maxlength: 2000,
  },
  size: { type: [sizeSchema], default: [] },
});


export default model("Menu", menuSchema);