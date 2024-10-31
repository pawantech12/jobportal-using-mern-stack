import { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { useAuth } from "../../../stores/auth";
import axios from "axios";

import defaultProfile from "../../../images/default-profile.jpg";

import { EditProfileModel } from "../components/EditProfileModel";
import { useForm } from "react-hook-form";
import { EditSummaryModel } from "../components/EditSummaryModel";
import { EditSkillModel } from "../components/EditSkillModel";
import { AddEducationModal } from "../components/AddEducationModel";
import { AddCertificationModel } from "../components/AddCertificationModel";
import { io } from "socket.io-client";
import certificationImg from "../../../images/certification-img.avif";
import experienceImg from "../../../images/experience-img.avif";
import { AddExperienceModel } from "../components/AddExperienceModel";
import { toast } from "react-toastify";
import { formatDate } from "../../../helper/formate.date";

export const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showModal, setShowModal] = useState(false);
  const [editSection, setEditSection] = useState(null);
  const { user, token, setUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const userId = user?._id;

  useEffect(() => {
    if (!userId) return; // Ensure userId is provided

    // Connect to WebSocket server with userId as a query parameter
    const socket = io("http://localhost:3000", { query: { userId } });

    console.log("Connecting to WebSocket...");

    socket.on("connect", () => {
      console.log("WebSocket connected");
    });

    // Listen for status updates
    socket.on("userStatusUpdate", (data) => {
      console.log("Status update received:", data);
      if (data.userId === userId) {
        setIsOnline(data.isOnline);
      }
    });

    // Cleanup on unmount
    return () => {
      socket.off("userStatusUpdate");
      socket.disconnect();
      console.log("WebSocket disconnected");
    };
  }, [userId]);

  const handleEditClick = (section) => {
    setEditSection(section);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setEditSection(null);
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null); // File to be uploaded
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Preview the image
      const reader = new FileReader();
      reader.onloadend = () => setSelectedImage(reader.result);
      reader.readAsDataURL(file);

      // Store the file for uploading later
      setImageFile(file);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);

    console.log("data: ", data);

    // Check if profileImg exists and has at least one item
    if (imageFile) {
      data.profileImg = imageFile;
    } else {
      data.profileImg = null; // or set a default value, if necessary
    }

    console.log("Data sending to backend: ", data);

    // Submit form data along with the image URL to the backend
    try {
      const response = await axios.put(
        `http://localhost:3000/api/user/update-${editSection}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("edit section", editSection);

      // Dynamically update the user state based on the editSection
      setUser((prevUser) => ({
        ...prevUser,
        [editSection]: response.data.user[editSection], // Update the specific section dynamically
      }));
      console.log("Response d:", response.data);

      toast.success(response.data.message);
      handleClose();
    } catch (error) {
      toast.error(error.response.data.message);
      console.error(`Failed to update profile: ${editSection}`, error);
    } finally {
      setLoading(false);
    }
  };
  console.log("user details: ", user);
  console.log("setImage: ", imageFile);

  return (
    <>
      <section>
        <div className="flex justify-between mt-8 border border-gray-200 p-8 rounded-xl items-center">
          <div className="flex gap-2 items-center">
            <figure className="relative">
              <img
                src={user?.profileImg ? user?.profileImg : defaultProfile}
                alt=""
                className="rounded-full w-24 h-24"
              />
              {isOnline ? (
                <div className="h-4 w-4 bg-green-400 rounded-full absolute top-[10%] left-[1%] border-2 border-white"></div>
              ) : (
                <div className="h-4 w-4 bg-zinc-300 rounded-full absolute top-[10%] left-[1%] border-2 border-white"></div>
              )}
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
              {user?.headline}
            </h4>
            <FaEdit
              className="text-xl text-gray-400 cursor-pointer"
              onClick={() => handleEditClick("summary")}
            />
          </div>
          <p className="text-zinc-500 mt-3">{user?.summary}</p>
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
            {user?.skills.length ? (
              user?.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-zinc-100 px-3 py-2 text-sm rounded-full font-medium"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p>No Skills has been added</p>
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
            <ul className="flex flex-col gap-5">
              {user?.education?.length ? (
                user?.education?.map((edu, index) => (
                  <li
                    key={index}
                    className="border border-gray-200 rounded-xl p-6"
                  >
                    <div>
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-semibold text-neutral-700">
                            {edu?.degree}
                          </h3>
                          <p className="text-base font-medium text-zinc-700">
                            {edu?.institution}
                          </p>
                        </div>
                        <span className="bg-zinc-100 px-4 py-1 rounded-md text-sm font-medium">
                          {new Date(edu?.startYear).getFullYear()} -{" "}
                          {edu.endYear
                            ? new Date(edu?.endYear).getFullYear()
                            : "Present"}
                        </span>
                      </div>
                      <p className="text-sm italic font-medium bg-zinc-100 px-3 py-2 rounded-md mt-3">
                        {edu?.description}
                      </p>
                    </div>
                  </li>
                ))
              ) : (
                <p>No Education has been added</p>
              )}
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
              {user?.certifications?.length ? (
                user?.certifications?.map((cert, index) => (
                  <li
                    key={index}
                    className="border border-gray-200 rounded-xl p-6"
                  >
                    <div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <figure>
                            <img
                              src={certificationImg}
                              alt="certification img"
                              className="w-24 h-20 rounded-md"
                            />
                          </figure>
                          <div>
                            <h3 className="text-lg font-semibold text-neutral-700">
                              {cert.title}
                            </h3>
                            <p className="text-base font-medium text-zinc-700">
                              {cert.issuissuingOrganization}
                            </p>
                            <button className="text-sm border-2 rounded-full px-3 py-1 border-violet-400 mt-2 font-medium hover:bg-violet-400 hover:text-white transition-all ease-in-out duration-200">
                              <Link to={cert.credentialUrl}>
                                Show Credentials
                              </Link>
                            </button>
                          </div>
                        </div>
                        <span className="bg-zinc-100 px-4 py-1 rounded-md text-sm font-medium">
                          {formatDate(cert.issueDate)} -{" "}
                          {cert.expirationDate
                            ? formatDate(cert.expirationDate)
                            : "Present"}
                        </span>
                      </div>
                      {cert.description && (
                        <p className="text-sm italic font-medium bg-zinc-100 px-3 py-2 rounded-md mt-3">
                          {cert.description}
                        </p>
                      )}
                    </div>
                  </li>
                ))
              ) : (
                <p>No Certifications has been added</p>
              )}
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
              onClick={() => handleEditClick("experiences")}
            />
          </div>
          <div className="mt-4">
            <ul>
              {user?.experiences?.length ? (
                user?.experiences?.map((exp, index) => (
                  <li
                    className="border border-gray-200 rounded-xl p-6"
                    key={index}
                  >
                    <div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <figure>
                            <img
                              src={experienceImg}
                              alt="experience img"
                              className="w-24 h-20 rounded-md"
                            />
                          </figure>
                          <div>
                            <h3 className="text-lg font-semibold text-neutral-700">
                              {exp?.title}
                            </h3>
                            <p className="text-base font-medium text-zinc-700">
                              {exp?.company} · <span>{exp?.type}</span>
                            </p>
                          </div>
                        </div>
                        <span className="bg-zinc-100 px-4 py-1 rounded-md text-sm font-medium">
                          {formatDate(exp?.startDate)} -{" "}
                          {exp?.endDate ? formatDate(exp?.endDate) : "Present"}
                        </span>
                      </div>
                      {exp?.description && (
                        <p className="text-sm italic font-medium bg-zinc-100 px-3 py-2 rounded-md mt-3">
                          {exp?.description}
                        </p>
                      )}
                    </div>
                  </li>
                ))
              ) : (
                <p>No Experience has been added</p>
              )}
            </ul>
          </div>
        </div>
      </section>

      {editSection == "profile" && (
        <EditProfileModel
          register={register}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          errors={errors}
          handleImageChange={handleImageChange}
          editSection={editSection}
          selectedImage={selectedImage}
          user={user}
          loading={loading}
        />
      )}
      {editSection == "summary" && (
        <EditSummaryModel
          register={register}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          errors={errors}
          editSection={editSection}
          user={user}
          loading={loading}
        />
      )}
      {editSection === "skills" && (
        <EditSkillModel
          handleClose={handleClose}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          errors={errors}
          editSection={editSection}
          user={user}
          loading={loading}
        />
      )}
      {editSection === "education" && (
        <AddEducationModal
          handleClose={handleClose}
          handleSubmit={handleSubmit}
          register={register}
          onSubmit={onSubmit}
          errors={errors}
          user={user}
          loading={loading}
        />
      )}
      {editSection === "certifications" && (
        <AddCertificationModel
          handleClose={handleClose}
          handleSubmit={handleSubmit}
          register={register}
          onSubmit={onSubmit}
          loading={loading}
        />
      )}
      {editSection === "experiences" && (
        <AddExperienceModel
          handleClose={handleClose}
          handleSubmit={handleSubmit}
          register={register}
          onSubmit={onSubmit}
          loading={loading}
        />
      )}
    </>
  );
};
