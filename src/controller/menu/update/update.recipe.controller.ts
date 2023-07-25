import { Request, Response } from "express";
import MenuModel from "../../../model/menu.model";
import mongoose from "mongoose";

export const updateRecipe = async (req: Request, res: Response) => {
  const { name, value } = req.body;
  const { id } = req.params;
  MenuModel.findOneAndUpdate(
    { "recipe._id": new mongoose.Types.ObjectId(id) },
    { $set: { "recipe.$.name": name, "recipe.$.value": value } },
    { new: true }
  )
    .then((updateRecipe) => {
      if (updateRecipe) {
        return res.status(201).json({
          message: "recipe updated successfully",
          success: true,
        });
      } else {
        return res.status(201).json({
          message: "recipe not found with the given ID.",
          success: true,
        });
      }
    })
    .catch((error) => {
      console.error("Error updating Menu Category:", error);
    });
};
