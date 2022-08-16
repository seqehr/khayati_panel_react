import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

// hooks
import useToken from '../../../hooks/useToken'
import {
  CatListService,
  CreateCatService,
} from '../../../services/ArticleServices'

const CategoriesContext = React.createContext()
export function CategoriesContextProvider({ children }) {
  const { token } = useToken()
  const [checked, setChecked] = useState(0)

  const [name, setName] = useState('')
  const [catlist, setCatlist] = useState({
    name: 'دسته بندی ها',
    root: true,
    children: [],
  })

  // gett caat list
  useEffect(() => {
    CatListService(token).then((res) => {
      const categories = { ...catlist }
      categories.children = res.data.data
      setCatlist(categories)
    })
  }, [])

  const handleSubmit = () => {
    const data = {
      name,
      parent_id: checked,
    }
    if (name == '' || checked == 0) {
      toast.warn('اطلاعات ناقص است')
    } else {
      // fetch categories list again after create new category
      CreateCatService(token, data)
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
    <CategoriesContext.Provider
      value={{
        checked,
        setChecked,
        handleSubmit,
        name,
        setName,
        catlist,
        setCatlist,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  )
}

export default CategoriesContext
