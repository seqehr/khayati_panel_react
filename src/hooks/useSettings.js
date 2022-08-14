// Context
import { useContext } from 'react'
import SettingContext from '../context/Settings/SettingsContext'

const useSettings = (props) => {
  const {
    imagesSlider,
    setImagesSlider,
    loading,
    setLoading,
    files,
    setFiles,
    uploadModal,
    setUploadModal,
    url,
    setUrl,
    name,
    setName,
    link,
    setLink,
    siteTitle,
    setSiteTitle,
    siteDes,
    setSiteDes,
    siteKeywords,
    setSiteKeywords,
    deleteImageHandler,
    submitChangesHandler,
    handleCreateImage,
    settings,
  } = useContext(SettingContext)
  return {
    imagesSlider,
    setImagesSlider,
    loading,
    setLoading,
    files,
    setFiles,
    uploadModal,
    setUploadModal,
    url,
    setUrl,
    name,
    setName,
    link,
    setLink,
    siteTitle,
    setSiteTitle,
    siteDes,
    setSiteDes,
    siteKeywords,
    setSiteKeywords,
    deleteImageHandler,
    submitChangesHandler,
    handleCreateImage,
  }
}

export default useSettings
