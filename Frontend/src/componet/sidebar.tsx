import React from "react";
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="flex flex-col items-center bg-slate-600 text-white w-20 h-full py-6">
        {/* Logo */}
        <div className="mb-6">
          <Link to="/" className="bg-slate-400 w-12 h-12 flex items-center justify-center rounded-xl">
            <svg className="w-6 h-6">
              <use href="#wind"></use>
            </svg>
          </Link>
        </div>
        {/* Menu Items */}
        <div className="flex flex-col space-y-6 font-yekan">
          
          <div className="flex flex-col items-center">
          <Link to="/" className="flex flex-col items-center">
            <img
              src="/public/icons/animated/cloudy-day-1.svg"
              alt="Weather"
              className="w-8 h-8"
            />
            <span className="text-xs mt-2">آب وهوا</span>
            </Link>
          </div>
          <div className="flex flex-col items-center">
          <Link to="/Region" className="flex flex-col items-center">
            <svg className="w-6 h-6">
              <use href="#citys"></use>
            </svg>
            <span className="text-xs mt-2">ناحیه ها</span>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/map" className="flex flex-col items-center">
            <svg className="w-6 h-6">
              <use href="#map"></use>
            </svg>
            <span className="text-xs mt-2">نقشه</span>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/setting" className="flex flex-col items-center">
              <svg className="w-6 h-6">
                <use href="#setting"></use>
              </svg>
              <span className="text-xs mt-2 text-center">پرسش و ارتباط با ما</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
