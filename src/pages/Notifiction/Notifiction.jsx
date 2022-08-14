import React, { useEffect } from 'react'
import { UploadedFiles } from '../../services/BookServices'
import ImageDefault from '../../assets/images/UF_Infinity_khayati.gif'

//icons
import { BsDashCircleDotted } from 'react-icons/bs'
// components

import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from 'persian-build-ckeditor5-nowinflow/build/ckeditor'
//hookss
import useBooks from '../../hooks/useBooks'
import useToken from '../../hooks/useToken'

const Notifiction = () => {
  const { token } = useToken()
  const {
    files,
    setFiles,
    uploadModal,
    setUploadModal,
    description,
    setDescription,
    bookImage,
    setBookImage,
    title,
    setTitle,
    url,
    setUrl,
    handleSubmit,
  } = useBooks()

  useEffect(() => {
    // get uploaded files
    UploadedFiles(token).then((res) => {
      setFiles(res.data.data)
    })
    // reset states
    setBookImage(ImageDefault)
    setUrl('')
    setTitle('')
    setDescription('')
  }, [])
  return (
    <div className='bg-white dark:bg-background2-dark p-10 shadow-md rounded-xl'>
      <form>
        <div className='grid grid-cols-12 xl:gap-6'>
          {/* B O O K  - N A M E */}
          <div className='relative col-span-3 pl-2 z-0 w-full mb-6 group'>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type='text'
              value={title}
              name='courseName'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required=''
            />
            <label
              for='courseName'
              className={`  ${'right-0'}peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
            >
              {`عنوان `}
            </label>
          </div>
          {/* B O O K  - des */}
          <div className='relative col-span-9 z-0 w-full mb-6 group'>
            <input
              type='text'
              onClick={(e) => setDescription(e.target.value)}
              value={description}
              name='excrept'
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
              {` توضیحات `}
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
          {`انتشار `}
        </button>
      </form>
    </div>
  )
}

export default Notifiction
