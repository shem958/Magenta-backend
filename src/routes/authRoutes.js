// backend/src/routes/authRoutes.js
import express from "express";
router.get("/", getFinance);
router.post("/", addFinance);
router.put("/:id", updateFinance);
router.delete("/:id", deleteFinance);

import { register, login } from "../controllers/authController.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
