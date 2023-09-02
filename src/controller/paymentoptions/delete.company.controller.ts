import CompanyModel from "../../model/company.model";
import { Request, Response } from "express";

export const deleteCompany = async (req:Request, res:Response) => {
  const { id } = req.params;
  try {
    const removed = await CompanyModel.findByIdAndDelete(id);
    if (!removed) throw Error("Something went wrong ");
    res
      .status(200)
      .json({ message: "company deleted successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "server error", success: false });
  }
}
