// Components
import { useEffect, useState } from 'react'
import {
  ListMembersService,
  SerchUserService,
} from '../../services/MemberServices'
import TableRow from './TableRow'
import Skeleton from 'react-loading-skeleton'
// css
import 'react-loading-skeleton/dist/skeleton.css'
import { useMemo } from 'react'
import {
  AiOutlineCopyrightCircle,
  AiOutlineLeftCircle,
  AiOutlineRightCircle,
  AiOutlineSortDescending,
} from 'react-icons/ai'
//hooks
import useToken from '../../hooks/useToken'

//images
import noResultImage from '../../assets/images/no-result.gif'
import { data } from 'jquery'
import { BiSortDown } from 'react-icons/bi'
import { RiFindReplaceLine } from 'react-icons/ri'

const ListMembers = (props) => {
  const { token } = useToken()
  const [listMembers, setListMembers] = useState([])
  //paginattion
  const [perpage, setPerpage] = useState(10)
  const [page, setPage] = useState(0)
  const [totalPages, settotalPages] = useState(0)
  const [showPaginationDots, setShowPaginationDots] = useState(true)

  const [sort, setSort] = useState('ASC')

  const [loading, setLoading] = useState(true)

  //serch
  const [serchWord, setSerchWord] = useState('')
  const [serchResult, setserchResult] = useState([])

  const serchHandler = (name) => {
    SerchUserService(token, name)
      .then((res) => {
        setserchResult(res.data.data)
        console.log(res.data.data)
      })
      .catch((ex) => {})
  }

  useEffect(() => {
    // get  members
    ListMembersService(token).then((res) => {
      setListMembers(res.data.data)
      setLoading(false)
      // pagination
      settotalPages(
        Math.ceil(
          res.data.data.length >= perpage ? res.data.data.length / perpage : 0
        )
      )
    })
  }, [])

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
          {`نام کاربر را جستجو کنید ... `}
        </label>
      </div>

      <table className='w-full overflow-hidden rounded-t-2xl'>
        <thead
          className={`${'text-right'} bg-[#80808033] text-black dark:text-white `}
        >
          <th className='px-2 py-2 pr-4'>{`نام کامل`}</th>
          <th>{`شماره دانشجویی`}</th>
          <th>{`شماره تلفن`}</th>
          <th
            onClick={() => {
              if (sort == 'ASC') {
                setSort('DES')
              } else {
                setSort('ASC')
              }
            }}
            className='flex  cursor-pointer py-2 items-center'
          >
            {`تاریخ عضویت`}{' '}
            <span>
              {' '}
              <BiSortDown
                className={`${
                  sort == 'ASC' && 'rotate-180'
                }  duration-300 ease-in-out text-2xl `}
              />
            </span>
          </th>
          <th></th>
        </thead>
        <tbody className='bg-background2-light dark:bg-background2-dark '>
          {loading ? (
            <>
              <tr>
                <td className='py-2 px-2'>
                  <Skeleton />
                </td>
                <td className='py-2 px-2'>
                  <Skeleton />
                </td>
                <td className='py-2 px-2'>
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
                <td className='py-2 px-2'>
                  <Skeleton />
                </td>
                <td className='py-2 px-2'>
                  <Skeleton />
                </td>
                <td className='py-2 px-2'>
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
                <td className='py-2 px-2'>
                  <Skeleton />
                </td>
                <td className='py-2 px-2'>
                  <Skeleton />
                </td>
                <td className='py-2 px-2'>
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
            [...listMembers]
              .sort((x, y) => {
                if (sort == 'ASC') {
                  return (
                    Math.floor(new Date(y.created_at).getTime() / 1000) -
                    Math.floor(new Date(x.created_at).getTime() / 1000)
                  )
                }
              })
              .slice(page * perpage, page * perpage + perpage)

              .map((item, i) => (
                <TableRow
                  key={i}
                  name={item.name}
                  phone={item.phone}
                  id={item.id}
                  fullDetails={item}
                />
              ))
          ) : (
            serchResult.map((item, i) => (
              <TableRow
                key={i}
                name={item.name}
                phone={item.phone}
                id={item.id}
                fullDetails={item}
              />
            ))
          )}
        </tbody>
      </table>
      {serchWord == '' && (
        <>
          {' '}
          {/*________ Show No Result __________*/}
          {listMembers.length == 0 && loading == false && (
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

export default ListMembers
