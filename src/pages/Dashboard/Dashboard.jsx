import React from 'react'
// Components
import Whatchlist from './Watchlist/Watchlist'
import Statistics from './Statistics/Statistics'
import Members from './Members/Portfolio'

// CSS
import style from './Dashboard.module.scss'
import ContentStatistics from './ContentStatistics/ContentStatistics'
import Orders from './Orders/Orders'

const Dashboard = (props) => {
  return (
    <div className={`${style.dashboard}`}>
      {/* One Side */}
      <div className='flex flex-col gap-6 flex-2'>
        <ContentStatistics />

        <Statistics />
      </div>

      {/* Other Side */}
      <div>
        <Orders />
        <Members />
      </div>
    </div>
  )
}

export default Dashboard
