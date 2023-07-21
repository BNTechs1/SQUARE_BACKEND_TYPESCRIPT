import { Request, Response } from "express";
// import InventoryModel from "../../model/inventory";
import {  showMenuCat, showMenuType, showMenus} from "../../../utils/db_functions/menu.db";

export const showMenuTypes = async (req: Request, res: Response) => {
    const { id } = req.params
    const menuType = await showMenuType(id);
    res.status(200).send(menuType);
};

export const showMenu = async (req: Request, res: Response) => {
    const { id } = req.params
    const menu = await showMenus(id);
    res.status(200).send(menu);
};