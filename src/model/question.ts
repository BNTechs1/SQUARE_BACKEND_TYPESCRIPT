import { Schema, model } from "mongoose";

const questionSchema = new Schema({
  questionId: { type: String, required: true },
  levelId: { type: String, required: true },
  answer: { type: String, required: true },
  question: { type: String, required: true },
  questionType: {
    type: String,
    enum: ["CHOOSE", "TRUE/FALSE"],
    required: true,
  },
  chooses: [{ type: String }],
  duration: { type: Number, required: true },
});

export default model("Question", questionSchema);
