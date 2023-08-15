import { Request, Response } from "express";
import TabModel from "../../../model/tab.model";
import {
  showTab,
} from "../../../utils/db_functions/tab.db";
// import  user from "../../model/user"

export const getTabs = async (req: Request, res: Response) => {
  const company = await TabModel.find();
  res.status(200).send(company);
};

export const getCompany = async (req: Request, res: Response) => {
  const { id } = req.params
  const company = await showCompany(id);
  res.status(200).send(company);
};
