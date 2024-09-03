const User = require("../models/UserModel");
const Education = require("../models/EducationModel");
const Certification = require("../models/CertificationModel");

const UpdateSection = async (req, res) => {
  const { section } = req.params;
  const userId = req.user.userId;
  const updateData = req.body;
  // Log received data
  console.log("Received Update Data:", updateData);

  try {
    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update the user's main fields like profileImg or other details
    if (section === "profile") {
      Object.keys(updateData).forEach((key) => {
        if (updateData[key] !== undefined && updateData[key] !== null) {
          user[key] = updateData[key];
        }
      });
    }

    if (section === "education") {
      // Validate received data
      if (!Array.isArray(updateData.education)) {
        return res.status(400).json({ error: "Education must be an array" });
      }

      // Log the education data specifically
      console.log("Education Data:", updateData.education);

      // Insert education documents
      const educationDocs = await Education.insertMany(updateData.education);
      user.education = educationDocs.map((doc) => doc._id);
    }

    // Handling certifications separately
    if (section === "certifications") {
      // Validate received data
      if (!Array.isArray(updateData.certifications)) {
        return res
          .status(400)
          .json({ error: "Certifications must be an array" });
      }
      const certificationDocs = await Certification.insertMany(
        updateData.certifications
      );
      user.certifications = certificationDocs.map((doc) => doc._id);
    }

    // Handling skills separately
    if (section === "skills" && Array.isArray(updateData.skills)) {
      user.skills = updateData.skills;
    } else if (section === "skills") {
      return res.status(400).json({ error: "Skills must be an array" });
    }

    await user.save();

    res.status(200).json({ message: `${section} updated successfully`, user });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = UpdateSection;
