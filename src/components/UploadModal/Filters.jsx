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
  const { filter, setFilter } = useUpload()
  return (
    <div className='col-span-12 '>
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
            type='checkbox'
            checked
            className={`${styles.switch} my-auto  mr-3`}
          />
          <p className='p-3'> نمایش تمام فایل ها</p>
        </div>
      </div>
    </div>
  )
}

export default Filters
