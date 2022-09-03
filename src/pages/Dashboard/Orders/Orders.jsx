import DashboardBox from '../DashboardBox'

// Icons
import { HiShoppingCart } from 'react-icons/hi'
// hooks
import useDashboard from '../../../hooks/useDashboard'
import { Link } from 'react-router-dom'
const Orders = () => {
  const { data } = useDashboard()
  return (
    <div>
      <DashboardBox extraClasses='mb-10'>
        <div className={` flex items-center dark:text-white`}>
          <HiShoppingCart
            className={`${data.orders > 1 && 'animate-bounce'}
             text-bitcoin-light text-3xl ml-2  `}
          />
          تعداد سفارشات :{' '}
          <span
            className={`${data.orders > 4 && 'text-red-light'} ${
              data.orders > 1 && 'animate-pulse'
            } bg-background-light dark:text-white dark:bg-background-dark p-2 mx-4 rounded-xl `}
          >
            {' '}
            {data.orders}
          </span>
          عدد
        </div>
        {data.orders > 1 && (
          <p className='mt-3 mr-1 dark:text-white'>
            لطفا سریعتر{' '}
            <Link
              to={'/orders'}
              className={`${
                data.orders > 1 && 'animate-pulse'
              } text-bitcoin-light font-bold cursor-pointer drop-shadow-sm`}
            >
              رسیدگی
            </Link>{' '}
            کنید
          </p>
        )}
      </DashboardBox>
    </div>
  )
}

export default Orders
