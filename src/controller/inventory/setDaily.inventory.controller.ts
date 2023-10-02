import { Response, Request } from 'express';
import InventoryModel from '../../model/inventory.model'; // Import your Mongoose model
export const allocateDailyValue = async (req: Request, res: Response) => {
  try {
    const allocationData = req.body;
    for (const itemId in allocationData) {
      if (allocationData.hasOwnProperty(itemId)) {
        const dailyValue = allocationData[itemId];

        // Find the item by ID and admin ID and update it
        await InventoryModel.updateOne(
          { _id: itemId },
          { $inc: { value: -dailyValue, dailyvalue: dailyValue } }
        );
      }
    }
    return res.status(201).json({
      message: "Allocation completed successfully;",
      success: true
    }); // Send a success response
  } catch (error) {
    console.error('Error allocating daily value:', error);
    res.status(500).json({
      message: 'Internal Server Error',
      success: false
    }); // Handle errors gracefully
  }
};
