import express from "express";
import {
  createOrder
//   update,
//   getPurchases,
//   getinventories,
//   getinventory,
//   // deleteInventory,
//   stack,
//   filterStack,
} from "../controller/tab/index.tab.controller";
import { authJWT } from "../middleware/authJWT";

const router = express.Router();

router.post("/create/:tabId", authJWT, createOrder);
// router.post("/stack/:id", authJWT, stack);
// router.get("/get", getinventories);
// router.get("/show/:id", getinventory);
// router.get("/show/purchases/:id", getPurchases);
// router.get("/filter/purchases/:id", filterStack);

// router.put("/update/:id", update);
// router.delete("/delete/:id", deleteInventory);

export default router;
