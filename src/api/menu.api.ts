import express from "express";
import {
  createMenuType,
  createMenuCat,
  createMenu,
  getMenusTypes,
  showMenuTypes,
  createSize,
  createRecipe,
  updateMenu,
  updateMenuCat,
  updateSize, 
  updateRecipe,
  showMenu
} from "../controller/menu/index.menu.controller";
// import { authJWT } from "../middleware/authJWT";
const router = express.Router();

router.post("/createT", createMenuType);
router.post("/createC/:id", createMenuCat);
router.post("/createM/:id", createMenu);
router.post("/createS/:id", createSize);
router.post("/createR/:id", createRecipe);

router.put("/updateC/:id", updateMenuCat);
router.put("/updateM/:id", updateMenu);
router.put("/updateS/:id", updateSize);
router.put("/updateR/:id", updateRecipe);



router.get("/getT", getMenusTypes);
router.get("/showT/:id", showMenuTypes);
router.get("/showM/:id", showMenu);


// router.get("/show/:id", authJWT, getEmployee);
// router.put("/update/:id", authJWT, updateEmployee);
// router.delete("/delete/:id", authJWT, deleteEmployee);

export default router;
