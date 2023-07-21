import { Schema, model } from "mongoose";

const TableSchema = new Schema({
    name: {
        type: String,
        required: [true, "Custom Error - Required Value *:Username is required."],
      },
});

export default model("Table", TableSchema);
