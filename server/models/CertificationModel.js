const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issuingOrganization: { type: String, required: true },
  issueDate: { type: String },
  expirationDate: { type: String },
  credentialUrl: { type: String },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Certification = mongoose.model("Certification", certificationSchema);

module.exports = Certification;
