const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Schema for storing individual skill
const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// Schema for storing education details
const educationSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  startYear: {
    type: Number, // Storing only the year
    required: true,
  },
  endYear: {
    type: Number, // Storing only the year
    required: false,
  },
  description: {
    type: String,
    default: "",
  },
});

// Schema for storing certification details
const certificationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  issuingOrganization: {
    type: String,
    required: true,
  },
  issueDate: {
    type: Date,
    required: true,
  },
  expirationDate: {
    type: Date,
    required: false,
  },
  credentialUrl: {
    type: String,
    required: true, // Certificate URL
  },
  description: {
    type: String,
    default: "",
  },
});

// Schema for storing experience details
const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
});

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: {
    type: String,
    default: "",
  },
  profileImg: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    require: true,
  },
  resetPassCode: {
    type: String,
    default: " ",
  },
  city: {
    type: String,
    default: " ",
  },
  state: {
    type: String,
    default: " ",
  },
  country: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    default: Date.now,
  },
  gender: {
    type: String,
    default: " ",
  },
  age: {
    type: Number,
    default: 0,
  },
  address: {
    type: String,
    default: " ",
  },
  userType: {
    type: String,
    required: true,
  },
  headline: {
    type: String,
    required: false,
  },
  summary: {
    type: String,
    required: false,
  },
  skills: [skillSchema],
  education: [educationSchema],
  certifications: [certificationSchema],
  experiences: [experienceSchema],
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
