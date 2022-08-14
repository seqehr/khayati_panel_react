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
//components
import Skeleton from 'react-loading-skeleton'
import TableRow from './TableRow'
//hooks
import useSettings from '../../hooks/useSettings'

const Settings = () => {
  const {
    imagesSlider,
    setImagesSlider,
    loading,
    setLoading,
    files,
    setFiles,
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
  } = useSettings()
  return (
    <>
      {/* set description and keywords */}
      <div className='bg-white dark:bg-background2-dark p-10 shadow-md rounded-xl container mb-10'>
        <form>
          <div className='grid grid-cols-12 xl:gap-6 gap-4'>
            {/* site title */}
            <div className='relative col-span-12 lg:col-span-3 z-0 w-full mb-6 group'>
              <input
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
            {/* Slider setting*/}
            <div className='relative col-span-12 lg:mx-52 z-0  mb-6 group'>
              <Slider {...settings}>
                {loading ? (
                  <>
                    <div className='h-52'>
                      <Skeleton className='h-full' />
                    </div>
                    <div className='h-10 mt-3'>
                      <Skeleton className='h-full' />
                    </div>
                  </>
                ) : imagesSlider.length !== 0 ? (
                  imagesSlider.map((item) => (
                    <div className=' flex flex-row'>
                      <img
                        src={item.img}
                        alt={item.name}
                        className='  rounded-t-md w-full'
                      />

                      <button
                        onClick={(e) => {
                          e.preventDefault()
                        }}
                        className='text-white items-center -mt-10 drop-shadow-md  mb-5  z-[9999] m-auto  text-sm flex justify-center  text-center '
                      >
                        <span
                          onClick={() => deleteImageHandler(item.id)}
                          className='flex  bg-bitcoin-light ring-2 ring-bitcoin-light hover:bg-background-light hover:text-black ease-in-out duration-200  focus:outline-none  font-medium rounded-lg   px-5 py-1 '
                        >
                          <span className='text-xl ml-2'>
                            {' '}
                            <BsDashCircleDotted className='mr-3' />{' '}
                          </span>
                          حذف این عکس از اسلایدر
                        </span>
                      </button>
                    </div>
                  ))
                ) : (
                  <div className=' flex flex-row justify-center items-center text-center'>
                    <img
                      src={defaultImage}
                      alt={'default'}
                      className='  rounded-t-md w-96 mx-auto'
                    />
                    <p className='-mt-10 text-bitcoin-dark animate-pulse'>
                      عکس های اسلایدر خالی است
                    </p>
                  </div>
                )}
              </Slider>
            </div>

            <div className=' grid grid-cols-12 col-span-12 h-10 gap-4'>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type='text'
                autoComplete='off'
                name='lessonLink'
                id='lessonLink'
                className='block py-2.5 px-2  sm:col-span-3 col-span-12  text-sm dark:bg-background2-dark dark:placeholder:text-white border-2 rounded-md border-gray-light placeholder:text-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' نام تصویر جدید را وارد کنید'
                required=''
              />
              <input
                onChange={(e) => setLink(e.target.value)}
                value={link}
                type='text'
                autoComplete='off'
                name='lessonLink'
                id='lessonLink'
                className='block py-2.5 px-2  sm:col-span-3 col-span-12  text-sm dark:bg-background2-dark dark:placeholder:text-white border-2 rounded-md border-gray-light placeholder:text-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' لینک تصویر را وارد کنید'
                required=''
              />
              <input
                onClick={() => setUploadModal(1)}
                value={url !== '' ? 'انتخاب شد!' : ''}
                type='text'
                autoComplete='off'
                name='lessonLink'
                id='lessonLink'
                className='block py-2.5 px-2  sm:col-span-3 col-span-12  text-sm dark:bg-background2-dark dark:placeholder:text-white border-2 rounded-md border-gray-light placeholder:text-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder='  تصویر را انتخاب کنید'
                required=''
              />
              <button
                onClick={(e) => {
                  e.preventDefault()
                }}
                className='text-white items-center flex justify-center sm:col-span-3 col-span-12  text-xs md:text-sm md:mr-3 bg-blue-dark ring-2 ring-blue-light hover:bg-background-light hover:text-black dark:text-black dark:bg-white hover:ring-2 dark:ring-white dark:hover:bg-background-dark dark:hover:text-white ease-in-out duration-200  focus:outline-none  font-medium rounded-lg   px-5 py-1 text-center '
              >
                <span className='flex ' onClick={() => handleCreateImage()}>
                  <span className='text-xl ml-2'>
                    <BsPlusCircleDotted />
                  </span>
                  افزودن تصویر
                </span>
              </button>
            </div>
          </div>
        </form>
        {/* Upload Modal*/}
        {uploadModal !== 0 && (
          <div className='w-screen p-24  h-screen bg-[#212121a1] fixed top-0 left-0 z-[999999] '>
            <div
              onClick={() => setUploadModal(0)}
              className='mx-auto flex flex-row text-xl text-red-light cursor-pointer bg-white w-max rounded p-3 mb-2'
            >
              <span className='text-sm pl-3'> بستن صفحه </span>

              <BsDashCircleDotted />
            </div>
            <table className='max-w-fit mx-auto  overflow-hidden rounded-2xl'>
              <thead
                className={`${'text-right'} bg-white text-black dark:text-white `}
              >
                <th className='px-2 py-2 pr-4'>{`نام فایل`}</th>

                <th></th>
              </thead>
              <div
                className={`bg-background2-light max-h-96  overflow-x-scroll ml-[-3px] dark:bg-background2-dark overflow-y-scroll ${style.myLink}`}
              >
                {files.map((item) => (
                  <tr
                    className=''
                    key={item.id}
                    onClick={() => {
                      if (uploadModal == 1) {
                        setUrl(item.url)
                      }
                    }}
                  >
                    <TableRow name={item.name} />
                  </tr>
                ))}
              </div>
            </table>
          </div>
        )}
      </div>
    </>
  )
}

export default Settings
