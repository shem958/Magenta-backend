// backend/src/routes/deliveriesRoutes.js
import express from "express";
import {
  getDeliveries,
  addDelivery,
  updateDelivery,
  deleteDelivery,
} from "../controllers/deliveriesController.js";

const router = express.Router();

router.get("/", getDeliveries);
router.post("/", addDelivery);
router.put("/:id", updateDelivery);
router.delete("/:id", deleteDelivery);

export default router;
