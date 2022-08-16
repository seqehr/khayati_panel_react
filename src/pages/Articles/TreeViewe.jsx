import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
// hooks
import useCategories from '../../hooks/useCategories'
import useToken from '../../hooks/useToken'
// icons
import { BsChevronDown, BsChevronLeft } from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'
//services
import {
  CatListService,
  DeleteArticleCatService,
} from '../../services/ArticleServices'
import { Link } from 'react-router-dom'

const TreeView = ({ explorer, showRoot }) => {
  const [expand, setExpand] = useState()
  const { checked, setChecked, catlist, setCatlist } = useCategories()
  const { token } = useToken()

  useEffect(() => {
    if (explorer.root == true) {
      setExpand(true)
    }
  }, [])

  const deleteHandler = (id) => {
    toast.error(
      <p dir='rtl'>
        <span className='pl-2'>مجدد تایید کنید</span>
        <span
          onClick={() => confirmDelete(id)}
          className=' p-2 px-3  bg-red-light rounded-lg text-white hover:border-2 text-center ease-in-out duration-300'
        >
          حذف شود!
        </span>
      </p>
    )
    const confirmDelete = (id) => {
      DeleteArticleCatService(token, id).then((res) => {
        if (res.status == 200) {
          toast.success('با موفقیت حذف شد')
          CatListService(token).then((res) => {
            const categories = { ...catlist }
            categories.children = res.data.data
            setCatlist(categories)
          })
        } else {
          toast.error('مشکلی به وجود آمده')
        }
      })
    }
  }
  console.log(showRoot)
  return (
    <div>
      <div className={` pb-1 `}>
        {explorer.root !== true ? (
          <>
            {showRoot == true && (
              <button
                onClick={() => deleteHandler(explorer.id)}
                className='ml-2 shadow-md cursor-pointer text-red-light dark:text-red-dark '
                type={'checkbox'}
              >
                <RiDeleteBin6Line />
              </button>
            )}
            <input
              checked={checked == explorer.id}
              onClick={() => {
                setChecked(explorer.id == checked ? 0 : explorer.id)
              }}
              className='ml-2 shadow-md cursor-pointer '
              type={'checkbox'}
            />
          </>
        ) : (
          showRoot == true && (
            <input
              checked={checked == explorer.id}
              onClick={() => {
                setChecked(null)
              }}
              className='ml-2 shadow-md cursor-pointer '
              type={'checkbox'}
            />
          )
        )}
        <span
          className='cursor-context-menu hover:animate-pulse  text-black dark:text-white'
          onClick={() => setExpand(!expand)}
        >
          {explorer.children.length == 0 &&
          showRoot == false &&
          explorer.root ? (
            <div className='flex flex-col justify-center text-center items-center'>
              <p className='py-5  text-bitcoin-light'>دسته بندی وجود ندارد</p>
              <Link
                className='bg-bitcoin-light text-white p-2 px-5 rounded-xl'
                to={'/article/category/add'}
                target={'_blank'}
              >
                از اینجا یک دسته بندی ایجاد کنید
              </Link>
            </div>
          ) : (
            explorer.name
          )}
        </span>
        {explorer.children.length !== 0 ? (
          expand ? (
            <BsChevronDown className='inline mr-1 text-xs  text-black dark:text-white' />
          ) : (
            <BsChevronLeft className='inline mr-1 text-xs  text-black dark:text-white' />
          )
        ) : (
          <></>
        )}

        <br />
        <div style={{ display: expand ? 'block' : 'none', paddingRight: 15 }}>
          {explorer.children.map((explore) => (
            <TreeView
              showRoot={showRoot}
              key={explore.name}
              explorer={explore}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TreeView
