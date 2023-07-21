import { Request, Response } from "express";
import MenuModel from "../../../model/menu.model";
import mongoose from "mongoose";

export const updateRecipe= async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, value } = req.body;

  const updateRecipe = await MenuModel.findOneAndUpdate(
    {
      "menuCat.menu.size.": {
        $elemMatch: {
          "recipe._id": new mongoose.Types.ObjectId(id),
        },
      },
    },
    {
      $set: {
        "menuCat.$[cat].menu.$[menu].size.$[size].recipe.$[recipe].name": name,
        "menuCat.$[cat].menu.$[menu].size.$[size].recipe.$[recipe].value":
          value,
      },
    },
    {
      new: true, // Return the updated document
      arrayFilters: [
        { "cat.menu.size.recipe._id": new mongoose.Types.ObjectId(id) },
        { "menu.size.recipe._id": new mongoose.Types.ObjectId(id) },
        { "size.recipe._id": new mongoose.Types.ObjectId(id) },
        { "recipe._id": new mongoose.Types.ObjectId(id) },
      ],
    }
  )
    .then((updatedRecipe) => {
      if (updatedRecipe) {
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

