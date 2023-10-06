import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="text-gray-700 w-full h-screen bg-[#001e38]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#d5d9e0] py-1.5 text-[#d5d9e0]">
            Skills
          </p>
          <p className="pt-8 text-[#d5d9e0]">
            These are the technologies I've worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-sm shadow-gray-500 rounded-lg hover:scale-105 duration-500 cursor-pointer py-3 bg-[#d5d9e0]">
            <img className="w-20 mx-auto" src={HTML} alt="HTML" />
            <p className="my-3">HTML</p>
          </div>
          <div className="shadow-sm shadow-gray-500 bg-[#d5d9e0] rounded-lg hover:scale-105 duration-500 cursor-pointer py-3">
            <img className="w-20 mx-auto" src={CSS} alt="CSS" />
            <p className="my-3">CSS</p>
          </div>
          <div className="shadow-sm shadow-gray-500 bg-[#d5d9e0] rounded-lg hover:scale-105 duration-500 cursor-pointer py-3">
            <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript" />
            <p className="my-3">JavaScript</p>
          </div>
          <div className="shadow-sm shadow-gray-500 bg-[#d5d9e0] rounded-lg hover:scale-105 duration-500 cursor-pointer py-3">
            <img className="w-20 mx-auto" src={Tailwind} alt="TailwindCSS" />
            <p className="my-3">TailwindCSS</p>
          </div>
          <div className="shadow-sm shadow-gray-500 bg-[#d5d9e0] rounded-lg hover:scale-105 duration-500 cursor-pointer py-3">
            <img className="w-20 mx-auto" src={ReactImg} alt="ReactJS" />
            <p className="my-3">ReactJS</p>
          </div>
          <div className="shadow-sm shadow-gray-500 bg-[#d5d9e0] rounded-lg hover:scale-105 duration-500 cursor-pointer py-3">
            <img
              className="w-20 mx-auto"
              color="black"
              src={GitHub}
              alt="GitHub"
            />
            <p className="my-3">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
