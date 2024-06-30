import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { LiaEdit } from "react-icons/lia";
import { Link } from "react-router-dom";
export const SingleBlog = () => {
  return (
    <main>
      <div className="flex flex-col items-center px-24">
        <h2 className=" mt-12 text-center text-4xl text-neutral-700 leading-[3rem] font-bold">
          11 Companies That Hire for Remote Seasonal and Holiday Jobs
        </h2>
        <div className="flex items-center gap-6 mt-2">
          <div className="flex items-center gap-2">
            <img
              src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/avatar/ava_16.png"
              className="w-7 h-7"
              alt=""
            />
            <span className="text-sm text-zinc-500 font-medium">
              Sarah Harding
            </span>
          </div>
          <span className="flex gap-1 items-center text-sm font-medium text-zinc-400">
            <LiaEdit className="w-5 h-5" />
            06 Sep 2022
          </span>
        </div>
      </div>
      <div className="flex gap-3 justify-between px-24 mt-14">
        <div className="w-4/6">
          <div className=" flex flex-col  gap-4">
            <figure>
              <img
                src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/blog/blog-thumb-1.png"
                className="rounded-xl"
                alt=""
              />
            </figure>

            <h4 className="text-[22px] font-semibold">The AliStudio Team</h4>
            <p>
              The AliStudio Design team has a vision to establish a trusted
              platform that enables productive and healthy enterprises in a
              world of digital and remote everything, constantly changing work
              patterns and norms, and the need for organizational resiliency.
            </p>
            <p>
              The ideal candidate will have strong creative skills and a
              portfolio of work which demonstrates their passion for
              illustrative design and typography. This candidate will have
              experiences in working with numerous different design platforms
              such as digital and print forms.
            </p>
            <div>
              <h4 className="text-[22px] font-semibold">
                Essential Knowledge, Skills, and Experience
              </h4>

              <ul className="mt-5 list-disc flex flex-col gap-1">
                <li>
                  A portfolio demonstrating well thought through and polished
                  end to end customer journeys
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
              <h4 className="text-[22px] font-semibold">
                Preferred Experience
              </h4>
              <ul className="list-disc flex flex-col gap-1 mt-5">
                <li>
                  A portfolio demonstrating well thought through and polished
                  end to end customer journeys
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
            <div className="border border-gray-200 rounded-xl px-7 py-8">
              <div className="flex gap-3">
                <figure>
                  <img
                    src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/avatar/ava_14.png"
                    alt=""
                    className="w-12 h-12"
                  />
                </figure>
                <div>
                  <h4 className="text-xl font-semibold">Steven Job</h4>
                  <div className="text-zinc-400 flex gap-4 items-center text-sm">
                    <span>306 posts</span>
                    <span>Since 2012</span>
                  </div>
                </div>
              </div>
              <p className="text-zinc-500 font-medium mt-4">
                Hi, I'm a recruiter with over 25 years of experience. I have
                worked in many multinational companies and corporations. With my
                experiences, I hope my articles will bring you knowledge and
                inspiration.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <div className="border border-gray-200 rounded-xl px-6 py-4 flex items-center justify-between">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search..."
              className="outline-none border-none w-full h-9 text-zinc-500"
            />
            <IoSearchOutline className="w-7 h-7 cursor-pointer" />
          </div>
          <div className="border border-gray-200 p-6 rounded-xl mt-8">
            <h4 className="text-xl font-bold text-neutral-700">Category</h4>
            <hr className="mt-2 mb-4" />
            <ul className="flex flex-col gap-2">
              <li className="py-2 group border-b font-medium border-b-gray-200 flex justify-between items-center">
                <Link>Recruitment News</Link>
                <span className="px-2 group-hover:bg-violet-400 group-hover:text-white transition-all ease-in-out duration-200 py-1 rounded-sm text-sm bg-[#dbe1fb]">
                  11
                </span>
              </li>
              <li className="py-2 group border-b font-medium border-b-gray-200 flex justify-between items-center">
                <Link>Job Venues</Link>
                <span className="px-2 group-hover:bg-violet-400 group-hover:text-white transition-all ease-in-out duration-200 py-1 rounded-sm text-sm bg-[#dbe1fb]">
                  11
                </span>
              </li>
              <li className="py-2 group border-b font-medium border-b-gray-200 flex justify-between items-center">
                <Link>Full Time Job</Link>
                <span className="px-2 group-hover:bg-violet-400 group-hover:text-white transition-all ease-in-out duration-200 py-1 rounded-sm text-sm bg-[#dbe1fb]">
                  12
                </span>
              </li>
              <li className="pt-2 group font-medium flex justify-between items-center">
                <Link>Work From Home</Link>
                <span className="px-2 group-hover:bg-violet-400 group-hover:text-white transition-all ease-in-out duration-200 py-1 rounded-sm text-sm bg-[#dbe1fb]">
                  13
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl p-6 border border-gray-200 mt-8">
            <h4 className="text-lg font-semibold">Popular Tags</h4>
            <hr className="my-3" />
            <div className=" flex flex-wrap gap-3  mt-5">
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
        </div>
      </div>
    </main>
  );
};
