interface Tab {
    tabId: string;
    createdAt: Date;
    type: 'DINE_IN' | 'TAKE_OUT';
    status: 'OPENED' | 'ONGOING' | 'COMPLETED' | 'DELETED'
    cashierId: string;
    orders: order[];
}

interface order {
    orderId: string,
    menuName: string,
    menuPrice: number,
    quantity: number,
    totalPrice: number,       // totalPrice = menuPrice * quantity
}