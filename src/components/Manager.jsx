import React, { useRef, useState } from "react";

const Manager = () => {
  const [showPassword, setShowPassword] = useState(false);
  const ref = useRef();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <div className="mycontainer">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-800">S3CURE</span>
          <span className="">PASS</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your Own Password Manager
        </p>

        <div className="text-black flex flex-col p-4 gap-10 items-center">
          <input
            className="rounded-full border border-green-500 w-full p-4 py-1"
            type="text"
            placeholder="Enter Website URL"
          />
          <div className="flex w-full justify-between gap-10">
            <input
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
              placeholder="Enter Username"
            />
            <div className="relative">
              <input
                className="rounded-full border border-green-500 w-full p-4 py-1"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
              />
              <span
                className="absolute right-[2px] top-[2px] cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <span ref={ref} className="material-symbols-outlined p-1">
                    visibility_off
                  </span>
                ) : (
                  <span ref={ref} className="material-symbols-outlined p-1">
                    visibility
                  </span>
                )}
              </span>
            </div>
          </div>

          <button className="flex justify-center items-center bg-green-500 rounded-full px-8 py-2 w-fit hover:bg-green-400 gap-2 border border-green-900">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Manager;
