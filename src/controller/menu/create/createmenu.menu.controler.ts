import { Request, Response } from "express";

import MenuModel from "../../../model/menu.model";

export const createMenu = async (req: Request, res: Response) => {
  const { name, size, description, price, type, catagory } = req.body;
  const createmenu = new MenuModel({
    type,
    catagory,
    price,
    size,
    description,
    name,
  });
  const createdMenu = await createmenu.save();
  return res.status(201).json({
    message: "create menu type successfully",
    success: true,
    id: createdMenu._id,
  });
};
