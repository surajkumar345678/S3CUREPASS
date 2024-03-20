import React from "react";

const Navbar = () => {
  return (
    <nav className=" bg-[#001e2b] text-white ">
      <div className="mycontainer flex items-center px-4 py-5 justify-between">
        <div className="logo font-bold text-2xl flex flex-row items-center">
          <span className="text-[#00ed64]">S3CURE</span>
          <span className="">PASS </span>
          <img
            src="/secureIcon.png"
            alt="secureIcon"
            className="w-7 mx-1"
          />
        </div>
        {/* <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold" href="/">
              Home
            </a>
            <a className="hover:font-bold" href="/">
              About
            </a>
            <a className="hover:font-bold" href="/">
              Contact
            </a>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
