import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from 'persian-build-ckeditor5-nowinflow/build/ckeditor'
//hooks
import useCourses from '../../hooks/useCourses'
//icons
import { BsPlusCircleDotted } from 'react-icons/bs'
import { BsDashCircleDotted } from 'react-icons/bs'
const Lessons = ({ selectLessenFileF }) => {
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
  } = useCourses()
  return (
    <>
      <div className='bg-background-light dark:bg-background-dark p-5 mb-5 rounded-lg shadow-md'>
        {/* create a lesson */}
        <div className=' grid grid-cols-12 '>
          {' '}
          <input
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
            onClick={() => selectLessenFileF()}
            value={getLinkLesson}
            type='text'
            name='lessonLink'
            id='lessonLink'
            className='block py-2.5 px-2  mr-2 col-span-6 text-sm dark:bg-background2-dark dark:placeholder:text-white border-2 rounded-md border-gray-light placeholder:text-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' لینک درس جدید را وارد کنید'
            required=''
          />
          <button
            onClick={(e) => {
              e.preventDefault()
              handleCreate()
            }}
            className='text-white items-center flex justify-center col-span-12 mt-2 md:mt-0 md:col-span-2  text-xs md:text-sm md:mr-3 bg-blue-dark ring-2 ring-blue-light hover:bg-background-light hover:text-black dark:text-black dark:bg-white hover:ring-2 dark:ring-white dark:hover:bg-background-dark dark:hover:text-white ease-in-out duration-200  focus:outline-none  font-medium rounded-lg   px-5 py-1 text-center '
          >
            <span className='flex '>
              <span className='text-xl ml-2'>
                <BsPlusCircleDotted />
              </span>
              افزودن درس
            </span>
          </button>
          <div className='relative col-span-12 z-0 w-full my-5  group '>
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
        </div>
        {/* show lessons */}
        {getLesson.map((lesson) => (
          <div key={lesson.key} className='mt-8  grid grid-cols-12'>
            {' '}
            <input
              type='text'
              name='lessonName'
              id='lessonName'
              className='block py-2.5 px-2 col-span-6  md:col-span-4 text-sm dark:bg-background2-dark dark:placeholder:text-white border-2 rounded-md border-gray-light placeholder:text-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder={lesson.name}
              disabled
            />
            <input
              type='text'
              name='lessonLink'
              id='lessonLink'
              className='block py-2.5 px-2  mr-2 col-span-6 text-sm dark:bg-background2-dark dark:placeholder:text-white border-2 rounded-md border-gray-light placeholder:text-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder={lesson.url}
              disabled
            />
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
            <div className='relative col-span-12 z-0 w-full my-5  group '>
              <CKEditor
                editor={ClassicEditor}
                className={`text-right right-0`}
                data={lesson.content}
                // this will we change  =>  {data} has html

                onChange={(event, editor) => {
                  const data = editor.getData()
                  setContentLesson(data)
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Lessons
