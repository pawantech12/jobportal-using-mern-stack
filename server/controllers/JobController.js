const JobPost = require("../models/JobPostModel");

const createJob = async (req, res) => {
  const userId = req.user.userId;
  const {
    title,
    company,
    desc,
    requiredSkills,
    deadline,
    jobType,
    jobCategory,
    salary,
    salaryType,
    location,
    experienceLevel,
    englishFluency,
  } = req.body;
  try {
    const newJob = new JobPost({
      employerId: userId,
      title,
      company,
      desc,
      requiredSkills,
      deadline,
      jobType,
      jobCategory,
      salary,
      salaryType,
      location,
      experienceLevel,
      englishFluency,
    });
    const savedJob = await newJob.save();

    res
      .status(201)
      .json({ message: "Job created successfully", success: true, savedJob });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create job",
      success: false,
      error: error.message,
    });
  }
};

module.exports = { createJob };
