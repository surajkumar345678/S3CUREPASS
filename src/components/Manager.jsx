import React, { useRef, useState, useEffect } from "react";

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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <div className="mycontainer">
        <h1 className="text-4xl font-bold text-center flex items-center justify-center">
          <span className="text-[#89c04a]">S3CURE</span>
          <span className="">PASS</span>
          <img
            src="/public/secureIcon.png"
            alt="secureIcon"
            className="w-12 mx-1"
          />
        </h1>
        <p className="text-black text-lg text-center">
          Your Own Password Manager
        </p>

        <div className="text-black flex flex-col p-4 gap-10 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            className="rounded-full border border-[#89c04a] w-full p-4 py-1"
            type="text"
            placeholder="Enter Website URL"
            name="site"
          />
          <div className="flex w-full justify-between gap-10">
            <input
              value={form.username}
              onChange={handleChange}
              className="rounded-full border border-[#89c04a] w-full p-4 py-1"
              type="text"
              placeholder="Enter Username"
              name="username"
            />
            <div className="relative">
              <input
                value={form.password}
                onChange={handleChange}
                className="rounded-full border border-[#89c04a] w-full p-4 py-1"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                name="password"
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
            className="flex justify-center items-center bg-green-500 rounded-full px-8 py-2 w-fit hover:bg-green-400 gap-2 border border-green-900"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div>No passwords to show</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full overflow-hidden rounded-md">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-2 text-center w-32 border border-white">
                        <a href={item.site} target="_blank">
                          {item.site}
                        </a>
                      </td>
                      <td className="py-2 text-center w-32 border border-white">
                        {item.username}
                      </td>
                      <td className="py-2 text-center w-32 border border-white">
                        {item.password}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
