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
  }
}

export default useProducts
