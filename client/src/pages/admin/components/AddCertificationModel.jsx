import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";
export const AddCertificationModel = ({
  handleClose,
  handleSubmit,
  register,
  onSubmit,
  loading,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-5 rounded-lg max-w-lg w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Edit Certification</h2>
          <button onClick={handleClose} className="text-gray-400 text-3xl">
            <IoClose />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="title" className="text-base font-medium">
                Title
              </label>
              <input
                type="text"
                placeholder="Title"
                {...register("title", { required: true })}
                className="w-full p-2 border border-gray-200 outline-none rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="issueOrg" className="text-base font-medium">
                Issuing Organisation
              </label>
              <input
                type="text"
                placeholder="Issuing Organisation"
                {...register("issuingOrganization", { required: true })}
                className="w-full p-2 border border-gray-200 outline-none rounded"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="issueDate" className="text-base font-medium">
                  Issue Date
                </label>
                <input
                  type="date"
                  placeholder="Issue Date"
                  {...register("issueDate")}
                  className="w-full p-2 border border-gray-200 outline-none rounded"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="expirationDate"
                  className="text-base font-medium"
                >
                  Expiration Date
                </label>
                <input
                  type="date"
                  placeholder="Expiration Date"
                  {...register("expirationDate")}
                  className="w-full p-2 border border-gray-200 outline-none rounded"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="url" className="text-base font-medium">
                Credential URL
              </label>
              <input
                type="url"
                placeholder="Credential Url"
                {...register("credentialUrl", { required: true })}
                className="w-full p-2 border border-gray-200 outline-none rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="description" className="text-base font-medium">
                Description
              </label>
              <textarea
                placeholder="Description"
                {...register("description")}
                className="w-full p-2 border resize-none border-gray-200 outline-none rounded"
                rows="5"
              ></textarea>
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

AddCertificationModel.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
