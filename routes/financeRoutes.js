// backend/src/routes/financeRoutes.js
import express from "express";
const router = express.Router();

// Placeholder routes for finance
router.get("/", (req, res) => res.send("Get financial records"));
router.post("/", (req, res) => res.send("Add financial record"));
router.put("/:id", (req, res) => res.send("Update financial record"));
router.delete("/:id", (req, res) => res.send("Delete financial record"));

export default router;
