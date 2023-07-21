import { Request, Response } from "express";
import MenuModel from "../../../model/menu.model";
import mongoose from "mongoose";

export const updateMenuCat = async (req: Request, res: Response) => {
  const { menuCat } = req.body;
  const { id } = req.params;
  MenuModel.findOneAndUpdate(
    { "menuCat._id": new mongoose.Types.ObjectId(id) },
    { $set: { "menuCat.$.menuCat":   menuCat  } },
    { new: true }
  )
    .then((updatedMenuType) => {
      if (updatedMenuType) {
        return res.status(201).json({
          message: "Menu Category updated successfully",
          success: true,
        });
      } else {
        return res.status(201).json({
          message: "Menu Category not found with the given ID.",
          success: true,
        });
      }
    })
    .catch((error) => {
      console.error("Error updating Menu Category:", error);
    });
};
