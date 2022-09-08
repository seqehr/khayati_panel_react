import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'

//images
import defaultImage from '../../assets/images/UF_Infinity_khayati.gif'

// css
import 'react-loading-skeleton/dist/skeleton.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import style from './Settings.module.scss'

//icons
import { BsPlusCircleDotted } from 'react-icons/bs'
import { BsDashCircleDotted } from 'react-icons/bs'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from 'persian-build-ckeditor5-nowinflow/build/ckeditor'
//components
import Skeleton from 'react-loading-skeleton'
import TableRow from './TableRow'
//hooks
import useSettings from '../../hooks/useSettings'
import UploadModal from '../../components/UploadModal/UploadModal'
import { toast } from 'react-toastify'

const Settings = () => {
  const {
    imagesSlider,
    loading,
    files,
    uploadModal,
    setUploadModal,
    url,
    setUrl,
    name,
    setName,
    link,
    setLink,
    siteTitle,
    setSiteTitle,
    siteDes,
    setSiteDes,
    siteKeywords,
    setSiteKeywords,
    deleteImageHandler,
    submitChangesHandler,
    handleCreateImage,
    settings,
    aboute,
    setAboute,
    contact,
    setContact,
  } = useSettings()

  // modal states
  const [isOpenImageModal, setIsOpenImageModal] = useState(false)

  // get modal files
  const getModalImage = (file) => {
    toast.success('با موفقیت انتخاب شد')
    setUrl(file)
  }
  return (
    <>
      {/* set description and keywords */}
      <div className='bg-white dark:bg-background2-dark p-10 shadow-md rounded-xl container mb-10'>
        <form>
          <div className='grid grid-cols-12 xl:gap-6 gap-4'>
            {/* site title */}
            <div className='relative col-span-12 lg:col-span-3 z-0 w-full mb-6 group'>
              <input
                autoComplete='off'
                onChange={(e) => setSiteTitle(e.target.value)}
                value={siteTitle}
                type='text'
                name='excrept'
                id='excrept'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required=''
              />
              <label
                className={`  right-0
              peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
              >
                {`عنوان سایت `}
              </label>
            </div>
            {/* site biography */}
            <div className='relative col-span-12 lg:col-span-9 z-0 w-full mb-6 group'>
              <input
                autoComplete='off'
                onChange={(e) => setSiteDes(e.target.value)}
                value={siteDes}
                type='text'
                name='excrept'
                id='excrept'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required=''
              />
              <label
                className={`  right-0
              peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
              >
                {`توضیحات سایت `}
              </label>
            </div>
            {/* keywords */}
            <div className='relative col-span-12  z-0 w-full mb-6 group'>
              <input
                autoComplete='off'
                onChange={(e) => setSiteKeywords(e.target.value)}
                value={siteKeywords}
                type='text'
                name='courseName'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                required=''
              />
              <label
                className={`  ${'right-0'}peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
              >
                {`  کلمات کلیدی (کلمات با کاما ,  از هم جدا شود)`}
              </label>
            </div>
            {/*  aboute */}

            <div className='relative col-span-12 lg:col-span-6  w-full mb-6 group'>
              <p className='mb-3'>متن درباره ی ما :</p>
              <CKEditor
                editor={ClassicEditor}
                className={`text-right right-0`}
                data={aboute}
                // this will we change  =>  {data} has html

                onChange={(event, editor) => {
                  const data = editor.getData()
                  setAboute(data)
                }}
              />
            </div>
            {/*  contact */}
            <div className='relative col-span-12 lg:col-span-6 z-0 w-full mb-6 group'>
              <p className='mb-3'>متن ارتباط با ما :</p>
              <CKEditor
                editor={ClassicEditor}
                className={`text-right right-0`}
                data={contact}
                // this will we change  =>  {data} has html

                onChange={(event, editor) => {
                  const data = editor.getData()
                  setContact(data)
                }}
              />
            </div>
            {/* submit btn */}
            <button
              onClick={(e) => {
                e.preventDefault()
                submitChangesHandler()
              }}
              type='submit'
              className='text-white h-max col-span-3 bg-blue-dark ring-2 ring-blue-light hover:bg-background-light hover:text-black dark:text-black dark:bg-white hover:ring-2 dark:ring-white dark:hover:bg-background-dark dark:hover:text-white ease-in-out duration-200  focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
            >
              {`ثبت تغییرات `}
            </button>
          </div>
        </form>
      </div>
      {/* set slider images  */}
      <div className='bg-white dark:bg-background2-dark p-10 shadow-md rounded-xl container'>
        <form>
          <div className='grid grid-cols-12 xl:gap-6 gap-4'>
            <div className=' grid grid-cols-12 col-span-12 h-10 gap-4'>
              <input
                autoComplete='off'
                onChange={(e) => setName(e.target.value)}
                value={name}
                type='text'
                name='lessonLink'
                id='lessonLink'
                className='block py-2.5 px-2  sm:col-span-3 col-span-12  text-sm dark:bg-background2-dark dark:placeholder:text-white border-2 rounded-md border-gray-light placeholder:text-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' نام تصویر جدید را وارد کنید'
                required=''
              />
              <input
                autoComplete='off'
                onChange={(e) => setLink(e.target.value)}
                value={link}
                type='text'
                name='lessonLink'
                id='lessonLink'
                className='block py-2.5 px-2  sm:col-span-3 col-span-12  text-sm dark:bg-background2-dark dark:placeholder:text-white border-2 rounded-md border-gray-light placeholder:text-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' لینک تصویر را وارد کنید'
                required=''
              />
              <input
                autoComplete='off'
                onClick={() => setIsOpenImageModal(true)}
                value={url !== '' ? 'انتخاب شد!' : ''}
                type='text'
                name='lessonLink'
                id='lessonLink'
                className='block py-2.5 px-2  sm:col-span-3 col-span-12  text-sm dark:bg-background2-dark dark:placeholder:text-white border-2 rounded-md border-gray-light placeholder:text-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder='  تصویر را انتخاب کنید'
                required=''
              />
              <button
                onClick={(e) => {
                  e.preventDefault()
                  handleCreateImage()
                }}
                className='text-white items-center flex justify-center sm:col-span-3 col-span-12  text-xs md:text-sm md:mr-3 bg-blue-dark ring-2 ring-blue-light hover:bg-background-light hover:text-black dark:text-black dark:bg-white hover:ring-2 dark:ring-white dark:hover:bg-background-dark dark:hover:text-white ease-in-out duration-200  focus:outline-none  font-medium rounded-lg   px-5 py-1 text-center '
              >
                <span className='flex '>
                  <span className='text-xl ml-2'>
                    <BsPlusCircleDotted />
                  </span>
                  افزودن تصویر
                </span>
              </button>
            </div>
            {/* Slider setting*/}
            <div
              dir='rtl'
              className='relative col-span-12 z-0  mb-6 group grid gap-7 grid-cols-12'
            >
              {imagesSlider.map((i) => (
                <div className='col-span-4 flex flex-col'>
                  <img src={i.img} title={i.name} className='rounded-t-3xl' />
                  <span className='text-right block w-full p-2 bg-background-light break-all'>
                    ادرس عکس : {i.url}
                  </span>
                  <p
                    onClick={() => deleteImageHandler(i.id)}
                    className='rounded-b-3xl w-full p-2 shadow-lg drop-shadow-lg cursor-pointer bg-bitcoin-light text-center text-white'
                  >
                    حذف عکس
                  </p>
                </div>
              ))}
            </div>
          </div>
        </form>
        {/* Upload Modal*/}

        {isOpenImageModal && (
          <UploadModal
            getImage={getModalImage}
            setIsOpenModal={setIsOpenImageModal}
          />
        )}
      </div>
    </>
  )
}

export default Settings
