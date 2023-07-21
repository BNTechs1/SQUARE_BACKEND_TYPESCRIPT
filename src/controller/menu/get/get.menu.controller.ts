import { Request, Response } from "express";
// import InventoryModel from "../../model/inventory";
import {
  getAllMenu,
  getAllMenuCats,
  getAllMenuTypes,
  getAllSize,
} from "../../../utils/db_functions/menu.db";

export const getMenusTypes = async (req: Request, res: Response) => {
  const inventory = await getAllMenuTypes();
  res.status(200).send(inventory);
};

export const getAllMenuCategories = async (req: Request, res: Response) => {
  return await getAllMenuCats();
};

export const getAllMenus = async (req: Request, res: Response) => {
  return await getAllMenu();
};

export const getAllSizes = async (req: Request, res: Response) => {
  return await getAllSize();
};

export const getAllRecipe = async (req: Request, res: Response) => {
  return await getAllSize();
};
