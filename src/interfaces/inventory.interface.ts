import mongoose from "mongoose";

export interface Item extends mongoose.Document {
  name: string;
  unit: string;
  quantity: number;
  rate: number;
  value: number;
  dailyvalue: number;
  requiredValue: number;
  stack: Stack[];
}

export interface Stack {
  price: number;
  quantity: number;
  value: number;
  userId: string;
  userName: string;
  date?:Date
}

