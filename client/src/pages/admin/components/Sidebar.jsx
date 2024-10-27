import React from "react";
import { Link, Navigate } from "react-router-dom";
import { RiDashboardHorizontalLine, RiLogoutBoxRLine } from "react-icons/ri";
import { FaRegBell, FaRegHeart, FaRegUser } from "react-icons/fa";
import { PiNoteDuotone } from "react-icons/pi";
import { useAuth } from "../../../stores/auth";
import { MdPostAdd } from "react-icons/md";
const Sidebar = ({ isOpen }) => {
  const { logout, user } = useAuth();
  const handleLogout = () => {
    logout();
    Navigate("/");
  };
  return (
    <div
      className={` inset-y-0 left-0 transform translate-x-0 transition-transform duration-200 ease-in-out w-64 py-4 flex flex-col z-50 border border-gray-200 h-screen`}
    >
      <nav className="flex-grow">
        <ul>
          <li>
            <Link
              to="/dashboard"
              className="group flex items-center gap-2 py-4 px-6 font-medium  hover:bg-violet-400 hover:text-white text-lg transition-all ease-in-out duration-200"
            >
              <RiDashboardHorizontalLine className="w-5 h-5 group-hover:animate-bounce" />{" "}
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/bookmark"
              className="group flex items-center gap-2 py-4 px-6 font-medium  hover:bg-violet-400 hover:text-white text-lg transition-all ease-in-out duration-200"
            >
              <FaRegHeart className="w-5 h-5 group-hover:animate-bounce" />{" "}
              Bookmark
            </Link>
          </li>
          {user?.userType !== "candidate" && (
            <li>
              <Link
                to="/dashboard/job-posts"
                className="group flex items-center gap-2 py-4 px-6 font-medium  hover:bg-violet-400 hover:text-white text-lg transition-all ease-in-out duration-200"
              >
                <MdPostAdd className="w-6 h-6 group-hover:animate-bounce" /> Job
                Posts
              </Link>
            </li>
          )}

          <li>
            <Link
              to="/"
              className="group flex items-center gap-2 py-4 px-6 font-medium  hover:bg-violet-400 hover:text-white text-lg transition-all ease-in-out duration-200"
            >
              <FaRegBell className="w-5 h-5 group-hover:animate-bounce" />{" "}
              Notification
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/application"
              className="group flex items-center gap-2 py-4 px-6 font-medium  hover:bg-violet-400 hover:text-white text-lg transition-all ease-in-out duration-200"
            >
              <PiNoteDuotone className="w-5 h-5 group-hover:animate-bounce" />{" "}
              Application
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/profile"
              className="group flex items-center gap-2 py-4 px-6 font-medium  hover:bg-violet-400 hover:text-white text-lg transition-all ease-in-out duration-200"
            >
              <FaRegUser className="w-5 h-5 group-hover:animate-bounce" />{" "}
              Profile
            </Link>
          </li>
          <li>
            <Link
              onClick={handleLogout}
              className="group flex items-center gap-2 py-4 px-6 font-medium  hover:bg-violet-400 hover:text-white text-lg transition-all ease-in-out duration-200"
            >
              <RiLogoutBoxRLine className="w-5 h-5 group-hover:animate-bounce" />{" "}
              Logout
            </Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
