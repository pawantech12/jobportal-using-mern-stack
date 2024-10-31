const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  applicationId: { type: mongoose.Schema.Types.ObjectId, ref: "Application" }, // Optional link to Application
  jobPostId: { type: mongoose.Schema.Types.ObjectId, ref: "JobPost" }, // Optional link to JobPost
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company" }, // Optional link to Company
  type: { type: String, required: true }, // e.g., 'application', 'job', 'reminder', etc.
  message: { type: String, required: true },
  isRead: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Notification = mongoose.model("Notification", notificationSchema);
module.exports = Notification;
