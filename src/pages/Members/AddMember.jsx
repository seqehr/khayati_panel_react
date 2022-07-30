import React, { useEffect, useState } from 'react'

import { toast } from 'react-toastify'
import { AddMemberService } from '../../services/MemberServices'

const AddMember = (props) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = () => {
    const data = {
      name: name,
      phone: phoneNumber,
    }
    AddMemberService(data).then((res) => {
      if (res.status == 200) {
        toast.success('حساب با موفقیت ایجاد شد')
      }
    })
  }

  return (
    <div className='bg-white dark:bg-background2-dark p-10 shadow-md rounded-xl'>
      <form>
        <div className='grid grid-cols-12 xl:gap-6'>
          {/* M E M B E R  - N A M E */}
          <div className='relative col-span-3 z-0 w-full mb-6 group'>
            <input
              type='text'
              name='courseName'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required=''
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label
              for='courseName'
              className={`  ${'right-0'}peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
            >
              {`نام کاربر `}
            </label>
          </div>
          {/* M E M B E R  - N U M B E R */}
          <div className='relative col-span-9 z-0 w-full mb-6 group'>
            <input
              type='text'
              name='excrept'
              id='excrept'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required=''
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <label
              for='excrept'
              className={`  right-0
              peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
            >
              {`شماره کاربر`}
            </label>
          </div>
        </div>
        <button
          type='submit'
          onClick={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
          className='text-white bg-blue-dark ring-2 ring-blue-light hover:bg-background-light hover:text-black dark:text-black dark:bg-white hover:ring-2 dark:ring-white dark:hover:bg-background-dark dark:hover:text-white ease-in-out duration-200  focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
        >
          {`ایجاد حساب `}
        </button>
      </form>
    </div>
  )
}

export default AddMember
