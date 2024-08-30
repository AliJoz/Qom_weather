import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

function FeatureCards() {
  const regionThree = "منطقه سه"; // مقدار منطقه سه
  const regionEight = "منطقه هشت"; // مقدار منطقه هشت
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-neutral-300 border-slate-500   dark:bg-gray-800 p-4 space-y-8 relative ">
      {/* Card 1: Permanent Support */}
      <div
          className="absolute left-1 top-5 "
          onClick={toggleDarkMode}
        >
          {/* Dynamically render the correct icon based on isDarkMode */}
          <svg className="ml-3 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12   text-salte-300 dark:text-neutral-200">
            <use href={isDarkMode ? "#Sun" : "#Moon"}></use>
          </svg>
        </div>
      <div className="card flex-1 max-w-md w-full bg-gradient-to-r dark:from-gray-800  dark:to-gray-900 from-neutral-400  to-neutral-300   p-6 rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-110">
        <div className="card-header flex justify-center items-center  space-x-2 pb-12 ">
          <div className="card-icon bg-yellow-500 p-3 rounded-full shadow-lg w-16 h-16 ">
            {/* SVG Icon for Support */}
            <img
              src="/British columbia.png"
              alt=""
              className="w-16 h-14 pb-3  flex justify-center"
            />
          </div>
          <h3 className="card-title text-zinc-700 dark:text-neutral-100 text-base md:text-xl lg:text-2xl sm:font-bold text-center pr-3 ">
            منطقه سه
          </h3>
        </div>
        <div className="flex justify-center mt-8">
          <Link to={`/region/${regionThree}`}>
            <button className="bg-yellow-500 hover:bg-zinc-100 hover:text-zinc-800 dark:hover:bg-orange-300 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              کلیک کن
            </button>
          </Link>
        </div>
      </div>

      {/* Card 2: Complete Content Guarantee */}
      <div className="card flex-1 max-w-md w-full  bg-gradient-to-r dark:from-gray-800  dark:to-gray-900 from-neutral-400  to-neutral-300  p-6 rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-110">
        <div className="card-header flex justify-center items-center space-x-2 pb-12">
          <div className="card-icon bg-blue-500 p-3 rounded-full shadow-lg w-16 h-16">
            {/* SVG Icon for Content Guarantee */}
            <img
              src="/British columbia.png"
              alt=""
              className="w-16 h-14 pb-3 flex justify-center"
            />
          </div>
          <h3 className="card-title text-zinc-700 dark:text-neutral-100  text-base md:text-xl lg:text-2xl sm:font-bold text-center pr-3">
            منطقه هشت
          </h3>
        </div>
        <div className="flex justify-center mt-8">
          <Link to={`/region/${regionEight}`}>
            <button className="bg-blue-500 hover:bg-zinc-100 dark:hover:bg-orange-300 hover:text-zinc-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              کلیک کن
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeatureCards;
