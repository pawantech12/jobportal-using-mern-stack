const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  profileImg: { type: String },
  password: { type: String, required: true },
  resetCode: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  dob: { type: Date },
  gender: { type: String },
  status: { type: Boolean, default: false },
  age: { type: Number },
  address: { type: String },
  userType: {
    type: String,
    enum: ["candidate", "employer", "admin"],
    required: true,
  },
  headline: { type: String },
  summary: { type: String },
  candidates: { type: mongoose.Schema.Types.ObjectId, ref: "Candidate" },
  employers: { type: mongoose.Schema.Types.ObjectId, ref: "Employer" },
  education: [{ type: mongoose.Schema.Types.ObjectId, ref: "Education" }],
  skills: [{ type: String }],
  certifications: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Certification" },
  ],
  experiences: [{ type: mongoose.Schema.Types.ObjectId, ref: "Experience" }],
  createdAt: { type: Date, default: Date.now },
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});

userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error(error);
  }
};

userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = new mongoose.model("User", userSchema);

module.exports = User;
