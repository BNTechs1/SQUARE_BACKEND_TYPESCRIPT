import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  categoryId: { type: String, required: true },
  categoryName: { type: String, required: true },
});

export default model("Category", categorySchema);
