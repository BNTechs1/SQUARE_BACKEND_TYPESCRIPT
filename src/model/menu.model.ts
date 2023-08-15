import { Schema, model } from "mongoose";

const recipe = new Schema({
  name: {
    type: String,
  },
  value: {
    type: Number,
  },
});

const menuSchema = new Schema({
  type: {
    type: String,
  },
  category: {
    type: String,
  },
  name: {
    type: String,
    maxlength: 50,
  },
  size: {
    type: String,
    maxlength: 50,
  },
  price: {
    type: Number
  },
  description: {
    type: String,
    maxlength: 2000,
  },
  files: {
    type: Array
  },
  recipe: { type: [recipe], default: [] },
})

export default model("Menu", menuSchema);