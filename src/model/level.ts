import { Schema, model } from "mongoose";

const levelSchema = new Schema({
  levelId: { type: String, required: true },
  moduleId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  level: { type: Number, required: true },
  price: { type: Number, required: true },
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
});

export default model("Level", levelSchema);
