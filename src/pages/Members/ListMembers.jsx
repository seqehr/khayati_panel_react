// Components
import { useEffect, useState } from 'react'
import { ListMembersService } from '../../services/MemberServices'
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
      <table className='w-full overflow-hidden rounded-t-2xl'>
        <thead
          className={`${'text-right'} bg-[#80808033] text-black dark:text-white `}
        >
          <th className='px-2 py-2 pr-4'>{`نام کامل`}</th>
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
              </tr>
            </>
          ) : (
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
          )}
        </tbody>
      </table>
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
    </div>
  )
}

export default ListMembers
