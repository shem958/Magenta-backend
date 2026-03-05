import Notification from "../models/Notification.js";

// @desc    Get all notifications
// @route   GET /api/notifications
export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ createdAt: -1 });
    res.status(200).json(notifications);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving notifications",
        error: error.message,
      });
  }
};

// @desc    Mark notification as read
// @route   PATCH /api/notifications/:id/read
export const markAsRead = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true },
    );
    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    res.status(200).json(notification);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating notification", error: error.message });
  }
};

// @desc    Create a notification
// @route   POST /api/notifications
export const createNotification = async (req, res) => {
  try {
    const { message } = req.body;
    const notification = new Notification({ message });
    await notification.save();
    res.status(201).json(notification);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating notification", error: error.message });
  }
};
