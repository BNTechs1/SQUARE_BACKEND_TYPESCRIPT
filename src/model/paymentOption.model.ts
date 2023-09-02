import { Schema, model } from "mongoose";

const PaymentOptions = new Schema({
    name: {
        type: String,
        required: [true, "Custom Error - Required Value *:name is required."],
    },
    files: {
        type: Array
    }
});

export default model("PaymentOptions", PaymentOptions);
