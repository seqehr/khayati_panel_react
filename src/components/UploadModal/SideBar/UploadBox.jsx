import React, { useEffect, useState } from 'react'
import { Line } from 'rc-progress'
import Resumable from 'resumablejs'
import config from '../../../services/config.json'
import { toast } from 'react-toastify'
// css
import styles from '../UploadModal.module.scss'
//icons
import { FiUploadCloud } from 'react-icons/fi'
//hooks
import useToken from '../../../hooks/useToken'
import useUpload from '../../../hooks/useUpload'
import { UploadedFiles } from '../../../services/ProductServices'
import TreeView from './TreeViewe'
import { AiFillFolderAdd } from 'react-icons/ai'

const UploadBox = () => {
  const { token } = useToken()
  const {
    progress,
    setProgress,
    setFiles,
    files,
    dirlist,
    setDirlist,
    handleSubmit,
    name,
    setName,
    checked,
  } = useUpload()
  const [file, setFile] = useState({})

  if (progress == '100') {
    setTimeout(() => {
      UploadedFiles(token).then((res) => {
        setFiles(res.data.data)
        setProgress('')
      })
    }, 2000)
  }

  const uploadHandler = (file) => {
    if (checked == null) {
      toast.warn(' ابتدا پوشه را انتخاب کنید')
      return
    }
    let resumable = new Resumable({
      target: `${config.baseUrl}/api/upload/new`,
      query: { dir_id: checked },
      fileType: ['mp4', 'jpg', 'png', 'mp3', 'zip', 'rar', 'pdf'],
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
      testChunks: false,
      throttleProgressCallbacks: 1,
    })
    resumable.addFile(file)
    console.log(file)
    resumable.on('fileAdded', function (file) {
      resumable.upload() // to actually start uploading.
    })

    resumable.on('fileProgress', function (file) {
      // trigger when file progress update
      updateProgress(Math.floor(file.progress() * 100))
    })

    resumable.on('fileSuccess', function (file, response) {
      toast.success('با موفقیت اپلود شد')
    })

    resumable.on('fileError', function (file, response) {
      // trigger when there is any error
      toast.error('مشکلی به وجود امده')
    })

    function updateProgress(value) {
      setProgress(value)
    }
  }
  return (
    <>
      <div id='upload-container' className=' w-full flex justify-center'>
        <button
          id='browseFile'
          className='text-gray-light  flex border-2 text-center justify-center w-full dark:border-gray-light border-gray-dark lg:text-lg text-sm dark:text-white  border-dashed p-5 cursor-pointer rounded-lg relative'
        >
          <span className='lg:text-3xl text-xl  ml-2 '>
            <FiUploadCloud />
          </span>
          <input
            type='file'
            className='absolute w-full h-full opacity-0 cursor-pointer'
            onChange={(e) => {
              setFile(e.target.files[0])
              uploadHandler(e.target.files[0])
            }}
          />
          فایلتان رااز اینجا انتخاب کنید
        </button>
      </div>
      {progress !== '' && (
        <div className=' flex justify-center'>
          <div className='w-96 sm:w-[550px] text-center mt-10'>
            <Line
              percent={progress}
              strokeWidth={3}
              strokeColor={[
                '#87d068',
                {
                  '100%': '#87d068',
                  '0%': '#108ee9',
                },
              ]}
            />
            <p className=''>درحال اپلود ({progress}%) </p>
          </div>
        </div>
      )}
      {/* folders */}
      <div className='bg-background-light p-3 rounded-xl mt-5'>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
          className='m-2 mb-4 relative'
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            className='w-full p-2 rounded-xl pl-12'
            placeholder=' نام پوشه جدید را وارد کنید...'
          />
          <button type='submit'>
            <AiFillFolderAdd className='absolute text-3xl hover:drop-shadow-lg hover:-translate-y-1 ease-in-out duration-500 cursor-pointer  text-blue-light rounded-l-xl left-3 top-1' />
          </button>
        </form>
        <TreeView explorer={dirlist} showRoot={true} />
      </div>
    </>
  )
}

export default UploadBox
