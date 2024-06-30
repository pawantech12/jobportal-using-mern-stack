import React from "react";
import SelectBox from "../components/SelectBox";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <main className="flex justify-center ">
      <div className="w-[450px]">
        <h2 className="text-center text-2xl font-bold text-neutral-700">
          Create an Account
        </h2>
        <div className="flex gap-3 mt-4 w-full">
          <button className="bg-violet-200 px-4 w-full font-medium py-3 rounded-md hover:bg-violet-500 focus:text-white focus:bg-violet-500 transition-all ease-in-out duration-200 hover:text-white">
            Candidate
          </button>
          <button className="bg-violet-200 px-4 w-full font-medium py-3 rounded-md hover:bg-violet-500 focus:text-white focus:bg-violet-500 transition-all ease-in-out duration-200 hover:text-white">
            Employer
          </button>
        </div>
        <form action="" className="flex flex-col gap-3 mt-8">
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="firstname" className="text-base font-medium">
                First name
              </label>
              <input
                type="text"
                className="border border-gray-200 rounded-md outline-none px-2 py-1 h-10"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-base font-medium" htmlFor="lastname">
                Last name
              </label>
              <input
                className="border border-gray-200 rounded-md outline-none px-2 py-1 h-10"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-200 rounded-md outline-none px-2 py-1 h-10"
              type="email"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="password">
              Password
            </label>
            <input
              className="border border-gray-200 rounded-md outline-none px-2 py-1 h-10"
              type="password"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="cpassword">
              Confirm Password
            </label>
            <input
              className="border border-gray-200 rounded-md outline-none px-2 py-1 h-10"
              type="password"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="country">
              Country
            </label>
            <select
              name=""
              id=""
              className="border border-gray-200 rounded-md h-11 px-3 outline-none cursor-pointer"
            >
              <option value="">India</option>
              <option value="">USA</option>
            </select>
          </div>
          <div className="flex gap-2 mt-3">
            <input
              type="checkbox"
              className="custom-checkbox !w-[43px]"
              name=""
              id=""
            />
            <p className="text-sm font-medium">
              Yes, I understand and agree to the Upwork Terms of Service ,
              including the User Agreement and Privacy Policy .
            </p>
          </div>
          <button className="mt-4 bg-violet-400 text-white h-11 rounded-md font-medium hover:bg-violet-500 transition-all ease-in-out duration-200">
            Create Account
          </button>
          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-violet-500 font-medium">
              Login
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};
