import express from "express";
import {
  getInventory,
  addInventory,
  updateInventory,
  deleteInventory,
  restoreInventory,
} from "../controllers/inventoryController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public: View inventory
router.get("/", protect, getInventory);

// Restricted: Only admins/managers can modify inventory
router.post("/", protect, authorize("admin", "manager"), addInventory);
router.put("/:id", protect, authorize("admin", "manager"), updateInventory);
router.delete("/:id", protect, authorize("admin", "manager"), deleteInventory);
router.patch("/restore/:id", protect, authorize("admin"), restoreInventory);

export default router;
