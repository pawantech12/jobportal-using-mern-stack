const mongoose = require("mongoose");

const jobPostSchema = new mongoose.Schema({
  employerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employer",
    required: true,
  },
  jobCoverImage: { type: String },
  title: { type: String, required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  desc: { type: String },
  requiredSkills: [{ type: String }],
  postedAt: { type: Date, default: Date.now },
  deadline: { type: Date },
  jobType: { type: String },
  jobCategory: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  salary: { type: String },
  salaryType: { type: String, enum: ["Monthly", "Yearly"] },
  location: { type: String },
  experienceLevel: { type: String },
  englishFluency: { type: String },
  imageHash: { type: String },
  publicId: { type: String },
  bookmark: { type: Boolean, default: false },
  viewCount: { type: Number, default: 0 },
  applicationCount: { type: Number, default: 0 },
  applications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Application" }],
});

const JobPost = mongoose.model("JobPost", jobPostSchema);
module.exports = JobPost;
