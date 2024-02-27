import { Document } from 'mongoose';

export interface IEmployee extends Document {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  emergencyContact: string;
  salary: number;
  position: string;
  role: string; 
  status:string;
  
}

