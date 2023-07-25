import mongoose from "mongoose";
import MenuModel from "../../model/menu.model";
import { Menu } from "../../interfaces/menu.interface";

export async function getAllMenu() {
  try {
    const menu = await MenuModel.find();
    return menu;
  } catch (error) {
    // Handle error
    console.error("Error retrieving MenuTypes:", error);
    throw error;
  }
}

export async function getAllRecipe() {
  try {
    const menu = await MenuModel.find({}, "recipe");
    const Recipe = menu.flatMap((menu) => menu.recipe);
    return Recipe;
  } catch (error) {
    // Handle error
    console.error("Error retrieving MenuCats:", error);
    throw error;
  }
}

export async function showMenu(id: string) {
  try {
    const menu = await MenuModel.findById(id);
    return menu;
  } catch (error) {
    // Handle error
    console.error("Error retrieving MenuType:", error);
    throw error;
  }
}

export async function showRecipe(id: string) {
  const recipe = await MenuModel.findOne(
    {
      "recipe._id": new mongoose.Types.ObjectId(id),
    },
    { "recipe.$": 1 }
  ).lean();

  if (!recipe) {
    return "recipe not found";
  }
  return recipe.recipe[0];
}
