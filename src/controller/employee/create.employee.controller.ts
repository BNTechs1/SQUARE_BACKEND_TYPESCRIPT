import { Request, Response } from "express";
import EmployeeModel from "../../model/employee.model";
import {
  getAllEmployees,
  showEmployeebyPhone,
} from "../../utils/db_functions/employee.db";
// import  user from "../../model/user"
export const createEmployee = async (req: Request, res: Response) => {
  const {
    fullName,
    email,
    phoneNumber,
    address,
    emergencyContact,
    salary,
    position,
  } = req.body;

  const verifyEmployee = await showEmployeebyPhone(phoneNumber);

  if (!verifyEmployee) {
    const employee = await new EmployeeModel({
      fullName,
      email,
      phoneNumber,
      address,
      emergencyContact,
      salary,
      position,
    }).save();

    return res.status(200).json({
      message: "employee create successfully",
      success: true,
      id: employee._id,
    });
  } else {
    res.status(404).json({
      message: "employee already exist",
      success: false,
    });
  }
};
