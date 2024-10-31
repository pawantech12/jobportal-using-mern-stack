const express = require("express");
const upload = require("../config/multer");
const { authenticateToken } = require("../middlewares/authenticateToken");
const UpdateSection = require("../controllers/update.controller");
const router = express.Router();

router
  .route("/user/update-:section")
  .put(authenticateToken, upload.single("profileImg"), UpdateSection);

module.exports = router;
