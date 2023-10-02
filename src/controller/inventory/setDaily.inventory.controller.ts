import { Response, Request } from 'express';
import InventoryModel from '../../model/inventory.model'; // Import your Mongoose model
export const allocateDailyValue = async (req: Request, res: Response) => {
  try {
    const allocationData  = req.body;
    console.log("allocationData", allocationData)
    for (const itemId in allocationData) {
      if (allocationData.hasOwnProperty(itemId)) {
        const dailyValue = allocationData[itemId];

        // Find the item by ID and admin ID and update it
        await InventoryModel.updateOne(
          { _id: itemId},
          { $inc: { value: -dailyValue } }
        );
      }
    }
    return res.status(201).json({
      message: "Allocation completed successfully;", 
      success: true
    }); // Send a success response
  } catch (error) {
    console.error('Error allocating daily value:', error);
    res.status(500).json({ error: 'Internal Server Error' }); // Handle errors gracefully
  }
};
