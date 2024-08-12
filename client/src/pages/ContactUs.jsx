import React from "react";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineEnvelope } from "react-icons/hi2";

const ContactUs = () => {
  return (
    <>
      <section className="flex justify-center flex-col">
        <div>
          <div className="text-center">
            <span className="text-[#5192FF] text-lg font-semibold">
              Get in Touch
            </span>
            <h3 className="text-4xl font-semibold text-neutral-700">
              You are always welcome to visit our little studio
            </h3>
          </div>
          <div className="flex justify-center gap-10 mt-12">
            <div className="w-72 flex flex-col gap-3">
              <h4 className="text-xl font-medium">Office</h4>
              <div>
                <p className="text-sm">
                  205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
                </p>
                <span className="text-sm">Phone: (123) 456-7890</span>
                <span className="text-sm">Email: contact@jubhub.com</span>
              </div>
              <button className="bg-violet-500 text-sm text-white py-2 px-5 rounded-md w-fit">
                View map
              </button>
            </div>
            <div className="w-72 flex flex-col gap-3">
              <h4 className="text-xl font-medium">Office</h4>
              <div>
                <p className="text-sm">
                  205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
                </p>
                <span className="text-sm">Phone: (123) 456-7890</span>
                <span className="text-sm">Email: contact@jubhub.com</span>
              </div>
              <button className="bg-violet-500 text-sm text-white py-2 px-5 rounded-md w-fit">
                View map
              </button>
            </div>
            <div className="w-72 flex flex-col gap-3">
              <h4 className="text-xl font-medium">Office</h4>
              <div>
                <p className="text-sm">
                  205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
                </p>
                <span className="text-sm">Phone: (123) 456-7890</span>
                <span className="text-sm">Email: contact@jubhub.com</span>
              </div>
              <button className="bg-violet-500 text-sm text-white py-2 px-5 rounded-md w-fit">
                View map
              </button>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="text-center">
            <span className="text-[#5192FF] text-lg font-semibold">
              Send Message
            </span>
            <h3 className="text-4xl font-semibold text-neutral-700 mt-4">
              Drop Us a Line
            </h3>
            <p className="text-zinc-500 mt-3">
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>
          <div className="flex justify-center gap-10 mt-10">
            <div className="w-72 flex flex-col items-center gap-1">
              <FiPhone className="w-8 h-8 text-violet-500" />
              <small>Phone</small>
              <span className="font-medium">+ 48 654-430-309</span>
              <span className="font-medium">+ 1 6532-430-309</span>
            </div>
            <div className="w-72 flex flex-col items-center gap-1">
              <IoLocationOutline className="w-8 h-8 text-violet-500" />
              <small>Address</small>
              <span className="font-medium">+ 48 654-430-309</span>
              <span className="font-medium">+ 1 6532-430-309</span>
            </div>
            <div className="w-72 flex flex-col items-center gap-1">
              <HiOutlineEnvelope className="w-8 h-8 text-violet-500" />
              <small>Email</small>
              <span className="font-medium">+ 48 654-430-309</span>
              <span className="font-medium">+ 1 6532-430-309</span>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <form action="" className="w-1/2 flex flex-col gap-5">
              <div className="flex gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-200 rounded-md outline-none w-full h-11 px-3"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-200 rounded-md outline-none w-full h-11 px-3"
                />
              </div>
              <div className="flex gap-5">
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="border border-gray-200 rounded-md outline-none w-full h-11 px-3"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="border border-gray-200 rounded-md outline-none w-full h-11 px-3"
                />
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="8"
                placeholder="Message"
                className="border border-gray-200 rounded-md py-2 outline-none w-full px-3 resize-none"
              ></textarea>
              <button className="bg-violet-500 px-4 py-3 rounded-lg text-white font-medium text-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
