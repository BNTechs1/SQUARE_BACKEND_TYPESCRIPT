import { Request, Response } from "express";
import MenuModel from "../../../model/menu.model";
import mongoose from "mongoose";
export const createSize = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, price } = req.body;
  
    const updatedSize = await MenuModel.findOneAndUpdate(
      { "menuCat.menu._id": new mongoose.Types.ObjectId(id) },
      { $push: { "menuCat.$.menu.$[menuElement].size": { name, price } } },
      { new: true, arrayFilters: [{ "menuElement._id": new mongoose.Types.ObjectId(id) }] }
    
    );
    // const updatedSize = await MenuModel.findOne({ "menuCat.menu._id": new mongoose.Types.ObjectId(id) });
    // console.log("updatedSize", updatedSize);
    if (!updatedSize) {
      return res.status(404).json({
        message: "menu type not found",
        success: false,
      });
    }
  
      // const createdMenu = updatedSize.menuCat.menu[updatedSize.menuCat.menu.length - 1];
    return res.status(201).json({
      message: "menu created successfully",
      success: false,
      // id: createdMenu._id
    });
  };
  