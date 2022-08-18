// Context
import { useContext } from 'react'
import UploadContext from '../context/Upload/UploadContext'

const useUpload = (props) => {
  const { progress, setProgress, files, setFiles, filter, setFilter } =
    useContext(UploadContext)

  return {
    progress,
    setProgress,
    files,
    setFiles,
    filter,
    setFilter,
  }
}

export default useUpload
