import React, { useEffect, useState } from 'react'
import { Line } from 'rc-progress'
import { toast } from 'react-toastify'
import * as shamsi from 'shamsi-date-converter'
// css
import styles from './TableRow.module.scss'
//icons
import { BsDashCircleDotted } from 'react-icons/bs'
import { ImUsers } from 'react-icons/im'
import { HiUsers } from 'react-icons/hi'
//hooks
import useToken from '../../hooks/useToken'

const UserModal = ({ close, fullDetails }) => {
  const { token } = useToken()

  // format dates
  const dateShamsi = shamsi.gregorianToJalali(fullDetails.birthday)
  const createdAtShamsi = shamsi.gregorianToJalali(fullDetails.created_at)

  return (
    <div
      className={`${styles.myLink} py-10 overflow-hidden overflow-y-auto    sm:w-screen  h-screen bg-[#212121b4] fixed top-0 left-0 z-[99] `}
    >
      <div className='md:w-max m-auto px-5  grid grid-cols-12'>
        {/* Close Modal*/}
        <div className=' md:top-0 col-span-12  grid grid-cols-12'>
          <div
            onClick={() => close(false)}
            className={`${styles.rotation}  text-red-light dark:text-white   font-bold cursor-pointer 2xl:col-span-2  md:col-span-4  col-span-12 justify-center items-center flex bg-background2-light dark:bg-background2-dark rounded-lg p-2 py-2 mb-4`}
          >
            <BsDashCircleDotted
              className={`${styles.rotationTarget} text-2xl ml-3 ease-in-out duration-300`}
            />
            <p className='ease-in-out duration-300 textBordered'> بستن پنجره</p>
          </div>
        </div>
        {/* Ccontent*/}
        <div
          id='topModal'
          className=' md:top-14  h-max   col-span-12 bg-background2-light dark:bg-background2-dark rounded-lg p-4'
        >
          <div className='grid grid-cols-12 container gap-3 '>
            {/* avatar */}
            <div className='md:col-span-4 col-span-12 w-full'>
              <img
                src={fullDetails.avatar}
                className='md:w-72 w-full mb-5 m-auto rounded-md drop-shadow-dm shadow-md'
              />
            </div>
            {/* details */}
            <div className='md:col-span-8 text-right  w-full  col-span-12 md:pr-5'>
              <div className=''>
                <p className='my-2 rounded-lg p-3 bg-background-light'>
                  نام کامل : {`${fullDetails.name}`}
                </p>
                <p className='my-2 rounded-lg p-3 bg-background-light'>
                  تاریخ تولد :{' '}
                  {`${dateShamsi[0]}/${dateShamsi[1]}/${dateShamsi[2]} `}
                </p>
                <p className='my-2 rounded-lg p-3 bg-background-light'>
                  شهر : {`${fullDetails.city}`}
                </p>
                <p className='my-2 rounded-lg p-3 bg-background-light'>
                  ادرس دقیق : {`${fullDetails.address} `}
                </p>{' '}
                <p className='my-2 rounded-lg p-3 bg-background-light'>
                  تاریخ ثبت نام :{' '}
                  {`${createdAtShamsi[0]}/${createdAtShamsi[1]}/${createdAtShamsi[2]} `}
                </p>{' '}
              </div>
            </div>
            <div className='col-span-12 text-right  w-full'>
              <div className=''>
                <p className='my-2 rounded-lg p-3 bg-background-light'>
                  سمت و عنوان کاربر : {`${fullDetails.role}`}
                </p>
                <p className='my-2 rounded-lg p-3 bg-background-light'>
                  نحوه آشنایی : {`${fullDetails.refer} `}
                </p>{' '}
                <p className='my-2 rounded-lg p-3 bg-background-light'>
                  کد پستی :{`${fullDetails.postal_code}`}
                </p>{' '}
                <p className='my-2 rounded-lg p-3 bg-background-light'>
                  جنسیت : {`${fullDetails.gender} `}
                </p>{' '}
                <p className='my-2 rounded-lg p-3 bg-background-light'>
                  شماره تلفن : {`${fullDetails.phone} `}
                </p>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserModal
