// backend/src/routes/inventoryRoutes.js
import express from "express";
import {
  getInventory,
  addInventory,
  updateInventory,
  deleteInventory,
} from "../controllers/inventoryController.js";

const router = express.Router();

router.get("/", getInventory);
router.post("/", addInventory);
router.put("/:id", updateInventory);
router.delete("/:id", deleteInventory);

export default router;
