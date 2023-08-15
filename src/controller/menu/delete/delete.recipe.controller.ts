import { Request, Response } from "express";
import MenuModel from "../../../model/menu.model";
export const deletRecipe = async (req: Request, res: Response) => {

    const { menuId, recipeId } = req.params
    try {

        const result = await MenuModel.updateOne(
            { _id: menuId },
            { $pull: { recipe: { _id: recipeId } } }
        );
        console.log("result", result)
        if (!result) {
            throw new Error("Recipe not found in menu");
        }

        return res.status(200).json({ message: "Recipe deleted from menu successfully", success: true })
    } catch (error) {
        return res.status(200).json({ message: "Error deleting recipe from menu:", success: false });
    }
}

