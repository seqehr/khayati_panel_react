import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
//components
import TreeView from '../TreeViewe'
//images
import ImageDefault from '../../../assets/images/UF_Infinity_khayati.gif'
//hooks
import useToken from '../../../hooks/useToken'
import useProductsCategories from '../../../hooks/useProductsCategories'
import { CatListService } from '../../../services/ProductServices'
// css
import styles from './AddProductCategory.module.scss'
import { toast } from 'react-toastify'
import UploadModal from '../../../components/UploadModal/UploadModal'
const AddProductCategory = () => {
  const { token } = useToken()

  const {
    name,
    setName,
    handleSubmit,
    catlist,
    setCatlist,
    img,
    setImg,
    catEditable,
    setCatEditable,
    tmpName,
    setTmpName,
    tmpImg,
    setTmpImg,
    handleEdit,
  } = useProductsCategories()

  // modal states
  const [isOpenImageModal, setIsOpenImageModal] = useState(false)

  // get modal files
  const getModalImage = (file) => {
    toast.success('با موفقیت انتخاب شد')
    if (catEditable == '') {
      setImg(file)
    } else {
      setTmpImg(file)
    }
  }
  // get cat list
  useEffect(() => {
    CatListService(token).then((res) => {
      const categories = { ...catlist }
      categories.children = res.data.data

      setCatlist(categories)
    })
  }, [])

  return (
    <div initial='hidden' animate='visible' className='grid grid-cols-12'>
      {/* Content */}
      <div className='col-span-9 max-h-36  bg-background2-light dark:bg-background2-dark rounded-xl p-5 mr-4'>
        <div className='relative  z-0 w-full mb-6 group'>
          <input
            type='text'
            name='Name'
            className='block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-2 rounded-xl shadow-md  border-gray-light appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required=''
            value={catEditable == '' ? name : tmpName}
            onChange={(e) => {
              if (catEditable == '') {
                setName(e.target.value)
              } else {
                setTmpName(e.target.value)
              }
            }}
          />
          <label
            for='Name'
            className={` text-gray-light font-medium mr-1 bg-background2-light dark:bg-background2-dark dark:peer-placeholder-shown:text-white peer-focus:font-medium absolute text-sm    duration-300 transform -translate-y-6 top-3  origin-[0] peer-focus:text-gray-light  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 peer-focus:z-[999] px-2 rounded-lg peer-placeholder-shown:-z-10 z-30 peer-placeholder-shown:text-black`}
          >
            {catEditable == '' ? `نام دسته بندی جدید ` : `نام دسته بندی  `}
          </label>
        </div>
        {catEditable !== '' && (
          <div className='relative  z-0 w-full mb-6 group'>
            <p
              onClick={() => {
                setCatEditable('')
              }}
              className='text-xs p-3 cursor-pointer hover:shadow-md ease-in-out duration-500 hover:scale-105 text-white rounded-xl bg-bitcoin-light w-max'
            >
              {' '}
              انصراف از ویرایش دسته بندی : {catEditable.name}
            </p>
          </div>
        )}
      </div>
      {/* Sidebar */}
      <div className='md:col-span-3 flex flex-col-reverse md:flex-col col-span-12  text-right float-right bg-background2-light dark:bg-background2-dark md:mr-2 mt-4 md:mt-0   rounded-xl p-5'>
        {/* Submit Button */}
        <div className='w-full mb-10'>
          {catEditable == '' ? (
            <button
              type='submit'
              onClick={(e) => {
                e.preventDefault()
                handleSubmit()
              }}
              className='text-white bg-blue-dark ring-2 ring-blue-light hover:bg-background-light hover:text-black dark:text-black dark:bg-white hover:ring-2 dark:ring-white dark:hover:bg-background-dark dark:hover:text-white ease-in-out duration-200  focus:outline-none  font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center '
            >
              {`ایجاد دسته بندی `}
            </button>
          ) : (
            <button
              type='submit'
              onClick={(e) => {
                e.preventDefault()
                handleEdit()
              }}
              className='text-white bg-blue-dark ring-2 ring-blue-light hover:bg-background-light hover:text-black dark:text-black dark:bg-white hover:ring-2 dark:ring-white dark:hover:bg-background-dark dark:hover:text-white ease-in-out duration-200  focus:outline-none  font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center '
            >
              {`ثبت و ویرایش`}
            </button>
          )}

          {/* image */}
          <div
            onClick={() => setIsOpenImageModal(true)}
            className={`${styles.hoverParent} mt-5 w-full relative flex justify-center items-center overflow-hidden`}
          >
            <img
              src={
                catEditable ? tmpImg : img == ImageDefault ? ImageDefault : img
              }
              onError={({ currentTarget }) => {
                currentTarget.onerror = null // prevents looping
                currentTarget.src = ImageDefault
              }}
              alt=''
              className={`${styles.hoverChildBlure} ease-in-out duration-500 rounded-xl `}
            />
            <label
              className={`${styles.hoverChild}  absolute cursor-pointer  text-white  `}
              htmlFor='file'
            >
              انتخاب عکس
            </label>
          </div>
        </div>

        <TreeView showRoot={true} explorer={catlist} />
      </div>
      {/* Upload Modal*/}

      {isOpenImageModal && (
        <UploadModal
          getImage={getModalImage}
          setIsOpenModal={setIsOpenImageModal}
        />
      )}
    </div>
  )
}
export default AddProductCategory
