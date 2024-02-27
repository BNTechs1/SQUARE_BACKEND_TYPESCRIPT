import { Schema, model } from "mongoose";
import { IInventory } from "../interfaces/inventory.interface";

// const bcrypt = require("bcryptjs");
const stackSchema = new Schema({
  price: {
    type: Number,
  },
  date: { type: Date, default: Date.now },
  
  quantity: {
    type: Number,
    required: [true, "quantity is required."],
  },
  value: {
    type: Number,
    required: [true, "value is required."],
  },
  userId: {
    type: String,
    required: [true, "user Id is required."],
  },
  userName: {
    type: String,
    required: [true, "username is required."],
  },
});

const inventorySchema = new Schema<IInventory>({
  name: {
    type: String,
    required: [true, "name is required."],
    validate: /^[a-zA-Z ]*$/,
  },
  unit: {
    type: String,
  },
  quantity: {
    type: Number,
    default: 0
  },
  rate: {
    type: Number,
    required: [true, "rate is required."],
  },
  value: {
    type: Number,
    // required: [true, "value is required."],
    default: 0
  },
  dailyvalue: {
    type: Number,
    // required: [true, "value is required."],
    default: 0

  },

  requiredValue: {
    type: Number,
  },
  stack: { type: [stackSchema], default: [] },
});

export default model<IInventory>("inventory", inventorySchema);
