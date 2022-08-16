// Context
import { useContext } from 'react'
import BooksContext from '../context/Books/BooksContext'

const useBooks = (props) => {
  const {
    files,
    setFiles,
    uploadModal,
    setUploadModal,
    description,
    setDescription,
    bookImage,
    setBookImage,
    title,
    setTitle,
    url,
    setUrl,
    handleSubmit,
    handleEdit,
  } = useContext(BooksContext)
  return {
    files,
    setFiles,
    uploadModal,
    setUploadModal,
    description,
    setDescription,
    bookImage,
    setBookImage,
    title,
    setTitle,
    url,
    setUrl,
    handleSubmit,
    handleEdit,
  }
}

export default useBooks
