const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  profileImg: { type: String },
  description: { type: String },
  slogan: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  website: { type: String },
  location: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  zipCode: { type: Number },
  industry: { type: String },
  size: { type: Number },
  employers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employer" }],
  bookmark: { type: Boolean, default: false },
  jobPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "JobPost" }],
});

const Company = mongoose.model("Company", companySchema);
module.exports = companySchema;
