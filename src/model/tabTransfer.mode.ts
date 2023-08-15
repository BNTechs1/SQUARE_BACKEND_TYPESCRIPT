import { Schema, model } from "mongoose";

const tabTransferSchema = new Schema({
    tabId: {
      type: String,
      required: true
    },
    fromCashier: {
      type: String, 
      required: true
    },
    toCashier: {
      type: String,
      required: true
    },
    transferTime: {
      type: Date,
      required: true
    },
    status: { 
      type: String,
      default: "PENDING"
    },
    reason: {
      type: String
    }
  });
  
  export default model("tabTransfers", tabTransferSchema);