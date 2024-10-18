import React, { useState } from "react";
import JobSampleData from "../../../data/job.sample.data";
import { FaEdit, FaTrash } from "react-icons/fa";

const JobPostsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 5;

  // Calculate total pages
  const totalPages = Math.ceil(JobSampleData.length / entriesPerPage);

  // Define the max page buttons to show in the pagination (e.g., 5)
  const maxVisiblePages = 5;

  // Get current blogs for the page
  const currentJobs = JobSampleData.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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

  return (
    <div className=" mx-auto">
      <div className="py-8">
        <div className="flex flex-row mb-1  justify-between w-full">
          <h2 className="text-xl font-medium text-neutral-600">
            All Application
          </h2>
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
                {currentJobs.map((job, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-4 border-b">{job.jobTitle}</td>
                    <td className="p-4 border-b">{job.jobCreated}</td>
                    <td className="p-4 border-b">{job.applicants}</td>
                    <td className="p-4 border-b">
                      <span
                        className={`${
                          job.status === "Open"
                            ? "text-emerald-500 bg-emerald-100 px-2 py-2 font-medium rounded-md text-sm"
                            : "text-gray-500 bg-gray-100 px-2 py-2 font-medium rounded-md text-sm"
                        }`}
                      >
                        {job.status}
                      </span>
                    </td>
                    <td className="p-4 border-b flex space-x-4">
                      <button className="text-red-500 hover:text-red-700 bg-red-100 px-2 py-2 font-medium rounded-md text-sm">
                        <FaTrash />
                      </button>
                      <button className="text-emerald-500 hover:text-emerald-700 bg-emerald-100 px-2 py-2 font-medium rounded-md">
                        <FaEdit />
                      </button>
                    </td>
                  </tr>
                ))}
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
                to{" "}
                {Math.min(currentPage * entriesPerPage, JobSampleData.length)}{" "}
                of {JobSampleData.length} entries
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
    </div>
  );
};

export default JobPostsList;
