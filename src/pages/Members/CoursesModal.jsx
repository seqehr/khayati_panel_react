import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import useToken from '../../hooks/useToken'
import { ListCoursesService } from '../../services/CourseServices'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react'
import { AiFillPlusCircle } from 'react-icons/ai'
import style from './TableRow.module.scss'

const CoursesModal = ({ setBuyManualHandler, setIsOpenModal }) => {
  const { token } = useToken()
  const [listCourses, setListCourses] = useState([])
  const [skeletonItems, setSkeletonItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // get courses
    ListCoursesService(token).then((res) => {
      setListCourses(res.data.data)
      setLoading(false)
    })

    let SkeletonItems = []
    for (let index = 0; index < 6; index++) {
      SkeletonItems.push('.')

      if (index == 5) {
        setSkeletonItems(SkeletonItems)
      }
    }
  }, [])
  return (
    <div className='fixed w-screen h-screen left-0 top-0  bg-black opacity-90 z-50'>
      <div className='container overflow-y-auto'>
        <>
          <div
            className={`grid grid-cols-12 container  overflow-y-auto h-screen ${style.myLink}`}
          >
            {loading ? (
              <div className='col-span-12 grid grid-cols-12   overflow-y-auto'>
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
                {listCourses.map((item) => (
                  <Card
                    key={item.id}
                    className='m-5 p-2 md:col-span-4 col-span-6'
                  >
                    <CardHeader color='blue' className='relative h-56'>
                      <img src={item.img} className='h-max w-full' />
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
                      <Typography variant='small '>
                        <p
                          onClick={() => {
                            setBuyManualHandler(item.id)
                            setIsOpenModal(false)
                          }}
                          className='flex bg-blue-light text-white px-5 py-3 dark:bg-blue-dark p-2 rounded-xl cursor-pointer hover:-translate-y-1 duration-200 ease-in-out'
                        >
                          <span className=' text-xl pl-1'>
                            <AiFillPlusCircle />
                          </span>
                          افزودن این دوره به کاربر
                        </p>
                      </Typography>
                    </CardFooter>
                  </Card>
                ))}
              </>
            )}
          </div>
        </>
      </div>
    </div>
  )
}

export default CoursesModal
