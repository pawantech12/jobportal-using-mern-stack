const JobPost = require("../models/jobpost.model");
const crypto = require("crypto");
const cloudinary = require("../config/cloudinary");
const User = require("../models/user.model");
const Category = require("../models/category.model");

const computeImageHash = (buffer) => {
  return crypto.createHash("md5").update(buffer).digest("hex");
};
const createJob = async (req, res) => {
  const userId = req.user.userId;

  try {
    const {
      title,
      desc,
      location,
      salary,
      salaryType,
      deadline,
      jobType,
      jobCategory: categoryName,
      englishFluency,
      experienceLevel,
      requiredSkills,
    } = req.body;

    let parsedRequiredSkills;
    try {
      parsedRequiredSkills = JSON.parse(requiredSkills);
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "Invalid requiredSkills format",
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (req.file) {
      // Compute hash of the image buffer
      const imageBuffer = req.file.buffer;
      const imageHash = computeImageHash(imageBuffer);

      // Check if the image with the same hash already exists in the database
      const existingJob = await JobPost.findOne({ imageHash });
      if (existingJob) {
        return res.status(400).json({
          success: false,
          message: "Job with the same image already exists",
        });
      }

      // Upload image to Cloudinary and get the public_id and secure_url
      const uploadResult = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "job_board_website/job_images" },
          (error, result) => {
            if (error) {
              console.error("Cloudinary upload error:", error);
              return reject(new Error("Image upload failed"));
            }
            resolve(result);
          }
        );
        stream.end(imageBuffer); // Upload the image buffer
      });

      imageUrl = uploadResult.secure_url;
      publicId = uploadResult.public_id;

      const jobCategory = await Category.findOne({ name: categoryName });

      // Save the new category with the image hash
      const newJob = new JobPost({
        employerId: userId,
        title,
        company: user.company,
        desc,
        requiredSkills: parsedRequiredSkills,
        deadline,
        jobType,
        jobCategory: jobCategory._id,
        salary,
        salaryType,
        location,
        experienceLevel,
        englishFluency,
        jobCoverImage: imageUrl,
        imageHash,
        publicId,
      });

      await newJob.save();

      res.status(201).json({
        success: true,
        message: "Job created successfully",
        Jobs: newJob,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to create job",
      success: false,
      error: error.message,
    });
  }
};

const getAllJobsPostedByUser = async (req, res) => {
  // write get all job posted by user
  try {
    const userId = req.user.userId;
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    const jobs = await JobPost.find({ employerId: userId });

    res.status(200).json({
      success: true,
      jobs,
    });
  } catch (error) {
    console.log("error while getting all jobs", error);
  }
};

// delete job with jobCoverImage from cloudinary using jobid
const deleteJob = async (req, res) => {
  const jobid = req.params.id;
  try {
    const job = await JobPost.findById(jobid);
    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }
    await cloudinary.uploader.destroy(job.publicId);

    await JobPost.findByIdAndDelete(jobid);

    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    console.log("error while deleting job", error);
  }
};

module.exports = { createJob, getAllJobsPostedByUser, deleteJob };
