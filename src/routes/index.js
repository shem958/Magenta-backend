import express from "express";
import deliveriesRoutes from "./deliveriesRoutes.js";
import employeesRoutes from "./employeesRoutes.js";
import financeRoutes from "./financeRoutes.js";
import inventoryRoutes from "./inventoryRoutes.js";
import authRoutes from "./authRoutes.js";

const router = express.Router();

// Define API routes
router.use("/auth", authRoutes);
router.use("/deliveries", deliveriesRoutes);
router.use("/employees", employeesRoutes);
router.use("/finance", financeRoutes);
router.use("/inventory", inventoryRoutes);

// Fallback for undefined routes
router.use("*", (req, res) => {
  res.status(404).json({ message: "API route not found" });
});

export default router;
