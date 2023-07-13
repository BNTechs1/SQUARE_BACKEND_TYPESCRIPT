import express from "express";
import {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controller/employee/index.employee.controller";
const router = express.Router();

router.get("/get", getEmployees);
router.get("/show/:id", getEmployee);
router.get("/create", createEmployee);
router.get("/update", updateEmployee);
router.get("/delete", deleteEmployee);

export default router;
