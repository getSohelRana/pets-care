import React, { use } from "react";
import { Link, NavLink } from "react-router";
import siteLogo from "../../assets/logo.png";
import userIcon from "../../assets/user.png";
import { AuthContext } from "../../provider/AuthProvider";
const Navbar = () => {
  const { user } = use(AuthContext);
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink className="my-2 lg:my-0 lg:mx-6" to="/services">
        Services
      </NavLink>
      <NavLink to="/profile">My Profile</NavLink>
    </>
  );
  return (
    <nav className="bg-base-200">
      <div className="navbar container mx-auto lg:px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-200  rounded-box z-999 mt-3 w-52 p-2 shadow text-primary"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <img
              className="w-15 h-15 object-cover "
              src={siteLogo}
              alt="site_logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl uppercase text-primary">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          {/* user icon hover */}
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button">
              <img
                className="w-10 h-10 object-cover"
                src={userIcon}
                alt="user_icon"
              />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <p>{user && user.email}</p>
            </ul>
          </div>
          <Link
            to="/auth/signup"
            className=" btn px-5 shadow-none bg-primary hover:bg-base-100 rounded-3xl animate__animated animate__pulse animate__delay-2s animate__infinite	infinite"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
