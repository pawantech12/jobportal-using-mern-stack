import React from "react";
import { FaCircle } from "react-icons/fa";
import bannerImg from "../images/banner.png";
import congImg from "../images/congratulation.svg";
import courseImg from "../images/course.svg";
import docsImg from "../images/docs.svg";
import tickImg from "../images/tick.svg";
import unionImg from "../images/union.svg";
import webdevImg from "../images/web-dev.svg";
import locImg from "../images/location.svg";
import jobImg from "../images/job.svg";
import SelectBox from "../components/SelectBox";

const Home = () => {
  return (
    <main className="mx-4 mt-2">
      {/* hero section  */}
      <section className="flex justify-between">
        <div className="bg-orange-50 px-16 py-10 w-[60%] rounded-ss-[2rem] rounded-se-[8rem] rounded-es-[7rem] flex flex-col gap-3">
          <small className="uppercase flex gap-2 font-bold text-base text-blue-400 items-center">
            <FaCircle className="w-4 h-4 text-emerald-300" />
            best jobs place
          </small>
          <h1 className="text-6xl text-neutral-800 font-bold leading-[4.5rem]">
            The Easiest Way to Get Your New Job
          </h1>
          <p className="text-gray-700 mt-5 font-medium">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
          <div className="mt-6">
            <form
              action=""
              className="bg-white rounded-xl flex justify-between items-center px-7 py-4"
            >
              <div className="flex border rounded-lg border-gray-200 px-4 py-2 gap-3 items-center">
                <label htmlFor="job">
                  <img src={jobImg} alt="Job Img" />
                </label>
                <input
                  type="text"
                  name="job"
                  id="job"
                  placeholder="Job title, Company"
                  className="outline-none h-7"
                />
              </div>
              <div className="flex border justify-between rounded-lg border-gray-200 px-4 py-1 w-[30%] items-center">
                <label htmlFor="location">
                  <img src={locImg} alt="loc img" />
                </label>
                <SelectBox />
              </div>
              <button className="bg-violet-500 hover:bg-violet-600 transition-all ease-in-out hover:-translate-y-[0.15rem] duration-300 text-lg rounded-xl px-4 py-2 text-white font-medium">
                Find now
              </button>
            </form>
          </div>
        </div>
        <div className="w-[33%] relative">
          <img src={bannerImg} alt="banner Image" className="animate-updown" />
          <img
            src={courseImg}
            alt="course Img"
            className="absolute top-[10%] right-0 animate-course"
          />
          <img
            src={unionImg}
            alt="union Img"
            className="absolute top-[15%] left-[-15%] animate-course"
          />
          <img
            src={congImg}
            alt="cong Img"
            className="absolute top-[35%] left-[-25%] animate-cong"
          />
          <img
            src={webdevImg}
            alt="Web Dev Img"
            className="absolute top-[55%] right-0 animate-course"
          />
          <img
            src={docsImg}
            alt="Docs Img"
            className="absolute bottom-[5%] left-[-5%] animate-cong"
          />
          <img
            src={tickImg}
            alt="Tick Img"
            className="absolute bottom-0 right-0 animate-course"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
