const express = require("express");
const {
  register,
  login,
  getUserData,
} = require("../controllers/authentication.controller");
const { authenticateToken } = require("../middlewares/authenticateToken");
const router = express.Router();
// const authcontrollers = require("../controllers/auth-controller");
// const forgotPassword = require("../controllers/forgot-pass-controller");
// const resetPassword = require("../controllers/reset-pass-controller");
// const verifyToken = require("../middlewares/verifyToken");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/user").get(authenticateToken, getUserData);
// router.route("/forgot-password").post(forgotPassword);
// router.route("/otp-verify").post(authcontrollers.otpVerify);
// router.route("/reset-password").post(resetPassword);
// router.route("/user/:userID").put(verifyToken, authcontrollers.updateUserData);

module.exports = router;
