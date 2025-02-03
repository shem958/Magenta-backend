// backend/src/routes/index.js
import express from "express";
import inventoryRoutes from "./inventoryRoutes.js";
import employeesRoutes from "./employeesRoutes.js";
import financeRoutes from "./financeRoutes.js";
import deliveriesRoutes from "./deliveriesRoutes.js";

const router = express.Router();

// Define API routes
router.use("/inventory", inventoryRoutes);
router.use("/employees", employeesRoutes);
router.use("/finance", financeRoutes);
router.use("/deliveries", deliveriesRoutes);

export default router;
