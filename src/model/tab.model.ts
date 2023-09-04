import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    orderId: { type: String },
    menuId: { type: String },
    menuName: { type: String },
    menuPrice: { type: Number },
    quantity: { type: Number },
    totalPrice: { type: Number }
});

const tabSchema = new Schema({
    tabId: { type: String },
    createdAt: { type: Date, default: Date.now },
    type: {
        type: String,
        enum: ['DINE_IN', 'DELIVERY']
    },
    
    companyId: {
        type: String
    },
    companyName: {
        type: String
    },
    coId: {
        type: String
    },
    status: {
        type: String,
        // enum: ['OPENED', 'ONGOING', 'COMPLETED', 'DELETED']
    },
    cashierId: { type: String },

    orders: [orderSchema]
});

export default model("tab", tabSchema);