import { Request, Response } from "express";
import EmployeeModel from "../../model/employee";
import {
  getAllEmployees,
  showEmployee,
} from "../../utils/db_functions/employee.db";
// import  user from "../../model/user"

export const getEmployees = async (req: Request, res: Response) => {
  const employee = await EmployeeModel.find();
  res.status(200).send(employee);
};

export const getEmployee = async (req: Request, res: Response) => {
  const { id } = req.params
  const employee = await showEmployee(id);
  res.status(200).send(employee);
};
