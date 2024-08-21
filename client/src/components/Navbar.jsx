import React, { useState } from "react";
import logo from "../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaCircle, FaRegHeart, FaRegUser } from "react-icons/fa";
import { useAuth } from "../stores/auth";
import defaultProfile from "../images/default-profile.jpg";
import { RiDashboardHorizontalLine, RiLogoutBoxRLine } from "react-icons/ri";
import { PiNoteDuotone } from "react-icons/pi";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, logout, user } = useAuth();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownVisible(!profileDropdownVisible);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="py-6 px-20 flex justify-between items-center shadow-lg">
      <div>
        <img src={logo} alt="JobHub Logo" />
      </div>
      <nav>
        <ul className="flex gap-9 font-medium">
          {/* Existing Navigation Links */}
          <li>
            <Link
              to="/"
              className="hover:text-violet-400 transition-all ease-in-out duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/browse-jobs"
              className="hover:text-violet-400 transition-all ease-in-out duration-300"
            >
              Browse Jobs
            </Link>
          </li>
          <li>
            <Link
              to="/browse-company"
              className="hover:text-violet-400 transition-all ease-in-out duration-300"
            >
              Companies
            </Link>
          </li>
          <li>
            <Link className="hover:text-violet-400 transition-all ease-in-out duration-300">
              Candidates
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="hover:text-violet-400 transition-all ease-in-out duration-300"
            >
              Blog
            </Link>
          </li>
          <li className="relative" onClick={toggleDropdown}>
            <Link className="hover:text-violet-400 flex gap-1 items-center transition-all ease-in-out duration-300">
              Pages
              <IoChevronDownOutline />
            </Link>
            {dropdownVisible && (
              <ul className="absolute top-full py-4 z-10 px-3 text-sm left-0 mt-2 w-44 bg-white shadow-lg rounded-md">
                {/* Dropdown Links */}
                <li className="flex items-center group">
                  <FaCircle className="w-[5px] h-[5px] text-violet-300 group-hover:text-violet-400" />
                  <Link className="hover:text-violet-400 px-3 hover:px-4 py-2 transition-all ease-in-out duration-300">
                    About Us
                  </Link>
                </li>
                <li className="flex items-center group">
                  <FaCircle className="w-[5px] h-[5px] text-violet-300 group-hover:text-violet-400" />
                  <Link className="hover:text-violet-400 px-3 hover:px-4 py-2 transition-all ease-in-out duration-300">
                    Contact Us
                  </Link>
                </li>
                <li className="flex items-center group">
                  <FaCircle className="w-[5px] h-[5px] text-violet-300 group-hover:text-violet-400" />
                  <Link className="hover:text-violet-400 px-3 hover:px-4 py-2 transition-all ease-in-out duration-300">
                    Our Services
                  </Link>
                </li>
                <li className="flex items-center group">
                  <FaCircle className="w-[5px] h-[5px] text-violet-300 group-hover:text-violet-400" />
                  <Link className="hover:text-violet-400 px-3 hover:px-4 py-2 transition-all ease-in-out duration-300">
                    FAQ
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
      <div className="flex gap-4 items-center">
        {token ? (
          <div className="relative">
            <div
              onClick={toggleProfileDropdown}
              className="w-14 h-14 rounded-full bg-gray-200 cursor-pointer flex items-center justify-center"
            >
              <img
                src={user?.profileImg || defaultProfile}
                alt="User Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {profileDropdownVisible && (
              <ul className="absolute top-full right-0 py-4 z-10 px-3 text-sm mt-2 w-44 bg-white shadow-lg rounded-md">
                <li className="hover:text-violet-400 py-2 transition-all ease-in-out duration-300">
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 font-medium"
                  >
                    <RiDashboardHorizontalLine className="w-5 h-5 text-zinc-500" />
                    Dashboard
                  </Link>
                </li>
                <li className="hover:text-violet-400 py-2 transition-all ease-in-out duration-300">
                  <Link
                    to="/dashboard/bookmark"
                    className="flex items-center gap-2 font-medium"
                  >
                    <FaRegHeart className="w-5 h-5 text-zinc-500" />
                    Bookmarks
                  </Link>
                </li>
                <li className="hover:text-violet-400 py-2 transition-all ease-in-out duration-300">
                  <Link
                    to="/dashboard/application"
                    className="flex items-center gap-2 font-medium"
                  >
                    <PiNoteDuotone className="w-5 h-5 text-zinc-500" />
                    Applications
                  </Link>
                </li>
                <li className="hover:text-violet-400 py-2 transition-all ease-in-out duration-300">
                  <Link
                    to="/dashboard/profile"
                    className="flex items-center gap-2 font-medium"
                  >
                    <FaRegUser className="w-5 h-5 text-zinc-500" />
                    Profile
                  </Link>
                </li>
                <li
                  onClick={handleLogout}
                  className="hover:text-violet-400 flex items-center gap-2 font-medium py-2 transition-all ease-in-out duration-300 cursor-pointer"
                >
                  <RiLogoutBoxRLine className="w-5 h-5 text-zinc-500" />
                  Logout
                </li>
              </ul>
            )}
          </div>
        ) : (
          <>
            <button className="text-violet-400 font-medium border-2 hover:bg-violet-400 transition-all ease-in-out duration-300 hover:text-white border-violet-400 py-2 px-4 rounded-md">
              <Link to="/login">Log In</Link>
            </button>
            <button className="bg-violet-400 px-4 py-2 rounded-md text-white font-medium hover:bg-violet-500 transition-all ease-in-out duration-300">
              <Link to="/register">Sign Up</Link>
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
