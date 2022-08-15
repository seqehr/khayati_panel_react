import React, { useEffect, useState } from 'react'
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
  UploadedFiles,
} from '../../services/ProductServices'

const ProductsContext = React.createContext()
export function ProductsContextProvider({ children }) {
  const { token } = useToken()
  const [files, setFiles] = useState([])
  const [categorries, setCategorries] = useState([])
  const [uploadModal, setUploadModal] = useState(false)

  const [price, setPrice] = useState('')
  const [productImage, setProductImage] = useState(ArticleImageDefault)
  const [catId, setCatId] = useState(1)
  const [description, setDescription] = useState('<p></p>')
  const [name, setName] = useState('')
  //categories states
  const { catlist, setCatlist } = useProductsCategories()
  const [refresh, setRefresh] = useState(false)

  //validate
  let ProductImage = ''
  const handleSubmit = () => {
    ProductImage = productImage.replace(`${config.HttpBaseUrl}/storage/`, '')

    const data = {
      name,
      cat_id: catId,
      img: ProductImage,
      content: description,
      price,
    }
    if (
      productImage !==
      '/static/media/UF_Infinity_khayati.2cb6b144dade70ede5a5.gif'
    ) {
      if (catId !== 0) {
        if (description !== '') {
          if (name !== '') {
            if (price !== '') {
              AddProductService(token, data).then((res) => {
                if (res.status == 200) {
                  toast.success('محصول با موفقیت ساخته شد')
                }
              })
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
      setTimeout(() => {
        setRefresh(!refresh)
      }, 100)
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
        catId,
        setCatId,
        description,
        setDescription,
        name,
        setName,
        catlist,
        setCatlist,
        refresh,
        setRefresh,
        handleSubmit,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContext
