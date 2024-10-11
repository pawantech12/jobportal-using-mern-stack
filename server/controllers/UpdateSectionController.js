const User = require("../models/UserModel");
const Education = require("../models/EducationModel");
const Certification = require("../models/CertificationModel");
const Experience = require("../models/ExperienceModel");
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

    if (section === "education") {
      try {
        console.log("Education Data before saving:", updateData.education);
        // Insert education documents first and retrieve their ObjectId
        const educationDocs = await Education.insertMany(updateData.education);
        console.log("Education Docs after saving:", educationDocs);

        // Extract the ObjectId of the newly created education documents
        const educationIds = educationDocs.map((doc) => doc._id);
        console.log("Education IDs being pushed:", educationIds);

        // Update the user's education array by pushing the new education ObjectId(s)
        updatedUser = await User.findByIdAndUpdate(
          userId,
          { $push: { education: { $each: educationIds } } }, // Append new education ObjectId(s)
          { new: true, runValidators: true }
        )
          .populate("education")
          .exec();
      } catch (error) {
        console.log("Education Error:", error);
        return res.status(500).json({ error: "Failed to update education" });
      }
    }

    // Special handling for education section
    if (section === "certifications") {
      try {
        console.log(
          "Certification Data before saving:",
          updateData.certifications
        );
        // Insert education documents first and retrieve their ObjectId
        const certificationDocs = await Certification.insertMany(
          updateData.certifications
        );
        console.log("Certification Docs after saving:", certificationDocs);

        // Extract the ObjectId of the newly created education documents
        const certificationIds = certificationDocs.map((doc) => doc._id);
        console.log("Certification IDs being pushed:", certificationIds);

        // Update the user's education array by pushing the new education ObjectId(s)
        updatedUser = await User.findByIdAndUpdate(
          userId,
          { $push: { certifications: { $each: certificationIds } } }, // Append new education ObjectId(s)
          { new: true, runValidators: true }
        )
          .populate("certifications")
          .exec();
      } catch (error) {
        console.log("Certification Error:", error);
        return res
          .status(500)
          .json({ error: "Failed to update Certification" });
      }
    }
    // Special handling for education section
    if (section === "experiences") {
      try {
        console.log("Experiences Data before saving:", updateData.experiences);
        // Insert education documents first and retrieve their ObjectId
        const experienceDocs = await Experience.insertMany(
          updateData.experiences
        );
        console.log("Experience Docs after saving:", experienceDocs);

        // Extract the ObjectId of the newly created education documents
        const experienceIds = experienceDocs.map((doc) => doc._id);
        console.log("Experience IDs being pushed:", experienceIds);

        // Update the user's education array by pushing the new education ObjectId(s)
        updatedUser = await User.findByIdAndUpdate(
          userId,
          { $push: { experiences: { $each: experienceIds } } }, // Append new education ObjectId(s)
          { new: true, runValidators: true }
        )
          .populate("experiences")
          .exec();
      } catch (error) {
        console.log("Experience Error:", error);
        return res.status(500).json({ error: "Failed to update Experience" });
      }
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
