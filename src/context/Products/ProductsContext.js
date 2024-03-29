import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'
//services
import config from '../../services/config.json'
//images
import ArticleImageDefault from '../../assets/images/UF_Infinity_khayati.gif'
// hooks
import useToken from '../../hooks/useToken'
import useProductsCategories from '../../hooks/useProductsCategories'
import {
  AddProductService,
  CatListService,
  EditProductService,
  UploadedFiles,
} from '../../services/ProductServices'

const ProductsContext = React.createContext()
export function ProductsContextProvider({ children }) {
  const navigate = useNavigate()
  const { token } = useToken()
  const [files, setFiles] = useState([])
  const [categorries, setCategorries] = useState([])
  const [uploadModal, setUploadModal] = useState(0)

  const [price, setPrice] = useState('')
  const [productImage, setProductImage] = useState(ArticleImageDefault)
  const [description, setDescription] = useState('<p></p>')
  const [name, setName] = useState('')
  //gallery
  const [ProductImages, setProductImages] = useState([])
  //categories states
  const { catlist, setCatlist, checked, setChecked } = useProductsCategories()
  const [refresh, setRefresh] = useState(false)

  //galery
  const setProductsImagesHandler = (url) => {
    const images = [...ProductImages]
    images.push(url)
    setProductImages(images)
  }
  //validate
  let formatedProductImage = ''
  let FormatedProductImages = []
  const validator = () => {
    if (
      formatedProductImage.includes('/static/media/UF_Infinity_khayati') !==
      true
    ) {
      if (checked !== 0) {
        if (description !== '') {
          if (name !== '') {
            if (price !== 0) {
              return true
            } else {
              toast.warn('لطفا قیمت  محصول را وارد کنید')
            }
          } else {
            toast.warn('لطفا نام  محصول را بنویسید')
          }
        } else {
          toast.warn('لطفا توضیحات را  بنویسید')
        }
      } else {
        toast.warn('لطفا دسته بندی را انتخاب کنید')
      }
    } else {
      toast.warn('لطفا عکس مقاله را انتخاب کنید')
    }
  }
  const handleSubmit = () => {
    formatedProductImage = productImage.replace(
      `${config.HttpBaseUrl}/storage/`,
      ''
    )
    ProductImages.map((i) => {
      FormatedProductImages.push(
        i.replace(`${config.HttpBaseUrl}/storage/`, '')
      )
    })

    const data = {
      name,
      cat_id: checked,
      img: formatedProductImage,
      content: description,
      price,
      gallery: JSON.stringify(FormatedProductImages),
    }

    if (validator() == true) {
      AddProductService(token, data).then((res) => {
        if (res.status == 200) {
          toast.success('محصول با موفقیت ساخته شد')
          navigate('/products')
        }
      })
    }
  }
  const handleEdit = (singleId) => {
    formatedProductImage = productImage.replace(
      `${config.HttpBaseUrl}/storage/`,
      ''
    )
    ProductImages.map((i) => {
      FormatedProductImages.push(
        i.replace(`${config.HttpBaseUrl}/storage/`, '')
      )
    })
    const data = {
      name,
      cat_id: checked,
      img: formatedProductImage,
      content: description,
      price,
      gallery: JSON.stringify(FormatedProductImages),
    }

    if (validator() == true) {
      EditProductService(token, data, singleId).then((res) => {
        if (res.status == 200) {
          toast.success('محصول با موفقیت ویرایش شد')
        }
      })
    }
  }

  const handleGalleryImageDelete = (index) => {
    const productImages = [...ProductImages]
    const img = productImages[index]
    const filteredProductImages = productImages.filter(
      (t, Index) => Index !== index
    )
    setProductImages(filteredProductImages)

    toast.success(` با موفقیت حذف شد`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
  useEffect(() => {
    // get uploaded files
    UploadedFiles(token).then((res) => {
      setFiles(res.data.data)
    })
    // get categories
    CatListService(token).then((res) => {
      setCategorries(res.data.data)
    })
    // cats
    CatListService(token).then((res) => {
      const categories = { ...catlist }
      categories.children = res.data.data
      setCatlist(categories)
    })
  }, [])

  return (
    <ProductsContext.Provider
      value={{
        files,
        setFiles,
        categorries,
        setCategorries,
        uploadModal,
        setUploadModal,
        price,
        setPrice,
        productImage,
        setProductImage,
        checked,

        description,
        setDescription,
        name,
        setName,
        catlist,
        setCatlist,
        refresh,
        setRefresh,
        handleSubmit,
        ProductImages,
        setProductImages,
        setProductsImagesHandler,
        handleEdit,
        handleGalleryImageDelete,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContext
