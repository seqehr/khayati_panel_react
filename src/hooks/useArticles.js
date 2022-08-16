// Context
import { useContext } from 'react'
import ArticlesContext from '../context/Articles/ArticlesContext'

const useArticles = (props) => {
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
    handleEdit,
  } = useContext(ArticlesContext)
  return {
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
  }
}

export default useArticles
