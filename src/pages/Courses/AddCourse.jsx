import React, { useEffect, useState } from 'react'
import './CKEditor.css'
import style from './TableRow.module.scss'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from 'persian-build-ckeditor5-nowinflow/build/ckeditor'
// images gifs
import CourseImageDefault from '../../assets/images/UF_Infinity_khayati.gif'
import PreviewDefaultImage from '../../assets/images/video-file-icon-20.png'
// hooks
import useToken from '../../hooks/useToken'
import useCourse from '../../hooks/useCourses'
//icons
import { BsDashCircleDotted } from 'react-icons/bs'
// components
import Lessons from './Lessons'
import { UploadedFiles } from '../../services/CourseServices'
import TableRow from './ModalTableRow'
import UploadModal from '../../components/UploadModal/UploadModal'
import { toast } from 'react-toastify'
import { AiFillPlusSquare } from 'react-icons/ai'

const AddCourse = (props) => {
  const { token } = useToken()
  const {
    setLinkLesson,
    setLessons,
    handleSubmit,
    files,
    setFiles,
    uploadModal,
    setUploadModal,
    courseImage,
    setCourseImage,
    coursePoster,
    getContentLesson,
    setContentLesson,
    setCoursePoster,
    color,
    setColor,
    isPin,
    setIsPin,
    isFree,
    setIsFree,
    description,
    setDescription,
    price,
    setPrice,
    excerpt,
    setExcerpt,
    name,
    setName,
    colors,
    selectLessenFile,
    preview,
    setPreview,
    handleCreateSeason,
    setSeason,
    season,
    seasons,
    handleDeleteSeason,
  } = useCourse()
  // modal states
  const [isOpenImageModal, setIsOpenImageModal] = useState(false)
  const [isOpenPostermodal, setIsOpenPostermodal] = useState(false)
  const [isOpenUrlLessonModal, setIsOpenUrlLessonModal] = useState(false)
  const [isOpenPreviewModal, setIsOpenPreviewModal] = useState(false)
  // get modal files
  const getModalImage = (file) => {
    toast.success('با موفقیت انتخاب شد')
    setCourseImage(file)
  }
  const getModalPreview = (file) => {
    toast.success('با موفقیت انتخاب شد')
    setPreview(file)
  }
  const getModalPoster = (file) => {
    toast.success('با موفقیت انتخاب شد')
    setCoursePoster(file)
  }

  const getModalLesson = (file) => {
    toast.success('با موفقیت انتخاب شد')
    setLinkLesson(file)
  }

  useEffect(() => {
    // get uploaded files
    UploadedFiles(token).then((res) => {
      setFiles(res.data.data)
      setLessons(false)
    })

    // reset states
    setName('')
    setDescription('')
    setColor('')
    setCourseImage(CourseImageDefault)
    setCoursePoster(CourseImageDefault)
    setPrice('')
    setLessons([])
    setIsPin(0)
    setIsFree('pricy')
    setExcerpt('')
    setPreview(PreviewDefaultImage)
  }, [])

  return (
    <div className='bg-white dark:bg-background2-dark p-10  shadow-md rounded-xl '>
      <form>
        <div className='grid grid-cols-12 xl:gap-6 gap-5 w-full '>
          {/* C O U R S E - I M A G E */}
          <div
            className={` ${
              isPin == 1 ? 'col-span-6' : 'col-span-12'
            } relative  flex justify-center flex-col items-center z-0 w-full mb-6 group`}
          >
            <img
              src={courseImage}
              className='w-96 rounded-md'
              onClick={() => {
                setIsOpenImageModal(true)
              }}
            />
            <label
              className='p-5 text-black cursor-pointer dark:text-white block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              for='user_avatar'
            >
              {`انتخاب عکس دوره`}
            </label>
          </div>

          {/* C O U R S E - P O S T E R */}
          {isPin == 1 && (
            <div
              className={` relative ${'col-span-6'} flex justify-center flex-col items-center z-0 w-full mb-6 group`}
            >
              <img
                src={coursePoster}
                className='w-96 rounded-md'
                onClick={() => {
                  setIsOpenPostermodal(true)
                }}
              />
              <label
                className='p-5 text-black cursor-pointer dark:text-white block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                for='user_avatar'
              >
                {`انتخاب پوستر`}
              </label>
            </div>
          )}
          {/* C O U R S E - N A M E */}
          <div className='relative col-span-3 z-0 w-full mb-6 group'>
            <input
              autoComplete='off'
              value={name}
              type='text'
              name='courseName'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required=''
              onChange={(e) => setName(e.target.value)}
            />
            <label
              for='courseName'
              className={`  ${'right-0'}peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
            >
              {`نام دوره`}
            </label>
          </div>
          {/* C O U R S E - E X C R E P T */}
          <div className='relative col-span-9 z-0 w-full mb-6 group'>
            <input
              autoComplete='off'
              value={excerpt}
              type='text'
              name='excrept'
              onChange={(e) => setExcerpt(e.target.value)}
              id='excrept'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required=''
            />
            <label
              for='excrept'
              className={`  right-0
              peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
            >
              {`تو ضیحات مختصر`}
            </label>
          </div>
          {/* C O U R S E - D E S C R I B T I O N*/}
          <div className='relative col-span-12 z-0 w-full mb-6 group'>
            <CKEditor
              editor={ClassicEditor}
              className={`text-right right-0`}
              data={description}
              // this will we change  =>  {data} has html

              onChange={(event, editor) => {
                const data = editor.getData()
                setDescription(data)
              }}
            />
          </div>
          {/* C O U R S E  - C H E K B O X E S */}
          <div
            id='createLesson'
            className='relative col-span-12 sm:col-span-3  z-0 w-full  mb-6 group'
          >
            <div className='flex '>
              <div>
                <div>
                  <input
                    autoComplete='off'
                    className='form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white '
                    type='checkbox'
                    checked={isPin == 1}
                    id='ispin'
                    onClick={() => {
                      if (isFree == 'free') {
                        toast.warn('دوره رایگان پین نمیشود')
                      } else {
                        if (isPin == 0) {
                          setIsPin(1)
                        } else {
                          setIsPin(0)
                        }
                      }
                    }}
                  />
                  <label
                    className='form-check-label pr-3  inline-block text-gray-800'
                    for='ispin'
                  >
                    در صفحه اصلی پین شود
                  </label>
                </div>
                <div className='mt-3'>
                  <input
                    autoComplete='off'
                    className='form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white '
                    type='checkbox'
                    checked={isFree == 'free'}
                    id='isfre'
                    onClick={() => {
                      if (isFree == 'pricy') {
                        setIsFree('free')
                        setIsPin(0)
                      } else {
                        setIsFree('pricy')
                      }
                    }}
                  />
                  <label
                    className='form-check-label pr-3  inline-block text-gray-800'
                    for='isfree'
                  >
                    انتشار به صورت رایگان
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* C O U R S E  - P R I C E */}
          <div
            className={`${
              isFree == 'free' && `hidden`
            } relative sm:col-span-4 mt-5 col-span-12 items-center  z-0 w-full mb-6 group`}
          >
            <input
              autoComplete='off'
              type='number'
              value={price}
              name='price'
              id='price'
              onChange={(e) => setPrice(e.target.value)}
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required=''
            />
            <label
              for='price'
              className={`  right-0
              peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
            >
              {`قیمت ثبت نام در دوره`}
            </label>
          </div>

          {/* C O U R S E  - C O L O R S */}
          {isFree == 'pricy' && isPin == 1 && (
            <div className='grid  col-span-12 sm:col-span-5 '>
              <p className='col-span-12'>رنگ خود را انتخاب کنید</p>
              {colors.map((item) => (
                <div className='relative   z-0 w-20 mb-6 group'>
                  <div
                    onClick={() => setColor(item.color)}
                    style={{ background: `${item.color}` }}
                    className={`border-2  rounded-xl py-2 text-white  cursor-pointer shadow-sm text-center mt-1 ${
                      color == item.color && `border-gray-light shadow-lg`
                    } `}
                  >
                    {`${item.name}`}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* C O U R S E  - S E A S O N */}
          <div className='relative flex col-span-6 z-0 px-1 w-full mb-6 group'>
            <input
              autoComplete='off'
              type='text'
              name='courseName'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required=''
              onChange={(e) => setSeason(e.target.value)}
              value={season}
            />
            <label
              for='courseName'
              className={`  ${'right-0'}peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
            >
              {`فصل ها `}
            </label>
            <p
              type='text'
              className='text-3xl absolute bottom-0 left-0  cursor-pointer text-blue-light dark:text-blue-dark'
              onClick={() => {
                handleCreateSeason(false)
              }}
            >
              <AiFillPlusSquare />
            </p>
          </div>

          <div
            className={`${style.myLink} relative items-end overflow-x-scroll flex col-span-12 z-0 px-1 w-full mb-6 group`}
          >
            {seasons.map((item, index) => (
              <p className='shadow-md mx-2 p-1 flex'>
                {' '}
                <span
                  onClick={() => {
                    handleDeleteSeason(item.value)
                  }}
                  className='text-red-light cursor-pointer px-1'
                >
                  {' '}
                  X{' '}
                </span>{' '}
                {item.label}{' '}
              </p>
            ))}
          </div>
          {/* L E S S O N S */}
          <div className='grid  col-span-12'>
            <Lessons
              isFree={isFree}
              setIsOpenPreviewModal={setIsOpenPreviewModal}
              setIsOpenUrlLessonModal={setIsOpenUrlLessonModal}
            />
          </div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
          type='submit'
          className='text-white bg-blue-dark ring-2 ring-blue-light hover:bg-background-light hover:text-black dark:text-black dark:bg-white hover:ring-2 dark:ring-white dark:hover:bg-background-dark dark:hover:text-white ease-in-out duration-200  focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
        >
          {`انتشار دوره`}
        </button>
      </form>
      {/* Upload Modal*/}

      {isOpenImageModal && (
        <UploadModal
          getImage={getModalImage}
          setIsOpenModal={setIsOpenImageModal}
        />
      )}
      {isOpenPostermodal && (
        <UploadModal
          getImage={getModalPoster}
          setIsOpenModal={setIsOpenPostermodal}
        />
      )}
      {isOpenUrlLessonModal && (
        <UploadModal
          getImage={getModalLesson}
          setIsOpenModal={setIsOpenUrlLessonModal}
        />
      )}
      {isOpenPreviewModal && (
        <UploadModal
          getImage={getModalPreview}
          setIsOpenModal={setIsOpenPreviewModal}
        />
      )}
    </div>
  )
}

export default AddCourse
