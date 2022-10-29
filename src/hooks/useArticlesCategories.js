// Context
import { useContext } from 'react'
import CategoriesContext from '../context/Articles/Categories/CategoriesContext'

const useCategories = (props) => {
  const {
    checked,
    setChecked,
    handleSubmit,
    name,
    setName,
    catlist,
    setCatlist,
    catEditable,
    setCatEditable,
    tmpName,
    setTmpName,

    handleEdit,
  } = useContext(CategoriesContext)
  return {
    checked,
    setChecked,
    handleSubmit,
    name,
    setName,
    catlist,
    setCatlist,
    catEditable,
    setCatEditable,
    tmpName,
    setTmpName,

    handleEdit,
  }
}

export default useCategories
