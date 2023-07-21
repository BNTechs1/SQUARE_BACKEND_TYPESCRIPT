import { Request, Response } from "express";
import MenuModel from "../../../model/menu.model";
import mongoose from "mongoose";

export const updateMenu = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  const { id } = req.params;
  const menu = await MenuModel.findOneAndUpdate(
    { "menuCat.menu._id": new mongoose.Types.ObjectId(id) },
    {
      $set: {
        "menuCat.$[menuCatElement].menu.$[menuElement].name": name,
        "menuCat.$[menuCatElement].menu.$[menuElement].description":
          description,
      },
    },
    {
      new: true,
      arrayFilters: [
        { "menuCatElement.menu._id": new mongoose.Types.ObjectId(id) },
        { "menuElement._id": new mongoose.Types.ObjectId(id) },
      ],
    }
  )
    .then((updatedMenu) => {
      if (updatedMenu) {
        return res.status(201).json({
          message: "menu updated successfully",
          success: true,
        });
      } else {
        return res.status(404).json({
          message: "menu not found with the given ID.",
          success: true,
        });
      }
    })
    .catch((error) => {
      console.error("Error updating Menu:", error);
    });
};
