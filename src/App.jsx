// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow bg-gradient-to-t from-gray-900 to-gray-600">
        <Manager />
      </div>
      <Footer />
    </div>
  );
}

export default App;
