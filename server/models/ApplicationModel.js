const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Candidate",
    required: true,
  },
  jobPostId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "JobPost",
    required: true,
  },
  status: {
    type: String,
    enum: ["Applied", "In Review", "Interviewing", "Rejected", "Accepted"],
    default: "Applied",
  },
  appliedAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  resume: { type: String },
  coverLetter: { type: String },
});

const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;
