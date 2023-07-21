import TableModel from "../../model/table.model";
import { Request, Response } from "express";

export const updateTable = async (req: Request, res: Response) => {
  const { id } = req.params;
  const verifyTable = await TableModel.findOne({ _id: id });

  if (verifyTable) {
    await TableModel.updateOne({ _id: id }, { $set: req.body });
    res.status(201).json({
      message: "table updated successfully",
      success: true,
    });
  } else {
    res.status(404).json({
      message: "table not found",
      success: true,
    });
  }
};
