const express = require("express");
const { authenticateToken } = require("../middlewares/authenticateToken");
const { createJob } = require("../controllers/job.controller");
const upload = require("../config/multer");

const router = express.Router();

router
  .route("/create-job")
  .post(authenticateToken, upload.single("jobCoverImage"), createJob);

module.exports = router;
