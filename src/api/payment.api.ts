import express from "express";
import {
    getCompleted
} from "../controller/tab/index.tab.controller";
import {
    createOptions
} from "../controller/paymentoptions/index.options.controller";
import { authJWT } from "../middleware/authJWT";
import { upload } from "../config/mutler";

const router = express.Router();

// //POST API TO CREATE A TAB
// router.post("/create", authJWT, createTab);

//POST API TO CHANGE THE STATUS OF A TAB TO COMPLETED
router.post("/create-options", authJWT,  upload.array("files", 10), createOptions);

//GET API FOR TABS THAT ARE ONGOING OR OPENED
router.get("/get-completed", getCompleted);

// //GET API FOR TABS THAT ARE COMPLETED 
// router.get("/get-completed", getCompletedTabs);

// //GET API FOR TABS THAT ARE COMPLETED 
// router.get("/peinding", getPendingDelivery);

// //GET API FOR TABS THAT ARE DELETED
// router.get("/get-deleted", getDeletedTabs);

// //GET API FOR A SINGLE ONGOING | OPENED | COMPLETED TAB
// router.get("/show/:tabId", getTab);

// //POST API TO DELETE TAB
// router.post("/delete/:tabId",authJWT, deleteTab);

export default router;
