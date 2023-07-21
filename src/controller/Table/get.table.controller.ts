import { Request, Response } from "express";
import TableModel from "../../model/table.model";

export const getTables = async (req: Request, res: Response) => {
  const table = await TableModel.find();
  res.status(200).send(table);
};

export const getTable = async (req: Request, res: Response) => {
  const { id } = req.params
  const table = await TableModel.findOne({_id: id});
  res.status(200).send(table);
};
