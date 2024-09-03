import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types";

export const EditSummaryModel = ({
  handleSubmit,
  errors,
  register,
  editSection,
  handleClose,
  onSubmit,
  user,
  loading,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-lg w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Edit {editSection}</h2>
          <button onClick={handleClose} className="text-gray-400 text-3xl">
            <IoClose />
          </button>
        </div>
        <form
          className="flex flex-col gap-5 mt-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Add form fields for editing the profile section here */}

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="headline" className="text-base font-medium">
                HeadLine
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-200 outline-none rounded"
                placeholder="HeadLine"
                defaultValue={user?.headline ? user?.headline : ""}
                {...register("headline", { required: true })}
              />
              {errors.headline && (
                <span className="text-red-500 text-sm">
                  HeadLine is required
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-base font-medium" htmlFor="summary">
                Summary
              </label>
              <textarea
                name=""
                id="summary"
                className="w-full p-2 border border-gray-200 outline-none rounded"
                placeholder="Summary"
                rows="6"
                defaultValue={user.summary ? user.summary : ""}
                {...register("summary", { required: true })}
              ></textarea>
              {errors.summary && (
                <span className="text-red-500 text-sm">
                  Summary is required
                </span>
              )}
            </div>
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

EditSummaryModel.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  editSection: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};
