import { Link, useLocation } from "react-router-dom";
import React from "react";

// Hooks

import useSidebar from "../../hooks/useSidebar";

// Components
import SidebarMobileBackdrop from "./SidebarMobileBackdrop";
import SidebarMobileCloseButton from "./SidebarMobileCloseButton";
import SidebarSubHeading from "./SidebarSubHeading";
import SidebarOption from "./SidebarOption";
import SidebarSeperatorLine from "./SidebarSeperatorLine";
import SidebarOptionDropDown from "./SidebarOptionDropDown";
// Icons
import {
  MdDashboard,
  MdOutlinePostAdd,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { FiMusic } from "react-icons/fi";
import { MdHelpOutline } from "react-icons/md";
import { AiOutlineSetting, AiOutlineBook } from "react-icons/ai";
import { RiUserSettingsLine } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GoFileMedia } from "react-icons/go";
import { BiTransfer } from "react-icons/bi";
// CSS
import style from "./Sidebar.module.scss";
const Sidebar = (props) => {
  const location = useLocation();

  const {
    sidebar,
    setSidebar,
    music,
    setMusic,
    members,
    setMembers,
    news,
    setNews,
    articles,
    setArticles,
    courses,
    books,
    setBooks,
    setCourses,
    transactions,
    setTransactions,
    products,
    setProducts,
  } = useSidebar();
  const asideMobileDirectionClass = style.asideMobileRtl;
  const asideMobileShowClass = style.asideMobileShowRtl;

  return (
    <>
      {/* ————— B A C K D R O P ————— */}
      {sidebar && <SidebarMobileBackdrop onClickF={() => setSidebar(false)} />}

      {/* ————— A S I D E ————— */}
      <aside
        className={`py-6
				bg-background2-light
				dark:bg-background2-dark
         rounded-tl-xl rounded-bl-xl
				${style.aside}
        ${style.scrollStyle} 
				${asideMobileDirectionClass}
				${sidebar && asideMobileShowClass}
				`}
      >
        {/* ————— C L O S E [Only on Mobile] ————— */}
        <SidebarMobileCloseButton onClickHandler={() => setSidebar(false)} />

        {/* ————— S I D E B A R ————— */}
        <div>
          <ul className={`${style.scrollStyle} flex flex-col gap-7 xl:h-full`}>
            {/* Menu */}
            <SidebarSubHeading text={`منو`} />

            <SidebarOption
              to="/"
              icon={<MdDashboard />}
              title={`داشبورد`}
              active={location.pathname === "/"}
            />

            {/* Courses */}
            <SidebarOptionDropDown
              icon={<FaChalkboardTeacher />}
              title={`دوره ها`}
              active={courses}
              onClickF={() => setCourses(!courses)}
            />
            {courses && (
              <>
                <SidebarOption
                  to="/courses"
                  icon=" &nbsp; &nbsp;"
                  title={`لیست دوره ها`}
                  active={location.pathname === "/courses"}
                />

                <SidebarOption
                  to="/course/add"
                  icon=" &nbsp; &nbsp;"
                  title={`افزودن دوره`}
                  active={location.pathname === "/course/add"}
                />
              </>
            )}

            {/* Products */}
            <SidebarOptionDropDown
              icon={<MdOutlineProductionQuantityLimits />}
              title={` محصولات`}
              active={products}
              onClickF={() => setProducts(!products)}
            />
            {products && (
              <>
                <SidebarOption
                  to="/products"
                  icon=" &nbsp; &nbsp;"
                  title={` لیست محصولات`}
                  active={location.pathname === "/products"}
                />

                <SidebarOption
                  to="/product/add"
                  icon=" &nbsp; &nbsp;"
                  title={`افزودن محصول`}
                  active={location.pathname === "/product/add"}
                />
              </>
            )}
            {/* Music */}
            <SidebarOptionDropDown
              icon={<FiMusic />}
              title={` موزیک ها`}
              active={music}
              onClickF={() => setMusic(!music)}
            />
            {music && (
              <>
                <SidebarOption
                  to="/musics"
                  icon=" &nbsp; &nbsp;"
                  title={`لیست موزیک ها`}
                  active={location.pathname === "/musics"}
                />

                <SidebarOption
                  to="/music/add"
                  icon=" &nbsp; &nbsp;"
                  title={`افزودن موزیک`}
                  active={location.pathname === "/music/add"}
                />
              </>
            )}

            {/* Books */}
            <SidebarOptionDropDown
              icon={<AiOutlineBook />}
              title={` کتاب ها`}
              active={books}
              onClickF={() => setBooks(!books)}
            />
            {books && (
              <>
                <SidebarOption
                  to="/books"
                  icon=" &nbsp; &nbsp;"
                  title={`لیست کتاب ها`}
                  active={location.pathname === "/books"}
                />

                <SidebarOption
                  to="/book/add"
                  icon=" &nbsp; &nbsp;"
                  title={`افزودن کتاب`}
                  active={location.pathname === "/book/add"}
                />
              </>
            )}
            {/* members */}
            <SidebarOptionDropDown
              icon={<RiUserSettingsLine />}
              title={`کاربران`}
              active={members}
              onClickF={() => setMembers(!members)}
            />
            {members && (
              <>
                <SidebarOption
                  to="/members"
                  icon=" &nbsp; &nbsp;"
                  title={`لیست کاربران`}
                  active={location.pathname === "/members"}
                />

                <SidebarOption
                  to="/students"
                  icon=" &nbsp; &nbsp;"
                  title={`لیست هنرجویان`}
                  active={location.pathname === "/students"}
                />
              </>
            )}

            {/* transactions */}
            <SidebarOptionDropDown
              icon={<BiTransfer />}
              title={`تراکنش ها`}
              active={transactions}
              onClickF={() => setTransactions(!transactions)}
            />
            {transactions && (
              <>
                <SidebarOption
                  to="/transactions"
                  icon=" &nbsp; &nbsp;"
                  title={`لیست تراکنش ها`}
                  active={location.pathname === "/transactions"}
                />
              </>
            )}

            {/* articles */}
            <SidebarOptionDropDown
              icon={<MdOutlinePostAdd />}
              title={`مقالات`}
              active={articles}
              onClickF={() => setArticles(!articles)}
            />
            {articles && (
              <>
                <SidebarOption
                  to="/articles"
                  icon=" &nbsp; &nbsp;"
                  title={`لیست مقالات`}
                  active={location.pathname === "/articles"}
                />
                <SidebarOption
                  to="/article/add"
                  icon=" &nbsp; &nbsp;"
                  title={`افزودن مقاله`}
                  active={location.pathname === "/article/add"}
                />
              </>
            )}

            <SidebarSeperatorLine />
            <SidebarOption
              to="/help"
              icon={<MdHelpOutline />}
              title={`راهنمای  پنل کاربری`}
              active={location.pathname === "/help"}
            />
            <SidebarOption
              to="/settings"
              icon={<AiOutlineSetting />}
              title={`تنظیمات`}
              active={location.pathname === "/settings"}
            />
            <SidebarOption
              to="/uploads"
              icon={<GoFileMedia />}
              title={`اپلود ویدیو`}
              active={location.pathname === "/uploads"}
            />
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
