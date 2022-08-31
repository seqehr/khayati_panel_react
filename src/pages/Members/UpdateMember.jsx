import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useParams, useNavigate } from 'react-router-dom'
//images
import userImage from '../../assets/images/user.png'
// date picker
import { Calendar } from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import DatePicker from 'react-multi-date-picker'

//hooks
import useToken from '../../hooks/useToken'
//services
import {
  AddMemberService,
  ProfileDetail,
  UpdteMember,
} from '../../services/MemberServices'

const UpdateMember = () => {
  const { id: singleId } = useParams()
  const navigate = useNavigate()

  const { token } = useToken()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [name, setName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [city, setCity] = useState('')
  const [gender, setGender] = useState('')
  const [address, setAddress] = useState('')

  const handleSubmit = () => {
    const data = {
      name: name,
      phone: phoneNumber,
      postal_code: postalCode,
      city,
      birthday: new Date(birthDate),
      gender,
      address,
      refer: 'مقدم جو',
    }
    if (
      name !== '' &&
      phoneNumber !== '' &&
      postalCode !== '' &&
      city !== '' &&
      birthDate !== '' &&
      gender !== '' &&
      address !== ''
    ) {
      UpdteMember(token, data, singleId).then((res) => {
        if (res.status == 200) {
          toast.success('حساب با موفقیت ویرایش شد')
        } else if (res.data.message == 'duplicate user') {
          toast.warn('کاربر با این شماره قبلا ثبت نام شده')
        }
      })
    } else {
      toast.warn(' مشخصات کاربر را کامل وارد کنید')
    }
  }
  useEffect(() => {
    ProfileDetail(token, singleId)
      .then((res) => {
        setPhoneNumber(res.data.data.phone)
        setName(res.data.data.name)
        setBirthDate(res.data.data.birthday)
        setPostalCode(res.data.data.postal_code)
        setCity(res.data.data.city)
        setGender(res.data.data.gender)
        setAddress(res.data.data.address)
      })
      .catch((ex) => {
        console.log(ex)
      })
  }, [])
  return (
    <div className='bg-white dark:bg-background2-dark p-10 shadow-md rounded-xl'>
      <form>
        <div className='relative grid grid-cols-12 xl:gap-6 gap-4'>
          {/* A V A T A R - T i t l e*/}

          <div className='col-span-12 flex justify-center items-center flex-col gap-3'>
            <p className='lg:absolute lg:right-0 lg:top-0 text-lg text-bitcoin-light animate-pulse font-bold cursor-default'>
              ویرایش کاربر
            </p>
            <img src={userImage} alt='' className='w-24 mb-10' />
          </div>
          {/* M E M B E R  - N A M E */}
          <div className='relative col-span-12 lg:col-span-4 z-0 w-full mb-6 group'>
            <input
              autoComplete='off'
              type='text'
              name='courseName'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-light appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
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
          <div className='relative col-span-12 lg:col-span-4 z-0 w-full mb-6 group'>
            <input
              autoComplete='off'
              type='number'
              name='excrept'
              id='excrept'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-light appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
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
          {/* M E M B E R  - P O S T A L  C O D E */}
          <div className='relative col-span-12 lg:col-span-4 z-0 w-full mb-6 group'>
            <input
              autoComplete='off'
              type='number'
              name='excrept'
              id='excrept'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-light appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required=''
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
            <label
              for='excrept'
              className={`  right-0
              peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
            >
              {` کد پستی`}
            </label>
          </div>
          {/* M E M B E R  - C I T Y */}
          <div className='relative col-span-12 lg:col-span-4 z-0 w-full mb-6 group'>
            <input
              autoComplete='off'
              type='text'
              name='excrept'
              id='excrept'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-light appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required=''
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <label
              for='excrept'
              className={`  right-0
              peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
            >
              {` شهر محل سکونت `}
            </label>
          </div>
          {/* M E M B E R  - A D D R E S S */}
          <div className='relative col-span-12 lg:col-span-8 z-0 w-full mb-6 group'>
            <input
              autoComplete='off'
              type='text'
              name='excrept'
              id='excrept'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-light appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required=''
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label
              for='excrept'
              className={`  right-0
              peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
            >
              {` ادرس دقیق `}
            </label>
          </div>
          {/* M E M B E R  - G E N D E R */}
          <div className='relative col-span-12 lg:col-span-4 z-0 w-full mb-6 group'>
            <input
              autoComplete='off'
              type='text'
              name='excrept'
              id='excrept'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-light appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required=''
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
            <label
              for='excrept'
              className={`  right-0
              peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
            >
              {` جنسیت `}
            </label>
          </div>
          {/*  birth date */}
          <div className=' relative  col-span-12 lg:col-span-4   z-20 w-full mb-6  group'>
            <DatePicker
              placeholder={`تاریخ تولد`}
              inputClass='block absolute lg:relative  w-full static placeholder:text-black dark:placeholder:text-white placeholder:font-medium text-sm py-2.5 px-3  text-sm text-gray-900 bg-transparent  border-gray-light appearance-none dark:text-white dark:border-gray-600 border-b-2  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              calendar={persian}
              locale={persian_fa}
              calendarPosition='bottom-right'
              onChange={setBirthDate}
              value={birthDate}
            />
          </div>
        </div>
        <button
          type='submit'
          onClick={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
          className='text-white mt-20 lg:mt-0 bg-blue-dark ring-2 ring-blue-light hover:bg-background-light hover:text-black dark:text-black dark:bg-white hover:ring-2 dark:ring-white dark:hover:bg-background-dark dark:hover:text-white ease-in-out duration-200  focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
        >
          {` ذخیره حساب `}
        </button>
        <button
          type='submit'
          onClick={(e) => {
            navigate('/members')
          }}
          className='text-white mt-20 lg:mt-0 bg-red-dark ring-2 mr-5 ring-red-light hover:bg-background-light hover:text-black dark:text-black dark:bg-white hover:ring-2 dark:ring-white dark:hover:bg-background-dark dark:hover:text-white ease-in-out duration-200  focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
        >
          {` انصراف `}
        </button>
      </form>
    </div>
  )
}

export default UpdateMember
