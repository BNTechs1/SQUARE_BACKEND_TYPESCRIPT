import { Request, Response } from "express";
import MenuModel from "../../../model/menu.model";
import mongoose from "mongoose";

export const updateMenu = async (req: Request, res: Response) => {
  const { name, description, size, catagory, type, price } = req.body;
  const { id } = req.params;
  const menu = await MenuModel.findOneAndUpdate(
    { _id: new mongoose.Types.ObjectId(id) },
    {
      $set: {
        name: name,
        description: description,
        size: size,
        catagory: catagory,
        type: type,
        price: price,
      },
    },
    {
      new: true,
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
