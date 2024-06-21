import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import comp1 from "../images/google.svg";
import comp2 from "../images/airbnb.svg";
import comp3 from "../images/dropbox.svg";
import comp4 from "../images/fedex.svg";
import comp5 from "../images/wallmart.svg";
import comp6 from "../images/hubspot.svg";

// Sample company partner logos (replace with your actual images)
const companyLogos = [comp1, comp2, comp3, comp4, comp5, comp6];

const PartnerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 6;
  const totalSlides = companyLogos.length;
  const sliderRef = useRef(null);
  const [transitioning, setTransitioning] = useState(false);

  const handlePrev = () => {
    setTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  useEffect(() => {
    if (transitioning) {
      const timer = setTimeout(() => setTransitioning(false), 500);
      return () => clearTimeout(timer);
    }
  }, [transitioning]);
  return (
    <div className="w-full flex justify-between relative">
      <button
        onClick={handlePrev}
        className="absolute left-[-5%] top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-500 p-3 hover:bg-blue-400 hover:text-white transition-all ease-in-out duration-200 rounded-full focus:outline-none z-10"
      >
        <FaArrowLeftLong />
      </button>
      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          className={`flex items-center h-28 gap-8 w-full transition-transform duration-500 ease-in-out`}
          style={{
            transform: `translateX(-${currentIndex * (100 / slideCount)}%)`,
          }}
        >
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-none border h-full flex  border-gray-200 transition-all cursor-pointer hover:-translate-y-[0.15rem] ease-in-out duration-300 shadow-custom hover:border-blue-400 rounded-xl w-40 p-4"
            >
              <img
                src={logo}
                alt={`Company ${index + 1}`}
                className="mx-auto w-28"
              />
            </div>
          ))}
          {/* Duplicate slides for smooth looping effect */}
          {companyLogos.slice(0, slideCount).map((logo, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-none flex border h-full border-gray-200 transition-all cursor-pointer hover:-translate-y-[0.15rem] ease-in-out duration-300 hover:border-blue-400 rounded-xl w-40 p-4"
            >
              <img
                src={logo}
                alt={`Company duplicate ${index + 1}`}
                className="mx-auto w-28"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleNext}
        className="absolute right-[-5%] top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-500 p-3 hover:bg-blue-400 hover:text-white transition-all ease-in-out duration-200 rounded-full focus:outline-none z-10"
      >
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default PartnerSlider;
