import express from "express";
import {
  getInventory,
  addInventory,
  updateInventory,
  deleteInventory,
} from "../controllers/inventoryController.js";
import { authenticateUser, authorize } from "../middleware/authMiddleware.js"; // Import both functions

const router = express.Router();

router.get("/", authenticateUser, getInventory);
router.post("/", authenticateUser, authorize("admin"), addInventory); // Only admins can add inventory
router.put("/:id", authenticateUser, authorize("admin"), updateInventory);
router.delete("/:id", authenticateUser, authorize("admin"), deleteInventory);

export default router;
