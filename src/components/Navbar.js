import React, { useState } from "react";
import {Link} from "react-scroll"
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo2.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-20 flex justify-between items-center p-6 text-gray-300 bg-white">
      <div className="z-10 flex items-center">
        <img className="w-32 " src={Logo} alt="Logo" />
      </div>

      {/* Menu Start */}
      <ul className="hidden md:flex">
        <li>
          <Link activeClass="active" to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Menu Ends */}

      {/* Burger */}
      <div
        onClick={handleClick}
        className="md:hidden text-gray-800 text-lg z-10"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-gray-100"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-40 h-16 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-r-xl">
            <a
              className="flex justify-between items-center w-full text-gray-100"
              href="/"
            >
              LinkedIn <FaLinkedinIn size={30} />
            </a>
          </li>
          <li className="w-40 h-16 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600 rounded-r-xl">
            <a
              className="flex justify-between items-center w-full text-gray-100"
              href="/"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-40 h-16 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-emerald-400 rounded-r-xl">
            <a
              className="flex justify-between items-center w-full text-gray-100"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-40 h-16 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-400 rounded-r-xl">
            <a
              className="flex justify-between items-center w-full text-gray-100"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
