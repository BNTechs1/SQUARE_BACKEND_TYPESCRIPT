import InventoryModel from "../../model/inventory";
import {Item} from '../../interfaces/inventory'
export async function getAllItems() {
    return await InventoryModel.find();
}

export async function showItem(id: string) {
    return await InventoryModel.findOne({_id: id}) as Item;
}

export async function showItembyName(name: string) {
    return await InventoryModel.findOne({name: name});
}