import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

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

  const [url, setUrl] = useState('')
  const [name, setName] = useState('')

  let Url = ''

  const validator = () => {
    if (name && url !== ' ') {
      return true
    } else {
      toast.warn('لطفا  نام و لینک  را وارد کنید')
    }
  }
  const handleSubmit = () => {
    Url = url.replace(`${config.HttpBaseUrl}/storage/`, '')

    const data = {
      name: name,
      url: Url,
    }
    if (validator() == true) {
      AddAMusicService(token, data).then((res) => {
        if (res.status == 200) {
          toast.success('موزیک با موفقیت ثبت شد')

          console.log(`${config.HttpBaseUrl}/storage/`)
          navigate('/musics')
        }
      })
    }
  }

  const handleEdit = (singleId) => {
    Url = url.replace(`${config.HttpBaseUrl}/storage/`, '')

    const data = {
      name: name,
      url: Url,
    }
    if (validator() == true) {
      EditMusicService(token, data, singleId).then((res) => {
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
