import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <main className="flex justify-center ">
      <div className="w-[450px]">
        <h2 className="text-center text-2xl font-bold text-neutral-700">
          Login to Account
        </h2>

        <form action="" className="flex flex-col gap-3 mt-8">
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

          <button className="mt-4 bg-violet-400 text-white h-11 rounded-md font-medium hover:bg-violet-500 transition-all ease-in-out duration-200">
            Login
          </button>
          <p className="text-center mt-3">
            Don't have an account?{" "}
            <Link to="/register" className="text-violet-500 font-medium">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};
