import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { PiNoteDuotone } from "react-icons/pi";
import { MdWorkOutline } from "react-icons/md";
import { useAuth } from "../../../stores/auth";

export const StudentAdmin = () => {
  const { user } = useAuth();

  return (
    <>
      <section>
        <div className="mt-7 border border-gray-200 rounded-xl h-24 flex items-center px-5">
          <h3 className="text-2xl font-semibold">
            Welcome ,{" "}
            <span className="text-violet-500">
              {user?.firstname + " " + user?.lastname}
            </span>
          </h3>
        </div>

        <div className="mt-8 flex gap-9">
          {/* Render this block for candidates */}
          {user?.userType === "candidate" && (
            <>
              <div className="w-full  border border-gray-200 px-8 py-6 rounded-xl">
                <h4 className="font-medium text-lg">Approved Application</h4>
                <div className="flex justify-between items-center mt-2">
                  <PiNoteDuotone className="w-10 h-10 text-zinc-500 group-hover:animate-bounce" />
                  <span className="text-2xl px-6 py-3 text-violet-500 rounded-md bg-violet-100 font-semibold">
                    5
                  </span>
                </div>
              </div>
              <div className="w-full  border border-gray-200 px-8 py-6 rounded-xl">
                <h4 className="font-medium text-lg">Bookmarked</h4>
                <div className="flex justify-between items-center mt-2">
                  <FaRegBookmark className="w-10 h-10 text-zinc-500 group-hover:animate-bounce" />
                  <span className="text-2xl px-6 py-3 text-violet-500 rounded-md bg-violet-100 font-semibold">
                    5
                  </span>
                </div>
              </div>
              <div className="w-full  border border-gray-200 px-8 py-6 rounded-xl">
                <h4 className="font-medium text-lg">Applied Jobs</h4>
                <div className="flex justify-between items-center mt-2">
                  <MdWorkOutline className="w-10 h-10 text-zinc-500 group-hover:animate-bounce" />
                  <span className="text-2xl px-6 py-3 text-violet-500 rounded-md bg-violet-100 font-semibold">
                    5
                  </span>
                </div>
              </div>
            </>
          )}

          {/* Render this block for employers */}
          {user?.userType === "employer" && (
            <>
              <div className="w-full  border border-gray-200 px-8 py-6 rounded-xl">
                <h4 className="font-medium text-lg">Job Posted</h4>
                <div className="flex justify-between items-center mt-2">
                  <MdWorkOutline className="w-10 h-10 text-zinc-500 group-hover:animate-bounce" />
                  <span className="text-2xl px-6 py-3 text-violet-500 rounded-md bg-violet-100 font-semibold">
                    10
                  </span>
                </div>
              </div>
              <div className="w-full  border border-gray-200 px-8 py-6 rounded-xl">
                <h4 className="font-medium text-lg">Total Applications</h4>
                <div className="flex justify-between items-center mt-2">
                  <PiNoteDuotone className="w-10 h-10 text-zinc-500 group-hover:animate-bounce" />
                  <span className="text-2xl px-6 py-3 text-violet-500 rounded-md bg-violet-100 font-semibold">
                    20
                  </span>
                </div>
              </div>
              <div className="w-full  border border-gray-200 px-8 py-6 rounded-xl">
                <h4 className="font-medium text-lg">Shortlisted</h4>
                <div className="flex justify-between items-center mt-2">
                  <FaRegBookmark className="w-10 h-10 text-zinc-500 group-hover:animate-bounce" />
                  <span className="text-2xl px-6 py-3 text-violet-500 rounded-md bg-violet-100 font-semibold">
                    3
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};
