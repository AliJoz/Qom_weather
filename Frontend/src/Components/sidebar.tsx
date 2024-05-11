import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="flex flex-col items-center bg-neutral-100/90 border-slate-500  text-zinc-900 dark:bg-slate-600 dark:text-white w-20 h-full py-6">
        {/* Logo */}
        <div className="mb-6">
          <Link
            to="/"
            className=" w-16 h-16 flex items-center justify-center rounded-full"
          >
            <img src="/icons/Qweather/Qw.png" alt="Q icons" className="bg-p" />
          </Link>
        </div>
        {/* Menu Items */}
        <div className="flex flex-col space-y-6 font-yekan">
          <Link to="/" className="flex flex-col items-center">
            <img
              src="/icons/animated/cloudy-day-1.svg"
              alt="Weather"
              className="w-8 h-8"
            />
            <span className="text-xs mt-2">آب وهوا</span>
          </Link>
          <Link to="/region" className="flex flex-col items-center">
            <svg className="w-6 h-6">
              <use href="#citys"></use>
            </svg>
            <span className="text-xs mt-2">ناحیه ها</span>
          </Link>
          <Link to="/map" className="flex flex-col items-center">
            <svg className="w-6 h-6">
              <use href="#map"></use>
            </svg>
            <span className="text-xs mt-2">نقشه</span>
          </Link>
          <Link to="/setting" className="flex flex-col items-center">
            <svg className="w-6 h-6">
              <use href="#setting"></use>
            </svg>
            <span className="text-xs mt-2 text-center">
              پرسش و ارتباط با ما
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
