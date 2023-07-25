import { Request, Response } from "express";
import MenuModel from "../../../model/menu.model";
export const addRecipe = async (req: Request, res: Response) => {
  const { id } = req.params;
  // const { menuCat } = req.body
  const updatedMenu = await MenuModel.findByIdAndUpdate(
    id,
    { $push: { recipe: req.body } },
    { new: true }
  );

  if (!updatedMenu) {
    return res.status(404).json({
      message: "menu type not found",
      success: false,
    });
  }
  const addedRecipe = updatedMenu.recipe[updatedMenu.recipe.length - 1];
  return res.status(201).json({
    message: "recipe added successfully",
    success: true,
    id: addedRecipe._id,
  });
};
