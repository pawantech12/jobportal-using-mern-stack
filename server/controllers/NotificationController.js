const Notification = require("../models/NotificationModel"); // Adjust the path as necessary

// Create a notification
const createNotification = async (req, res) => {
  const { userId, applicationId, jobPostId, companyId, type, message } =
    req.body;

  try {
    const notification = new Notification({
      userId,
      applicationId,
      jobPostId,
      companyId,
      type,
      message,
    });

    await notification.save();
    res.status(201).json({ success: true, notification });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create notification." });
  }
};

// Get notifications for a user
const getNotifications = async (req, res) => {
  const userId = req.user.userId;
  try {
    const notifications = await Notification.find({ userId }).sort({
      createdAt: -1,
    });
    if (!notifications) {
      return res
        .status(404)
        .json({ success: false, message: "No notifications found." });
    }
    res.status(200).json({ success: true, notifications });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve notifications." });
  }
};

const markAllAsRead = async (req, res) => {
  const userId = req.user._id; // Assuming req.user contains the logged-in user's information

  try {
    const result = await Notification.updateMany(
      { userId: userId, isRead: false }, // Find notifications that are not read
      { isRead: true } // Update to mark as read
    );

    if (result.modifiedCount === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No unread notifications found." });
    }

    res
      .status(200)
      .json({ success: true, message: "All notifications marked as read." });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to mark notifications as read.",
    });
  }
};

module.exports = { createNotification, getNotifications, markAllAsRead };
