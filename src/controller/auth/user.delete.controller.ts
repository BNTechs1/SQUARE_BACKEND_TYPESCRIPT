import employeeModel from "../../model/employee.model";
import UserModel from "../../model/user.model"
import { Request, Response } from "express";

export const deleteUser = async (req:Request, res:Response) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findOne({ employeeId: id});
    const employee = await employeeModel.findOne({ _id: id})

    if(!user) throw Error("user not found")
    if(!employee) throw Error("employee not found")
    employee.role = "NOT_USER"
    employee.save()
    await UserModel.findByIdAndDelete(user._id)
    res
      .status(200)
      .json({ message: "employee deleted successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "server error", success: false });
  }
}
