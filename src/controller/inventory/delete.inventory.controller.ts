import { Request, Response } from "express";
import InventoryModel from "../../model/inventory.model";
import MenuModel from "../../model/menu.model";
import { IMenu } from "../../interfaces/menu.interface";

export const deleteInventory = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    // Check if the item is used in any menu recipes
    const menusUsingItem: IMenu[] = await MenuModel.find({
      "recipe.name": id
    });

    if (menusUsingItem.length > 0) {
      return res.status(403).json({
        message: "Item is used in menus and cannot be deleted",
        success: false,
        menusUsingItem: menusUsingItem
      });
    }

    // If the item is not used in any menu recipes, delete it
    const removed = await InventoryModel.findByIdAndDelete(id);
    
    if (removed) {
      return res.status(200).json({
        message: "Item removed successfully",
        success: true,
      });
    } else {
      return res.status(404).json({
        message: "Item not found",
        success: false,
      });
    }
  } catch (error) {
    console.error('Error deleting item:', error);
    return res.status(500).json({ message: "Something went wrong", success: false });
  }
};
