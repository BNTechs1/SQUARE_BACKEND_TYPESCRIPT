import mongoose from "mongoose";
import MenuModel from "../../model/menu.model";
import { Menu } from "../../interfaces/menu.interface";

export async function getAllMenuTypes() {
  try {
    const menuTypes = await MenuModel.find();
    return menuTypes;
  } catch (error) {
    // Handle error
    console.error("Error retrieving MenuTypes:", error);
    throw error;
  }
}

export async function getAllMenuCats() {
  try {
    const menuTypes = await MenuModel.find({}, "menuCat");
    const menuCats = menuTypes.flatMap((menuType) => menuType.menuCat);
    return menuCats;
  } catch (error) {
    // Handle error
    console.error("Error retrieving MenuCats:", error);
    throw error;
  }
}

export async function getAllMenu() {
  const menus = await MenuModel.find({}, "menuCat.menu");
  return menus.flatMap((doc) => doc.menuCat.map((category) => category.menu));
}

export async function getAllSize() {
  const sizes = await MenuModel.find({}, "menuCat.menu.size");
  return sizes.flatMap((doc) =>
    doc.menuCat.flatMap((category) =>
      category.menu.flatMap((menu) => menu.size)
    )
  );
}

export async function getAllRecipe() {
  const recipes = await MenuModel.find({}, "menuCat.menu.size.recipe");
  return recipes.flatMap((doc) =>
    doc.menuCat.flatMap((category) =>
      category.menu.flatMap((menu) => menu.size.flatMap((size) => size.recipe))
    )
  );
}

export async function showMenuType(id: string) {
  try {
    const menuType = await MenuModel.findById(id);
    return menuType;
  } catch (error) {
    // Handle error
    console.error("Error retrieving MenuType:", error);
    throw error;
  }
}

export async function showMenuCat(id: string) {
  const menuCat = await MenuModel.findOne({
    "menuCat._id": new mongoose.Types.ObjectId(id),
  }, 
  { "menuCat.$": 1 }
  ).lean();

  if(!menuCat){
    return "menu cat not found"
  }
  return menuCat.menuCat[0];
}

export async function showMenus(id: string) {
  const menuCat = await MenuModel.findOne({
    "menuCat.menu._id": new mongoose.Types.ObjectId(id),
  }, 
  { "menuCat.menu.$": 1 }
  ).lean();

  if(!menuCat){
    return "menu cat not found";
  }

  return menuCat.menuCat[0].menu.filter((menu) => menu._id?.toString() === id);
}
