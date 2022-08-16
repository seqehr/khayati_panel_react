// Context
import { useContext } from 'react'
import MusicContext from '../context/Musics/MusicContext'

const useMusics = (props) => {
  const {
    files,
    setFiles,
    uploadModal,
    setUploadModal,
    musicImage,
    setMusicImage,
    url,
    setUrl,
    name,
    setName,
    handleSubmit,
    handleEdit,
  } = useContext(MusicContext)
  return {
    files,
    setFiles,
    uploadModal,
    setUploadModal,
    musicImage,
    setMusicImage,
    url,
    setUrl,
    name,
    setName,
    handleSubmit,
    handleEdit,
  }
}

export default useMusics
