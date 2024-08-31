const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  jobPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "JobPost" }],
});

const Employer = mongoose.model("Employer", employerSchema);
module.exports = Employer;
