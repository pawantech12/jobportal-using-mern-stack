const User = require("../models/user.model");

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { firstname, lastname, email, password, userType, country } =
      req.body;

    // checking whether the email is already exist or not
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res
        .status(400)
        .json({ msg: "Email already exist", success: false });
    }

    // If user not exist then it will create new user
    const userCreated = await User.create({
      firstname,
      lastname,
      email,
      password,
      country,
      userType,
    });

    res.status(201).json({
      msg: "Registration Successfull",
      success: true,
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(error);

    res.status(500).json(error);
  }
};

// user login logic
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res
        .status(400)
        .json({ message: "invalid credentials", success: false });
    }

    // const user = await bcrypt.compare(password,userExist.password);
    const user = await userExist.comparePassword(password);
    if (user) {
      res.status(200).json({
        msg: "Login Successfull",
        success: true,
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res
        .status(401)
        .json({ message: "Invalid Email or password", success: false });
    }
  } catch (error) {
    res.status(500).json("Internal Server Error");
    console.error(error);
  }
};

// const otpVerify = async (req, res) => {
//   //   console.log(req.body);
//   const { otp, email } = req.body;
//   try {
//     // Query the database for the user with the provided email
//     const user = await User.findOne({ email });

//     // Check if user exists and if OTP matches
//     if (user && user.resetPassCode === otp) {
//       // OTP is valid, proceed with password reset
//       res
//         .status(200)
//         .json({ success: true, message: "OTP Verified Successfully" });
//     } else {
//       // OTP is invalid
//       res.status(400).json({ success: false, message: "Invalid OTP" });
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// };

// fetching all data of user using userid get from authenticating token
const getUserData = async (req, res) => {
  try {
    // Retrieve the user data using the user ID from the token payload
    const user = await User.findById(req.user.userId)
      .select("-password")
      .populate({
        path: "education",
      })
      .populate({
        path: "certifications",
      })
      .populate({
        path: "experiences",
      });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// const updateUserData = async (req, res) => {
//   const updatedFields = req.body;

//   try {
//     const user = await User.findById(req.params.userID);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Update only the fields that were edited
//     Object.keys(updatedFields).forEach((key) => {
//       if (updatedFields[key] !== undefined) {
//         user[key] = updatedFields[key];
//       }
//     });

//     const updatedUser = await user.save();
//     res.json({
//       message: "User has been successfully updated",
//       user: updatedUser,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
module.exports = { register, login, getUserData };
