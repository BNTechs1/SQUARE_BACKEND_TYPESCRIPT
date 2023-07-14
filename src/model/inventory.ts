import { Schema, model } from "mongoose";

// const bcrypt = require("bcryptjs");
const stackSchema = new Schema({
  price: {
    type: String,
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
  userID: {
    type: String,
    required: [true, "user Id is required."],
  },
  userName: {
    type: String,
    required: [true, "username is required."],
  },
});
const inventorySchema = new Schema({
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
    required: [true, "quantity is required."],
  },
  rate: {
    type: Number,
    required: [true, "rate is required."],
  },
  value: {
    type: Number,
    required: [true, "value is required."],
  },
  requiredValue: {
    type: Number,
  },
  stack: { type: [stackSchema], default: [] },
});

export default model("inventory", inventorySchema);
