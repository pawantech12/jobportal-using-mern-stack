import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import locImg from "../images/location.svg";
import jobImg from "../images/job.svg";
import { FaList, FaRegBookmark } from "react-icons/fa6";
import { BsGridFill } from "react-icons/bs";

import { Range, getTrackBackground } from "react-range";
import { GoDotFill } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import { BiCheckShield } from "react-icons/bi";
export const BrowseJobs = () => {
  const [values, setValues] = useState([0, 100000]);
  const min = 0;
  const max = 100000;
  const step = 100;

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
      <div className="px-24 flex gap-6 mt-20 justify-between">
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
              <div className="mt-6">
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
              <div className="mt-6">
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
              <div className="mt-6">
                <label
                  htmlFor=""
                  className="font-semibold text-lg text-neutral-700"
                >
                  Experience Level
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

                      <small className="text-[15px]">Expert</small>
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

                      <small className="text-[15px]">Senior</small>
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

                      <small className="text-[15px]">Junior</small>
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

                      <small className="text-[15px]">Regular</small>
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

                      <small className="text-[15px]">Internship</small>
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

                      <small className="text-[15px]">Associate</small>
                    </div>
                    <span className="text-sm py-1 px-2 bg-zinc-200 text-zinc-500 font-medium rounded-md ">
                      235
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <label
                  htmlFor=""
                  className="font-semibold text-lg text-neutral-700"
                >
                  Salary Range
                </label>

                <Range
                  values={values}
                  step={step}
                  min={min}
                  max={max}
                  onChange={(values) => setValues(values)}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      className="w-full h-[6px] mt-4 bg-gray-100 rounded-md"
                      style={{
                        background: getTrackBackground({
                          values,
                          colors: ["#EBEBEB", "#9777FA", "#EBEBEB"],
                          min: min,
                          max: max,
                        }),
                      }}
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props, isDragged }) => (
                    <div
                      {...props}
                      className={`h-4 w-4 rounded-full bg-white outline-none shadow-md  ring-1 ring-zinc-200 ${
                        isDragged ? "ring-2 ring-zinc-200" : ""
                      }`}
                    />
                  )}
                />
                <div className="flex justify-between gap-2 items-center mt-6">
                  <div className="flex flex-col gap-2 w-full">
                    <span className="text-[13px] font-semibold text-neutral-700">
                      From
                    </span>
                    <div className="h-14 border rounded-md text-zinc-400 font-medium border-zinc-200 outline-none bg-zinc-100 px-3 flex justify-center items-center">
                      ${values[0]}
                    </div>
                  </div>
                  -
                  <div className="flex flex-col gap-2 w-full">
                    <span className="text-[13px] font-semibold text-neutral-700">
                      To
                    </span>
                    <div className="h-14 border rounded-md text-zinc-400 font-medium border-zinc-200 outline-none bg-zinc-100 px-3 flex justify-center items-center">
                      ${values[1]}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-10">
                <button className="bg-violet-500 text-sm font-medium text-white rounded-md px-3 py-2 hover:bg-violet-600 hover:-translate-y-[0.15rem] transition-all ease-in-out duration-200">
                  Apply Filter
                </button>
                <button className="rounded-md hover:bg-zinc-50 hover:-translate-y-[0.15rem] transition-all ease-in-out duration-200 px-3 py-2 border border-zinc-200 text-sm font-medium text-zinc-400">
                  Reset Filter
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-3/4">
          <div className="flex justify-between mt-2 items-center">
            <div>
              <p className="text-sm ">
                Showing <span className="font-semibold">41-60</span> of{" "}
                <span className="font-semibold">944</span> jobs
              </p>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center space-x-1">
                <span className="text-sm text-zinc-400 font-semibold">
                  Sort by:
                </span>
                <select className="text-sm outline-none font-semibold">
                  <option value="jobhub">jobhub</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 border text-zinc-400 border-zinc-200 rounded-md hover:text-violet-500 hover:border-violet-500 transition-all ease-in-out duration-200">
                  <FaList />
                </button>
                <button className="p-2 border text-zinc-400 border-zinc-200 rounded-md hover:text-violet-500 hover:border-violet-500 transition-all ease-in-out duration-200">
                  <BsGridFill />{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-6 flex-wrap transition-opacity duration-500 ease-in-out opacity-100 mt-6">
            <div className="w-[260px] rounded-xl anim border border-gray-200 hover:border-violet-400 hover:-translate-y-[0.15rem] opacity-0 animate-fadeIn transition-transform transform ease-in-out duration-500 cursor-pointer">
              <figure>
                <img
                  src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/job-1.png"
                  alt=""
                  className="rounded-ss-xl rounded-se-xl"
                />
              </figure>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <img
                      src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/logo-1.svg"
                      alt=""
                      className="px-1 py-[7px] bg-gray-200 rounded-full"
                    />
                    <h5 className="text-sm font-medium">Alithemes</h5>
                  </div>
                  <span className="flex items-center gap-[2px] text-sm px-2 py-1 rounded-md bg-indigo-50 hover:text-violet-500 transition-all ease-in-out duration-200">
                    <GoDotFill className="text-violet-400 w-3 h-3" />
                    Fulltime
                  </span>
                </div>
                <h4 className="text-base font-medium mt-5 hover:text-violet-500 transition-all ease-in-out duration-200">
                  Senior Full Stack Engineer, Full Time
                </h4>
                <div className="flex gap-3 items-center mt-3">
                  <span className="flex items-center gap-1 text-sm">
                    <IoMdTime className="text-zinc-400 w-5 h-5" />
                    39 mins ago
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <GrLocation className="text-zinc-400 w-5 h-5" />
                    Chicago
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <small className="text-gray-400 font-medium flex items-center">
                    <span className="text-blue-500 text-xl font-bold">
                      &#x24;3200
                    </span>
                    /Month
                  </small>

                  <div className="flex items-center gap-2">
                    <button>
                      <BiCheckShield className="text-zinc-400 w-7 h-7" />
                    </button>
                    <button>
                      <FaRegBookmark className="text-zinc-400 w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[260px] rounded-xl anim border border-gray-200 hover:border-violet-400 hover:-translate-y-[0.15rem] opacity-0 animate-fadeIn transition-transform transform ease-in-out duration-500 cursor-pointer">
              <figure>
                <img
                  src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/job-1.png"
                  alt=""
                  className="rounded-ss-xl rounded-se-xl"
                />
              </figure>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <img
                      src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/logo-1.svg"
                      alt=""
                      className="px-1 py-[7px] bg-gray-200 rounded-full"
                    />
                    <h5 className="text-sm font-medium">Alithemes</h5>
                  </div>
                  <span className="flex items-center gap-[2px] text-sm px-2 py-1 rounded-md bg-indigo-50 hover:text-violet-500 transition-all ease-in-out duration-200">
                    <GoDotFill className="text-violet-400 w-3 h-3" />
                    Fulltime
                  </span>
                </div>
                <h4 className="text-base font-medium mt-5 hover:text-violet-500 transition-all ease-in-out duration-200">
                  Senior Full Stack Engineer, Full Time
                </h4>
                <div className="flex gap-3 items-center mt-3">
                  <span className="flex items-center gap-1 text-sm">
                    <IoMdTime className="text-zinc-400 w-5 h-5" />
                    39 mins ago
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <GrLocation className="text-zinc-400 w-5 h-5" />
                    Chicago
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <small className="text-gray-400 font-medium flex items-center">
                    <span className="text-blue-500 text-xl font-bold">
                      &#x24;3200
                    </span>
                    /Month
                  </small>

                  <div className="flex items-center gap-2">
                    <button>
                      <BiCheckShield className="text-zinc-400 w-7 h-7" />
                    </button>
                    <button>
                      <FaRegBookmark className="text-zinc-400 w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[260px] rounded-xl anim border border-gray-200 hover:border-violet-400 hover:-translate-y-[0.15rem] opacity-0 animate-fadeIn transition-transform transform ease-in-out duration-500 cursor-pointer">
              <figure>
                <img
                  src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/job-1.png"
                  alt=""
                  className="rounded-ss-xl rounded-se-xl"
                />
              </figure>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <img
                      src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/logo-1.svg"
                      alt=""
                      className="px-1 py-[7px] bg-gray-200 rounded-full"
                    />
                    <h5 className="text-sm font-medium">Alithemes</h5>
                  </div>
                  <span className="flex items-center gap-[2px] text-sm px-2 py-1 rounded-md bg-indigo-50 hover:text-violet-500 transition-all ease-in-out duration-200">
                    <GoDotFill className="text-violet-400 w-3 h-3" />
                    Fulltime
                  </span>
                </div>
                <h4 className="text-base font-medium mt-5 hover:text-violet-500 transition-all ease-in-out duration-200">
                  Senior Full Stack Engineer, Full Time
                </h4>
                <div className="flex gap-3 items-center mt-3">
                  <span className="flex items-center gap-1 text-sm">
                    <IoMdTime className="text-zinc-400 w-5 h-5" />
                    39 mins ago
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <GrLocation className="text-zinc-400 w-5 h-5" />
                    Chicago
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <small className="text-gray-400 font-medium flex items-center">
                    <span className="text-blue-500 text-xl font-bold">
                      &#x24;3200
                    </span>
                    /Month
                  </small>

                  <div className="flex items-center gap-2">
                    <button>
                      <BiCheckShield className="text-zinc-400 w-7 h-7" />
                    </button>
                    <button>
                      <FaRegBookmark className="text-zinc-400 w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[260px] rounded-xl anim border border-gray-200 hover:border-violet-400 hover:-translate-y-[0.15rem] opacity-0 animate-fadeIn transition-transform transform ease-in-out duration-500 cursor-pointer">
              <figure>
                <img
                  src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/job-1.png"
                  alt=""
                  className="rounded-ss-xl rounded-se-xl"
                />
              </figure>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <img
                      src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/logo-1.svg"
                      alt=""
                      className="px-1 py-[7px] bg-gray-200 rounded-full"
                    />
                    <h5 className="text-sm font-medium">Alithemes</h5>
                  </div>
                  <span className="flex items-center gap-[2px] text-sm px-2 py-1 rounded-md bg-indigo-50 hover:text-violet-500 transition-all ease-in-out duration-200">
                    <GoDotFill className="text-violet-400 w-3 h-3" />
                    Fulltime
                  </span>
                </div>
                <h4 className="text-base font-medium mt-5 hover:text-violet-500 transition-all ease-in-out duration-200">
                  Senior Full Stack Engineer, Full Time
                </h4>
                <div className="flex gap-3 items-center mt-3">
                  <span className="flex items-center gap-1 text-sm">
                    <IoMdTime className="text-zinc-400 w-5 h-5" />
                    39 mins ago
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <GrLocation className="text-zinc-400 w-5 h-5" />
                    Chicago
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <small className="text-gray-400 font-medium flex items-center">
                    <span className="text-blue-500 text-xl font-bold">
                      &#x24;3200
                    </span>
                    /Month
                  </small>

                  <div className="flex items-center gap-2">
                    <button>
                      <BiCheckShield className="text-zinc-400 w-7 h-7" />
                    </button>
                    <button>
                      <FaRegBookmark className="text-zinc-400 w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[260px] rounded-xl anim border border-gray-200 hover:border-violet-400 hover:-translate-y-[0.15rem] opacity-0 animate-fadeIn transition-transform transform ease-in-out duration-500 cursor-pointer">
              <figure>
                <img
                  src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/job-1.png"
                  alt=""
                  className="rounded-ss-xl rounded-se-xl"
                />
              </figure>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <img
                      src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/logo-1.svg"
                      alt=""
                      className="px-1 py-[7px] bg-gray-200 rounded-full"
                    />
                    <h5 className="text-sm font-medium">Alithemes</h5>
                  </div>
                  <span className="flex items-center gap-[2px] text-sm px-2 py-1 rounded-md bg-indigo-50 hover:text-violet-500 transition-all ease-in-out duration-200">
                    <GoDotFill className="text-violet-400 w-3 h-3" />
                    Fulltime
                  </span>
                </div>
                <h4 className="text-base font-medium mt-5 hover:text-violet-500 transition-all ease-in-out duration-200">
                  Senior Full Stack Engineer, Full Time
                </h4>
                <div className="flex gap-3 items-center mt-3">
                  <span className="flex items-center gap-1 text-sm">
                    <IoMdTime className="text-zinc-400 w-5 h-5" />
                    39 mins ago
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <GrLocation className="text-zinc-400 w-5 h-5" />
                    Chicago
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <small className="text-gray-400 font-medium flex items-center">
                    <span className="text-blue-500 text-xl font-bold">
                      &#x24;3200
                    </span>
                    /Month
                  </small>

                  <div className="flex items-center gap-2">
                    <button>
                      <BiCheckShield className="text-zinc-400 w-7 h-7" />
                    </button>
                    <button>
                      <FaRegBookmark className="text-zinc-400 w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[260px] rounded-xl anim border border-gray-200 hover:border-violet-400 hover:-translate-y-[0.15rem] opacity-0 animate-fadeIn transition-transform transform ease-in-out duration-500 cursor-pointer">
              <figure>
                <img
                  src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/job-1.png"
                  alt=""
                  className="rounded-ss-xl rounded-se-xl"
                />
              </figure>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <img
                      src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/logo-1.svg"
                      alt=""
                      className="px-1 py-[7px] bg-gray-200 rounded-full"
                    />
                    <h5 className="text-sm font-medium">Alithemes</h5>
                  </div>
                  <span className="flex items-center gap-[2px] text-sm px-2 py-1 rounded-md bg-indigo-50 hover:text-violet-500 transition-all ease-in-out duration-200">
                    <GoDotFill className="text-violet-400 w-3 h-3" />
                    Fulltime
                  </span>
                </div>
                <h4 className="text-base font-medium mt-5 hover:text-violet-500 transition-all ease-in-out duration-200">
                  Senior Full Stack Engineer, Full Time
                </h4>
                <div className="flex gap-3 items-center mt-3">
                  <span className="flex items-center gap-1 text-sm">
                    <IoMdTime className="text-zinc-400 w-5 h-5" />
                    39 mins ago
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <GrLocation className="text-zinc-400 w-5 h-5" />
                    Chicago
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <small className="text-gray-400 font-medium flex items-center">
                    <span className="text-blue-500 text-xl font-bold">
                      &#x24;3200
                    </span>
                    /Month
                  </small>

                  <div className="flex items-center gap-2">
                    <button>
                      <BiCheckShield className="text-zinc-400 w-7 h-7" />
                    </button>
                    <button>
                      <FaRegBookmark className="text-zinc-400 w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[260px] rounded-xl anim border border-gray-200 hover:border-violet-400 hover:-translate-y-[0.15rem] opacity-0 animate-fadeIn transition-transform transform ease-in-out duration-500 cursor-pointer">
              <figure>
                <img
                  src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/job-1.png"
                  alt=""
                  className="rounded-ss-xl rounded-se-xl"
                />
              </figure>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <img
                      src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/logo-1.svg"
                      alt=""
                      className="px-1 py-[7px] bg-gray-200 rounded-full"
                    />
                    <h5 className="text-sm font-medium">Alithemes</h5>
                  </div>
                  <span className="flex items-center gap-[2px] text-sm px-2 py-1 rounded-md bg-indigo-50 hover:text-violet-500 transition-all ease-in-out duration-200">
                    <GoDotFill className="text-violet-400 w-3 h-3" />
                    Fulltime
                  </span>
                </div>
                <h4 className="text-base font-medium mt-5 hover:text-violet-500 transition-all ease-in-out duration-200">
                  Senior Full Stack Engineer, Full Time
                </h4>
                <div className="flex gap-3 items-center mt-3">
                  <span className="flex items-center gap-1 text-sm">
                    <IoMdTime className="text-zinc-400 w-5 h-5" />
                    39 mins ago
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <GrLocation className="text-zinc-400 w-5 h-5" />
                    Chicago
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <small className="text-gray-400 font-medium flex items-center">
                    <span className="text-blue-500 text-xl font-bold">
                      &#x24;3200
                    </span>
                    /Month
                  </small>

                  <div className="flex items-center gap-2">
                    <button>
                      <BiCheckShield className="text-zinc-400 w-7 h-7" />
                    </button>
                    <button>
                      <FaRegBookmark className="text-zinc-400 w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
