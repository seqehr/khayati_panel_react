import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
//images
import ArticleImageDefault from '../../../assets/images/UF_Infinity_khayati.gif'
// hooks
import useToken from '../../../hooks/useToken'
import {
  CatListService,
  CreateProductCatService,
} from '../../../services/ProductServices'

const ProductsCategoriesContext = React.createContext()
export function ProductsCategoriesContextProvider({ children }) {
  const { token } = useToken()
  const [checked, setChecked] = useState(0)
  const [name, setName] = useState('')
  const [img, setImg] = useState(ArticleImageDefault)

  const [catlist, setCatlist] = useState({
    name: 'دسته بندی ها',
    root: true,
    children: [],
  })
  const handleSubmit = () => {
    const data = {
      name,
      parent_id: checked,
      img,
    }
    if (name == '' || checked == 0) {
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
      }}
    >
      {children}
    </ProductsCategoriesContext.Provider>
  )
}

export default ProductsCategoriesContext
