// Context
import { useContext } from "react";
import BooksContext from "../context/Books/BooksContext";

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
  } = useContext(BooksContext);
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
  };
};

export default useBooks;
