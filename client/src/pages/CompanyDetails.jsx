import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaPhone,
  FaPinterest,
  FaRegBookmark,
  FaRegClock,
  FaStar,
} from "react-icons/fa6";
import { FiDollarSign } from "react-icons/fi";

import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import jobImg from "../images/job.svg";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { BiCheckShield, BiTimer } from "react-icons/bi";
const CompanyDetails = () => {
  return (
    <>
      <section className="bg-orange-50 relative overflow-hidden flex gap-4 px-24 py-14">
        <figure>
          <img
            src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/page/employers/employer-12.png"
            alt=""
            className="w-32 h-32"
          />
        </figure>
        <div className="flex flex-col gap-3">
          <h3 className="text-4xl font-bold text-neutral-700">
            Behance Studio
          </h3>
          <div className="flex items-center gap-3">
            <span className="text-sm flex items-center gap-2">
              <GrLocation className="text-zinc-400 w-4 h-4" />
              Chicago, US
            </span>
            <span className="flex items-center gap-2 text-sm">
              {" "}
              <img src={jobImg} alt="" className="w-4 h4" /> Accounting /
              Finance
            </span>
            <span className="flex items-center gap-2 text-sm">
              <FaRegClock className="w-4 h-4 text-zinc-400" />
              Since 2012{" "}
            </span>
            <span className="flex items-center gap-1">
              <FaStar className="w-[15px] h-[15px] text-[#F5BE3D]" />
              <FaStar className="w-[15px] h-[15px] text-[#F5BE3D]" />
              <FaStar className="w-[15px] h-[15px] text-[#F5BE3D]" />
              <FaStar className="w-[15px] h-[15px] text-[#F5BE3D]" />
              <FaStar className="w-[15px] h-[15px] text-zinc-300" />
            </span>
            <span className="text-zinc-400 text-sm">(4.0)</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-4 py-2 rounded-full bg-[#EAEDF5] text-sm">
                12 open jobs
              </span>
              <span className="px-4 py-2 rounded-full bg-[#EAEDF5] text-sm">
                24 completed jobs
              </span>
            </div>
            <button className="px-5 py-3 rounded-md font-medium text-white bg-violet-400 hover:bg-violet-500 hover:-translate-y-[0.15rem] transition-all ease-in-out duration-200">
              Apply for job
            </button>
          </div>
        </div>

        <div className="w-12 h-12 rounded-full border-[1.1rem] right-[8%] border-[#E5EAF5] absolute top-[25%]"></div>
        <div className="w-32 h-32 rounded-full border-[2rem] right-[-2%] border-[#EADFF5] absolute bottom-[-25%]"></div>
        <div className="w-3 h-3 rounded-full bg-[#BEE2AE] absolute left-[1%] top-[7%]"></div>
        <div className="w-40 h-10 top-[30%] absolute left-[-5%] -rotate-[38deg] bg-[#D5C5F6] rounded-full"></div>
        <div className="w-36 h-8 top-[64%] absolute left-[-5%] -rotate-[38deg] bg-[#B9D0F8] rounded-full"></div>
        <div className="w-36 h-8 top-[98%] absolute left-[-5%] -rotate-[38deg] bg-[#FFE4CA] rounded-full"></div>
      </section>
      <section className="flex gap-4 mt-12 px-24">
        <div className="w-2/3 flex flex-col gap-5">
          <h4 className="text-2xl font-bold">About Company</h4>
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
                Save Company
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
        <div className="w-2/6  h-fit flex flex-col gap-12">
          <div className="flex flex-col gap-5 border border-zinc-200 rounded-xl p-6">
            <h4 className="text-xl font-semibold">Overview</h4>
            <hr className=" mb-2" />
            <div className="flex flex-col gap-5">
              <div>
                <span className="flex gap-2 text-zinc-400 font-medium items-center">
                  {" "}
                  <img src={jobImg} alt="" className="w-6 h-6" /> Company field
                </span>
                <b className="ml-6 font-semibold text-neutral-700">
                  Accounting / Finance
                </b>
              </div>
              <div>
                <span className="flex gap-2 text-zinc-400 font-medium items-center">
                  {" "}
                  <GrLocation className="w-6 h-6" />
                  Location
                </span>
                <b className="ml-6 font-semibold text-neutral-700">
                  Dallas, Texas Remote Friendly
                </b>
              </div>
              <div>
                <span className="flex gap-2 text-zinc-400 font-medium items-center">
                  {" "}
                  <FiDollarSign className="w-6 h-6" />
                  Salary
                </span>
                <b className="ml-6 font-semibold text-neutral-700">
                  $100,000 - $150,000
                </b>
              </div>
              <div>
                <span className="flex gap-2 text-zinc-400 font-medium items-center">
                  <FaRegClock className="w-5 h-5" /> Member Since
                </span>
                <b className="ml-6 font-semibold text-neutral-700">July 2012</b>
              </div>
            </div>
            <hr className="my-5" />
            <div className="flex justify-between">
              <button className="text-white bg-violet-400 hover:bg-violet-500 hover:-translate-y-[0.15rem] font-medium text-lg transition-all ease-in-out duration-200 rounded-md px-3 py-2">
                Contact us
              </button>
              <button className="border border-gray-200 px-3 py-2 rounded-md font-medium hover:-translate-y-[0.15rem] transition-all ease-in-out duration-200">
                Send message
              </button>
            </div>
          </div>
          <div className="rounded-xl p-6 flex flex-wrap gap-3 border border-gray-200">
            <span className="px-4 py-2 rounded-full bg-[#EAF2FF] text-sm hover:-translate-y-[0.15rem] transition-all ease-in-out duration-200 cursor-pointer">
              Figma
            </span>
            <span className="px-4 py-2 rounded-full bg-[#EAF2FF] text-sm hover:-translate-y-[0.15rem] transition-all ease-in-out duration-200 cursor-pointer">
              Adobe XD
            </span>
            <span className="px-4 py-2 rounded-full bg-[#EAF2FF] text-sm hover:-translate-y-[0.15rem] transition-all ease-in-out duration-200 cursor-pointer">
              PSD
            </span>
            <span className="px-4 py-2 rounded-full bg-[#EAF2FF] text-sm hover:-translate-y-[0.15rem] transition-all ease-in-out duration-200 cursor-pointer">
              HTML5
            </span>
            <span className="px-4 py-2 rounded-full bg-[#EAF2FF] text-sm hover:-translate-y-[0.15rem] transition-all ease-in-out duration-200 cursor-pointer">
              CSS3
            </span>
            <span className="px-4 py-2 rounded-full bg-[#EAF2FF] text-sm hover:-translate-y-[0.15rem] transition-all ease-in-out duration-200 cursor-pointer">
              JavaScript
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyDetails;
