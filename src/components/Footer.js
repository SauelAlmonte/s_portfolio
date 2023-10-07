import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#001e38] p-2">
      <p className="text-[#d5d9e0] text-sm">
        A.M.P.L LLC &copy;{" "}
        <time className="ml-1" datetime="2023">
          2023
        </time>
      </p>
    </footer>
  );
};

export default Footer;
