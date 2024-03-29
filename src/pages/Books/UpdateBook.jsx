import React, { useEffect, useState } from 'react'
import { SingleBookService, UploadedFiles } from '../../services/BookServices'
import { toast } from 'react-toastify'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from 'persian-build-ckeditor5-nowinflow/build/ckeditor'
import { useParams } from 'react-router-dom'
// css
import style from './TableRow.module.scss'
//icons
import { BsDashCircleDotted } from 'react-icons/bs'
// components
import TableRow from './ModalTableRow'

//hooks
import useBooks from '../../hooks/useBooks'
import useToken from '../../hooks/useToken'
import UploadModal from '../../components/UploadModal/UploadModal'

const UpdateBook = (props) => {
  const { token } = useToken()
  const { id: singleId } = useParams()
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
    handleEdit,
  } = useBooks()

  // modal states
  const [isOpenImageModal, setIsOpenImageModal] = useState(false)
  const [isOpenUrlModal, setIsOpenUrlModal] = useState(false)
  // get modal files
  const getModalImage = (img) => {
    toast.success('با موفقیت انتخاب شد')
    setBookImage(img)
  }
  const getModalUrl = (url) => {
    toast.success('با موفقیت انتخاب شد')
    setUrl(url)
  }

  useEffect(() => {
    // reset inputs
    setBookImage('')
    setUrl('')
    setTitle('')
    setDescription('')

    SingleBookService(token, singleId).then((res) => {
      const data = res.data.data
      setBookImage(data.img)
      setUrl(data.link)
      setTitle(data.name)
      setDescription(data.description)
    })
  }, [])
  return (
    <div className='bg-white dark:bg-background2-dark p-10 shadow-md rounded-xl'>
      <form>
        <div className='grid grid-cols-12 xl:gap-6'>
          {/* C O U R S E - I M A G E */}
          <div
            className={` ${'col-span-12'} relative  flex justify-center flex-col items-center z-0 w-full mb-6 group`}
          >
            <img
              src={bookImage}
              className='w-96 rounded-md'
              onClick={() => {
                setIsOpenImageModal(true)
              }}
            />
            <label
              className='p-5 text-black cursor-pointer dark:text-white block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              for='user_avatar'
            >
              {`انتخاب عکس کتاب`}
            </label>
          </div>
          {/* B O O K  - N A M E */}
          <div className='relative col-span-3 pl-2 z-0 w-full mb-6 group'>
            <input
              autoComplete='off'
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
          {/* B O O K  - U R L */}
          <div className='relative col-span-9 z-0 w-full mb-6 group'>
            <input
              autoComplete='off'
              type='text'
              onClick={() => {
                setIsOpenUrlModal(true)
              }}
              value={url}
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
              {`لینک کتاب`}
            </label>
          </div>
          {/* A R T I C L E  - D E S C R I B T I O N*/}
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
        </div>
        <button
          type='submit'
          onClick={(e) => {
            e.preventDefault()
            handleEdit(singleId)
          }}
          className='text-white bg-blue-dark ring-2 ring-blue-light hover:bg-background-light hover:text-black dark:text-black dark:bg-white hover:ring-2 dark:ring-white dark:hover:bg-background-dark dark:hover:text-white ease-in-out duration-200  focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
        >
          {`ویرایش `}
        </button>
      </form>
      {/* Upload Modal*/}

      {isOpenImageModal && (
        <UploadModal
          getImage={getModalImage}
          setIsOpenModal={setIsOpenImageModal}
        />
      )}
      {isOpenUrlModal && (
        <UploadModal
          getImage={getModalUrl}
          setIsOpenModal={setIsOpenUrlModal}
        />
      )}
    </div>
  )
}

export default UpdateBook
