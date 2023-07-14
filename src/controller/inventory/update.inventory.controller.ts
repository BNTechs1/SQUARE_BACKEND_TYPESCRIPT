import { Request, Response } from "express";
import InventoryModel from "../../model/inventory";
import { showItem } from "../../utils/db_functions/inventory.db";
import { Item } from "../../interfaces/inventory";

export const update = async (req: Request, res: Response) => {
  const { name, unit, value, requiredValue, rate, quantity }: Item = req.body;
  const { id } = req.params;
  let updatedInventory;
  const verifyItem = await showItem(id);

  if (!verifyItem) {
    res.status(404).json({
      message: "item not found",
      success: false,
    });
  }

  if (verifyItem.quantity > quantity) {
    const diffquantity = verifyItem.quantity - quantity;
    verifyItem.value = verifyItem.value - diffquantity * rate;
    verifyItem.quantity = verifyItem.quantity - diffquantity;
    updatedInventory = {
      name,
      unit,
      value: verifyItem.value,
      requiredValue,
      rate,
      quantity: verifyItem.quantity,
    };

    await InventoryModel.updateOne({ _id: id }, { $set: updatedInventory });
    res.status(200).json({
      message: "inventory updated successfully",
      success: true,
    });
  } else {
    const diffquantity = quantity - verifyItem.quantity;
    verifyItem.value = verifyItem.value + diffquantity * rate;
    verifyItem.quantity = verifyItem.quantity + diffquantity;
    updatedInventory = {
      name,
      unit,
      value: verifyItem.value,
      requiredValue,
      rate,
      quantity: verifyItem.quantity,
    };

    await InventoryModel.updateOne(
      { _id: req.params.id },
      { $set: updatedInventory }
    );
    res.status(201).json({
      message: "inventory updated successfully",
      success: true,
    });
  }
};
