const express = require("express");

const { authenticateToken } = require("../middlewares/authenticateToken");
const {
  createNotification,
  getNotifications,
  markAllAsRead,
} = require("../controllers/NotificationController");
const router = express.Router();

router.route("/").post(authenticateToken, createNotification);
router.route("/get-notification").get(authenticateToken, getNotifications);
router.route("/read").put(authenticateToken, markAllAsRead);

module.exports = router;
