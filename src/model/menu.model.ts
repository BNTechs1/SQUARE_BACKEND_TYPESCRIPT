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
  catagory: {
    type: String,
  },
  name: {
    type: String,
    maxlength: 50,
  }, 
  size:{
    type: String,
    maxlength: 50,
  }, 
  price:{
    type:Number
  },
  description: {
    type: String,
    maxlength: 2000,
  },
  recipe: { type: [recipe], default: [] },
})

export default model("Menu", menuSchema);