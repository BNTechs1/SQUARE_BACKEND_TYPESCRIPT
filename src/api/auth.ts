import express from "express";
import {
  register,
  getUsers,
  getuser,
} from "../controller/auth/index.auth.controller";
const router = express.Router();

router.post("/create", register);
router.get("/get", getUsers);
router.get("/show/:id", getuser);
// router.put("/update", updateEmployee);
// router.delete("/delete", deleteEmployee);

export default router;
