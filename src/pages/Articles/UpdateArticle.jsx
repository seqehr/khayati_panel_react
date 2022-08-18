import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from 'persian-build-ckeditor5-nowinflow/build/ckeditor'
//css
import './CKEditor.css'
import style from './TableRow.module.scss'

// hooks
import useArticles from '../../hooks/useArticles'
import useToken from '../../hooks/useToken'
import useCategories from '../../hooks/useCategories'
// services
import {
  SingleArticleService,
  CatListService,
  UploadedFiles,
} from '../../services/ArticleServices'
//images
import ArticleImageDefault from '../../assets/images/UF_Infinity_khayati.gif'

//icons
import { AiFillPlusSquare } from 'react-icons/ai'
import { BsDashCircleDotted } from 'react-icons/bs'
// components
import TableRow from './ModalTableRow'
import TreeView from './TreeViewe'
import UploadModal from '../../components/UploadModal/UploadModal'
import { toast } from 'react-toastify'

const UpdateArticle = (props) => {
  const { catlist, setCatlist, checked, setChecked } = useCategories()
  const [refresh, setRefresh] = useState(false)
  const { token } = useToken()
  const { id: singleId } = useParams()
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
    catId,
    setCatId,
    description,
    setDescription,
    handleEdit,
  } = useArticles()

  // modal states
  const [isOpenImageModal, setIsOpenImageModal] = useState(false)
  // get modal files
  const getModalImage = (file) => {
    toast.success('با موفقیت انتخاب شد')
    setArticleImage(file)
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

    //reset inputs
    setArticleImage(ArticleImageDefault)
    setName('')
    setHashtags([])
    setDescription('')
    setChecked('')

    UploadedFiles(token).then((res) => {
      setFiles(res.data.data)
    })

    SingleArticleService(token, singleId).then((res) => {
      const data = res.data.data
      let tags = []

      data.tag.map((item, index) => {
        tags.push(item.name)
        if (index == data.tag.length - 1) {
          setHashtags(tags)
        }
      })

      setArticleImage(data.img)
      setName(data.name)
      setChecked(data.cat_id)
      console.log(data)
      setDescription(data.content)
    })
    CatListService(token).then((res) => {
      setCategorries(res.data.data)
    })
  }, [])

  return (
    <div className='bg-white dark:bg-background2-dark p-10 shadow-md rounded-xl'>
      <form>
        <div className='grid grid-cols-12 xl:gap-6'>
          {/* A R T I C L E - E I M A G E */}
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
        </div>
        <button
          type='submit'
          onClick={(e) => {
            e.preventDefault()
            handleEdit(singleId)
          }}
          className='text-white bg-blue-dark ring-2 ring-blue-light hover:bg-background-light hover:text-black dark:text-black dark:bg-white hover:ring-2 dark:ring-white dark:hover:bg-background-dark dark:hover:text-white ease-in-out duration-200  focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
        >
          {`ویرایش مقاله`}
        </button>
      </form>

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

export default UpdateArticle
