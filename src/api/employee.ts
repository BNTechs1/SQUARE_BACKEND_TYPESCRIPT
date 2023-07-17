import express from "express";
import {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controller/employee/index.employee.controller";
import { authJWT } from "../middleware/authJWT";
const router = express.Router();

router.post("/create", authJWT, createEmployee);
router.get("/get", authJWT, getEmployees);
router.get("/show/:id", authJWT, getEmployee);
router.put("/update/:id", authJWT, updateEmployee);
router.delete("/delete/:id", authJWT, deleteEmployee);

export default router;
