import React from "react";
import { FaBars } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import navbarLogo from "../../images/home/Navbar/Logo.png";
export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center px-3 w-full min-h-[60px] bg-[#333333b1]" id="nav">
        <div className="menu-bar text-white text-[40px]">
          <FaBars />
        </div>
        <div className="logo-branding relative w-56 min-h-[60px] flex justify-center">
          <img
            src={navbarLogo}
            alt="navbar logo"
            className="absolute top-5 w-44"
          />
        </div>
        <div className="phone-number  text-white text-[25px] pr-5">
          <a href="tel:+998911054305">
            <BsFillTelephoneFill />
          </a>
        </div>
      </nav>
    </>
  );
}
