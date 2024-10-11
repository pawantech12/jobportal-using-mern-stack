import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { IoClose, IoChevronDown } from "react-icons/io5";

export const AddExperienceModel = ({
  handleClose,
  handleSubmit,
  register,
  onSubmit,
  loading,
}) => {
  // Initialize React Hook Form
  const { reset } = useForm();

  const onFormSubmit = async (data) => {
    // Transform the single entry into an array
    const experienceArray = { experiences: [data] };
    // Pass the transformed data to onSubmit
    await onSubmit(experienceArray);
    // Close the modal and reset form
    reset();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative animate-slideup">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Edit Experience
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 text-3xl"
          >
            <IoClose />
          </button>
        </div>

        <form onSubmit={handleSubmit(onFormSubmit)} className="mt-5 space-y-4">
          {/* Title */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-600"
            >
              Title
            </label>
            <input
              type="text"
              placeholder="Title"
              {...register("title", { required: true })}
              className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-violet-500 rounded-md outline-none shadow-sm"
            />
          </div>

          {/* Company */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="company"
              className="text-sm font-medium text-gray-600"
            >
              Company
            </label>
            <input
              type="text"
              placeholder="Company"
              {...register("company", { required: true })}
              className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-violet-500 rounded-md outline-none shadow-sm"
            />
          </div>

          {/* Job Type with Custom Chevron Icon */}
          <div className="flex flex-col gap-1 relative">
            <label htmlFor="type" className="text-sm font-medium text-gray-600">
              Job Type
            </label>
            <select
              name="type"
              id="type"
              {...register("type", { required: true })}
              className="appearance-none w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-violet-500 rounded-md outline-none shadow-sm"
            >
              <option value="" disabled>
                Select Job Type
              </option>
              <option value="Freelance">Freelance</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
            </select>
            {/* Custom Chevron Icon */}
            <IoChevronDown className="absolute right-3 top-9 text-gray-500 pointer-events-none" />
          </div>

          {/* Start Date & End Date */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="startDate"
                className="text-sm font-medium text-gray-600"
              >
                Start Date
              </label>
              <input
                type="date"
                placeholder="Start Date"
                {...register("startDate")}
                className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-violet-500 rounded-md outline-none shadow-sm"
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="endDate"
                className="text-sm font-medium text-gray-600"
              >
                End Date
              </label>
              <input
                type="date"
                placeholder="End Date"
                {...register("endDate")}
                className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-violet-500 rounded-md outline-none shadow-sm"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="description"
              className="text-sm font-medium text-gray-600"
            >
              Description
            </label>
            <textarea
              placeholder="Description"
              {...register("description")}
              className="w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-violet-500 rounded-md outline-none shadow-sm resize-none"
              rows="5"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={handleClose}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Close
            </button>
            <button
              disabled={loading}
              type="submit"
              className={`${
                loading ? "bg-violet-400" : "bg-violet-500"
              } hover:bg-violet-600 text-white px-4 py-2 rounded-lg transition-colors duration-200`}
            >
              {loading ? "Saving Changes..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

AddExperienceModel.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
