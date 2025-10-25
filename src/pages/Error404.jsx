import React from "react";
import errorIcon from "../assets/PageNotFound.gif";
import { IoHome } from "react-icons/io5";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate, Link } from "react-router"; 

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-2 text-center">
      <title>Error page | 404</title>
      <img className="w-60" src={errorIcon} alt="Page Not Found" />

      <div className="mt-10 flex items-center">
        {/* Go Back Button */}
        <button
          onClick={() => {
            if (window.history.length > 1) navigate(-1);
            else navigate("/", { replace: true });
          }}
          className="btn w-38 rounded-tl-full rounded-bl-full flex items-center gap-2 hover:text-white hover:bg-primary"
        >
          <HiArrowLongLeft  size={20} />
          Go Back
        </button>

        {/* Home Button */}
        <Link
          to="/"
          className="btn w-38 rounded-tr-full rounded-br-full flex items-center gap-2  hover:text-white hover:bg-primary"
        >
          <IoHome size={20} />
          Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
