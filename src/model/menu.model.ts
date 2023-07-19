import { Schema, model } from "mongoose";
const recipe = new Schema({
  name: {
    type: String,
  },
  value: {
    type: Number,
  },
});

const size = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  recipe: { type: [recipe], default: [] },
});

const menu = new Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  description: {
    type: String,
    maxlength: 2000,
  },
  size: { type: [size], default: [] },
});

const menuCat = new Schema({
  menuCat: {
    type: String,
  },

  menu: { type: [menu], default: [] },
});

const MenuType = new Schema({
  menuType: {
    type: String,
  },
  menuCat: { type: [menuCat], default: [] },
});

export default model("Menu", MenuType);
