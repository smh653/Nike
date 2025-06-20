import React from "react";
import headerLogo from "../../assets/images/header-logo.svg";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="px-8 py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="flex items-center ml-14">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 ">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="fonts-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src="../../assets/icons/hamburger.svg"
            alt="Hamburger"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
