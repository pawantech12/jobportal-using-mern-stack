import React, { useRef, useState } from "react";
import { IoPricetagsOutline } from "react-icons/io5";
import { TbUserStar } from "react-icons/tb";

export const ApplyJob = () => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
    console.log(file);
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  };

  return (
    <main className="px-24 mt-8">
      <h2 className="text-3xl font-bold text-neutral-600">Apply for Job</h2>
      <div className="border border-gray-200 rounded-xl mt-5 px-8 py-6">
        <h4 className="text-neutral-700 font-semibold text-2xl">Job Details</h4>
        <div className="mt-4 flex justify-between">
          <div className="flex flex-col gap-3 w-4/6">
            <h5 className="text-lg font-medium">Senior UI / UX Designer</h5>
            <div className="flex gap-3 text-sm items-center">
              <span className="bg-zinc-100 px-3 py-2 rounded-full font-medium">
                UI/UX Development
              </span>
              <span className="text-zinc-500 font-medium">
                Posted Jul 3, 2024
              </span>
            </div>
            <p className="text-sm font-medium text-zinc-500">
              I'm looking for a React developer to fix 2 bugs. It's a quick job,
              approximately 30 minutes total, and I'll pay $5 per bug fix.
            </p>
          </div>
          <div className="w-1/5 flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <TbUserStar className="w-5 h-5" />
              <div className="flex flex-col">
                <h5 className="text-base font-medium">Entry</h5>
                <small className="text-sm text-zinc-500">
                  Experience Level
                </small>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <IoPricetagsOutline className="w-5 h-5" />
              <div className="flex flex-col">
                <h5 className="text-base font-medium">$5000 - $8000</h5>
                <small className="text-sm text-zinc-500">Salary</small>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-lg font-medium">Skills Required</h4>
          <div className="mt-2 text-sm flex gap-3">
            <span className="bg-zinc-100 px-3 py-2 rounded-full font-medium">
              Frontend Development
            </span>
            <span className="bg-zinc-100 px-3 py-2 rounded-full font-medium">
              UI/UX Development
            </span>
          </div>
        </div>
      </div>
      <div className="border border-gray-200 rounded-xl mt-5 px-8 py-6">
        <form action="" className="flex flex-col gap-5">
          <div className="flex gap-5">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="" className="font-medium text-zinc-500">
                Name
              </label>
              <input
                type="text"
                name=""
                id=""
                className="border border-gray-200 focus:border-2 focus:border-violet-400 rounded-md h-12 outline-none px-3"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="" className="font-medium text-zinc-500">
                Email
              </label>
              <input
                type="email"
                name=""
                id=""
                className="border border-gray-200 focus:border-2 focus:border-violet-400 rounded-md h-12 outline-none px-3"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="" className="font-medium text-zinc-500">
              Cover Letter
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="border border-gray-200 focus:border-2 focus:border-violet-400 rounded-md outline-none px-3"
            ></textarea>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="" className="font-medium text-zinc-500">
              Upload CV
            </label>
            <div className="border border-gray-200 px-2 py-2 flex items-center gap-4 rounded-md">
              <button
                onClick={handleButtonClick}
                className="px-4 py-2 bg-zinc-100 rounded-md hover:bg-violet-400 hover:text-white hover:font-medium transition-all ease-in-out duration-200"
              >
                Select File
              </button>
              {file && <p className="text-sm">{file.name}</p>}
            </div>
            <input
              type="file"
              name=""
              ref={fileInputRef}
              onChange={handleFileChange}
              id=""
              className="hidden"
            />
          </div>
          <button className="mt-4 bg-violet-400 h-12 hover:bg-violet-500 transition-all ease-in-out duration-200 text-white font-medium text-lg rounded-md">
            Send Application
          </button>
        </form>
      </div>
    </main>
  );
};
