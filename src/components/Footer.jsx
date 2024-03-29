import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#001e2b] text-white flex flex-col justify-center items-center w-full">
      {/* Logo Section */}
      <div className="logo font-bold text-2xl flex flex-row items-center">
        <span className="text-[#00ed64]">S3CURE</span>
        <span className="">PASS </span>
        <img src="/secureIcon.png" alt="secureIcon" className="w-7 mx-1" />
      </div>

      {/* Attribution Section */}
      <div className="flex">
        Made with <span className="text-red-500 px-1">&hearts;</span>
        by
        <span className="px-1">
          <a href="https://github.com/surajkumar345678"> surajkumar345678 </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
