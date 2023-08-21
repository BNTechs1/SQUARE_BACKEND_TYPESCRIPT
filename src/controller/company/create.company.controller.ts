import { Request, Response } from "express";
import { showCompanybyEmail } from "../../utils/db_functions/company.db";
import companyModel from "../../model/company.model";
export const createCompany = async (req: Request, res: Response) => {
  const {
    name,
    email,
    phoneNumber,
    type,
    address,
    emergencyContact,
    commission,
  } = req.body;

  const verifyCompany = await showCompanybyEmail(email);
  if (!verifyCompany) {
    const company = await new companyModel({
      name,
      email,
      phoneNumber,
      address,
      type,
      emergencyContact,
      commission
    }).save();

    return res.status(200).json({
      message: "company create successfully",
      success: true,
      id: company._id,
    });
  } else {
    res.status(404).json({
      message: "company already exist",
      success: false,
    });
  }
};
