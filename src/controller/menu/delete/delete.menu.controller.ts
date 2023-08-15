import MenuModel from "../../../model/menu.model";
import { Request, Response } from "express";

export const deleteMenu = async (req:Request, res:Response) => {
  const { menuId } = req.params;
  try {
    const removed = await MenuModel.findByIdAndDelete(menuId);
    if (!removed) throw Error("Something went wrong ");
    res
      .status(200)
      .json({ message: "menu deleted successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "server error", success: false });
  }
}
