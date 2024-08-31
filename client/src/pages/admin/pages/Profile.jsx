import { useState } from "react";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { useAuth } from "../../../stores/auth";
import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import defaultProfile from "../../../images/default-profile.jpg";

import { storage } from "../../../../firebase/firebase";
import { EditProfileModel } from "../components/EditProfileModel";
import { useForm } from "react-hook-form";
import { EditSummaryModel } from "../components/EditSummaryModel";

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
  const [imageUploadProgress, setImageUploadProgress] = useState(0);
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
    let profileImageUrl = user?.profileImg || ""; // Default to existing profile image

    // Upload to Firebase only if a new image was selected
    if (imageFile) {
      const storageRef = ref(storage, `profile_images/${imageFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setImageUploadProgress(progress);
          },
          (error) => reject(error),
          () => {
            getDownloadURL(uploadTask.snapshot.ref)
              .then((downloadURL) => {
                profileImageUrl = downloadURL;
                resolve();
              })
              .catch(reject);
          }
        );
      });
    }
    if (profileImageUrl) {
      data.profileImg = profileImageUrl;
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
          },
        }
      );
      setUser(response.data.user);
      console.log("Response d:", response.data);
      handleClose();
    } catch (error) {
      console.error(`Failed to update profile: ${editSection}`, error);
    } finally {
      setLoading(false);
    }
  };

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
    </>
  );
};
