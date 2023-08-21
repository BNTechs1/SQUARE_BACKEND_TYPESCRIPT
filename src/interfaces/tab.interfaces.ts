export interface Tab {
    tabId: string;
    createdAt: Date;
    type: 'DINE_IN' | 'DELIVERY';
    status: 'OPENED' | 'ONGOING' | 'COMPLETED' | 'DELETED', 
    companyId: string
    companyName: string
    cashierId: string;
    coId:string
    orders: order[], 
}

export interface order {
    orderId: string,
    menuName: string,
    menuPrice: number,
    quantity: number,
    menuId: string,
    totalPrice: number,       // totalPrice = menuPrice * quantity
}