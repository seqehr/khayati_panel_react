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
  }
}

export default useUpload
