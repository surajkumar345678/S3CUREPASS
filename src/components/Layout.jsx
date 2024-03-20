// Layout.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [managerHeight, setManagerHeight] = useState("75vh"); // Default value

  useEffect(() => {
    const handleResize = () => {
      setNavbarHeight(document.getElementById("navbar").clientHeight);
      setFooterHeight(document.getElementById("footer").clientHeight);
    };

    // Update heights on initial load and window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Calculate manager height based on window height, navbar height, and footer height
    const windowHeight = window.innerHeight;
    const newManagerHeight = windowHeight - navbarHeight - footerHeight;
    setManagerHeight(`${newManagerHeight}px`);
  }, [navbarHeight, footerHeight]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow bg-gradient-to-t from-gray-900 to-gray-600">
        {React.cloneElement(children, { managerHeight })}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
