import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Navigate, useNavigate } from 'react-router-dom'

// hooks

import useToken from '../../../hooks/useToken'
// icons
import { BsChevronDown, BsChevronLeft } from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'
//services

import useUpload from '../../../hooks/useUpload'
import { AiFillFolder, AiFillFolderOpen } from 'react-icons/ai'

const TreeView = ({ explorer, showRoot }) => {
  const [expand, setExpand] = useState()
  const navigate = useNavigate()
  const { checked, setChecked, dirlist, setDirlist } = useUpload()
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
  console.log(checked)
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
      /* DeleteArticleCatService(token, id).then((res) => {
        if (res.status == 200) {
          toast.success('با موفقیت حذف شد')
          CatListService(token).then((res) => {
            const directories = { ...dirlist }
            directories.children = res.data.data
            setDirlist(directories)
          })
        } else {
          toast.error('مشکلی به وجود آمده')
        }
      }) */
    }
  }

  return (
    <div>
      <div className={` pb-1 `}>
        {explorer.root !== true ? (
          <>
            {expand ? (
              explorer.children.length == 0 ? (
                <AiFillFolder
                  className={`${
                    explorer.id == checked
                      ? 'text-ethereum-light'
                      : 'text-bitcoin-light'
                  } ease-in-out duration-500 ml-2 text-2xl mb-2 cursor-pointer inline-block `}
                />
              ) : (
                <AiFillFolderOpen
                  className={`${
                    explorer.id == checked
                      ? 'text-ethereum-light'
                      : 'text-bitcoin-light'
                  } ease-in-out duration-500 ml-2 text-2xl mb-2 cursor-pointer inline-block `}
                />
              )
            ) : (
              <AiFillFolder
                onClick={() => {
                  setChecked(explorer.id == checked ? 0 : explorer.id)
                }}
                className={`${
                  explorer.id == checked
                    ? 'text-ethereum-light'
                    : 'text-bitcoin-light'
                } ease-in-out duration-500 ml-2 text-2xl mb-2 cursor-pointer inline-block `}
              />
            )}
          </>
        ) : (
          showRoot == true && (
            <AiFillFolderOpen
              onClick={() => {
                setChecked(null)
              }}
              className={`ease-in-out duration-500 ${
                explorer.id == checked
                  ? 'text-ethereum-light'
                  : 'text-bitcoin-light'
              } ml-2 text-2xl mb-2 cursor-pointer inline-block `}
            />
          )
        )}
        <span
          className={`ease-in-out duration-500 ${
            explorer.id == checked ? 'text-ethereum-light font-bold' : ''
          } cursor-pointer select-none text-black dark:text-white`}
          onClick={() => {
            setChecked(explorer.id)
          }}
          onDoubleClick={() => setExpand(!expand)}
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
          expand ? (
            <BsChevronDown
              onClick={() => setExpand(!expand)}
              className='inline mr-1 text-xs  drop-shadow-md cursor-pointer  text-black dark:text-white'
            />
          ) : (
            <BsChevronLeft
              onClick={() => setExpand(!expand)}
              className='inline mr-1 text-xs drop-shadow-md cursor-pointer  text-black dark:text-white'
            />
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
