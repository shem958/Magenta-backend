import express from "express";
import {
  getNotifications,
  markAsRead,
  createNotification,
} from "../controllers/notificationController.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authenticateUser, getNotifications);
router.patch("/:id/read", authenticateUser, markAsRead);
router.post("/", authenticateUser, createNotification);

export default router;
