import React from 'react'
// Components
import Whatchlist from './Watchlist/Watchlist'
import Statistics from './Statistics/Statistics'
import Members from './Members/Portfolio'
import RamUsage from './RamUsage/RamUsage'
import CpuUsage from './CpuUsage/CpuUsage'
import TotalBalance from './TotalBalance/TotalBalance'
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
        <TotalBalance />
      </div>

      {/* Other Side */}
      <div className='flex  flex-col gap-5 '>
        <Orders />
        <Members />
        {/*
        <RamUsage />
        <CpuUsage />
    */}
      </div>
    </div>
  )
}

export default Dashboard
