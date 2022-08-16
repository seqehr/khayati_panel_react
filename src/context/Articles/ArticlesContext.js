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
import useCategories from '../../hooks/useCategories'

const ArticlesContext = React.createContext()
export function ArticlesContextProvider({ children }) {
  const { token } = useToken()
  const [files, setFiles] = useState([])
  const [categorries, setCategorries] = useState([])
  const [uploadModal, setUploadModal] = useState(false)

  const [articleImage, setArticleImage] = useState(ArticleImageDefault)

  const { checked, setChecked } = useCategories()
  const [description, setDescription] = useState('<p></p>')
  const [name, setName] = useState('')
  const [hashtags, setHashtags] = useState([])
  const [hashtag, setHashtag] = useState('')

  let ArticleImage = ''

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

    const data = {
      name,
      cat_id: checked,
      img: ArticleImage,
      content: description,
      tags: JSON.stringify(hashtags),
    }

    if (validator() == true) {
      AddArticleService(token, data).then((res) => {
        if (res.status == 200) {
          toast.success('مقاله با موفقیت ساخته شد')
        }
      })
    }
  }
  const handleEdit = (singleId) => {
    ArticleImage = articleImage.replace(`${config.HttpBaseUrl}/storage/`, '')

    const data = {
      name,
      cat_id: checked,
      img: ArticleImage,
      content: description,
      tags: JSON.stringify(hashtags),
    }

    if (validator() == true) {
      EditArticleService(token, data, singleId).then((res) => {
        if (res.status == 200) {
          toast.success('مقاله با موفقیت ساخته شد')
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
      }}
    >
      {children}
    </ArticlesContext.Provider>
  )
}

export default ArticlesContext
