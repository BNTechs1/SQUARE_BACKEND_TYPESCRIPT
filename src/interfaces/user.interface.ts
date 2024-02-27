
import { Document } from 'mongoose';

export interface IUser extends Document {
  phoneNumber: string;
  password: string;
  role: "ADMIN" | "CASHER" | "PURCHASER" | "CUSTOMER";
  employeeId: string;
  firstTimeLogin: boolean;
  createdAt: Date;
}
