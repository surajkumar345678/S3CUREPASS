import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  // State variables to store heights
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [managerHeight, setManagerHeight] = useState("75vh"); // Default value

  // Effect to calculate navbar and footer heights
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

  // Effect to calculate manager height based on navbar and footer heights
  useEffect(() => {
    const windowHeight = window.innerHeight;
    const newManagerHeight = windowHeight - navbarHeight - footerHeight;
    setManagerHeight(`${newManagerHeight}px`);
  }, [navbarHeight, footerHeight]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content area */}
      <div className="flex-grow bg-gradient-to-t from-gray-900 to-gray-600">
        {/* Children components */}
        {React.cloneElement(children, { managerHeight })}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
