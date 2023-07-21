import TableModel from "../../model/table.model";
import { Request, Response } from "express";

export const deleteTable = async (req:Request, res:Response) => {
  const { id } = req.params;
  try {
    const removed = await TableModel.findByIdAndDelete(id);
    if (!removed) throw Error("Something went wrong ");
    res
      .status(200)
      .json({ message: "table deleted successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "server error", success: false });
  }
}
