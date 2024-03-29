import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import config from '../../services/config.json'
import { toast } from 'react-toastify'
import Resumable from 'resumablejs'
import $ from 'jquery'

//icons
import { FiUploadCloud } from 'react-icons/fi'

import { useDropzone } from 'react-dropzone'
import { Line } from 'rc-progress'
import Files from './Files'
// css
import './Upload.css'
//services
import { UploadedFiles } from '../../services/CourseServices'

//hooks
import useUpload from '../../hooks/useUpload'
import useToken from '../../hooks/useToken'
const Uploads = () => {
  const { token } = useToken()
  const { progress, setProgress, setFiles, files } = useUpload()
  useEffect(() => {
    const browseFile = document.querySelector('#browseFile')

    let resumable = new Resumable({
      target: `${config.baseUrl}/api/upload/new`,
      query: { _token: '{{ csrf_token }}' }, // CSRF token
      fileType: ['mp4', 'jpg', 'png', 'mp3', 'zip', 'rar', 'pdf'],
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
      testChunks: false,
      throttleProgressCallbacks: 1,
    })

    resumable.assignDrop(browseFile)
    resumable.assignBrowse(browseFile)
    resumable.on('fileAdded', function (file) {
      // trigger when file picked

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
  }, [])

  if (progress == '100') {
    setTimeout(() => {
      UploadedFiles(token).then((res) => {
        setFiles(res.data.data)
        setProgress('')
      })
    }, 2000)
  }
  return (
    <>
      <div className='container '>
        <div id='upload-container' className=' w-full flex justify-center'>
          <button
            id='browseFile'
            className='text-gray-light text-xl flex border-2 text-center justify-center w-full dark:border-gray-light border-gray-dark dark:text-white  border-dashed p-10 cursor-pointer rounded-lg'
          >
            <span className='text-3xl mx-4 '>
              <FiUploadCloud />
            </span>
            فایلتان را در این قسمت رها کنید
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
      </div>

      <div className='mt-10'>
        <Files />
      </div>
    </>
  )
}

export default Uploads
