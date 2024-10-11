const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  bookmark: { type: Boolean, default: false },
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],
  educations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Education" }],
  certifications: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Certification" },
  ],
  experiences: [{ type: mongoose.Schema.Types.ObjectId, ref: "Experience" }],
  applications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Application" }],
  savedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "JobPost" }],
  createdAt: { type: Date, default: Date.now },
});

const Candidate = mongoose.model("Candidate", candidateSchema);
module.exports = Candidate;
