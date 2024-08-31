const User = require("../models/UserModel");

const UpdateSection = async (req, res) => {
  const { section } = req.params;
  const userId = req.user.userId; // Assuming you have middleware to extract user ID from JWT
  const updateData = req.body; // This will contain the fields to update

  try {
    // Find the user by ID
    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Iterate over the updateData to update only the provided fields
    Object.keys(updateData).forEach((key) => {
      if (updateData[key] !== undefined && updateData[key] !== null) {
        user[key] = updateData[key];
      }
    });

    // Save the updated user
    await user.save();

    res.status(200).json({ message: `${section} updated successfully`, user });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = UpdateSection;
