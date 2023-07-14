import MenuModel from "../../model/menu";

export async function getAllMenus() {
    return await MenuModel.find();
}

export async function showMenu(id: string) {
    return await MenuModel.findOne({_id: id});
}