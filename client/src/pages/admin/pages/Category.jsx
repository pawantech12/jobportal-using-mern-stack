import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../../../stores/auth";

const Category = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false); // New state for delete modal
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/api/category/");
        setCategory(response.data.categories);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, []);

  const entriesPerPage = 5;
  const totalPages = Math.ceil(category.length / entriesPerPage);
  const maxVisiblePages = 5;
  const currentJobs = category.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPaginationRange = () => {
    const totalNumbers = maxVisiblePages;
    const sidePages = Math.floor(maxVisiblePages / 2);

    if (totalPages <= totalNumbers) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const startPage = Math.max(2, currentPage - sidePages);
    const endPage = Math.min(totalPages - 1, currentPage + sidePages);

    const paginationArray = [];
    paginationArray.push(1);
    if (startPage > 2) paginationArray.push("...");
    for (let i = startPage; i <= endPage; i++) {
      paginationArray.push(i);
    }
    if (endPage < totalPages - 1) paginationArray.push("...");
    paginationArray.push(totalPages);

    return paginationArray;
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const { token } = useAuth();
  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("imageUrl", data.imageUrl[0]);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/category/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);

      setCategory([...category, response.data.category]);
      toast.success(response.data.message);
      closeModal();
    } catch (error) {
      toast.error(error.response.data.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const confirmDelete = (id) => {
    setSelectedCategoryId(id); // Set selected category ID
    setShowDeleteModal(true); // Show delete confirmation modal
  };

  const handleDeleteConfirmed = async (id) => {
    if (!selectedCategoryId) return;
    setLoading(true);
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/category/delete/${selectedCategoryId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);

      setCategory(category.filter((cat) => cat._id !== selectedCategoryId));
      toast.success(response.data.message);
      setShowDeleteModal(false);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" mx-auto">
      <div className="py-8">
        <div className="flex flex-row mb-1 justify-between w-full">
          <h2 className="text-xl font-medium text-neutral-600">All Jobs</h2>
          <button
            onClick={openModal}
            className="bg-violet-400 px-4 py-2 rounded-md text-white font-medium text-sm hover:bg-violet-500 flex items-center gap-1"
          >
            <MdOutlineAdd className="w-5 h-5" />
            Add category
          </button>
        </div>

        {/* Modal for Adding Category */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-96">
              <h2 className="text-xl font-semibold mb-4 text-neutral-700">
                Add Category
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Category Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md outline-none"
                    {...register("name", { required: true })}
                    placeholder="Enter category name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Upload Icon
                  </label>
                  <input
                    type="file"
                    {...register("imageUrl")}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={closeModal}
                    className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    disabled={loading}
                    type="submit"
                    className="bg-violet-500 text-white px-4 py-2 rounded"
                  >
                    {loading ? "Adding..." : "Add Category"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-80">
              <h2 className="text-lg font-semibold text-gray-700">
                Confirm Deletion
              </h2>
              <p className="mt-4 text-gray-600">
                Are you sure you want to delete this category?
              </p>
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  disabled={loading}
                  onClick={handleDeleteConfirmed}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  {loading ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Table of Jobs */}
        {category.length > 0 ? (
          <div className="py-4 overflow-x-auto">
            <div className="inline-block min-w-full rounded-md overflow-hidden">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="rounded-s-md">
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-violet-100 text-left text-sm font-semibold text-violet-700 uppercase tracking-wider">
                      Icon
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-violet-100 text-left text-sm font-semibold text-violet-700 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-violet-100 text-left text-sm font-semibold text-violet-700 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {category.map((cat, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="p-4 border-b">
                        <figure className="w-16 h-16">
                          <img
                            src={cat.imageUrl}
                            alt={cat.name}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </figure>
                      </td>
                      <td className="p-4 border-b">{cat.name}</td>
                      <td className="p-4 border-b">
                        <button
                          className="text-red-500 hover:bg-red-500 hover:text-white bg-red-100 transition-colors ease-in-out duration-200 px-2 py-2 font-medium rounded-md text-sm flex items-center gap-1"
                          onClick={() => confirmDelete(cat._id)}
                        >
                          <FaTrash /> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="flex justify-between items-center mt-4 px-4">
                <div className="text-gray-600 text-sm font-medium">
                  Showing{" "}
                  {currentJobs.length > 0
                    ? (currentPage - 1) * entriesPerPage + 1
                    : 0}{" "}
                  to {Math.min(currentPage * entriesPerPage, category.length)}{" "}
                  of {category.length} entries
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 border ${
                      currentPage === 1
                        ? "bg-gray-200 text-gray-500"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    } rounded-md`}
                  >
                    Previous
                  </button>
                  {getPaginationRange().map((page, index) =>
                    page === "..." ? (
                      <span key={index} className="px-3 py-1">
                        ...
                      </span>
                    ) : (
                      <button
                        key={index}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-1 border ${
                          currentPage === page
                            ? "bg-violet-400 text-white"
                            : "bg-white text-gray-700 hover:bg-gray-100"
                        } rounded-md`}
                      >
                        {page}
                      </button>
                    )
                  )}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 border ${
                      currentPage === totalPages
                        ? "bg-gray-200 text-gray-500"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    } rounded-md`}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-4">
            <p className="text-center text-gray-500 font-medium">
              No category found
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
