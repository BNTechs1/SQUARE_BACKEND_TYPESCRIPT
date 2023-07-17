import { Request, Response } from "express";
import InventoryModel from "../../model/inventory";
import { showItem } from "../../utils/db_functions/inventory.db";
import { getAllMenus } from "../../utils/db_functions/menu.db";
import { Item } from "../../interfaces/inventory.interface";

export const deleteInventory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const verifyItem = await showItem(id);
  const name = verifyItem.name;
  const menuList = await getAllMenus();
  let yes = "";
  const check = menuList.filter((menu) =>
    menu.size.filter((size) =>
      size.recipe.filter((item) => {
        if (item.name === name) {
          yes = "yes";
        } else {
          yes = "NO";
        }
      })
    )
  );
  try {
    if (yes === "yes") {
      res.status(403).json({
        message: "recipe item is used in Menus",
        success: false,
      });
    } else {
      const removed = await InventoryModel.findByIdAndDelete(id);
      // if (!removed) throw Error('Something went wrong ')
      res.status(200).json({
        message: "item removed successfully",
        success: true,
      });
    }
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};
