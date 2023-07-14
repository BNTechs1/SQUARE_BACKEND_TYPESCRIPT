import express from "express";

import MessageResponse from "../interfaces/MessageResponse";
import emojis from "./emojis";
import employee from "./employee";
import auth from "./auth";

import inventory from "./inventory";

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

export default router;
