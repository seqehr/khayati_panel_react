// Context
import { useContext } from 'react'
import CategoriesContext from '../context/Categories/CategoriesContext'

const useCategories = (props) => {
  const {
    checked,
    setChecked,
    handleSubmit,
    name,
    setName,
    catlist,
    setCatlist,
  } = useContext(CategoriesContext)
  return {
    checked,
    setChecked,
    handleSubmit,
    name,
    setName,
    catlist,
    setCatlist,
  }
}

export default useCategories
