import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";

export const EditSkillModel = ({
  handleClose,
  handleSubmit,
  onSubmit,
  errors,
  editSection,
  user,
  loading,
}) => {
  const { register, setValue, getValues } = useForm();
  const [skills, setSkills] = useState(
    user?.skills || ["HTML", "CSS", "JavaScript", "React", "Node.js"]
  );

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

  // Update the form data with the current skills
  useEffect(() => {
    setValue("skills", skills); // Update the skills field in react-hook-form
  }, [skills, setValue]);

  // Submit function that handles form data including skills
  const onFormSubmit = (formData) => {
    // Ensure skills are included in the submission
    formData.skills = skills;
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-lg w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Edit {editSection}</h2>
          <button onClick={handleClose} className="text-gray-400 text-3xl">
            <IoClose />
          </button>
        </div>
        <form onSubmit={handleSubmit(onFormSubmit)} className="mt-3">
          <div className="skills-list flex items-center gap-2">
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
          <div className="flex justify-end mt-4">
            <button
              onClick={handleClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Close
            </button>
            <button
              disabled={loading}
              type="submit"
              className="bg-violet-500 text-white px-4 py-2 rounded"
            >
              {loading ? "Saving Changes..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

EditSkillModel.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object,
  editSection: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};
