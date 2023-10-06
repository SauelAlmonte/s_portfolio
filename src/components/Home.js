import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = ({ handleClick }) => {
  return (
    <div name="home" className="w-full h-screen bg-[#4a6d88]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full bg-[#4a6d88]">
        <p className="text-xl text-[#d5d9e0]">Hello!, my name is</p>
        <p className="text-4xl md:text-7xl font-bold text-[#001e38]">
          Sauel Almonte
        </p>
        <p className="text-4xl md:text-7xl font-bold text-[#001e38]">
          I'm a Software Developer.
        </p>
        <p className="text-[#d5d9e0] py-4 max-w-[375px]">
          I’m a <span className="font-bold">Software Developer</span>{" "}
          specializing in building (and occasionally designing) exceptional
          digital experiences.
        </p>
        <div>
          <Link
            onClick={handleClick}
            activeClass="active"
            to="work"
            smooth={true}
            duration={500}
          >
            <button className="group border-2 border-[#010c1e] text-[#d5d9e0] px-6 py-3 my-2 flex items-center bg-[#001e38] font-semibold hover:bg-gray-600 hover:text-white hover:font-bold">
              View Work{" "}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
        {/* Social Icons */}
        <div className="">
          <ul className="flex ml-[-10px]">
            <li className="">
              <a
                className="flex justify-between items-center w-full text-[#d5d9e0]"
                href="/"
              >
                <FaLinkedinIn size={22.5} />
              </a>
            </li>
            <li className="l">
              <a
                className="flex justify-between items-center w-full text-[#d5d9e0]"
                href="/"
              >
                <FaGithub size={22.5} />
              </a>
            </li>
            <li className="">
              <a
                className="flex justify-between items-center w-full text-[#d5d9e0]"
                href="/"
              >
                <HiOutlineMail size={22.5} />
              </a>
            </li>
            <li className="">
              <a
                className="flex justify-between items-center w-full text-[#d5d9e0]"
                href="/"
              >
                <BsFillPersonLinesFill size={22.5} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
