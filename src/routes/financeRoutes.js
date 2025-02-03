// backend/src/routes/financeRoutes.js
import express from "express";
import {
  getFinance,
  addFinance,
  updateFinance,
  deleteFinance,
} from "../controllers/financeController.js";

const router = express.Router();

router.get("/", getFinance);
router.post("/", addFinance);
router.put("/:id", updateFinance);
router.delete("/:id", deleteFinance);

export default router;
