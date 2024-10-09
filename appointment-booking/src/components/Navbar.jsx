import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center text-sm justify-between py-4 mb-5 border-b border-b-gray-400">
      <NavLink to={"/"}>
        <img className="w-44 cursor-pointer" src={assets.logo} alt="" />
      </NavLink>
      <ul className="hidden md:flex items-start gap-5 uppercase font-medium">
        <NavLink to={"/"}>
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/doctors"}>
          <li className="py-1">All Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"about"}>
          <li className="py-1">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"contact"}>
          <li className="py-1">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2  cursor-pointer group relative">
            <img src={assets.profile_pic} className="rounded-full w-8" alt="" />
            <img src={assets.dropdown_icon} className="w-2.5" alt="" />
            <div>
                <div>
                    <p>My Profile</p>
                    <p>My Appointments</p>
                    <p>Logout</p>
                </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary py-3 px-8 rounded-full text-white"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
