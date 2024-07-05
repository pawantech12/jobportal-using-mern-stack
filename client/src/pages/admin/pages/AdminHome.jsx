import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { PiNoteDuotone } from "react-icons/pi";
import { MdWorkOutline } from "react-icons/md";
export const AdminHome = () => {
  return (
    <>
      <section>
        <div className="mt-7 border border-gray-200 rounded-xl h-24 flex items-center px-5">
          <h3 className="text-2xl font-semibold">
            Welcome , <span className="text-violet-500">Pawan Kumavat</span>
          </h3>
        </div>
        <div className="mt-8 flex gap-9">
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
        </div>
      </section>
    </>
  );
};
