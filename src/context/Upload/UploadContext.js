import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import useToken from '../../hooks/useToken'
import { CreateDirectory, Directories } from '../../services/UploadServices'

const UploadContext = React.createContext()
export const UploadContextProvider = ({ children }) => {
  const [progress, setProgress] = useState('')
  const [files, setFiles] = useState([])
  //filter
  const [filter, setFilter] = useState('DateAs')

  const { token } = useToken()
  const [checked, setChecked] = useState(null)
  const [name, setName] = useState('')
  const [dirlist, setDirlist] = useState({
    name: 'پوشه ها',
    root: true,
    children: [],
    id: null,
  })

  useEffect(() => {
    Directories(token, { dir: 'uploads ' }).then((res) => {
      const directories = { ...dirlist }
      directories.children = res.data.data
      setDirlist(directories)
    })
  }, [])
  const handleSubmit = () => {
    const data = {
      name,
      parent_id: checked,
    }
    if (name == '') {
      toast.warn('لطفا یک نام انتخاب کنید')
    } else {
      // fetch categories list again after create new category
      CreateDirectory(token, data)
        .then((res) => {
          Directories(token).then((res) => {
            const directories = { ...dirlist }
            directories.children = res.data.data
            setDirlist(directories)
          })
          toast.success(' فولدر با موفقیت ایجاد شد')
          // reset inputs
          setChecked(0)
        })
        .catch((ex) => {
          console.log(ex)
        })
    }
  }

  return (
    <UploadContext.Provider
      value={{
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
      }}
    >
      {children}
    </UploadContext.Provider>
  )
}

export default UploadContext
