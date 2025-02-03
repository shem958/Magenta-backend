// backend/src/routes/deliveriesRoutes.js
import express from "express";
const router = express.Router();

// Placeholder routes for deliveries
router.get("/", (req, res) => res.send("Get all deliveries"));
router.post("/", (req, res) => res.send("Add new delivery"));
router.put("/:id", (req, res) => res.send("Update delivery"));
router.delete("/:id", (req, res) => res.send("Delete delivery"));

export default router;
