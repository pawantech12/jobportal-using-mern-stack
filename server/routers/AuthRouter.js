const express = require("express");
const { register, login } = require("../controllers/AuthController");
const router = express.Router();
// const authcontrollers = require("../controllers/auth-controller");
// const forgotPassword = require("../controllers/forgot-pass-controller");
// const resetPassword = require("../controllers/reset-pass-controller");
// const verifyToken = require("../middlewares/verifyToken");

router.route("/register").post(register);
router.route("/login").post(login);
// router.route("/forgot-password").post(forgotPassword);
// router.route("/otp-verify").post(authcontrollers.otpVerify);
// router.route("/reset-password").post(resetPassword);
// router.route("/user").get(verifyToken, authcontrollers.getAllUserData);
// router.route("/user/:userID").put(verifyToken, authcontrollers.updateUserData);

module.exports = router;
