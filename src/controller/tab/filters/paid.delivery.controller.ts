import Payment from '../../../model/payment.model'
import Tab from '../../../model/tab.model'; // Assuming this is the import path for your tab model
import { Request, Response } from "express";
export const getPaid =  async (req:Request, res:Response) => {
  try {
    // Find tabs that match the criteria
    const completedTabs = await Tab.find({ status: 'PAID', type: 'DELIVERY' });

    // Extract tabIds from the matching tabs
    const tabIds = completedTabs.map((tab) => tab.tabId);

    // Find payments that have matching tabIds
    const payments = await Payment.find({ tabId: { $in: tabIds } });

    // Combine the matching tabs and payments
    const result = completedTabs.map((tab) => {
      const matchingPayments = payments.filter((payment) => payment.tabId === tab.tabId);

      return {
        ...tab.toObject(),
        payment: matchingPayments.map((payment) => ({
          _id: payment._id,
          tabId: payment.tabId,
          paymentMethod: payment.paymentMethod,
          acceptedBy: payment.acceptedBy,
          amount: payment.amount,
          createdAt: payment.createdAt,
        })),
      };
    });

    return res.status(200).json(result);
  } catch (error) {
    console.error('Error retrieving completed dine-in payments:', error);
    throw error;
  }
}
