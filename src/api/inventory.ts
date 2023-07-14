import express from "express";
import {create, update, getPurchases, getinventories, getinventory, deleteInventory} from "../controller/inventory/index.inventory.controller";
const router = express.Router();

router.post("/create", create);
router.get("/get", getinventories);
router.get("/show/:id", getinventory);
router.get("/show/purchases/:id", getPurchases);
router.put("/update", update);
router.delete("/delete", deleteInventory);

export default router;
