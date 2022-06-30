import { useState } from "react";

// Libraries
import { AnimatePresence } from "framer-motion";

// Hooks

import useSidebar from "../../hooks/useSidebar";
import useTheme from "../../hooks/useTheme";

// Components

// Icons
import { BsFillLayersFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";
import { CgClose } from "react-icons/cg";

// Images
import userPng from "../../assets/images/user.png";

// CSS
import style from "./Header.module.scss";

const Header = (props) => {
  const { theme, toggleTheme } = useTheme();

  const { sidebar, toggleSidebar } = useSidebar();

  return (
    <header
      className={`flex-center bg-white dark:bg-[#1B1B24] ${style.header}`}
    >
      <div className="wrapper">
        <div className="flex">
          {/* Sidebar Toggle */}
          <div className="flex-center xl:hidden">
            <button
              className=""
              onClick={() => {
                toggleSidebar();
              }}
            >
              <i className="text-2xl md:text-3xl text-blue-light dark:text-blue-dark">
                {sidebar ? <CgClose /> : <VscThreeBars id="profileClose" />}
              </i>
            </button>
          </div>

          {/* Logo */}
          <div
            className={`hidden xl:flex items-center gap-2 font-medium text-2xl ${style.headerLogoBox}`}
          >
            <i className="text-blue-light dark:text-blue-dark text-xl">
              <BsFillLayersFill />
            </i>
            <h2 className="text-black dark:text-white font-medium">{`logo`}</h2>
          </div>

          {/* Left side */}
          <div className={`flex items-center sm:gap-2 gap-3 ${"mr-auto"}`}>
            {/* Toggle Theme */}
            <div className={`flex-center`}>
              <button
                onClick={toggleTheme}
                className={`hover:bg-mouseover-light dark:hover:bg-mouseover-dark duration-300 sm:p-2 rounded-full`}
              >
                <i className="sm:text-2xl text-xl">
                  {theme === "light" ? (
                    <BsFillMoonStarsFill className="text-[#0c4a6e]" />
                  ) : (
                    <FaSun className="text-[#fbbf24]" />
                  )}
                </i>
              </button>
            </div>

            {/* Toggle Language */}
            <div className="flex-center">
              <button
                className={`hover:bg-mouseover-light dark:hover:bg-mouseover-dark duration-300 sm:p-2 rounded-full`}
              ></button>
            </div>

            {/* Notifications */}
            <div className="flex-center">
              <button className="hover:bg-mouseover-light dark:hover:bg-mouseover-dark duration-300 sm:p-2 rounded-full">
                <i className="sm:text-3xl text-2xl text-gray-light dark:text-gray-dark">
                  <IoNotificationsOutline />
                </i>
              </button>
            </div>

            {/* Profile */}
            <div className="relative flex-center">
              <button onClick={() => {}}>
                <img src={userPng} alt="user" className="sm:w-10 w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
