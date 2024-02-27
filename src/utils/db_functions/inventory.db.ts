import InventoryModel from "../../model/inventory.model";
import { IInventory } from '../../interfaces/inventory.interface'
export async function getAllItems() {
    return await InventoryModel.find();
}

export async function showItem(id: string) {
    const item = await InventoryModel.findOne({_id: id}) as IInventory;
    return item
   
}

export async function showItembyName(name: string) {
    return await InventoryModel.findOne({name: name});
}