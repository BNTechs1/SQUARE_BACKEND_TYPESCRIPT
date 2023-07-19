import { Request, Response } from "express";
// import InventoryModel from "../../model/inventory";
import { getAllMenuTypes, showMenuType } from "../../utils/db_functions/menu.db";
// import  user from "../../model/user"

export const getMenusTypes = async (req: Request, res: Response) => {
  const inventory = await getAllMenuTypes()
  res.status(200).send(inventory);
};

export const showMenuTypes = async (req: Request, res: Response) => {
  const { id } = req.params
  const inventory = await showMenuType(id);
  res.status(200).send(inventory);
};


