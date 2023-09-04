import Payment from '../../../model/payment.model'
import Tab from '../../../model/tab.model'; // Assuming this is the import path for your tab model
import { Request, Response } from "express";
export const getPending = async (req: Request, res: Response) => {
  try {
    // Find tabs that match the criteria
    const completedTabs = await Tab.find({ status: 'COMPLETED', type: 'DELIVERY' });

    return res.status(200).json(
      completedTabs
    );
  } catch (error) {
    console.error('Error retrieving completed dine-in payments:', error);
    throw error;
  }
}
