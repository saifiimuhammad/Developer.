import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  handleDefaultTitle,
  documentTitleChangeHandler,
} from "../../utilities/utility.js";
import { fontColor, fontNav } from "../../constants/cssVariables.js";
import NavItem from "../shared/NavItem.jsx";

const Navbar = ({ navLinks }) => {
  const menuToggle = useRef(null);
  const menuClose = useRef(null);

  const location = useLocation();
  const hideNav = location.pathname.startsWith("/admin");

  const scrollHeader = () => {
    if (window.scrollY >= 50) {
      document.querySelector("#nav").classList.add("scroll-header-nav");
      document
        .querySelector(".nav-title-link")
        .classList.add("scroll-header-title");
    } else {
      document.querySelector("#nav").classList.remove("scroll-header-nav");
      document
        .querySelector(".nav-title-link")
        .classList.remove("scroll-header-title");
    }
  };

  // Navigation Toggle and Close functions
  const handleToggle = () => {
    document.querySelector(".nav-menu").classList.add("show-navigation");
  };
  const handleClose = () => {
    document.querySelector(".nav-menu").classList.remove("show-navigation");
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    menuToggle.current.addEventListener("click", handleToggle);
    menuClose.current.addEventListener("click", handleClose);

    document
      .querySelector(".scroll-top-link")
      .addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
  }, []);

  return (
    !hideNav && (
      <header className="header relative w-full">
        <nav
          id="nav"
          className="nav gap-y-8 px-4 md:px-[6rem] h-[60px] md:h-[120px] w-screen flex items-center justify-between bg-[#fff] fixed z-[999] transition duration-300 ease-in-out"
        >
          <h1 className="nav-title">
            <Link
              to="/"
              className="nav-title-link scroll-top-link"
              style={{
                color: fontColor,
              }}
              onClick={handleDefaultTitle}
            >
              Muhammad Saif
            </Link>
          </h1>
          <ul className="nav-menu md:static absolute top-[-600%] left-0 flex items-center justify-between flex-col md:flex-row w-full h-[280px] bg-[#fff] py-4 border-b border-[#c4c4c4] transition duration-500 ease-in-out gap-y-10 md:gap-x-10 md:w-max md:h-max">
            {navLinks.map((value, key) => {
              const { title, to } = value;
              return <NavItem key={key} title={title} to={to} />;
            })}
            <li className="nav-items list-none cursor-pointer">
              <Link
                to="/workwithme"
                className="nav-links btn relative w-[100px] h-[100px] uppercase font-medium"
                style={{
                  fontSize: fontNav,
                }}
                onClick={documentTitleChangeHandler}
              >
                Work with me
              </Link>
            </li>
            <i
              ref={menuClose}
              className="ri-close-circle-line menu-close text-[1.75rem] cursor-pointer mt-8 md:hidden"
            ></i>
          </ul>
          <i
            ref={menuToggle}
            className="ri-menu-line menu-toggle md:hidden text-[1.75rem] cursor-pointer"
          ></i>
        </nav>
      </header>
    )
  );
};

export default Navbar;
