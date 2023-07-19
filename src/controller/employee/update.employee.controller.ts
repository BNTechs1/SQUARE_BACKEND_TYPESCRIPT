import EmployeeModel from "../../model/employee.model";
import { Request, Response } from "express";

export const updateEmployee = async (req: Request, res: Response) => {
  const { id } = req.params;
  const verifyItem = await EmployeeModel.findOne({ _id: id });

  if (verifyItem) {
    await EmployeeModel.updateOne({ _id: id }, { $set: req.body });
    res.status(201).json({
      message: "employee updated successfully",
      success: true,
    });
  } else {
    res.status(404).json({
      message: "employee not found",
      success: true,
    });
  }
};
