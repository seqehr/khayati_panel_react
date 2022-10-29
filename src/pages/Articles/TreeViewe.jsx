import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Navigate, useNavigate } from 'react-router-dom'

// hooks
import useArticlesCategories from '../../hooks/useArticlesCategories'
import useToken from '../../hooks/useToken'
// icons
import { BsChevronDown, BsChevronLeft } from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'
//services
import {
  CatListService,
  DeleteArticleCatService,
} from '../../services/ArticleServices'
import { FiEdit } from 'react-icons/fi'

const TreeView = ({ explorer, showRoot }) => {
  const [expand, setExpand] = useState()
  const navigate = useNavigate()
  const {
    checked,
    setChecked,
    catlist,
    setCatlist,
    setCatEditable,
    setTmpImg,
    tmpName,
    setTmpName,
    tmpImg,
  } = useArticlesCategories()
  const { token } = useToken()
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    if (explorer.root == true) {
      setExpand(true)
    }

    setTimeout(() => {
      setLoaded(true)
    }, 2000)
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
  return (
    <div>
      <div className={` pb-1 `}>
        {explorer.root !== true ? (
          <>
            {showRoot == true && explorer.name !== 'news' ? (
              <>
                <button
                  onClick={() => deleteHandler(explorer.id)}
                  className='ml-2 shadow-md cursor-pointer text-red-light dark:text-red-dark '
                  type={'checkbox'}
                >
                  <RiDeleteBin6Line />
                </button>
                <button
                  onClick={() => {
                    setCatEditable(explorer)
                    setTmpName(explorer.name)
                    setTmpImg(explorer.img)
                  }}
                  className='ml-2 shadow-md cursor-pointer text-green-dark dark:text-red-dark '
                  type={'checkbox'}
                >
                  <FiEdit />
                </button>
              </>
            ) : (
              <input
                checked={checked == explorer.id}
                onClick={() => {
                  setChecked(explorer.id == checked ? 0 : explorer.id)
                }}
                className='ml-2 shadow-md cursor-pointer '
                type={'checkbox'}
              />
            )}
            <></>
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
          loaded == true &&
          explorer.root ? (
            <div className='flex flex-col justify-center text-center items-center'>
              <p className='py-5  text-bitcoin-light'>دسته بندی وجود ندارد</p>
              <p
                onClick={() => {
                  toast.error(
                    <p dir='rtl' className='flext'>
                      <span className='pl-2'>اطلاعات ذخیر نشدند</span>
                      <span
                        onClick={() => navigate('/article/category/add')}
                        className=' p-2 px-3 z-50  bg-red-light rounded-lg text-white hover:border-2 text-center ease-in-out duration-300'
                      >
                        خروج !
                      </span>
                    </p>
                  )
                }}
                className='bg-bitcoin-light text-white p-2 px-5 rounded-xl cursor-pointer'
              >
                از اینجا یک دسته بندی ایجاد کنید
              </p>
            </div>
          ) : (
            explorer.name
          )}
        </span>
        {explorer.children.length !== 0 ? (
          explorer.root == true &&
          (expand ? (
            <BsChevronDown className='inline mr-1 text-xs  text-black dark:text-white' />
          ) : (
            <BsChevronLeft className='inline mr-1 text-xs  text-black dark:text-white' />
          ))
        ) : (
          <></>
        )}

        <br />
        {/* TreeView Active */}
        {/* <div style={{ display: expand ? 'block' : 'none', paddingRight: 15 }}>
          {explorer.children.map((explore) => (
            <TreeView
              showRoot={showRoot}
              key={explore.name}
              explorer={explore}
            />
          ))}
        </div>*/}

        <div style={{ display: expand ? 'block' : 'none', paddingRight: 15 }}>
          {explorer.children.map(
            (explore) =>
              explorer.root == true && (
                <TreeView
                  showRoot={showRoot}
                  key={explore.name}
                  explorer={explore}
                />
              )
          )}
        </div>
      </div>
    </div>
  )
}

export default TreeView
