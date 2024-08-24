import React from "react";
import { Link } from "react-router-dom";

function FeatureCards() {
  const regionThree = "منطقه سه"; // مقدار منطقه سه
  const regionFive = "منطقه پنج"; // مقدار منطقه پنج

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-dark-blue p-4 space-y-8">
      {/* Card 1: Permanent Support */}
      <div className="card flex-1 max-w-md w-full bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105">
        <div className="card-header flex justify-center items-center space-x-2 pb-12">
          <div className="card-icon bg-yellow-500 p-3 rounded-full shadow-lg w-16 h-16">
            {/* SVG Icon for Support */}
            <img
              src="/British columbia.png"
              alt=""
              className="w-16 h-14 pb-3 flex justify-center"
            />
          </div>
          <h3 className="card-title text-2xl font-bold text-center">
            منطقه سه
          </h3>
        </div>
        <div className="flex justify-center mt-8">
          <Link to={`/region/${regionThree}`}>
            <button className="bg-yellow-500 hover:bg-zinc-100 hover:text-zinc-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              کلیک کن
            </button>
          </Link>
        </div>
      </div>

      {/* Card 2: Complete Content Guarantee */}
      <div className="card flex-1 max-w-md w-full bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-110">
        <div className="card-header flex justify-center items-center space-x-2 pb-12">
          <div className="card-icon bg-blue-500 p-3 rounded-full shadow-lg w-16 h-16">
            {/* SVG Icon for Content Guarantee */}
            <img
              src="/British columbia.png"
              alt=""
              className="w-16 h-14 pb-3 flex justify-center"
            />
          </div>
          <h3 className="card-title text-2xl font-bold text-center">
            منطقه پنج
          </h3>
        </div>
        <div className="flex justify-center mt-8">
          <Link to={`/region/${regionFive}`}>
            <button className="bg-blue-500 hover:bg-zinc-100 hover:text-zinc-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              کلیک کن
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeatureCards;
