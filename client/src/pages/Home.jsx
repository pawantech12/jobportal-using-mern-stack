import React, { useEffect, useState } from "react";
import { FaCircle, FaRegBookmark } from "react-icons/fa";
import { GoChevronRight, GoDotFill } from "react-icons/go";
import bannerImg from "../images/banner.png";
import congImg from "../images/congratulation.svg";
import courseImg from "../images/course.svg";
import docsImg from "../images/docs.svg";
import tickImg from "../images/tick.svg";
import unionImg from "../images/union.svg";
import webdevImg from "../images/web-dev.svg";
import locImg from "../images/location.svg";
import jobImg from "../images/job.svg";
import imgJob from "../images/img-job.png";
import SelectBox from "../components/SelectBox";
import PartnerSlider from "../components/PartnerSlider";
import { IoMdTime } from "react-icons/io";
import { BiCheckShield } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
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

const categories = [
  "All",
  "Marketing",
  "Design",
  "Service",
  "Health Care",
  "Writing",
];
const Cards = [
  {
    img: "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/job-1.png",
    companyName: "Alithemes",
    companyLogo:
      "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/logo-1.svg",
    jobTitle: "Senior Full Stack Engineer, Creator Success Full Time",
    salary: "3200",
    category: ["All", "Marketing", "Service"],
  },
  {
    img: "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/job-2.png",
    companyName: "Gucci",
    companyLogo:
      "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/logo-2.svg",
    jobTitle: "A professional Facebook cover photo banner design",
    salary: "2200",
    category: ["All", "Design", "Writing"],
  },
  {
    img: "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/job-3.png",
    companyName: "Versace",
    companyLogo:
      "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/logo-3.svg",
    jobTitle: "Unique and aesthetic Instagram post images",
    salary: "3500",
    category: ["All", "Marketing", "Design", "Service"],
  },
  {
    img: "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/job-4.png",
    companyName: "Hermes",
    companyLogo:
      "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/logo-4.svg",
    jobTitle: "Premium quality Instagram post and stories",
    salary: "3800",
    category: ["All", "Design", "Health Care", "Writing"],
  },
  {
    img: "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/job-5.png",
    companyName: "Burberry",
    companyLogo:
      "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/logo-5.svg",
    jobTitle: "An amazing facebook banner, cover design",
    salary: "200",
    category: ["All", "Design", "Health Care"],
  },
  {
    img: "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/job-2.png",
    companyName: "Alithemes",
    companyLogo:
      "https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/logo-6.svg",
    jobTitle: "A complete social media business pages setup",
    salary: "3300",
    category: ["All", "Writing", "Service"],
  },
];
const Home = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [filteredCard, setFilteredCard] = useState(Cards);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const newFilteredCard =
        activeTab === "All"
          ? Cards
          : Cards.filter((card) => card.category.includes(activeTab));
      setFilteredCard(newFilteredCard);
    }, 300); // delay to allow fade out transition

    return () => clearTimeout(timeoutId);
  }, [activeTab]);

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
      <section className="mt-20 px-20">
        <div className="flex justify-between">
          <div>
            <h4 className="text-5xl text-neutral-700 font-bold">Recent Jobs</h4>
            <p className="text-gray-500 mt-4">
              8 new opportunities posted today!
            </p>
          </div>
          <div className="self-end flex gap-2 items-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`text-gray-500 px-3 py-2 rounded-lg hover:bg-violet-500 transition-all ease-in-out duration-200 hover:-translate-y-[0.19rem] hover:text-white ${
                  activeTab === category ? "bg-violet-500 text-white" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-16 flex gap-6 flex-wrap transition-opacity duration-500 ease-in-out opacity-100">
          {filteredCard.map((card, index) => (
            <div
              key={index}
              className="w-[360px] rounded-xl anim border border-gray-200 hover:border-violet-400 hover:-translate-y-[0.15rem] opacity-0 animate-fadeIn transition-transform transform ease-in-out duration-500 cursor-pointer"
            >
              <figure>
                <img
                  src={card.img}
                  alt=""
                  className="rounded-ss-xl rounded-se-xl"
                />
              </figure>
              <div className="p-8">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <img
                      src={card.companyLogo}
                      alt=""
                      className="px-1 py-[7px] bg-gray-200 rounded-full"
                    />
                    <h5 className="text-sm font-medium">{card.companyName}</h5>
                  </div>
                  <span className="flex items-center gap-[2px] text-sm px-2 py-1 rounded-md bg-indigo-50 hover:text-violet-500 transition-all ease-in-out duration-200">
                    <GoDotFill className="text-violet-400 w-3 h-3" />
                    Fulltime
                  </span>
                </div>
                <h4 className="text-xl font-medium mt-5 hover:text-violet-500 transition-all ease-in-out duration-200">
                  {card.jobTitle}
                </h4>
                <div className="flex gap-3 items-center mt-3">
                  <span className="flex items-center gap-1 text-sm">
                    <IoMdTime className="text-zinc-400 w-5 h-5" />
                    39 mins ago
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <GrLocation className="text-zinc-400 w-5 h-5" />
                    Chicago
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <small className="text-gray-400 font-medium flex items-center">
                    <span className="text-blue-500 text-2xl font-bold">
                      &#x24;{card.salary}
                    </span>
                    /Month
                  </small>

                  <div className="flex items-center gap-2">
                    <button>
                      <BiCheckShield className="text-zinc-400 w-7 h-7" />
                    </button>
                    <button>
                      <FaRegBookmark className="text-zinc-400 w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-20 px-24 flex justify-between gap-8 relative">
        <div className="mt-4">
          <h4 className="text-5xl font-bold text-neutral-700 leading-[3.7rem]">
            The #1 Job Board for Graphic Design Jobs
          </h4>
          <p className="mt-8">
            Search and connect with the right candidates faster. This talent
            seach gives you the opportunity to find candidates who may be a
            perfect fit for your role
          </p>
          <div className="flex gap-3 mt-7">
            <button className="bg-violet-400 px-5 py-2 text-lg font-medium text-white rounded-md hover:bg-violet-500 transition-all ease-in-out duration-200 hover:-translate-y-[0.15rem]">
              Post Job now
            </button>
            <button className="px-5 py-2 text-lg hover:text-violet-500 transition-all duration-200 ease-in-out rounded-md">
              Learn more
            </button>
          </div>
        </div>
        <div className="w-2/3 relative -z-10">
          <img src={imgJob} alt="" />
          <div className="p-1 w-64 absolute z-20 top-1/2 -left-1/3 border border-gray-200 rounded-2xl bg-white animate-updown">
            <div className="bg-violet-50 rounded-2xl px-6 py-4">
              <h4 className="text-center text-xl font-medium text-neutral-700">
                Top Freelancers
              </h4>
            </div>
            <ul className="px-5 py-6 flex flex-col gap-5">
              <li>
                <div className="flex gap-2">
                  <img
                    src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/avatar/ava_13.png"
                    className="w-11 h-11"
                    alt=""
                  />
                  <div>
                    <h5 className="font-bold text-neutral-700">Kate Adie</h5>
                    <p className="text-zinc-400 text-sm font-medium">
                      UI/UX Designer
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-2">
                  <img
                    src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/avatar/ava_14.png"
                    className="w-11 h-11"
                    alt=""
                  />
                  <div>
                    <h5 className="font-bold text-neutral-700">John Lennon</h5>
                    <p className="text-zinc-400 text-sm font-medium">
                      Senior Art Director
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-2">
                  <img
                    src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/avatar/ava_15.png"
                    className="w-11 h-11"
                    alt=""
                  />
                  <div>
                    <h5 className="font-bold text-neutral-700">Nadine Coyle</h5>
                    <p className="text-zinc-400 text-sm font-medium">
                      Photographer
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[450px] -z-20 h-28 absolute top-[20%] -left-[14%] -rotate-[40deg] rounded-full bg-violet-200"></div>
        <div className="w-[350px] -z-20 h-28 absolute top-[57%] -left-[10%] -rotate-[40deg] rounded-full bg-[#B6CCFF]"></div>
      </section>
      <section className="mt-28 px-24">
        <div className="flex justify-center items-center gap-14 flex-wrap">
          <img
            src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/samsung.svg"
            alt=""
            className="hover:-translate-y-[0.15rem] transition-all ease-in-out duration-300 cursor-pointer"
          />
          <img
            src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/google.svg"
            alt=""
            className="hover:-translate-y-[0.15rem] transition-all ease-in-out duration-300 cursor-pointer"
          />
          <img
            src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/facebook.svg"
            alt=""
            className="hover:-translate-y-[0.15rem] transition-all ease-in-out duration-300 cursor-pointer"
          />
          <img
            src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/pinterest.svg"
            alt=""
            className="hover:-translate-y-[0.15rem] transition-all ease-in-out duration-300 cursor-pointer"
          />
          <img
            src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/avaya.svg"
            alt=""
            className="hover:-translate-y-[0.15rem] transition-all ease-in-out duration-300 cursor-pointer"
          />
          <img
            src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/forbes.svg"
            alt=""
            className="hover:-translate-y-[0.15rem] transition-all ease-in-out duration-300 cursor-pointer"
          />
          <img
            src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/avis.svg"
            alt=""
            className="hover:-translate-y-[0.15rem] transition-all ease-in-out duration-300 cursor-pointer"
          />
          <img
            src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/nielsen.svg"
            alt=""
            className="hover:-translate-y-[0.15rem] transition-all ease-in-out duration-300 cursor-pointer"
          />
          <img
            src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/jobs/logos/doordash.svg"
            alt=""
            className="hover:-translate-y-[0.15rem] transition-all ease-in-out duration-300 cursor-pointer"
          />
        </div>
      </section>
      <section className="px-24 mt-28">
        <div className="flex justify-between">
          <div>
            <h4 className="text-6xl font-bold text-neutral-700">From blog</h4>
            <p className="mt-5 text-zinc-500">Latest News & Events</p>
          </div>
          <div className="self-end">
            <button className="border border-gray-200 font-medium hover:bg-violet-500 hover:-translate-y-[0.15rem] text-base hover:text-white transition-all duration-200 ease-in-out rounded-xl px-5 py-3 flex gap-2 items-center">
              View more <GoChevronRight />
            </button>
          </div>
        </div>
        <div className="mt-12 flex justify-center flex-wrap gap-6">
          <div className="w-[340px] px-7 py-5 border border-gray-200 rounded-xl cursor-pointer hover:border-violet-300 hover:-translate-y-[0.15rem] transition-all duration-200 ease-in-out">
            <figure>
              <img
                src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/blog/img-blog-2.png"
                alt=""
                className="rounded-xl"
              />
            </figure>
            <div className="flex justify-between items-center text-sm text-neutral-800 font-medium mt-5">
              <span>Sarah Harding</span>
              <span>06 September</span>
            </div>
            <h5 className="text-xl font-medium mt-3 hover:text-violet-500 transition-all duration-200 ease-in-out">
              Senior Full Stack, Creator Success Full Time
            </h5>
            <div className="flex justify-between items-center mt-5">
              <button className="border border-gray-200 font-medium hover:bg-violet-500 hover:-translate-y-[0.15rem] text-base hover:text-white transition-all duration-200 ease-in-out rounded-xl px-5 py-3 flex gap-2 items-center">
                Keep Reading
              </button>
              <FaRegBookmark className="w-6 h-6 text-zinc-400" />
            </div>
          </div>
          <div className="w-[340px] px-7 py-5 border border-gray-200 rounded-xl cursor-pointer hover:border-violet-300 hover:-translate-y-[0.15rem] transition-all duration-200 ease-in-out">
            <figure>
              <img
                src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/blog/img-blog-2.png"
                alt=""
                className="rounded-xl"
              />
            </figure>
            <div className="flex justify-between items-center text-sm text-neutral-800 font-medium mt-5">
              <span>Sarah Harding</span>
              <span>06 September</span>
            </div>
            <h5 className="text-xl font-medium mt-3 hover:text-violet-500 transition-all duration-200 ease-in-out">
              Senior Full Stack, Creator Success Full Time
            </h5>
            <div className="flex justify-between items-center mt-5">
              <button className="border border-gray-200 font-medium hover:bg-violet-500 hover:-translate-y-[0.15rem] text-base hover:text-white transition-all duration-200 ease-in-out rounded-xl px-5 py-3 flex gap-2 items-center">
                Keep Reading
              </button>
              <FaRegBookmark className="w-6 h-6 text-zinc-400" />
            </div>
          </div>
          <div className="w-[340px] px-7 py-5 border border-gray-200 rounded-xl cursor-pointer hover:border-violet-300 hover:-translate-y-[0.15rem] transition-all duration-200 ease-in-out">
            <figure>
              <img
                src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/blog/img-blog-2.png"
                alt=""
                className="rounded-xl"
              />
            </figure>
            <div className="flex justify-between items-center text-sm text-neutral-800 font-medium mt-5">
              <span>Sarah Harding</span>
              <span>06 September</span>
            </div>
            <h5 className="text-xl font-medium mt-3 hover:text-violet-500 transition-all duration-200 ease-in-out">
              Senior Full Stack, Creator Success Full Time
            </h5>
            <div className="flex justify-between items-center mt-5">
              <button className="border border-gray-200 font-medium hover:bg-violet-500 hover:-translate-y-[0.15rem] text-base hover:text-white transition-all duration-200 ease-in-out rounded-xl px-5 py-3 flex gap-2 items-center">
                Keep Reading
              </button>
              <FaRegBookmark className="w-6 h-6 text-zinc-400" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
