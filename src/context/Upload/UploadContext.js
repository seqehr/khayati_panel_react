import React, { useCallback, useState } from 'react'

const UploadContext = React.createContext()
export const UploadContextProvider = ({ children }) => {
  const [progress, setProgress] = useState('')
  const [files, setFiles] = useState([])
  //filter
  const [filter, setFilter] = useState('DateAs')

  return (
    <UploadContext.Provider
      value={{ progress, setProgress, files, setFiles, filter, setFilter }}
    >
      {children}
    </UploadContext.Provider>
  )
}

export default UploadContext
