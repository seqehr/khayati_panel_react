// Context
import { useContext } from "react";
import ArticlesContext from "../context/Articles/ArticlesContext";

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
    catId,
    setCatId,
    description,
    setDescription,
  } = useContext(ArticlesContext);
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
    catId,
    setCatId,
    description,
    setDescription,
  };
};

export default useArticles;
