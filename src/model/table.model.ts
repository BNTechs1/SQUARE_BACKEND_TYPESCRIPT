import { Schema, model } from "mongoose";

const TableSchema = new Schema({
  name: {
    type: String,
  },
});

export default model("Table", TableSchema);
