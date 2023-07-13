import asyncHandler from "express-async-handler";
import EmployeeModel from "../../model/employee";
import { getAllEmployees, showEmployee } from "../../utils/db_functions/employee.db";
// import  user from "../../model/user"


export const getEmployees = asyncHandler(async (req, res) => {
    const employees = getAllEmployees()
  
    const result = {
      data: employees,
    };
  
    res.status(200).send(result);
  });
  
export const getEmployee = asyncHandler(async (req, res) => {
    // const { id } = req.userData
    const id = "1212112211"
    const employee = showEmployee(id)
    const result = {
      data: employee
    };
  
    res.status(200).send(result);
});
  