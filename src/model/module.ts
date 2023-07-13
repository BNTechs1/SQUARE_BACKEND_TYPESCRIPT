import { Schema, model } from "mongoose";

const moduleSchema = new Schema({
  moduleId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  categoryId: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  levels: [{ type: Schema.Types.ObjectId, ref: "Level" }],
});

export default model("Module", moduleSchema);
