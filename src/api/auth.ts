import express from "express";
import {
  register,
  getUsers,
  getuser,
  login
} from "../controller/auth/index.auth.controller";
const router = express.Router();

router.post("/create", register);
router.get("/get", getUsers);
router.get("/show/:id", getuser);
router.post("/login", login);
// router.delete("/delete", deleteEmployee);

export default router;
