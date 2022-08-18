import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import MusicImageDefault from '../../assets/images/UF_Infinity_khayati.gif'

//hooks
import useToken from '../../hooks/useToken'
//servisec
import config from '../../services/config.json'
import {
  AddAMusicService,
  EditMusicService,
} from '../../services/MusicsServices'

const MusicContext = React.createContext()
export function MusicContextProvider({ children }) {
  const navigate = useNavigate()
  const { token } = useToken()
  const [files, setFiles] = useState([])
  const [uploadModal, setUploadModal] = useState(0)

  const [musicImage, setMusicImage] = useState(MusicImageDefault)
  const [url, setUrl] = useState('')
  const [name, setName] = useState('')

  let Url = ''
  let MusicImage = ''
  const validator = () => {
    if (name && url !== ' ') {
      if (musicImage.includes('/static/media/UF_Infinity_khayati') !== true) {
        return true
      } else {
        toast.warn('لطفا عکس  را وارد کنید')
      }
    } else {
      toast.warn('لطفا  نام و لینک  را وارد کنید')
    }
  }
  const handleSubmit = () => {
    MusicImage = musicImage.replace(`${config.HttpBaseUrl}/storage/`, '')
    Url = url.replace(`${config.HttpBaseUrl}/storage/`, '')

    const data = {
      name: name,
      url: url,
      img: musicImage,
    }
    if (validator() == true) {
      AddAMusicService(token, data).then((res) => {
        if (res.status == 200) {
          toast.success('موزیک با موفقیت ثبت شد')
          navigate('/musics')
        }
      })
    }
  }

  const handleEdit = (sinfleId) => {
    MusicImage = musicImage.replace(`${config.HttpBaseUrl}/storage/`, '')
    Url = url.replace(`${config.HttpBaseUrl}/storage/`, '')

    const data = {
      name: name,
      url: url,
      img: musicImage,
    }
    if (validator() == true) {
      EditMusicService(token, data, sinfleId).then((res) => {
        if (res.status == 200) {
          toast.success('موزیک با موفقیت ثبت شد')
        }
      })
    }
  }

  return (
    <MusicContext.Provider
      value={{
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
      }}
    >
      {children}
    </MusicContext.Provider>
  )
}

export default MusicContext
