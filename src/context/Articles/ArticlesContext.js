import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
//services
import config from '../../services/config.json'
import { AddArticleService } from '../../services/ArticleServices'
//images
import ArticleImageDefault from '../../assets/images/UF_Infinity_khayati.gif'
// hooks
import useToken from '../../hooks/useToken'

const ArticlesContext = React.createContext()
export function ArticlesContextProvider({ children }) {
  const { token } = useToken()
  const [files, setFiles] = useState([])
  const [categorries, setCategorries] = useState([])
  const [uploadModal, setUploadModal] = useState(false)

  const [articleImage, setArticleImage] = useState(ArticleImageDefault)
  const [catId, setCatId] = useState(1)
  const [description, setDescription] = useState('')
  const [name, setName] = useState('')
  const [hashtags, setHashtags] = useState([])
  const [hashtag, setHashtag] = useState('')

  let ArticleImage = ''
  const handleSubmit = () => {
    ArticleImage = articleImage.replace(`${config.HttpBaseUrl}/storage/`, '')

    const data = {
      name,
      cat_id: catId,
      img: ArticleImage,
      content: description,
      tags: JSON.stringify(hashtags),
    }
    if (
      ArticleImage !==
      '/static/media/UF_Infinity_khayati.2cb6b144dade70ede5a5.gif'
    ) {
      AddArticleService(token, data).then((res) => {
        if (res.status == 200) {
          toast.success('مقاله با موفقیت ساخته شد')
        }
      })
    } else {
      toast.warn('لطفا عکس مقاله را انتخاب کنید')
    }
  }
  const creaeHashagHandler = () => {
    const arrHashtags = [...hashtags]

    arrHashtags.push(hashtag)
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
        catId,
        setCatId,
        description,
        setDescription,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  )
}

export default ArticlesContext
