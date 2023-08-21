import express from "express";
import {
  createTab,
  deleteTab,
  getTab, getTabs, getCompletedTabs, getDeletedTabs,
  CompleteTab,
  getPendingDelivery
} from "../controller/tab/index.tab.controller";
import { authJWT } from "../middleware/authJWT";

const router = express.Router();

//POST API TO CREATE A TAB
router.post("/create", authJWT, createTab);

//POST API TO CHANGE THE STATUS OF A TAB TO COMPLETED
router.post("/complete/:tabId", authJWT, CompleteTab);

//GET API FOR TABS THAT ARE ONGOING OR OPENED
router.get("/get", getTabs);

//GET API FOR TABS THAT ARE COMPLETED 
router.get("/get-completed", getCompletedTabs);

//GET API FOR TABS THAT ARE COMPLETED 
router.get("/peinding", getPendingDelivery);

//GET API FOR TABS THAT ARE DELETED
router.get("/get-deleted", getDeletedTabs);

//GET API FOR A SINGLE ONGOING | OPENED | COMPLETED TAB
router.get("/show/:tabId", getTab);

//POST API TO DELETE TAB
router.post("/delete/:tabId",authJWT, deleteTab);

export default router;
