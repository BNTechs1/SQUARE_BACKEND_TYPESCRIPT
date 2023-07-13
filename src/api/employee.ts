import express from "express";
import {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controller/employee/index.employee.controller";
const router = express.Router();

router.post("/create", createEmployee);
router.get("/get", getEmployees);
router.get("/show/:id", getEmployee);
router.put("/update", updateEmployee);
router.delete("/delete", deleteEmployee);

export default router;
