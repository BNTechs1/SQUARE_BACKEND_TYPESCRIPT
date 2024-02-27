import EmployeeModel from "../../model/employee.model";
import UserModel from "../../model/user.model"
import { Request, Response } from "express";

export const deleteEmployee = async (req:Request, res:Response) => {
  const { id } = req.params;
  try {
    const employee = await EmployeeModel.findById(id);
    if (!employee) throw Error("employee not found");

    employee.status = "DELETED"
    const user = await UserModel.findOne({ employeeId: id});
    if(!user) throw Error("user not found")
    await UserModel.findByIdAndDelete(user._id)
    employee.save()
    res
      .status(200)
      .json({ message: "employee deleted successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "server error", success: false });
  }
}
