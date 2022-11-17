// Components
import TableRow from './TableRow'
import React, { useEffect, useState } from 'react'

import {
  DeleteCoursesService,
  ListCoursesService,
  SerchCourseService,
} from '../../services/CourseServices'
import Skeleton from 'react-loading-skeleton'
// css
import 'react-loading-skeleton/dist/skeleton.css'
import { toast } from 'react-toastify'
//hooks
import useToken from '../../hooks/useToken'
//icons
import {
  AiOutlineCopyrightCircle,
  AiOutlineLeftCircle,
  AiOutlineRightCircle,
} from 'react-icons/ai'
//images
import noResultImage from '../../assets/images/no-result.gif'
import { RiFindReplaceLine } from 'react-icons/ri'

const ListCourses = (props) => {
  const { token } = useToken()
  const [listCourses, setListCourses] = useState([])
  const [loading, setLoading] = useState(true)
  //paginattion
  const [perpage, setPerpage] = useState(10)
  const [page, setPage] = useState(0)
  const [totalPages, settotalPages] = useState(0)
  const [showPaginationDots, setShowPaginationDots] = useState(true)

  //serch
  const [serchWord, setSerchWord] = useState('')
  const [serchResult, setserchResult] = useState([])

  const serchHandler = (name) => {
    SerchCourseService(token, name)
      .then((res) => {
        setserchResult(res.data.data)
        console.log(res.data.data)
      })
      .catch((ex) => {})
  }

  const fetchData = () => {
    ListCoursesService(token).then((res) => {
      setListCourses(res.data.data)
      setLoading(false)
      // pagination
      settotalPages(
        Math.ceil(
          res.data.data.length >= perpage ? res.data.data.length / perpage : 0
        )
      )
    })
  }
  useEffect(() => {
    // get courses
    fetchData()
  }, [])
  const handleDelete = (id) => {
    toast.error(
      <p dir='rtl'>
        <span className='pl-2'>مجدد تایید کنید</span>
        <span
          onClick={() => confirmDelete()}
          className=' p-2 px-3  bg-red-light rounded-lg text-white hover:border-2 text-center ease-in-out duration-300'
        >
          حذف شود!
        </span>
      </p>
    )
    const confirmDelete = () => {
      DeleteCoursesService(token, id)
      setListCourses(listCourses.filter((i) => i.id !== id))
    }
  }

  return (
    <div>
      <div className=' col-span-12  lg:pl-5 mt-5 lg:mt-0  relative z-0 w-full mb-6 group'>
        <input
          type='text'
          name='Price'
          className='block pl-10 py-2.5 px-3 w-full relative text-sm text-gray-900 bg-transparent border-2 rounded-xl shadow-md  border-gray-light appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer '
          placeholder=' '
          required=''
          autoComplete='off'
          value={serchWord}
          onChange={(e) => {
            setSerchWord(e.target.value)
            serchHandler(e.target.value)
          }}
        />
        <button className='absolute left-4 lg:left-8 top-3'>
          <RiFindReplaceLine className='text-xl ' />
        </button>
        <label
          for='Price'
          className={` text-gray-light font-medium mr-1 bg-background-light dark:bg-background2-dark peer-focus:font-medium absolute text-sm  dark:text-white  duration-300 transform -translate-y-6 top-3 right-0  origin-[0] peer-focus:text-gray-light  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 peer-focus:z-[999] px-2 rounded-lg peer-placeholder-shown:-z-10 z-30 peer-placeholder-shown:text-black dark:peer-placeholder-shown:text-white`}
        >
          {`نام دوره را جستجو کنید ... `}
        </label>
      </div>
      <table className='w-full overflow-hidden rounded-2xl'>
        <thead
          className={`${'text-right'} bg-[#80808033] text-black dark:text-white `}
        >
          <th className='px-2 py-2 pr-4'>{`نام دوره`}</th>
          <th>{`تاریخ ایجاد`}</th>
          <th>{`تعداد بازدید`}</th>

          <th></th>
        </thead>
        <tbody className='bg-background2-light dark:bg-background2-dark '>
          {loading ? (
            <>
              <tr>
                <td className=' py-2 px-2'>
                  <Skeleton />
                </td>
                <td className=' py-2 px-2'>
                  <Skeleton />
                </td>
                <td className=' py-2 px-2'>
                  <Skeleton />
                </td>
                <td className=' py-2 px-2'>
                  <Skeleton />
                </td>
              </tr>
              <tr>
                <td className=' py-2 px-2'>
                  <Skeleton />
                </td>
                <td className=' py-2 px-2'>
                  <Skeleton />
                </td>
                <td className=' py-2 px-2'>
                  <Skeleton />
                </td>
                <td className=' py-2 px-2'>
                  <Skeleton />
                </td>
              </tr>
              <tr>
                <td className=' py-2 px-2'>
                  <Skeleton />
                </td>
                <td className=' py-2 px-2'>
                  <Skeleton />
                </td>
                <td className=' py-2 px-2'>
                  <Skeleton />
                </td>
                <td className=' py-2 px-2'>
                  <Skeleton />
                </td>
              </tr>
            </>
          ) : serchWord == '' ? (
            listCourses
              .slice(page * perpage, page * perpage + perpage)
              .map((item) => (
                <TableRow
                  name={item.name}
                  date={item.update}
                  views={item.views}
                  id={item.id}
                  handleDelete={handleDelete}
                />
              ))
          ) : (
            serchResult.map((item) => (
              <TableRow
                name={item.name}
                date={item.update}
                views={item.views}
                id={item.id}
                handleDelete={handleDelete}
              />
            ))
          )}
        </tbody>
      </table>
      {serchWord == '' && (
        <>
          {/*________ Show No Result __________*/}
          {listCourses.length == 0 && loading == false && (
            <div className='text-center dark:text-white items-center w-full bg-background2-light dark:bg-background2-dark pb-5'>
              <img src={noResultImage} alt='' className='m-auto w-32 py-5' />
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
                  page <= totalPages - 2 && setShowPaginationDots(true)
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
                  i > page - 3 &&
                  i <= totalPages - 3 && (
                    <p
                      className={`${
                        i !== page ? 'text-gray-light' : 'text-bitcoin-light'
                      } text-md drop-shadow-md mx-1 `}
                    >
                      {i + 1}
                    </p>
                  )
              )}

              {showPaginationDots && <> . . . </>}
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
                  page >= totalPages - 3 && setShowPaginationDots(false)
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
        </>
      )}
    </div>
  )
}

export default ListCourses
