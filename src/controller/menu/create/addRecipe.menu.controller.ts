import { Request, Response } from "express";
import MenuModel from "../../../model/menu.model";
import mongoose from "mongoose";
export const createRecipe = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, value } = req.body;

  const updatedRecipe = await MenuModel.findOneAndUpdate(
    { "menuCat.menu.size._id": new mongoose.Types.ObjectId(id) },
    {
      $push: {
        "menuCat.$[].menu.$[].size.$[sizeElement].recipe": { name, value },
      },
    },
    {
      new: true,
      arrayFilters: [{ "sizeElement._id": new mongoose.Types.ObjectId(id) }],
    }
  );

  if (!updatedRecipe) {
    return res.status(404).json({
      message: "menu type not found",
      success: false,
    });
  }

  return res.status(201).json({
    message: "menu created successfully",
    success: false,
  });
};
