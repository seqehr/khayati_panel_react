import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from 'persian-build-ckeditor5-nowinflow/build/ckeditor'
//images
import PreviewDefaultImage from '../../assets/images/video-file-icon-20.png'
//hooks
import useCourses from '../../hooks/useCourses'
//icons
import { BsPlusCircleDotted } from 'react-icons/bs'
import { BsDashCircleDotted } from 'react-icons/bs'
import { HashLink as Link } from 'react-router-hash-link'
const Lessons = ({
  setIsOpenUrlLessonModal,
  isFree,
  setIsOpenPreviewModal,
}) => {
  const {
    getLesson,
    getLinkLesson,
    getTitleLesson,
    handleCreate,
    handleDelete,
    setLinkLesson,
    setTitleLesson,
    setContentLesson,
    getContentLesson,
    preview,
    editLesson,
    editing,
    setEditing,
    handleEditLesson,
    resetInputs,
  } = useCourses()
  return (
    <>
      <div className='bg-background-light dark:bg-background-dark p-5 mb-5 rounded-lg shadow-md'>
        {/* create a lesson */}
        <div className=' grid grid-cols-12 '>
          {' '}
          <input
            autoComplete='off'
            onChange={(e) => setTitleLesson(e.target.value)}
            type='text'
            value={getTitleLesson}
            name='lessonName'
            id='lessonName'
            className='block py-2.5 px-2 col-span-6  md:col-span-4 text-sm dark:bg-background2-dark dark:placeholder:text-white border-2 rounded-md border-gray-light placeholder:text-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' عنوان درس جدید را وارد کنید'
            required=''
          />
          <input
            autoComplete='off'
            onClick={() => setIsOpenUrlLessonModal(true)}
            value={getLinkLesson}
            type='text'
            name='lessonLink'
            id='lessonLink'
            className={`block py-2.5 px-2  mr-2 ${
              editing ? 'col-span-4' : 'col-span-6'
            } text-sm dark:bg-background2-dark dark:placeholder:text-white border-2 rounded-md border-gray-light placeholder:text-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
            placeholder=' لینک درس جدید را وارد کنید'
            required=''
          />
          {editing == true && (
            <button
              onClick={(e) => {
                e.preventDefault()
                setEditing(false)
                resetInputs()
              }}
              className='text-white items-center mt-2 md:mt-0 md:mr-2 col-span-12 md:col-span-2 text-sm flex justify-center   bg-red-light ring-2 ring-red-dark hover:bg-background-light hover:text-black dark:text-black dark:bg-red-dark hover:ring-2 dark:ring-bg-red-light dark:hover:bg-background-dark dark:hover:text-white ease-in-out duration-200  focus:outline-none  font-medium rounded-lg   px-5 py-1 text-center '
            >
              <span className='flex '>انصراف</span>
            </button>
          )}
          <button
            onClick={(e) => {
              e.preventDefault()
              if (editing) {
                handleEditLesson()
              } else {
                handleCreate()
              }
            }}
            className='text-white items-center flex justify-center col-span-12 mt-2 md:mt-0 md:col-span-2  text-xs md:text-sm md:mr-3 bg-blue-dark ring-2 ring-blue-light hover:bg-background-light hover:text-black dark:text-black dark:bg-white hover:ring-2 dark:ring-white dark:hover:bg-background-dark dark:hover:text-white ease-in-out duration-200  focus:outline-none  font-medium rounded-lg   px-5 py-1 text-center '
          >
            <span className='flex '>
              <span className='text-xl ml-2'>
                <BsPlusCircleDotted />
              </span>
              {`${editing ? 'ثبت تغییرات' : ' افزودن درس'} `}
            </span>
          </button>
          <div
            className={`${
              isFree == 'free' ? 'col-span-12' : 'col-span-8'
            } relative  z-0 w-full my-5  group `}
          >
            <CKEditor
              editor={ClassicEditor}
              className={`text-right right-0`}
              data={getContentLesson}
              // this will we change  =>  {data} has html

              onChange={(event, editor) => {
                const data = editor.getData()
                setContentLesson(data)
              }}
            />
          </div>
          {/* C O U R S E - P R E V I E W */}
          {isFree !== 'free' && (
            <div
              className={`cursor-pointer col-span-4 relative  flex justify-center flex-col items-center z-0 w-full mb-6 group`}
            >
              <img
                src={PreviewDefaultImage}
                className={`p-5 mt-5 rounded-md w-60`}
                onClick={() => {
                  setIsOpenPreviewModal(true)
                }}
              />
              <label
                className='p-5 text-black cursor-pointer dark:text-white block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                for='user_avatar'
              >
                {preview !== PreviewDefaultImage ? (
                  <p className='text-green-light animate-pulse flex flex-col text-center w-48 break-words'>
                    ویدیو انتخاب شده
                    <span dir='ltr' className='text-center'>
                      {preview.replace(
                        'https://seeuland.com/storage/uploads//',
                        ''
                      )}
                    </span>
                  </p>
                ) : (
                  `انتخاب ویدیو دموی دوره`
                )}
              </label>
            </div>
          )}
        </div>

        {/* show lessons */}
        {getLesson.map((lesson) => (
          <div key={lesson.id} className='mt-8  grid grid-cols-12'>
            <input
              autoComplete='off'
              type='text'
              name='lessonName'
              id='lessonName'
              className='block py-2.5 px-2 col-span-6  md:col-span-4 text-sm dark:bg-background2-dark dark:placeholder:text-white border-2 rounded-md border-gray-light placeholder:text-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder={lesson.name}
              disabled
            />
            <input
              autoComplete='off'
              type='text'
              name='lessonLink'
              id='lessonLink'
              className='block py-2.5 px-2  mr-2 col-span-4 text-sm dark:bg-background2-dark dark:placeholder:text-white border-2 rounded-md border-gray-light placeholder:text-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder={lesson.url}
              disabled
            />
            <Link
              onClick={() => {
                editLesson(lesson.id)
                setEditing(true)
              }}
              className='text-white items-center mt-2 md:mt-0 md:mr-2 col-span-12 md:col-span-2 text-sm flex justify-center   bg-blue-light ring-2 ring-blue-dark hover:bg-background-light hover:text-black dark:text-black dark:bg-blue-dark hover:ring-2 dark:ring-bg-blue-light dark:hover:bg-background-dark dark:hover:text-white ease-in-out duration-200  focus:outline-none  font-medium rounded-lg   px-5 py-1 text-center '
              to={'#createLesson'}
            >
              <span className='flex '>ویرایش درس</span>
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault()
                handleDelete(lesson.id)
              }}
              className='text-white items-center mt-2 md:mt-0 md:mr-2 col-span-12 md:col-span-2 text-sm flex justify-center   bg-red-light ring-2 ring-red-dark hover:bg-background-light hover:text-black dark:text-black dark:bg-red-dark hover:ring-2 dark:ring-red-light dark:hover:bg-background-dark dark:hover:text-white ease-in-out duration-200  focus:outline-none  font-medium rounded-lg   px-5 py-1 text-center '
            >
              <span className='flex '>
                <span className='text-xl ml-2'>
                  <BsDashCircleDotted />
                </span>
                حذف درس
              </span>
            </button>

            <div
              className={`${
                lesson.demo == lesson.url ? 'col-span-12' : 'col-span-8'
              } relative  z-0 w-full my-5  group `}
            >
              <CKEditor
                editor={ClassicEditor}
                className={`text-right right-0`}
                data={lesson.content}
                // this will we change  =>  {data} has html

                onReady={(editor) => {
                  editor.enableReadOnlyMode('my-feature-id')
                }}
              />
            </div>
            {lesson.demo !== lesson.url && (
              <div
                className={` col-span-4 relative  flex justify-center flex-col items-center z-0 w-full mb-6 group`}
              >
                <img
                  src={PreviewDefaultImage}
                  className={`p-5 mt-5 rounded-md w-60`}
                />
                <label
                  className='p-5 text-black  dark:text-white block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  for='user_avatar'
                >
                  <p className='  flex flex-col text-center w-48 break-words'>
                    <span dir='ltr' className='text-center'>
                      {lesson.demo.replace('uploads//', '')}
                    </span>
                  </p>
                </label>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default Lessons
