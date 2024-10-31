import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoChevronDownOutline, IoClose } from "react-icons/io5";
import { useAuth } from "../../../stores/auth";
import { toast } from "react-toastify";
import { FaEdit } from "react-icons/fa";
import { Editor } from "@tinymce/tinymce-react";

const EditJobPost = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const [skills, setSkills] = useState([]);
  const [category, setCategory] = useState([]);
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [jobDesc, setJobDesc] = useState("");

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/category/");
        setCategory(response.data.categories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategory();
  }, [token]);

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

  const handleEditorChange = (content) => {
    setJobDesc(content);
  };

  // Remove a skill
  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };
  console.log("token: ", token);

  const onSubmit = async (data) => {
    // Ensure skills are included in the submission
    data.requiredSkills = skills;
    data.desc = jobDesc;

    console.log(data);

    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }

    if (data.jobCoverImage) {
      formData.append("jobCoverImage", data.jobCoverImage[0]);
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/create-job",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response);
      toast.success(response.data.message);

      // Reset the form
      reset();
      setImagePreview(null);
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
        <div className="flex justify-center">
          <div className="relative w-9/12 h-96 ">
            <img
              src={
                imagePreview ||
                "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              } // Use userDetails's banner image
              alt="banner img"
              className=" w-full h-full object-cover mx-auto rounded-lg shadow-lg"
            />

            <label className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition duration-300 cursor-pointer">
              <FaEdit className="text-gray-700" />
              <input
                type="file"
                onChange={(event) => {
                  const file = event.target.files[0];
                  if (file) {
                    // Store the file in the form data manually
                    setValue("jobCoverImage", event.target.files);
                    setImagePreview(URL.createObjectURL(file)); // Preview image
                  }
                }}
                className="hidden"
              />
            </label>
          </div>
        </div>
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
          <Editor
            apiKey={import.meta.env.VITE_APP_TINYMCE_EDITOR_API_KEY}
            value={jobDesc}
            onEditorChange={handleEditorChange}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />

          {errors.desc && (
            <span className="text-red-500 text-sm">{errors.desc.message}</span>
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
              {...register("deadline", {
                required: "Deadline Date is required",
              })}
              type="date"
              className="w-full mt-2 p-3 border rounded-md outline-none "
            />
            {errors.deadline && (
              <span className="text-red-500 text-sm">
                {errors.deadline.message}
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
              {category?.map((category, index) => {
                return (
                  <option key={index} value={category?.name}>
                    {category?.name}
                  </option>
                );
              })}
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
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
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

export default EditJobPost;
