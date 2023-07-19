import { Request, Response } from "express";
import MenuModel from "../../../model/menu.model";
export const createMenuCat = async (req: Request, res: Response) => {
    const { id } = req.params;
    // const { menuCat } = req.body
    const updatedMenuType = await MenuModel.findByIdAndUpdate(
      id,
      { $push: { menuCat: req.body } },
      { new: true }
    );
  
    if (!updatedMenuType) {
      return res.status(404).json({
        message: "menu type not found",
        success: false,
      });
    }
    const createdMenuCat =
      updatedMenuType.menuCat[updatedMenuType.menuCat.length - 1];
    return res.status(201).json({
      message: "menu cat created successfully",
      success: true,
      id: createdMenuCat._id,
    });
  };
  