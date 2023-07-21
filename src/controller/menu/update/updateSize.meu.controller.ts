import { Request, Response } from "express";
import MenuModel from "../../../model/menu.model";
import mongoose from "mongoose";

export const updateSize = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price} = req.body

  const updatedSize = await MenuModel.findOneAndUpdate(
    {
      "menuCat.menu": {
        $elemMatch: {
          "size._id": new mongoose.Types.ObjectId(id),
        },
      },
    },
    {
      $set: {
        "menuCat.$[cat].menu.$[menu].size.$[size].name": name,
        "menuCat.$[cat].menu.$[menu].size.$[size].price": price,
      },
    },
    {
      new: true, // Return the updated document
      arrayFilters: [
        { "cat.menu.size._id": new mongoose.Types.ObjectId(id) },
        { "menu.size._id": new mongoose.Types.ObjectId(id) },
        { "size._id": new mongoose.Types.ObjectId(id) },
      ],
    }
  ) .then((updatedSize) => {
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
