import { Schema, model } from "mongoose";

const paymentSchema = new Schema({
    amount: { type: Number },
    createdAt: { type: Date, default: Date.now },
    acceptedBy: {
        type: String,
    },
    tabId: {
        type: String
    },
    paymentMethod: {
        type: String,
    },
});

export default model("payment", paymentSchema);