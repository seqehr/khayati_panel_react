import { Link, useLocation } from 'react-router-dom'
import React, { useState } from 'react'

// Hooks

import useSidebar from '../../hooks/useSidebar'

// Components
import SidebarMobileBackdrop from './SidebarMobileBackdrop'
import SidebarMobileCloseButton from './SidebarMobileCloseButton'
import SidebarSubHeading from './SidebarSubHeading'
import SidebarOption from './SidebarOption'
import SidebarSeperatorLine from './SidebarSeperatorLine'
import SidebarOptionDropDown from './SidebarOptionDropDown'

// Icons
import {
  MdDashboard,
  MdOutlinePostAdd,
  MdOutlineProductionQuantityLimits,
} from 'react-icons/md'
import { FiMusic } from 'react-icons/fi'
import { MdHelpOutline } from 'react-icons/md'
import { AiOutlineSetting, AiOutlineBook } from 'react-icons/ai'
import { RiUserSettingsLine } from 'react-icons/ri'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { GoFileMedia } from 'react-icons/go'
import { BiTransfer } from 'react-icons/bi'
// CSS
import style from './Sidebar.module.scss'
const Sidebar = (props) => {
  const location = useLocation()

  const {
    sidebar,
    setSidebar,
    music,
    setMusic,
    members,
    setMembers,
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
  } = useSidebar()

  const listItem = [
    {
      title: 'کتاب ها',
      icon: <AiOutlineBook />,
      state: books,
      setState: () => {
        setBooks(!books)
      },
      subMenu: [
        {
          title: 'لیست کتاب ها',
          to: '/books',
        },
        {
          title: 'افزودن کتاب',
          to: '/book/add',
        },
      ],
    },
    {
      title: 'دوره ها',
      icon: <FaChalkboardTeacher />,
      state: courses,
      setState: () => {
        setCourses(!courses)
      },
      subMenu: [
        {
          title: 'لیست دوره ها',
          to: '/courses',
        },
        {
          title: 'افزودن دوره',
          to: '/course/add',
        },
      ],
    },
    {
      title: 'محصولات',
      icon: <MdOutlineProductionQuantityLimits />,
      state: products,
      setState: () => {
        setProducts(!products)
      },
      subMenu: [
        {
          title: 'لیست محصولات',
          to: '/products',
        },
        {
          title: 'افزودن محصول',
          to: '/product/add',
        },
      ],
    },
    {
      title: 'موزیک ها',
      icon: <FiMusic />,
      state: music,
      setState: () => {
        setMusic(!music)
      },
      subMenu: [
        {
          title: 'لیست موزیک ها',
          to: '/musics',
        },
        {
          title: 'افزودن موزیک',
          to: '/music/add',
        },
      ],
    },
    {
      title: 'کاربران',
      icon: <RiUserSettingsLine />,
      state: members,
      setState: () => {
        setMembers(!members)
      },
      subMenu: [
        {
          title: 'لیست  کاربران',
          to: '/members',
        },

        {
          title: ' افزودن حساب کاربری',
          to: '/member/add',
        },
      ],
    },
    {
      title: 'تراکنش ها',
      icon: <BiTransfer />,
      state: transactions,
      setState: () => {
        setTransactions(!transactions)
      },
      subMenu: [
        {
          title: 'لیست  تراکنش ها',
          to: '/transactions',
        },
      ],
    },
    {
      title: 'مقالات',
      icon: <MdOutlinePostAdd />,
      state: articles,
      setState: () => {
        setArticles(!articles)
      },
      subMenu: [
        {
          title: ' افزودن مقاله ',
          to: '/article/add',
        },
        {
          title: 'لیست  مقالات',
          to: '/articles',
        },
        {
          title: ' برچسب ها',
          to: '/tags',
        },
        {
          title: 'افزودن دسته بندی   ',
          to: '/article/category/add',
        },
      ],
    },
  ]
  const asideMobileDirectionClass = style.asideMobileRtl
  const asideMobileShowClass = style.asideMobileShowRtl

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
              to='/'
              icon={<MdDashboard />}
              title={`داشبورد`}
              active={location.pathname === '/'}
            />

            {listItem.map((item) => (
              <div>
                <SidebarOptionDropDown
                  icon={item.icon}
                  title={item.title}
                  active={item.state}
                  onClickF={() => item.setState()}
                />

                <div
                  style={{
                    height: item.state
                      ? `${item.subMenu.length * 50}px`
                      : '0px',
                  }}
                  className={`ease-in-out  duration-300 overflow-hidden`}
                >
                  {item.subMenu.map((subItem) => (
                    <div className='pt-5'>
                      <SidebarOption
                        to={subItem.to}
                        icon=' &nbsp; &nbsp;'
                        title={subItem.title}
                        active={location.pathname === subItem.to}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <SidebarSeperatorLine />
            <SidebarOption
              to='/notifiction'
              icon={<AiOutlineSetting />}
              title={` نوتفیکشن`}
              active={location.pathname === '/notifiction'}
            />
            <SidebarOption
              to='/settings'
              icon={<AiOutlineSetting />}
              title={`تنظیمات`}
              active={location.pathname === '/settings'}
            />
            <SidebarOption
              to='/uploads'
              icon={<GoFileMedia />}
              title={`اپلود سنتر`}
              active={location.pathname === '/uploads'}
            />
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
