const express = require("express");
const { authenticateToken } = require("../middlewares/authenticateToken");
const { createJob } = require("../controllers/JobController");

const router = express.Router();

router.route("/create-job").post(authenticateToken, createJob);

module.exports = router;
