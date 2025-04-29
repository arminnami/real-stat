import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
//   console.log(currentUser.avatar);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <Link to="/">
          <h1 className=" font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Hengameh</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form
          action=""
          className="flex items-center rounded-lg bg-slate-100 p-2 "
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <nav>
          <ul className="flex gap-4">
            <Link to="/">
              <li className="text-slate-700 hover:underline cursor-pointer hidden sm:block">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="text-slate-700 hover:underline cursor-pointer hidden sm:block">
                About
              </li>
         </Link>
         <Link to="/profile"> 
         {currentUser ? (
            <img src={currentUser.avatar} alt="avatar" className="w-8 h-8 cursor-pointer" />
          ) : (

            <li className="text-slate-700 hover:underline cursor-pointer hidden sm:block">
                Sign In
            </li>
            )}
        </Link>

          </ul>
        </nav>
      </div>
    </header>
  );
}
