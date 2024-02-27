import { Schema, model } from "mongoose";
import { IMenu } from "../interfaces/menu.interface";

const Image = new Schema({
  url: {
    type:String
  },
  id: {
    type: String
  }
})

const recipe = new Schema({
  name: {
    type: String,
  },
  value: {
    type: Number,
  },
});

const menuSchema = new Schema<IMenu>({
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
  files: { type: [Image], default: [] },
  recipe: { type: [recipe], default: [] },
})

export default model<IMenu>("Menu", menuSchema);