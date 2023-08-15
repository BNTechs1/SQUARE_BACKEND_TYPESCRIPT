import express from "express";
import {
  createMenu, 
  addRecipe, 
  showMenus, 
  showRecipes, 
  getMenu,
  getAllRecipes, 
  updateMenu, 
  updateRecipe
} from "../controller/menu/index.menu.controller";
// import { authJWT } from "../middleware/authJWT";
import { upload } from "../config/mutler";
const router = express.Router();

//Create Routes
router.post("/create", upload.array("files", 10), createMenu);
router.post("/create-recipe/:id", addRecipe);

//Update Routes
router.put("/update/:id", updateMenu);
router.put("/update-recipe/:id", updateRecipe);
//Get Routes
router.get("/get", getMenu);
router.get("/get-recipe", getAllRecipes);

router.get("/show/:id", showMenus);
router.get("/show-recipe/:id", showRecipes);


// router.get("/show/:id", authJWT, getEmployee);
// router.put("/update/:id", authJWT, updateEmployee);
// router.delete("/delete/:id", authJWT, deleteEmployee);

export default router;
