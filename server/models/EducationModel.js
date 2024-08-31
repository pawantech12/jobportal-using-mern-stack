const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  startYear: { type: Date },
  endYear: { type: Date },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Education = mongoose.model("Education", educationSchema);
module.exports = Education;
