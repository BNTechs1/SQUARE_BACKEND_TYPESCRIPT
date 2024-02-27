import express from "express";
import {
  registerUser,
  getUsers,
  getuser,
  login,
  deleteUser,
  resetPassword, 
  changePassword
} from "../controller/auth/index.auth.controller";
import { authJWT } from "../middleware/authJWT";
const router = express.Router();

router.post("/create", authJWT, registerUser);
router.get("/get",  getUsers);
router.get("/show/:id", getuser);
router.post("/login",  login);
router.post("/reset/:id", resetPassword);
router.post("/change", authJWT,  changePassword);
router.delete("/delete", deleteUser)

export default router;
