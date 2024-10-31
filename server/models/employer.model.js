const mongoose = require("mongoose");
const companySchema = require("./CompanyModel");

const employerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  company: companySchema,
  jobPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "JobPost" }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Employer = mongoose.model("Employer", employerSchema);
module.exports = employerSchema;
