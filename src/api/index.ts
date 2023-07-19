import express from "express";

import MessageResponse from "../interfaces/MessageResponse";
import emojis from "./emojis";
import employee from "./employee.api";
import auth from "./auth.api";
import menu from "./menu.api";


import inventory from "./inventory.api";

const router = express.Router();

router.get<MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/emojis", emojis);
router.use("/employee", employee);
router.use("/auth", auth);
router.use("/inventory", inventory);
router.use("/menu", menu);


export default router;
