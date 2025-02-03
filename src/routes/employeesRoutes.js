// backend/src/routes/employeesRoutes.js
import express from "express";
const router = express.Router();

// Placeholder routes for employees
router.get("/", (req, res) => res.send("Get all employees"));
router.post("/", (req, res) => res.send("Add new employee"));
router.put("/:id", (req, res) => res.send("Update employee"));
router.delete("/:id", (req, res) => res.send("Delete employee"));

export default router;
