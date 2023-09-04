import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-lg">Hello!, my name is</p>
        <p className="text-4xl md:text-7xl font-bold text-gray-800">
          Sauel Almonte
        </p>
        <p className="text-4xl md:text-7xl font-bold text-gray-500">
          I'm a Software Developer.
        </p>
        <p className="text-gray-800 py-4 max-w-[375px]">
          I’m a <span className="font-bold">Software Developer</span>{" "}
          specializing in building (and occasionally designing) exceptional
          digital experiences.
        </p>
        <div>
          <button className="group border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-600 hover:text-white hover:font-bold">
            View Work{" "}
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
