const User = require("../models/UserModel");
const UpdateSection = async (req, res) => {
  const { section } = req.params;
  const userId = req.user.userId; // Assuming you have middleware to extract user ID from JWT
  const updateData = req.body; // This will contain the fields to update
  console.log("updte dt: ", updateData);

  try {
    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (section === "skills" && Array.isArray(updateData.skills)) {
      user.skills = updateData.skills; // Directly store skill names
    } else if (section === "skills") {
      return res.status(400).json({ error: "Skills must be an array" });
    }

    if (section === "education") {
      if (Array.isArray(updateData.education)) {
        user.education = updateData.education; // Update the entire education array
      } else {
        return res.status(400).json({ error: "Education must be an array" });
      }
    }
    if (section === "certifications") {
      if (Array.isArray(updateData.certifications)) {
        user.certifications = updateData.certifications; // Update the entire education array
      } else {
        return res
          .status(400)
          .json({ error: "Certifications must be an array" });
      }
    }

    // Update other fields dynamically
    Object.keys(updateData).forEach((key) => {
      if (
        updateData[key] !== undefined &&
        updateData[key] !== null &&
        key !== "education" &&
        key !== "certifications" &&
        key !== "skills"
      ) {
        user[key] = updateData[key];
      }
    });

    await user.save();

    res.status(200).json({ message: `${section} updated successfully`, user });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = UpdateSection;
