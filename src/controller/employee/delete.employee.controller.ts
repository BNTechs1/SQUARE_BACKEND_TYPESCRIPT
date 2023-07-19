import EmployeeModel from "../../model/employee.model";
import { Request, Response } from "express";

export const deleteEmployee = async (req:Request, res:Response) => {
  const { id } = req.params;
  try {
    const removed = await EmployeeModel.findByIdAndDelete(id);
    if (!removed) throw Error("Something went wrong ");
    res
      .status(200)
      .json({ message: "employee deleted successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "server error", success: false });
  }
}
