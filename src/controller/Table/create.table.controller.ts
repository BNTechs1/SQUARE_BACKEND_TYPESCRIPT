import { Request, Response } from "express";
import { showCompanybyEmail, showTablebyName } from "../../utils/db_functions/company.db";
import TableModel from "../../model/table.model";
export const createTable = async (req: Request, res: Response) => {
  const {
    name,
  } = req.body;

  const table = await new TableModel({
    name
  }).save();

  return res.status(200).json({
    message: "table create successfully",
    success: true,
    id: table._id,
  });

};
