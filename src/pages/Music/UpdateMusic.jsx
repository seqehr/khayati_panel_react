import React, { useEffect, useState } from 'react'
import { BsDashCircleDotted } from 'react-icons/bs'
import {
  AddAMusicService,
  SingleMusicService,
  UploadedFiles,
} from '../../services/MusicsServices'
import { useParams } from 'react-router-dom'
import MusicImageDefault from '../../assets/images/UF_Infinity_khayati.gif'
// components
import TableRow from './ModalTableRow'
import config from '../../services/config.json'
// css
import style from './TableRow.module.scss'
import { toast } from 'react-toastify'
//hooks
import useToken from '../../hooks/useToken'
import useMusics from '../../hooks/useMusics'
import UploadModal from '../../components/UploadModal/UploadModal'

const UpdateMusic = (props) => {
  const { token } = useToken()
  const { id: singleId } = useParams()
  const {
    files,
    setFiles,
    uploadModal,
    setUploadModal,
    musicImage,
    setMusicImage,
    url,
    setUrl,
    name,
    setName,
    handleSubmit,
    handleEdit,
  } = useMusics()

  // modal states
  const [isOpenImageModal, setIsOpenImageModal] = useState(false)
  const [isOpenUrlModal, setIsOpenUrlModal] = useState(false)
  // get modal files
  const getModalImage = (file) => {
    toast.success('با موفقیت انتخاب شد')
    setMusicImage(file)
  }
  const getModalUrl = (file) => {
    toast.success('با موفقیت انتخاب شد')
    setUrl(file)
  }

  useEffect(() => {
    //reset inputs
    setUrl('')
    setMusicImage(MusicImageDefault)
    setName('')

    SingleMusicService(token, singleId).then((res) => {
      const data = res.data.data

      setUrl(data.url)
      setMusicImage(data.img)
      setName(data.name)
    })

    UploadedFiles(token).then((res) => {
      setFiles(res.data.data)
    })
  }, [])

  return (
    <div className='bg-white dark:bg-background2-dark p-10 shadow-md rounded-xl'>
      <form>
        <div className='grid grid-cols-12 xl:gap-6'>
          {/* M U S I C  - I M A G E */}
          <div
            className={` 
            relative col-span-12  flex justify-center flex-col items-center z-0 w-full mb-6 group`}
          >
            <img
              src={musicImage}
              className='w-96 rounded-md'
              onClick={() => {
                setIsOpenImageModal(true)
              }}
            />
            <label
              className='p-5 text-black cursor-pointer dark:text-white block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              for='user_avatar'
            >
              {`انتخاب عکس `}
            </label>
          </div>
          {/* M U S I C  - N A M E */}
          <div className='relative col-span-3 z-0 w-full mb-6 group'>
            <input
              autoComplete='off'
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
              {`عنوان `}
            </label>
          </div>
          {/* M U S I C  - U R L */}
          <div className='relative col-span-9 z-0 w-full mb-6 group'>
            <input
              autoComplete='off'
              type='text'
              name='excrept'
              id='excrept'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required=''
              value={url}
              onClick={() => setIsOpenUrlModal(true)}
            />
            <label
              for='excrept'
              className={`  right-0
              peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
            >
              {`لینک موزیک`}
            </label>
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

export default UpdateMusic
