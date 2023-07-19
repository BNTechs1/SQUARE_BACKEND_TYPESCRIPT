import express from "express";
import {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controller/employee/index.employee.controller";
// import { authJWt } from "../middleware/";
const router = express.Router();

router.post("/create",  createEmployee);
router.get("/get",  getEmployees);
router.get("/show/:id" , getEmployee);
router.put("/update/:id" , updateEmployee);
router.delete("/delete/:id" , deleteEmployee);

export default router;
