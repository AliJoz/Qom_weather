import React from "react";
import { Link, useNavigate } from "react-router-dom";

const database: React.FC = () => {
  const navigate = useNavigate();
  const handleGoBack = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <>
      <div className="flex flex-col space-y-9 justify-center items-center mt-9">
        <img src="/img/404/not.png" alt="404" className="w-96 h-96" />
        <Link
          to="#"
          onClick={handleGoBack}
          className="text-center text-black font-iran-Dem tracking-tight hover:text-zinc-400"
        >
          اطلاعات در دیتا بیس نیست؟!!
        </Link>
      </div>
    </>
  );
};

export default database;
