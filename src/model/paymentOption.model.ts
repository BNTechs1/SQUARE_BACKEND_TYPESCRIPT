import { Schema, model } from "mongoose";
import { IPaymentOptions} from "../interfaces/paymentOption.interfaces"
const Image = new Schema({
    url: {
      type:String
    },
    id: {
      type: String
    }
  })
  
const PaymentOptions = new Schema<IPaymentOptions>({
    name: {
        type: String,
        required: [true, "Custom Error - Required Value *:name is required."],
    },
    files: {
        type: [Image], default: []
    }
});

export default model<IPaymentOptions>("PaymentOptions", PaymentOptions);
