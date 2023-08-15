import express from "express";
import {
  createOrder

} from "../controller/tab/index.tab.controller";
import { authJWT } from "../middleware/authJWT";

const router = express.Router();

//CREATE API TO CREAET AN ORDER IN A SPECFIC TAB
router.post("/create/:tabId", authJWT, createOrder);


export default router;
