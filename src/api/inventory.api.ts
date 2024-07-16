import express from "express";
import {
  create,
  update,
  getPurchases,
  getinventories,
  getinventory,
  // deleteInventory,
  allocateDailyValue,
  stack,
  transform,
  deleteInventory
  // filterStack,
} from "../controller/inventory/index.inventory.controller";
import { authJWT } from "../middleware/authJWT";

const router = express.Router();

router.post("/create", create);
router.post("/stack/:id", authJWT, stack);
router.get("/get", getinventories);
router.get("/show/:id", getinventory);
router.get("/show/purchases/:id", getPurchases);
// router.get("/filter/purchases/:id", filterStack);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteInventory);


router.post("/transform",authJWT, transform)
router.post("/allocate", allocateDailyValue);


export default router;
