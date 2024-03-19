import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col justify-center items-center fixed bottom-0 w-full">
      <div className="logo font-bold text-2xl flex flex-row items-center">
          <span className="text-[#89c04a]">S3CURE</span>
          <span className="">PASS </span>
          <img
            src="/secureIcon.png"
            alt="secureIcon"
            className="w-7 mx-1"
          />
        </div>
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
