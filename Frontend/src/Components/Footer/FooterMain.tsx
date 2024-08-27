import React from "react";
import Footer from "./Footer";
import Quiz from "./FooterQuiz";

const MainFooter: React.FC = () => {
  return (
    <>
    
      <div
        className="hover:scrollbar-thumb-sky-500 scrollbar scrollbar-thumb-neutral-50 scrollbar-track-zinc-900 bg-gray-800 h-screen overflow-auto w-[100%]"
        dir="rtl"
      >
        <Quiz />
        <Footer />
      </div>
    </>
  );
};

export default MainFooter;
