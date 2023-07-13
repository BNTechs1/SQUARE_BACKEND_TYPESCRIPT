import { Schema, model } from "mongoose";

const resultSchema = new Schema({
  resultId: { type: Schema.Types.ObjectId, ref: "Transaction" },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  levelId: { type: Schema.Types.ObjectId, ref: "Level", required: true },
  moduleId: { type: Schema.Types.ObjectId, ref: "Module", required: true },
  score: { type: Number, default: null },
  isPaid: { type: Boolean, default: false },
  isStarted: { type: Boolean, default: false },
});

export default model("Result", resultSchema);
