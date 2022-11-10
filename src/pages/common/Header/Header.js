import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Header = () => {
  const { user, signout } = useContext(AuthContext);

  const handleSignout = () => {
    signout()
      .then(() => {
        toast.success("Signed out successfully");
      })
      .catch((err) => toast.error(`${err.message}`));
  };

  const menu = (
    <>
      {!user && (
        <>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </>
      )}
      {user && (
        <>
          <li className="cursor-pointer">
            <Link>My reviews</Link>
          </li>
          <li className="cursor-pointer">
            <Link>Add Service</Link>
          </li>
          <li onClick={handleSignout} className="cursor-pointer">
            <Link>Sign out</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Alex Photography
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menu}</ul>
      </div>
      <Toaster />
    </div>
  );
};

export default Header;
