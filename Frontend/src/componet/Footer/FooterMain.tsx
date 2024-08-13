import React from "react";
import Footer from "./Footer";
import Quiz from "./FooterQuiz";



const MainFooter: React.FC = () => {
  return (
    <>
     <div className="bg-gray-800 h-screen overflow-auto" dir="rtl">
        <Quiz />
        <Footer />
      </div>
    </>
  );
};

export default MainFooter;

