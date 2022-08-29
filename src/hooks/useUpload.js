// Context
import { useContext } from 'react'
import UploadContext from '../context/Upload/UploadContext'

const useUpload = (props) => {
  const {
    progress,
    setProgress,
    files,
    setFiles,
    filter,
    setFilter,
    checked,
    setChecked,
    handleSubmit,
    dirlist,
    setDirlist,
    name,
    setName,
    dirFiles,
    setDirFiles,
    showDirFiles,
    setShowDirFiles,
    perpageD,
    setPerpageD,
    pageD,
    setPageD,
    totalPagesD,
    settotalPagesD,
    serchWord,
    setSerchWord,
    serchResult,
    setserchResult,
    serchHandler,
  } = useContext(UploadContext)

  return {
    progress,
    setProgress,
    files,
    setFiles,
    filter,
    setFilter,
    checked,
    setChecked,
    handleSubmit,
    dirlist,
    setDirlist,
    name,
    setName,
    dirFiles,
    setDirFiles,
    showDirFiles,
    setShowDirFiles,
    perpageD,
    setPerpageD,
    pageD,
    setPageD,
    totalPagesD,
    settotalPagesD,
    serchWord,
    setSerchWord,
    serchResult,
    setserchResult,
    serchHandler,
  }
}

export default useUpload
