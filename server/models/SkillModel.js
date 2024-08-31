const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Skill = mongoose.model("Skill", skillSchema);
module.exports = Skill;
