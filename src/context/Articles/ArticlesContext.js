import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
//services
import config from '../../services/config.json'
import {
  AddArticleService,
  EditArticleService,
} from '../../services/ArticleServices'
//images
import ArticleImageDefault from '../../assets/images/UF_Infinity_khayati.gif'
// hooks
import useToken from '../../hooks/useToken'
import useProductsCategories from '../../hooks/useArticlesCategories'
import { useNavigate } from 'react-router-dom'

const ArticlesContext = React.createContext()
export function ArticlesContextProvider({ children }) {
  const navigate = useNavigate()
  const { token } = useToken()
  const [files, setFiles] = useState([])
  const [categorries, setCategorries] = useState([])
  const [uploadModal, setUploadModal] = useState(false)

  const [articleImage, setArticleImage] = useState(ArticleImageDefault)

  const { checked, setChecked } = useProductsCategories()
  const [description, setDescription] = useState('<p></p>')
  const [name, setName] = useState('')
  const [hashtags, setHashtags] = useState([])
  const [hashtag, setHashtag] = useState('')

  //gallery
  const [ProductImages, setProductImages] = useState([])

  const setProductsImagesHandler = (url) => {
    const images = [...ProductImages]
    images.push(url)
    setProductImages(images)
  }

  let ArticleImage = ''
  let FormatedArticleImages = []
  const validator = () => {
    if (ArticleImage.includes('/static/media/UF_Infinity_khayati') !== true) {
      if (hashtags.length !== 0) {
        if (name !== '') {
          return true
        } else {
          toast.warn('لطفا عنوان را انتخاب کنید')
        }
      } else {
        toast.warn('لطفا یک بر چسب ایجاد کنید')
      }
    } else {
      toast.warn('لطفا  عکس را انتخاب کنید')
    }
  }
  const handleSubmit = () => {
    ArticleImage = articleImage.replace(`${config.HttpBaseUrl}/storage/`, '')
    ProductImages.map((i) => {
      FormatedArticleImages.push(
        i.replace(`${config.HttpBaseUrl}/storage/`, '')
      )
    })
    const data = {
      name,
      cat_id: checked,
      img: ArticleImage,
      content: description,
      tags: JSON.stringify(hashtags),
      gallery: JSON.stringify(FormatedArticleImages),
    }

    if (validator() == true) {
      AddArticleService(token, data).then((res) => {
        if (res.status == 200) {
          toast.success('مقاله با موفقیت ساخته شد')
          navigate('/articles')
        }
      })
    }
  }
  const handleEdit = (singleId) => {
    ArticleImage = articleImage.replace(`${config.HttpBaseUrl}/storage/`, '')
    ProductImages.map((i) => {
      FormatedArticleImages.push(
        i.replace(`${config.HttpBaseUrl}/storage/`, '')
      )
    })
    const data = {
      name,
      cat_id: checked,
      img: ArticleImage,
      content: description,
      tags: JSON.stringify(hashtags),
      gallery: JSON.stringify(FormatedArticleImages),
    }

    if (validator() == true) {
      EditArticleService(token, data, singleId).then((res) => {
        if (res.status == 200) {
          toast.success('مقاله با موفقیت ویرایش شد')
        }
      })
    }
  }
  const creaeHashagHandler = () => {
    const arrHashtags = [...hashtags]

    if (hashtag == '') {
      toast.warn('لطفا نام برچسب را وارد کنید')
    } else {
      arrHashtags.push(hashtag)
    }
    setHashtag('')
    setHashtags(arrHashtags)
  }
  const deleteHashagHandler = (index) => {
    const arrHashtags = [...hashtags]

    const item = arrHashtags[index]
    const filteredArr = arrHashtags.filter((i) => i !== item)

    setHashtags(filteredArr)
  }

  // gallery
  const handleGalleryImageDelete = (index) => {
    const productImages = [...ProductImages]
    const img = productImages[index]
    const filteredProductImages = productImages.filter(
      (t, Index) => Index !== index
    )
    setProductImages(filteredProductImages)

    toast.success(` با موفقیت حذف شد`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
  return (
    <ArticlesContext.Provider
      value={{
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
        handleEdit,

        ProductImages,
        setProductImages,
        setProductsImagesHandler,
        handleGalleryImageDelete,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  )
}

export default ArticlesContext
