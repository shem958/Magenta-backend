import express from "express";
import { getNotifications } from "../controllers/inventoryController.js";

const router = express.Router();

router.get("/", getNotifications);

export default router;
