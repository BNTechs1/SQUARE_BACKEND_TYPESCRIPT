import { Request, Response } from "express";
import CompanyModel from "../../model/company.model";
import {
  showCompany,
} from "../../utils/db_functions/company.db";
// import  user from "../../model/user"

export const getCompanies = async (req: Request, res: Response) => {
  const company = await CompanyModel.find();
  res.status(200).send(company);
};

export const getCompany = async (req: Request, res: Response) => {
  const { id } = req.params
  const company = await showCompany(id);
  res.status(200).send(company);
};
