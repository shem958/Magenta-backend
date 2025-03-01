import express from "express";
import {
  getInventory,
  addInventory,
  updateInventory,
  deleteInventory,
} from "../controllers/inventoryController.js";
import { authenticateUser, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public route: Get all inventory items
router.get("/", authenticateUser, getInventory);

// Protected routes: Only admins can modify inventory
router.post("/", authenticateUser, authorize("admin"), addInventory);
router.put("/:id", authenticateUser, authorize("admin"), updateInventory);
router.delete("/:id", authenticateUser, authorize("admin"), deleteInventory);

export default router;
