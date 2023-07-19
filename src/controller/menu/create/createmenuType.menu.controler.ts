import { Request, Response } from "express";
import MenuModel from "../../../model/menu.model";
export const createMenuType = async (req: Request, res: Response) => {
  const { menuType } = req.body;
  const createmenuType = new MenuModel({ menuType });
  const createdMenuType = await createmenuType.save();
  return res.status(201).json({
    message: "create menu type successfully",
    success: true,
    id: createdMenuType._id,
  });
};
