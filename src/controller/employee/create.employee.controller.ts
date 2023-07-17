import { Request, Response } from "express";
import EmployeeModel from "../../model/employee";
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

  const verifyEmployee = await EmployeeModel.findOne({
    phoneNumber: req.body.phoneNumber,
  });

  if (!verifyEmployee) {
    await new EmployeeModel({
      fullName,
      email,
      phoneNumber,
      address,
      emergencyContact,
      salary,
      position,
    }).save();
    res.status(200).json({
      message: "employee create successfully",
      success: true,
    });
  } else {
    res.status(404).json({
      message: "employee already exist",
      success: false,
    });
  }
};
