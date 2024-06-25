import React from "react";
import { Link } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import locImg from "../images/location.svg";
import jobImg from "../images/job.svg";
export const BrowseJobs = () => {
  return (
    <section>
      <div className="bg-[#FFF9F3] px-24 py-12">
        <div className="flex justify-between">
          <div>
            <h4 className="text-3xl font-bold text-neutral-700">
              There Are 65.866 Jobs Here For you!
            </h4>
            <p className="mt-4 text-zinc-500">
              Discover your next career move, freelance gig, or internship
            </p>
          </div>
          <span className="self-end text-zinc-400">
            <Link className="text-neutral-900 hover:text-violet-500 transition-all ease-in-out duration-200 cursor-pointer">
              Home
            </Link>{" "}
            / Jobs listing
          </span>
        </div>
        <form
          action=""
          className="bg-white rounded-xl p-4 flex justify-between mt-8"
        >
          <div className="flex items-center gap-2 w-[88%]">
            <RiSearch2Line className="w-6 h-6 text-zinc-400" />
            <input
              type="text"
              className="w-full border-none outline-none"
              placeholder="Job Title"
            />
          </div>
          <button className="py-2 px-4 hover:bg-violet-500 transition-all ease-in-out duration-200 bg-[#9777fa] text-[17px] font-medium text-white rounded-md">
            Find Now
          </button>
        </form>
      </div>
      <div className="px-24 flex gap-3 mt-20 justify-between">
        <div className="w-1/4">
          <div className="bg-blue-100 p-5 rounded-xl">
            <h5 className="text-xl font-semibold">Set job reminder</h5>
            <p className="text-sm text-zinc-500 mt-2">
              Enter you email address and get job notification.
            </p>
            <form action="" className="mt-3 flex flex-col gap-4">
              <div className="bg-white flex items-center gap-1 p-3  rounded-lg">
                <HiOutlineMail className="w-6 h-6 text-zinc-400" />
                <input
                  type="email"
                  className="w-full border-none outline-none px-2"
                  placeholder="Email"
                  name=""
                  id=""
                />
              </div>
              <button className="bg-violet-400 hover:bg-violet-500 text-white rounded-lg py-2 font-medium text-lg transition-all ease-in-out duration-200">
                Submit
              </button>
            </form>
          </div>
          <div className="border mt-7 border-zinc-200 rounded-xl p-5">
            <form action="">
              <div>
                <label
                  htmlFor=""
                  className="font-semibold text-lg text-neutral-700"
                >
                  Location
                </label>
                <div className="border border-zinc-200 rounded-md flex items-center gap-2 p-2 mt-3">
                  <img src={locImg} alt="" />
                  <input type="text" className="h-8" placeholder="Location" />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor=""
                  className="font-semibold text-lg text-neutral-700"
                >
                  Category
                </label>
                <div className="border border-zinc-200 rounded-md flex items-center gap-2 p-2 mt-3">
                  <img src={jobImg} alt="Job Img" />

                  <input
                    type="text"
                    name="job"
                    id="job"
                    placeholder="Category"
                    className="outline-none h-7"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor=""
                  className="font-semibold text-lg text-neutral-700"
                >
                  Job Type
                </label>
                <ul className="mt-3 flex flex-col gap-2">
                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        name=""
                        className="custom-checkbox"
                        id=""
                      />

                      <small className="text-[15px]">Full Time Jobs</small>
                    </div>
                    <span className="text-sm py-1 px-2 bg-zinc-200 text-zinc-500 font-medium rounded-md ">
                      235
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        name=""
                        className="custom-checkbox"
                        id=""
                      />

                      <small className="text-[15px]">Part Time Jobs</small>
                    </div>
                    <span className="text-sm py-1 px-2 bg-zinc-200 text-zinc-500 font-medium rounded-md ">
                      235
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        name=""
                        className="custom-checkbox"
                        id=""
                      />

                      <small className="text-[15px]">Remote Jobs</small>
                    </div>
                    <span className="text-sm py-1 px-2 bg-zinc-200 text-zinc-500 font-medium rounded-md ">
                      235
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        name=""
                        className="custom-checkbox"
                        id=""
                      />

                      <small className="text-[15px]">Freelance Jobs</small>
                    </div>
                    <span className="text-sm py-1 px-2 bg-zinc-200 text-zinc-500 font-medium rounded-md ">
                      235
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        name=""
                        className="custom-checkbox"
                        id=""
                      />

                      <small className="text-[15px]">Temporary Jobs</small>
                    </div>
                    <span className="text-sm py-1 px-2 bg-zinc-200 text-zinc-500 font-medium rounded-md ">
                      235
                    </span>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
        <div className="w-3/4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            provident culpa velit. Beatae nesciunt quam voluptatibus impedit
            nobis quia cumque quibusdam velit nulla dicta. Pariatur amet ea fuga
            veritatis fugit vel cupiditate ut minima! Vel adipisci laborum,
            ipsum voluptas maiores dicta corrupti sit ad, ab aut sapiente illo
            maxime iste exercitationem impedit quasi quaerat asperiores?
          </p>
        </div>
      </div>
    </section>
  );
};
