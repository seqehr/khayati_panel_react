// Context
import { useContext } from 'react'
import ProductsContext from '../context/Products/ProductsContext'

const useProducts = (props) => {
  const {
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
  } = useContext(ProductsContext)
  return {
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
  }
}

export default useProducts
