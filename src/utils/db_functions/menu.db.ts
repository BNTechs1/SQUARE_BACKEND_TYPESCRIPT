import MenuModel from "../../model/menu.model";


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
