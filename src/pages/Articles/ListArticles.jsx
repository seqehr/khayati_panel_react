// Components
import { useEffect, useState } from 'react'
import {
  ListArticlesService,
  DeleteArticleService,
} from '../../services/ArticleServices'
import TableRow from './TableRow'
import Skeleton from 'react-loading-skeleton'
// css
import 'react-loading-skeleton/dist/skeleton.css'
import { toast } from 'react-toastify'
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai'
//hooks
import useToken from '../../hooks/useToken'

//images
import noResultImage from '../../assets/images/no-result.gif'

const ListArticles = (props) => {
  const { token } = useToken()
  const [listArticles, setListArticles] = useState([])
  const [loading, setLoading] = useState(true)

  //paginattion
  const [perpage, setPerpage] = useState(12)
  const [page, setPage] = useState(0)
  const [totalPages, settotalPages] = useState(0)

  const [showPaginationDots, setShowPaginationDots] = useState(true)
  useEffect(() => {
    ListArticlesService(token).then((res) => {
      setListArticles(res.data.data)
      setLoading(false)
      settotalPages(
        Math.ceil(
          res.data.data.length > perpage ? res.data.data.length / perpage : 0
        )
      )
    })
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
      DeleteArticleService(token, id)
      setListArticles(listArticles.filter((i) => i.id !== id))
    }
  }
  return (
    <div>
      <table className='w-full overflow-hidden rounded-t-2xl'>
        <thead
          className={`${'text-right'} bg-[#80808033] text-black dark:text-white `}
        >
          <th className='px-2 py-2 pr-4'>{`عنوان مقاله `}</th>
          <th className='px-2 py-2 pr-4'>{`تعداد بازدید `}</th>
          <th></th>
          <th></th>
        </thead>
        <tbody className='bg-background2-light dark:bg-background2-dark '>
          {loading ? (
            <>
              <tr>
                <td className='w-3/4 py-2 px-2'>
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
                <td className='w-3/4 py-2 px-2'>
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
                <td className='w-3/4 py-2 px-2'>
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
            listArticles
              .slice(page * perpage, page * perpage + perpage)
              .map((item) => (
                <TableRow
                  name={item.name}
                  views={item.views}
                  id={item.id}
                  handleDelete={handleDelete}
                />
              ))
          )}
        </tbody>
      </table>
      {/*________ Show No Result __________*/}
      {listArticles.length == 0 && loading == false && (
        <div className='text-center dark:text-white items-center w-full bg-background2-light dark:bg-background2-dark pb-5'>
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

export default ListArticles
