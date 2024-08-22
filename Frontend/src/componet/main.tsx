import React from "react";
import Left from "./main/left";
import Right from "./main/right";
import Show from "./main/Show/Showtoday";

const Main: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center pl-9 relative ">
        <Show />
      </div>
      <div className=" flex-1 lg:flex  justify-between p-6 bg-gray-800 text-white grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        <div>
          <Left />
        </div>
        <div className="mr-20">
        
          <Right />
        </div>
      </div>
    </>
  );
};

export default Main;
