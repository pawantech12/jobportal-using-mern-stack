import React from "react";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <>
      <section>
        <div className="flex justify-between mt-8 border border-gray-200 p-8 rounded-xl items-center">
          <div className="flex gap-2 items-center">
            <figure className="relative">
              <img
                src="https://www.upwork.com/profile-portraits/c1GZyQ4XcjQCcIa39aX4z9ccw8w8Y7hplJN-JYzxAn-a1CntFoqs3qc4ZHKZx8LRXY"
                alt=""
                className="rounded-full w-24 h-24"
              />
              <div className="h-4 w-4 bg-green-400 rounded-full absolute top-[10%] left-[1%] border-2 border-white"></div>
            </figure>
            <div>
              <h2 className="text-3xl font-semibold">Pawan Kumavat</h2>
              <p className="flex gap-1 items-center font-medium text-zinc-500 mt-2">
                <span>
                  <GrLocation />
                </span>{" "}
                Bhiwandi, India
              </p>
            </div>
          </div>
          <button className="bg-violet-400 px-4 py-2 rounded-md text-white font-medium hover:bg-violet-500 transition-all ease-in-out duration-200">
            Edit Profile
          </button>
        </div>
        <div className="mt-5 border border-gray-200 p-8 rounded-xl">
          <h4 className="text-xl font-semibold text-neutral-600">
            Full-Stack Developer: HTML, CSS, JS, React, Node.js & More
          </h4>
          <p className="text-zinc-500 mt-3">
            I'm a passionate web developer with a strong foundation in both
            front-end and back-end technologies. I possess expertise in building
            modern and interactive web applications using ReactJS, Node.js
            (Express.js), MongoDB, and other popular frameworks. My skillset
            also encompasses HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, and
            database management with MySQL and PHP.
          </p>
        </div>
        <div className="mt-5 border border-gray-200 p-8 rounded-xl">
          <h4 className="text-xl font-semibold text-neutral-600">Skills</h4>
          <div className="mt-5 flex gap-3 items-center">
            <span className="bg-zinc-100 px-3 py-2 text-sm rounded-full font-medium">
              HTML
            </span>
            <span className="bg-zinc-100 px-3 py-2 text-sm rounded-full font-medium">
              HTML
            </span>
            <span className="bg-zinc-100 px-3 py-2 text-sm rounded-full font-medium">
              HTML
            </span>
            <span className="bg-zinc-100 px-3 py-2 text-sm rounded-full font-medium">
              HTML
            </span>
            <span className="bg-zinc-100 px-3 py-2 text-sm rounded-full font-medium">
              HTML
            </span>
            <span className="bg-zinc-100 px-3 py-2 text-sm rounded-full font-medium">
              HTML
            </span>
            <span className="bg-zinc-100 px-3 py-2 text-sm rounded-full font-medium">
              HTML
            </span>
            <span className="bg-zinc-100 px-3 py-2 text-sm rounded-full font-medium">
              HTML
            </span>
            <span className="bg-zinc-100 px-3 py-2 text-sm rounded-full font-medium">
              HTML
            </span>
          </div>
        </div>
        <div className="mt-5 border border-gray-200 p-8 rounded-xl">
          <h4 className="text-xl font-semibold text-neutral-600">Education</h4>
          <div className="mt-4">
            <ul>
              <li className="border border-gray-200 rounded-xl p-6">
                <div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-700">
                        Bachelor of Science in Computer Science
                      </h3>
                      <p className="text-base font-medium text-zinc-700">
                        K.M. Agrawal College of Arts, Commerce and Science
                      </p>
                    </div>
                    <span className="bg-zinc-100 px-4 py-1 rounded-md text-sm font-medium">
                      2021-2024
                    </span>
                  </div>
                  <p className="text-sm italic font-medium bg-zinc-100 px-3 py-2 rounded-md mt-3">
                    Pursuing Bachelor of Science in Computer Science at K.M.
                    Agrawal College, honing my skills in programming, data
                    structures, algorithms, and software development.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5 border border-gray-200 p-8 rounded-xl">
          <h4 className="text-xl font-semibold text-neutral-600">
            Certifications
          </h4>
          <div className="mt-4">
            <ul>
              <li className="border border-gray-200 rounded-xl p-6">
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <figure>
                        <img
                          src="https://media.licdn.com/dms/image/D4E2DAQGHAZl_SthgtA/profile-treasury-image-shrink_160_160/0/1711081860730?e=1721044800&v=beta&t=s6X3HroBaabPYFjURbtr3KUTZrHexFDRYdEIwqVbgs0"
                          alt=""
                          className="w-24 h-20 rounded-md"
                        />
                      </figure>
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-700">
                          Back End Development and APIs
                        </h3>
                        <p className="text-base font-medium text-zinc-700">
                          freeCodeCamp
                        </p>
                        <button className="text-sm border-2 rounded-full px-3 py-1 border-violet-400 mt-2 font-medium hover:bg-violet-400 hover:text-white transition-all ease-in-out duration-200">
                          <Link>Show Credentials</Link>
                        </button>
                      </div>
                    </div>
                    <span className="bg-zinc-100 px-4 py-1 rounded-md text-sm font-medium">
                      March, 2024 - March, 2026
                    </span>
                  </div>
                  <p className="text-sm italic font-medium bg-zinc-100 px-3 py-2 rounded-md mt-3">
                    Earned a certificate in Back-End Development and APIs from
                    freeCodeCamp,solidifying foundational skills in server-side
                    development and API integration
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5 border border-gray-200 p-8 rounded-xl">
          <h4 className="text-xl font-semibold text-neutral-600">Experience</h4>
          <div className="mt-4">
            <ul>
              <li className="border border-gray-200 rounded-xl p-6">
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <figure>
                        <img
                          src="https://media.licdn.com/dms/image/C4E0BAQFAvA55uI9RQQ/company-logo_100_100/0/1630655510176/upwork_logo?e=1728518400&v=beta&t=wiRSzbleLsYevgjvYCw2zOVHPsmpgWubCx6baBuDvQM"
                          alt=""
                          className="w-24 h-20 rounded-md"
                        />
                      </figure>
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-700">
                          Web Developer
                        </h3>
                        <p className="text-base font-medium text-zinc-700">
                          Upwork · <span>Freelance</span>
                        </p>
                        <button className="text-sm border-2 rounded-full px-3 py-1 border-violet-400 mt-2 font-medium hover:bg-violet-400 hover:text-white transition-all ease-in-out duration-200">
                          <Link>Show Credentials</Link>
                        </button>
                      </div>
                    </div>
                    <span className="bg-zinc-100 px-4 py-1 rounded-md text-sm font-medium">
                      Jun 2024 - Present
                    </span>
                  </div>
                  <p className="text-sm italic font-medium bg-zinc-100 px-3 py-2 rounded-md mt-3">
                    Leveraging full-stack development skills to craft
                    high-performance web applications and landing pages for
                    clients on Upwork.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
