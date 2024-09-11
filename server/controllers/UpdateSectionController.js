const User = require("../models/UserModel");

const UpdateSection = async (req, res) => {
  const { section } = req.params;
  const userId = req.user.userId; // Assuming you have middleware to extract user ID from JWT
  const updateData = req.body; // This will contain the fields to update

  console.log("update dt: ", updateData);

  try {
    // Ensure valid data for specific sections
    if (section === "skills" && !Array.isArray(updateData.skills)) {
      return res.status(400).json({ error: "Skills must be an array" });
    }

    if (section === "education" && !Array.isArray(updateData.education)) {
      return res.status(400).json({ error: "Education must be an array" });
    }

    if (
      section === "certifications" &&
      !Array.isArray(updateData.certifications)
    ) {
      return res.status(400).json({ error: "Certifications must be an array" });
    }

    let updatedUser;

    if (
      section === "profile" ||
      section === "summary" ||
      section === "skills"
    ) {
      updatedUser = await User.findByIdAndUpdate(
        userId,
        { $set: updateData }, // This will update only the fields provided in updateData
        { new: true, runValidators: true } // Return the updated user and run validation
      );
    }

    // Special handling for education section
    if (section === "education") {
      try {
        // Use $push for adding new entries or $set to replace the education array
        updatedUser = await User.findByIdAndUpdate(
          userId,
          { $push: { education: { $each: updateData.education } } }, // Append new education entries
          { new: true, runValidators: true } // Return the updated user and run validation
        );
      } catch (error) {
        console.log("Education Error:", error);
      }

      // Log the education data specifically
      console.log("Education Data:", updateData.education);

      // Insert education documents
      const educationDocs = await Education.insertMany(updateData.education);
      user.education = educationDocs.map((doc) => doc._id);
    }
    // Special handling for education section
    if (section === "certifications") {
      // Use $push for adding new entries or $set to replace the education array
      try {
        updatedUser = await User.findByIdAndUpdate(
          userId,
          { $push: { certifications: { $each: updateData.certifications } } }, // Append new certification entries
          { new: true, runValidators: true } // Return the updated user and run validation
        );
      } catch (error) {
        console.log("Certification Error:", error);
      }
      const certificationDocs = await Certification.insertMany(
        updateData.certifications
      );
      user.certifications = certificationDocs.map((doc) => doc._id);
    }

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res
      .status(200)
      .json({ message: `${section} updated successfully`, user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = UpdateSection;
