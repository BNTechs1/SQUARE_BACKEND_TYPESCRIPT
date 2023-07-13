import { Schema, model } from "mongoose";

const employeeSchema = new Schema({
  userName: {
    type: String,
  },
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  address: {
    type: String,
  },
  emergencyContact: {
    type: String,
  },
  salary: {
    type: String,
  },
  position: {
    type: String,
  },
});

export default model("Employee", employeeSchema);
