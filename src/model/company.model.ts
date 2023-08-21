import { Schema, model } from "mongoose";

const companySchema = new Schema({
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
});

export default model("Company", companySchema);
