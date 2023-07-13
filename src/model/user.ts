import { Schema, model } from "mongoose";

const userSchema = new Schema({
  userId: { type: String, required: true },
  telegramId: { type: Number, required: true },
  fullName: { type: String, required: true },
  userName: { type: String },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, enum: ["ADMIN", "USER"], required: true },
});

export default model("User", userSchema);
