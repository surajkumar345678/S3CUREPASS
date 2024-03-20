import React, { useRef, useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const ref = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const copyText = (text) => {
    toast(text + " copied to clipboard", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const savePassword = () => {
    if (!form.site || !form.username || !form.password) {
      toast.error("Please fill in all fields before saving the password", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
    );
    setform({ site: "", username: "", password: "" });
    toast.success("Password saved successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const editPassword = (id) => {
    console.log("editing password", id);
    setform(passwordArray.filter((i) => i.id === id)[0]);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const deletePassword = (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this password?"
    );
    if (confirmation) {
      const updatedPasswords = passwordArray.filter((item) => item.id !== id);
      setPasswordArray(updatedPasswords);
      localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
      toast.success("Password deleted successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      


      <div className="md:mycontainer p-3 min-h-${managerHeight}">
        <h1 className="text-4xl font-bold text-center flex items-center justify-center">
          <span className="text-[#00ed64]">S3CURE</span>
          <span className="text-white">PASS</span>
          <img src="/secureIcon.png" alt="secureIcon" className="w-12 mx-1" />
        </h1>
        <p className="text-white text-lg text-center">
          Your Own Password Manager
        </p>

        <div className="text-black flex flex-col p-4 gap-10 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            className="rounded-full border border-[#00ed64] w-full p-4 py-1"
            type="text"
            placeholder="Enter Website URL"
            name="site"
            id="site"
          />
          <div className="flex flex-col md:flex-row w-full justify-between gap-10">
            <input
              value={form.username}
              onChange={handleChange}
              className="rounded-full border border-[#00ed64] w-full p-4 py-1"
              type="text"
              placeholder="Enter Username"
              name="username"
              id="username"
            />
            <div className="relative">
              <input
                value={form.password}
                onChange={handleChange}
                className="rounded-full border border-[#00ed64] w-full p-4 py-1"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                name="password"
                id="password"
              />
              <span
                className="absolute right-[2px] top-[2px] cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <span ref={ref} className="material-symbols-outlined p-1">
                    visibility
                  </span>
                ) : (
                  <span ref={ref} className="material-symbols-outlined p-1">
                    visibility_off
                  </span>
                )}
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex justify-center items-center bg-[#00ed64] font-bold text-md rounded-full px-8 py-2 w-fit hover:bg-[#00a957] gap-2"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
        <div className="passwords">
          <h2 className="text-white font-bold text-2xl underline py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div className="text-white">No passwords to show</div>}
          {passwordArray.length !== 0 && (
            <table className="table-auto w-full overflow-hidden rounded-md mb-10">
              <thead className="bg-[#00684a] text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 text-center border border-white">
                      <div className="flex items-center justify-center">
                        <a href={item.site} target="_blank">
                          {item.site}
                        </a>
                        <span
                          className="copyBtn material-symbols-outlined cursor-pointer ml-2"
                          onClick={() => copyText(item.site)}
                        >
                          content_copy
                        </span>
                      </div>
                    </td>
                    <td className="py-2 text-center w-32 border border-white">
                      <div className="flex items-center justify-center">
                        <a href={item.username} target="_blank">
                          {item.username}
                        </a>
                        <span
                          className="copyBtn material-symbols-outlined cursor-pointer ml-2"
                          onClick={() => copyText(item.username)}
                        >
                          content_copy
                        </span>
                      </div>
                    </td>
                    <td className="py-2 text-center w-32 border border-white">
                      <div className="flex items-center justify-center">
                        <a href={item.password} target="_blank">
                          {"*".repeat(item.password.length)}
                        </a>
                        <span
                          className="copyBtn material-symbols-outlined cursor-pointer ml-2"
                          onClick={() => copyText(item.password)}
                        >
                          content_copy
                        </span>
                      </div>
                    </td>
                    <td className="py-2 text-center w-32 border border-white">
                      <span
                        class="cursor-pointer mx-2 material-symbols-outlined"
                        onClick={() => {
                          editPassword(item.id);
                        }}
                      >
                        border_color
                      </span>
                      <span
                        class="cursor-pointer mx-2 material-symbols-outlined"
                        onClick={() => {
                          deletePassword(item.id);
                        }}
                      >
                        delete
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
