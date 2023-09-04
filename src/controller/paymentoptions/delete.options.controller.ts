import paymentOptionModel from "../../model/paymentOption.model";
import { Request, Response } from "express";

export const deleteOptions = async (req:Request, res:Response) => {
  const { id } = req.params;
  try {
    const removed = await paymentOptionModel.findByIdAndDelete(id);
    if (!removed) throw Error("Something went wrong ");
    res
      .status(200)
      .json({ message: "options deleted successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "server error", success: false });
  }
}
