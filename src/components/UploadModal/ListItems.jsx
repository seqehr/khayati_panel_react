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
  const {
    filter,
    setFilter,
    files,
    dirFiles,
    showDirFiles,
    serchResult,
    serchWord,
    perpageD,
    pageD,
    totalPagesD,
    setPageD,
  } = useUpload()

  if (serchWord) {
    setPage(0)
  }
  return (
    <div
      className={` md:col-span-8 md:mr-4  md:mt-0 col-span-12 bg-background2-light dark:bg-background2-dark rounded-lg p-4 grid grid-cols-12 h-max mt-5`}
    >
      {/*filters - serch box - time filter*/}
      <Filters setFilter={setFilter} filter={filter} />

      {loading == false ? (
        serchWord == '' ? (
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
              .slice(pageD * perpageD, pageD * perpageD + perpageD)
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
                    <div className='flex flex-col p-2 hover:p-1  ease-in-out duration-500 cursor-pointer shadow-lg rounded-lg '>
                      {' '}
                      <img
                        src={
                          item.name.split('.').pop() == 'jpg' ||
                          item.name.split('.').pop() == 'png'
                            ? item.url
                            : defaulImagMedia
                        }
                        className={` `}
                      />
                      <p
                        dir='ltr'
                        className={`${styles.nameFile} text-center `}
                      >
                        {item.name.slice(0, 19)}{' '}
                        {item.name.length > 19 && '...'}
                      </p>
                    </div>
                  </div>
                </div>
              ))
          )
        ) : serchResult.length == 0 ? (
          <p className='col-span-12 text-center text-bitcoin-light font-bold animate-pulse'>
            چیزی یافت نشد
          </p>
        ) : (
          [...serchResult]
            .sort((x, y) => {
              if (filter == 'DateAs') {
                return y.id - x.id
              }
              if (filter == 'DateDes') {
                return x.id - y.id
              }
            })

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
                  <div className='flex flex-col p-2 hover:p-1  ease-in-out duration-500 cursor-pointer shadow-lg rounded-lg '>
                    {' '}
                    <img
                      src={
                        item.name.split('.').pop() == 'jpg' ||
                        item.name.split('.').pop() == 'png'
                          ? item.url
                          : defaulImagMedia
                      }
                      className={` `}
                    />
                    <p dir='ltr' className={`${styles.nameFile} text-center `}>
                      {item.name.slice(0, 19)} {item.name.length > 19 && '...'}
                    </p>
                  </div>
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
        <div className='text-center col-span-12 items-center dark:text-white w-full bg-background2-light dark:bg-background2-dark pb-5'>
          <img src={noResultImage} alt='' className='m-auto w-32 py-5 ' />
          موردی یافت نشد!
        </div>
      )}
      {/*________ Pagination buttons __________*/}
      {showDirFiles ? (
        <div className='p-4 justify-center flex w-full col-span-12'>
          <button
            disabled={pageD == 0 || totalPagesD == 0}
            onClick={() => {
              setPageD(pageD - 1)
            }}
          >
            <AiOutlineRightCircle
              className={` ${
                pageD == 0 || totalPagesD == 0
                  ? 'text-gray-light'
                  : 'text-bitcoin-light'
              } text-2xl drop-shadow-md mx-1`}
            />
          </button>
          {[...Array(totalPagesD)].map(
            (item, i) =>
              i <= pageD &&
              i > pageD - 3 && (
                <p
                  className={`${
                    i !== pageD ? 'text-gray-light' : 'text-bitcoin-light'
                  } text-md drop-shadow-md mx-1 `}
                >
                  {i + 1}
                </p>
              )
          )}
          {'  '} . . . {'  '}
          {[...Array(totalPagesD)].map(
            (item, i) =>
              i >= totalPagesD - 2 && (
                <p
                  className={`${
                    i !== pageD ? 'text-gray-light' : 'text-bitcoin-light'
                  } text-md drop-shadow-md mx-1 `}
                >
                  {i + 1}
                </p>
              )
          )}
          <button
            disabled={pageD == totalPagesD - 1 || totalPagesD == 0}
            onClick={() => {
              setPageD(pageD + 1)
            }}
          >
            <AiOutlineLeftCircle
              className={`${
                pageD == totalPagesD - 1 || totalPagesD == 0
                  ? 'text-gray-light'
                  : 'text-bitcoin-light'
              } text-2xl drop-shadow-md mx-1 `}
            />
          </button>
        </div>
      ) : (
        serchWord == '' &&
        totalPages !== 0 && (
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
            </button>
            {[...Array(totalPages)].map(
              (item, i) =>
                i <= page &&
                i > page - 3 && (
                  <p
                    className={`${
                      i !== page ? 'text-gray-light' : 'text-bitcoin-light'
                    } text-md drop-shadow-md mx-1 `}
                  >
                    {i + 1}
                  </p>
                )
            )}
            {'  '} . . . {'  '}
            {[...Array(totalPages)].map(
              (item, i) =>
                i >= totalPages - 2 && (
                  <p
                    className={`${
                      i !== page ? 'text-gray-light' : 'text-bitcoin-light'
                    } text-md drop-shadow-md mx-1 `}
                  >
                    {i + 1}
                  </p>
                )
            )}
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
        )
      )}
    </div>
  )
}

export default ListItems
