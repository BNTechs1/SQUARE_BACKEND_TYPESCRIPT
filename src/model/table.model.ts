import { Schema, model } from "mongoose";
import { ITable } from "../interfaces/table.interface"
const TableSchema = new Schema<ITable>({
  name: {
    type: String,
  },
});

export default model<ITable>("Table", TableSchema);
