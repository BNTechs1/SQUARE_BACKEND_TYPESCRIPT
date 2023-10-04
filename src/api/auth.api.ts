import express from "express";
import {
  register,
  getUsers,
  getuser,
  login,
  resetPassword, 
  changePassword
} from "../controller/auth/index.auth.controller";
import { authJWT } from "../middleware/authJWT";
const router = express.Router();

router.post("/create", authJWT, register);
router.get("/get",  getUsers);
router.get("/show/:id", getuser);
router.post("/login",  login);
router.post("/reset/:id", resetPassword);
router.post("/change", authJWT,  changePassword);

export default router;
