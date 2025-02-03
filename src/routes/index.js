// backend/src/routes/index.js
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

export default router;
