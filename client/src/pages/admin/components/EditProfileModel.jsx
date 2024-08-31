import { IoClose } from "react-icons/io5";
import defaultProfile from "../../../images/default-profile.jpg";
import PropTypes from "prop-types";

export const EditProfileModel = ({
  handleSubmit,
  errors,
  register,
  handleImageChange,
  selectedImage,
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
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          {/* Add form fields for editing the profile section here */}
          <figure className="flex justify-center">
            <label
              htmlFor="profile-upload"
              className="relative cursor-pointer w-fit block"
            >
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Profile Preview"
                  className="w-40 h-40 rounded-full object-cover"
                />
              ) : user.profileImg ? (
                <img
                  src={user.profileImg}
                  alt="Profile Preview"
                  className="w-40 h-40 rounded-full object-cover"
                />
              ) : (
                <img
                  src={defaultProfile}
                  alt="Profile Preview"
                  className="w-40 h-40 rounded-full object-cover"
                />
              )}
              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </figure>
          <div className="flex gap-5">
            <div className="flex flex-col gap-1">
              <label htmlFor="firstname" className="text-base font-medium">
                First name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-200 outline-none rounded"
                placeholder="First Name"
                defaultValue={user.firstname ? user.firstname : ""}
                {...register("firstname", { required: true })}
              />
              {errors.firstname && (
                <span className="text-red-500 text-sm">
                  First name is required
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-base font-medium" htmlFor="lastname">
                Last name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-200 outline-none rounded"
                placeholder="Last Name"
                defaultValue={user.lastname ? user.lastname : ""}
                {...register("lastname", { required: true })}
              />
              {errors.lastname && (
                <span className="text-red-500 text-sm">
                  Last name is required
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

EditProfileModel.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  handleImageChange: PropTypes.func.isRequired,
  selectedImage: PropTypes.string,
  editSection: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};
