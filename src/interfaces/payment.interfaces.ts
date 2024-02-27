import { Document } from 'mongoose';

export  interface IPayment extends Document {
    tabId : string,                 
    paymentMethod : string,              
    acceptedBy : string     
    amount : number     
    createdAt : Date     
  }