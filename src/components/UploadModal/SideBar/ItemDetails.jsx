import React, { useState } from 'react'
import { toast } from 'react-toastify'
import useToken from '../../../hooks/useToken'
import useUpload from '../../../hooks/useUpload'
import { DeletFileService, Directories } from '../../../services/UploadServices'
// css
import styles from '../UploadModal.module.scss'
const ItemDetails = ({ getImage, details, pageMode }) => {
  const { token } = useToken()
  const { setFiles, files, dirlist, setDirlist } = useUpload()
  const handleDelete = (id) => {
    toast.error(
      <p dir='rtl'>
        <span className='pl-2'>مجدد تایید کنید</span>
        <span
          onClick={() => confirmDelete(id)}
          className=' p-2 px-3  bg-red-light rounded-lg text-white hover:border-2 text-center ease-in-out duration-300'
        >
          حذف شود!
        </span>
      </p>
    )
    const confirmDelete = (id) => {
      DeletFileService(token, id).then((res) => {
        toast.success('با موفقیت حذف شد')
        // get directories again
        Directories(token, { dir: 'uploads ' }).then((res) => {
          const directories = { ...dirlist }
          directories.children = res.data.data
          setDirlist(directories)
        })
      })
      setFiles(files.filter((i) => i.id !== id))
    }
  }
  return (
    <div className='mt-5'>
      <p className='my-2  bg-background-light p-2 rounded-lg dark:text-white dark:bg-background-dark'>
        نام فایل : <span dir='ltr'>{details.name}</span>
      </p>
      <p className='my-2 bg-background-light p-2 rounded-lg dark:text-white dark:bg-background-dark'>
        نوع فایل :{' '}
        <span dir='ltr'>
          {details.type == 'png' || details.type == 'jpg'
            ? 'عکس'
            : details.type !== ''
            ? 'مدیا'
            : ''}
        </span>
      </p>
      <p
        className={`${styles.myLink} my-2 bg-background-light p-2 rounded-lg flex dark:text-white dark:bg-background-dark`}
      >
        <span className='w-max whitespace-nowrap '>لینک دانلود :</span>
        <span
          dir='ltr'
          className={`${styles.myLink} overflow-hidden overflow-x-scroll mr-2 text-left`}
        >
          {details.link}
        </span>
      </p>
      <div className='xl:flex xl:justify-between items-center'>
        <p
          className='my-2 mt-5 w-full xl:w-max cursor-pointer dark:text-white dark:bg-background-dark bg-background-light hover:bg-red-light dark:hover:bg-red-dark hover:text-white p-2 px-5 rounded-lg  ease-in-out duration-500 hover:shadow-lg  '
          onClick={() => handleDelete(details.itemId)}
        >
          حذف فایل برای همیشه
        </p>
        {pageMode !== true && (
          <p
            onClick={() => getImage(details.link)}
            className='my-2  w-full xl:w-max mt-5 cursor-pointer bg-background-light p-2 px-5 rounded-lg  ease-in-out duration-500 hover:shadow-lg  dark:text-white dark:bg-background-dark'
          >
            انتخاب کردن فایل
          </p>
        )}
      </div>
    </div>
  )
}

export default ItemDetails
