import React from "react";
import { FaCircle } from "react-icons/fa";

const Home = () => {
  return (
    <main className="mx-4">
      {/* hero section  */}
      <section className="">
        <div className="bg-orange-50 px-16 py-10 w-[60%] rounded-ss-[2rem] rounded-se-[8rem] rounded-es-[7rem] flex flex-col gap-3">
          <small className="uppercase flex gap-2 font-bold text-base text-blue-400 items-center">
            <FaCircle className="w-4 h-4 text-emerald-300" />
            best jobs place
          </small>
          <h1 className="text-6xl font-bold leading-[4.5rem]">
            The Easiest Way to Get Your New Job
          </h1>
          <p className="text-gray-700 font-medium">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </section>
    </main>
  );
};

export default Home;
