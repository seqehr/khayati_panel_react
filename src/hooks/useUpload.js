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
  }
}

export default useUpload
