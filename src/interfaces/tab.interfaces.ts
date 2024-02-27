import { Document } from 'mongoose';


export interface ITab extends Document{
    tabId: string;
    createdAt: Date;
    description: string;
    type: 'DINE_IN' | 'DELIVERY';
    status: 'OPENED' | 'ONGOING' | 'COMPLETED' | 'DELETED' | 'PAID', 
    companyId: string
    companyName: string
    cashierId: string;
    coId:string
    orders: [order], 
}

export interface order {
    orderId: string,
    menuName: string,
    menuPrice: number,
    quantity: number,
    menuId: string,
    totalPrice: number,       // totalPrice = menuPrice * quantity
}