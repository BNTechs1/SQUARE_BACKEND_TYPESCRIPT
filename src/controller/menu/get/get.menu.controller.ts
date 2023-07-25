import { Request, Response } from "express";
// import InventoryModel from "../../model/inventory";
import {
 getAllMenu, getAllRecipe
} from "../../../utils/db_functions/menu.db";

export const getMenu = async (req: Request, res: Response) => {
  const inventory = await getAllMenu();
  res.status(200).send(inventory);
};

export const getAllRecipes = async (req: Request, res: Response) => {
  return await getAllRecipe();
};

