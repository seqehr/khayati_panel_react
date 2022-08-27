import React, { useEffect, useState } from 'react'
import { Radio } from '@material-tailwind/react'
import productImageDefault from '../../assets/images/UF_Infinity_khayati.gif'
import { useParams } from 'react-router-dom'
import './CKEditor.css'
import style from './TableRow.module.scss'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from 'persian-build-ckeditor5-nowinflow/build/ckeditor'
import { toast } from 'react-toastify'
//images
import ArticleImageDefault from '../../assets/images/UF_Infinity_khayati.gif'
// hooks
import useCourse from '../../hooks/useCourses'
import useToken from '../../hooks/useToken'
import useCategories from '../../hooks/useCategories'
//services
import {
  SingleProductService,
  AddProductService,
  UploadedFiles,
  CatListService,
} from '../../services/ProductServices'
//icons
import { AiFillPlusSquare } from 'react-icons/ai'
import { BsPlusCircleDotted } from 'react-icons/bs'
import { BsDashCircleDotted } from 'react-icons/bs'
// components
import config from '../../services/config.json'
import TableRow from './ModalTableRow'

import TreeView from './TreeViewe'
import useProducts from '../../hooks/useProducts'
import UploadModal from '../../components/UploadModal/UploadModal'
import useProductsCategories from '../../hooks/useProductsCategories'

const UpdateProduct = (props) => {
  const { token } = useToken()
  const { id: singleId } = useParams()
  const {
    files,
    setFiles,
    categorries,
    setCategorries,
    uploadModal,
    setUploadModal,
    price,
    setPrice,
    productImage,
    setProductImage,
    catId,
    setCatId,
    description,
    setDescription,
    name,
    setName,
    catlist,
    setCatlist,
    refresh,
    setRefresh,
    handleSubmit,
    ProductImages,
    setProductImages,
    setProductsImagesHandler,
    handleEdit,
  } = useProducts()
  const { checked, setChecked } = useProductsCategories()
  // modal states
  const [isOpenImageModal, setIsOpenImageModal] = useState(false)
  const [isOpenImagesModal, setIsOpenImagesModal] = useState(false)
  // get modal files
  const getModalImage = (file) => {
    toast.success('با موفقیت انتخاب شد')
    setProductImage(file)
  }
  const getModalImages = (file) => {
    toast.success('با موفقیت انتخاب شد')
    setProductsImagesHandler(file)
  }

  useEffect(() => {
    //reset inputs
    setProductImage('')
    setName('')
    setDescription('')
    setProductImages([])
    setPrice(0)
    setChecked(null)

    SingleProductService(token, singleId).then((res) => {
      const data = res.data.data
      setProductImage(data.img)
      setName(data.name)
      setDescription(data.content)
      setPrice(data.price)
      setProductImages(data.gallery.map((i) => i.url))
      setChecked(data.cat_id)
    })
    CatListService(token).then((res) => {
      setCategorries(res.data.data)
    })
  }, [])

  return (
    <div className='bg-white dark:bg-background2-dark p-10 shadow-md rounded-xl'>
      <form>
        <div className='grid grid-cols-12 xl:gap-6'>
          {/* P R O D U C T - E I M A G E */}
          <div
            className={` ${'col-span-12'} relative  flex justify-center flex-col items-center z-0 w-full mb-6 group`}
          >
            <img
              onClick={() => setIsOpenImageModal(true)}
              src={productImage}
              className='w-96 rounded-md'
            />
            <label
              className='p-5 text-black cursor-pointer dark:text-white block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              for='user_avatar'
            >
              {`انتخاب عکس محصول`}
            </label>
          </div>

          {/* P R O D U C T  - N A M E */}
          <div className='relative col-span-8 px-1 z-0 w-full mb-6 group'>
            <input
              autoComplete='off'
              type='text'
              onChange={(e) => setName(e.target.value)}
              name='courseName'
              value={name}
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

          {/* C O U R S E  - P R I C E */}
          <div className={` relative col-span-4 px-1 z-0 w-full mb-6 group`}>
            <input
              autoComplete='off'
              type='number'
              name='price'
              id='price'
              value={price}
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
              {`قیمت محصول`}
            </label>
          </div>

          {/*  D E S C R I B T I O N -  C A T*/}
          <div className=' col-span-12 z-0 w-full  grid grid-cols-12 gap-5'>
            <div className='lg:col-span-8 col-span-12 relative mb-6 group'>
              <CKEditor
                editor={ClassicEditor}
                className={`text-right right-0 `}
                data={description}
                // this will we change  =>  {data} has html

                onChange={(event, editor) => {
                  const data = editor.getData()
                  setDescription(data)
                }}
              />
            </div>
            {/* P R O D U C T - C A T */}
            <div
              className={` lg:col-span-4 col-span-12 relative  flex  justify-start dark:bg-background-dark bg-background-light p-5 rounded-2xl drop-shadow-md  flex-col  z-0  mb-6 group`}
            >
              <TreeView showRoot={false} explorer={catlist} />
            </div>
          </div>

          {/*  I M A G E S */}
          <div
            className={` p-5 ${'col-span-12'} grid grid-cols-12 relative items-center z-0 w-full mb-6  border-2 border-background-light shadow-md dark:border-background-dark rounded-2xl gap-4 group`}
          >
            <p className='col-span-12 p-2 text-xl dark:text-white'>
              گالری محصول :
            </p>
            <div
              onClick={() => setIsOpenImagesModal(true)}
              className='lg:col-span-3 sm:col-span-6 col-span-12 flex justify-center flex-col items-center'
            >
              <img
                src={ArticleImageDefault}
                className='w-full rounded-md blur-sm'
              />
              <label
                className='p-5 text-black cursor-pointer dark:text-white block  text-sm font-medium text-gray-900 bg-background-light dark:bg-background-dark opacity-80 rounded-2xl dark:text-gray-300 absolute hover:-translate-y-1 ease-in-out duration-300 hover:shadow-xl'
                for='user_avatar '
              >
                {`افزودن عکس به گالری`}
              </label>
            </div>
            {ProductImages.map((i) => (
              <div className='lg:col-span-3 sm:col-span-6 col-span-12 flex justify-center flex-col items-center'>
                <img src={i} className='w-full rounded-md dark:h-64' />
              </div>
            ))}
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
          {`ویرایش محصول`}
        </button>
      </form>

      {/* Upload Modal*/}

      {isOpenImageModal && (
        <UploadModal
          getImage={getModalImage}
          setIsOpenModal={setIsOpenImageModal}
        />
      )}
      {isOpenImagesModal && (
        <UploadModal
          getImage={getModalImages}
          setIsOpenModal={setIsOpenImagesModal}
        />
      )}
    </div>
  )
}

export default UpdateProduct
