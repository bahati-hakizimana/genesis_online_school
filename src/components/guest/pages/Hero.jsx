import React from "react";
import heroImage from "../../../assets/images/TVO.webp"; 

function Hero() {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        {/* Left Side */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
            Be Who You Are <br /> Meant To Be
          </h1>
          <p className="text-gray-600 text-lg">
            Earn your OSSD or take any of the 140+ affordable and flexible
            classes through the online learning partner of the Rwanda Ministry
            of Education.
          </p>
          <div className="flex flex-wrap items-center space-x-4">
            <a href="#" className="text-green-600 font-semibold hover:underline">
              Apply Now
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-green-600 font-semibold hover:underline">
              Explore Courses
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-green-600 font-semibold hover:underline">
              CAEC Testing
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Hero visual"
            className="w-full max-w-md md:max-w-lg xl:max-w-xl"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-10 items-center px-6">

        <div className="mt-4">
          <h1 className=" text-2xl font-bold text-center">144 courses equals unlimited opportunity</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;

