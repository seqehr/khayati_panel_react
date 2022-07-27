import DashboardBox from '../DashboardBox'

// Icons
import { HiShoppingCart } from 'react-icons/hi'
// hooks
import useDashboard from '../../../hooks/useDashboard'
const Orders = () => {
  const { data } = useDashboard()
  return (
    <div>
      <DashboardBox extraClasses='mb-10'>
        <div className={` flex items-center `}>
          <HiShoppingCart
            className={`${data.orders > 1 && 'animate-bounce'}
             text-bitcoin-light text-3xl ml-2  `}
          />
          تعداد سفارشات :{' '}
          <span
            className={`${data.orders > 4 && 'text-red-light'} ${
              data.orders > 1 && 'animate-pulse'
            } bg-background-light dark:bg-background-light p-2 mx-4 rounded-xl `}
          >
            {' '}
            {data.orders}
          </span>
          عدد
        </div>
        {data.orders > 1 && (
          <p className='mt-3 mr-1'>
            لطفا سریعتر{' '}
            <span
              className={`${
                data.orders > 1 && 'animate-pulse'
              } text-bitcoin-light font-bold cursor-pointer drop-shadow-sm`}
            >
              رسیدگی
            </span>{' '}
            کنید
          </p>
        )}
      </DashboardBox>
    </div>
  )
}

export default Orders
