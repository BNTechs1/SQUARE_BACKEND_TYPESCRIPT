import express from "express";
import {
 createCompany, 
 updateCompany, 
 getCompanies, 
 getCompany, 
 deleteCompany
} from "../controller/company/index.company.controller";
// import { authJWt } from "../middleware/";
const router = express.Router();

router.post("/create",  createCompany);
router.get("/get",  getCompanies);
router.get("/show/:id" , getCompany);
router.put("/update/:id" , updateCompany);
router.delete("/delete/:id" , deleteCompany);

export default router;
