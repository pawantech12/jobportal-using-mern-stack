import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../stores/auth";
import { formatDate, getStatus } from "../../../helper/formate.date";
import { toast } from "react-toastify";

const JobPostsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false); // New state for delete modal
  const [selectedJobId, setSelectedJobId] = useState(null);
  const entriesPerPage = 5;

  const { token } = useAuth();

  useEffect(() => {
    const fetchAllJobsPostedByCurrentUser = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/all-jobs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setJobs(response.data.jobs);
      } catch (error) {
        console.log("error while fetching jobs", error);
      }
    };

    fetchAllJobsPostedByCurrentUser();
  }, [token]);

  // Calculate total pages
  const totalPages = Math.ceil(jobs.length / entriesPerPage);

  // Define the max page buttons to show in the pagination (e.g., 5)
  const maxVisiblePages = 5;

  // Get current blogs for the page
  const currentJobs = jobs.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Generate pagination numbers with "..." logic
  const getPaginationRange = () => {
    const totalNumbers = maxVisiblePages;
    const sidePages = Math.floor(maxVisiblePages / 2);

    if (totalPages <= totalNumbers) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const startPage = Math.max(2, currentPage - sidePages);
    const endPage = Math.min(totalPages - 1, currentPage + sidePages);

    const showStartEllipsis = startPage > 2;
    const showEndEllipsis = endPage < totalPages - 1;

    const paginationArray = [];

    paginationArray.push(1);
    if (showStartEllipsis) paginationArray.push("...");
    for (let i = startPage; i <= endPage; i++) {
      paginationArray.push(i);
    }
    if (showEndEllipsis) paginationArray.push("...");
    paginationArray.push(totalPages);

    return paginationArray;
  };

  const confirmDelete = (id) => {
    setSelectedJobId(id); // Set selected category ID
    setShowDeleteModal(true); // Show delete confirmation modal
  };

  const handleDeleteConfirmed = async (jobid) => {
    if (!selectedJobId) return;
    setLoading(true);
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/delete-job/${selectedJobId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);

      setJobs(jobs.filter((job) => job._id !== selectedJobId));

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
    <div className=" mx-auto relative">
      <div className="py-8">
        <div className="flex flex-row mb-1  justify-between w-full">
          <h2 className="text-xl font-medium text-neutral-600">All Jobs</h2>
          <button className=" bg-violet-400 px-4 py-2 rounded-md text-white font-medium text-sm hover:bg-violet-500">
            <Link
              to={`/dashboard/create-job`}
              className="flex items-center gap-1"
            >
              <MdOutlineAdd className="w-5 h-5" />
              Add Job
            </Link>
          </button>
        </div>
        <div className="py-4 overflow-x-auto">
          <div className="inline-block min-w-full rounded-md overflow-hidden">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="rounded-s-md">
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-violet-100 text-left text-sm font-semibold text-violet-700 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-violet-100 text-left text-sm font-semibold text-violet-700 uppercase tracking-wider">
                    Job Created
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-violet-100 text-left text-sm font-semibold text-violet-700 uppercase tracking-wider">
                    Applicants
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-violet-100 text-left text-sm font-semibold text-violet-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-violet-100 text-left text-sm font-semibold text-violet-700 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentJobs.map((job, index) => {
                  const status = getStatus(job.deadline);
                  // console.log("status: ", status);
                  return (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="p-4 border-b">{job.title}</td>
                      <td className="p-4 border-b">
                        {formatDate(job.postedAt)}
                      </td>
                      <td className="p-4 border-b">
                        {job.applications.length}
                      </td>
                      <td className="p-4 border-b">
                        <span
                          className={`${
                            status === "Open"
                              ? "text-emerald-500 bg-emerald-100 px-2 py-2 font-medium rounded-md text-sm"
                              : "text-gray-500 bg-gray-100 px-2 py-2 font-medium rounded-md text-sm"
                          }`}
                        >
                          {status}
                        </span>
                      </td>
                      <td className="p-4 border-b flex space-x-4">
                        <button
                          className="text-red-500 hover:text-white bg-red-100 hover:bg-red-500 px-2 py-2 font-medium rounded-md text-sm"
                          onClick={() => confirmDelete(job._id)}
                        >
                          <FaTrash />
                        </button>
                        <button className="text-emerald-500 hover:text-emerald-700 bg-emerald-100 px-2 py-2 font-medium rounded-md">
                          <FaEdit />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Pagination Section */}
            <div className="flex justify-between items-center mt-4 px-4">
              {/* Showing Entries Info */}
              <div className="text-gray-600 text-sm font-medium">
                Showing{" "}
                {currentJobs.length > 0
                  ? (currentPage - 1) * entriesPerPage + 1
                  : 0}{" "}
                to {Math.min(currentPage * entriesPerPage, jobs.length)} of{" "}
                {jobs.length} entries
              </div>

              {/* Pagination Buttons */}
              <div className="space-x-2">
                {/* Previous Button */}
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

                {/* Page Numbers with Ellipsis */}
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

                {/* Next Button */}
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
      </div>

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
    </div>
  );
};

export default JobPostsList;
