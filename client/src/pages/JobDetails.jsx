import React from "react";
import {
  FaFacebook,
  FaPinterest,
  FaRegBookmark,
  FaRegClock,
} from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import jobImg from "../images/job.svg";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { BiCheckShield } from "react-icons/bi";
export const JobDetails = () => {
  return (
    <>
      <section className="bg-orange-50 relative overflow-hidden flex flex-col gap-4 px-24 py-14">
        <h3 className="text-4xl font-bold text-neutral-700">
          Senior UI / UX Designer
        </h3>
        <span className=" text-zinc-400">
          <Link className="text-neutral-900 hover:text-violet-500 transition-all ease-in-out duration-200 cursor-pointer">
            Home
          </Link>{" "}
          / Jobs listing
        </span>
        <div className="w-12 h-12 rounded-full border-[1.1rem] right-[8%] border-[#E5EAF5] absolute top-[25%]"></div>
        <div className="w-32 h-32 rounded-full border-[2rem] right-[-%] border-[#EADFF5] absolute bottom-[-25%]"></div>
        <div className="w-3 h-3 rounded-full bg-[#BEE2AE] absolute left-[1%] top-[7%]"></div>
        <div className="w-40 h-10 top-[30%] absolute left-[-5%] -rotate-[38deg] bg-[#D5C5F6] rounded-full"></div>
        <div className="w-36 h-8 top-[64%] absolute left-[-5%] -rotate-[38deg] bg-[#B9D0F8] rounded-full"></div>
        <div className="w-36 h-8 top-[98%] absolute left-[-5%] -rotate-[38deg] bg-[#FFE4CA] rounded-full"></div>
      </section>
      <section className="flex gap-4 mt-12 px-24">
        <div className="w-2/3 flex flex-col gap-5">
          <figure>
            <img
              src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/page/job-single/img-job-feature.png"
              alt=""
              className="rounded-xl"
            />
          </figure>
          <h4 className="text-[22px] font-semibold">The AliStudio Team</h4>
          <p>
            The AliStudio Design team has a vision to establish a trusted
            platform that enables productive and healthy enterprises in a world
            of digital and remote everything, constantly changing work patterns
            and norms, and the need for organizational resiliency.
          </p>
          <p>
            The ideal candidate will have strong creative skills and a portfolio
            of work which demonstrates their passion for illustrative design and
            typography. This candidate will have experiences in working with
            numerous different design platforms such as digital and print forms.
          </p>
          <div>
            <h4 className="text-[22px] font-semibold">
              Essential Knowledge, Skills, and Experience
            </h4>

            <ul className="mt-5 list-disc flex flex-col gap-1">
              <li>
                A portfolio demonstrating well thought through and polished end
                to end customer journeys
              </li>
              <li>
                5+ years of industry experience in interactive design and / or
                visual design
              </li>
              <li>Excellent interpersonal skills</li>
              <li>
                Aware of trends in mobile, communications, and collaboration
              </li>
              <li>
                Ability to create highly polished design prototypes, mockups,
                and other communication artifacts
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[22px] font-semibold">Preferred Experience</h4>
            <ul className="list-disc flex flex-col gap-1 mt-5">
              <li>
                A portfolio demonstrating well thought through and polished end
                to end customer journeys
              </li>
              <li>
                5+ years of industry experience in interactive design and / or
                visual design
              </li>
              <li>Excellent interpersonal skills</li>
              <li>
                Aware of trends in mobile, communications, and collaboration
              </li>
              <li>
                Ability to create highly polished design prototypes, mockups,
                and other communication artifacts
              </li>
            </ul>
          </div>
          <hr className="mt-4" />
          <div className="flex justify-between items-center mt-5">
            <div className="flex gap-4 items-center">
              <button className="bg-violet-500 text-white rounded-lg px-3 py-2 hover:bg-violet-600 font-medium hover:-translate-y-[0.15rem] transition-all ease-in-out duration-200">
                Apply now
              </button>
              <button className="border border-zinc-200 hover:border-none hover:text-white hover:bg-violet-500 rounded-lg px-3 py-2 font-medium hover:-translate-y-[0.15rem] transition-all ease-in-out duration-300">
                Save job
              </button>
            </div>
            <ul className="flex items-center gap-3">
              <li>
                <button className="border border-zinc-200 rounded-lg px-3 py-2 font-medium hover:-translate-y-[0.15rem] transition-all ease-in-out duration-300 flex items-center gap-2">
                  <FaFacebook className="text-indigo-800" />
                  Share
                </button>
              </li>
              <li>
                <button className="border border-zinc-200 rounded-lg px-3 py-2 font-medium hover:-translate-y-[0.15rem] transition-all ease-in-out duration-300 flex items-center gap-2">
                  <AiFillTwitterCircle className="text-[#55ACEE]" />
                  Twitter
                </button>
              </li>
              <li>
                <button className="border border-zinc-200 rounded-lg px-3 py-2 font-medium hover:-translate-y-[0.15rem] transition-all ease-in-out duration-300 flex items-center gap-2">
                  <FaPinterest className="text-[#E60019]" />
                  Pin
                </button>
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <div className="flex items-center gap-2">
              <h3 className="w-[24%] text-2xl text-neutral-700 font-bold">
                Recent Jobs
              </h3>
              <hr className="w-10/12" />
            </div>
            <div className="mt-10 flex flex-col gap-8">
              <div className="flex flex-col gap-4 rounded-xl px-5 py-7 border border-gray-200 hover:border-violet-400 hover:-translate-y-[0.15rem] opacity-0 animate-fadeIn transition-transform transform ease-in-out duration-500 cursor-pointer">
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <figure>
                      <img
                        src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/page/job/digital.png"
                        alt=""
                        className="w-12 h-12"
                      />
                    </figure>
                    <div>
                      <h4 className="text-lg font-bold text-neutral-700">
                        Digital Experience Designer
                      </h4>
                      <div className="flex gap-3 items-center text-[12px]">
                        <span className="font-semibold text-violet-500">
                          AliStudio, Inc{" "}
                        </span>
                        <span className="flex items-center gap-1 ">
                          <GrLocation className="text-zinc-400 w-4 h-4" />
                          Chicago
                        </span>
                        <span className="flex items-center gap-1">
                          <img src={jobImg} alt="" className="w-4 h-4" />
                          Full time
                        </span>
                        <span className="flex items-center gap-1">
                          <FaRegClock className="text-zinc-400 w-4 h-4" />3 mins
                          ago
                        </span>
                      </div>
                    </div>
                  </div>
                  <small className="text-gray-400 font-medium flex items-center">
                    <span className="text-blue-500 text-2xl font-bold">
                      &#x24;500
                    </span>
                    /Month
                  </small>
                </div>
                <p className="text-sm text-zinc-600">
                  We want someone who has been doing this for a solid 2-3 years.
                  We want someone who can demonstrate an extremely strong
                  portfolio. Create deliverables for your product area (for
                  example competitive analyses, user flows.
                </p>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-2">
                    <span className="text-sm px-3 py-1 rounded-md bg-[#FFCFC5]">
                      Urgent
                    </span>
                    <span className="text-sm px-3 py-1 rounded-md bg-[#C5E3FF]">
                      Senior
                    </span>
                    <span className="text-sm px-3 py-1 rounded-md bg-[#F2EEFF]">
                      Full time
                    </span>
                  </div>
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
              <div className="flex flex-col gap-4 rounded-xl px-5 py-7 border border-gray-200 hover:border-violet-400 hover:-translate-y-[0.15rem] opacity-0 animate-fadeIn transition-transform transform ease-in-out duration-500 cursor-pointer">
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <figure>
                      <img
                        src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/page/job/digital.png"
                        alt=""
                        className="w-12 h-12"
                      />
                    </figure>
                    <div>
                      <h4 className="text-lg font-bold text-neutral-700">
                        Digital Experience Designer
                      </h4>
                      <div className="flex gap-3 items-center text-[12px]">
                        <span className="font-semibold text-violet-500">
                          AliStudio, Inc{" "}
                        </span>
                        <span className="flex items-center gap-1 ">
                          <GrLocation className="text-zinc-400 w-4 h-4" />
                          Chicago
                        </span>
                        <span className="flex items-center gap-1">
                          <img src={jobImg} alt="" className="w-4 h-4" />
                          Full time
                        </span>
                        <span className="flex items-center gap-1">
                          <FaRegClock className="text-zinc-400 w-4 h-4" />3 mins
                          ago
                        </span>
                      </div>
                    </div>
                  </div>
                  <small className="text-gray-400 font-medium flex items-center">
                    <span className="text-blue-500 text-2xl font-bold">
                      &#x24;500
                    </span>
                    /Month
                  </small>
                </div>
                <p className="text-sm text-zinc-600">
                  We want someone who has been doing this for a solid 2-3 years.
                  We want someone who can demonstrate an extremely strong
                  portfolio. Create deliverables for your product area (for
                  example competitive analyses, user flows.
                </p>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-2">
                    <span className="text-sm px-3 py-1 rounded-md bg-[#FFCFC5]">
                      Urgent
                    </span>
                    <span className="text-sm px-3 py-1 rounded-md bg-[#C5E3FF]">
                      Senior
                    </span>
                    <span className="text-sm px-3 py-1 rounded-md bg-[#F2EEFF]">
                      Full time
                    </span>
                  </div>
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
              <div className="flex flex-col gap-4 rounded-xl px-5 py-7 border border-gray-200 hover:border-violet-400 hover:-translate-y-[0.15rem] opacity-0 animate-fadeIn transition-transform transform ease-in-out duration-500 cursor-pointer">
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <figure>
                      <img
                        src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/page/job/digital.png"
                        alt=""
                        className="w-12 h-12"
                      />
                    </figure>
                    <div>
                      <h4 className="text-lg font-bold text-neutral-700">
                        Digital Experience Designer
                      </h4>
                      <div className="flex gap-3 items-center text-[12px]">
                        <span className="font-semibold text-violet-500">
                          AliStudio, Inc{" "}
                        </span>
                        <span className="flex items-center gap-1 ">
                          <GrLocation className="text-zinc-400 w-4 h-4" />
                          Chicago
                        </span>
                        <span className="flex items-center gap-1">
                          <img src={jobImg} alt="" className="w-4 h-4" />
                          Full time
                        </span>
                        <span className="flex items-center gap-1">
                          <FaRegClock className="text-zinc-400 w-4 h-4" />3 mins
                          ago
                        </span>
                      </div>
                    </div>
                  </div>
                  <small className="text-gray-400 font-medium flex items-center">
                    <span className="text-blue-500 text-2xl font-bold">
                      &#x24;500
                    </span>
                    /Month
                  </small>
                </div>
                <p className="text-sm text-zinc-600">
                  We want someone who has been doing this for a solid 2-3 years.
                  We want someone who can demonstrate an extremely strong
                  portfolio. Create deliverables for your product area (for
                  example competitive analyses, user flows.
                </p>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-2">
                    <span className="text-sm px-3 py-1 rounded-md bg-[#FFCFC5]">
                      Urgent
                    </span>
                    <span className="text-sm px-3 py-1 rounded-md bg-[#C5E3FF]">
                      Senior
                    </span>
                    <span className="text-sm px-3 py-1 rounded-md bg-[#F2EEFF]">
                      Full time
                    </span>
                  </div>
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
              <div className="flex flex-col gap-4 rounded-xl px-5 py-7 border border-gray-200 hover:border-violet-400 hover:-translate-y-[0.15rem] opacity-0 animate-fadeIn transition-transform transform ease-in-out duration-500 cursor-pointer">
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <figure>
                      <img
                        src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/page/job/digital.png"
                        alt=""
                        className="w-12 h-12"
                      />
                    </figure>
                    <div>
                      <h4 className="text-lg font-bold text-neutral-700">
                        Digital Experience Designer
                      </h4>
                      <div className="flex gap-3 items-center text-[12px]">
                        <span className="font-semibold text-violet-500">
                          AliStudio, Inc{" "}
                        </span>
                        <span className="flex items-center gap-1 ">
                          <GrLocation className="text-zinc-400 w-4 h-4" />
                          Chicago
                        </span>
                        <span className="flex items-center gap-1">
                          <img src={jobImg} alt="" className="w-4 h-4" />
                          Full time
                        </span>
                        <span className="flex items-center gap-1">
                          <FaRegClock className="text-zinc-400 w-4 h-4" />3 mins
                          ago
                        </span>
                      </div>
                    </div>
                  </div>
                  <small className="text-gray-400 font-medium flex items-center">
                    <span className="text-blue-500 text-2xl font-bold">
                      &#x24;500
                    </span>
                    /Month
                  </small>
                </div>
                <p className="text-sm text-zinc-600">
                  We want someone who has been doing this for a solid 2-3 years.
                  We want someone who can demonstrate an extremely strong
                  portfolio. Create deliverables for your product area (for
                  example competitive analyses, user flows.
                </p>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-2">
                    <span className="text-sm px-3 py-1 rounded-md bg-[#FFCFC5]">
                      Urgent
                    </span>
                    <span className="text-sm px-3 py-1 rounded-md bg-[#C5E3FF]">
                      Senior
                    </span>
                    <span className="text-sm px-3 py-1 rounded-md bg-[#F2EEFF]">
                      Full time
                    </span>
                  </div>
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
        <div className="w-2/6 border border-zinc-200 rounded-xl p-6">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <figure>
                  <img
                    src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/page/job-single/avatar-job.png"
                    className="w-12 h-12"
                    alt=""
                  />
                </figure>
                <div>
                  <h4 className="text-lg font-semibold">AliStudio, Inc</h4>
                  <small className="text-[12px] text-violet-500">
                    alithemes.com
                  </small>
                </div>
              </div>
              <button className="text-zinc-500">
                <BsThreeDots />
              </button>
            </div>
            <p>
              We're looking to add more product designers to our growing teams.
            </p>
            <div className="flex gap-4 items-center">
              <button className="bg-violet-500 text-white rounded-lg px-3 py-2 hover:bg-violet-600 font-medium hover:-translate-y-[0.15rem] transition-all ease-in-out duration-200">
                Apply now
              </button>
              <button className="border border-zinc-200 hover:border-none hover:text-white hover:bg-violet-500 rounded-lg px-3 py-2 font-medium hover:-translate-y-[0.15rem] transition-all ease-in-out duration-300">
                Save job
              </button>
            </div>
            <hr className="my-5" />
          </div>
        </div>
      </section>
    </>
  );
};
