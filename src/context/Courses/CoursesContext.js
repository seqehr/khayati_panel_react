import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'
// images gifs
import CourseImageDefault from '../../assets/images/UF_Infinity_khayati.gif'

import PreviewDefaultImage from '../../assets/images/video-file-icon-20.png'
// services
import {
  AddCourseService,
  EditCourseService,
} from '../../services/CourseServices'

// components
import config from '../../services/config.json'
//hooks
import useToken from '../../hooks/useToken'
import { useNavigate } from 'react-router-dom'

const CourseContext = React.createContext()
export const CourseContextProvider = ({ children }) => {
  const navigate = useNavigate()

  const { token } = useToken()
  const [getLesson, setLesson] = useState([])
  const [getLinkLesson, setLinkLesson] = useState('')
  const [getTitleLesson, setTitleLesson] = useState('')
  const [getContentLesson, setContentLesson] = useState('')

  //files
  const [files, setFiles] = useState([])
  const [uploadModal, setUploadModal] = useState(0)

  // Form States
  const [courseImage, setCourseImage] = useState(CourseImageDefault)
  const [preview, setPreview] = useState(PreviewDefaultImage)
  const [coursePoster, setCoursePoster] = useState(CourseImageDefault)
  const [color, setColor] = useState('')
  const [isPin, setIsPin] = useState(false)
  const [isFree, setIsFree] = useState('pricy')
  const [description, setDescription] = useState('<p></p>')
  const [price, setPrice] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [name, setName] = useState('')

  const [refresh, setRefresh] = useState(false)

  const colors = [
    {
      color: 'linear-gradient(180deg, #F90000 39.06%, #000000 100%)',
      name: 'قرمز',
    },
    {
      color: 'linear-gradient(180deg, #3D39FF 39.06%, #000000 100%)',
      name: 'آبی',
    },
    {
      color: 'linear-gradient(180deg, #A900F9 39.06%, #000000 100%)',
      name: 'بنفش',
    },
  ]
  let CourseImage = ''
  let CoursePreview = ''
  let CoursePoster = ''
  let GetLesson = []

  const validator = () => {
    let showColorError = true
    let showPriceError = true
    let showPosterError = true

    // Course Poster validation
    if (isPin) {
      if (CoursePoster.includes('/static/media/UF_Infinity_khayati') == true) {
      } else {
        showPosterError = false
      }
    } else {
      showPosterError = false
    }
    // color validation
    if (color == '') {
      if (isPin == false) {
        showColorError = false
      } else {
        if (isFree == 'free') {
          showColorError = false
        }
      }
    } else {
      showColorError = false
    }
    //price validation
    if (price == '') {
      if (isFree == 'free') {
        showPriceError = false
      }
    } else {
      showPriceError = false
    }
    //----------------------- others
    if (CourseImage.includes('/static/media/UF_Infinity_khayati') !== true) {
      if (name !== '') {
        if (showColorError !== true) {
          if (showPriceError !== true) {
            if (getLesson.length !== 0) {
              if (excerpt !== '') {
                if (description !== '') {
                  if (showPosterError !== true) {
                    return true
                  } else {
                    toast.warn('لطفا پوستر دوره را انتخاب کنید')
                  }
                } else {
                  toast.success('لطفا توضیحات  را بنویسید')
                }
              } else {
                toast.success('لطفا توضیحات کوتاه را بنویسید')
              }
            } else {
              toast.warn('باید حداقل یک درس ایجاد کنید')
            }
          } else {
            toast.warn('لطفا  قیمت را وارد کنید')
          }
        } else {
          toast.warn('لطفا  رنگ را انتخاب کنید')
        }
      } else {
        toast.warn('لطفا نام دوره را انتخاب کنید')
      }
    } else {
      toast.warn('لطفا عکس دوره را انتخاب کنید')
    }
  }

  const handleSubmit = () => {
    CourseImage = courseImage.replace(`${config.HttpBaseUrl}/storage/`, '')

    CoursePoster = coursePoster.replace(`${config.HttpBaseUrl}/storage/`, '')
    if (coursePoster.includes('/static/media/UF_Infinity_khayati') == true) {
      CoursePoster = ''
    }
    getLesson.map((item) => {
      GetLesson.push({
        id: item.id,
        name: item.name,
        url: item.url.replace(`${config.HttpBaseUrl}/storage/`, ''),
        content: item.content,
        demo: item.demo,
      })
    })
    const data = {
      excerpt,
      price: isFree == 'free' ? '0' : price,
      description,
      type: isFree,
      ispin: isPin,
      gradient: color,
      img: CourseImage,

      poster: CoursePoster,
      videos: JSON.stringify(GetLesson),
      name,
      teacher: 'مقدم جو',
    }
    if (validator()) {
      AddCourseService(token, data).then((res) => {
        if (res.status == 200) {
          toast.success('دوره با موفقیت ساخته شد')
          navigate('/courses')
        }
      })
    }
  }
  const handleEdit = (singleId) => {
    CourseImage = courseImage.replace(`${config.HttpBaseUrl}/storage/`, '')
    if (coursePoster.includes('/static/media/UF_Infinity_khayati') == true) {
      CoursePoster = ''
    }
    CoursePoster = coursePoster.replace(`${config.HttpBaseUrl}/storage/`, '')
    getLesson.map((item) => {
      GetLesson.push({
        id: item.id,
        name: item.name,
        url: item.url.replace(`${config.HttpBaseUrl}/storage/`, ''),
        content: item.content,
        demo: item.demo,
      })
    })
    const data = {
      excerpt,
      price: isFree == 'free' ? '0' : price,
      description,
      type: isFree,

      ispin: isPin,
      gradient: color,
      img: CourseImage,
      poster: coursePoster,
      videos: JSON.stringify(GetLesson),
      name,
      teacher: 'مقدم جو',
    }
    if (validator() == true) {
      EditCourseService(token, data, singleId).then((res) => {
        if (res.status == 200) {
          toast.success('دوره با موفقیت ویرایش شد')
        }
      })
    }
  }

  //lessons handlers
  const selectLessenFile = () => {
    // this method is useless i will delete this later
  }
  const handleCreate = () => {
    let showPreviewError = true
    // Course Preview validation
    if (isFree == 'pricy') {
      if (preview.includes('/static/media/video-file-icon-20') == true) {
      } else {
        showPreviewError = false
      }
    } else {
      showPreviewError = false
    }
    CoursePreview = preview.replace(`${config.HttpBaseUrl}/storage/`, '')

    const lessons = [...getLesson]
    const lesson = {
      id: uuidv4(),
      name: getTitleLesson,
      url: getLinkLesson,
      content: getContentLesson,
      demo: isFree == 'pricy' ? CoursePreview : getLinkLesson,
    }
    if (
      getTitleLesson !== '' &&
      getTitleLesson !== ' ' &&
      getTitleLesson !== null
    ) {
      if (showPreviewError !== true) {
        lessons.push(lesson)
        setLesson(lessons)
        setTitleLesson('')
        setLinkLesson('')
        setPreview(PreviewDefaultImage)
        setContentLesson('')
        toast.success(`کلاس با موفقیت اضافه شد`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      } else {
        toast.warn('لطفا ویدیوی دمو را انتخاب کنید')
      }
    } else {
      toast.warn(`لطفا نام درس را وارد کنید`)
    }
  }
  const handleDelete = (id) => {
    const lessons = [...getLesson]
    const index = lessons.findIndex((t) => t.id == id)
    const lesson = lessons[index]
    const filteredTodos = lessons.filter((t) => t.id !== id)
    setLesson(filteredTodos)

    toast.success(`(${lesson.name}) با موفقیت حذف شد`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  const setLessons = (lessonsList) => {
    if (lessonsList == false) {
      setLesson([])
    } else {
      const lessons = []
      lessonsList.map((item) => {
        const lesson = {
          id: item.id,
          name: item.name,
          url: item.url,
          content: item.content,
          demo: item.demo,
        }

        lessons.push(lesson)

        setLesson(lessons)
      })
    }
  }

  return (
    <CourseContext.Provider
      value={{
        handleCreate,
        handleDelete,
        getLesson,
        getLinkLesson,
        getTitleLesson,
        setTitleLesson,
        setLinkLesson,
        setLessons,
        handleSubmit,
        files,
        setFiles,
        uploadModal,
        setUploadModal,
        courseImage,
        setCourseImage,
        coursePoster,
        setCoursePoster,
        color,
        setColor,
        isPin,
        setIsPin,
        isFree,
        setIsFree,
        description,
        setDescription,
        price,
        setPrice,
        excerpt,
        setExcerpt,
        name,
        setName,
        colors,
        selectLessenFile,
        getContentLesson,
        setContentLesson,
        handleEdit,
        preview,
        setPreview,
      }}
    >
      {children}
    </CourseContext.Provider>
  )
}

export default CourseContext
