import { Request, Response } from "express";
import MenuModel from "../../../model/menu.model";

export const updateMenuCat = async (req: Request, res: Response) => {
  const updatedMenuCatData = req.body;
  const { id } = req.params;
  const menuType = await MenuModel.findOneAndUpdate(
    { "menuCat._id": id },
    { $set: { "menuCat.$": updatedMenuCatData } },
    { new: true }
  );

  if (!menuType) {
    throw new Error("MenuCat not found");
  }

  const updatedMenuCat = menuType.menuCat.find(
    (cat) => cat._id && cat._id.toString() === id
  );
  return res.status(201).json({
    message: "menu cat updated successfully",
    success: true,
    id: updatedMenuCat && updatedMenuCat._id,
  });
};
