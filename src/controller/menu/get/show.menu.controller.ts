import { Request, Response } from "express";
// import InventoryModel from "../../model/inventory";
import { showMenu, showRecipe } from "../../../utils/db_functions/menu.db";

export const showMenus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const menuType = await showMenu(id);
  res.status(200).send(menuType);
};

export const showRecipes = async (req: Request, res: Response) => {
  const { id } = req.params;
  const menu = await showRecipe(id);
  res.status(200).send(menu);
};
