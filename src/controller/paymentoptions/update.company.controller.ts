import CompanyModel from "../../model/company.model";
import { Request, Response } from "express";

export const updateCompany = async (req: Request, res: Response) => {
  const { id } = req.params;
  const verifyItem = await CompanyModel.findOne({ _id: id });

  if (verifyItem) {
    await CompanyModel.updateOne({ _id: id }, { $set: req.body });
    res.status(201).json({
      message: "company updated successfully",
      success: true,
    });
  } else {
    res.status(404).json({
      message: "company not found",
      success: true,
    });
  }
};
