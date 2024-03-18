import { Response, Request } from 'express';
import InventoryModel from '../../model/inventory.model'; // Import your Mongoose model

export const allocateDailyValue = async (req: Request, res: Response) => {  
  try {
    const allocationData = req.body;
    const itemsWithExceedingValue: string[] = []; // Array to hold IDs of items with exceeding value
    for (const itemId in allocationData) {
      console.log("itemId", itemId)
      if (itemId in allocationData) {
        const dailyValue = allocationData[itemId];
        // Your code here
  
        // Find the item by ID
        const item = await InventoryModel.findById(itemId);

        if (!item) {
          return res.status(404).json({
            message: `Item with ID ${itemId} not found`,
            success: false
          });
        }

        // Check if the dailyValue is less than or equal to the available value
        if (dailyValue <= item.value) {
        console.log("dailyValue", dailyValue)
        console.log("item.value", item.value)


          // Update the item`
          await InventoryModel.updateOne(
            { _id: itemId },
            { $inc: { value: -dailyValue, dailyvalue: dailyValue ? dailyValue : 0 } }
          );
        } else {
          itemsWithExceedingValue.push(itemId); // Add ID to array if daily value exceeds available value
        }
      }
    }

    if (itemsWithExceedingValue.length === 0) {
      return res.status(201).json({
        message: "Allocation completed successfully",
        success: true
      });
    } else {
      return res.status(201).json({
        message: "One or more items have daily value exceeding available value",
        itemsWithExceedingValue: itemsWithExceedingValue,
        success: true
      });
    }
  } catch (error) {
    console.error('Error allocating daily value:', error);
    res.status(500).json({
      message: 'Internal Server Error',
      success: false
    });
  }
};
