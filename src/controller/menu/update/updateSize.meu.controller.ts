import { Request, Response } from "express";
import MenuModel from "../../../model/menu.model";
import mongoose from "mongoose";

export const updateSize = async (req: Request, res: Response) => {
  const { name, price } = req.body;
  const { id } = req.params;

  const size = await MenuModel.findOneAndUpdate(
    {
      "menuCat.menu.size._id": new mongoose.Types.ObjectId(id),
    },
    {
      $set: {
        "menuCat.$[menuCatElement].menu.$[menuElement].size.$[sizeElement].name":
          name,
        "menuCat.$[menuCatElement].menu.$[menuElement].size.$[sizeElement].price":
          price,
      },
    },
    {
      new: true, // Return the updated document
    }
  )
    .then((updatedSize) => {
      if (updatedSize) {
        return res.status(201).json({
          message: "menu size updated successfully",
          success: true,
        });
      } else {
        return res.status(201).json({
          message: "menu size not found with the given ID.",
          success: true,
        });
      }
    })
    .catch((error) => {
      console.error("Error updating Menu Category:", error);
    });
};
