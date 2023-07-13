import asyncHandler from "express-async-handler";
import EmployeeModel from "../../model/employee";
// import  user from "../../model/user"
export const deleteEmployee = asyncHandler(async (req, res) => {
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
});
