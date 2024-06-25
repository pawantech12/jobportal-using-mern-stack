import React from "react";
import logo from "../images/logo.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="px-24 mt-20">
      <div className="flex gap-4 justify-between">
        <div className="w-[30%]">
          <img src={logo} alt="logo" />
          <p className="text-sm mt-5">
            Jobhub is the heart of the design community and the best resource to
            discover and connect with designers and jobs worldwide.
          </p>
        </div>
        <div>
          <h4 className="font-medium">Company</h4>
          <ul className="mt-5 text-sm flex flex-col gap-2">
            <li className="hover:text-violet-500 cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-200">
              About Us
            </li>
            <li className="hover:text-violet-500 cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-200">
              Our Team
            </li>
            <li className="hover:text-violet-500 cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-200">
              Products
            </li>
            <li className="hover:text-violet-500 cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-200">
              Contact
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Product</h4>
          <ul className="mt-5 text-sm flex flex-col gap-2">
            <li className="hover:text-violet-500 cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-200">
              Feature
            </li>
            <li className="hover:text-violet-500 cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-200">
              Pricing
            </li>
            <li className="hover:text-violet-500 cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-200">
              Credit
            </li>
            <li className="hover:text-violet-500 cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-200">
              FAQ
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Download</h4>
          <ul className="mt-5 text-sm flex flex-col gap-2">
            <li className="hover:text-violet-500 cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-200">
              IOS
            </li>
            <li className="hover:text-violet-500 cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-200">
              Android
            </li>
            <li className="hover:text-violet-500 cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-200">
              Microsoft
            </li>
            <li className="hover:text-violet-500 cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-200">
              Desktop
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Support</h4>
          <ul className="mt-5 text-sm flex flex-col gap-2">
            <li className="hover:text-violet-500 cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-200">
              Privacy
            </li>
            <li className="hover:text-violet-500 cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-200">
              Help
            </li>
            <li className="hover:text-violet-500 cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-200">
              Terms
            </li>
            <li className="hover:text-violet-500 cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-200">
              FAQ
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm">
          Copyright ©2024{" "}
          <Link className="text-violet-500 font-semibold">Jobhub</Link>. All
          Rights Reserved
        </p>
        <ul className="flex items-center gap-3 text-zinc-400">
          <li className="border-2 border-zinc-200 rounded-full p-2 cursor-pointer hover:bg-blue-500 hover:border-white hover:text-white hover:-translate-y-[0.25rem] transition-all ease-in-out duration-200">
            <FaFacebookF />
          </li>
          <li className="border-2 border-zinc-200 rounded-full p-2 cursor-pointer hover:bg-blue-500 hover:border-white hover:text-white hover:-translate-y-[0.25rem] transition-all ease-in-out duration-200">
            <FaTwitter />
          </li>
          <li className="border-2 border-zinc-200 rounded-full p-2 cursor-pointer hover:bg-blue-500 hover:border-white hover:text-white hover:-translate-y-[0.25rem] transition-all ease-in-out duration-200">
            <FaInstagram />
          </li>
          <li className="border-2 border-zinc-200 rounded-full p-2 cursor-pointer hover:bg-blue-500 hover:border-white hover:text-white hover:-translate-y-[0.25rem] transition-all ease-in-out duration-200">
            <FaLinkedinIn />
          </li>
        </ul>
      </div>
    </footer>
  );
};
