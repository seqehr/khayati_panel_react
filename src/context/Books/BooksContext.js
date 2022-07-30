import React, { useEffect, useState } from 'react'
import config from '../../services/config.json'
import { AddBookService, UploadedFiles } from '../../services/BookServices'
import ImageDefault from '../../assets/images/UF_Infinity_khayati.gif'
import { toast } from 'react-toastify'
//hooks
import useToken from '../../hooks/useToken'

const BooksContext = React.createContext()
export function BooksContextProvider({ children }) {
  const { token } = useToken()
  const [files, setFiles] = useState([])
  const [uploadModal, setUploadModal] = useState(0)
  const [description, setDescription] = useState('<p></p>')
  const [bookImage, setBookImage] = useState(ImageDefault)
  const [title, setTitle] = useState('')

  const [url, setUrl] = useState([])

  let BookImage = ''
  let Url = ''
  const handleSubmit = () => {
    BookImage = bookImage.replace(`${config.HttpBaseUrl}/storage/`, '')

    Url = url.replace(`${config.HttpBaseUrl}/storage/`, '')

    const data = {
      name: title,
      img: BookImage,
      link: Url,
      description,
    }
    if (
      BookImage !== '/static/media/UF_Infinity_khayati.2cb6b144dade70ede5a5.gif'
    ) {
      AddBookService(token, data).then((res) => {
        if (res.status == 200) {
          toast.success('کتاب با موفقیت ثبت شد')
        }
      })
    } else {
      toast.warn('لطفا عکس کتاب را انتخاب کنید')
    }
  }
  return (
    <BooksContext.Provider
      value={{
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
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}

export default BooksContext
