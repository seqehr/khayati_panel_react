import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
//images
import ArticleImageDefault from '../../../assets/images/UF_Infinity_khayati.gif'
// hooks
import useToken from '../../../hooks/useToken'
import {
  CatListService,
  CreateProductCatService,
  EditProductCatService,
} from '../../../services/ProductServices'
//services
import config from '../../../services/config.json'

const ProductsCategoriesContext = React.createContext()
export function ProductsCategoriesContextProvider({ children }) {
  const { token } = useToken()
  const [checked, setChecked] = useState(null)
  const [name, setName] = useState('')
  const [img, setImg] = useState(ArticleImageDefault)

  //edit cats states
  const [catEditable, setCatEditable] = useState('')
  const [tmpName, setTmpName] = useState('')
  const [tmpImg, setTmpImg] = useState(ArticleImageDefault)

  const [catlist, setCatlist] = useState({
    name: 'دسته بندی ها',
    root: true,
    children: [],
  })
  const handleSubmit = () => {
    const Image = img.replace(`${config.HttpBaseUrl}/storage/`, '')
    const data = {
      name,
      parent_id: null,
      img: Image,
    }
    if (name == '' || img == ArticleImageDefault) {
      toast.warn('اطلاعات ناقص است')
    } else {
      // fetch categories list again after create new category
      CreateProductCatService(token, data)
        .then((res) => {
          CatListService(token).then((res) => {
            const categories = { ...catlist }
            categories.children = res.data.data
            setCatlist(categories)
          })
          toast.success('دسته بندی با موفقیت ایجاد شد')
          // reset inputs
          setChecked(0)
          setName('')
          setImg(ArticleImageDefault)
        })
        .catch((ex) => {
          console.log(ex)
        })
    }
  }
  const handleEdit = () => {
    const Image = tmpImg.replace(`${config.HttpBaseUrl}/storage/`, '')
    const data = {
      name: tmpName,
      parent_id: null,
      img: tmpImg,
    }
    if (tmpName == '' || tmpImg == ArticleImageDefault) {
      toast.warn('اطلاعات ناقص است')
    } else {
      // fetch categories list again after create new category
      EditProductCatService(token, data, catEditable.id)
        .then((res) => {
          CatListService(token).then((res) => {
            const categories = { ...catlist }
            categories.children = res.data.data
            setCatlist(categories)
          })
          toast.success('دسته بندی با موفقیت ویرایش شد')
          // reset inputs
          setChecked(0)
          setTmpName('')
          setTmpImg(ArticleImageDefault)
        })
        .catch((ex) => {
          console.log(ex)
        })
    }
  }
  return (
    <ProductsCategoriesContext.Provider
      value={{
        checked,
        setChecked,
        handleSubmit,
        name,
        setName,
        catlist,
        setCatlist,
        img,
        setImg,
        catEditable,
        setCatEditable,
        tmpName,
        setTmpName,
        tmpImg,
        setTmpImg,
        handleEdit,
      }}
    >
      {children}
    </ProductsCategoriesContext.Provider>
  )
}

export default ProductsCategoriesContext
