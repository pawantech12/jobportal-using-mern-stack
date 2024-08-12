import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../stores/auth"; // Assumed to handle token storage
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { storeTokenInLS } = useAuth(); // Storing token in localStorage or any other state management
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login", // Replace with your login endpoint
        data
      );
      console.log("login msg: ", response);

      if (response.data && response.data.token) {
        storeTokenInLS(response.data.token); // Assuming the token is in response.data.token
        setTimeout(() => {
          navigate("/dashboard"); // Replace with your dashboard route
        }, 3000);
      }
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex justify-center ">
      <div className="w-[450px]">
        <h2 className="text-center text-2xl font-bold text-neutral-700">
          Login to Account
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 mt-8"
        >
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-200 rounded-md outline-none px-2 py-1 h-10"
              type="email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="password">
              Password
            </label>
            <input
              className="border border-gray-200 rounded-md outline-none px-2 py-1 h-10"
              type="password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            className="mt-4 bg-violet-400 text-white h-11 rounded-md font-medium hover:bg-violet-500 transition-all ease-in-out duration-200"
            disabled={loading} // Disable button during loading
          >
            {loading ? "Logging in..." : "Login"}
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
