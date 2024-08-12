const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
