import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icons from "./Icons";
const Sidebar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Hamburger Button for small screens */}
      {!isSidebarOpen && (
        <button
          className="md:hidden fixed top-5  right-5 z-0 p-2 rounded-md bg-neutral-400 dark:bg-gray-50 text-white"
          onClick={toggleSidebar}
        >
          {/* Icon for Hamburger Menu */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-neutral-600 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      )}

      <div className="h-full w-20 z-0">
        <Icons />
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0 md:relative rounded-e-2xl fixed top-0 right-0 flex flex-col items-center  bg-neutral-100/90 border-l border-slate-500 text-zinc-900 dark:bg-slate-600 dark:text-white w-40 md:w-20 h-full py-6 transition-transform duration-300 ease-in-out z-10`}
        >
          {/* Close button for small screens */}
          <button
            className="md:hidden absolute top-5 left-5 z-20 p-2 rounded-xl   bg-neutral-400 dark:bg-gray-50 text-white dark:text-neutral-600 "
            onClick={toggleSidebar}
          >
            {/* Icon for Close Menu */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex justify-between flex-col ">
            {/* Logo */}
            <div className="mb-6 pr-7 md:pr-2 pt-11 ">
              <Link
                to="/"
                className=" w-16 h-16 flex items-center justify-center rounded-full"
              >
                <img
                  src="/icons/Qweather/Qw.png"
                  alt="Q icons"
                  className="w-36 h-16"
                />
              </Link>
            </div>
            {/* Menu Items */}
            <div className="flex flex-col space-y-8  font-yekan tracking-tight">
              <Link to="/" className="flex flex-col items-center">
                <img
                  src="/icons/animated/cloudy-day-1.svg"
                  alt="Weather"
                  className="w-12 h-12"
                />
                <span className="text-sm font-semibold dark:font-extralight md:text-xs mt-2 ">آب و هوا</span>
              </Link>

              <Link to="/region" className="flex flex-col items-center">
                <svg className="w-8 h-8 text-zinc-700 dark:text-indigo-300">
                  <use href="#citys"></use>
                </svg>
                <span className="text-sm font-semibold dark:font-extralight md:text-xs mt-2">ناحیه ها</span>
              </Link>

              {/* Map with Dropdown */}
              <div
                className="relative flex flex-col items-center"
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                <Link to="/map/Temp" className="flex flex-col items-center">
                  <svg className="w-8 h-8 text-zinc-700 dark:text-indigo-300">
                    <use href="#map"></use>
                  </svg>
                  <span className="text-sm font-semibold md:text-xs dark:font-extralight mt-2 ">نقشه</span>
                </Link>
                {isDropdownOpen && (
                  <div className="absolute top-3 right-16 mt-2 w-32 bg-neutral-200 dark:bg-gray-800 shadow-lg rounded-lg z-10">
                    <ul className="py-2">
                      <li>
                        <Link
                          to="/map/Temp"
                          className="block px-4 py-2 hover:bg-yellow-100 hover:text-zinc-800 hover:font-semibold transition-all  dark:hover:font-bold  dark:hover:bg-blue-100 text-sm"
                        >
                          دما
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/map/speed"
                          className="block px-4 py-2 hover:bg-yellow-100 hover:text-zinc-800 hover:font-semibold transition-all dark:hover:font-bold  dark:hover:bg-blue-100 text-sm"
                        >
                          سرعت باد
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <Link to="/setting" className="flex flex-col items-center">
                <svg className="w-8 h-8 text-zinc-700 dark:text-indigo-300">
                  <use href="#setting"></use>
                </svg>
                <span className="text-sm md:text-xs font-semibold  dark:font-extralight mt-2 text-center text-wrap indent-4 pl-2 ">
                  پرسش               ارتباط با ما
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
