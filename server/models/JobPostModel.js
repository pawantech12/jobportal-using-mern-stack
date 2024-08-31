const mongoose = require("mongoose");

const jobPostSchema = new mongoose.Schema({
  employerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employer",
    required: true,
  },
  title: { type: String, required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  desc: { type: String },
  requiredSkills: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],
  postedAt: { type: Date, default: Date.now },
  deadline: { type: Date },
  jobType: { type: String },
  salary: { type: String },
  location: { type: String },
  bookmark: { type: Boolean, default: false },
  applications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Application" }],
});

const JobPost = mongoose.model("JobPost", jobPostSchema);
module.exports = JobPost;
