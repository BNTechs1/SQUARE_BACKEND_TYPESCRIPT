import express from "express";
import {
  createTable,
  getTables,
  getTable,
  updateTable,
  deleteTable,
} from "../controller/Table/index.table.controller";
// import { authJWt } from "../middleware/";
const router = express.Router();

router.post("/create",  createTable);
router.get("/get",  getTables);
router.get("/show/:id" , getTable);
router.put("/update/:id" , updateTable);
router.delete("/delete/:id" , deleteTable);

export default router;
