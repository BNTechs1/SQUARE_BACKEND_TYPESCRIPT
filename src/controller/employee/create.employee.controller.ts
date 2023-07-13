import asyncHandler from "express-async-handler";
import EmployeeModel from "../../model/employee";
// import  user from "../../model/user"

export const createEmployee = asyncHandler(async (req, res) => {
  const {
    fullName,
    userName,
    email,
    phoneNumber,
    address,
    emergencyContact,
    salary,
    position,
  } = req.body;

  const verifyEmployee = await EmployeeModel.findOne({
    userName: req.body.userName,
  });

  if (!verifyEmployee) {
    await new EmployeeModel({
      fullName,
      userName,
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
});
