// Context
import { useContext } from 'react'
import ProductsCategoriesContext from '../context/Products/Categories/ProductsCategoriesContext'

const useProductsCategories = (props) => {
  const {
    checked,
    setChecked,
    handleSubmit,
    name,
    setName,
    catlist,
    setCatlist,
    img,
    setImg,
  } = useContext(ProductsCategoriesContext)
  return {
    checked,
    setChecked,
    handleSubmit,
    name,
    setName,
    catlist,
    setCatlist,
    img,
    setImg,
  }
}

export default useProductsCategories
