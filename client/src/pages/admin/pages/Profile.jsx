import React, { useState } from "react";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { useAuth } from "../../../stores/auth";
import defaultProfile from "../../../images/default-profile.jpg";
import { IoClose } from "react-icons/io5";

export const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [editSection, setEditSection] = useState(null);
  const { user } = useAuth();

  const handleEditClick = (section) => {
    setEditSection(section);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setEditSection(null);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const renderModalContent = () => {
    switch (editSection) {
      case "profile":
        return (
          <div className="flex flex-col gap-5">
            {/* Add form fields for editing the profile section here */}
            <figure className="flex justify-center">
              <label
                htmlFor="profile-upload"
                className="relative cursor-pointer w-fit block"
              >
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Profile Preview"
                    className="w-40 h-40 rounded-full object-cover"
                  />
                ) : (
                  <img
                    src={defaultProfile}
                    alt="Profile Preview"
                    className="w-40 h-40 rounded-full object-cover"
                  />
                )}
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </figure>
            <div className="flex gap-5">
              <input
                type="text"
                className="w-full p-2 border border-gray-200 outline-none rounded"
                placeholder="First Name"
                defaultValue={user.firstname ? user.firstname : ""}
              />
              <input
                type="text"
                className="w-full p-2 border border-gray-200 outline-none rounded"
                placeholder="Last Name"
                defaultValue={user.lastname ? user.lastname : ""}
              />
            </div>
          </div>
        );
      case "summary":
        return (
          <div>
            {/* Add form fields for editing the summary section here */}
            <textarea
              className="w-full p-2 border rounded"
              placeholder="Summary"
            ></textarea>
          </div>
        );
      case "skills":
        return (
          <div>
            {/* Add form fields for editing the skills section here */}
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Skills"
            />
          </div>
        );
      case "education":
        return (
          <div>
            {/* Add form fields for editing the education section here */}
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Education"
            />
          </div>
        );
      case "certifications":
        return (
          <div>
            {/* Add form fields for editing the certifications section here */}
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Certifications"
            />
          </div>
        );
      case "experience":
        return (
          <div>
            {/* Add form fields for editing the experience section here */}
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Experience"
            />
          </div>
        );
      default:
        return null;
    }
  };

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
              <h2 className="text-3xl font-semibold capitalize">
                {user?.firstname + " " + user?.lastname}
              </h2>
              <p className="flex gap-1 items-center font-medium text-zinc-500 mt-2">
                <span>
                  <GrLocation />
                </span>{" "}
                Bhiwandi, India
              </p>
            </div>
          </div>
          <button
            className="bg-violet-400 px-4 py-2 rounded-md text-white font-medium hover:bg-violet-500 transition-all ease-in-out duration-200"
            onClick={() => handleEditClick("profile")}
          >
            Edit Profile
          </button>
        </div>

        <div className="mt-5 border border-gray-200 p-8 rounded-xl relative">
          <div className="flex justify-between items-center">
            <h4 className="text-xl font-semibold text-neutral-600">
              Full-Stack Developer: HTML, CSS, JS, React, Node.js & More
            </h4>
            <FaEdit
              className="text-xl text-gray-400 cursor-pointer"
              onClick={() => handleEditClick("summary")}
            />
          </div>
          <p className="text-zinc-500 mt-3">
            I'm a passionate web developer with a strong foundation in both
            front-end and back-end technologies. I possess expertise in building
            modern and interactive web applications using ReactJS, Node.js
            (Express.js), MongoDB, and other popular frameworks. My skillset
            also encompasses HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, and
            database management with MySQL and PHP.
          </p>
        </div>

        <div className="mt-5 border border-gray-200 p-8 rounded-xl relative">
          <div className="flex justify-between items-center">
            <h4 className="text-xl font-semibold text-neutral-600">Skills</h4>
            <FaEdit
              className=" text-xl text-gray-400 cursor-pointer"
              onClick={() => handleEditClick("skills")}
            />
          </div>
          <div className="mt-5 flex gap-3 items-center flex-wrap">
            {["HTML", "CSS", "JavaScript", "React", "Node.js"].map(
              (skill, index) => (
                <span
                  key={index}
                  className="bg-zinc-100 px-3 py-2 text-sm rounded-full font-medium"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        <div className="mt-5 border border-gray-200 p-8 rounded-xl relative">
          <div className="flex justify-between items-center">
            <h4 className="text-xl font-semibold text-neutral-600">
              Education
            </h4>
            <FaEdit
              className=" text-xl text-gray-400 cursor-pointer"
              onClick={() => handleEditClick("education")}
            />
          </div>
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

        <div className="mt-5 border border-gray-200 p-8 rounded-xl relative">
          <div className="flex justify-between items-center">
            <h4 className="text-xl font-semibold text-neutral-600">
              Certifications
            </h4>
            <FaEdit
              className=" text-xl text-gray-400 cursor-pointer"
              onClick={() => handleEditClick("certifications")}
            />
          </div>
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

        <div className="mt-5 border border-gray-200 p-8 rounded-xl relative">
          <div className="flex justify-between items-center">
            <h4 className="text-xl font-semibold text-neutral-600">
              Experience
            </h4>
            <FaEdit
              className="text-xl text-gray-400 cursor-pointer"
              onClick={() => handleEditClick("experience")}
            />
          </div>
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

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Edit {editSection}</h2>
              <button onClick={handleClose} className="text-gray-400 text-3xl">
                <IoClose />
              </button>
            </div>
            <div className="mt-4">{renderModalContent()}</div>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleClose}
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              >
                Close
              </button>
              <button
                onClick={handleClose}
                className="bg-violet-500 text-white px-4 py-2 rounded"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
