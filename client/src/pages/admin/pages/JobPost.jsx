import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoChevronDownOutline, IoClose } from "react-icons/io5";
import { useAuth } from "../../../stores/auth";
import { toast } from "react-toastify";

const JobPost = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const [skills, setSkills] = useState([]);
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);

  // Add new skill
  const addSkill = () => {
    const newSkill = getValues("newSkill");
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setValue("newSkill", ""); // Clear the input field
    }
  };

  // Handle keydown event for adding skills
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission on Enter
      addSkill();
    }
  };

  // Remove a skill
  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const onSubmit = async (data) => {
    // Ensure skills are included in the submission
    data.skills = skills;
    console.log(data);
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/create-job",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Response:", response);
      toast.success(response.data.message);
    } catch (error) {
      console.log("Error posting job:", error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full mx-auto mt-10 p-8 bg-white rounded-xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Post a New Job
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 border border-gray-200 px-6 py-4 rounded-xl"
      >
        {/* Job Title */}
        <div>
          <label className="block font-medium text-gray-700">Job Title</label>
          <input
            {...register("title", { required: "Job Title is required" })}
            type="text"
            className="w-full mt-2 p-3 border rounded-md outline-none"
            placeholder="Enter job title"
          />
          {errors.title && (
            <span className="text-red-500 text-sm">{errors.title.message}</span>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium text-gray-700">Description</label>
          <textarea
            {...register("description", {
              required: "Job Description is required",
            })}
            className="w-full mt-2 p-3 border rounded-md outline-none"
            placeholder="Enter job description"
            rows="4"
          ></textarea>
          {errors.description && (
            <span className="text-red-500 text-sm">
              {errors.description.message}
            </span>
          )}
        </div>

        {/* Required Skills */}
        <div>
          <label className="block font-medium text-gray-700">
            Required Skills
          </label>
          <div className="skills-list flex items-center gap-2 mt-1">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-zinc-200 rounded-full px-3 py-1 flex items-center gap-1 w-fit"
              >
                <span>{skill}</span>
                <button type="button" onClick={() => removeSkill(skill)}>
                  <IoClose />
                </button>
              </div>
            ))}
          </div>
          <div className="add-skill flex flex-col mt-2">
            <input
              type="text"
              placeholder="Add a new skill"
              {...register("newSkill")}
              onKeyDown={handleKeyDown}
              className="w-full p-2 border border-gray-200 outline-none rounded"
            />
          </div>
        </div>

        <div className="flex gap-4 items-center">
          {/* Deadline Date */}
          <div className="w-full">
            <label className="block font-medium text-gray-700">
              Deadline Date
            </label>
            <input
              {...register("deadlineDate", {
                required: "Deadline Date is required",
              })}
              type="date"
              className="w-full mt-2 p-3 border rounded-md outline-none "
            />
            {errors.deadlineDate && (
              <span className="text-red-500 text-sm">
                {errors.deadlineDate.message}
              </span>
            )}
          </div>
          {/* Job Type */}
          <div className="w-full">
            <label className="block font-medium text-gray-700">Job Type</label>
            <div className="relative mt-2">
              <select
                {...register("jobType", { required: "Job Type is required" })}
                className="w-full p-3 border rounded-md outline-none appearance-none"
              >
                <option value="">Select Job Type</option>
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
              <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none">
                <IoChevronDownOutline
                  className="h-5 w-5 text-gray-600"
                  aria-hidden="true"
                />
              </div>
            </div>
            {errors.jobType && (
              <span className="text-red-500 text-sm">
                {errors.jobType.message}
              </span>
            )}
          </div>
        </div>

        {/* Job Category */}
        <div>
          <label className="block font-medium text-gray-700">
            Job Category
          </label>
          <div className="relative mt-2">
            <select
              {...register("jobCategory", {
                required: "Job Category is required",
              })}
              className="w-full p-3 border rounded-md outline-none appearance-none"
            >
              <option value="">Select Job Category</option>
              <option value="engineering">Engineering</option>
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
              <option value="design">Design</option>
              <option value="writing">Writing</option>
              <option value="teaching">Teaching</option>
            </select>
            <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none">
              <IoChevronDownOutline
                className="h-5 w-5 text-gray-600"
                aria-hidden="true"
              />
            </div>
          </div>
          {errors.jobCategory && (
            <span className="text-red-500 text-sm">
              {errors.jobCategory.message}
            </span>
          )}
        </div>

        {/* Salary */}
        <div>
          <label className="block font-medium text-gray-700">Salary</label>
          <div className="flex gap-4 mt-2">
            <input
              {...register("salary", { required: "Salary is required" })}
              type="text"
              className="flex-grow p-3 border rounded-md outline-none w-full"
              placeholder="Enter salary amount"
            />
            <div className="relative w-full">
              <select
                {...register("salaryType")}
                className="p-3 border rounded-md outline-none appearance-none w-full"
              >
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
              <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none">
                <IoChevronDownOutline
                  className="h-5 w-5 text-gray-600"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          {errors.salary && (
            <span className="text-red-500 text-sm">
              {errors.salary.message}
            </span>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium text-gray-700">Location</label>
          <input
            {...register("location", { required: "Location is required" })}
            type="text"
            className="w-full mt-2 p-3 border rounded-md outline-none "
            placeholder="Enter location"
          />
          {errors.location && (
            <span className="text-red-500 text-sm">
              {errors.location.message}
            </span>
          )}
        </div>

        {/* Experience Level */}
        <div>
          <label className="block font-medium text-gray-700">
            Experience Level
          </label>
          <div className="mt-2 relative">
            <select
              {...register("experienceLevel", {
                required: "Experience Level is required",
              })}
              className="w-full p-3 border rounded-md outline-none appearance-none"
            >
              <option value="">Select Experience Level</option>
              <option value="entry">Entry Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior Level</option>
            </select>
            <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none">
              <IoChevronDownOutline
                className="h-5 w-5 text-gray-600"
                aria-hidden="true"
              />
            </div>
          </div>
          {errors.experienceLevel && (
            <span className="text-red-500 text-sm">
              {errors.experienceLevel.message}
            </span>
          )}
        </div>

        {/* English Fluency */}
        <div>
          <label className="block font-medium text-gray-700">
            English Fluency
          </label>
          <div className="relative mt-2">
            <select
              {...register("englishFluency", {
                required: "English Fluency is required",
              })}
              className="w-full p-3 border rounded-md outline-none appearance-none"
            >
              <option value="">Select English Fluency</option>
              <option value="basic">Basic</option>
              <option value="intermediate">Intermediate</option>
              <option value="fluent">Fluent</option>
            </select>
            <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none">
              <IoChevronDownOutline
                className="h-5 w-5 text-gray-600"
                aria-hidden="true"
              />
            </div>
          </div>
          {errors.englishFluency && (
            <span className="text-red-500 text-sm">
              {errors.englishFluency.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 mt-6 bg-violet-500 text-white font-semibold rounded-md hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2"
        >
          {loading ? "Posting Job" : "Post Job"}
        </button>
      </form>
    </section>
  );
};

export default JobPost;
