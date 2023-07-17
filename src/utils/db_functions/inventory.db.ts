import InventoryModel from "../../model/inventory";
import {Item} from '../../interfaces/inventory.interface'
export async function getAllItems() {
    return await InventoryModel.find();
}

export async function showItem(id: string) {
    const item = await InventoryModel.findOne({_id: id}) as Item;
    return item
   
}

export async function showItembyName(name: string) {
    return await InventoryModel.findOne({name: name});
}