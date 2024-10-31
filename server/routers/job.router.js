const express = require("express");
const { authenticateToken } = require("../middlewares/authenticateToken");
const {
  createJob,
  getAllJobsPostedByUser,
  deleteJob,
} = require("../controllers/job.controller");
const upload = require("../config/multer");

const router = express.Router();

router
  .route("/create-job")
  .post(authenticateToken, upload.single("jobCoverImage"), createJob);

router.route("/delete-job/:id").delete(authenticateToken, deleteJob);

router.route("/all-jobs").get(authenticateToken, getAllJobsPostedByUser);

module.exports = router;
