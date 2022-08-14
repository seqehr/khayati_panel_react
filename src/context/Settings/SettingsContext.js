import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
//hooks
import useToken from '../../hooks/useToken'
//services
import {
  ChangesSettingService,
  CreateImage,
  RemoveImage,
  settingsDataService,
  Sliders,
  UploadedFiles,
} from '../../services/SettingServices'
import config from '../../services/config.json'
const SettingContext = React.createContext()
export function SettingContextProvider({ children }) {
  const { token } = useToken()
  const [imagesSlider, setImagesSlider] = useState([])
  const [loading, setLoading] = useState(true)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const [files, setFiles] = useState([])
  const [uploadModal, setUploadModal] = useState(0)

  //states for save setting changes
  const [url, setUrl] = useState('')
  const [name, setName] = useState('')
  const [link, setLink] = useState('')

  const [siteTitle, setSiteTitle] = useState('')
  const [siteDes, setSiteDes] = useState('')
  const [siteKeywords, setSiteKeywords] = useState('')

  useEffect(() => {
    //get settings data
    settingsDataService(token).then((res) => {
      setSiteTitle(res.data.data.title)
      setSiteDes(res.data.data.description)
      setSiteKeywords(res.data.data.keywords)
    })

    //get slider images
    Sliders(token).then((res) => {
      setImagesSlider(res.data.data)
      setLoading(false)
    })

    // get uploaded files
    UploadedFiles(token).then((res) => {
      setFiles(res.data.data)
    })
  }, [])

  //delete image from slider
  const deleteImageHandler = (id) => {
    toast.error(
      <p dir='rtl'>
        <span className='pl-2'>مجدد تایید کنید</span>
        <span
          onClick={() => confirmDelete(id)}
          className=' p-2 px-3  bg-red-light rounded-lg text-white hover:border-2 text-center ease-in-out duration-300'
        >
          حذف شود!
        </span>
      </p>
    )
    const confirmDelete = (id) => {
      RemoveImage(token, id).then((res) => {
        toast.success('با موفقیت حذف شد')
      })
      setImagesSlider(imagesSlider.filter((i) => i.id !== id))
    }
  }
  const submitChangesHandler = () => {
    const data = {
      title: siteTitle,
      description: siteDes,
      keywords: siteKeywords,
    }
    if (siteTitle !== '' && siteDes !== '' && siteKeywords !== '') {
      ChangesSettingService(token, data).then((res) => {
        toast.success('با موفقیت ثبت شد')
      })
    } else {
      toast.warn('مقادیر زیر نمیتواند خالی باشد')
    }
  }

  const handleCreateImage = () => {
    const data = {
      name,
      url: link,
      img: url.replace(`${config.HttpBaseUrl}/storage/`, ''),
    }
    if (name !== '' && link !== '') {
      if (url !== '') {
        CreateImage(token, data).then((res) => {
          Sliders(token).then((res) => {
            setImagesSlider(res.data.data)
            setLoading(false)
          })
        })
      } else {
        toast.warn('لطفا فایل تصویر را انتخاب کنید')
      }
    } else {
      toast.warn('لطفا مشخصات عکس را کامل وارد کنید')
    }
  }

  return (
    <SettingContext.Provider
      value={{
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
      }}
    >
      {children}
    </SettingContext.Provider>
  )
}

export default SettingContext
