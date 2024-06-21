import React from "react";
import { FaCircle } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
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
import PartnerSlider from "../components/PartnerSlider";

const cardDetails = [
  {
    src: "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/theme/icons/marketing.svg",
    title: "Marketing & Communication",
    vacancies: "156 Available Vacancy",
  },
  {
    src: "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/theme/icons/content-writer.svg",
    title: "Content Writer",
    vacancies: "268 Available Vacancy",
  },
  {
    src: "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/theme/icons/marketing-director.svg",
    title: "Marketing Director",
    vacancies: "145 Available Vacancy",
  },
  {
    src: "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/theme/icons/system-analyst.svg",
    title: "System Analyst",
    vacancies: "236 Available Vacancy",
  },
  {
    src: "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/theme/icons/business-development.svg",
    title: "Digital Designer",
    vacancies: "56 Available Vacancy",
  },
  {
    src: "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/theme/icons/proof-reading.svg",
    title: "Market Research",
    vacancies: "168 Available Vacancy",
  },
  {
    src: "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/theme/icons/testing.svg",
    title: "Human Resource",
    vacancies: "628 Available Vacancy",
  },
];

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
      <section className="flex px-20 justify-center mt-[4rem]">
        <div className="w-full flex">
          <PartnerSlider />
        </div>
      </section>
      <section className="relative mt-24 px-16 overflow-hidden">
        <div className="flex justify-between">
          <div className="w-[60%]">
            <h4 className="text-5xl font-bold text-neutral-700">
              Browse by category
            </h4>
            <p className="text-gray-500 mt-5">
              Find the type of work you need, clearly defined and ready to
              start. Work begins as soon as you purchase and provide
              requirements.
            </p>
          </div>
          <div className="self-end">
            <button className="border border-gray-200 font-medium hover:bg-violet-500 hover:-translate-y-[0.15rem] text-base hover:text-white transition-all duration-200 ease-in-out rounded-xl px-5 py-3 flex gap-2 items-center">
              Browse all <GoChevronRight />
            </button>
          </div>
        </div>
        <div className="mt-16 relative flex gap-6 flex-wrap justify-center">
          {cardDetails.map((logo, index) => (
            <div
              key={index}
              className="w-64 border border-gray-200 rounded-xl flex flex-col items-center text-center gap-5 p-10 cursor-pointer hover:border-violet-300 hover:-translate-y-[0.15rem] transition-all duration-200 ease-in-out"
            >
              <figure>
                <img src={logo.src} alt={logo.title} />
              </figure>
              <h4 className="hover:text-violet-500 transition-all duration-200 ease-in-out text-xl font-medium">
                {logo.title}
              </h4>
              <p className="text-sm text-gray-400">{logo.vacancies}</p>
            </div>
          ))}
          <div className="w-64 border border-gray-200 rounded-xl flex flex-col items-center justify-center text-center gap-5 p-10 cursor-pointer hover:border-violet-300 hover:-translate-y-[0.15rem] transition-all duration-200 ease-in-out">
            <h4 className="text-[2.5rem] font-bold text-neutral-700">
              18,265+
            </h4>
            <p className="text-sm text-gray-400">Jobs are waiting for you</p>
            <button className="bg-violet-500 text-lg font-medium rounded-xl hover:bg-violet-600 text-white px-5 py-3">
              Explore more
            </button>
          </div>
          {/* Circle backgrounds */}
          <div className="w-14 h-14 right-0 top-1/4 rounded-full absolute border-[0.75rem] border-sky-100 -z-10"></div>
          <div className="w-44 h-44 right-[-10%] top-[40%] rounded-full absolute border-[2rem] border-[#E7E3FE] -z-10"></div>
        </div>
      </section>
      <section>
        <div>{/* recent job section beginning */}</div>
      </section>
    </main>
  );
};

export default Home;
