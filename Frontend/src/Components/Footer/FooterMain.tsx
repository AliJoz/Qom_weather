import React from "react";
import Footer from "./Footer";
import Quiz from "./FooterQuiz";

const MainFooter: React.FC = () => {
  return (
    <>
    
      <div
        className="flex flex-col h-screen  bg-neutral-200 relative  dark:bg-gray-800 w-[100%]"
        dir="rtl"
      >
        <div className="h-2/3 "> <Quiz /></div>
        <div className=" absolute top-15 mt-auto  lg:fixed h-1/3 bottom-28  w-full dark:text-neutral-100 "> <Footer />  </div>
       
       
      </div>
    </>
  );
};

export default MainFooter;
