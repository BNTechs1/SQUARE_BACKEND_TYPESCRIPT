import { Request, Response } from "express";
// import InventoryModel from "../../model/inventory";
import { getAllItems, showItem } from "../../utils/db_functions/inventory.db";
import { getAllMenuCats } from "../../utils/db_functions/menu.db";
// import  user from "../../model/user"

export const getinventories = async (req: Request, res: Response) => {
  const inventory = await getAllItems();
  console.log(await getAllMenuCats());

  res.status(200).send(inventory);
};

export const getinventory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const inventory = await showItem(id);
  res.status(200).send(inventory);
};

export const getPurchases = async (req: Request, res: Response) => {
  const { id } = req.params;
  const inventory = await showItem(id);
  if (!inventory) {
    return res.status(404).json({
      message: "item not found",
    });
  }
  const stack = inventory.stack;
  if (stack.length === 0) {
    return res.status(404).json({
      message: "no purchase made",
    });
  }
  res.status(200).send(stack);
};
