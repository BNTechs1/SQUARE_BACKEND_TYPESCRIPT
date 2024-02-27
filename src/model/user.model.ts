import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user.interface"
const userSchema = new Schema<IUser>({
  phoneNumber: {
    type: String,
    required: [true, "phoneNumber name is required."],
    minlength: 9,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  role: {
    type: String,
    required: [true, "Please Specify user Role"],
    // ADMIN // CASHER // PURCHASER //CUSTOMER
  },
  firstTimeLogin:{
    type:Boolean, 
    default: true
  }, 
  employeeId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

export default model<IUser>("User", userSchema);
