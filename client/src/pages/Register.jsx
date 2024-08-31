import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userType, setUserType] = useState("candidate");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    data.userType = userType;
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        data
      );
      console.log(response.data);
      setTimeout(() => {
        navigate("/dashboard"); // Replace "/another-page" with the desired route
      }, 3000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex justify-center ">
      <div className="w-[450px]">
        <h2 className="text-center text-2xl font-bold text-neutral-700">
          Create an Account
        </h2>
        <div className="flex gap-3 mt-4 w-full">
          <button
            className={`px-4 w-full font-medium py-3 rounded-md transition-all ease-in-out duration-200 ${
              userType === "candidate"
                ? "bg-violet-500 text-white"
                : "bg-violet-200 hover:bg-violet-500 hover:text-white"
            }`}
            onClick={() => setUserType("candidate")}
            type="button"
            disabled={loading}
          >
            Candidate
          </button>
          <button
            className={`px-4 w-full font-medium py-3 rounded-md transition-all ease-in-out duration-200 ${
              userType === "employer"
                ? "bg-violet-500 text-white"
                : "bg-violet-200 hover:bg-violet-500 hover:text-white"
            }`}
            onClick={() => setUserType("employer")}
            type="button"
            disabled={loading}
          >
            Employer
          </button>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 mt-8"
        >
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="firstname" className="text-base font-medium">
                First name
              </label>
              <input
                type="text"
                className="border border-gray-200 rounded-md outline-none px-2 py-1 h-10"
                {...register("firstname", { required: true })}
              />
              {errors.firstname && (
                <span className="text-red-500 text-sm">
                  First name is required
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-base font-medium" htmlFor="lastname">
                Last name
              </label>
              <input
                className="border border-gray-200 rounded-md outline-none px-2 py-1 h-10"
                type="text"
                {...register("lastname", { required: true })}
              />
              {errors.lastname && (
                <span className="text-red-500 text-sm">
                  Last name is required
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-200 rounded-md outline-none px-2 py-1 h-10"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">Email is required</span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="password">
              Password
            </label>
            <input
              className="border border-gray-200 rounded-md outline-none px-2 py-1 h-10"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">Password is required</span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="cpassword">
              Confirm Password
            </label>
            <input
              className="border border-gray-200 rounded-md outline-none px-2 py-1 h-10"
              type="password"
              {...register("cpassword", { required: true })}
            />
            {errors.cpassword && (
              <span className="text-red-500 text-sm">
                Confirm Password is required
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="country">
              Country
            </label>
            <select
              className="border border-gray-200 rounded-md h-11 px-3 outline-none cursor-pointer"
              {...register("country", { required: true })}
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
            </select>
            {errors.country && (
              <span className="text-red-500 text-sm">Country is required</span>
            )}
          </div>
          <div className="flex gap-2 mt-3">
            <input
              type="checkbox"
              className="custom-checkbox !w-[43px]"
              {...register("terms", { required: true })}
            />
            <p className="text-sm font-medium">
              Yes, I understand and agree to the Upwork Terms of Service,
              including the User Agreement and Privacy Policy.
            </p>
            {errors.terms && (
              <span className="text-red-500 text-sm">
                You must agree to the terms
              </span>
            )}
          </div>
          <button
            disabled={loading}
            className="mt-4 bg-violet-400 text-white h-11 rounded-md font-medium hover:bg-violet-500 transition-all ease-in-out duration-200"
          >
            {loading ? "Creating Account..." : "Create Account"}
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
