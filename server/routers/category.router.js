const express = require("express");
const {
  createCategory,
  getCategories,
  deleteCategory,
} = require("../controllers/category.controller");
const upload = require("../config/multer");
const { authenticateToken } = require("../middlewares/authenticateToken");
const router = express.Router();

router
  .route("/create")
  .post(authenticateToken, upload.single("imageUrl"), createCategory);

router.route("/delete/:id").delete(authenticateToken, deleteCategory);

router.route("/").get(getCategories);

module.exports = router;
