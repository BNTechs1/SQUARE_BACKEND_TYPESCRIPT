import { Request, Response } from "express";
import MenuModel from "../../../model/menu.model";
import mongoose from "mongoose";
export const createMenu = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description } = req.body;

  const updatedMenu = await MenuModel.findOneAndUpdate(
    { "menuCat._id": new mongoose.Types.ObjectId(id) },
    { $push: { "menuCat.$.menu": { name, description } } },
    { new: true }
  );
  
  if (!updatedMenu) {
    return res.status(404).json({
      message: "menu type not found",
      success: false,
    });
  }
  // const createdMenu = updatedMenu.menuCat[0].menu[updatedMenu.menuCat[0].menu.length - 1]
  // console.log(createdMenu);
    // const createdMenu = updatedMenu.menuCat.menu[updatedMenu.menuCat.menu.length - 1];
  return res.status(201).json({
    message: "menu created successfully",
    success: false,
    // id: createdMenu._id
  });
};
