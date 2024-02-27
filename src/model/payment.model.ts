import { Schema, model } from "mongoose";
import { IPayment } from "../interfaces/payment.interfaces"
const paymentSchema = new Schema<IPayment>({
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

export default model<IPayment>("payment", paymentSchema);