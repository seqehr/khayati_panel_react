import { useEffect, useState } from 'react'

// Libraries
import { AnimatePresence } from 'framer-motion'

// Hooks
import { ChekLoginUser } from '../../services/UserService'
import useSidebar from '../../hooks/useSidebar'
import useTheme from '../../hooks/useTheme'
import useToken from '../../hooks/useToken'
// Components

// Icons
import { BsFillLayersFill } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { FaSun } from 'react-icons/fa'
import { IoNotificationsOutline } from 'react-icons/io5'
import { VscThreeBars } from 'react-icons/vsc'
import { CgClose } from 'react-icons/cg'

// Images
import userPng from '../../assets/images/user.png'
import logo from '../../assets/images/logo.png'

// CSS
import style from './Header.module.scss'
import { toast } from 'react-toastify'

const Header = (props) => {
  const { token, setToken } = useToken()
  const { theme, toggleTheme } = useTheme()

  const { sidebar, toggleSidebar } = useSidebar()
  const [showProfileDetail, setShowProfileDetail] = useState(false)
  const [userNumber, setuserNumber] = useState('')
  useEffect(() => {
    // get uploaded files
    ChekLoginUser().then((res) => {
      setuserNumber(res.data.data)
    })
  }, [])
  return (
    <header
      className={`flex-center bg-white dark:bg-[#1B1B24] ${style.header}`}
    >
      <div className='wrapper'>
        <div className='flex'>
          {/* Sidebar Toggle */}
          <div className='flex-center xl:hidden'>
            <button
              className=''
              onClick={() => {
                toggleSidebar()
              }}
            >
              <i className='text-2xl md:text-3xl text-blue-light dark:text-blue-dark'>
                {sidebar ? <CgClose /> : <VscThreeBars id='profileClose' />}
              </i>
            </button>
          </div>

          {/* Logo */}
          <div
            className={`hidden xl:flex items-center gap-2 font-medium text-2xl ${style.headerLogoBox}`}
          >
            <i className='text-blue-light dark:text-blue-dark text-xl'>
              <img src={logo} alt='logo' className='w-20' />
            </i>
          </div>

          {/* Left side */}
          <div className={`flex items-center sm:gap-2 gap-3 ${'mr-auto'}`}>
            {/* Toggle Theme */}
            <div className={`flex-center`}>
              <button
                onClick={toggleTheme}
                className={`hover:bg-mouseover-light dark:hover:bg-mouseover-dark duration-300 sm:p-2 rounded-full`}
              >
                <i className='sm:text-2xl text-xl'>
                  {theme === 'light' ? (
                    <BsFillMoonStarsFill className='text-[#0c4a6e]' />
                  ) : (
                    <FaSun className='text-[#fbbf24]' />
                  )}
                </i>
              </button>
            </div>

            {/* Toggle Language */}
            <div className='flex-center'>
              <button
                className={`hover:bg-mouseover-light dark:hover:bg-mouseover-dark duration-300 sm:p-2 rounded-full`}
              ></button>
            </div>

            {/* Profile */}
            <div className='relative flex-center'>
              <div className='flex'>
                <img
                  onClick={() => {
                    setShowProfileDetail(!showProfileDetail)
                  }}
                  src={userPng}
                  alt='user'
                  className='sm:w-11 w-9 cursor-pointer'
                />
                <div
                  className={`${
                    showProfileDetail && 'w-24 sm:w-32'
                  } w-0 overflow-hidden max-h-[35px] sm:max-h-[45px] ease-in-out duration-300 `}
                >
                  <p className='text-gray-dark dark:text-gray-light text-xs sm:text-sm pr-3 cursor-default'>
                    0{userNumber}
                  </p>
                  <p
                    onClick={() => {
                      toast.warn(
                        <p dir='rtl'>
                          <span className='pl-2'>مجدد تایید کنید</span>
                          <span
                            onClick={() => {
                              window.localStorage.removeItem('Khayati-token')
                              setToken(false)
                            }}
                            className=' p-2 px-3  bg-bitcoin-light rounded-lg text-white hover:border-2 text-center ease-in-out duration-300'
                          >
                            خارج میشوم
                          </span>
                        </p>
                      )
                    }}
                    className='text-background-dark dark:text-white text-xs sm:text-sm pr-3 hover:text-black hover:font-bold ease-in-out duration-300 mt-1 cursor-pointer'
                  >
                    خروج از حساب
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
