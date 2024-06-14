import React, { useState } from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className="py-7 px-20 flex justify-between items-center">
      <div>
        <img src={logo} alt="JobHub Logo" />
      </div>
      <nav>
        <ul className="flex gap-9 font-medium">
          <li>
            <Link className="hover:text-violet-400 transition-all ease-in-out duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-violet-400 transition-all ease-in-out duration-300">
              Browse Jobs
            </Link>
          </li>
          <li>
            <Link className="hover:text-violet-400 transition-all ease-in-out duration-300">
              Companys
            </Link>
          </li>
          <li>
            <Link className="hover:text-violet-400 transition-all ease-in-out duration-300">
              Candidates
            </Link>
          </li>
          <li>
            <Link className="hover:text-violet-400 transition-all ease-in-out duration-300">
              Blog
            </Link>
          </li>
          <li className="relative" onClick={toggleDropdown}>
            <Link className="hover:text-violet-400 flex gap-1 items-center transition-all ease-in-out duration-300">
              Pages
              <IoChevronDownOutline />
            </Link>
            {dropdownVisible && (
              <ul
                className="absolute top-full py-4 px-3 text-sm left-0 mt-2 py w-44 bg-white shadow-lg rounded-md"
                onMouseLeave={toggleDropdown}
              >
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
      <div className="flex gap-4">
        <button className="text-violet-400 font-medium border-2 hover:bg-violet-400 transition-all ease-in-out duration-300 hover:text-white border-violet-400 py-2 px-4 rounded-md">
          <Link>Log In</Link>
        </button>
        <button className="bg-violet-400 px-4 py-2 rounded-md text-white font-medium hover:bg-violet-500 transition-all ease-in-out duration-300">
          <Link>Sign Up</Link>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
