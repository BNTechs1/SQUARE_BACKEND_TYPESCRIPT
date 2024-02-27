import { Document } from 'mongoose';

export interface ICompany extends Document  {
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    emergencyContact: string;
    commission:string;
    type:string
    paymentMethod: string;
  }
  
  