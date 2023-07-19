import { Schema, model } from "mongoose";

const employeeSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Username is required."],
    minlength: 3,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
    required: [true, "phoneNumber is required."],
    minlength: 10,
  },
  address: {
    type: String,
    required: [true, "address is required."],
  },
  emergencyContact:{
    type: String,
    required: [true, "emergencyContact is required."],
    minlength: 10,
  },
  salary:{
    type: Number,
    required: [true, "salary is required."],
  },
  position:{
    type: String,
    required: [true, "position is required."],
  },
  role:{
    type:String, 
    default: "NOT_USER"
  }
});

export default model("Employee", employeeSchema);
