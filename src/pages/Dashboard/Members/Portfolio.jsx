// Hooks
import useDashboard from '../../../hooks/useDashboard'

// Components
import DashboardBox from '../DashboardBox'
import DashboardBoxHead from '../DashboardBoxHead'
import PortfolioItem from './PortfolioItem'

// Icons
import { useEffect, useState } from 'react'
// services
import { ListMembersService } from '../../../services/MemberServices'
import { AiOutlineReload } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Portfolio = (props) => {
  const { data } = useDashboard()
  const [listMembers, setListMembers] = useState([])

  useEffect(() => {
    // get  members
    ListMembersService().then((res) => {
      setListMembers(res.data.data)
    })
  }, [])
  return (
    <DashboardBox extraClasses='mb-10'>
      <div className='flex mb-5 justify-between'>
        {' '}
        <DashboardBoxHead text={`کاربران جدید `} />
        <p className='text-sm my-auto dark:text-white'>
          تعداد کل کاربران{' '}
          <span className='text-green-light'>( {data.users}نفر)</span>
        </p>
      </div>

      {/* —————————— C R Y P T O E S —————————— */}
      <div dir='ltr'>
        <ul className='flex flex-col gap-4'>
          {listMembers.slice(0, 6).map((i) => (
            <PortfolioItem name={i.name} phone={i.phone} />
          ))}
        </ul>
        <Link
          to={'/members'}
          className='text-sm mt-5 flex justify-center cursor-pointer hover:drop-shadow-lg ease-in-out duration-300 text-white hover:bg-binance-dark dark:hover:bg-bitcoin-light  dark:bg-bitcoin-dark bg-bitcoin-light rounded-xl p-2'
        >
          نمایش تمام کاربران
          <AiOutlineReload className='ml-2 text-lg' />
        </Link>
      </div>
    </DashboardBox>
  )
}

export default Portfolio
