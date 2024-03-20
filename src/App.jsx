import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div class="bg-gradient-to-t from-gray-900 to-gray-600">
        <Manager />

      </div>


      <Footer />
    </>
  );
}

export default App;
