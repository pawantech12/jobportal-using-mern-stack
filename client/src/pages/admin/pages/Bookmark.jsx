import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

export const Bookmark = () => {
  return (
    <>
      <div className=" mx-auto">
        <div className="py-8">
          <div className="flex flex-row mb-1  justify-between w-full">
            <h2 className="text-xl font-medium text-neutral-600">
              All Bookmarks
            </h2>
          </div>
          <div className="py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-md overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead className="h-14">
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-violet-100 text-left text-sm font-semibold text-violet-700 uppercase tracking-wider">
                      Job Title
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-violet-100  text-left text-sm font-semibold text-violet-700 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-violet-100  text-left text-sm font-semibold text-violet-700 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-violet-100  text-left text-sm font-semibold text-violet-700 uppercase tracking-wider">
                      Date Saved
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-violet-100  text-left text-sm font-semibold text-violet-700 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-500 font-medium whitespace-no-wrap">
                        Web Developer
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-500 font-medium whitespace-no-wrap">
                        Google
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-500 font-medium whitespace-no-wrap">
                        Ind
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-500 font-medium whitespace-no-wrap">
                        24 july
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <button className="bg-red-400 p-2 text-white rounded-md">
                        <RiDeleteBin5Line className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
