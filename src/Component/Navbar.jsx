import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {



  return (
    <div className="navbar bg-base-100 shadow-sm px-2 sm:px-5 md:px-15">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
          <li >
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/apps'>Apps</NavLink>
          </li>
          <li>
            <NavLink to='/install'>Installation</NavLink>
          </li>
          </ul>
        </div>
        <Link to="/">
          <div className="flex items-center justfy-center">
            <img className="h-[40px] w-[40px]" src={logo} alt="" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] bg-clip-text text-transparent">
              
              HERO.IO
            </h1>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li >
            <NavLink to='/'>Home</NavLink>
          </li>
          <li >
            <NavLink to='/apps'>Apps</NavLink>
          </li>
          <li >
            <NavLink to='/install'>Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        
        <a href='https://github.com/AYAS-MAHMUD' className="btn bg-gradient-to-r hover:bg-gradient-to-r hover:from-[#9F62F2]  hover:to-[#632EE3] text-white from-[#632EE3]  to-[#9F62F2]"><FaGithub className="text-xl"/> Contribute</a>
      </div>
    </div>
  );
};

export default Navbar;
