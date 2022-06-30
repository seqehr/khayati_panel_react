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
import { MdDashboard } from "react-icons/md";
import { FiMusic } from "react-icons/fi";
import { MdHelpOutline } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { RiUserSettingsLine } from "react-icons/ri";
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
    setCourses,
    transactions,
    setTransactions,
  } = useSidebar();
  const asideMobileDirectionClass = style.asideMobileLtr;
  const asideMobileShowClass = style.asideMobileShowLtr;

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
				${asideMobileDirectionClass}
				${sidebar && asideMobileShowClass}
				`}
      >
        {/* ————— C L O S E [Only on Mobile] ————— */}
        <SidebarMobileCloseButton onClickHandler={() => setSidebar(false)} />

        {/* ————— S I D E B A R ————— */}
        <div>
          <ul className="flex flex-col gap-7 xl:h-full">
            {/* Menu */}
            <SidebarSubHeading text={`منو`} />

            <SidebarOption
              to="/"
              icon={<MdDashboard />}
              title={`داشبورد`}
              active={location.pathname === "/"}
            />
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
                  to="/musiclist"
                  icon=" &nbsp; &nbsp;"
                  title={`لیست موزیک ها`}
                  active={location.pathname === "/musiclist"}
                />

                <SidebarOption
                  to="/addmusic"
                  icon=" &nbsp; &nbsp;"
                  title={`افزودن موزیک`}
                  active={location.pathname === "/addmusic"}
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
                  to="/memberslist"
                  icon=" &nbsp; &nbsp;"
                  title={`لیست کاربران`}
                  active={location.pathname === "/memberslist"}
                />

                <SidebarOption
                  to="/studentslist"
                  icon=" &nbsp; &nbsp;"
                  title={`لیست هنرجویان`}
                  active={location.pathname === "/studentslist"}
                />
              </>
            )}

            {/* News */}
            <SidebarOptionDropDown
              icon={<RiUserSettingsLine />}
              title={`اخبار`}
              active={news}
              onClickF={() => setNews(!news)}
            />
            {news && (
              <>
                <SidebarOption
                  to="/newslist"
                  icon=" &nbsp; &nbsp;"
                  title={`لیست اخبار`}
                  active={location.pathname === "/newslist"}
                />

                <SidebarOption
                  to="/addnews"
                  icon=" &nbsp; &nbsp;"
                  title={`افزودن خبر`}
                  active={location.pathname === "/addnews"}
                />
              </>
            )}

            {/* Courses */}
            <SidebarOptionDropDown
              icon={<RiUserSettingsLine />}
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
                  active={location.pathname === "/newslist"}
                />

                <SidebarOption
                  to="/course/add"
                  icon=" &nbsp; &nbsp;"
                  title={`افزودن دوره`}
                  active={location.pathname === "/addnews"}
                />
              </>
            )}

            {/* transactions */}
            <SidebarOptionDropDown
              icon={<RiUserSettingsLine />}
              title={`تراکنش ها`}
              active={transactions}
              onClickF={() => setTransactions(!transactions)}
            />
            {transactions && (
              <>
                <SidebarOption
                  to="/newslist"
                  icon=" &nbsp; &nbsp;"
                  title={`لیست تراکنش ها`}
                  active={location.pathname === "/newslist"}
                />
              </>
            )}

            {/* articles */}
            <SidebarOptionDropDown
              icon={<RiUserSettingsLine />}
              title={`مقالات`}
              active={articles}
              onClickF={() => setArticles(!articles)}
            />
            {articles && (
              <>
                <SidebarOption
                  to="/newslist"
                  icon=" &nbsp; &nbsp;"
                  title={`لیست مقالات`}
                  active={location.pathname === "/newslist"}
                />
                <SidebarOption
                  to="/newslist"
                  icon=" &nbsp; &nbsp;"
                  title={`افزودن`}
                  active={location.pathname === "/newslist"}
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
              to="/setting"
              icon={<AiOutlineSetting />}
              title={`تنظیمات`}
              active={location.pathname === "/setting"}
            />
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
