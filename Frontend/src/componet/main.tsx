import React from "react";
import Left from "./main/left";
import Right from "./main/right";


const Main: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center pl-9 relative ">
        <div className="flex justify-between">
          <div className="relative">
            <h2 className="text-4xl font-bold pb-2">قم</h2>
            <p className="text-sm font-iran-Dem">میزان رطوبت: %0</p>
          </div>
          <div className="">
            {" "}
            <img
              src="/public/icons/animated/snowy-1.svg"
              alt="Sunny"
              className="w-44 h-40 
            "
            />
          </div>
        </div>

        <div className="absolute top-44">
          <div className="flex items-center">
            <span className="text-5xl font-bold ">31°</span>
          </div>
        </div>
      </div>
      <div className=" flex-1 lg:flex  justify-between p-6 bg-gray-800 text-white grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        <Left />
        <Right />
      </div>
      
    </>
  );
};

export default Main;
