import { Schema, model } from "mongoose";
import { ICompany } from "../interfaces/company.interface";

const companySchema = new Schema<ICompany>({
    name: {
        type: String,
        required: [true, "Custom Error - Required Value *:Username is required."],
      },
      email: {
        type: String,
      },
      phoneNumber: {
        type: String,
      },
      type:{
        type:String,
      },
      address: {
        type: String,
      },
      emergencyContact:{
        type: String,
      },
      commission:{
        type: String,
        required: [true, "Custom Error - Required Value *:commission is required."],
      },
      paymentMethod:{
        type: String,
      }
});

export default model<ICompany>("Company", companySchema);
