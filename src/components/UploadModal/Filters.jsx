import React, { useState } from 'react'
import framerConfig from '../../utils/framerConfig.json'
import { motion } from 'framer-motion'
//css
import styles from './UploadModal.module.scss'
// icons
import { BiSortDown } from 'react-icons/bi'
import { RiFindReplaceLine } from 'react-icons/ri'
import { BsSortDown, BsSortUp } from 'react-icons/bs'
//hooks
import useUpload from '../../hooks/useUpload'

const Filters = ({ setRefresh }) => {
  const {
    filter,
    setFilter,
    showDirFiles,
    setShowDirFiles,
    serchWord,
    setSerchWord,
    serchResult,
    setserchResult,
    serchHandler,
  } = useUpload()

  return (
    <div className='col-span-12  h-max pb-10'>
      {/* serch box*/}
      <div className=' col-span-12  lg:pl-5 mt-5 lg:mt-0  relative z-0 w-full mb-6 group'>
        <input
          type='text'
          name='Price'
          className='block pl-10 py-2.5 px-3 w-full relative text-sm text-gray-900 bg-transparent border-2 rounded-xl shadow-md  border-gray-light appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer '
          placeholder=' '
          required=''
          autoComplete='off'
          value={serchWord}
          onChange={(e) => {
            setSerchWord(e.target.value)
            serchHandler(e.target.value)
          }}
        />
        <button className='absolute left-4 lg:left-8 top-3'>
          <RiFindReplaceLine className='text-xl ' />
        </button>
        <label
          for='Price'
          className={` text-gray-light font-medium mr-1 bg-background2-light dark:bg-background2-dark peer-focus:font-medium absolute text-sm  dark:text-white  duration-300 transform -translate-y-6 top-3 right-0  origin-[0] peer-focus:text-gray-light  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 peer-focus:z-[999] px-2 rounded-lg peer-placeholder-shown:-z-10 z-30 peer-placeholder-shown:text-black dark:peer-placeholder-shown:text-white`}
        >
          {`نام فایل را جستجو کنید ... `}
        </label>
      </div>
      {/* time filter */}
      <div className=' flex gap-5 '>
        <p
          className='p-3  rounded-lg bg-background-light w-full lg:w-max  flex cursor-pointer hover:shadow-md ease-in-out duration-500'
          onClick={() => {
            filter == 'DateAs'
              ? setFilter('DateDes')
              : filter == 'DateDes'
              ? setFilter('DateAs')
              : setFilter('DateAs')
          }}
        >
          مرتب سازی بر اساس زمان
          {filter == 'DateAs' ? (
            <motion.div
              initial={{ scale: 1 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
              className='inline-block  '
            >
              {' '}
              <BsSortDown className='inline-block text-lg ' />
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
              className='inline-block  '
            >
              {' '}
              <BsSortUp className='inline-block text-lg ' />
            </motion.div>
          )}
        </p>
        <div className='justify-end  rounded-lg bg-background-light w-full lg:w-max  flex cursor-pointer hover:shadow-md ease-in-out duration-500'>
          <input
            class='switch'
            checked={!showDirFiles}
            onClick={() => setShowDirFiles(!showDirFiles)}
            type='checkbox'
            className={`${styles.switch} my-auto  mr-3`}
          />
          <p className='p-3'> نمایش فایل های تمام پوشه ها </p>
        </div>
      </div>
    </div>
  )
}

export default Filters
