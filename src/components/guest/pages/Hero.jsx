import React from "react";
import heroImage from "../../../assets/images/TVO.webp"; 
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        {/* Left Side */}
        <div className="space-y-6">
          <h1 className="text-[50px] sm:text-5xl font-bold text-gray-800 leading-tight">
            Be Who You Are <br /> Meant To Be
          </h1>
          <p className="text-gray-600 text-xl">
            Earn your OSSD or take any of the 140+ affordable and flexible
            classes through the online learning partner of the Rwanda Ministry
            of Education.
          </p>
          <div className="flex flex-wrap items-center space-x-4">
            <Link to="#" className="text-green-600 font-semibold hover:underline">
              Apply Now
            </Link>
            <span className="text-gray-400">|</span>
            <Link to="#" className="text-green-600 font-semibold hover:underline">
              Explore Courses
            </Link>
            <span className="text-gray-400">|</span>
            <Link to="#" className="text-green-600 font-semibold hover:underline">
              CAEC Testing
            </Link>
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
          <h1 className=" text-4xl text-[60px] font-bold text-center">144 courses equals unlimited opportunity</h1>
        </div>

        <div className=" mt-2">
          <p className="text-2xl text-center text-[20px] ">
            Founded as a not-for-profit with a mission to bring advanced learning to Ontarians, we make <br /> courses interactive and interesting so you can best reach your goals, whatever they may be.
          </p>
        </div>

        <div className="mt-2 flex justify-center gap-4">

          <input type="text" placeholder="Search for courses, codes, subject" className=" py-2 px-4 rounded-full w-1/2 border border-gray-300" />

          <button className=" bg-green-600 px-8 py-2 rounded-full text-white text-xl text-center">Search</button>

        </div>
      </div>
    </div>
  );
}

export default Hero;

