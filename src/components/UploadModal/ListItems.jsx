import React, { useEffect, useState } from 'react'
import * as shamsi from 'shamsi-date-converter'
//icons
import {
  AiOutlineCopyrightCircle,
  AiOutlineLeftCircle,
  AiOutlineRightCircle,
} from 'react-icons/ai'
//images
import noResultImage from '../../assets/images/no-result.gif'
import defaulImag from '../../assets/images/no-image-icon-23485.png'
import defaulImagMedia from '../../assets/images/video-file-icon-20.png'
// css
import styles from './UploadModal.module.scss'
// components
import Filters from './Filters'
//hooks
import useUpload from '../../hooks/useUpload'

const ListItems = ({
  getDetails,
  loading,
  perpage,
  page,
  totalPages,
  setPage,
}) => {
  const { filter, setFilter, files, dirFiles, showDirFiles } = useUpload()

  return (
    <div
      className={` md:col-span-8 md:mr-4  md:mt-0 col-span-12 bg-background2-light dark:bg-background2-dark rounded-lg p-4 grid grid-cols-12 h-max mt-5`}
    >
      {/*filters - serch box - time filter*/}
      <Filters setFilter={setFilter} filter={filter} />

      {loading == false ? (
        showDirFiles ? (
          [...dirFiles]
            .sort((x, y) => {
              if (filter == 'DateAs') {
                return y.id - x.id
              }
              if (filter == 'DateDes') {
                return x.id - y.id
              }
            })
            .slice(page * perpage, page * perpage + perpage)
            .map((item) => (
              <div
                key={item.id}
                className={` xl:col-span-3 sm:col-span-4 col-span-12 p-2 items-center flex justify-center  `}
              >
                <div
                  data-title={item.name}
                  className={`${styles.itemHover} relative items-center m-auto`}
                  onClick={() =>
                    getDetails({
                      name: item.name,
                      type: item.name.split('.').pop(),
                      link: item.url,
                      itemId: item.id,
                    })
                  }
                >
                  <img
                    src={
                      item.name.split('.').pop() == 'jpg' ||
                      item.name.split('.').pop() == 'png'
                        ? item.url
                        : defaulImagMedia
                    }
                    className={` p-2 hover:p-1  ease-in-out duration-500 cursor-pointer shadow-lg rounded-lg  `}
                  />
                </div>
              </div>
            ))
        ) : (
          [...files]
            .sort((x, y) => {
              if (filter == 'DateAs') {
                return y.id - x.id
              }
              if (filter == 'DateDes') {
                return x.id - y.id
              }
            })
            .slice(page * perpage, page * perpage + perpage)
            .map((item) => (
              <div
                key={item.id}
                className={` xl:col-span-3 sm:col-span-4 col-span-12 p-2 items-center flex justify-center  `}
              >
                <div
                  data-title={item.name}
                  className={`${styles.itemHover} relative items-center m-auto`}
                  onClick={() =>
                    getDetails({
                      name: item.name,
                      type: item.name.split('.').pop(),
                      link: item.url,
                      itemId: item.id,
                    })
                  }
                >
                  <img
                    src={
                      item.name.split('.').pop() == 'jpg' ||
                      item.name.split('.').pop() == 'png'
                        ? item.url
                        : defaulImagMedia
                    }
                    className={` p-2 hover:p-1  ease-in-out duration-500 cursor-pointer shadow-lg rounded-lg  `}
                  />
                </div>
              </div>
            ))
        )
      ) : (
        <div className='col-span-12 grid grid-cols-12'>
          <div
            className={` xl:col-span-3 sm:col-span-4 col-span-12 p-2 items-center flex justify-center  `}
          >
            <div
              data-title='عکس صفحه اصلی'
              className={`${styles.itemHover} relative items-center m-auto`}
            >
              <img
                src={defaulImag}
                className={` p-2 hover:p-1  ease-in-out duration-500 cursor-pointer shadow-lg rounded-lg  `}
              />
            </div>
          </div>
          <div
            className={` xl:col-span-3 sm:col-span-4 col-span-12 p-2 items-center flex justify-center  `}
          >
            <div
              data-title='عکس صفحه اصلی'
              className={`${styles.itemHover} relative items-center m-auto`}
            >
              <img
                src={defaulImag}
                className={` p-2 hover:p-1  ease-in-out duration-500 cursor-pointer shadow-lg rounded-lg  `}
              />
            </div>
          </div>
          <div
            className={` xl:col-span-3 sm:col-span-4 col-span-12 p-2 items-center flex justify-center  `}
          >
            <div
              data-title='عکس صفحه اصلی'
              className={`${styles.itemHover} relative items-center m-auto`}
            >
              <img
                src={defaulImag}
                className={` p-2 hover:p-1  ease-in-out duration-500 cursor-pointer shadow-lg rounded-lg  `}
              />
            </div>
          </div>
          <div
            className={` xl:col-span-3 sm:col-span-4 col-span-12 p-2 items-center flex justify-center  `}
          >
            <div
              data-title='عکس صفحه اصلی'
              className={`${styles.itemHover} relative items-center m-auto`}
            >
              <img
                src={defaulImag}
                className={` p-2 hover:p-1  ease-in-out duration-500 cursor-pointer shadow-lg rounded-lg  `}
              />
            </div>
          </div>
        </div>
      )}
      {/*________ Show No Result __________*/}
      {files.length == 0 && loading == false && (
        <div className='text-center items-center dark:text-white w-full bg-background2-light dark:bg-background2-dark pb-5'>
          <img src={noResultImage} alt='' className='m-auto w-32 py-5 ' />
          موردی یافت نشد!
        </div>
      )}
      {/*________ Pagination buttons __________*/}
      {totalPages !== 0 && (
        <div className='p-4 justify-center flex w-full col-span-12'>
          <button
            disabled={page == 0 || totalPages == 0}
            onClick={() => {
              setPage(page - 1)
            }}
          >
            <AiOutlineRightCircle
              className={` ${
                page == 0 || totalPages == 0
                  ? 'text-gray-light'
                  : 'text-bitcoin-light'
              } text-2xl drop-shadow-md mx-1`}
            />
          </button>{' '}
          {[...Array(totalPages)].map((item, i) => (
            <p
              className={`${
                i !== page ? 'text-gray-light' : 'text-bitcoin-light'
              } text-md drop-shadow-md mx-1 `}
            >
              {i + 1}
            </p>
          ))}
          <button
            disabled={page == totalPages - 1 || totalPages == 0}
            onClick={() => {
              setPage(page + 1)
            }}
          >
            <AiOutlineLeftCircle
              className={`${
                page == totalPages - 1 || totalPages == 0
                  ? 'text-gray-light'
                  : 'text-bitcoin-light'
              } text-2xl drop-shadow-md mx-1 `}
            />
          </button>
        </div>
      )}
    </div>
  )
}

export default ListItems
