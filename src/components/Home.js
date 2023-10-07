import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = ({ handleClick }) => {
  return (
    <div name="home" className="w-full h-screen bg-[#f2f2f3]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full bg-[#f2f2f3]">
        <p className="text-xl text-[#4a6d88] font-semibold">
          Hello!, my name is
        </p>
        <p className="text-4xl md:text-7xl font-bold text-[#001e38]">
          Sauel Almonte
        </p>
        <p className="text-4xl md:text-7xl font-bold text-[#4a6d88]">
          I'm a Software Developer.
        </p>
        <p className="text-[#001e38] py-4 max-w-[375px] text-base">
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
        <div className="flex w-44 items-center justify-between">
          <a
            className="p-2 rounded-full bg-[#090909] text-[#FFFFFF]"
            href="https://github.com/SauelAlmonte"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
          </a>
          <a
            className="p-2 rounded-full bg-[#136CC4] text-[#FFFFFF]"
            href="https://www.linkedin.com/in/sauel-almonte/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            className="p-2 rounded-full bg-[#303030] text-[#FFFFFF]"
            href="https://twitter.com/TheCodinCoder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={20} />
          </a>
          <a className="p-2 rounded-full bg-[#136CC4] text-[#FFFFFF]" href="/">
            <BsFillPersonLinesFill size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
