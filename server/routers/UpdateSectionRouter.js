const express = require("express");

const { authenticateToken } = require("../middlewares/authenticateToken");
const UpdateSection = require("../controllers/UpdateSectionController");
const router = express.Router();

router.route("/user/update-:section").put(authenticateToken, UpdateSection);

module.exports = router;
