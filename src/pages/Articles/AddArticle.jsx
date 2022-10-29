import React, { useEffect, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from 'persian-build-ckeditor5-nowinflow/build/ckeditor'
//css
import './CKEditor.css'
import style from './TableRow.module.scss'
//images
import ArticleImageDefault from '../../assets/images/UF_Infinity_khayati.gif'

// hooks
import useArticles from '../../hooks/useArticles'
import { CatListService, UploadedFiles } from '../../services/ArticleServices'
//icons
import { BsPlusCircleDotted } from 'react-icons/bs'
import { BsDashCircleDotted } from 'react-icons/bs'
import { AiFillPlusSquare } from 'react-icons/ai'
// components
import TableRow from './ModalTableRow'
import TreeView from './TreeViewe'
// hooks
import useToken from '../../hooks/useToken'
import useArticlesCategories from '../../hooks/useArticlesCategories'
import UploadModal from '../../components/UploadModal/UploadModal'
import { toast } from 'react-toastify'

const AddArticle = (props) => {
  const { token } = useToken()
  const {
    handleSubmit,
    creaeHashagHandler,
    deleteHashagHandler,
    files,
    setFiles,
    categorries,
    setCategorries,
    uploadModal,
    setUploadModal,
    articleImage,
    setArticleImage,
    name,
    setName,
    hashtags,
    setHashtags,
    hashtag,
    setHashtag,
    description,
    setDescription,
    ProductImages,
    setProductImages,
    setProductsImagesHandler,
    handleGalleryImageDelete,
  } = useArticles()
  const { catlist, setCatlist, checked, setChecked } = useArticlesCategories()
  const [refresh, setRefresh] = useState(false)

  // modal states
  const [isOpenImageModal, setIsOpenImageModal] = useState(false)
  const [isOpenImagesModal, setIsOpenImagesModal] = useState(false)
  // get modal files
  const getModalImage = (file) => {
    toast.success('با موفقیت انتخاب شد')
    setArticleImage(file)
  }
  const getModalImages = (file) => {
    toast.success('با موفقیت انتخاب شد')
    setProductsImagesHandler(file)
  }

  useEffect(() => {
    // cats
    CatListService(token).then((res) => {
      const categories = { ...catlist }
      categories.children = res.data.data
      setCatlist(categories)
      setTimeout(() => {
        setRefresh(!refresh)
      }, 100)
    })

    // get uploaded files
    UploadedFiles(token).then((res) => {
      setFiles(res.data.data)
    })
    CatListService(token).then((res) => {
      setCategorries(res.data.data)
    })

    setHashtags([])
    setArticleImage(ArticleImageDefault)
    setName('')
    setDescription('')
    setProductImages([])
    setChecked(0)
  }, [])

  return (
    <div className='bg-white dark:bg-background2-dark p-10 shadow-md rounded-xl container'>
      <form>
        <div className='grid grid-cols-12 xl:gap-6'>
          {/* A R T I C L E -  I M A G E */}
          <div
            className={` ${'col-span-12'} relative  flex justify-center flex-col items-center z-0 w-full mb-6 group`}
          >
            <img
              onClick={() => setIsOpenImageModal(true)}
              src={articleImage}
              className='w-96 rounded-md'
            />
            <label
              className='p-5 text-black cursor-pointer dark:text-white block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              for='user_avatar'
            >
              {`انتخاب عکس مقاله`}
            </label>
          </div>

          {/* A R T I C L E  - N A M E */}
          <div className='relative col-span-6 px-1 z-0 w-full mb-6 group'>
            <input
              autoComplete='off'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
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

          {/* A R T I C L E  - H A S H T A G */}
          <div className='relative flex col-span-6 z-0 px-1 w-full mb-6 group'>
            <input
              autoComplete='off'
              type='text'
              name='courseName'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required=''
              onChange={(e) => setHashtag(e.target.value)}
              value={hashtag}
            />
            <label
              for='courseName'
              className={`  ${'right-0'}peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
            >
              {`برچسب ها `}
            </label>
            <p
              type='text'
              className='text-3xl absolute bottom-0 left-0  cursor-pointer text-blue-light dark:text-blue-dark'
              onClick={() => {
                creaeHashagHandler()
              }}
            >
              <AiFillPlusSquare />
            </p>
          </div>
          <div
            className={`${style.myLink} relative items-end overflow-x-scroll flex col-span-12 z-0 px-1 w-full mb-6 group`}
          >
            {hashtags.map((item, index) => (
              <p className='shadow-md mx-2 p-1 flex'>
                {' '}
                <span
                  onClick={() => deleteHashagHandler(index)}
                  className='text-red-light cursor-pointer px-1'
                >
                  {' '}
                  X{' '}
                </span>{' '}
                {item}{' '}
              </p>
            ))}
          </div>

          {/* A R T I C L E  - D E S C R I B T I O N - C A T S */}
          <div className=' col-span-12 z-0 w-full  grid grid-cols-12 gap-5'>
            <div className='lg:col-span-8 col-span-12 relative mb-6 group'>
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
            {/* A R T I C L E - C A T */}
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
              گالری عکس ها :
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
            {ProductImages.map((i, index) => (
              <div className='lg:col-span-3 sm:col-span-6 col-span-12 flex justify-center flex-col items-center'>
                <img src={i} className='w-full rounded-md dark:h-64' />
                <label
                  onClick={() => handleGalleryImageDelete(index)}
                  className='p-5 opacity-10 hover:opacity-80 text-black cursor-pointer dark:text-white block  text-sm font-medium text-gray-900 bg-background-light dark:bg-background-dark rounded-2xl dark:text-gray-300 absolute hover:-translate-y-1 ease-in-out duration-300 hover:shadow-xl'
                  for='user_avatar '
                >
                  {`حذف عکس`}
                </label>
              </div>
            ))}
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
          {`انتشار مقاله`}
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

export default AddArticle
