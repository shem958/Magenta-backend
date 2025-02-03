// backend/src/routes/inventoryRoutes.js
import express from "express";
const router = express.Router();

// Placeholder routes for inventory
router.get("/", (req, res) => res.send("Get all inventory items"));
router.post("/", (req, res) => res.send("Add new inventory item"));
router.put("/:id", (req, res) => res.send("Update inventory item"));
router.delete("/:id", (req, res) => res.send("Delete inventory item"));

export default router;
