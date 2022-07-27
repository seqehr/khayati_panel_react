import React from 'react'
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
import useDashboard from '../../../hooks/useDashboard'

// css
import styles from './ContentStatistics.module.scss'
import { Link } from 'react-router-dom'
const ContentStatistics = () => {
  const { data, setData } = useDashboard()
  return (
    <div
      className={`bg-background2-light dark:bg-background2-dark rounded-2xl `}
    >
      {/* ————— W A T C H L I S T ————— */}
      <div className={`${styles.scrollC} overflow-x-auto `}>
        <div className='flex w-max my-3 '>
          {/* courses */}
          <div className='bg-background-light dark:bg-background-dark mx-4 p-3 rounded-lg dark:text-white '>
            <div className='flex'>
              <FaChalkboardTeacher className='text-6xl bg-background2-light dark:bg-background2-dark p-3 rounded-2xl text-gray-light ml-5' />
              <div className='items-center flex justify-center'>
                <p className='text-lg'>
                  {' '}
                  تعداد دوره ها :{' '}
                  <span className='drop-shadow-lg font-bold px-3 rounded-md  '>
                    {data.courses}
                  </span>{' '}
                </p>
              </div>
            </div>

            <div className='flex'>
              <Link
                to={'/courses'}
                className='hover:shadow-md ease-in-out duration-300 hover:bg-binance-dark dark:hover:bg-bitcoin-light p-2 w-max bg-bitcoin-light rounded-lg cursor-pointer mt-5 text-white dark:bg-bitcoin-dark'
              >
                {' '}
                نمایش دوره ها{' '}
              </Link>
              <Link
                to={'/course/add'}
                className='hover:shadow-md ease-in-out duration-300 hover:bg-binance-dark dark:hover:bg-bitcoin-light p-2 w-max mr-4 bg-bitcoin-light rounded-lg cursor-pointer mt-5 text-white dark:bg-bitcoin-dark'
              >
                {' '}
                ایجاد دوره جدید{' '}
              </Link>
            </div>
          </div>
          {/* posts */}
          <div className='bg-background-light dark:bg-background-dark mx-4 p-3 rounded-lg dark:text-white '>
            <div className='flex'>
              <MdOutlinePostAdd className='text-6xl bg-background2-light dark:bg-background2-dark p-3 rounded-2xl text-gray-light ml-5' />
              <div className='items-center flex justify-center'>
                <p className='text-lg'>
                  {' '}
                  تعداد مقاله ها :{' '}
                  <span className='drop-shadow-lg font-bold px-3 rounded-md  '>
                    {data.posts}
                  </span>{' '}
                </p>
              </div>
            </div>

            <div className='flex'>
              <Link
                to={'/articles'}
                className='hover:shadow-md ease-in-out duration-300 hover:bg-binance-dark dark:hover:bg-bitcoin-light p-2 w-max bg-bitcoin-light rounded-lg cursor-pointer mt-5 text-white dark:bg-bitcoin-dark'
              >
                {' '}
                نمایش مقاله ها{' '}
              </Link>
              <Link
                to={'/article/add'}
                className='hover:shadow-md ease-in-out duration-300 hover:bg-binance-dark dark:hover:bg-bitcoin-light p-2 w-max mr-4 bg-bitcoin-light rounded-lg cursor-pointer mt-5 text-white dark:bg-bitcoin-dark'
              >
                {' '}
                ایجاد مقاله جدید{' '}
              </Link>
            </div>
          </div>
          {/* products */}
          <div className='bg-background-light dark:bg-background-dark mx-4 p-3 rounded-lg dark:text-white '>
            <div className='flex'>
              <MdOutlinePostAdd className='text-6xl bg-background2-light dark:bg-background2-dark p-3 rounded-2xl text-gray-light ml-5' />
              <div className='items-center flex justify-center'>
                <p className='text-lg'>
                  {' '}
                  تعداد محصولات :{' '}
                  <span className='drop-shadow-lg font-bold px-3 rounded-md  '>
                    {data.products}
                  </span>{' '}
                </p>
              </div>
            </div>

            <div className='flex'>
              <Link
                to={'/products'}
                className='hover:shadow-md ease-in-out duration-300 hover:bg-binance-dark dark:hover:bg-bitcoin-light p-2 w-max bg-bitcoin-light rounded-lg cursor-pointer mt-5 text-white dark:bg-bitcoin-dark'
              >
                {' '}
                نمایش محصولات{' '}
              </Link>
              <Link
                to={'/product/add'}
                className='hover:shadow-md ease-in-out duration-300 hover:bg-binance-dark dark:hover:bg-bitcoin-light p-2 w-max mr-4 bg-bitcoin-light rounded-lg cursor-pointer mt-5 text-white dark:bg-bitcoin-dark'
              >
                {' '}
                ایجاد محصول جدید{' '}
              </Link>
            </div>
          </div>
          {/* musics */}
          <div className='bg-background-light dark:bg-background-dark mx-4 p-3 rounded-lg dark:text-white '>
            <div className='flex'>
              <FaChalkboardTeacher className='text-6xl bg-background2-light dark:bg-background2-dark p-3 rounded-2xl text-gray-light ml-5' />
              <div className='items-center flex justify-center'>
                <p className='text-lg'>
                  {' '}
                  تعداد موزیک ها :{' '}
                  <span className='drop-shadow-lg font-bold px-3 rounded-md  '>
                    {data.musics}
                  </span>{' '}
                </p>
              </div>
            </div>

            <div className='flex'>
              <Link
                to={'/musics'}
                className='hover:shadow-md ease-in-out duration-300 hover:bg-binance-dark dark:hover:bg-bitcoin-light p-2 w-max bg-bitcoin-light rounded-lg cursor-pointer mt-5 text-white dark:bg-bitcoin-dark'
              >
                {' '}
                نمایش موزیک ها{' '}
              </Link>
              <Link
                to={'/music/add'}
                className='hover:shadow-md ease-in-out duration-300 hover:bg-binance-dark dark:hover:bg-bitcoin-light p-2 w-max mr-4 bg-bitcoin-light rounded-lg cursor-pointer mt-5 text-white dark:bg-bitcoin-dark'
              >
                {' '}
                ایجاد موزیک جدید{' '}
              </Link>
            </div>
          </div>
          {/* books */}
          <div className='bg-background-light dark:bg-background-dark mx-4 p-3 rounded-lg dark:text-white '>
            <div className='flex'>
              <FaChalkboardTeacher className='text-6xl bg-background2-light dark:bg-background2-dark p-3 rounded-2xl text-gray-light ml-5' />
              <div className='items-center flex justify-center'>
                <p className='text-lg'>
                  {' '}
                  تعداد کتاب ها :{' '}
                  <span className='drop-shadow-lg font-bold px-3 rounded-md  '>
                    {data.books}
                  </span>{' '}
                </p>
              </div>
            </div>

            <div className='flex'>
              <Link
                to={'/books'}
                className='hover:shadow-md ease-in-out duration-300 hover:bg-binance-dark dark:hover:bg-bitcoin-light p-2 w-max bg-bitcoin-light rounded-lg cursor-pointer mt-5 text-white dark:bg-bitcoin-dark'
              >
                {' '}
                نمایش کتاب ها{' '}
              </Link>
              <Link
                to={'/book/add'}
                className='hover:shadow-md ease-in-out duration-300 hover:bg-binance-dark dark:hover:bg-bitcoin-light p-2 w-max mr-4 bg-bitcoin-light rounded-lg cursor-pointer mt-5 text-white dark:bg-bitcoin-dark'
              >
                {' '}
                ایجاد کتاب جدید{' '}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentStatistics
