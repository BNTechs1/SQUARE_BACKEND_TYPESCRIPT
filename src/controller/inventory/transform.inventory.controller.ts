import { Request, Response } from "express";
import InventoryModel from "../../model/inventory.model";

export const transform = async (req: Request, res: Response) => {
  try {
    const {
      deductibleInventoryId,
      incrementableInventoryId,
      deductedValue,
      incrementedValue,
    } = req.body;

    // Fetch deductible inventory item
    const deductibleInventory = await InventoryModel.findById(
      deductibleInventoryId
    );

    // Fetch incrementable inventory item
    const incrementableInventory = await InventoryModel.findById(
      incrementableInventoryId
    );

    if (!deductibleInventory || !incrementableInventory) {
      return res.status(404).json({ message: "Inventory item not found." });
    }

    // Check if there is enough quantity in the deductible inventory
    if (deductibleInventory.value < deductedValue) {
      return res.status(400).json({ message: "Insufficient quantity." });
    }

    // Deduct value from deductible inventory
    deductibleInventory.value -= deductedValue;
    await deductibleInventory.save();

    // Increment value in incrementable inventory
    incrementableInventory.value += incrementedValue;;
    await incrementableInventory.save();

    return res.status(200).json({ message: "Transformation successful." });
  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};


