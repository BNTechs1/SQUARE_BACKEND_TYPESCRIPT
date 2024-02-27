import { ITab } from "../../interfaces/tab.interfaces";
import PaymentModel from "../../model/payment.model";

export async function getAllPayment() {
  try {
    const payment = await PaymentModel.find();
    return payment;
  } catch (error) {
    // Handle error
    console.error("Error retrieving payment:", error);
    throw error;
  }
}


export async function getTotalPrice(tab: ITab) {
  return tab.orders
    .flatMap((order) => [order.totalPrice])
    .reduce((total, price) => total + price, 0);
}


