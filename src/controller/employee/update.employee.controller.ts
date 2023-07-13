import asyncHandler from "express-async-handler";
import EmployeeModel from "../../model/employee";

export const updateEmployee = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const verifyItem = await EmployeeModel.findOne({ _id: id });

  if (verifyItem) {
    await EmployeeModel.updateOne({ _id: req.params.id }, { $set: req.body });
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
});
