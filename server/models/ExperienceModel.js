const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  type: { type: String, required: true },
  startDate: { type: Date },
  endDate: { type: Date },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Experience = mongoose.model("Experience", experienceSchema);
module.exports = Experience;
