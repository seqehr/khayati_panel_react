// Components
import { useEffect, useState } from 'react'

import Skeleton from 'react-loading-skeleton'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react'

// css
import 'react-loading-skeleton/dist/skeleton.css'
// icons
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import {
  AiOutlineCopyrightCircle,
  AiOutlineLeftCircle,
  AiOutlineRightCircle,
} from 'react-icons/ai'
//images
import noResultImage from '../../assets/images/no-result.gif'

//hooks
import useToken from '../../hooks/useToken'
//services
import {
  setUserJustify,
  UserJustifyListCourses,
} from '../../services/MemberServices'
import { toast } from 'react-toastify'

const JustifyMember = (props) => {
  const { token } = useToken()
  const { id: memberId } = useParams()
  const [loading, setLoading] = useState(true)
  const [skeletonItems, setSkeletonItems] = useState([])
  const [listCourses, setListCourses] = useState([])

  //paginattion
  const [perpage, setPerpage] = useState(6)
  const [page, setPage] = useState(0)
  const [totalPages, settotalPages] = useState(0)

  useEffect(() => {
    // get courses
    UserJustifyListCourses(token, memberId).then((res) => {
      setListCourses(res.data.data)
      setLoading(false)
      // pagination
      settotalPages(
        Math.ceil(
          res.data.data.length >= perpage ? res.data.data.length / perpage : 0
        )
      )
    })

    let SkeletonItems = []
    for (let index = 0; index < 6; index++) {
      SkeletonItems.push('.')

      if (index == 5) {
        setSkeletonItems(SkeletonItems)
      }
    }
  }, [])
  const setJustifyHandler = (courseId) => {
    setUserJustify(token, memberId, courseId).then((res) => {
      toast.success('مجوز با موفقیت  تغییر کرد')

      // get list again
      UserJustifyListCourses(token, memberId).then((res) => {
        setListCourses(res.data.data)
        setLoading(false)
        // pagination
        settotalPages(
          Math.ceil(
            res.data.data.length >= perpage ? res.data.data.length / perpage : 0
          )
        )
      })
    })
  }
  return (
    <>
      <div className='grid grid-cols-12 container'>
        {loading ? (
          <div className='col-span-12 grid grid-cols-12  '>
            {skeletonItems.map((element) => (
              <tr className='col-span-6  md:col-span-4 flex flex-col mb-8'>
                <td className='w-full px-4 h-44 py-2'>
                  <Skeleton className='h-full' />
                </td>
                <td className='w-full px-4 h-10 py-1'>
                  <Skeleton className='h-full' />
                </td>
                <td className='w-full px-4 h-10 py-1'>
                  <Skeleton className='h-full' />
                </td>
                <td className='w-full px-4 h-10 py-1 flex '>
                  <span className='w-[30%] pl-3'>
                    <Skeleton className='h-full' />
                  </span>
                  <span className='w-[70%] '>
                    <Skeleton className='h-full' />
                  </span>
                </td>
              </tr>
            ))}
          </div>
        ) : (
          <>
            {listCourses
              .slice(page * perpage, page * perpage + perpage)
              .map((item) => (
                <Card
                  key={item.id}
                  className='m-5 p-2 md:col-span-4 col-span-6'
                >
                  <CardHeader color='blue' className='relative h-56'>
                    <img src={item.img} className='h-full w-full' />
                  </CardHeader>
                  <CardBody className='text-center'>
                    <Typography variant='h5' className='my-4 mx-2'>
                      {item.name}
                    </Typography>
                    <Typography className='my-2 mx-2 text-right'>
                      {item.excerpt}
                    </Typography>
                  </CardBody>
                  <CardFooter
                    divider
                    className='flex items-center justify-between py-3'
                  >
                    {item.isJustified ? (
                      <Typography variant='small '>
                        <p
                          onClick={() => setJustifyHandler(item.id)}
                          className='flex bg-green-light text-white dark:bg-green-dark p-2 rounded-xl cursor-pointer hover:-translate-y-1 duration-200 ease-in-out'
                        >
                          <span className=' text-xl pl-1'>
                            <AiFillCheckCircle />
                          </span>
                          اجازه خرید این دوره را دارد
                        </p>
                      </Typography>
                    ) : (
                      <Typography variant='small '>
                        <p
                          onClick={() => setJustifyHandler(item.id)}
                          className='flex bg-red-light text-white dark:bg-red-dark p-2 rounded-xl cursor-pointer hover:-translate-y-1 duration-200 ease-in-out'
                        >
                          <span className=' text-xl pl-1'>
                            <AiFillCloseCircle />
                          </span>
                          اجازه خرید این دوره را ندارد
                        </p>
                      </Typography>
                    )}
                  </CardFooter>
                </Card>
              ))}
          </>
        )}
      </div>
      {/*________ Show No Result __________*/}
      {listCourses.length == 0 && loading == false && (
        <div className='text-center dark:text-white items-center w-full bg-background2-light dark:bg-background2-dark pb-5'>
          <img src={noResultImage} alt='' className='m-auto w-32 py-5' />
          موردی یافت نشد!
        </div>
      )}

      {/*________ Pagination buttons __________*/}
      {totalPages !== 0 && (
        <div className='p-4 justify-center flex w-full'>
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
    </>
  )
}

export default JustifyMember
