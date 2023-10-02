import { Request, Response } from "express";
import InventoryModel from "../../model/inventory.model";

export const create = async (req: Request, res: Response) => {
  const { name, unit,  rate, requiredValue } = req.body;

  const verifyItem = await InventoryModel.findOne({
    name: req.body.name,
  });

  if (!verifyItem) {
    await new InventoryModel({
      name,
      unit,
      rate,
      requiredValue,
    }).save();
    res.status(201).json({
      message: `item added successfully`,
      success: true,
    });
  } else {
    res.status(404).json({
      message: "item exist",
      success: false,
    });
  }
};
